import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';

const USAGE =
    'Usage: npm run compose:map-sprite -- --map <path> --sprite <path> --x <percent> --y <percent> [--width <px>] [--output <path>]. Defaults to writing a preview under src/lib/assets/temp/ instead of overwriting the map.';
const MAP_NOT_FOUND = "That map image doesn't exist.";
const SPRITE_NOT_FOUND = "That sprite image doesn't exist.";
const OUT_OF_BOUNDS =
    'The sprite would be placed partially outside the map bounds.';

interface ComposeArgs {
    mapPath: string;
    outputPath: string;
    spritePath: string;
    width?: number;
    x: number;
    y: number;
}

const parseArgs = (argv: string[]): ComposeArgs => {
    const flags: Record<string, string> = {};
    for (let index = 0; index < argv.length; index += 2) {
        const flag = argv[index].replace(/^--/, '');
        flags[flag] = argv[index + 1];
    }

    if (!flags.map || !flags.sprite || !flags.x || !flags.y) {
        throw new Error(USAGE);
    }

    return {
        mapPath: flags.map,
        outputPath:
            flags.output ??
            path.join('src', 'lib', 'assets', 'temp', path.basename(flags.map)),
        spritePath: flags.sprite,
        width: flags.width ? Number(flags.width) : undefined,
        x: Number(flags.x),
        y: Number(flags.y),
    };
};

const validateArgs = (args: ComposeArgs): void => {
    if (!fs.existsSync(args.mapPath)) {
        throw new Error(MAP_NOT_FOUND);
    }
    if (!fs.existsSync(args.spritePath)) {
        throw new Error(SPRITE_NOT_FOUND);
    }
};

const composeSprite = async (args: ComposeArgs): Promise<void> => {
    const map = sharp(args.mapPath);
    const { width: mapWidth, height: mapHeight } = await map.metadata();
    if (!mapWidth || !mapHeight) {
        throw new Error(MAP_NOT_FOUND);
    }

    let sprite = sharp(args.spritePath);
    if (args.width) {
        sprite = sprite.resize({ width: args.width });
    }
    const spriteBuffer = await sprite.toBuffer();
    const { width: spriteWidth, height: spriteHeight } =
        await sharp(spriteBuffer).metadata();
    if (!spriteWidth || !spriteHeight) {
        throw new Error(SPRITE_NOT_FOUND);
    }

    const left = Math.round((args.x / 100) * mapWidth - spriteWidth / 2);
    const top = Math.round((args.y / 100) * mapHeight - spriteHeight / 2);

    if (
        left < 0 ||
        top < 0 ||
        left + spriteWidth > mapWidth ||
        top + spriteHeight > mapHeight
    ) {
        throw new Error(OUT_OF_BOUNDS);
    }

    const composited = await map
        .composite([{ input: spriteBuffer, left, top }])
        .png()
        .toBuffer();

    fs.mkdirSync(path.dirname(args.outputPath), { recursive: true });
    fs.writeFileSync(args.outputPath, composited);
};

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        const args = parseArgs(process.argv.slice(2));
        validateArgs(args);
        await composeSprite(args);
        logSuccess(`Sprite composited onto ${args.outputPath}!`);
    } catch (error) {
        handleException(error);
    }
};

main();
