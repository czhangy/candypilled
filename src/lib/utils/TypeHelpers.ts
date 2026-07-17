export default class TypeHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** type's display color, or undefined if type doesn't match a known type. */
    static getTypeColor(type: string): string | undefined {
        return TypeHelpers.COLORS[type];
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Sampled from each type's dominant fill color in /public/types/*.png.
    private static readonly COLORS: Record<string, string> = {
        bug: '#a8b820',
        dark: '#705848',
        dragon: '#7038f8',
        electric: '#f8d030',
        fairy: '#f890a8',
        fighting: '#c03028',
        fire: '#f08030',
        flying: '#a890f0',
        ghost: '#705898',
        grass: '#78c850',
        ground: '#e0c068',
        ice: '#98d8d8',
        normal: '#a8a878',
        poison: '#a040a0',
        psychic: '#f85888',
        rock: '#b8a038',
        steel: '#b8b8d0',
        unknown: '#68a090',
        water: '#6890f0',
    };
}
