import data from '@/lib/data/raw/moves.json';
import { MoveData } from '@/lib/static/types';

export const MOVES = data as Record<string, MoveData>;
