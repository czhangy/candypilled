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
import FANTINA from './splits/fantina';
import GARDENIA from './splits/gardenia';
import ROARK from './splits/roark';
import VOLKNER from './splits/volkner';

// Onboarding in progress — see ONBOARDING.md for full status. Pokémon and
// move data are complete; encounters/locations/splits are being authored
// incrementally, one area at a time (currently just the very start of the
// game). "New" is clickable (Route 201 has a real Starter encounter for
// EncounterHelpers.getStarterLocationName to resolve), but most of the
// map has no encounters/battles/splits wired in yet.
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
    wipeMessages: [
        'Roark is calling.',
        'Maybe a monkey run next time.',
        'Welcome to briefcase simulator.',
        'Pick the penguin.',
        'Turtle time.',
    ],
    splits: [ROARK, GARDENIA, FANTINA, BYRON, VOLKNER],
};

export default RENEGADE_PLATINUM;
