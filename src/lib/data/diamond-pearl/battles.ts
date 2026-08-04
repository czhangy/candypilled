import { BattleData } from '@/lib/static/types';

// Shared by Diamond and Pearl (see ../diamond/diamond.ts and
// ../pearl/pearl.ts) since gym/rival/Elite Four trainer data doesn't differ
// between the two versions. Populate with `npm run gen:battle` (set GAME_ID
// to 'diamond-pearl' first).
export const BATTLES: Record<string, BattleData> = {};
