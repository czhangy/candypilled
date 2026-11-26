import { BattleMetadata } from '@/lib/static/enums';
import {
    AiFlag,
    Battle,
    BattlePokemon,
    BattleTeam,
    BattleTeamCondition,
    BattleTeamGroup,
    Game,
    Location,
    TagPartner,
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

    /** battle's full display name, e.g. "Youngster Joey", or "Bug Catcher Jack and Lass Briana" for a tag battle. `plainName` skips the class prefix, e.g. "Winstrate Family". */
    static getFullName(battle: Battle, game: Game): string {
        const data = game.battles[battle.battleKey];
        const primaryName = data.plainName
            ? data.name
            : TrainerHelpers.getDisplayName(data.trainerClass, data.name);

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
                teams: BattleHelpers.getMatchingTeams(
                    data.teams,
                    starter,
                    data.trainerClass
                ),
                items: data.items,
            },
        ];

        if (data.secondTrainer) {
            groups.push({
                trainerClass: data.secondTrainer.trainerClass,
                name: data.secondTrainer.name,
                teams: BattleHelpers.getMatchingTeams(
                    data.secondTrainer.teams,
                    starter,
                    data.secondTrainer.trainerClass
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
            (group) => group.teams.flatMap((row) => row.team)
        );
    }

    /** Every battle in location for gender and splitName, excluding those restricted to another gender or split. */
    static getBattlesInLocation(
        location: Location,
        gender: 'male' | 'female' | undefined,
        splitName: string | undefined,
        game: Game
    ): Battle[] {
        const battles = location.subareas
            ? location.subareas.flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? []);

        return BattleHelpers.filterBySplit(
            BattleHelpers.filterByGame(
                BattleHelpers.filterByGender(battles, gender),
                game
            ),
            splitName,
            game
        );
    }

    /**
     * Every distinct battle in game for gender, in game.battleOrder -- sourced
     * from game.locations (every location, split-independent) rather than
     * game.splits[].locations. A battle missing from battleOrder sorts last,
     * by its own split (game.battles[key].split) in game order. A battle
     * reachable from more than one location is still one battle, so only its
     * first occurrence is kept.
     */
    static getAllBattles(
        game: Game,
        gender: 'male' | 'female' | undefined
    ): Battle[] {
        return BattleHelpers.getAllBattlesWithLocations(game, gender).map(
            (entry) => entry.battle
        );
    }

    /** Every battle from getAllBattles(game, gender), in the same order, paired with its display label followed by the name of the location it's first placed in, e.g. "Youngster Joey (Route 202)". */
    static getAllBattleOptions(
        game: Game,
        gender: 'male' | 'female' | undefined
    ): { battleKey: string; label: string }[] {
        return BattleHelpers.getAllBattlesWithLocations(game, gender).map(
            ({ battle, locationName }) => ({
                battleKey: battle.battleKey,
                label: `${BattleHelpers.getFullName(battle, game)} (${locationName})`,
            })
        );
    }

    /** battleKey's index within getAllBattles(game, gender), or -1 if it isn't in that list. */
    static getBattlePosition(
        game: Game,
        battleKey: string,
        gender: 'male' | 'female' | undefined
    ): number {
        return BattleHelpers.getAllBattles(game, gender).findIndex(
            (battle) => BattleHelpers.getBattleKey(battle) === battleKey
        );
    }

    /**
     * The key of the nearest Required, Boss or Choice battle before
     * (direction -1) or after (direction 1) battleKey in
     * getAllBattles(game, gender), or undefined if there is none. battleKey
     * itself needn't be one of those, so stepping also works from an Optional
     * battle.
     */
    static getAdjacentRequiredBattleKey(
        game: Game,
        battleKey: string | undefined,
        gender: 'male' | 'female' | undefined,
        direction: -1 | 1
    ): string | undefined {
        const requiredMetadata = [
            BattleMetadata.Required,
            BattleMetadata.Boss,
            BattleMetadata.Choice,
        ];
        const battles = BattleHelpers.getAllBattles(game, gender);
        const position = battles.findIndex(
            (battle) => BattleHelpers.getBattleKey(battle) === battleKey
        );
        if (position === -1) return undefined;

        for (
            let index = position + direction;
            index >= 0 && index < battles.length;
            index += direction
        ) {
            const key = BattleHelpers.getBattleKey(battles[index]);
            const { metadata } = game.battles[key];
            if (requiredMetadata.some((value) => metadata.includes(value))) {
                return key;
            }
        }

        return undefined;
    }

    /** items restricted to gender: entries with no `gender` always pass, entries with one only pass for a matching run gender. Shared by Battle[] and TagPartner[], both of which carry an optional gender field. */
    static filterByGender<T extends { gender?: 'male' | 'female' }>(
        items: T[],
        gender: 'male' | 'female' | undefined
    ): T[] {
        return items.filter((item) => !item.gender || item.gender === gender);
    }

    /** items restricted to game: entries with no `game` always pass, entries with one only pass for a matching game.name. Mirrors filterByGender, for content that differs by game version rather than run gender. */
    static filterByGame<T extends { game?: string }>(
        items: T[],
        game: Game
    ): T[] {
        return items.filter((item) => !item.game || item.game === game.name);
    }

    /** items restricted to splitName: only entries whose BattleData `split` equals splitName pass, or every entry if splitName is undefined. Shared by Battle[] and TagPartner[], both of which carry a `battleKey` into Game.battles. */
    static filterBySplit<T extends { battleKey: string }>(
        items: T[],
        splitName: string | undefined,
        game: Game
    ): T[] {
        if (!splitName) return items;

        return items.filter(
            (item) => game.battles[item.battleKey].split === splitName
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

    /**
     * The AI flags that the team member at `memberIndex` of battle's combined
     * team (as ordered by getTeamFromOptions) runs with, or none if there is
     * no such member. Flags belong to a trainer's team, so in a tag battle the
     * two trainers' members can have different flags.
     */
    static getMemberAiFlags(
        battle: Battle,
        starter: string,
        game: Game,
        memberIndex: number
    ): AiFlag[] {
        let rowStart = 0;
        const rows = BattleHelpers.getTeamGroups(battle, starter, game).flatMap(
            (group) => group.teams
        );
        for (const row of rows) {
            if (memberIndex < rowStart + row.team.length) {
                return row.aiFlags;
            }
            rowStart += row.team.length;
        }
        return [];
    }

    /**
     * Every location/subarea's tag partner in game for gender, paired with
     * its trainer's display label followed by the location's name, excluding one restricted to the other
     * gender. A partner reused across more than one location keeps only
     * its first occurrence, same as getAllBattles.
     */
    static getAllTagPartners(
        game: Game,
        gender: 'male' | 'female' | undefined
    ): { battleKey: string; label: string }[] {
        const toEntry = (
            tagPartner: TagPartner,
            locationName: string
        ): { battleKey: string; label: string } => ({
            battleKey: tagPartner.battleKey,
            label: `${BattleHelpers.getFullName(
                { battleKey: tagPartner.battleKey, x: 0, y: 0 },
                game
            )} (${locationName})`,
        });

        const entries = game.splits.flatMap((split) =>
            split.locations.flatMap((location) => {
                if (location.subareas) {
                    return location.subareas.flatMap((subarea) =>
                        BattleHelpers.filterByGender(
                            subarea.tagPartner ?? [],
                            gender
                        ).map((tagPartner) =>
                            toEntry(tagPartner, location.name)
                        )
                    );
                }
                return BattleHelpers.filterByGender(
                    location.tagPartner ?? [],
                    gender
                ).map((tagPartner) => toEntry(tagPartner, location.name));
            })
        );

        const seen = new Set<string>();
        return entries.filter((entry) => {
            if (seen.has(entry.battleKey)) return false;
            seen.add(entry.battleKey);
            return true;
        });
    }

    /** The battleKey of the tag partner that fights beside the player in the battle keyed by battleKey for gender: the tag partner of the location (or subarea) the battle is placed in. Undefined if there is none. */
    static getTagPartnerKey(
        game: Game,
        battleKey: string,
        gender: 'male' | 'female' | undefined
    ): string | undefined {
        const partners = game.locations.flatMap((location) =>
            (location.subareas ?? [location])
                .filter((area) =>
                    area.battles?.some(
                        (battle) => battle.battleKey === battleKey
                    )
                )
                .flatMap((area) => area.tagPartner ?? [])
        );

        return BattleHelpers.filterByGender(partners, gender)[0]?.battleKey;
    }

    /**
     * tagPartnerBattleKey's full team for starter, resolved the same way a
     * placed Battle's roster is — a tag partner has no map placement of its
     * own, so its team is looked up directly rather than via getAllBattles.
     */
    static getTagPartnerTeam(
        game: Game,
        battleKey: string | undefined,
        starter: string
    ): BattlePokemon[] {
        if (!battleKey) return [];

        return BattleHelpers.getTeamFromOptions(
            { battleKey, x: 0, y: 0 },
            starter,
            game
        );
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // getAllBattles' battles, each paired with the name of the location it's
    // first placed in.
    private static getAllBattlesWithLocations(
        game: Game,
        gender: 'male' | 'female' | undefined
    ): { battle: Battle; locationName: string }[] {
        const entries = game.locations.flatMap((location) =>
            BattleHelpers.getBattlesInLocation(
                location,
                gender,
                undefined,
                game
            ).map((battle) => ({ battle, locationName: location.name }))
        );

        const seen = new Set<string>();
        const deduped = entries.filter(({ battle }) => {
            const key = BattleHelpers.getBattleKey(battle);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });

        const splitIndexes = new Map(
            game.splits.map((split, index) => [split.name, index])
        );
        const orderIndexes = new Map(
            game.battleOrder.map((key, index) => [key, index])
        );

        return deduped
            .map((entry) => {
                const key = BattleHelpers.getBattleKey(entry.battle);
                const split = game.battles[key]?.split;
                return {
                    entry,
                    orderIndex: orderIndexes.get(key) ?? Infinity,
                    splitIndex: split ? (splitIndexes.get(split) ?? -1) : -1,
                };
            })
            .sort((a, b) =>
                a.orderIndex === b.orderIndex
                    ? a.splitIndex - b.splitIndex
                    : a.orderIndex - b.orderIndex
            )
            .map(({ entry }) => entry);
    }

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
        starter: string,
        defaultTrainerClass: string
    ): { aiFlags: AiFlag[]; team: BattlePokemon[]; trainerClass: string }[] {
        const matching = teams
            .filter((entry) =>
                BattleHelpers.matchesCondition(entry.condition, starter)
            )
            .map((entry) => ({
                aiFlags: entry.aiFlags,
                team: entry.team,
                trainerClass: entry.trainerClass ?? defaultTrainerClass,
            }));

        return matching.length > 0
            ? matching
            : [{ aiFlags: [], team: [], trainerClass: defaultTrainerClass }];
    }
}
