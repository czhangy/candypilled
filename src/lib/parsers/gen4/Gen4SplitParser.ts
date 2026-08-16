import { getGen4SaveLayout } from '@/lib/parsers/gen4/gen4-save-layouts';
import Gen4SaveBlocks from '@/lib/parsers/gen4/Gen4SaveBlocks';
import { Game } from '@/lib/static/types';

export default class Gen4SplitParser {
    /** Every split name (Split.name) game.splits reports this save as having finished. */
    static parse(game: Game, buffer: ArrayBuffer): string[] {
        const view = new DataView(buffer);
        const layout = getGen4SaveLayout(game.version);
        const { generalBlockOffset } = Gen4SaveBlocks.locate(view, layout);

        const badgeMask = view.getUint8(
            generalBlockOffset + layout.badgeMaskOffset
        );
        const isMainStoryCleared =
            (view.getUint8(generalBlockOffset + layout.mainStoryClearedOffset) &
                1) ===
            1;

        return game.splits
            .filter((split) =>
                split.saveCondition.type === 'badge'
                    ? (badgeMask & (1 << split.saveCondition.bit)) !== 0
                    : isMainStoryCleared
            )
            .map((split) => split.name);
    }
}
