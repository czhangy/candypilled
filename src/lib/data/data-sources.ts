import { ABILITIES } from '@/lib/data/abilities';
import { ITEMS } from '@/lib/data/items';
import { MOVES } from '@/lib/data/moves';
import { POKEMON } from '@/lib/data/pokemon';
import { ABILITIES as RENEGADE_PLATINUM_ABILITIES } from '@/lib/data/renegade-platinum/abilities';
import { ITEMS as RENEGADE_PLATINUM_ITEMS } from '@/lib/data/renegade-platinum/items';
import { MOVES as RENEGADE_PLATINUM_MOVES } from '@/lib/data/renegade-platinum/moves';
import { POKEMON as RENEGADE_PLATINUM_POKEMON } from '@/lib/data/renegade-platinum/pokemon';
import { GameDataSource } from '@/lib/static/types';

/** The shared vanilla Pokémon/move/ability/item dataset used by every unmodified game. */
export const VANILLA_DATA_SOURCE: GameDataSource = {
    pokemon: POKEMON,
    moves: MOVES,
    abilities: ABILITIES,
    items: ITEMS,
};

/** Renegade Platinum's independent Pokémon/move/ability/item dataset. */
export const RENEGADE_PLATINUM_DATA_SOURCE: GameDataSource = {
    pokemon: RENEGADE_PLATINUM_POKEMON,
    moves: RENEGADE_PLATINUM_MOVES,
    abilities: RENEGADE_PLATINUM_ABILITIES,
    items: RENEGADE_PLATINUM_ITEMS,
};
