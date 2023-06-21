// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SuiAddress, SuiObjectResponse } from '@mysten/sui.js';
import { fetchKiosk, getOwnedKiosks } from '@mysten/kiosk';
import { useQuery } from '@tanstack/react-query';
import { type KioskItem } from '@mysten/kiosk';

import { useRpcClient } from '../api/RpcClientContext';
import { useGetOwnedObjects } from './useGetOwnedObjects';

export type SuiKioskObject = SuiObjectResponse & { kiosk: KioskItem };

const getKioskId = (obj: SuiObjectResponse) =>
	obj.data?.content &&
	'fields' in obj.data.content &&
	(obj.data.content.fields.for ?? obj.data.content.fields.kiosk);

// OriginByte module for mainnet (we only support mainnet)
export const ORIGINBYTE_KIOSK_MODULE =
	'0x95a441d389b07437d00dd07e0b6f05f513d7659b13fd7c5d3923c7d9d847199b::ob_kiosk' as const;
export const ORIGINBYTE_KIOSK_OWNER_TOKEN = `${ORIGINBYTE_KIOSK_MODULE}::OwnerToken`;

export function useGetOriginByteKioskContents(
	address?: SuiAddress | null,
	disableOriginByteKiosk?: boolean,
) {
	const rpc = useRpcClient();
	const { data } = useGetOwnedObjects(address, {
		MatchAny: [...(!disableOriginByteKiosk ? [{ StructType: ORIGINBYTE_KIOSK_OWNER_TOKEN }] : [])],
	});
	// find list of kiosk IDs owned by address
	const kioskIds = data?.pages.flatMap((page) => page.data).map((obj) => getKioskId(obj)) ?? [];

	return useQuery({
		queryKey: ['originbyte-kiosk', address, kioskIds],
		queryFn: async () => {
			// fetch the user's kiosks
			const ownedKiosks = await rpc.multiGetObjects({
				ids: kioskIds,
				options: {
					showContent: true,
				},
			});

			// find object IDs within a kiosk
			const kioskObjectIds = await Promise.all(
				ownedKiosks.map(async (kiosk) => {
					if (!kiosk.data?.objectId) return [];
					const objects = await rpc.getDynamicFields({
						parentId: kiosk.data.objectId,
					});
					return objects.data.map((obj) => obj.objectId);
				}),
			);

			// fetch the contents of the objects within a kiosk
			const kioskContent = await rpc.multiGetObjects({
				ids: kioskObjectIds.flat(),
				options: {
					showDisplay: true,
					showType: true,
				},
			});

			return kioskContent;
		},
	});
}

export function useGetSuiKioskContents(address?: SuiAddress | null) {
	const rpc = useRpcClient();

	return useQuery({
		// eslint-disable-next-line @tanstack/query/exhaustive-deps
		queryKey: ['kiosk-contents', address],
		queryFn: async () => {
			const ownedKiosks = await getOwnedKiosks(rpc, address!);
			const kioskContents = await Promise.all(
				ownedKiosks.kioskIds.map(async (id) => {
					return fetchKiosk(rpc, id, { limit: 1000 }, {});
				}),
			);
			const items = kioskContents.flatMap((k) => k.data.items);
			const ids = items.map((item) => item.objectId);

			// fetch the contents of the objects within a kiosk
			const kioskContent = await rpc.multiGetObjects({
				ids,
				options: {
					showContent: true,
					showDisplay: true,
					showType: true,
				},
			});

			return kioskContent.map((obj) => {
				const kioskItem = items.find((item) => item.objectId === obj.data?.objectId) ?? {};
				return { ...obj, kiosk: { ...kioskItem } } as SuiKioskObject;
			});
		},
	});
}

export function useGetKioskContents(address?: SuiAddress | null, disableOriginByteKiosk?: boolean) {
	const { data: obKioskContents, isLoading: obKioskLoading } = useGetOriginByteKioskContents(
		address,
		disableOriginByteKiosk,
	);
	const { data: suiKioskContents, isLoading: suiKioskLoading } = useGetSuiKioskContents(address!);

	return {
		data: {
			all: [...(suiKioskContents ?? []), ...(obKioskContents ?? [])],
			kiosks: {
				sui: suiKioskContents ?? [],
				originByte: obKioskContents ?? [],
			},
		},
		isLoading: obKioskLoading || suiKioskLoading,
	};
}
