import { StaticImageData } from 'next/image';
import { FieldCondition, Nature } from '@/lib/static/enums';

export interface StatValues {
    atk: number;
    def: number;
    hp: number;
    spa: number;
    spd: number;
    spe: number;
}

export interface DropdownOption {
    label: string;
    value: string;
}

// Identifies which of a species' abilities is set: 1 = slot1, 2 = slot2,
// 3 = hidden. Callers resolve the name via PokemonHelpers.getAbilityName.
export type AbilitySlot = 1 | 2 | 3;

export interface BattlePokemon {
    ability: AbilitySlot;
    evs?: StatValues;
    heldItem?: string;
    ivs?: number | StatValues;
    level: number;
    moves: string[];
    name: string;
    nature?: Nature;
}

// A caught Pokemon as tracked for Nuzlocke rule enforcement: one catch per
// location (not subarea), and no more than one catch per evolution line.
export interface CaughtPokemon extends BattlePokemon {
    location: string;
}

interface BattleItem {
    count: number;
    name: string;
}

export interface Battle {
    fieldCondition?: FieldCondition;
    isBoss?: boolean;
    isDouble?: boolean;
    isDoubleHeightMarker?: boolean;
    isDoubleWidthMarker?: boolean;
    isMiniboss?: boolean;
    isOptional?: boolean;
    isTrueDouble?: boolean;
    items?: BattleItem;
    name: string;
    team?: BattlePokemon[];
    teamsByStarter?: Partial<Record<string, BattlePokemon[]>>;
    trainerClass: string;
    x: number;
    y: number;
}

export interface Encounter {
    species: string;
    method: string;
    minLevel: number;
    maxLevel: number;
    chance: number | null;
    conditions?: string[];
}

export interface LocationEncounters {
    name: string;
    encounters: Encounter[];
}

export interface EncounterLocation {
    name: string;
    encounter: Encounter;
}

export interface Subarea {
    name: string;
    encountersKey?: string;
    hideBattles?: boolean;
    map?: StaticImageData;
    battles?: Battle[];
}

export interface Location {
    name: string;
    encountersKey?: string;
    map?: StaticImageData;
    battles?: Battle[];
    subareas?: Subarea[];
}

export interface Split {
    name: string;
    locations: Location[];
}

export interface Game {
    name: string;
    logo: string;
    generation: number;
    splits: Split[];
    starters: string[];
    accentColor: string;
    encounters: Record<string, LocationEncounters>;
}

export interface Run {
    attempt: number;
    // Battle keys (BattleHelpers.getKey), not names — trainerClass + name is
    // the unique identifier since name alone can repeat within a game.
    defeatedBattles: string[];
    personalBest: string;
    hallOfFameCount: number;
    starter: string | null;
    caughtPokemon: CaughtPokemon[];
    // Locations whose encounter was used up without catching anything (the
    // Pokemon fled, fainted, etc.), by location name — same key space as
    // CaughtPokemon.location, and mutually exclusive with it.
    missedLocations: string[];
}

export interface TypesByGeneration {
    fromGeneration: number;
    types: string[];
}

export interface Abilities {
    slot1: string;
    slot2?: string;
    hidden?: string;
}

export interface AbilitiesByGeneration {
    fromGeneration: number;
    abilities: Abilities;
}

export interface StatsByGeneration {
    fromGeneration: number;
    stats: StatValues;
}

export interface EvolutionMethod {
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
}

// A single Pokemon within an evolution line, as known from the perspective of
// the Pokemon the line was built for: ancestors leading up to it are a single
// path, but its own descendants preserve any branches (e.g. Eevee's split
// into multiple eeveelutions).
export interface EvolutionStep {
    name: string;
    // How this step is reached from its predecessor. Omitted for the
    // topmost visible step, which has no visible predecessor.
    methods?: EvolutionMethod[];
    evolvesTo: EvolutionStep[];
}

export interface EvolutionLineByGeneration {
    fromGeneration: number;
    line: EvolutionStep;
}

// A method label split into its primary text and an optional condition
// (e.g. a trade evolution's held item), so callers can render the
// condition on its own line.
export interface EvolutionMethodLabel {
    label: string;
    condition?: string;
    icon?: string;
    gender?: 'male' | 'female';
}

export interface MoveValuesByGeneration {
    fromGeneration: number;
    type: string;
    power: number | null;
    accuracy: number | null;
    pp: number;
    effect: string;
    effectChance: number | null;
    description: string;
}

export interface MoveData {
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
}

export interface AbilityValuesByGeneration {
    fromGeneration: number;
    effect: string;
}

export interface AbilityData {
    name: string;
    introducedInGeneration: number;
    valuesByGeneration: AbilityValuesByGeneration[];
}

export type LearnsetMethod = 'level-up' | 'machine' | 'tutor';

export interface LearnsetMove {
    name: string;
    method: LearnsetMethod;
    // Only set for level-up moves.
    level?: number;
}

export interface LearnsetByGeneration {
    fromGeneration: number;
    moves: LearnsetMove[];
}

export interface PokemonData {
    name: string;
    sprites: Record<string, string>;
    types: TypesByGeneration[];
    abilities: AbilitiesByGeneration[];
    stats: StatsByGeneration[];
    catchRate: number;
    evolutionLine: EvolutionLineByGeneration[];
    learnset: LearnsetByGeneration[];
}
