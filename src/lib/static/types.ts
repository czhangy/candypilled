import { StaticImageData } from 'next/image';
import {
    EncounterMethod,
    FieldCondition,
    Nature,
    PokemonStatus,
} from '@/lib/static/enums';

export type StatValues = {
    atk: number;
    def: number;
    hp: number;
    spa: number;
    spd: number;
    spe: number;
};

export type DropdownOption = {
    label: string;
    value: string;
};

// A single global toggle shown on the settings page. `id` is the
// localStorage key it's persisted under (via SettingsHelpers).
export type Setting = {
    id: string;
    title: string;
};

// Identifies which of a species' abilities is set: 1 = slot1, 2 = slot2,
// 3 = hidden. Callers resolve the name via PokemonHelpers.getAbilityName.
export type AbilitySlot = 1 | 2 | 3;

export type BattlePokemon = {
    ability: AbilitySlot;
    evs?: StatValues;
    heldItem?: string;
    ivs?: number | StatValues;
    level: number;
    moves: string[];
    name: string;
    nature?: Nature;
};

// A caught Pokemon as tracked for Nuzlocke rule enforcement: one catch per
// location (not subarea), and no more than one catch per evolution line.
export type CaughtPokemon = BattlePokemon & {
    location: string;
    status: PokemonStatus;
    // Freeform labels the player assigns to organize their box (e.g. "Ace",
    // "Trade").
    tags: string[];
};

// The two views of the box tab's caught Pokemon grid: living Pokemon
// ("box") or dead ones ("graveyard").
export type BoxView = 'box' | 'graveyard';

type BattleItem = {
    count: number;
    name: string;
};

export type Battle = {
    fieldCondition?: FieldCondition;
    isBackToBack?: boolean;
    isBoss?: boolean;
    isDouble?: boolean;
    isDoubleHeightMarker?: boolean;
    isDoubleWidthMarker?: boolean;
    isGauntlet?: boolean;
    isMiniboss?: boolean;
    isOptional?: boolean;
    isTag?: boolean;
    isTrueDouble?: boolean;
    items?: BattleItem;
    name: string;
    team?: BattlePokemon[];
    teamsByStarter?: Partial<Record<string, BattlePokemon[]>>;
    trainerClass: string;
    x: number;
    y: number;
};

export type Encounter = {
    species: string;
    method: EncounterMethod;
    minLevel: number;
    maxLevel: number;
    chance: number | null;
    conditions?: string[];
};

export type MethodOverride = {
    location: string;
    species: string;
    method: EncounterMethod;
};

export type LocationMerge = {
    from: string;
    into: string;
};

export type LocationSplitGroup = {
    key: string;
    // Encounters using one of these methods go into this group. Omit on
    // one group per split to make it the catch-all for methods not claimed
    // by any other group.
    methods?: EncounterMethod[];
};

export type LocationSplit = {
    location: string;
    groups: LocationSplitGroup[];
};

export type GameVersion = {
    id: string;
    label: string;
    version: string;
    region: string;
    generation: number;
    excludedLocations?: string[];
    excludedSpecies?: string[];
    caveLocations?: string[];
    methodOverrides?: MethodOverride[];
    excludedMethods?: string[];
    excludedConditions?: string[];
    excludedConditionPrefixes?: string[];
    strippedConditions?: string[];
    strippedConditionPrefixes?: string[];
    mergedLocations?: LocationMerge[];
    locationSplits?: LocationSplit[];
};

export type EncounterLocation = {
    name: string;
    encounter: Encounter;
};

export type Subarea = {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    map?: StaticImageData;
    battles?: Battle[];
};

export type Location = {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    map?: StaticImageData;
    battles?: Battle[];
    subareas?: Subarea[];
};

export type Split = {
    name: string;
    locations: Location[];
};

export type Game = {
    name: string;
    logo: string;
    generation: number;
    // PokeAPI version group slug for this game, e.g. "platinum". Used to
    // resolve which of a Pokemon's per-version-group learnsets applies,
    // since level-up movesets can differ between versions within the same
    // generation.
    version: string;
    splits: Split[];
    starters: string[];
    accentColor: string;
    // Text color for the starter select modal's submit buttons; falls back
    // to their current default color when not provided.
    textContrastColor?: string;
    encounters: Record<string, Encounter[]>;
    // Game-specific messages shown at random on the run page when a run is
    // marked as a wipe, alongside the run page's default messages.
    wipeMessages: string[];
};

