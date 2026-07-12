export interface Split {
    name: string;
}

export interface Game {
    name: string;
    logo: string;
    generation: number;
    splits: Split[];
    starters: string[];
}

export interface Run {
    attempt: number;
    deathCount: number;
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

export interface Pokemon {
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
