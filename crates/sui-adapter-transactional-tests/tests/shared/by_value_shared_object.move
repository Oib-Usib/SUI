// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

// tests that shared objects can be deleted

//# init --addresses t1=0x0 t2=0x0

//# publish

module t2::o2 {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct Obj2 has key, store {
        id: UID,
    }

    struct Wrapper has key {
        id: UID,
        o2: Obj2
    }

    public entry fun create(ctx: &mut TxContext) {
        let o = Obj2 { id: object::new(ctx) };
        transfer::public_share_object(o)
    }

    public entry fun consume_o2(o2: Obj2) {
        let Obj2 { id } = o2;
        object::delete(id);
    }

    public entry fun freeze_o2(o2: Obj2) {
        transfer::freeze_object(o2);
    }

    public entry fun transfer_to_single_owner(o2: Obj2, ctx: &mut TxContext) {
        transfer::transfer(o2, tx_context::sender(ctx))
    }

    public entry fun re_share_o2(o2: Obj2) {
        transfer::public_share_object(o2)
    }

    public entry fun re_share_non_public_o2(o2: Obj2) {
        transfer::share_object(o2)
    }

    public entry fun wrap_o2(o2: Obj2, ctx: &mut TxContext) {
        transfer::transfer(Wrapper { id: object::new(ctx), o2}, tx_context::sender(ctx))
    }
}

//# publish --dependencies t2

module t1::o1 {
    use t2::o2::{Self, Obj2};

    public entry fun consume_o2(o2: Obj2) {
        o2::consume_o2(o2);
    }
}


//# run t2::o2::create

//# view-object 3,0

//# run t1::o1::consume_o2 --args object(3,0)

//# run t2::o2::create

//# view-object 6,0

//# run t2::o2::consume_o2 --args object(6,0)

//# run t2::o2::create

//# run t2::o2::freeze_o2 --args object(9,0)

//# run t2::o2::transfer_to_single_owner --args object(9,0)

//# run t2::o2::re_share_o2 --args object(9,0)

//# run t2::o2::re_share_non_public_o2 --args object(9,0)

//# run t2::o2::wrap_o2 --args object(9,0)
