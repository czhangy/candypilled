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

export interface BattlePokemon {
    ability: string;
    evs?: number | StatValues;
    heldItem?: string;
    ivs?: number | StatValues;
    level: number;
    moves: string[];
    name: string;
    nature?: Nature;
}

export interface BattleItem {
    count: number;
    name: string;
}

export interface Battle {
    fieldCondition?: FieldCondition;
    isOptional?: boolean;
    items?: BattleItem;
    name: string;
    team: BattlePokemon[];
    trainerClass: string;
    x: number;
    y: number;
}

export interface Location {
    name: string;
    map?: StaticImageData;
    battles?: Battle[];
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
    defeatedBattles: string[];
    split: string;
    boxCount: number;
    personalBest: string;
    hallOfFameCount: number;
    starter: string | null;
}

export interface GameRun {
    game: Game;
    run: Run | null;
}

export interface PokemonData {
    name: string;
    sprites: Record<string, string>;
}

export interface SpriteVariant {
    id: string;
    label: string;
    generation: number;
}

export interface CheckboxOption<T> {
    label: string;
    value: T;
}
