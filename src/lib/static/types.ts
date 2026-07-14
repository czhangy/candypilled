import { StaticImageData } from 'next/image';
import { FieldCondition, Nature } from '@/lib/static/enums';

interface StatValues {
    atk: number;
    def: number;
    hp: number;
    spa: number;
    spd: number;
    spe: number;
}

export interface BattlePokemon {
    ability?: string;
    evs?: number | StatValues;
    heldItem?: string;
    ivs?: number | StatValues;
    level: number;
    moves: string[];
    name: string;
    nature?: Nature;
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
}

export interface Run {
    attempt: number;
    deathCount: number;
    // Battle keys (BattleHelpers.getKey), not names — trainerClass + name is
    // the unique identifier since name alone can repeat within a game.
    defeatedBattles: string[];
    split: string;
    boxCount: number;
    personalBest: string;
    hallOfFameCount: number;
    starter: string | null;
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

export interface PokemonData {
    name: string;
    sprites: Record<string, string>;
    types: TypesByGeneration[];
    abilities: AbilitiesByGeneration[];
    catchRate: number;
}
