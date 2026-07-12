import { promptSprites } from '@/lib/scripts/pokeapi/sprites';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import {
    enterInteractiveMode,
    exitInteractiveMode,
    promptCheckbox,
} from '@/lib/scripts/utils/prompt-checkbox';
import StringHelpers from '@/lib/utils/StringHelpers';

const GENERATIONS = [3, 4];

type FetchTarget = 'sprites';

const run = async (): Promise<void> => {
    enterInteractiveMode();

    try {
        const generations = await promptCheckbox(
            'Select generations',
            GENERATIONS.map((generation) => ({
                label: `Generation ${StringHelpers.toRoman(generation)}`,
                value: generation,
            }))
        );

        if (generations.length === 0) {
            logSuccess('No generations selected. Exiting.');
            return;
        }

        const targets = await promptCheckbox<FetchTarget>(
            'Select what to fetch',
            [{ label: 'Sprites', value: 'sprites' }]
        );

        if (targets.includes('sprites')) {
            await promptSprites(generations);
        }
    } finally {
        exitInteractiveMode();
    }
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        await run();
    } catch (error) {
        handleException(error);
    }
};

main();
