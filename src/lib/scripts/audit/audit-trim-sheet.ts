import { buildTrimSheet } from '@/lib/scripts/audit/trim-helpers';
import { loadGames, runScript } from '@/lib/scripts/utils/helpers';

const printTrimSheet = async (): Promise<void> => {
    const [gameName] = process.argv.slice(2);
    if (!gameName) {
        throw new Error('Usage: npm run audit:trim-sheet -- <game>');
    }

    const game = (await loadGames()).find(
        (candidate) => candidate.name === gameName
    );
    if (!game) {
        throw new Error(`Unknown game "${gameName}".`);
    }

    console.log(await buildTrimSheet(game));
};

runScript(printTrimSheet);
