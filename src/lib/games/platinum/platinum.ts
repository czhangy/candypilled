import { ENCOUNTERS } from '@/lib/data/platinum/encounters';
import CRASHER_WAKE from '@/lib/games/platinum/splits/crasher-wake';
import { Game } from '@/lib/static/types';
import BYRON from './splits/byron';
import CANDICE from './splits/candice';
import CYNTHIA from './splits/cynthia';
import FANTINA from './splits/fantina';
import GALACTIC from './splits/galactic';
import GARDENIA from './splits/gardenia';
import MAYLENE from './splits/maylene';
import ROARK from './splits/roark';
import VOLKNER from './splits/volkner';

const PLATINUM: Game = {
    name: 'Platinum',
    logo: '/logos/platinum.png',
    generation: 4,
    version: 'platinum',
    starters: ['Turtwig', 'Chimchar', 'Piplup'],
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
        CRASHER_WAKE,
        BYRON,
        CANDICE,
        GALACTIC,
        VOLKNER,
        CYNTHIA,
    ],
};

export default PLATINUM;
