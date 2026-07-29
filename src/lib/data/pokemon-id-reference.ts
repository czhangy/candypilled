import data from '@/lib/data/raw/pokemon-id-reference.json';
import { PokemonGrowthRate } from '@/lib/static/types';

// Species with more than one box-persisting form, keyed by National Dex
// number, in the order a save file's binary Form Index selects them (per
// Bulbapedia's documented Gen4 Alternate Forms table; the same forms and
// ordering carry forward in later generations' save formats).
export const FORM_SLUGS_BY_SPECIES_ID = data.formSlugsBySpeciesId as Record<
    number,
    string[]
>;

// National Dex number -> species slug, for species with only one form.
export const SPECIES_BY_ID = data.speciesById as Record<number, string>;

// PokeAPI ability ID -> ability slug. Stable across every generation's
// save format, since it mirrors each game's own internal ability ID.
export const ABILITY_BY_ID = data.abilityById as Record<number, string>;

// PokeAPI move ID -> move slug. Stable across every generation's save
// format, since it mirrors each game's own internal move ID.
export const MOVE_BY_ID = data.moveById as Record<number, string>;

// National Dex number -> experience growth rate, used to derive a boxed
// Pokémon's level from its stored EXP (a save file's party-stat block,
// where Level would otherwise live, is commonly left zeroed for a
// Pokémon that isn't in the active party).
export const GROWTH_RATE_BY_SPECIES_ID = data.growthRateById as Record<
    number,
    PokemonGrowthRate
>;
