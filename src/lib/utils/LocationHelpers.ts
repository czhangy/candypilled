import {
    Battle,
    EncounterLocation,
    Game,
    Location,
    Subarea,
} from '@/lib/static/types';

export default class LocationHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getBattles(location: Location): Battle[] {
        return location.subareas
            ? location.subareas
                  .filter((subarea) => !subarea.hideBattles)
                  .flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? []);
    }

    // Flattens every split/location/subarea's wild encounters down to the
    // ones for a single species, paired with a display name for where they
    // were found. A subarea's name is combined with its location's, since
    // subarea names alone (e.g. "South") aren't meaningful out of context.
    // The same location/method pair can appear multiple times under
    // different conditions (e.g. one row per time of day); those are
    // deduped down to a single row using the highest chance among them and
    // a level range spanning all of them.
    static getEncounterLocations(
        game: Game,
        species: string
    ): EncounterLocation[] {
        const locations = game.splits.flatMap((split) =>
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

        const matches = locations.flatMap(({ name, encountersKey }) => {
            if (!encountersKey) return [];

            const encounters = game.encounters[encountersKey]?.encounters ?? [];
            return encounters
                .filter((encounter) => encounter.species === species)
                .map((encounter) => ({ name, encounter }));
        });

        return LocationHelpers.dedupeByCondition(matches);
    }

    // Returns a copy of the location with the named subareas' battles hidden
    // (no markers/battle card/default-selection), without mutating the
    // original — for reusing the same location's data across splits that
    // shouldn't all render the same battles.
    static withHiddenSubareaBattles(
        location: Location,
        subareaNames: string[]
    ): Location {
        if (!location.subareas) return location;

        return {
            ...location,
            subareas: location.subareas.map((subarea) =>
                subareaNames.includes(subarea.name)
                    ? { ...subarea, hideBattles: true }
                    : subarea
            ),
        };
    }

    // Returns a copy of the location with its subareas reordered to match
    // the given name order, without mutating the original — for reusing the
    // same location's data across splits that want a different subarea
    // display order. Names not found are dropped; subareas not named are
    // dropped too.
    static withSubareaOrder(location: Location, order: string[]): Location {
        if (!location.subareas) return location;

        const subareasByName = new Map(
            location.subareas.map((subarea) => [subarea.name, subarea])
        );

        return {
            ...location,
            subareas: order.reduce<Subarea[]>((subareas, name) => {
                const subarea = subareasByName.get(name);
                return subarea ? [...subareas, subarea] : subareas;
            }, []),
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

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
