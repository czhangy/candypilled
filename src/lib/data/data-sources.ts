import { ITEMS } from '@/lib/data/items';
import { MOVES } from '@/lib/data/moves';
import { POKEMON } from '@/lib/data/pokemon';
import {
    MOVE_OVERRIDES,
    MOVES as RENEGADE_PLATINUM_MOVES,
} from '@/lib/data/renegade-platinum/moves';
import {
    POKEMON_OVERRIDES,
    POKEMON as RENEGADE_PLATINUM_POKEMON,
} from '@/lib/data/renegade-platinum/pokemon';
import { GameDataSource } from '@/lib/static/types';

/** The shared vanilla Pokémon/move/item dataset used by every unmodified game. */
export const VANILLA_DATA_SOURCE: GameDataSource = {
    pokemon: POKEMON,
    moves: MOVES,
    items: ITEMS,
};

// Items are unchanged from vanilla Platinum (confirmed — no override table
// needed), so this data source reuses vanilla ITEMS directly rather than
// carrying its own copy.
/** Renegade Platinum's Pokémon/move dataset: vanilla Platinum patched by this hack's own sparse diffs. */
export const RENEGADE_PLATINUM_DATA_SOURCE: GameDataSource = {
    pokemon: RENEGADE_PLATINUM_POKEMON,
    moves: RENEGADE_PLATINUM_MOVES,
    items: ITEMS,
    overrides: {
        pokemon: POKEMON_OVERRIDES,
        moves: MOVE_OVERRIDES,
    },
};
