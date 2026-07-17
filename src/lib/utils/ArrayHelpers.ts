export default class ArrayHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static pickRandom<T>(values: T[]): T {
        return values[Math.floor(Math.random() * values.length)];
    }
}
