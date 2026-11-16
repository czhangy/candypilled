import {
    DropdownOption,
    LineSide,
    Setting,
    StatValues,
} from '@/lib/static/types';

export const SETTINGS: Setting[] = [
    {
        id: 'disable-trade-evos',
        title: 'Disable Trade Evolutions',
    },
    {
        id: 'hide-dangerous',
        title: 'Hide Dangerous Moves/Abilities',
    },
    {
        id: 'show-legendaries',
        title: 'Show Legendaries',
    },
];

export const MIN_LEVEL = 1;
export const MAX_LEVEL = 100;
export const MIN_IV = 0;
export const MAX_IV = 31;

// The major status conditions a Pokémon can have, as dropdown options keyed
// by their @smogon/calc status id ('' for none).
export const STATUS_OPTIONS: DropdownOption[] = [
    { label: 'Healthy', value: '' },
    { label: 'Burn', value: 'brn' },
    { label: 'Freeze', value: 'frz' },
    { label: 'Paralysis', value: 'par' },
    { label: 'Poison', value: 'psn' },
    { label: 'Badly Poisoned', value: 'tox' },
    { label: 'Sleep', value: 'slp' },
];

// Both sides of a line builder battle, player first.
export const LINE_SIDES: LineSide[] = ['player', 'trainer'];

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

// Marker width for a Gen 3 same-trainer-class true-double battle (e.g.
// Twins), wide enough to fit two side-by-side trainer sprites -- 2x Gen 3's
// default marker width.
export const GEN_3_TRUE_DOUBLE_WIDTH = 38;

// Marker height for a Gen 3 true-double or tag battle whose trainer-name
// label wraps to two lines.
export const GEN_3_TRUE_DOUBLE_HEIGHT = 42;
