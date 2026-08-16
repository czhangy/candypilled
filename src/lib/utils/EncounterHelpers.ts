import { EncounterMethod } from '@/lib/static/enums';
import {
    BattleData,
    Encounter,
    EncounterLocation,
    EncounterVisibilityContext,
    Game,
    GameDataSource,
    PokemonData,
} from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

type EncounterHideRule = (
    encounter: Encounter,
    context: EncounterVisibilityContext
) => boolean;

// Every reason an encounter can be permanently hidden from the encounter
// table and factored out of "does this location have anything left to show".
// Add a new rule here (reading whatever setting id it needs from
// `context.settings`) and both EncounterTable and the section-visibility
// checks below pick it up automatically.
const ENCOUNTER_HIDE_RULES: EncounterHideRule[] = [
    // Dupes (the species or its evolution line has already been caught
    // elsewhere in the run) are hidden unless "Show Dupes" is on.
    (encounter, context) => {
        if (context.settings['show-dupes']) return false;

        const isCaughtHere =
            !!context.caughtHere &&
            EvolutionHelpers.isSameEvolutionLine(
                context.dataSource,
                encounter.species,
                context.caughtHere,
                context.generation
            );

        return (
            !isCaughtHere &&
            context.dupes.some((slug) =>
                EvolutionHelpers.isSameEvolutionLine(
                    context.dataSource,
                    encounter.species,
                    slug,
                    context.generation
                )
            )
        );
    },
    // Legendaries/mythicals are hidden unless "Show Legendaries" is on.
    (encounter, context) =>
        !context.settings['show-legendaries'] &&
        !!PokemonHelpers.getPokemonData(context.dataSource, encounter.species)
            ?.isLegendary,
];

