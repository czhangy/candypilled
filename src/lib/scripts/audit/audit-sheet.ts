import { buildSheet } from '@/lib/scripts/audit/audit-helpers';
import { loadGames, runScript } from '@/lib/scripts/utils/helpers';
import { GAME_CHECK_CONFIGS } from '@/lib/scripts/validation/game-configs';

const DEFAULT_COUNT = 10;

const printSheet = async (): Promise<void> => {
    const [gameName, countArgument] = process.argv.slice(2);
    if (!gameName) {
        throw new Error('Usage: npm run audit:sheet -- <game> [count]');
    }

    const games = await loadGames();
    const game = games.find((candidate) => candidate.name === gameName);
    if (!game) {
        throw new Error(`Unknown game "${gameName}".`);
    }

    const folder = GAME_CHECK_CONFIGS[game.name]?.dataFolder;
    const gamesInFolder = games.filter(
        (candidate) => GAME_CHECK_CONFIGS[candidate.name]?.dataFolder === folder
    );

    console.log(
        buildSheet(game, gamesInFolder, Number(countArgument) || DEFAULT_COUNT)
    );
};

runScript(printSheet);
