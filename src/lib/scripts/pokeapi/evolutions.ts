import fs from 'fs';
import path from 'path';
import { getMaxDexNumber } from '@/lib/scripts/pokeapi/dex-ranges';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import {
    handleException,
    logSuccess,
    logWarning,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import {
    EvolutionLineByGeneration,
    EvolutionMethod,
    EvolutionStep,
    PokemonData,
} from '@/lib/static/types';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const POKEAPI_GENERATION_URL = 'https://pokeapi.co/api/v2/generation';
const DATA_PATH = path.join('src', 'lib', 'data', 'pokemon.json');
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = getMaxDexNumber(CURRENT_GAME_VERSION.generation);

// PokeAPI's evolution_detail.gender is the id of the /gender/ resource that
// must be met for that evolution method to apply.
const GENDER_NAMES: Record<number, string> = {
    1: 'female',
    2: 'male',
    3: 'genderless',
};

const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const readData = (): Record<string, PokemonData> => {
    if (!fs.existsSync(DATA_PATH)) return {};
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
};

const writeData = (data: Record<string, PokemonData>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

interface RawGeneration {
    version_groups: { name: string }[];
}

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

// Evolution details reference a version group (e.g. "diamond-pearl") rather
// than a generation number directly, so this builds the lookup once up
// front instead of resolving it per-Pokemon.
const buildVersionGroupGenerations = async (): Promise<Map<string, number>> => {
    const generationCount = await fetchGenerationCount();
    const versionGroupGenerations = new Map<string, number>();

    for (
        let generationNumber = 1;
        generationNumber <= generationCount;
        generationNumber += 1
    ) {
        const generation = await fetchGeneration(generationNumber);
        await sleep(FETCH_DELAY_MS);

        for (const versionGroup of generation.version_groups) {
            versionGroupGenerations.set(versionGroup.name, generationNumber);
        }
    }

    return versionGroupGenerations;
};

interface Variety {
    name: string;
    url: string;
}

interface RawSpecies {
    name: string;
    evolution_chain: { url: string };
    varieties: { pokemon: { name: string; url: string } }[];
}

const fetchSpecies = async (dexNumber: number): Promise<RawSpecies> => {
    const response = await fetch(`${POKEAPI_SPECIES_URL}/${dexNumber}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch species #${dexNumber} from PokeAPI.`);
    }

    return (await response.json()) as RawSpecies;
};

const toVarieties = (species: RawSpecies): Variety[] =>
    species.varieties.map((variety) => ({
        name: variety.pokemon.name,
        url: variety.pokemon.url,
    }));

interface RawEvolutionDetail {
    trigger: { name: string };
    item: { name: string } | null;
    held_item: { name: string } | null;
    min_level: number | null;
    min_happiness: number | null;
    min_beauty: number | null;
    min_affection: number | null;
    gender: number | null;
    time_of_day: string;
    known_move: { name: string } | null;
    known_move_type: { name: string } | null;
    location: { name: string } | null;
    trade_species: { name: string } | null;
    needs_overworld_rain: boolean;
    turn_upside_down: boolean;
    party_type: { name: string } | null;
    party_species: { name: string } | null;
    relative_physical_stats: number | null;
    version_group: { name: string };
}

interface RawChainLink {
    species: { name: string };
    evolution_details: RawEvolutionDetail[];
    evolves_to: RawChainLink[];
}

interface RawEvolutionChain {
    chain: RawChainLink;
}

const fetchEvolutionChain = async (url: string): Promise<RawEvolutionChain> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch evolution chain from "${url}".`);
    }

    return (await response.json()) as RawEvolutionChain;
};

const toMethod = (detail: RawEvolutionDetail): EvolutionMethod => {
    const method: EvolutionMethod = { trigger: detail.trigger.name };

    if (detail.item) method.item = detail.item.name;
    if (detail.held_item) method.heldItem = detail.held_item.name;
    if (detail.min_level !== null) method.minLevel = detail.min_level;
    if (detail.min_happiness !== null)
        method.minHappiness = detail.min_happiness;
    if (detail.min_beauty !== null) method.minBeauty = detail.min_beauty;
    if (detail.min_affection !== null)
        method.minAffection = detail.min_affection;
    if (detail.gender !== null) method.gender = GENDER_NAMES[detail.gender];
    if (detail.time_of_day) method.timeOfDay = detail.time_of_day;
    if (detail.known_move) method.knownMove = detail.known_move.name;
    if (detail.known_move_type)
        method.knownMoveType = detail.known_move_type.name;
    if (detail.location) method.location = detail.location.name;
    if (detail.trade_species) method.tradeSpecies = detail.trade_species.name;
    if (detail.needs_overworld_rain) method.needsOverworldRain = true;
    if (detail.turn_upside_down) method.turnUpsideDown = true;
    if (detail.party_type) method.partyType = detail.party_type.name;
    if (detail.party_species) method.partySpecies = detail.party_species.name;
    if (detail.relative_physical_stats !== null)
        method.relativePhysicalStats = detail.relative_physical_stats;

    return method;
};

interface FullNode {
    name: string;
    children: FullEdge[];
}

interface FullEdge {
    // The generation from which this edge's evolution first became
    // possible, taken as the earliest version group across all of its
    // alternate methods (an edge can list several ways to trigger the same
    // evolution, introduced across different games).
    fromGeneration: number;
    methods: EvolutionMethod[];
    node: FullNode;
}

// A handful of chain edges (e.g. Phione -> Manaphy) carry no
// evolution_details at all, since PokeAPI models breeding relationships as
// evolution chain edges too even though they have no trigger. Treat those
// as always available rather than taking Math.min() of an empty array.
const edgeFromGeneration = (
    child: RawChainLink,
    versionGroupGenerations: Map<string, number>
): number => {
    if (child.evolution_details.length === 0) return 1;

    return Math.min(
        ...child.evolution_details.map(
            (detail) =>
                versionGroupGenerations.get(detail.version_group.name) ?? 1
        )
    );
};

const parseChain = (
    link: RawChainLink,
    versionGroupGenerations: Map<string, number>
): FullNode => ({
    name: link.species.name,
    children: link.evolves_to.map((child) => ({
        fromGeneration: edgeFromGeneration(child, versionGroupGenerations),
        methods: child.evolution_details.map(toMethod),
        node: parseChain(child, versionGroupGenerations),
    })),
});

interface PathEdge {
    name: string;
    fromGeneration: number;
    methods: EvolutionMethod[];
}

interface PathResult {
    edges: PathEdge[];
    node: FullNode;
}

// Walks down from the chain root to find the target species, returning the
// single-path chain of edges leading to it (a Pokemon can only have one
// direct predecessor, even though it may have several possible successors).
const findPath = (node: FullNode, targetName: string): PathResult | null => {
    if (node.name === targetName) return { edges: [], node };

    for (const child of node.children) {
        const result = findPath(child.node, targetName);
        if (!result) continue;

        return {
            edges: [
                {
                    name: child.node.name,
                    fromGeneration: child.fromGeneration,
                    methods: child.methods,
                },
                ...result.edges,
            ],
            node: result.node,
        };
    }

    return null;
};

const collectDescendantGenerations = (node: FullNode): number[] =>
    node.children.flatMap((child) => [
        child.fromGeneration,
        ...collectDescendantGenerations(child.node),
    ]);

// Only omits branches that aren't available yet at the given generation
// (e.g. Kirlia -> Gallade before generation IV). Branches that remain
// available keep their own full, further-branching subtree.
const pruneDescendants = (
    node: FullNode,
    generation: number
): EvolutionStep[] =>
    node.children
        .filter((child) => child.fromGeneration <= generation)
        .map((child) => ({
            name: child.node.name,
            methods: child.methods,
            evolvesTo: pruneDescendants(child.node, generation),
        }));

// Builds the line as visible from the target's perspective at a single
// generation. Ancestor edges not yet available at this generation collapse
// the visible line's root forward (e.g. Snorlax has no visible predecessor
// before Munchlax was introduced in generation IV) rather than being
// dropped in place, since an ancestor can only be hidden by hiding
// everything above it too.
const buildLine = (
    rootNode: FullNode,
    edges: PathEdge[],
    targetNode: FullNode,
    generation: number
): EvolutionStep => {
    const nodeNames = [rootNode.name, ...edges.map((edge) => edge.name)];

    let rootIndex = 0;
    edges.forEach((edge, index) => {
        if (edge.fromGeneration > generation) rootIndex = index + 1;
    });

    const buildFrom = (index: number): EvolutionStep => {
        const isTarget = index === nodeNames.length - 1;
        const methods =
            index > rootIndex ? edges[index - 1].methods : undefined;

        return {
            name: nodeNames[index],
            methods,
            evolvesTo: isTarget
                ? pruneDescendants(targetNode, generation)
                : [buildFrom(index + 1)],
        };
    };

    return buildFrom(rootIndex);
};

const buildEvolutionLine = (
    rootNode: FullNode,
    edges: PathEdge[],
    targetNode: FullNode
): EvolutionLineByGeneration[] => {
    const boundaries = [
        1,
        ...edges.map((edge) => edge.fromGeneration),
        ...collectDescendantGenerations(targetNode),
    ];
    const generations = [...new Set(boundaries)].sort((a, b) => a - b);

    const segments: EvolutionLineByGeneration[] = [];
    for (const generation of generations) {
        const line = buildLine(rootNode, edges, targetNode, generation);

        const previous = segments[segments.length - 1];
        if (previous && JSON.stringify(previous.line) === JSON.stringify(line))
            continue;

        segments.push({ fromGeneration: generation, line });
    }

    return segments;
};

export const fetchEvolutions = async (): Promise<void> => {
    const data = readData();
    const versionGroupGenerations = await buildVersionGroupGenerations();
    const chainCache = new Map<string, FullNode>();

    for (let dexNumber = 1; dexNumber <= MAX_DEX_NUMBER; dexNumber += 1) {
        const species = await fetchSpecies(dexNumber);
        await sleep(FETCH_DELAY_MS);

        const chainUrl = species.evolution_chain.url;
        let rootNode = chainCache.get(chainUrl);
        if (!rootNode) {
            const rawChain = await fetchEvolutionChain(chainUrl);
            await sleep(FETCH_DELAY_MS);

            rootNode = parseChain(rawChain.chain, versionGroupGenerations);
            chainCache.set(chainUrl, rootNode);
        }

        const path = findPath(rootNode, species.name);
        if (!path) {
            logWarning(
                `Could not locate "${species.name}" in its own evolution chain.`
            );
            continue;
        }

        const evolutionLine = buildEvolutionLine(
            rootNode,
            path.edges,
            path.node
        );

        // Varieties include forms irrelevant to this dex (Mega, Gigantamax,
        // regional forms from later generations, etc.). Only enrich entries
        // that pokeapi:sprites already curated as relevant to this game.
        for (const variety of toVarieties(species)) {
            const pokemon = data[variety.name];
            if (!pokemon) continue;

            pokemon.evolutionLine = evolutionLine;
            logSuccess(`Fetched evolution line for "${pokemon.name}".`);
        }
    }

    writeData(data);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await fetchEvolutions();
    } catch (error) {
        handleException(error);
    }
};

main();