export type Run = {
    attempt: number;
    // Battle keys (BattleHelpers.getBattleKey), not names — trainerClass + name is
    // the unique identifier since name alone can repeat within a game.
    defeatedBattles: string[];
    personalBest: string;
    hallOfFameCount: number;
    starter: string;
    caughtPokemon: CaughtPokemon[];
    // Locations whose encounter was used up without catching anything (the
    // Pokemon fled, fainted, etc.), by location name — same key space as
    // CaughtPokemon.location, and mutually exclusive with it.
    missedLocations: string[];
    // Whether the player has given up on this run (a wipe). Once true, the
    // run page shows a "Run it back" message instead of its tabs.
    wipe: boolean;
};

export type TypesByGeneration = {
    fromGeneration: number;
    types: string[];
};

export type Abilities = {
    slot1: string;
    slot2?: string;
    hidden?: string;
};

export type AbilitiesByGeneration = {
    fromGeneration: number;
    abilities: Abilities;
};

export type StatsByGeneration = {
    fromGeneration: number;
    stats: StatValues;
};

export type EvolutionMethod = {
    trigger: string;
    item?: string;
    heldItem?: string;
    minLevel?: number;
    minHappiness?: number;
    minBeauty?: number;
    minAffection?: number;
    gender?: string;
    timeOfDay?: string;
    knownMove?: string;
    knownMoveType?: string;
    location?: string;
    tradeSpecies?: string;
    needsOverworldRain?: boolean;
    turnUpsideDown?: boolean;
    partyType?: string;
    partySpecies?: string;
    relativePhysicalStats?: number;
};

// A single Pokemon within an evolution line, as known from the perspective of
// the Pokemon the line was built for: ancestors leading up to it are a single
// path, but its own descendants preserve any branches (e.g. Eevee's split
// into multiple eeveelutions).
export type EvolutionStep = {
    name: string;
    // How this step is reached from its predecessor. Omitted for the
    // topmost visible step, which has no visible predecessor.
    methods?: EvolutionMethod[];
    evolvesTo: EvolutionStep[];
};

export type EvolutionLineByGeneration = {
    fromGeneration: number;
    line: EvolutionStep;
};

// A method label split into its primary text and an optional condition
// (e.g. a trade evolution's held item), so callers can render the
// condition on its own line.
export type EvolutionMethodLabel = {
    label: string;
    condition?: string;
    icon?: string;
    gender?: 'male' | 'female';
};

export type MoveValuesByGeneration = {
    fromGeneration: number;
    type: string;
    power: number | null;
    accuracy: number | null;
    pp: number;
    effect: string;
    effectChance: number | null;
    description: string;
};

export type MoveData = {
    name: string;
    // PokeAPI doesn't track historical changes for these two fields, so
    // unlike the rest of a move's values they aren't split by generation.
    category: string;
    priority: number;
    introducedInGeneration: number;
    // PokeAPI has no concept of "dangerous" moves, so this is curated
    // separately rather than derived from any API field.
    isDangerous: boolean;
    valuesByGeneration: MoveValuesByGeneration[];
};

export type AbilityValuesByGeneration = {
    fromGeneration: number;
    effect: string;
};

export type AbilityData = {
    name: string;
    introducedInGeneration: number;
    // PokeAPI has no concept of "dangerous" abilities, so this is curated
    // separately rather than derived from any API field.
    isDangerous: boolean;
    valuesByGeneration: AbilityValuesByGeneration[];
};

export type LearnsetMethod = 'level-up' | 'machine' | 'tutor';

export type LearnsetMove = {
    name: string;
    method: LearnsetMethod;
    // Only set for level-up moves.
    level?: number;
};

export type LearnsetByVersionGroup = {
    // PokeAPI version group slug, e.g. "diamond-pearl", "platinum",
    // "heartgold-soulsilver". Learnsets are kept per version group rather
    // than per generation because level-up movesets commonly differ between
    // versions within the same generation (e.g. Onix's moveset changed
    // between Diamond/Pearl/Platinum and HeartGold/SoulSilver).
    versionGroup: string;
    fromGeneration: number;
    moves: LearnsetMove[];
};

export type AbilityEntry = {
    hidden?: boolean;
    name: string;
};

export type PokemonData = {
    name: string;
    introducedInGeneration: number;
    // PokeAPI's is_battle_only form flag doesn't cover every form that
    // can't actually persist in a box (e.g. Shaymin's Sky Forme reverts to
    // Land Forme on deposit), so this is curated separately rather than
    // derived from any single API field.
    isTemporaryForm: boolean;
    sprites: Record<string, string>;
    types: TypesByGeneration[];
    abilities: AbilitiesByGeneration[];
    stats: StatsByGeneration[];
    catchRate: number;
    evolutionLine: EvolutionLineByGeneration[];
    learnset: LearnsetByVersionGroup[];
};
