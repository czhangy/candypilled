import fs from 'fs';
import path from 'path';
import {
    getGenerationForDexNumber,
    getMaxDexNumber,
} from '@/lib/scripts/pokeapi/dex-ranges';
import { CURRENT_GAME_VERSION } from '@/lib/scripts/pokeapi/game-versions';
import {
    buildGenerationMaps,
    sleep,
    toGenerationNumber,
} from '@/lib/scripts/pokeapi/shared';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';
import {
    Abilities,
    AbilitiesByGeneration,
    EvolutionLineByGeneration,
    EvolutionMethod,
    EvolutionStep,
    LearnsetByGeneration,
    LearnsetMethod,
    LearnsetMove,
    PokemonData,
    StatsByGeneration,
    StatValues,
    TypesByGeneration,
} from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';

const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';
const DATA_PATH = path.join('src', 'lib', 'data', 'pokemon.json');
const FETCH_DELAY_MS = 75;
const MAX_DEX_NUMBER = getMaxDexNumber(CURRENT_GAME_VERSION.generation);

// Variety name fragments for forms that either have no sprites of their own
// on PokeAPI or are mechanics this site doesn't track (Mega Evolution,
// regional forms from later generations, Totem/starter/cap event forms,
// Gigantamax).
const EXCLUDED_VARIETY_PATTERNS = [
    '-gmax',
    '-mega',
    '-alola',
    '-galar',
    '-hisui',
    '-paldea',
    '-totem',
    '-starter',
    'pikachu-',
    'dialga-origin',
    'palkia-origin',
];

// Varieties that can't actually persist outside of battle (e.g. Castform's
// weather forms) or that automatically revert on deposit into a PC box
// (e.g. Shaymin's Sky Forme), so they'd never be a real caught Pokemon's
// permanent form. PokeAPI's is_battle_only form flag only covers the
// former case, so this is curated by hand rather than derived from the API.
const TEMPORARY_FORM_VARIETIES = new Set([
    'castform-sunny',
    'castform-rainy',
    'castform-snowy',
    'shaymin-sky',
]);

// -------------------------------------------------------------------------
// Shared fetch helpers
// -------------------------------------------------------------------------

