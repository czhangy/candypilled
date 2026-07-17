import PLATINUM from '@/lib/games/platinum';
import { Game, Setting, StatValues } from '@/lib/static/types';

export const GAMES: Game[] = [PLATINUM];

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
];

export const STAT_FIELDS: { key: keyof StatValues; label: string }[] = [
    { key: 'hp', label: 'HP' },
    { key: 'atk', label: 'Attack' },
    { key: 'def', label: 'Defense' },
    { key: 'spa', label: 'Sp. Atk' },
    { key: 'spd', label: 'Sp. Def' },
    { key: 'spe', label: 'Speed' },
];
