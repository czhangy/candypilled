import PLATINUM from '@/lib/games/platinum';
import { Game, Setting, StatValues } from '@/lib/static/types';

export const GAMES: Game[] = [PLATINUM];

export const SETTINGS: Setting[] = [
    {
        id: 'hide-dupes',
        title: 'Hide Dupes',
        description:
            'Remove dupes from encounter tables, rescaling encounter rates to 100%.',
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
