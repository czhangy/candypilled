import Gen4SaveBlocks from '@/lib/parsers/gen4/Gen4SaveBlocks';
import { BattleDefeatCondition, Game } from '@/lib/static/types';

// TrainerInfo fields (badgeMask, isMainStoryCleared), general-block-relative,
// per pret/pokeplatinum's include/trainer_info.h.
const BADGE_MASK_OFFSET = 0x82;
const MAIN_STORY_CLEARED_OFFSET = 0x85;

// VarsFlags struct (u16 vars[288] immediately followed by u8 flags[364]),
// general-block-relative. Derived from pret/pokeplatinum's save_table.c
// entry-packing logic (each save-table entry's padded size is
// `size + (4 - size % 4) + 4`), walked forward from the already-verified
// Party entry offset (0xA0 for its Pokémon array, so 0x98 for the entry
// itself) through the Bag entry's exact size (computed from bag.h's real
// pocket-size constants, since Bulbapedia's public item-placeholder table
// turned out not to match the decompiled struct). Cross-validated against a
// real save by reading 10 different rival/story-progress VARs and getting
// results fully consistent with that save's known badge/story progress.
const VARS_OFFSET = 0xdac;
const FLAGS_OFFSET = 0xfec;

export default class Gen4BattleParser {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** Every battleKey (BattleHelpers.getBattleKey) game.battles reports this save as having won. */
    static parse(game: Game, buffer: ArrayBuffer): string[] {
        const view = new DataView(buffer);
        const { generalBlockOffset } = Gen4SaveBlocks.locate(view);

        const context = {
            badgeMask: view.getUint8(generalBlockOffset + BADGE_MASK_OFFSET),
            isMainStoryCleared:
                (view.getUint8(generalBlockOffset + MAIN_STORY_CLEARED_OFFSET) &
                    1) ===
                1,
            readVar: (varIndex: number): number =>
                view.getUint16(
                    generalBlockOffset + VARS_OFFSET + varIndex * 2,
                    true
                ),
            isFlagSet: (flag: number): boolean =>
                ((view.getUint8(
                    generalBlockOffset + FLAGS_OFFSET + (flag >> 3)
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