export default class EncounterHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Flattens every split/location/subarea's wild encounters down to the
     * ones for a single species, paired with a display name for where they
     * were found. A subarea's name is combined with its location's, since
     * subarea names alone (e.g. "South") aren't meaningful out of context.
     * The same location/method pair can appear multiple times under
     * different conditions (e.g. one row per time of day); those are
     * deduped down to a single row using the highest chance among them and
     * a level range spanning all of them.
     */
    static getEncounterLocations(
        game: Game,
        slug: string
    ): EncounterLocation[] {
        const locations = EncounterHelpers.getWiredLocations(game);

        const matches = locations.flatMap(({ name, encountersKey }) => {
            if (!encountersKey) return [];

            const encounters = game.encounters[encountersKey] ?? [];
            return encounters
                .filter((encounter) => encounter.species === slug)
                .map((encounter) => ({ name, encounter }));
        });

        return EncounterHelpers.dedupeByCondition(matches);
    }

    /**
     * The display name of the wired location whose encounters include the
     * "starter" method (i.e. the route where starters are actually handed
     * out in-game). Assumes every game wires up such a location.
     */
    static getStarterLocationName(game: Game): string {
        const locations = EncounterHelpers.getWiredLocations(game);

        return locations.find(({ encountersKey }) => {
            if (!encountersKey) return false;

            const encounters = game.encounters[encountersKey] ?? [];
            return encounters.some(
                (encounter) => encounter.method === EncounterMethod.Starter
            );
        })!.name;
    }

    /**
     * Whether any ENCOUNTER_HIDE_RULE (show-dupes, show-legendaries, and
     * any future setting-driven rule) permanently hides this encounter,
     * independent of the currently selected time of day.
     */
    static isEncounterHidden(
        encounter: Encounter,
        context: EncounterVisibilityContext
    ): boolean {
        return ENCOUNTER_HIDE_RULES.some((rule) => rule(encounter, context));
    }

    /**
     * Whether every one of a location's encounters is permanently hidden
     * (see isEncounterHidden) — i.e. nothing would ever render there
     * regardless of which time of day is selected.
     */
    static areAllEncountersHidden(
        encounters: Encounter[],
        context: EncounterVisibilityContext
    ): boolean {
        if (encounters.length === 0) return false;

        return encounters.every((encounter) =>
            EncounterHelpers.isEncounterHidden(encounter, context)
        );
    }

    /**
     * Whether every one of a location's encounters is an evolution line
     * caught elsewhere in the run — i.e. the location's "already caught"
     * indicator, independent of whether the show-dupes setting is
     * actually on.
     */
    static areAllEncountersDupes(
        dataSource: GameDataSource,
        encounters: Encounter[],
        dupes: string[],
        caughtHere: string | undefined,
        generation: number
    ): boolean {
        return EncounterHelpers.areAllEncountersHidden(encounters, {
            caughtHere,
            dataSource,
            dupes,
            generation,
            settings: { 'show-dupes': false },
        });
    }

    /**
     * Every species obtainable in game, sorted by dex number. Scopes the
     * Data tab's species lists to what's actually relevant to game, rather
     * than every species that's ever existed — unless includeAllSpecies
     * (the "Show National Dex Data" setting) is set, in which case every
     * species in game.generation is returned instead, still sorted by dex
     * number. When filtering, "obtainable" means: encountered in the wild,
     * fielded by a trainer (across every starter's team variant), or part
     * of one of those species' evolution lines.
     */
    static getGameSpecies(
        game: Game,
        includeAllSpecies: boolean
    ): PokemonData[] {
        const allSpecies = PokemonHelpers.getAllSpecies(
            game.dataSource,
            game.generation
        );
        if (includeAllSpecies) {
            return [...allSpecies].sort((a, b) => a.dexNumber - b.dexNumber);
        }

        const encounteredSlugs = Object.values(game.encounters)
            .flat()
            .map((encounter) => encounter.species);

        const battledSlugs = Object.values(game.battles).flatMap((battle) =>
            EncounterHelpers.getBattleSlugs(battle)
        );

        const familySlugs = new Set(
            [...encounteredSlugs, ...battledSlugs].flatMap((slug) =>
                EvolutionHelpers.getEvolutionFamily(
                    game.dataSource,
                    slug,
                    game.generation
                )
            )
        );

        return allSpecies
            .filter((pokemon) => familySlugs.has(pokemon.slug))
            .sort((a, b) => a.dexNumber - b.dexNumber);
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Every species slug across a battle's team(s): every one of its own
    // teams, and (for a tag battle) its second trainer's.
    private static getBattleSlugs(battle: BattleData): string[] {
        const teams = [...battle.teams, ...(battle.secondTrainer?.teams ?? [])];

        return teams.flatMap((entry) =>
            entry.team.map((pokemon) => pokemon.slug)
        );
    }

    // Flattens every split/location/subarea down to a name/encountersKey
    // pair, mirroring how a location's wild encounters are actually wired
    // up for display (a subarea's name is combined with its location's).
    private static getWiredLocations(
        game: Game
    ): { name: string; encountersKey?: string }[] {
        return game.splits.flatMap((split) =>
            split.locations.flatMap((location) =>
                location.subareas
                    ? location.subareas.map((subarea) => ({
                          name: `${location.name} (${subarea.name})`,
                          encountersKey: subarea.encountersKey,
                      }))
                    : [
                          {
                              name: location.name,
                              encountersKey: location.encountersKey,
                          },
                      ]
            )
        );
    }

    private static dedupeByCondition(
        matches: EncounterLocation[]
    ): EncounterLocation[] {
        const groups = new Map<string, EncounterLocation[]>();

        for (const match of matches) {
            const key = `${match.name}::${match.encounter.method}`;
            groups.set(key, [...(groups.get(key) ?? []), match]);
        }

        return [...groups.values()].map((group) => {
            const { name, encounter } = group[0];

            return {
                name,
                encounter: {
                    ...encounter,
                    chance: group.reduce<number | null>(
                        (highest, { encounter: candidate }) =>
                            candidate.chance !== null &&
                            (highest === null || candidate.chance > highest)
                                ? candidate.chance
                                : highest,
                        null
                    ),
                    minLevel: EncounterHelpers.reduceLevels(
                        group.map(({ encounter }) => encounter.minLevel),
                        Math.min
                    ),
                    maxLevel: EncounterHelpers.reduceLevels(
                        group.map(({ encounter }) => encounter.maxLevel),
                        Math.max
                    ),
                    conditions: undefined,
                },
            };
        });
    }

    // A group's encounters all share the same method, so their levels are
    // either all numbers or all null (trade encounters have no level).
    private static reduceLevels(
        levels: (number | null)[],
        reducer: (...values: number[]) => number
    ): number | null {
        const numericLevels = levels.filter(
            (level): level is number => level !== null
        );

        return numericLevels.length > 0 ? reducer(...numericLevels) : null;
    }
}
