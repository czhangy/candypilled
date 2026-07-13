import data from '@/lib/scripts/pokeapi/output/encounters.json';
import { LocationEncounters } from '@/lib/static/types';

export const ENCOUNTERS: Record<
    string,
    Record<string, LocationEncounters>
> = data;
