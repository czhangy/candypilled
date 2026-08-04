import { BATTLES } from '@/lib/data/diamond-pearl/battles';
import { DIAMOND_PEARL_MET_LOCATIONS } from '@/lib/data/diamond-pearl/met-locations';
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
    wipeMessages: [],
    splits: [],
};

export default DIAMOND;
