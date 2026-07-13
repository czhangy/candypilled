import { Game } from '@/lib/static/types';

interface BattlePosition {
    splitIndex: number;
    locationIndex: number;
    battleIndex: number;
}

export default class BattleProgressHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getPosition(game: Game, battleName: string): BattlePosition | null {
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
                const battleIndex = (
                    locations[locationIndex].battles ?? []
                ).findIndex((battle) => battle.name === battleName);
                if (battleIndex === -1) continue;

                return { splitIndex, locationIndex, battleIndex };
            }
        }

        return null;
    }

    static getSplitName(game: Game, battleName: string): string | null {
        const position = BattleProgressHelpers.getPosition(game, battleName);
        return position ? game.splits[position.splitIndex].name : null;
    }

    static getNextRequiredBattleName(
        game: Game,
        personalBestBattleName: string
    ): string | null {
        const requiredBattleNames = game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                (location.battles ?? [])
                    .filter((battle) => !battle.isOptional)
                    .map((battle) => battle.name)
            )
        );

        const personalBestIndex = requiredBattleNames.indexOf(
            personalBestBattleName
        );

        return requiredBattleNames[personalBestIndex + 1] ?? null;
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
