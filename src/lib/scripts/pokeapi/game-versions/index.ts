import { GameVersion } from '@/lib/static/types';
import { diamond } from './diamond';
import { pearl } from './pearl';
import { platinum } from './platinum';

export const GAME_VERSIONS = [platinum, diamond, pearl];

/** Looks up a GameVersion by id, throwing if none matches. */
export const getGameVersion = (id: string): GameVersion => {
    const version = GAME_VERSIONS.find((candidate) => candidate.id === id);
    if (!version) {
        const valid = GAME_VERSIONS.map((candidate) => candidate.id).join(', ');
        throw new Error(`"${id}" is not a valid game. Valid games: ${valid}.`);
    }
    return version;
};
