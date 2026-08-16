import { MOVES as VANILLA_MOVES } from '@/lib/data/moves';
import data from '@/lib/data/renegade-platinum/raw/moves-overrides.json';
import { DataOverrides, MoveData } from '@/lib/static/types';
import DataOverrideHelpers from '@/lib/utils/DataOverrideHelpers';

// Not yet authored — sparse per-move diff from vanilla Platinum (only
// moves the EVOLUTiON/TYPE/MOVES sheet tab documents as changed). See
// ONBOARDING.md for the sourcing plan.
export const MOVE_OVERRIDES = data as DataOverrides<MoveData>;

export const MOVES: Record<string, MoveData> =
    DataOverrideHelpers.applyOverrides(VANILLA_MOVES, MOVE_OVERRIDES);
