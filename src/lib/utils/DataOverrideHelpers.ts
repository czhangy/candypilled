import { DataOverrides } from '@/lib/static/types';

export default class DataOverrideHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * base patched with overrides, field by field, per matching slug —
     * used to build a ROM-hack game's resolved pokemon/moves records from
     * vanilla data plus a sparse diff. A field present in an override
     * entry fully replaces base's value for that field (no deep-merging
     * of nested arrays/objects); a slug with no override entry passes
     * through from base unchanged.
     */
    static applyOverrides<T>(
        base: Record<string, T>,
        overrides: DataOverrides<T>
    ): Record<string, T> {
        const merged: Record<string, T> = { ...base };

        for (const slug of Object.keys(overrides)) {
            if (merged[slug]) {
                merged[slug] = { ...merged[slug], ...overrides[slug] };
            }
        }

        return merged;
    }

    /**
     * base with the given slugs deleted — used when a ROM hack removes
     * content entirely (e.g. a move retired and replaced game-wide)
     * rather than just patching its fields. A slug not present in base is
     * ignored.
     */
    static removeEntries<T>(
        base: Record<string, T>,
        slugs: string[]
    ): Record<string, T> {
        const removed = new Set(slugs);
        return Object.fromEntries(
            Object.entries(base).filter(([slug]) => !removed.has(slug))
        );
    }
}
