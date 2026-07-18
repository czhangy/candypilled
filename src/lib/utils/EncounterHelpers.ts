import { EncounterMethod } from '@/lib/static/enums';
import { EncounterLocation, Game } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

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
        species: string
    ): EncounterLocation[] {
        const locations = EncounterHelpers.getWiredLocations(game);

        const matches = locations.flatMap(({ name, encountersKey }) => {
            if (!encountersKey) return [];

            const encounters = game.encounters[encountersKey] ?? [];
            return encounters
                .filter((encounter) => encounter.species === species)
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
    static getAllEncounterSpecies(game: Game): string[] {
        const locations = EncounterHelpers.getWiredLocations(game);

        const slugs = new Set<string>();
        for (const { encountersKey } of locations) {
            if (!encountersKey) continue;

            const encounters = game.encounters[encountersKey] ?? [];
            for (const encounter of encounters) {
                slugs.add(encounter.species);
            }
        }

        const names = new Set(
            [...slugs].map(
                (slug) => PokemonHelpers.getPokemonData(slug)?.name ?? slug
            )
        );

        return [...names].sort((a, b) => a.localeCompare(b));
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
