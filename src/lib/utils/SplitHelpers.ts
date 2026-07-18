import { Battle, BattlePokemon, Game, Split } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class SplitHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** The highest level on split's last battle's team, or null if it has no battles or an empty team. */
    static getLevelCap(split: Split): number | null {
        const battles = split.locations.flatMap((location) =>
            BattleHelpers.getBattlesInLocation(location)
        );
        const lastBattle = battles[battles.length - 1];

        return lastBattle ? SplitHelpers.getMaxLevel(lastBattle) : null;
    }

    /** The name of the split containing battleKey, or null if not found. */
    static getSplitName(game: Game, battleKey: string): string | null {
        const position = BattleHelpers.countProgress(game, battleKey);
        return position ? game.splits[position.splitIndex].name : null;
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

    /** The name of the split the player is currently on, based on which required battles in defeatedBattles are missing. */
    static getCurrentSplitName(
        game: Game,
        defeatedBattles: string[]
    ): string | null {
        const requiredBattleKeys = BattleHelpers.getRequiredBattleKeys(game);

        const nextRequiredBattleKey = requiredBattleKeys.find(
            (battleKey) => !defeatedBattles.includes(battleKey)
        );

        if (!nextRequiredBattleKey) {
            return game.splits[game.splits.length - 1]?.name ?? null;
        }

        return SplitHelpers.getSplitName(game, nextRequiredBattleKey);
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // A battle's team doesn't vary in level by starter (only species does),
    // so the level cap can be read from whichever team option is available.
    private static getMaxLevel(battle: Battle): number | null {
        const teams = battle.team
            ? [battle.team]
            : Object.values(battle.teamsByStarter ?? {}).filter(
                  (team): team is BattlePokemon[] => !!team
              );

        const levels = teams.flatMap((team) =>
            team.map((pokemon) => pokemon.level)
        );

        return levels.length > 0 ? Math.max(...levels) : null;
    }
}
