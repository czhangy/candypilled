import { MOVES as VANILLA_MOVES } from '@/lib/data/moves';
import data from '@/lib/data/renegade-platinum/raw/moves-overrides.json';
import { DataOverrides, MoveData } from '@/lib/static/types';
import DataOverrideHelpers from '@/lib/utils/DataOverrideHelpers';

// Sparse per-move diff from vanilla Platinum — every move whose value as
// of Generation 7 (Ultra Sun/Ultra Moon, what this hack's own "all move
// numbers match USUM" rule targets) differs from its Generation 4
// baseline, plus the handful of newer-gen moves this hack backports as
// TM/tutor replacements (each of those also needs `introducedInGeneration`
// overridden down to 4, or the app's generation-filtered move lookups
// would exclude them for a Gen 4 game).
export const MOVE_OVERRIDES = data as DataOverrides<MoveData>;

// Moves this hack retires game-wide, replaced by a newer-gen move under a
// different slug (e.g. Twister -> Hurricane) — removed rather than
// patched, since nothing should still offer to teach them.
const REMOVED_MOVES = [
    'barrage',
    'brine',
    'constrict',
    'horn-drill',
    'lunar-dance',
    'luster-purge',
    'mist-ball',
    'sand-tomb',
    'submission',
    'twister',
    'volt-tackle',
];

export const MOVES: Record<string, MoveData> =
    DataOverrideHelpers.removeEntries(
        DataOverrideHelpers.applyOverrides(VANILLA_MOVES, MOVE_OVERRIDES),
        REMOVED_MOVES
    );
