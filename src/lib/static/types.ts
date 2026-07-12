export interface Game {
    name: string;
    logo: string;
    generation: number;
}

export interface Run {
    name: string;
    logo: string;
    attempt: number;
    deathCount: number;
    split: string;
    boxCount: number;
    personalBest: string;
    hallOfFameCount: number;
}
