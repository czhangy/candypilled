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
// from the file names on disk instead.
const buildGrid = (chunks: Chunk[]): string[] => {
    const maxRow = Math.max(...chunks.map((chunk) => chunk.row));
    const maxCol = Math.max(...chunks.map((chunk) => chunk.col));
    const byPosition = new Map(
        chunks.map((chunk) => [`${chunk.row}-${chunk.col}`, chunk.path])
    );

    const missing: string[] = [];
    const grid: string[] = [];
    for (let row = 1; row <= maxRow; row++) {
        for (let col = 1; col <= maxCol; col++) {
            const key = `${row}-${col}`;
            const chunkPath = byPosition.get(key);
            if (!chunkPath) {
                missing.push(maxRow === 1 ? `${col}` : `${row}-${col}`);
            } else {
                grid.push(chunkPath);
            }
        }
    }

    if (missing.length > 0) {
        throw new Error(
            `Grid has gaps -- missing chunk(s): ${missing.join(', ')} ` +
                `(inferred a ${maxRow}x${maxCol} grid from the highest row/col seen).`
        );
    }

    return grid;
};

const stitchGrid = async (
    chunkPaths: string[],
    cols: number,
    outputPath: string
): Promise<void> => {
    const metas = await Promise.all(
        chunkPaths.map((chunkPath) => sharp(chunkPath).metadata())
    );
    const { width, height } = metas[0];
    if (!width || !height) {
        throw new Error(`Couldn't read dimensions of ${chunkPaths[0]}.`);
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

    const rows = chunkPaths.length / cols;
    const composite = chunkPaths.map((chunkPath, i) => ({
        input: chunkPath,
        left: (i % cols) * width,
        top: Math.floor(i / cols) * height,
    }));

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    await sharp({
        create: {
            background: { alpha: 0, b: 0, g: 0, r: 0 },
            channels: 4,
            height: height * rows,
            width: width * cols,
        },
    })
        .composite(composite)
        .png()
        .toFile(outputPath);
};

runScript(async () => {
    const args = parseArgs(process.argv.slice(2));

    const wholeMapPath = findWholeMapCapture(args);
    if (wholeMapPath) {
        fs.mkdirSync(args.mapsDir, { recursive: true });
        fs.copyFileSync(wholeMapPath, args.outputPath);
        logSuccess(`Copied single capture to ${args.outputPath}!`);
        return;
    }

    const chunks = findChunks(args);
    if (chunks.length === 0) {
        throw new Error(NO_CHUNKS_FOUND);
    }

    const cols = Math.max(...chunks.map((chunk) => chunk.col));
    const grid = buildGrid(chunks);
    await stitchGrid(grid, cols, args.outputPath);
    logSuccess(`Stitched ${chunks.length} chunk(s) into ${args.outputPath}!`);
});
