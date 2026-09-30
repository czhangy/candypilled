import fs from 'fs';
import { applyAnswers } from '@/lib/scripts/audit/audit-helpers';
import { loadGames, logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { GAME_CHECK_CONFIGS } from '@/lib/scripts/validation/game-configs';

const STDIN = 0;

const applySheet = async (): Promise<void> => {
    const [gameName, filePath] = process.argv.slice(2);
    if (!gameName) {
        throw new Error(
            'Usage: npm run audit:apply -- <game> [answers-file]  (reads stdin without a file)'
        );
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
    const text = fs.readFileSync(filePath ?? STDIN, 'utf-8');

    (await applyAnswers(game, gamesInFolder, text)).forEach((line) =>
        logSuccess(line)
    );
};

runScript(applySheet);
