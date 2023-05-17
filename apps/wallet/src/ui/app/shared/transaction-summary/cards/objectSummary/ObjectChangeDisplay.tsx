// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { formatAddress, type ObjectId } from '@mysten/sui.js';

import { Text } from '../../../text';
import ExplorerLink from '_src/ui/app/components/explorer-link';
import { ExplorerLinkType } from '_src/ui/app/components/explorer-link/ExplorerLinkType';
import { NftImage } from '_src/ui/app/components/nft-display/NftImage';

export function ObjectChangeDisplay({
    display,
    objectId,
}: {
    display: Record<string, string>;
    objectId: ObjectId;
}) {
    return (
        <div className="relative w-32 cursor-pointer whitespace-nowrap">
            <NftImage
                size="lg"
                animateHover
                name={display?.name ?? ''}
                borderRadius="xl"
                src={display?.image_url ?? ''}
            />
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 justify-center rounded-lg bg-white/60 px-2 py-1">
                <ExplorerLink
                    type={ExplorerLinkType.object}
                    objectID={objectId}
                    className="text-hero-dark no-underline"
                >
                    <Text variant="pBodySmall" truncate mono>
                        {formatAddress(objectId)}
                    </Text>
                </ExplorerLink>
            </div>
        </div>
    );
}
