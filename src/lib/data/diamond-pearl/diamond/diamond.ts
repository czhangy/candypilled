import { BATTLES } from '@/lib/data/diamond-pearl/battles';
import { DIAMOND_PEARL_MET_LOCATIONS } from '@/lib/data/diamond-pearl/met-locations';
import GARDENIA from '@/lib/data/diamond-pearl/splits/gardenia';
import MAYLENE from '@/lib/data/diamond-pearl/splits/maylene';
import ROARK from '@/lib/data/diamond-pearl/splits/roark';
import WAKE from '@/lib/data/diamond-pearl/splits/wake';
import { Game } from '@/lib/static/types';
import { ENCOUNTERS } from './encounters';

const DIAMOND: Game = {
    name: 'Diamond',
    logo: '/logos/diamond.png',
    generation: 4,
    // PokeAPI version-group slug: Diamond and Pearl share one version
    // group, so this must match pearl.ts exactly (unlike `version` used by
    // ../pearl/pearl.ts's GameVersion, which is per-individual-version).
    version: 'diamond-pearl',
    starters: ['turtwig', 'chimchar', 'piplup'],
    accentColor: '#89A6D9',
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
    splits: [ROARK, GARDENIA, MAYLENE, WAKE],
};

export default DIAMOND;
