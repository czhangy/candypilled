import { Setting, StatValues } from '@/lib/static/types';

export const SETTINGS: Setting[] = [
    {
        id: 'show-dupes',
        title: 'Show Dupes',
    },
    {
        id: 'disable-trade-evos',
        title: 'Disable Trade Evolutions',
    },
    {
        id: 'use-evs',
        title: 'Use EVs',
    },
    {
        id: 'hide-dangerous',
        title: 'Hide Dangerous Moves/Abilities',
    },
    {
        id: 'show-legendaries',
        title: 'Show Legendaries',
    },
    {
        id: 'show-national-dex-data',
        title: 'Show National Dex Data',
    },
    {
        id: 'disable-switch-in-predictions',
        title: 'Disable Switch-In Predictions',
    },
];

export const MIN_LEVEL = 1;
export const MAX_LEVEL = 100;
export const MIN_IV = 0;
export const MAX_IV = 31;
export const MIN_EV = 0;
export const MAX_EV = 252;

// The number of move slots a Pokémon has.
export const MOVE_SLOT_COUNT = 4;

export const STAT_FIELDS: { key: keyof StatValues; label: string }[] = [
    { key: 'hp', label: 'HP' },
    { key: 'atk', label: 'Attack' },
    { key: 'def', label: 'Defense' },
    { key: 'spa', label: 'Sp. Atk' },
    { key: 'spd', label: 'Sp. Def' },
    { key: 'spe', label: 'Speed' },
];
