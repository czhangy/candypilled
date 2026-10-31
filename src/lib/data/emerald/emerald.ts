import { VANILLA_DATA_SOURCE } from '@/lib/data/data-sources';
import { BATTLES } from '@/lib/data/emerald/battles';
import { ENCOUNTERS } from '@/lib/data/emerald/encounters';
import { LOCATIONS } from '@/lib/data/emerald/locations';
import { MET_LOCATIONS } from '@/lib/data/emerald/met-locations';
import BRAWLY from '@/lib/data/emerald/splits/brawly';
import FLANNERY from '@/lib/data/emerald/splits/flannery';
import JUAN from '@/lib/data/emerald/splits/juan';
import NORMAN from '@/lib/data/emerald/splits/norman';
import ROXANNE from '@/lib/data/emerald/splits/roxanne';
import TATE_AND_LIZA from '@/lib/data/emerald/splits/tate-and-liza';
import WALLACE from '@/lib/data/emerald/splits/wallace';
import WATTSON from '@/lib/data/emerald/splits/wattson';
import WINONA from '@/lib/data/emerald/splits/winona';
import {
    BadgeAssetFolder,
    GameVersionGroup,
    TrainerAssetFolder,
} from '@/lib/static/enums';
import { Game } from '@/lib/static/types';

const EMERALD: Game = {
    name: 'Emerald',
    logo: '/logos/emerald.png',
    generation: 3,
    version: GameVersionGroup.Emerald,
    dataSource: VANILLA_DATA_SOURCE,
    badgeAssetFolder: BadgeAssetFolder.Emerald,
    trainerAssetFolder: TrainerAssetFolder.Emerald,
    genders: {
        male: '/trainers/emerald/brendan.png',
        female: '/trainers/emerald/may.png',
    },
    locations: LOCATIONS,
    starters: ['treecko', 'torchic', 'mudkip'],
    accentColor: '#009652',
    encounters: ENCOUNTERS,
    battles: BATTLES,
    metLocationById: MET_LOCATIONS,
    resources: [
        {
            text: 'Gen 3 AI',
            description: 'Gen 3 AI documentation',
            url: 'https://docs.google.com/document/u/0/d/13E61Jj4KwhIy3ZKgLjPY-_uWKWklfBR_zUlhZHUZqik/mobilebasic',
        },
    ],
    // Verified against Bulbapedia: Emerald's intro is the same
    // moving-truck arrival at Littleroot as Ruby/Sapphire's.
    wipeMessages: ['Truck.'],
    splits: [
        ROXANNE,
        BRAWLY,
        WATTSON,
        FLANNERY,
        NORMAN,
        WINONA,
        TATE_AND_LIZA,
        JUAN,
        WALLACE,
    ],
};

export default EMERALD;
