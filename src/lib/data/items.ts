import data from '@/lib/data/raw/items.json';
import { ItemData } from '@/lib/static/types';

export const ITEMS = data as Record<string, ItemData>;
