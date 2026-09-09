import data from '@/lib/data/raw/abilities.json';
import { AbilityData } from '@/lib/static/types';

export const ABILITIES = data as Record<string, AbilityData>;
