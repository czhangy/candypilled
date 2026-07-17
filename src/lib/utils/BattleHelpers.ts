import { Battle, BattlePokemon, Game, Location } from '@/lib/static/types';

type BattlePosition = {
    splitIndex: number;
    locationIndex: number;
    battleIndex: number;
};

export default class BattleHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** battle's unique key, stable across storage and re-renders. */
    static getBattleKey(battle: Battle): string {
        return `${battle.trainerClass}::${battle.name}`;
    }

    /** battle's full display name, e.g. "Youngster Joey". Omits name if it is purely numeric, and omits standalone "M"/"F" gender words. */
    static getFullName(battle: Battle): string {
        const fullName = /^\d+$/.test(battle.name)
            ? battle.trainerClass
            : `${battle.trainerClass} ${battle.name}`;

        return fullName
            .split(' ')
            .filter((word) => word !== 'M' && word !== 'F')
            .join(' ');
    }

    /** battle's team for starter, falling back to its default team. */
    static getTeamFromOptions(
        battle: Battle,
        starter: string
    ): BattlePokemon[] {
        return battle.teamsByStarter?.[starter] ?? battle.team ?? [];
    }

    /** Every battle in location, excluding those hidden via subarea. */
    static getBattlesInLocation(location: Location): Battle[] {
        return location.subareas
            ? location.subareas
                  .filter((subarea) => !subarea.hideBattles)
                  .flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? []);
    }

    /** The split/location/battle indices of battleKey within game, or null if not found. */
    static countProgress(game: Game, battleKey: string): BattlePosition | null {
        for (
            let splitIndex = 0;
            splitIndex < game.splits.length;
            splitIndex++
        ) {
            const locations = game.splits[splitIndex].locations;
            for (
                let locationIndex = 0;
                locationIndex < locations.length;
                locationIndex++
            ) {
                const battleIndex = BattleHelpers.getBattlesInLocation(
                    locations[locationIndex]
                ).findIndex(
                    (battle) => BattleHelpers.getBattleKey(battle) === battleKey
                );
                if (battleIndex === -1) continue;

                return { splitIndex, locationIndex, battleIndex };
            }
        }

        return null;
    }

    /** The battle at battleKey's position within game. Assumes battleKey exists in game. */
    static getBattle(game: Game, battleKey: string): Battle {
        const position = BattleHelpers.countProgress(game, battleKey)!;
        const location =
            game.splits[position.splitIndex].locations[position.locationIndex];

        return BattleHelpers.getBattlesInLocation(location)[
            position.battleIndex
        ];
    }

    /** The required battle key immediately after personalBestBattleKey, or null if it was the last one. */
    static getNextRequiredBattleKey(
        game: Game,
        personalBestBattleKey: string
    ): string | null {
        const requiredBattleKeys = BattleHelpers.getRequiredBattleKeys(game);

        const personalBestIndex = requiredBattleKeys.indexOf(
            personalBestBattleKey
        );

        return requiredBattleKeys[personalBestIndex + 1] ?? null;
    }

    /** Whether position a is farther into the game than position b. */
    static isFarther(a: BattlePosition, b: BattlePosition): boolean {
        if (a.splitIndex !== b.splitIndex) {
            return a.splitIndex > b.splitIndex;
        }
        if (a.locationIndex !== b.locationIndex) {
            return a.locationIndex > b.locationIndex;
        }

        return a.battleIndex > b.battleIndex;
    }

    /** Every non-optional battle's key across game, in game order. */
    static getRequiredBattleKeys(game: Game): string[] {
        return game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                BattleHelpers.getBattlesInLocation(location)
                    .filter((battle) => !battle.isOptional)
                    .map((battle) => BattleHelpers.getBattleKey(battle))
            )
        );
    }
}
