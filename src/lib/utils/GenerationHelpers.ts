type GenerationEntry = { fromGeneration: number };

export default class GenerationHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * The entry in `entries` that was current as of `generation` — the last
     * one whose `fromGeneration` is at or before it. `entries` is expected
     * in ascending `fromGeneration` order.
     */
    static resolveGeneration<T extends GenerationEntry>(
        entries: T[],
        generation: number
    ): T | undefined {
        return [...entries]
            .reverse()
            .find((entry) => entry.fromGeneration <= generation);
    }
}
