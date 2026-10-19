import Gen3SaveBlocks from '@/lib/parsers/gen3/Gen3SaveBlocks';
import { GameVersionGroup } from '@/lib/static/enums';
import { Game } from '@/lib/static/types';

// SaveBlock1's flags array (pret/pokeruby's include/global.h:
// `/*0x1220*/ u8 flags[FLAGS_COUNT];`) is a contiguous bit-array, not a
// single mask byte -- flag number n lives at byte `n >> 3`, bit `n & 7`.
// After Gen3SaveBlocks.locate reconstructs SaveBlock1's first two chunks
// back-to-back, this offset lands squarely inside the second chunk
// (0x1220 - 0xF80 = 0x2A0 into section ID 2's data, well short of its
// 3968-byte bound), so no cross-section handling is needed here.
const FLAGS_OFFSET = 0x1220;

// pret's constants/flags.h defines FLAG_SYS_GAME_CLEAR as
// SYSTEM_FLAGS + 0x04, and SYSTEM_FLAGS itself as
// (TRAINER_FLAGS_END + 1) -- which shifts per game depending on how many
// trainers that game's own decomp reserves in its TRAINER_FLAGS block.
// Never assume this value carries across Gen 3 games: Ruby/Sapphire's
// SYSTEM_FLAGS is 0x800 (693 trainers), while Emerald's is 0x860 (more
// trainers), making Emerald's FLAG_SYS_GAME_CLEAR 0x864, not 0x804.
// Derive each entry from that game's own decomp before adding it here.
const FLAG_SYS_GAME_CLEAR_BY_VERSION: Partial<
    Record<GameVersionGroup, number>
> = {
    [GameVersionGroup.RubySapphire]: 0x804,
    [GameVersionGroup.Emerald]: 0x864,
};

export default class Gen3SplitParser {
    /** Every split name (Split.name) game.splits reports this save as having finished. */
    static parse(game: Game, buffer: ArrayBuffer): string[] {
        const view = new DataView(buffer);
        const { saveBlock1View } = Gen3SaveBlocks.locate(view);

        const flagSysGameClear = FLAG_SYS_GAME_CLEAR_BY_VERSION[game.version];
        if (flagSysGameClear === undefined) {
            throw new Error(
                `Gen3SplitParser has no FLAG_SYS_GAME_CLEAR mapping for game version "${game.version}".`
            );
        }

        const isFlagSet = (bit: number): boolean => {
            const byte = saveBlock1View.getUint8(FLAGS_OFFSET + (bit >> 3));
            return ((byte >> (bit & 7)) & 1) === 1;
        };

        return game.splits
            .filter((split) =>
                split.saveCondition.type === 'badge'
                    ? isFlagSet(split.saveCondition.bit)
                    : isFlagSet(flagSysGameClear)
            )
            .map((split) => split.name);
    }
}
