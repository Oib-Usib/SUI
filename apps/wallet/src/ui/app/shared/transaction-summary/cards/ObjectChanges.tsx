// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import { Disclosure } from '@headlessui/react';
import {
    getObjectChangeLabel,
    getOwnerType,
    type ObjectChangeSummary,
    type SuiObjectChangeWithDisplay,
} from '@mysten/core';
import { ChevronDown12, ChevronRight12 } from '@mysten/icons';
import {
    SuiObjectChangeTransferred,
    formatAddress,
    is,
    type SuiObjectChangeTypes,
    SuiObjectChangePublished,
} from '@mysten/sui.js';
import cx from 'classnames';
import { useState } from 'react';

import { ExpandableList } from '../../ExpandableList';
import { Card } from '../Card';
import { OwnerFooter } from '../OwnerFooter';
import { ObjectChangeDisplay } from './objectSummary/ObjectChangeDisplay';
import ExplorerLink from '_src/ui/app/components/explorer-link';
import { ExplorerLinkType } from '_src/ui/app/components/explorer-link/ExplorerLinkType';
import { Text } from '_src/ui/app/shared/text';

function ChevronDown({ expanded }: { expanded: boolean }) {
    return expanded ? (
        <ChevronDown12 className="text-gray-45" />
    ) : (
        <ChevronRight12 className="text-gray-45" />
    );
}

export function ObjectDetail({
    change,
}: {
    change: SuiObjectChangeWithDisplay;
    ownerKey: string;
}) {
    if (
        is(change, SuiObjectChangeTransferred) ||
        is(change, SuiObjectChangePublished)
    ) {
        return null;
    }
    const [packageId, moduleName, typeName] =
        change.objectType.split('<')[0]?.split('::') || [];

    if (change.display?.data)
        return (
            <ObjectChangeDisplay
                display={change.display.data}
                objectId={change.objectId}
            />
        );
    return (
        <Disclosure>
            {({ open }) => (
                <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-2 overflow-auto cursor-pointer">
                        <Disclosure.Button className="flex items-center cursor-pointer border-none bg-transparent ouline-none p-0 gap-1 text-steel-dark hover:text-steel-darker select-none">
                            <Text variant="pBody" weight="medium">
                                Object
                            </Text>
                            {open ? (
                                <ChevronDown12 className="text-gray-45" />
                            ) : (
                                <ChevronRight12 className="text-gray-45" />
                            )}
                        </Disclosure.Button>
                        <div className="justify-self-end">
                            <ExplorerLink
                                type={ExplorerLinkType.object}
                                objectID={change.objectId}
                                className="text-hero-dark no-underline"
                            >
                                <Text
                                    variant="body"
                                    weight="medium"
                                    truncate
                                    mono
                                >
                                    {formatAddress(change.objectId)}
                                </Text>
                            </ExplorerLink>
                        </div>
                    </div>
                    <Disclosure.Panel>
                        <div className="flex flex-col gap-1">
                            <div className="grid grid-cols-2 overflow-auto relative">
                                <Text
                                    variant="pBody"
                                    weight="medium"
                                    color="steel-dark"
                                >
                                    Package
                                </Text>
                                <div className="flex justify-end">
                                    <ExplorerLink
                                        type={ExplorerLinkType.object}
                                        objectID={packageId}
                                        className="text-hero-dark text-captionSmall no-underline justify-self-end overflow-auto"
                                    >
                                        <Text
                                            variant="pBody"
                                            weight="medium"
                                            truncate
                                            mono
                                        >
                                            {packageId}
                                        </Text>
                                    </ExplorerLink>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 overflow-auto">
                                <Text
                                    variant="pBody"
                                    weight="medium"
                                    color="steel-dark"
                                >
                                    Module
                                </Text>
                                <div className="flex justify-end">
                                    <ExplorerLink
                                        type={ExplorerLinkType.object}
                                        objectID={packageId}
                                        moduleName={moduleName}
                                        className="text-hero-dark no-underline justify-self-end overflow-auto"
                                    >
                                        <Text
                                            variant="pBody"
                                            weight="medium"
                                            truncate
                                            mono
                                        >
                                            {moduleName}
                                        </Text>
                                    </ExplorerLink>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 overflow-auto">
                                <Text
                                    variant="pBody"
                                    weight="medium"
                                    color="steel-dark"
                                >
                                    Type
                                </Text>
                                <div className="flex justify-end">
                                    <ExplorerLink
                                        type={ExplorerLinkType.object}
                                        objectID={packageId}
                                        moduleName={moduleName}
                                        className="text-hero-dark no-underline justify-self-end overflow-auto"
                                    >
                                        <Text
                                            variant="pBody"
                                            weight="medium"
                                            truncate
                                            mono
                                        >
                                            {typeName}
                                        </Text>
                                    </ExplorerLink>
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}

interface ObjectChangeEntryProps {
    type: SuiObjectChangeTypes;
    changes: Record<string, SuiObjectChangeWithDisplay[]>;
}

export function ObjectChangeEntry({ changes, type }: ObjectChangeEntryProps) {
    const [expanded, setExpanded] = useState(true);

    return (
        <>
            {Object.entries(changes).map(([owner, changes]) => {
                return (
                    <Card
                        footer={
                            <OwnerFooter
                                owner={owner}
                                ownerType={getOwnerType(changes[0])}
                            />
                        }
                        key={owner}
                        heading="Changes"
                    >
                        <div
                            className={cx(
                                { 'gap-4.5': expanded },
                                'flex flex-col pb-3'
                            )}
                        >
                            <div
                                className="flex w-full flex-col gap-2 cursor-pointer"
                                onClick={() => setExpanded((prev) => !prev)}
                            >
                                <div className="flex w-full items-center gap-2">
                                    <Text
                                        variant="body"
                                        weight="semibold"
                                        color={
                                            type === 'created'
                                                ? 'success-dark'
                                                : 'steel-darker'
                                        }
                                    >
                                        {getObjectChangeLabel(type)}
                                    </Text>
                                    <div className="h-px bg-gray-40 w-full" />
                                    <ChevronDown expanded={expanded} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <ExpandableList
                                    defaultItemsToShow={5}
                                    items={
                                        expanded && Array.isArray(changes)
                                            ? changes.map((change) => (
                                                  <ObjectDetail
                                                      ownerKey={owner}
                                                      change={change}
                                                  />
                                              ))
                                            : []
                                    }
                                />
                            </div>
                        </div>
                    </Card>
                );
            })}
        </>
    );
}

export function ObjectChanges({
    changes,
}: {
    changes?: ObjectChangeSummary | null;
}) {
    if (!changes) return null;
    return (
        <>
            {Object.entries(changes).map(([type, changes]) => (
                <ObjectChangeEntry
                    key={type}
                    type={type as keyof ObjectChangeSummary}
                    changes={changes}
                />
            ))}
        </>
    );
}
