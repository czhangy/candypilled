import { Battle, Location, Subarea } from '@/lib/static/types';

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
}
