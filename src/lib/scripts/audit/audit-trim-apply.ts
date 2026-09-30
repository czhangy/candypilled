import fs from 'fs';
import { applyTrim } from '@/lib/scripts/audit/trim-helpers';
import { loadGames, logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import { GAME_CHECK_CONFIGS } from '@/lib/scripts/validation/game-configs';

const STDIN = 0;

const applyTrimSheet = async (): Promise<void> => {
    const [gameName, filePath] = process.argv.slice(2);
    if (!gameName) {
        throw new Error(
            'Usage: npm run audit:trim-apply -- <game> [file]  (reads stdin without a file)'
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

    (
        await applyTrim(
            game,
            gamesInFolder,
            fs.readFileSync(filePath ?? STDIN, 'utf-8')
        )
    ).forEach((line) => logSuccess(line));
};

runScript(applyTrimSheet);
