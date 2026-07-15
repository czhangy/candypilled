interface DexRange {
    generation: number;
    start: number;
    end: number;
}

export const DEX_RANGES: DexRange[] = [
    { generation: 1, start: 1, end: 151 },
    { generation: 2, start: 152, end: 251 },
    { generation: 3, start: 252, end: 386 },
    { generation: 4, start: 387, end: 493 },
];

// The national dex number of the last species introduced by the given
// generation, i.e. the upper bound to enrich when a script covers every
// species up through that generation.
export const getMaxDexNumber = (generation: number): number => {
    const range = DEX_RANGES.find(
        (candidate) => candidate.generation === generation
    );
    if (!range) {
        throw new Error(
            `No dex range is configured for generation ${generation}.`
        );
    }

    return range.end;
};

// The generation that introduced the species at the given national dex
// number, i.e. which era's sprites/data are the earliest that can exist for
// it.
export const getGenerationForDexNumber = (dexNumber: number): number => {
    const range = DEX_RANGES.find(
        (candidate) =>
            dexNumber >= candidate.start && dexNumber <= candidate.end
    );
    if (!range) {
        throw new Error(`No dex range is configured for #${dexNumber}.`);
    }

    return range.generation;
};
