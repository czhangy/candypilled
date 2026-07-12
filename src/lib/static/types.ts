export interface Split {
    name: string;
}

export interface Game {
    name: string;
    logo: string;
    generation: number;
    splits: Split[];
}

export interface Run {
    attempt: number;
    deathCount: number;
    split: string;
    boxCount: number;
    personalBest: string;
    hallOfFameCount: number;
}

export interface GameRun {
    game: Game;
    run: Run | null;
}
