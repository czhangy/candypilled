import data from '@/lib/data/renegade-platinum/raw/pokemon.json';
import { PokemonData } from '@/lib/static/types';

export const POKEMON = data as Record<string, PokemonData>;
