export default class ArrayHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** A random element from values. */
    static pickRandom<T>(values: T[]): T {
        return values[Math.floor(Math.random() * values.length)];
    }
}
