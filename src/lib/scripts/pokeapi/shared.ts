import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_GENERATION_URL = 'https://pokeapi.co/api/v2/generation';

type RawGeneration = {
    version_groups: { name: string }[];
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

// Maps every version group (e.g. "diamond-pearl") to the generation number
// it belongs to, since move/ability/evolution/learnset history references a
// version group rather than a generation number directly. `delayMs` uses
// the caller's own fetch delay so this shares the same rate limit as the
// rest of that script.
export const buildVersionGroupGenerations = async (
    delayMs: number
): Promise<Map<string, number>> => {
    const generationCount = await fetchGenerationCount();
    const versionGroupGenerations = new Map<string, number>();

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
    }

    return versionGroupGenerations;
};
