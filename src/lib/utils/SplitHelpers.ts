import { Battle, Game, Split } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class SplitHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The highest level on split's last battle's team, or null if it has no battles, an empty team, or completedSplits marks the game as complete (no cap applies once the Hall of Fame is unlocked). */
    static getLevelCap(
        game: Game,
        split: Split,
        completedSplits: string[],
        gender: 'male' | 'female' | undefined
    ): number | null {
        if (SplitHelpers.isGameComplete(game, completedSplits)) return null;

        const battles = split.locations.flatMap((location) =>
            BattleHelpers.getBattlesInLocation(
                location,
                gender,
                split.name,
                game
            )
        );
        const lastBattle = battles[battles.length - 1];

        return lastBattle ? SplitHelpers.getMaxLevel(game, lastBattle) : null;
    }

    /** The name of the first split (in game order) not present in completedSplits, or the last split's name if every split is completed. */
    static getCurrentSplitName(
        game: Game,
        completedSplits: string[]
    ): string | null {
        const nextSplit = game.splits.find(
            (split) => !completedSplits.includes(split.name)
        );

        return (
            nextSplit?.name ?? game.splits[game.splits.length - 1]?.name ?? null
        );
    }

    /** Whether every split in game is present in completedSplits, i.e. the run is complete and the Hall of Fame is unlocked. */
    static isGameComplete(game: Game, completedSplits: string[]): boolean {
        return (
            game.splits.length > 0 &&
            game.splits.every((split) => completedSplits.includes(split.name))
        );
    }

    /** The split name and locations-array index of the earliest occurrence (in game order) of a location named locationName, or null if not found. */
    static getEarliestLocation(
        game: Game,
        locationName: string
    ): { index: number; splitName: string } | null {
        for (const split of game.splits) {
            const index = split.locations.findIndex(
                (location) => location.name === locationName
            );

            if (index !== -1) {
                return { index, splitName: split.name };
            }
        }

        return null;
    }

    /** The name of the earliest split (in game order) containing a location named locationName, or null if not found. */
    static getEarliestSplitName(
        game: Game,
        locationName: string
    ): string | null {
        return (
            SplitHelpers.getEarliestLocation(game, locationName)?.splitName ??
            null
        );
    }

    /** A unique DOM-safe slug for a location, disambiguated by its index within the split's locations array. */
    static getLocationSlug(locationName: string, index: number): string {
        return `${StringHelpers.toSlug(locationName)}-${index}`;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // A battle's team doesn't vary in level by starter (only species does),
    // so the level cap can be read from whichever team option is available.
    private static getMaxLevel(game: Game, battle: Battle): number | null {
        const data = game.battles[battle.battleKey];
        const levels = data.teams.flatMap((entry) =>
            entry.team.map((pokemon) => pokemon.level)
        );

        return levels.length > 0 ? Math.max(...levels) : null;
    }
}
