import { ENCOUNTERS } from '@/lib/data/platinum/encounters';
import CRASHER_WAKE from '@/lib/games/platinum/splits/crasher-wake';
import { Game } from '@/lib/static/types';
import BYRON from './splits/byron';
import CANDICE from './splits/candice';
import CYNTHIA from './splits/cynthia';
import DISTORTION_WORLD from './splits/distortion-world';
import FANTINA from './splits/fantina';
import GARDENIA from './splits/gardenia';
import MAYLENE from './splits/maylene';
import ROARK from './splits/roark';
import VOLKNER from './splits/volkner';

const PLATINUM: Game = {
    name: 'Platinum',
    logo: '/logos/platinum.png',
    generation: 4,
    starters: ['Turtwig', 'Chimchar', 'Piplup'],
    accentColor: '#FFD500',
    encounters: ENCOUNTERS,
    splits: [
        ROARK,
        GARDENIA,
        FANTINA,
        MAYLENE,
        CRASHER_WAKE,
        BYRON,
        CANDICE,
        DISTORTION_WORLD,
        VOLKNER,
        CYNTHIA,
    ],
};

export default PLATINUM;
