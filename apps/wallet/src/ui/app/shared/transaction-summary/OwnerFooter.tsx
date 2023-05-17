// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import {
    formatAddress,
    isValidSuiAddress,
    type SuiAddress,
} from '@mysten/sui.js';
import { useState } from 'react';

import { Text } from '../text';
import { SummaryCardFooter } from './Card';
import ExplorerLink from '_src/ui/app/components/explorer-link';
import { ExplorerLinkType } from '_src/ui/app/components/explorer-link/ExplorerLinkType';
import { useActiveAddress } from '_src/ui/app/hooks';

export function OwnerFooter({
    owner,
    ownerType,
}: {
    owner: SuiAddress | string;
    ownerType?: string;
}) {
    const address = useActiveAddress();
    const isOwner = address === owner;
    const [showAddress, setShowAddress] = useState(false);

    const display =
        ownerType === 'Shared'
            ? 'Shared'
            : isValidSuiAddress(owner)
            ? isOwner && !showAddress
                ? 'You'
                : formatAddress(owner)
            : owner;

    return (
        <SummaryCardFooter>
            <Text variant="pBody" weight="medium" color="steel-dark">
                Owner
            </Text>
            <div className="flex justify-end">
                {isOwner ? (
                    <div
                        className="cursor-pointer"
                        onClick={() => setShowAddress((prev) => !prev)}
                    >
                        <Text variant="body" weight="medium" color="hero-dark">
                            {display}
                        </Text>
                    </div>
                ) : (
                    <ExplorerLink
                        type={ExplorerLinkType.address}
                        title={owner}
                        address={owner}
                        className="text-hero-dark text-body font-medium no-underline font-mono"
                    >
                        {display}
                    </ExplorerLink>
                )}
            </div>
        </SummaryCardFooter>
    );
}
