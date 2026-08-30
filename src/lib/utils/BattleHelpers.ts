import {
    Battle,
    BattlePokemon,
    BattleTeam,
    BattleTeamCondition,
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
                teams: BattleHelpers.getMatchingTeams(data.teams, starter),
                items: data.items,
            },
        ];

        if (data.secondTrainer) {
            groups.push({
                trainerClass: data.secondTrainer.trainerClass,
                name: data.secondTrainer.name,
                teams: BattleHelpers.getMatchingTeams(
                    data.secondTrainer.teams,
                    starter
                ),
            });
        }

        return groups;
    }

    /** battle's full team for starter (every surviving team across both trainers combined for a tag battle). */
    static getTeamFromOptions(
        battle: Battle,
        starter: string,
        game: Game
    ): BattlePokemon[] {
        return BattleHelpers.getTeamGroups(battle, starter, game).flatMap(
            (group) => group.teams.flat()
        );
    }

    /** Every battle in location for gender, excluding those hidden via location/subarea or restricted to the other gender. */
    static getBattlesInLocation(
        location: Location,
        gender: 'male' | 'female' | undefined
    ): Battle[] {
        if (location.hideBattles) return [];

        const battles = location.subareas
            ? location.subareas
                  .filter((subarea) => !subarea.hideBattles)
                  .flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? []);

        return BattleHelpers.filterByGender(battles, gender);
    }

    /**
     * Every distinct battle in game for gender, in game order. A battle
     * reachable from more than one location (e.g. a route revisited
     * across two story splits) is still one battle, so only its first
     * occurrence is kept.
     */
    static getAllBattles(
        game: Game,
        gender: 'male' | 'female' | undefined
    ): Battle[] {
        const battles = game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                BattleHelpers.getBattlesInLocation(location, gender)
            )
        );

        const seen = new Set<string>();
        return battles.filter((battle) => {
            const key = BattleHelpers.getBattleKey(battle);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    /** battles restricted to gender: entries with no `gender` always pass, entries with one only pass for a matching run gender. */
    static filterByGender(
        battles: Battle[],
        gender: 'male' | 'female' | undefined
    ): Battle[] {
        return battles.filter(
            (battle) => !battle.gender || battle.gender === gender
        );
    }

    /** The team belonging to the battle keyed by battleKey within game, resolved for starter, or [] if battleKey is undefined or doesn't match any battle. */
    static getSelectedTeam(
        game: Game,
        battleKey: string | undefined,
        starter: string,
        gender: 'male' | 'female' | undefined
    ): BattlePokemon[] {
        if (!battleKey) return [];

        const battle = BattleHelpers.getAllBattles(game, gender).find(
            (candidate) => BattleHelpers.getBattleKey(candidate) === battleKey
        );
        return battle
            ? BattleHelpers.getTeamFromOptions(battle, starter, game)
            : [];
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static matchesCondition(
        condition: BattleTeamCondition | undefined,
        starter: string
    ): boolean {
        if (!condition) return true;

        switch (condition.type) {
            case 'starter':
                return condition.starter === starter;
        }
    }

    // Every team whose condition (if any) is met for starter, as bare
    // roster arrays. Falls back to a single empty roster rather than an
    // empty array so a trainer whose only teams are conditioned still gets
    // a row to render (e.g. empty slots) instead of silently vanishing.
    private static getMatchingTeams(
        teams: BattleTeam[],
        starter: string
    ): BattlePokemon[][] {
        const matching = teams
            .filter((entry) =>
                BattleHelpers.matchesCondition(entry.condition, starter)
            )
            .map((entry) => entry.team);

        return matching.length > 0 ? matching : [[]];
    }
}
