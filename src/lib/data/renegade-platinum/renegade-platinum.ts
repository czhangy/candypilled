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

// Scaffolded ahead of full onboarding — everything below is either
// structurally certain (data source, shared assets, generation, gender
// selection) or an explicit placeholder for a field that needs real
// research (see the TODOs). Registered in GAMES so it's browsable as a
// RunEntry, but clicking "New" on it still crashes:
// EncounterHelpers.getStarterLocationName has nothing to resolve with an
// empty ENCOUNTERS. Get real encounter data in before treating this as
// clickable, per the onboard-new-game skill's sequencing note.
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
    // Reuses Platinum's Pokémon sprites verbatim (confirmed identical, per
    // explicit direction). RENEGADE_PLATINUM_POKEMON entries carry no
    // sprite paths of their own — PokemonHelpers.getPokemonSprite resolves
    // them formulaically from this folder instead, the same
    // zero-duplication convention badgeAssetFolder/trainerAssetFolder use.
    pokemonAssetFolder: GameVersionGroup.Platinum,
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
    splits: [],
};

export default RENEGADE_PLATINUM;
