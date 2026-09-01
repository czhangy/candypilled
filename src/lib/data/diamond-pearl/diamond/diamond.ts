import { VANILLA_DATA_SOURCE } from '@/lib/data/data-sources';
import { BATTLES } from '@/lib/data/diamond-pearl/battles';
import { MET_LOCATIONS } from '@/lib/data/diamond-pearl/met-locations';
import BYRON from '@/lib/data/diamond-pearl/splits/byron';
import CANDICE from '@/lib/data/diamond-pearl/splits/candice';
import CYNTHIA from '@/lib/data/diamond-pearl/splits/cynthia';
import FANTINA from '@/lib/data/diamond-pearl/splits/fantina';
import GARDENIA from '@/lib/data/diamond-pearl/splits/gardenia';
import MAYLENE from '@/lib/data/diamond-pearl/splits/maylene';
import ROARK from '@/lib/data/diamond-pearl/splits/roark';
import VOLKNER from '@/lib/data/diamond-pearl/splits/volkner';
import WAKE from '@/lib/data/diamond-pearl/splits/wake';
import {
    BadgeAssetFolder,
    GameVersionGroup,
    TrainerAssetFolder,
} from '@/lib/static/enums';
import { Game } from '@/lib/static/types';
import { ENCOUNTERS } from './encounters';

const DIAMOND: Game = {
    name: 'Diamond',
    logo: '/logos/diamond.png',
    generation: 4,
    // PokeAPI version-group slug: Diamond and Pearl share one version
    // group, so this must match pearl.ts exactly (unlike `version` used by
    // ../pearl/pearl.ts's GameVersion, which is per-individual-version).
    version: GameVersionGroup.DiamondPearl,
    dataSource: VANILLA_DATA_SOURCE,
    badgeAssetFolder: BadgeAssetFolder.Sinnoh,
    // Diamond/Pearl's trainer sprites diverge from Platinum's for a
    // handful of classes (e.g. School Kid M, Skier F, Socialite), so they
    // keep their own folder rather than sharing Platinum's.
    trainerAssetFolder: TrainerAssetFolder.DiamondPearl,
    genders: {
        male: '/trainers/diamond-pearl/lucas.png',
        female: '/trainers/diamond-pearl/dawn.png',
    },
    starters: ['turtwig', 'chimchar', 'piplup'],
    accentColor: '#89A6D9',
    encounters: ENCOUNTERS,
    battles: BATTLES,
    metLocationById: MET_LOCATIONS,
    resources: [
        {
            text: 'Gen IV AI',
            description: 'Gen IV AI documentation',
            url: 'https://pokemow.com/Gen4/TrainerAI/',
        },
    ],
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

export default DIAMOND;
