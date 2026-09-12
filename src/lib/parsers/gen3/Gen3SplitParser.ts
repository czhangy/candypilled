import Gen3SaveBlocks from '@/lib/parsers/gen3/Gen3SaveBlocks';
import { Game } from '@/lib/static/types';

// SaveBlock1's flags array (pret/pokeruby's include/global.h:
// `/*0x1220*/ u8 flags[FLAGS_COUNT];`) is a contiguous bit-array, not a
// single mask byte -- flag number n lives at byte `n >> 3`, bit `n & 7`.
// After Gen3SaveBlocks.locate reconstructs SaveBlock1's first two chunks
// back-to-back, this offset lands squarely inside the second chunk
// (0x1220 - 0xF80 = 0x2A0 into section ID 2's data, well short of its
// 3968-byte bound), so no cross-section handling is needed here.
const FLAGS_OFFSET = 0x1220;

// pret/pokeruby's include/constants/flags.h: FLAG_SYS_GAME_CLEAR =
// SYSTEM_FLAGS (0x800) + 0x04.
const FLAG_SYS_GAME_CLEAR = 0x804;

export default class Gen3SplitParser {
    /** Every split name (Split.name) game.splits reports this save as having finished. */
    static parse(game: Game, buffer: ArrayBuffer): string[] {
        const view = new DataView(buffer);
        const { saveBlock1View } = Gen3SaveBlocks.locate(view);

        const isFlagSet = (bit: number): boolean => {
            const byte = saveBlock1View.getUint8(FLAGS_OFFSET + (bit >> 3));
            return ((byte >> (bit & 7)) & 1) === 1;
        };

        return game.splits
            .filter((split) =>
                split.saveCondition.type === 'badge'
                    ? isFlagSet(split.saveCondition.bit)
                    : isFlagSet(FLAG_SYS_GAME_CLEAR)
            )
            .map((split) => split.name);
    }
}
