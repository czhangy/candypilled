import { GAME_ID } from '@/lib/scripts/pokeapi/config/game';
import { platinum } from './platinum';

export const GAME_VERSIONS = [platinum];

const currentGameVersion = GAME_VERSIONS.find(
    (version) => version.id === GAME_ID
);
if (!currentGameVersion) {
    throw new Error(`"${GAME_ID}" is not a valid game.`);
}

export const CURRENT_GAME_VERSION = currentGameVersion;
