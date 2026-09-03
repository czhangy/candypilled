import { Setting, StatValues } from '@/lib/static/types';

// Dev builds store game data in localStorage instead of Supabase, so local
// development doesn't depend on network round-trips to a hosted database.
export const IS_DEV = process.env.NODE_ENV === 'development';

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

// Marker width for a Gen 4 same-trainer-class true-double battle (e.g.
// Twins, Young Couple, Belle & Pa), wide enough to fit two side-by-side
// trainer sprites.
export const GEN_4_TRUE_DOUBLE_WIDTH = 38;

// Marker height for a Gen 4 true-double or tag battle whose trainer-name
// label wraps to two lines.
export const GEN_4_TRUE_DOUBLE_HEIGHT = 44;
