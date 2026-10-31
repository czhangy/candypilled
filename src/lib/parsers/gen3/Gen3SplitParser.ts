import Gen3SaveBlocks from '@/lib/parsers/gen3/Gen3SaveBlocks';
import { GameVersionGroup } from '@/lib/static/enums';
import { Game } from '@/lib/static/types';

// SaveBlock1's flags array is a contiguous bit-array, not a single mask
// byte -- flag number n lives at byte `n >> 3`, bit `n & 7`. Its offset into
// SaveBlock1 and FLAG_SYS_GAME_CLEAR (SYSTEM_FLAGS + 0x04, with SYSTEM_FLAGS
// shifting per game with its trainer-flag count) differ per game, so derive
// each entry from that game's own decomp (include/global.h, flags.h).
const FLAG_LAYOUT_BY_VERSION: Partial<
    Record<GameVersionGroup, { flagsOffset: number; gameClearFlag: number }>
> = {
    [GameVersionGroup.RubySapphire]: {
        flagsOffset: 0x1220,
        gameClearFlag: 0x804,
    },
    [GameVersionGroup.Emerald]: { flagsOffset: 0x1270, gameClearFlag: 0x864 },
};

export default class Gen3SplitParser {
    /** Every split name (Split.name) game.splits reports this save as having finished. */
    static parse(game: Game, buffer: ArrayBuffer): string[] {
        const view = new DataView(buffer);
        const { saveBlock1View } = Gen3SaveBlocks.locate(view);

        const flagLayout = FLAG_LAYOUT_BY_VERSION[game.version];
        if (flagLayout === undefined) {
            throw new Error(
                `Gen3SplitParser has no flag layout for game version "${game.version}".`
            );
        }

        const isFlagSet = (bit: number): boolean => {
            const byte = saveBlock1View.getUint8(
                flagLayout.flagsOffset + (bit >> 3)
            );
            return ((byte >> (bit & 7)) & 1) === 1;
        };

        return game.splits
            .filter((split) =>
                split.saveCondition.type === 'badge'
                    ? isFlagSet(split.saveCondition.bit)
                    : isFlagSet(flagLayout.gameClearFlag)
            )
            .map((split) => split.name);
    }
}
