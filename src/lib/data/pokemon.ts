import data from '@/lib/data/raw/pokemon.json';
import { PokemonData } from '@/lib/static/types';

export const POKEMON = data as Record<string, PokemonData>;
