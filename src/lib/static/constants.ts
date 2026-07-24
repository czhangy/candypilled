import { Setting, StatValues } from '@/lib/static/types';

// The location name recorded for a starter caught as its own encounter
// (the "Starter As Separate Encounter" setting), rather than at the
// game's actual starting route.
export const STARTER_LOCATION_NAME = 'Starter';

export const SETTINGS: Setting[] = [
    {
        id: 'hide-dupes',
        title: 'Hide Dupes',
    },
    {
        id: 'disable-trade-evos',
        title: 'Disable Trade Evolutions',
    },
    {
        id: 'hide-evs',
        title: 'Hide EVs',
    },
    {
        id: 'separate-starter-encounter',
        title: 'Starter As Separate Encounter',
    },
    {
        id: 'highlight-dangerous',
        title: 'Highlight Dangerous Moves/Abilities',
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

// Trainer classes whose sprite is keyed by trainer name, not class.
export const CLASSES_SLUGGED_BY_NAME = [
    'PKMN Trainer',
    'Leader',
    'Elite Four',
    'Champion',
    'Commander',
];
