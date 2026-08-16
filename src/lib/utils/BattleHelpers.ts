import {
    Battle,
    BattlePokemon,
    BattleTeamGroup,
    Game,
    Location,
} from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';

export default class BattleHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** battle's unique key, stable across storage and re-renders. */
    static getBattleKey(battle: Battle): string {
        return battle.battleKey;
    }

    /** A DOM-safe slug for battle, derived from its key, for scrolling directly to its battle card. */
    static getBattleSlug(battle: Battle): string {
        return StringHelpers.toSlug(BattleHelpers.getBattleKey(battle));
    }

    /** battle's full display name, e.g. "Youngster Joey", or "Bug Catcher Jack and Lass Briana" for a tag battle. */
    static getFullName(battle: Battle, game: Game): string {
        const data = game.battles[battle.battleKey];
        const primaryName = TrainerHelpers.getDisplayName(
            data.trainerClass,
            data.name
        );

        return data.secondTrainer
            ? `${primaryName} and ${TrainerHelpers.getDisplayName(data.secondTrainer.trainerClass, data.secondTrainer.name)}`
            : primaryName;
    }

    /** battle's team(s) for starter, split by trainer: one group for a normal battle, two for a tag battle. */
    static getTeamGroups(
        battle: Battle,
        starter: string,
        game: Game
    ): BattleTeamGroup[] {
        const data = game.battles[battle.battleKey];

        const groups: BattleTeamGroup[] = [
            {
                trainerClass: data.trainerClass,
                name: data.name,
                team: data.teamsByStarter?.[starter] ?? data.team ?? [],
                items: data.items,
            },
        ];

        if (data.secondTrainer) {
            groups.push({
                trainerClass: data.secondTrainer.trainerClass,
                name: data.secondTrainer.name,
                team:
                    data.secondTrainer.teamsByStarter?.[starter] ??
                    data.secondTrainer.team ??
                    [],
            });
        }

        return groups;
    }

    /** battle's full team for starter (both trainers' Pokémon combined for a tag battle), falling back to its default team. */
    static getTeamFromOptions(
        battle: Battle,
        starter: string,
        game: Game
    ): BattlePokemon[] {
        return BattleHelpers.getTeamGroups(battle, starter, game).flatMap(
            (group) => group.team
        );
    }

    /** Every battle in location, excluding those hidden via location or subarea. */
    static getBattlesInLocation(location: Location): Battle[] {
        if (location.hideBattles) return [];

        return location.subareas
            ? location.subareas
                  .filter((subarea) => !subarea.hideBattles)
                  .flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? []);
    }

    /** Every battle in game, in game order. */
    static getAllBattles(game: Game): Battle[] {
        return game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                BattleHelpers.getBattlesInLocation(location)
            )
        );
    }

    /** The team belonging to the battle keyed by battleKey within game, resolved for starter, or [] if battleKey is undefined or doesn't match any battle. */
    static getSelectedTeam(
        game: Game,
        battleKey: string | undefined,
        starter: string
    ): BattlePokemon[] {
        if (!battleKey) return [];

        const battle = BattleHelpers.getAllBattles(game).find(
            (candidate) => BattleHelpers.getBattleKey(candidate) === battleKey
        );
        return battle
            ? BattleHelpers.getTeamFromOptions(battle, starter, game)
            : [];
    }
}
