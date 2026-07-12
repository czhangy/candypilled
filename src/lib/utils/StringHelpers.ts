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

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static toSlug(value: string): string {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    static toRoman(value: number): string {
        return StringHelpers.ROMAN_NUMERALS[value - 1];
    }
}
