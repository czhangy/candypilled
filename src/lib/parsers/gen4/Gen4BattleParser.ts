import { getGen4SaveLayout } from '@/lib/parsers/gen4/gen4-save-layouts';
import Gen4SaveBlocks from '@/lib/parsers/gen4/Gen4SaveBlocks';
import { BattleDefeatCondition, Game } from '@/lib/static/types';

export default class Gen4BattleParser {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Every battleKey (BattleHelpers.getBattleKey) game.battles reports this save as having won. */
    static parse(game: Game, buffer: ArrayBuffer): string[] {
        const view = new DataView(buffer);
        const layout = getGen4SaveLayout(game.version);
        const { generalBlockOffset } = Gen4SaveBlocks.locate(view, layout);

        const context = {
            badgeMask: view.getUint8(
                generalBlockOffset + layout.badgeMaskOffset
            ),
            isMainStoryCleared:
                (view.getUint8(
                    generalBlockOffset + layout.mainStoryClearedOffset
                ) &
                    1) ===
                1,
            readVar: (varIndex: number): number =>
                view.getUint16(
                    generalBlockOffset + layout.varsOffset + varIndex * 2,
                    true
                ),
            isFlagSet: (flag: number): boolean =>
                ((view.getUint8(
                    generalBlockOffset + layout.flagsOffset + (flag >> 3)
                ) >>
                    (flag & 7)) &
                    1) ===
                1,
        };

        return Object.entries(game.battles)
            .filter(([, battleData]) =>
                Gen4BattleParser.evaluate(battleData.saveCondition, context)
            )
            .map(([battleKey]) => battleKey);
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static evaluate(
        condition: BattleDefeatCondition,
        context: {
            badgeMask: number;
            isMainStoryCleared: boolean;
            readVar: (varIndex: number) => number;
            isFlagSet: (flag: number) => boolean;
        }
    ): boolean {
        switch (condition.type) {
            case 'trainerFlag':
            case 'flag':
                return context.isFlagSet(condition.flag);
            case 'badge':
                return (context.badgeMask & (1 << condition.bit)) !== 0;
            case 'gameClear':
                return context.isMainStoryCleared;
            case 'varAtLeast':
                return context.readVar(condition.var) >= condition.minValue;
            case 'and':
                return condition.conditions.every((c) =>
                    Gen4BattleParser.evaluate(c, context)
                );
            case 'or':
                return condition.conditions.some((c) =>
                    Gen4BattleParser.evaluate(c, context)
                );
            default:
                return false;
        }
    }
}
