import { Battle, Game, Split } from '@/lib/static/types';
import BattleHelpers from './BattleHelpers';
import LocationHelpers from './LocationHelpers';

interface BattlePosition {
    splitIndex: number;
    locationIndex: number;
    battleIndex: number;
}

export default class BattleProgressHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getLevelCap(split: Split, starter: string | null): number | null {
        const battles = split.locations.flatMap((location) =>
            LocationHelpers.getBattles(location)
        );
        const lastBattle = battles[battles.length - 1];
        if (!lastBattle) return null;

        const team = BattleHelpers.getTeam(lastBattle, starter);
        if (team.length === 0) return null;

        return Math.max(...team.map((pokemon) => pokemon.level));
    }

    static getPosition(game: Game, battleKey: string): BattlePosition | null {
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
                const battleIndex = LocationHelpers.getBattles(
                    locations[locationIndex]
                ).findIndex(
                    (battle) => BattleHelpers.getKey(battle) === battleKey
                );
                if (battleIndex === -1) continue;

                return { splitIndex, locationIndex, battleIndex };
            }
        }

        return null;
    }

    static getSplitName(game: Game, battleKey: string): string | null {
        const position = BattleProgressHelpers.getPosition(game, battleKey);
        return position ? game.splits[position.splitIndex].name : null;
    }

    static getCurrentSplitName(
        game: Game,
        defeatedBattles: string[]
    ): string | null {
        const requiredBattleKeys = game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                LocationHelpers.getBattles(location)
                    .filter((battle) => !battle.isOptional)
                    .map((battle) => BattleHelpers.getKey(battle))
            )
        );

        const nextRequiredBattleKey = requiredBattleKeys.find(
            (battleKey) => !defeatedBattles.includes(battleKey)
        );

        if (!nextRequiredBattleKey) {
            return game.splits[game.splits.length - 1]?.name ?? null;
        }

        return BattleProgressHelpers.getSplitName(game, nextRequiredBattleKey);
    }

    static getBattle(game: Game, battleKey: string): Battle | null {
        const position = BattleProgressHelpers.getPosition(game, battleKey);
        if (!position) return null;

        const location =
            game.splits[position.splitIndex].locations[position.locationIndex];

        return LocationHelpers.getBattles(location)[position.battleIndex];
    }

    static getNextRequiredBattleKey(
        game: Game,
        personalBestBattleKey: string
    ): string | null {
        const requiredBattleKeys = game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                LocationHelpers.getBattles(location)
                    .filter((battle) => !battle.isOptional)
                    .map((battle) => BattleHelpers.getKey(battle))
            )
        );

        const personalBestIndex = requiredBattleKeys.indexOf(
            personalBestBattleKey
        );

        return requiredBattleKeys[personalBestIndex + 1] ?? null;
    }

    static isFarther(a: BattlePosition, b: BattlePosition): boolean {
        if (a.splitIndex !== b.splitIndex) {
            return a.splitIndex > b.splitIndex;
        }
        if (a.locationIndex !== b.locationIndex) {
            return a.locationIndex > b.locationIndex;
        }

        return a.battleIndex > b.battleIndex;
    }
}
