import { GameVersion } from '@/lib/static/types';

// Minimal stub covering only the fields fetchPokemonData() needs (species,
// sprites, types, abilities, stats, learnset, evolution). This is not a
// playable-game onboarding — none of the encounter-table fields
// (excludedLocations, excludedSpecies, manualEncounters, etc.) are filled
// in, so this version can't be used to fetch encounter data.
export const white: GameVersion = {
    id: 'white',
    label: 'White',
    version: 'white',
    region: 'unova',
    generation: 5,
};
