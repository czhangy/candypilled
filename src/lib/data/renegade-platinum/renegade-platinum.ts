import { RENEGADE_PLATINUM_DATA_SOURCE } from '@/lib/data/data-sources';
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

// Pokémon and move overrides are complete; encounters/locations/battles/
// splits are authored incrementally, one area at a time.
const RENEGADE_PLATINUM: Game = {
    name: 'Renegade Platinum',
    logo: '/logos/renegade-platinum.png',
    generation: 4,
    version: GameVersionGroup.RenegadePlatinum,
    dataSource: RENEGADE_PLATINUM_DATA_SOURCE,
    // Reuses Platinum's shared Sinnoh badges and trainer sprites (verified
    // byte-identical) rather than duplicating them under its own folder.
    badgeAssetFolder: BadgeAssetFolder.Sinnoh,
    trainerAssetFolder: TrainerAssetFolder.Platinum,
    // Renegade Platinum mostly reuses HeartGold/SoulSilver's Pokémon
    // sprites rather than Platinum's own — a handful of species (see their
    // per-species `sprites` overrides in pokemon-overrides.json) keep
    // Platinum's sprite instead.
    pokemonAssetFolder: GameVersionGroup.HeartGoldSoulSilver,
    // Reuses Platinum's Lucas/Dawn trainer sprites as the protagonist
    // options.
    genders: {
        male: '/trainers/platinum/lucas.png',
        female: '/trainers/platinum/dawn.png',
    },
    // Confirmed reuse of Platinum's starters (per explicit direction, not
    // inferred).
    starters: ['turtwig', 'chimchar', 'piplup'],
    // Confirmed reuse of Platinum's accent color and wipe messages (per
    // explicit direction, not inferred).
    accentColor: '#FFD500',
    encounters: ENCOUNTERS,
    battles: BATTLES,
    metLocationById: MET_LOCATIONS,
    resources: [
        {
            text: 'Download',
            description: 'Download link for Renegade Platinum',
            url: 'https://drive.google.com/drive/folders/1gM7nse4qGKJMkcvlQwf5wPVbXwPcC4XV',
        },
        {
            text: 'Wiki',
            description: 'Community-maintained wiki for Renegade Platinum',
            url: 'https://fredericdlugi.github.io/platinum-renegade-wiki/',
        },
        {
            text: 'Gen IV AI',
            description: 'Gen IV AI documentation',
            url: 'https://pokemow.com/Gen4/TrainerAI/',
        },
        {
            text: 'Kalaay Patch',
            description:
                'QoL patch for Renegade Platinum based on the Drayano Gauntlet',
            url: 'https://drive.proton.me/urls/ZEQPKY2QTR#goT6p4N6KKRh',
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

export default RENEGADE_PLATINUM;
