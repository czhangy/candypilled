import { POKEMON as VANILLA_POKEMON } from '@/lib/data/pokemon';
import data from '@/lib/data/renegade-platinum/raw/pokemon-overrides.json';
import { DataOverrides, PokemonData } from '@/lib/static/types';
import DataOverrideHelpers from '@/lib/utils/DataOverrideHelpers';

// Sparse per-species diff from vanilla Platinum (base stats, types,
// abilities, evolution method for changed species; learnset for every
// species, since Renegade Platinum changes every learnset).
export const POKEMON_OVERRIDES = data as DataOverrides<PokemonData>;

export const POKEMON: Record<string, PokemonData> =
    DataOverrideHelpers.applyOverrides(VANILLA_POKEMON, POKEMON_OVERRIDES);
