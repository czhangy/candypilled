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
    sprite: string;
}
