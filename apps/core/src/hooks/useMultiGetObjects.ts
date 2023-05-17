// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { ObjectId, SuiObjectDataOptions } from '@mysten/sui.js';
import { useRpcClient } from '../api/RpcClientContext';
import { useQuery } from '@tanstack/react-query';
import { chunkArray } from '../utils/chunkArray';

export function useMultiGetObjects(
    ids: ObjectId[],
    options: SuiObjectDataOptions = { showContent: true, showOwner: true }
) {
    const rpc = useRpcClient();
    return useQuery({
        queryKey: ['multiGetObjects', ids],
        queryFn: async () => {
            if (!ids) return [];
            const responses = await Promise.all(
                chunkArray(ids).map((chunk) =>
                    rpc.multiGetObjects({
                        ids: chunk,
                        options,
                    })
                )
            );
            return responses.flat();
        },
    });
}
