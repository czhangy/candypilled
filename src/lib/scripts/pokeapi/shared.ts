import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_GENERATION_URL = 'https://pokeapi.co/api/v2/generation';

type RawGeneration = {
    version_groups: { name: string }[];
};

type GenerationMaps = {
    // Move/ability/evolution history references a version group (e.g.
    // "diamond-pearl") rather than a generation number directly.
    versionGroupGenerations: Map<string, number>;
    // Learnsets are reported per version group with no "past values" diff to
    // lean on, so each generation is represented by its last (most up to
    // date) version group, e.g. "platinum" over "diamond-pearl".
    representativeVersionGroups: Map<number, string>;
};

export const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const toGenerationNumber = (generationName: string): number =>
    StringHelpers.fromRoman(generationName.replace('generation-', ''));

const fetchGenerationCount = async (): Promise<number> => {
    const response = await fetch(`${POKEAPI_GENERATION_URL}?limit=1`);
    if (!response.ok) {
        throw new Error('Failed to fetch generation count from PokeAPI.');
    }

    const body = await response.json();
    return body.count as number;
};

const fetchGeneration = async (
    generationNumber: number
): Promise<RawGeneration> => {
    const response = await fetch(
        `${POKEAPI_GENERATION_URL}/${generationNumber}`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch generation #${generationNumber} from PokeAPI.`
        );
    }

    return (await response.json()) as RawGeneration;
};

// Builds both generation lookups in a single pass over every generation, so
// callers that only need `versionGroupGenerations` (abilities, moves) and
// the one that also needs `representativeVersionGroups` (pokemon) can share
// the same fetch loop rather than hitting PokeAPI for generations twice.
// `delayMs` uses the caller's own fetch delay so this shares the same rate
// limit as the rest of that script.
export const buildGenerationMaps = async (
    delayMs: number
): Promise<GenerationMaps> => {
    const generationCount = await fetchGenerationCount();
    const versionGroupGenerations = new Map<string, number>();
    const representativeVersionGroups = new Map<number, string>();

    for (
        let generationNumber = 1;
        generationNumber <= generationCount;
        generationNumber += 1
    ) {
        const generation = await fetchGeneration(generationNumber);
        await sleep(delayMs);

        for (const versionGroup of generation.version_groups) {
            versionGroupGenerations.set(versionGroup.name, generationNumber);
        }

        const lastVersionGroup =
            generation.version_groups[generation.version_groups.length - 1];
        if (lastVersionGroup) {
            representativeVersionGroups.set(
                generationNumber,
                lastVersionGroup.name
            );
        }
    }

    return { versionGroupGenerations, representativeVersionGroups };
};
