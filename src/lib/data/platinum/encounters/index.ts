import { Encounter } from '@/lib/static/types';
import data from './platinum_encounters.json';

// The JSON module's "method" fields are inferred as plain strings; the
// generation script (src/lib/scripts/pokeapi/encounters.ts) guarantees they
// only ever contain EncounterMethod values.
export const ENCOUNTERS: Record<string, Encounter[]> = data as Record<
    string,
    Encounter[]
>;