const writeData = (data: Record<string, PokemonData>): void => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(data, null, 4)}\n`);
};

type Variety = {
    name: string;
    url: string;
};

type RawSpecies = {
    name: string;
    capture_rate: number;
    evolution_chain: { url: string };
    varieties: { pokemon: { name: string; url: string } }[];
};

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

// A single /pokemon/{id} response carries every per-variety field this file
// needs (sprites, types, abilities, stats, moves), so each variety is only
// fetched once and reused to build all of them, rather than once per field.
type RawTypeSlot = {
    slot: number;
    type: { name: string };
};

type RawPastType = {
    generation: { name: string };
    types: RawTypeSlot[];
};

type RawAbilitySlot = {
    ability: { name: string } | null;
    is_hidden: boolean;
    slot: number;
};

type RawPastAbility = {
    generation: { name: string };
    abilities: RawAbilitySlot[];
};

type RawStat = {
    base_stat: number;
    stat: { name: string };
};

type RawPastStat = {
    generation: { name: string };
    stats: RawStat[];
};

type RawVersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: { name: string };
    version_group: { name: string };
};

type RawMoveEntry = {
    move: { name: string };
    version_group_details: RawVersionGroupDetail[];
};

type RawPokemon = {
    name: string;
    sprites: unknown;
    types: RawTypeSlot[];
    past_types: RawPastType[];
    abilities: RawAbilitySlot[];
    past_abilities: RawPastAbility[];
    stats: RawStat[];
    past_stats: RawPastStat[];
    moves: RawMoveEntry[];
};

const fetchRawPokemon = async (variety: Variety): Promise<RawPokemon> => {
    const response = await fetch(variety.url);
    if (!response.ok) {
        throw new Error(`Failed to fetch "${variety.name}" from PokeAPI.`);
    }

    return (await response.json()) as RawPokemon;
};

// -------------------------------------------------------------------------
// Sprites
// -------------------------------------------------------------------------

type SpriteVariant = {
    id: string;
    label: string;
    generation: number;
};

const SPRITE_VARIANTS: SpriteVariant[] = [
    { id: 'ruby-sapphire', label: 'Ruby/Sapphire', generation: 3 },
    { id: 'emerald', label: 'Emerald', generation: 3 },
    { id: 'firered-leafgreen', label: 'FireRed/LeafGreen', generation: 3 },
    { id: 'diamond-pearl', label: 'Diamond/Pearl', generation: 4 },
    { id: 'platinum', label: 'Platinum', generation: 4 },
    {
        id: 'heartgold-soulsilver',
        label: 'HeartGold/SoulSilver',
        generation: 4,
    },
];

const RUBY_SAPPHIRE_VARIANT = SPRITE_VARIANTS.find(
    (variant) => variant.id === 'ruby-sapphire'
) as SpriteVariant;

const getSpriteUrl = (
    sprites: unknown,
    variant: SpriteVariant
): string | null => {
    const generationKey = `generation-${StringHelpers.toRoman(
        variant.generation
    ).toLowerCase()}`;

    return (
        (
            sprites as {
                versions?: Record<
                    string,
                    Record<string, { front_default: string | null }>
                >;
            }
        )?.versions?.[generationKey]?.[variant.id]?.front_default ?? null
    );
};

const downloadSprite = async (
    slug: string,
    variant: SpriteVariant,
    spriteUrl: string
): Promise<string> => {
    const spriteResponse = await fetch(spriteUrl);
    const spriteBuffer = Buffer.from(await spriteResponse.arrayBuffer());

    const variantDir = path.join('public', variant.id, 'pokemon');
    fs.mkdirSync(variantDir, { recursive: true });
    fs.writeFileSync(path.join(variantDir, `${slug}.png`), spriteBuffer);

    return `/${variant.id}/pokemon/${slug}.png`;
};

// Sprites double as the curation step: a variety only ends up in pokemon.json
// if at least one applicable variant (its own dex generation onward) has a
// sprite for it. Forms that didn't exist yet in any game up through this
// site's target generation (Mega evolutions, later regional forms, etc.)
// naturally end up with none and are excluded.
const buildSprites = async (
    variety: Variety,
    rawPokemon: RawPokemon,
    dexGeneration: number
): Promise<Record<string, string>> => {
    const sprites: Record<string, string> = {};

    for (const variant of SPRITE_VARIANTS) {
        if (variant.generation < dexGeneration) continue;

        let spriteUrl = getSpriteUrl(rawPokemon.sprites, variant);

        // FireRed/LeafGreen reused a large portion of Ruby/Sapphire's sprite
        // set, and PokeAPI doesn't always carry a dedicated entry for those
        // reused sprites. Fall back to the Ruby/Sapphire sprite (saved under
        // the firered-leafgreen folder) rather than leaving it missing.
        if (!spriteUrl && variant.id === 'firered-leafgreen') {
            spriteUrl = getSpriteUrl(rawPokemon.sprites, RUBY_SAPPHIRE_VARIANT);
        }

        if (!spriteUrl) {
            logWarning(`No ${variant.label} sprite for "${variety.name}".`);
            continue;
        }

        sprites[variant.id] = await downloadSprite(
            variety.name,
            variant,
            spriteUrl
        );
    }

    return sprites;
};

// -------------------------------------------------------------------------
// Types
// -------------------------------------------------------------------------

const toTypeNames = (slots: RawTypeSlot[]): string[] =>
    [...slots].sort((a, b) => a.slot - b.slot).map((slot) => slot.type.name);

// PokeAPI's `past_types` entries describe the types that applied up to and
// including the listed generation. This converts that into ascending
// "applies from generation N onward" segments, ending with the current types.
const buildTypesByGeneration = (pokemon: RawPokemon): TypesByGeneration[] => {
    const pastTypes = [...pokemon.past_types].sort(
        (a, b) =>
            toGenerationNumber(a.generation.name) -
            toGenerationNumber(b.generation.name)
    );

    const segments: TypesByGeneration[] = pastTypes.map((pastType, index) => ({
        fromGeneration:
            index === 0
                ? 1
                : toGenerationNumber(pastTypes[index - 1].generation.name) + 1,
        types: toTypeNames(pastType.types),
    }));

    const lastPastType = pastTypes[pastTypes.length - 1];
    segments.push({
        fromGeneration: lastPastType
            ? toGenerationNumber(lastPastType.generation.name) + 1
            : 1,
        types: toTypeNames(pokemon.types),
    });

    return segments;
};

// -------------------------------------------------------------------------
// Abilities
// -------------------------------------------------------------------------

// PokeAPI ability slots: 1 and 2 are the standard slots, 3 is the hidden
// ability slot.
const ABILITY_SLOT_NUMBERS = { slot1: 1, slot2: 2, hidden: 3 } as const;

type AbilitySlotSegment = {
    fromGeneration: number;
    value?: string;
};

const abilityValueAt = (
    segments: AbilitySlotSegment[],
    generation: number
): string | undefined => {
    let value: string | undefined;
    for (const segment of segments) {
        if (segment.fromGeneration > generation) break;
        value = segment.value;
    }
    return value;
};

// Builds the ascending "applies from generation N onward" timeline for a
// single ability slot, mirroring how `past_types` is interpreted above. A
// missing `ability` on a past entry means that slot didn't exist for that
// Pokemon yet (e.g. hidden abilities before generation V).
const buildAbilitySlotTimeline = (
    pokemon: RawPokemon,
    slotNumber: number
): AbilitySlotSegment[] => {
    const pastEntries: { generation: number; value?: string }[] = [];
    for (const pastAbility of pokemon.past_abilities) {
        const slot = pastAbility.abilities.find(
            (candidate) => candidate.slot === slotNumber
        );
        if (!slot) continue;

        pastEntries.push({
            generation: toGenerationNumber(pastAbility.generation.name),
            value: slot.ability?.name,
        });
    }
    pastEntries.sort((a, b) => a.generation - b.generation);

    const currentValue = pokemon.abilities.find(
        (candidate) => candidate.slot === slotNumber
    )?.ability?.name;

    const segments: AbilitySlotSegment[] = pastEntries.map((entry, index) => ({
        fromGeneration: index === 0 ? 1 : pastEntries[index - 1].generation + 1,
        value: entry.value,
    }));

    const lastEntry = pastEntries[pastEntries.length - 1];
    segments.push({
        fromGeneration: lastEntry ? lastEntry.generation + 1 : 1,
        value: currentValue,
    });

    return segments;
};

// Slots can each change independently across generations, so the three
// per-slot timelines are merged on the union of their boundaries to produce
// a single combined ability set per generation range.
const buildAbilitiesByGeneration = (
    pokemon: RawPokemon
): AbilitiesByGeneration[] => {
    const slot1 = buildAbilitySlotTimeline(pokemon, ABILITY_SLOT_NUMBERS.slot1);
    const slot2 = buildAbilitySlotTimeline(pokemon, ABILITY_SLOT_NUMBERS.slot2);
    const hidden = buildAbilitySlotTimeline(
        pokemon,
        ABILITY_SLOT_NUMBERS.hidden
    );

    const boundaries = [
        ...new Set(
            [...slot1, ...slot2, ...hidden].map(
                (segment) => segment.fromGeneration
            )
        ),
    ].sort((a, b) => a - b);

    return boundaries.map((fromGeneration) => {
        const abilities: Abilities = {
            slot1: abilityValueAt(slot1, fromGeneration) as string,
        };

        const slot2Value = abilityValueAt(slot2, fromGeneration);
        if (slot2Value) abilities.slot2 = slot2Value;

        const hiddenValue = abilityValueAt(hidden, fromGeneration);
        if (hiddenValue) abilities.hidden = hiddenValue;

        return { fromGeneration, abilities };
    });
};

// -------------------------------------------------------------------------
// Stats
// -------------------------------------------------------------------------

// PokeAPI stat names for each output key. Generation I didn't split the
// special stat into special-attack/special-defense, so `special` is the
// fallback source for both when a generation-I entry is being read.
const STAT_NAMES: Record<keyof StatValues, string[]> = {
    hp: ['hp'],
    atk: ['attack'],
    def: ['defense'],
    spa: ['special-attack', 'special'],
    spd: ['special-defense', 'special'],
    spe: ['speed'],
};

const findStat = (stats: RawStat[], names: string[]): number | undefined =>
    stats.find((candidate) => names.includes(candidate.stat.name))?.base_stat;

type StatSegment = {
    fromGeneration: number;
    value?: number;
};

const statValueAt = (segments: StatSegment[], generation: number): number => {
    let value: number | undefined;
    for (const segment of segments) {
        if (segment.fromGeneration > generation) break;
        value = segment.value;
    }
    return value as number;
};

// Builds the ascending "applies from generation N onward" timeline for a
// single stat key. PokeAPI's `past_stats` entries only list the stats that
// actually changed as of that generation, so a key missing from a past entry
// means that key was unchanged (not that it didn't exist).
const buildStatTimeline = (
    pokemon: RawPokemon,
    statKey: keyof StatValues
): StatSegment[] => {
    const names = STAT_NAMES[statKey];

    const pastEntries: { generation: number; value?: number }[] = [];
    for (const pastStat of pokemon.past_stats) {
        const value = findStat(pastStat.stats, names);
        if (value === undefined) continue;

        pastEntries.push({
            generation: toGenerationNumber(pastStat.generation.name),
            value,
        });
    }
    pastEntries.sort((a, b) => a.generation - b.generation);

    const currentValue = findStat(pokemon.stats, names);

    const segments: StatSegment[] = pastEntries.map((entry, index) => ({
        fromGeneration: index === 0 ? 1 : pastEntries[index - 1].generation + 1,
        value: entry.value,
    }));

    const lastEntry = pastEntries[pastEntries.length - 1];
    segments.push({
        fromGeneration: lastEntry ? lastEntry.generation + 1 : 1,
        value: currentValue,
    });

    return segments;
};

// Each stat can change independently across generations (see Beedrill's
// Gen VI attack buff or the Gen I special-stat split), so the six per-stat
// timelines are merged on the union of their boundaries to produce a single
// combined stat line per generation range.
const buildStatsByGeneration = (pokemon: RawPokemon): StatsByGeneration[] => {
    const statKeys = Object.keys(STAT_NAMES) as (keyof StatValues)[];
    const timelines = Object.fromEntries(
        statKeys.map((statKey) => [
            statKey,
            buildStatTimeline(pokemon, statKey),
        ])
    ) as Record<keyof StatValues, StatSegment[]>;

    const boundaries = [
        ...new Set(
            statKeys.flatMap((statKey) =>
                timelines[statKey].map((segment) => segment.fromGeneration)
            )
        ),
    ].sort((a, b) => a - b);

    return boundaries.map((fromGeneration) => {
        const stats = statKeys.reduce<StatValues>(
            (result, statKey) => ({
                ...result,
                [statKey]: statValueAt(timelines[statKey], fromGeneration),
            }),
            {} as StatValues
        );

        return { fromGeneration, stats };
    });
};

// -------------------------------------------------------------------------
// Learnset
// -------------------------------------------------------------------------

// Learn methods tracked on the site. Egg moves are deliberately excluded:
// they're a breeding mechanic rather than something learnable in the run
// this site tracks. PokeAPI also reports a handful of oddities (e.g.
// "stadium-surfing-pikachu", "light-ball-egg", "form-change") that are
// quirks of specific spin-off events rather than real learnsets.
const KNOWN_METHODS = new Set<LearnsetMethod>(['level-up', 'machine', 'tutor']);

const METHOD_ORDER: Record<LearnsetMethod, number> = {
    'level-up': 0,
    machine: 1,
    tutor: 2,
};

const sortMoves = (moves: LearnsetMove[]): LearnsetMove[] =>
    [...moves].sort((a, b) => {
        const methodDiff = METHOD_ORDER[a.method] - METHOD_ORDER[b.method];
        if (methodDiff !== 0) return methodDiff;

        if (a.method === 'level-up') return (a.level ?? 0) - (b.level ?? 0);
        return a.name.localeCompare(b.name);
    });

// A generation with no moves for this version group means the Pokemon
// didn't exist yet (e.g. a generation before it was introduced), so it's
// left out of the timeline entirely rather than recorded as an empty entry.
const buildLearnsetByGeneration = (
    pokemon: RawPokemon,
    representativeVersionGroups: Map<number, string>
): LearnsetByGeneration[] => {
    const entries: LearnsetByGeneration[] = [];

    const sortedGenerations = [...representativeVersionGroups.entries()].sort(
        ([a], [b]) => a - b
    );

    for (const [fromGeneration, versionGroup] of sortedGenerations) {
        const moves: LearnsetMove[] = [];

        for (const moveEntry of pokemon.moves) {
            for (const detail of moveEntry.version_group_details) {
                if (detail.version_group.name !== versionGroup) continue;

                const method = detail.move_learn_method.name as LearnsetMethod;
                if (!KNOWN_METHODS.has(method)) continue;

                const move: LearnsetMove = {
                    name: moveEntry.move.name,
                    method,
                };
                if (method === 'level-up') {
                    move.level = detail.level_learned_at;
                }

                moves.push(move);
            }
        }

        if (moves.length === 0) continue;

        entries.push({ fromGeneration, moves: sortMoves(moves) });
    }

    return entries;
};

// -------------------------------------------------------------------------
// Evolution line
// -------------------------------------------------------------------------

// PokeAPI's evolution_detail.gender is the id of the /gender/ resource that
// must be met for that evolution method to apply.
const GENDER_NAMES: Record<number, string> = {
    1: 'female',
    2: 'male',
    3: 'genderless',
};

type RawEvolutionDetail = {
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
};

type RawChainLink = {
    species: { name: string };
    evolution_details: RawEvolutionDetail[];
    evolves_to: RawChainLink[];
};

type RawEvolutionChain = {
    chain: RawChainLink;
};

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

type FullNode = {
    name: string;
    children: FullEdge[];
};

type FullEdge = {
    // The generation from which this edge's evolution first became
    // possible, taken as the earliest version group across all of its
    // alternate methods (an edge can list several ways to trigger the same
    // evolution, introduced across different games).
    fromGeneration: number;
    methods: EvolutionMethod[];
    node: FullNode;
};

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

type PathEdge = {
    name: string;
    fromGeneration: number;
    methods: EvolutionMethod[];
};

type PathResult = {
    edges: PathEdge[];
    node: FullNode;
};

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

// -------------------------------------------------------------------------
// Main
// -------------------------------------------------------------------------

export const fetchPokemonData = async (): Promise<void> => {
    const { versionGroupGenerations, representativeVersionGroups } =
        await buildGenerationMaps(FETCH_DELAY_MS);
    const data: Record<string, PokemonData> = {};
    const chainCache = new Map<string, FullNode>();

    for (let dexNumber = 1; dexNumber <= MAX_DEX_NUMBER; dexNumber += 1) {
        const species = await fetchSpecies(dexNumber);
        await sleep(FETCH_DELAY_MS);

        const dexGeneration = getGenerationForDexNumber(dexNumber);

        let rootNode = chainCache.get(species.evolution_chain.url);
        if (!rootNode) {
            const rawChain = await fetchEvolutionChain(
                species.evolution_chain.url
            );
            await sleep(FETCH_DELAY_MS);

            rootNode = parseChain(rawChain.chain, versionGroupGenerations);
            chainCache.set(species.evolution_chain.url, rootNode);
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

        for (const variety of toVarieties(species)) {
            if (
                EXCLUDED_VARIETY_PATTERNS.some((pattern) =>
                    variety.name.includes(pattern)
                )
            ) {
                continue;
            }

            const rawPokemon = await fetchRawPokemon(variety);
            await sleep(FETCH_DELAY_MS);

            const sprites = await buildSprites(
                variety,
                rawPokemon,
                dexGeneration
            );

            // Varieties include forms irrelevant to this dex (Mega,
            // Gigantamax, regional forms from later generations, etc.).
            // Sprites double as curation: a variety with no sprite in any
            // applicable game isn't relevant to this site.
            if (Object.keys(sprites).length === 0) continue;

            const name = StringHelpers.toTitleCase(variety.name);
            data[variety.name] = {
                name,
                introducedInGeneration: dexGeneration,
                isTemporaryForm: TEMPORARY_FORM_VARIETIES.has(variety.name),
                sprites,
                types: buildTypesByGeneration(rawPokemon),
                abilities: buildAbilitiesByGeneration(rawPokemon),
                stats: buildStatsByGeneration(rawPokemon),
                catchRate: species.capture_rate,
                evolutionLine,
                learnset: buildLearnsetByGeneration(
                    rawPokemon,
                    representativeVersionGroups
                ),
            };

            logSuccess(`Fetched "${name}".`);
        }
    }

    writeData(data);
};

runScript(fetchPokemonData);
