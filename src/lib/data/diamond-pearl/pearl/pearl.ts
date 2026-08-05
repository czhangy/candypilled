import { BATTLES } from '@/lib/data/diamond-pearl/battles';
import { DIAMOND_PEARL_MET_LOCATIONS } from '@/lib/data/diamond-pearl/met-locations';
import BYRON from '@/lib/data/diamond-pearl/splits/byron';
import CANDICE from '@/lib/data/diamond-pearl/splits/candice';
import CYNTHIA from '@/lib/data/diamond-pearl/splits/cynthia';
import FANTINA from '@/lib/data/diamond-pearl/splits/fantina';
import GARDENIA from '@/lib/data/diamond-pearl/splits/gardenia';
import MAYLENE from '@/lib/data/diamond-pearl/splits/maylene';
import ROARK from '@/lib/data/diamond-pearl/splits/roark';
import VOLKNER from '@/lib/data/diamond-pearl/splits/volkner';
import WAKE from '@/lib/data/diamond-pearl/splits/wake';
import { Game } from '@/lib/static/types';
import { ENCOUNTERS } from './encounters';

const PEARL: Game = {
    name: 'Pearl',
    logo: '/logos/pearl.png',
    generation: 4,
    // PokeAPI version-group slug: Diamond and Pearl share one version
    // group, so this must match diamond.ts exactly.
    version: 'diamond-pearl',
    starters: ['turtwig', 'chimchar', 'piplup'],
    accentColor: '#E0A0C0',
    encounters: ENCOUNTERS,
    battles: BATTLES,
    metLocationById: DIAMOND_PEARL_MET_LOCATIONS,
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
        MAYLENE,
        WAKE,
        FANTINA,
        BYRON,
        CANDICE,
        VOLKNER,
        CYNTHIA,
    ],
};

export default PEARL;
