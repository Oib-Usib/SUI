// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SuiObjectChangeWithDisplay } from './getObjectChangeSummary';

export const groupByOwner = (changes: SuiObjectChangeWithDisplay[]) => {
    const mapByOwner = {};
    return changes.reduce((acc, change) => {
        let owner = '';
        if (!('owner' in change)) return acc;
        if (change.owner === 'Immutable') return acc;
        if ('AddressOwner' in change.owner) owner = change.owner.AddressOwner;
        if ('ObjectOwner' in change.owner) owner = change.owner.ObjectOwner;
        if ('Shared' in change.owner) owner = change.objectId;
        acc[owner] = (acc[owner] ?? []).concat(change);
        return acc;
    }, mapByOwner as Record<string, SuiObjectChangeWithDisplay[]>);
};
