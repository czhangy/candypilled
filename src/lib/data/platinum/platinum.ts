import { Game } from '@/lib/static/types';
import { ENCOUNTERS } from './encounters';
import BYRON from './splits/byron';
import CANDICE from './splits/candice';
import CYNTHIA from './splits/cynthia';
import FANTINA from './splits/fantina';
import GARDENIA from './splits/gardenia';
import MAYLENE from './splits/maylene';
import ROARK from './splits/roark';
import VOLKNER from './splits/volkner';
import WAKE from './splits/wake';

const PLATINUM: Game = {
    name: 'Platinum',
    logo: '/logos/platinum.png',
    generation: 4,
    version: 'platinum',
    starters: ['turtwig', 'chimchar', 'piplup'],
    accentColor: '#FFD500',
    encounters: ENCOUNTERS,
    wipeMessages: [
        'Roark is calling.',
        'Maybe a monkey run next time.',
        'Welcome to briefcase simulator.',
        'Pick the penguin.',
        'Turtle time.',
    ],
    splits: [
        ROARK,
        GARDENIA,
        FANTINA,
        MAYLENE,
        WAKE,
        BYRON,
        CANDICE,
        VOLKNER,
        CYNTHIA,
    ],
};

export default PLATINUM;
