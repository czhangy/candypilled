import data from '@/lib/data/raw/platinum_encounters.json';
import { LocationEncounters } from '@/lib/static/types';

// The JSON module's "method" fields are inferred as plain strings; the
// generation script (src/lib/scripts/pokeapi/encounters.ts) guarantees they
// only ever contain EncounterMethod values.
export const ENCOUNTERS: Record<string, LocationEncounters> = data as Record<
    string,
    LocationEncounters
>;
