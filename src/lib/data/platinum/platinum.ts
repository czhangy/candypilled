import { VANILLA_DATA_SOURCE } from '@/lib/data/data-sources';
import {
    BadgeAssetFolder,
    GameVersionGroup,
    TrainerAssetFolder,
} from '@/lib/static/enums';
import { Game } from '@/lib/static/types';
import { BATTLES } from './battles';
import { ENCOUNTERS } from './encounters';
import { MET_LOCATIONS } from './met-locations';
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
    version: GameVersionGroup.Platinum,
    dataSource: VANILLA_DATA_SOURCE,
    badgeAssetFolder: BadgeAssetFolder.Sinnoh,
    trainerAssetFolder: TrainerAssetFolder.Platinum,
    starters: ['turtwig', 'chimchar', 'piplup'],
    accentColor: '#FFD500',
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
