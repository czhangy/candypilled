import { ITEMS } from '@/lib/data/items';
import { MOVES } from '@/lib/data/moves';
import { POKEMON } from '@/lib/data/pokemon';
import { ITEMS as RENEGADE_PLATINUM_ITEMS } from '@/lib/data/renegade-platinum/items';
import { MOVES as RENEGADE_PLATINUM_MOVES } from '@/lib/data/renegade-platinum/moves';
import { POKEMON as RENEGADE_PLATINUM_POKEMON } from '@/lib/data/renegade-platinum/pokemon';
import { GameDataSource } from '@/lib/static/types';

/** The shared vanilla Pokémon/move/item dataset used by every unmodified game. */
export const VANILLA_DATA_SOURCE: GameDataSource = {
    pokemon: POKEMON,
    moves: MOVES,
    items: ITEMS,
};

/** Renegade Platinum's independent Pokémon/move/item dataset. */
export const RENEGADE_PLATINUM_DATA_SOURCE: GameDataSource = {
    pokemon: RENEGADE_PLATINUM_POKEMON,
    moves: RENEGADE_PLATINUM_MOVES,
    items: RENEGADE_PLATINUM_ITEMS,
};
