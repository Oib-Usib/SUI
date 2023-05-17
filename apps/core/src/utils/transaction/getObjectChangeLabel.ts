import { SuiObjectChangeTypes } from '@mysten/sui.js';

export enum ObjectChangeLabels {
    created = 'Create',
    mutated = 'Update',
    transferred = 'Transfer',
    published = 'Publish',
    deleted = 'Delete',
    wrapped = 'Wrap',
}

export function getObjectChangeLabel(type: SuiObjectChangeTypes) {
    return ObjectChangeLabels[type];
}
