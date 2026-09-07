import { VANILLA_DATA_SOURCE } from '@/lib/data/data-sources';
import { BATTLES } from '@/lib/data/ruby-sapphire/battles';
import AQUA_HIDEOUT from '@/lib/data/ruby-sapphire/locations/aqua-hideout';
import { MET_LOCATIONS } from '@/lib/data/ruby-sapphire/met-locations';
import BRAWLY from '@/lib/data/ruby-sapphire/splits/brawly';
import FLANNERY from '@/lib/data/ruby-sapphire/splits/flannery';
import NORMAN from '@/lib/data/ruby-sapphire/splits/norman';
import ROXANNE from '@/lib/data/ruby-sapphire/splits/roxanne';
import STEVEN from '@/lib/data/ruby-sapphire/splits/steven';
import getTateAndLiza from '@/lib/data/ruby-sapphire/splits/tate-and-liza';
import WALLACE from '@/lib/data/ruby-sapphire/splits/wallace';
import WATTSON from '@/lib/data/ruby-sapphire/splits/wattson';
import getWinona from '@/lib/data/ruby-sapphire/splits/winona';
import {
    BadgeAssetFolder,
    GameVersionGroup,
    TrainerAssetFolder,
} from '@/lib/static/enums';
import { Game } from '@/lib/static/types';
import { ENCOUNTERS } from './encounters';

const SAPPHIRE: Game = {
    name: 'Sapphire',
    logo: '/logos/sapphire.png',
    generation: 3,
    version: GameVersionGroup.RubySapphire,
    dataSource: VANILLA_DATA_SOURCE,
    badgeAssetFolder: BadgeAssetFolder.RubySapphire,
    trainerAssetFolder: TrainerAssetFolder.RubySapphire,
    genders: {
        male: '/trainers/ruby-sapphire/brendan.png',
        female: '/trainers/ruby-sapphire/may.png',
    },
    starters: ['treecko', 'torchic', 'mudkip'],
    accentColor: '#3E6FB0',
    encounters: ENCOUNTERS,
    battles: BATTLES,
    // Index 66 is version-dependent ("Magma Hideout" in Ruby, "Aqua
    // Hideout" in Sapphire) -- see ONBOARDING.md.
    metLocationById: { ...MET_LOCATIONS, 66: 'Aqua Hideout' },
    wipeMessages: ['Truck.'],
    resources: [
        {
            text: 'Gen 3 AI',
            description: 'Gen 3 AI documentation',
            url: 'https://docs.google.com/document/d/1-WMcLh7E5OBSCjl4fDTMdVD9-9xsLYCVk2RgI-atcUk/edit?tab=t.0',
        },
    ],
    splits: [
        ROXANNE,
        BRAWLY,
        WATTSON,
        FLANNERY,
        NORMAN,
        getWinona(AQUA_HIDEOUT),
        getTateAndLiza(AQUA_HIDEOUT),
        WALLACE,
        STEVEN,
    ],
};

export default SAPPHIRE;
