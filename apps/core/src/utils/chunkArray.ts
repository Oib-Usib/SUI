// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

const DEFAULT_CHUNK_SIZE = 50;

export function chunkArray<T>(arr: T[] = [], chunkSize = DEFAULT_CHUNK_SIZE) {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
        arr.slice(i * chunkSize, (i + 1) * chunkSize)
    );
}
