import { Location, Subarea } from '@/lib/static/types';

export default class LocationHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * A copy of location with every battle hidden (no markers/battle
     * card/default-selection), without mutating the original — for
     * reusing the same location's data across splits where none of its
     * battles (including any subareas') belong to that split.
     */
    static withHiddenBattles(location: Location): Location {
        return { ...location, hideBattles: true };
    }

    /**
     * A copy of location with the named subareas' battles hidden (no
     * markers/battle card/default-selection), without mutating the
     * original — for reusing the same location's data across splits that
     * shouldn't all render the same battles.
     */
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

    /**
     * A copy of location with its subareas reordered to match the given
     * name order, without mutating the original — for reusing the same
     * location's data across splits that want a different subarea display
     * order. Names not found are dropped; subareas not named are dropped
     * too.
     */
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
