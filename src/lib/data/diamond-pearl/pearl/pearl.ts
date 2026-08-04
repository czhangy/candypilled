import { BATTLES } from '@/lib/data/diamond-pearl/battles';
import { DIAMOND_PEARL_MET_LOCATIONS } from '@/lib/data/diamond-pearl/met-locations';
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
    wipeMessages: [],
    splits: [],
};

export default PEARL;
