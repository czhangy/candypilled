import { Encounter } from '@/lib/static/types';

// Not yet authored — populate via `npm run pokeapi:encounters` isn't
// applicable here (Renegade Platinum's encounters aren't on PokeAPI), so
// this has to be derived from the ROM hack's own data instead.
export const ENCOUNTERS: Record<string, Encounter[]> = {};
