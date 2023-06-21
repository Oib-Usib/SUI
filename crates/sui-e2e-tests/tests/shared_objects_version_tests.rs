// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use move_core_types::account_address::AccountAddress;
use std::path::PathBuf;
use sui_json_rpc_types::SuiTransactionBlockEffectsAPI;
use sui_json_rpc_types::{SuiExecutionStatus, SuiTransactionBlockEffects};
use sui_macros::*;
use sui_types::base_types::{ObjectID, ObjectRef, SequenceNumber};
use sui_types::object::{Owner, OBJECT_START_VERSION};
use sui_types::transaction::{CallArg, ObjectArg};
use sui_types::SUI_FRAMEWORK_ADDRESS;
use test_utils::network::{TestCluster, TestClusterBuilder};

#[sim_test]
async fn fresh_shared_object_initial_version_matches_current() {
    let env = TestEnvironment::new().await;
    let ((_, curr, _), owner) = env.create_shared_counter().await;
    assert!(is_shared_at(&owner, curr));
}

#[sim_test]
async fn objects_transitioning_to_shared_remember_their_previous_version() {
    let env = TestEnvironment::new().await;
    let (counter, _) = env.create_counter().await;

    let (counter, _) = env.increment_owned_counter(counter).await;
    assert_ne!(counter.1, OBJECT_START_VERSION);

    let error = env.share_counter(counter).await.unwrap_err();
    assert_move_abort_error(
        &error,
        &SUI_FRAMEWORK_ADDRESS,
        "transfer",
        0, /* ESharedNonNewObject */
    );
}

#[sim_test]
async fn shared_object_owner_doesnt_change_on_write() {
    let env = TestEnvironment::new().await;
    let (counter, _) = env.create_counter().await;

    let (inc_counter, _) = env.increment_owned_counter(counter).await;
    let error = env.share_counter(inc_counter).await.unwrap_err();
    assert_move_abort_error(
        &error,
        &SUI_FRAMEWORK_ADDRESS,
        "transfer",
        0, /* ESharedNonNewObject */
    );
}

#[sim_test]
async fn initial_shared_version_mismatch_start_version() {
    let env = TestEnvironment::new().await;
    let (counter, _) = env.create_counter().await;

    let (counter, _) = env.increment_owned_counter(counter).await;
    let error = env.share_counter(counter).await.unwrap_err();
    assert_move_abort_error(
        &error,
        &SUI_FRAMEWORK_ADDRESS,
        "transfer",
        0, /* ESharedNonNewObject */
    );
}

#[sim_test]
async fn initial_shared_version_mismatch_current_version() {
    let env = TestEnvironment::new().await;
    let (counter, _) = env.create_counter().await;

    let error = env.share_counter(counter).await.unwrap_err();
    assert_move_abort_error(
        &error,
        &SUI_FRAMEWORK_ADDRESS,
        "transfer",
        0, /* ESharedNonNewObject */
    );
}

#[sim_test]
async fn shared_object_not_found() {
    let env = TestEnvironment::new().await;
    let nonexistent_id = ObjectID::random();
    let initial_shared_seq = SequenceNumber::from_u64(42);
    assert!(env
        .increment_shared_counter(nonexistent_id, initial_shared_seq)
        .await
        .is_err());
}

fn is_shared_at(owner: &Owner, version: SequenceNumber) -> bool {
    if let Owner::Shared {
        initial_shared_version,
    } = owner
    {
        &version == initial_shared_version
    } else {
        false
    }
}

struct TestEnvironment {
    test_cluster: TestCluster,
    move_package: ObjectID,
}

impl TestEnvironment {
    async fn new() -> Self {
        let test_cluster = TestClusterBuilder::new().build().await;

        let move_package = publish_move_package(&test_cluster).await.0;

        Self {
            test_cluster,
            move_package,
        }
    }

    async fn move_call(
        &self,
        function: &'static str,
        arguments: Vec<CallArg>,
    ) -> anyhow::Result<SuiTransactionBlockEffects> {
        let transaction = self
            .test_cluster
            .test_transaction_builder()
            .await
            .move_call(
                self.move_package,
                "shared_objects_version",
                function,
                arguments,
            )
            .build();
        let transaction = self.test_cluster.wallet.sign_transaction(&transaction);
        Ok(self
            .test_cluster
            .wallet
            .execute_transaction_may_fail(transaction)
            .await?
            .effects
            .unwrap())
    }

    async fn create_counter(&self) -> (ObjectRef, Owner) {
        let fx = self.move_call("create_counter", vec![]).await.unwrap();

        let created = fx
            .created()
            .iter()
            .find(|owner_ref| matches!(owner_ref.owner, Owner::AddressOwner(_)))
            .expect("Owned object created");
        (created.reference.to_object_ref(), created.owner)
    }

    async fn create_shared_counter(&self) -> (ObjectRef, Owner) {
        let fx = self
            .move_call("create_shared_counter", vec![])
            .await
            .unwrap();

        let created = fx
            .created()
            .iter()
            .find(|owner_ref| owner_ref.owner.is_shared())
            .expect("Shared object created");
        (created.reference.to_object_ref(), created.owner)
    }

    async fn share_counter(&self, counter: ObjectRef) -> Result<(ObjectRef, Owner), String> {
        let fx = self
            .move_call(
                "share_counter",
                vec![CallArg::Object(ObjectArg::ImmOrOwnedObject(counter))],
            )
            .await
            .unwrap();

        if let SuiExecutionStatus::Failure { error } = fx.status() {
            return Err(error.clone());
        }

        let mutated = fx
            .mutated()
            .iter()
            .find(|owner_ref| owner_ref.reference.object_id == counter.0)
            .expect("Counter mutated");
        Ok((mutated.reference.to_object_ref(), mutated.owner))
    }

    async fn increment_owned_counter(&self, counter: ObjectRef) -> (ObjectRef, Owner) {
        let fx = self
            .move_call(
                "increment_counter",
                vec![CallArg::Object(ObjectArg::ImmOrOwnedObject(counter))],
            )
            .await
            .unwrap();

        let result = fx
            .mutated()
            .iter()
            .find(|owner_ref| owner_ref.reference.object_id == counter.0)
            .expect("Counter modified");
        (result.reference.to_object_ref(), result.owner)
    }

    async fn increment_shared_counter(
        &self,
        counter: ObjectID,
        initial_shared_version: SequenceNumber,
    ) -> anyhow::Result<(ObjectRef, Owner)> {
        let fx = self
            .move_call(
                "increment_counter",
                vec![CallArg::Object(ObjectArg::SharedObject {
                    id: counter,
                    initial_shared_version,
                    mutable: true,
                })],
            )
            .await?;

        let mutated = fx
            .mutated()
            .iter()
            .find(|owner_ref| owner_ref.reference.object_id == counter)
            .expect("Counter modified");
        Ok((mutated.reference.to_object_ref(), mutated.owner))
    }
}

async fn publish_move_package(test_cluster: &TestCluster) -> ObjectRef {
    let mut path = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    path.push("tests/move_test_code");
    test_cluster.wallet.publish_package(path).await
}

fn assert_move_abort_error(error: &str, package: &AccountAddress, module_name: &str, code: u64) {
    assert!(error.contains("MoveAbort"));
    assert!(error.contains(&package.to_string()));
    assert!(error.contains(module_name));
    assert!(error.contains(&code.to_string()));
}
