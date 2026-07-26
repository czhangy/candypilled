import { EncounterMethod } from '@/lib/static/enums';
import {
    Encounter,
    EncounterLocation,
    EncounterVisibilityContext,
    Game,
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
    // "Hide Dupes": the species (or its evolution line) has already been
    // caught elsewhere in the run.
    (encounter, context) => {
        if (!context.settings['hide-dupes']) return false;

        const isCaughtHere =
            !!context.caughtHere &&
            EvolutionHelpers.isSameEvolutionLine(
                encounter.species,
                context.caughtHere,
                context.generation
            );

        return (
            !isCaughtHere &&
            context.dupes.some((slug) =>
                EvolutionHelpers.isSameEvolutionLine(
                    encounter.species,
                    slug,
                    context.generation
                )
            )
        );
    },
    // "Starter As Separate Encounter": starter-method rows are tracked as
    // their own encounter instead of appearing in the table.
    (encounter, context) =>
        context.starterCaughtSeparately &&
        encounter.method === EncounterMethod.Starter,
    // "Hide Legendaries": the species is a legendary/mythical.
    (encounter, context) =>
        !!context.settings['hide-legendaries'] &&
        !!PokemonHelpers.getPokemonData(encounter.species)?.isLegendary,
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
     * Every species with a wild encounter reachable from game.splits (i.e.
     * actually wired into a location/subarea, not just present somewhere in
     * game.encounters), deduped and sorted alphabetically by display name.
     */
    static getAllEncounterSpecies(game: Game): PokemonData[] {
        const locations = EncounterHelpers.getWiredLocations(game);

        const slugs = new Set<string>();
        for (const { encountersKey } of locations) {
            if (!encountersKey) continue;

            const encounters = game.encounters[encountersKey] ?? [];
            for (const encounter of encounters) {
                slugs.add(encounter.species);
            }
        }

        const species = [...slugs]
            .map((slug) => PokemonHelpers.getPokemonData(slug))
            .filter((pokemon): pokemon is PokemonData => !!pokemon);

        return species.sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Whether any ENCOUNTER_HIDE_RULE (hide-dupes, starter-as-separate-
     * encounter, hide-legendaries, and any future setting-driven rule)
     * permanently hides this encounter, independent of the currently
     * selected time of day.
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
     * Whether every one of a location's encounters is either an evolution
     * line caught elsewhere in the run, or a starter tracked separately —
     * i.e. the location's "already caught" indicator, independent of
     * whether the hide-dupes setting is actually on.
     */
    static areAllEncountersDupes(
        encounters: Encounter[],
        dupes: string[],
        caughtHere: string | undefined,
        starterCaughtSeparately: boolean,
        generation: number
    ): boolean {
        return EncounterHelpers.areAllEncountersHidden(encounters, {
            caughtHere,
            dupes,
            generation,
            settings: { 'hide-dupes': true },
            starterCaughtSeparately,
        });
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

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
                    minLevel: Math.min(
                        ...group.map(({ encounter: { minLevel } }) => minLevel)
                    ),
                    maxLevel: Math.max(
                        ...group.map(({ encounter: { maxLevel } }) => maxLevel)
                    ),
                    conditions: undefined,
                },
            };
        });
    }
}
