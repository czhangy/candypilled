import { Location, Subarea } from '@/lib/static/types';

export default class LocationHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

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
