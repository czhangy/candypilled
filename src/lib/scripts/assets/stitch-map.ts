import fs from 'fs';
import os from 'os';
import path from 'path';
import sharp from 'sharp';
import { logSuccess, runScript } from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run stitch-map <game> <map> [sourceDir]. ' +
    'sourceDir defaults to ~/Desktop. Looks for <map>.png (whole-map ' +
    'capture), <map>-<col>.png (single row of chunks), or ' +
    '<map>-<row>-<col>.png (grid of chunks), all 1-indexed.';
const NO_CHUNKS_FOUND =
    "Couldn't find a <map>.png, <map>-<col>.png, or <map>-<row>-<col>.png in the source directory.";

// DSPRE fills the area outside the actual map with this exact grey;
// normalize it to pure black so dead space is consistent across maps.
const DEAD_SPACE_GREY = { b: 51, g: 51, r: 51 };

type StitchArgs = {
    mapSlug: string;
    mapsDir: string;
    outputPath: string;
    sourceDir: string;
};

type Chunk = {
    col: number;
    path: string;
    row: number;
};

const GRID_CHUNK_PATTERN = (mapSlug: string): RegExp =>
    new RegExp(`^${mapSlug}-(\\d+)-(\\d+)\\.png$`);
const ROW_CHUNK_PATTERN = (mapSlug: string): RegExp =>
    new RegExp(`^${mapSlug}-(\\d+)\\.png$`);

const parseArgs = (argv: string[]): StitchArgs => {
    const [game, map, sourceDir] = argv;
    if (!game || !map) {
        throw new Error(USAGE);
    }

    const gameSlug = StringHelpers.toSlug(game);
    const mapSlug = StringHelpers.toSlug(map);
    const mapsDir = path.join('src', 'lib', 'data', gameSlug, 'maps');

    return {
        mapSlug,
        mapsDir,
        outputPath: path.join(mapsDir, `${mapSlug}.png`),
        sourceDir: sourceDir ?? path.join(os.homedir(), 'Desktop'),
    };
};

// A lone `<map>.png` in the source dir means the whole map fit in one
// DSPRE viewport capture, so it's just copied in rather than stitched.
const findWholeMapCapture = (args: StitchArgs): string | undefined => {
    const wholeMapPath = path.join(args.sourceDir, `${args.mapSlug}.png`);
    return fs.existsSync(wholeMapPath) ? wholeMapPath : undefined;
};

const findChunks = (args: StitchArgs): Chunk[] => {
    const gridPattern = GRID_CHUNK_PATTERN(args.mapSlug);
    const rowPattern = ROW_CHUNK_PATTERN(args.mapSlug);

    return fs
        .readdirSync(args.sourceDir)
        .reduce<Chunk[]>((chunks, fileName) => {
            const chunkPath = path.join(args.sourceDir, fileName);
            const gridMatch = fileName.match(gridPattern);
            if (gridMatch) {
                chunks.push({
                    col: Number(gridMatch[2]),
                    path: chunkPath,
                    row: Number(gridMatch[1]),
                });
                return chunks;
            }
            const rowMatch = fileName.match(rowPattern);
            if (rowMatch) {
                chunks.push({
                    col: Number(rowMatch[1]),
                    path: chunkPath,
                    row: 1,
                });
            }
            return chunks;
        }, []);
};

// Chunk file names encode grid position directly (<row>-<col>, or just
// <col> for a single row), so the grid shape/order never has to be
// re-confirmed with whoever's capturing screenshots -- it's derived
// from the file names on disk instead. The grid doesn't have to be a
// full rectangle -- a map can be L-shaped (e.g. no top-right chunk
// because that corner is genuinely outside the map), in which case the
// missing cell is just left as dead-space black rather than an error.
const stitchGrid = async (
    chunks: Chunk[],
    outputPath: string
): Promise<void> => {
    const maxRow = Math.max(...chunks.map((chunk) => chunk.row));
    const maxCol = Math.max(...chunks.map((chunk) => chunk.col));

    const metas = await Promise.all(
        chunks.map((chunk) => sharp(chunk.path).metadata())
    );
    const { width, height } = metas[0];
    if (!width || !height) {
        throw new Error(`Couldn't read dimensions of ${chunks[0].path}.`);
    }
    const mismatched = metas.find(
        (meta) => meta.width !== width || meta.height !== height
    );
    if (mismatched) {
        throw new Error(
            'Chunk size mismatch -- all chunks must be the same size ' +
                '(same DSPRE viewport, no partial scroll).'
        );
    }

    const composite = chunks.map((chunk) => ({
        input: chunk.path,
        left: (chunk.col - 1) * width,
        top: (chunk.row - 1) * height,
    }));

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    await sharp({
        create: {
            background: { alpha: 255, b: 0, g: 0, r: 0 },
            channels: 4,
            height: height * maxRow,
            width: width * maxCol,
        },
    })
        .composite(composite)
        .png()
        .toFile(outputPath);
};

const normalizeDeadSpace = async (imagePath: string): Promise<void> => {
    const image = sharp(imagePath).ensureAlpha();
    const { data, info } = await image
        .raw()
        .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += info.channels) {
        if (
            data[i] === DEAD_SPACE_GREY.r &&
            data[i + 1] === DEAD_SPACE_GREY.g &&
            data[i + 2] === DEAD_SPACE_GREY.b
        ) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
        }
    }

    await sharp(data, {
        raw: {
            channels: info.channels,
            height: info.height,
            width: info.width,
        },
    })
        .png()
        .toFile(imagePath);
};

// Only removes dead space that forms a uniform border touching the
// image's edges (e.g. a whole side/corner never captured) -- dead space
// that's an irregular notch surrounded by real map content on multiple
// sides can't be cropped without cutting into that content, and is left
// as normalized black instead.
const trimOutsideDeadSpace = async (imagePath: string): Promise<void> => {
    await sharp(imagePath)
        .trim({ background: '#000000' })
        .toBuffer()
        .then((buffer) => sharp(buffer).png().toFile(imagePath));
};

runScript(async () => {
    const args = parseArgs(process.argv.slice(2));

    const wholeMapPath = findWholeMapCapture(args);
    if (wholeMapPath) {
        fs.mkdirSync(args.mapsDir, { recursive: true });
        fs.copyFileSync(wholeMapPath, args.outputPath);
        await normalizeDeadSpace(args.outputPath);
        await trimOutsideDeadSpace(args.outputPath);
        logSuccess(`Copied single capture to ${args.outputPath}!`);
        return;
    }

    const chunks = findChunks(args);
    if (chunks.length === 0) {
        throw new Error(NO_CHUNKS_FOUND);
    }

    await stitchGrid(chunks, args.outputPath);
    await normalizeDeadSpace(args.outputPath);
    await trimOutsideDeadSpace(args.outputPath);
    logSuccess(`Stitched ${chunks.length} chunk(s) into ${args.outputPath}!`);
});
