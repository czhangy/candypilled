export default class StringHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly ROMAN_NUMERALS = [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
        'X',
    ];

    // Combining diacritical marks left behind by NFD normalization (e.g. the
    // acute accent in "é"), stripped so accented letters slug down to their
    // unaccented base letter instead of a separator.
    private static readonly DIACRITIC_MARKS = /[̀-ͯ]/g;

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** value as a lowercase, hyphen-separated slug, with accents stripped. */
    static toSlug(value: string): string {
        return value
            .normalize('NFD')
            .replace(StringHelpers.DIACRITIC_MARKS, '')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    /** value in camelCase. */
    static toCamelCase(value: string): string {
        return StringHelpers.toSlug(value).replace(/-(.)/g, (_match, char) =>
            char.toUpperCase()
        );
    }

    /** value in Title Case. */
    static toTitleCase(value: string): string {
        return StringHelpers.toSlug(value)
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /** value in CONSTANT_CASE. */
    static toConstantCase(value: string): string {
        return StringHelpers.toSlug(value).replace(/-/g, '_').toUpperCase();
    }

    /** value (1-10) as a Roman numeral. */
    static toRoman(value: number): string {
        return StringHelpers.ROMAN_NUMERALS[value - 1];
    }

    /** The number (1-10) a Roman numeral represents. */
    static fromRoman(value: string): number {
        return StringHelpers.ROMAN_NUMERALS.indexOf(value.toUpperCase()) + 1;
    }
}
