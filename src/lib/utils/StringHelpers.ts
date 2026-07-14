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

    static toCamelCase(value: string): string {
        return StringHelpers.toSlug(value).replace(/-(.)/g, (_match, char) =>
            char.toUpperCase()
        );
    }

    static toTitleCase(value: string): string {
        return StringHelpers.toSlug(value)
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    static toConstantCase(value: string): string {
        return StringHelpers.toSlug(value).replace(/-/g, '_').toUpperCase();
    }

    static toRoman(value: number): string {
        return StringHelpers.ROMAN_NUMERALS[value - 1];
    }

    static fromRoman(value: string): number {
        return StringHelpers.ROMAN_NUMERALS.indexOf(value.toUpperCase()) + 1;
    }
}
