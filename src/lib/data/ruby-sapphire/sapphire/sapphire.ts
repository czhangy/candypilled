import { VANILLA_DATA_SOURCE } from '@/lib/data/data-sources';
import { BATTLES } from '@/lib/data/ruby-sapphire/battles';
import { MET_LOCATIONS } from '@/lib/data/ruby-sapphire/met-locations';
import ROXANNE from '@/lib/data/ruby-sapphire/splits/roxanne';
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
    wipeMessages: [
        'Birch needed that bag more than you needed that Pokémon.',
        "Wally caught his Ralts. What's your excuse?",
        'Rock Tomb was a warning shot.',
        "Time to go 'clear' your head.",
        'Back to Littleroot.',
    ],
    splits: [ROXANNE],
};

export default SAPPHIRE;
