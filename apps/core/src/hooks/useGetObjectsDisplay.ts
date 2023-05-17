// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useMemo } from 'react';
import { useMultiGetObjects } from './useMultiGetObjects';
import { DisplayFieldsResponse, ObjectId } from '@mysten/sui.js';
import { hasDisplayData } from '../utils/hasDisplayData';

export function useGetObjectsDisplay(objectIds: ObjectId[] = []) {
    const { data: objectDisplayData } = useMultiGetObjects(objectIds);

    const lookup = useMemo(() => {
        const lookup: Map<ObjectId, DisplayFieldsResponse> = new Map();
        return objectDisplayData?.filter(hasDisplayData).reduce((acc, curr) => {
            if (curr.data?.objectId) {
                acc.set(
                    curr.data.objectId,
                    curr.data.display as DisplayFieldsResponse
                );
            }
            return acc;
        }, lookup);
    }, [objectDisplayData]);

    return lookup;
}
