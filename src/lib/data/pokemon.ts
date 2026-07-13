import data from '@/lib/scripts/pokeapi/output/pokemon.json';
import { PokemonData } from '@/lib/static/types';

export const POKEMON: Record<string, PokemonData> = data;
