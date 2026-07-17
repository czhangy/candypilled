import data from '@/lib/data/raw/platinum/platinum_encounters.json';
import { LocationEncounters } from '@/lib/static/types';

export const ENCOUNTERS: Record<string, LocationEncounters> = data;
