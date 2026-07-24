import fs from 'fs';
import path from 'path';
import { logSuccess, logWarning, runScript } from '@/lib/scripts/utils/helpers';

// pokesprite's "regular" icon set is the Gen 7/8 box/PC storage icon style
// — the closest available box sprite resource, since PokeAPI itself only
// exposes that same style (see its versions.generation-vii/viii.icons
// fields).
const REPO = 'msikma/pokesprite';
const BRANCH = 'master';
const ICONS_PATH = 'icons/pokemon/regular/';
const OUTPUT_DIR = path.join('public', 'box');
const USER_AGENT = 'candypilled-box-sprite-downloader';

type TreeEntry = {
    path: string;
    type: string;
};

const fetchIconPaths = async (): Promise<string[]> => {
    const response = await fetch(
        `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`,
        { headers: { 'User-Agent': USER_AGENT } }
    );
    if (!response.ok) {
        throw new Error(`Failed to list ${REPO}'s tree (${response.status}).`);
    }

    const { tree }: { tree: TreeEntry[] } = await response.json();
    return tree
        .filter(
            (entry) =>
                entry.type === 'blob' &&
                entry.path.startsWith(ICONS_PATH) &&
                entry.path.endsWith('.png')
        )
        .map((entry) => entry.path);
};

const downloadIcon = async (iconPath: string): Promise<void> => {
    const response = await fetch(
        `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${iconPath}`
    );
    if (!response.ok) {
        logWarning(`Failed to download "${iconPath}" (${response.status}).`);
        return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(path.join(OUTPUT_DIR, path.basename(iconPath)), buffer);
};

// Downloads are batched rather than sequential (would take minutes for
// ~1,200 files) or fully parallel (would hammer GitHub's raw CDN at once).
const downloadInBatches = async (
    iconPaths: string[],
    batchSize: number
): Promise<void> => {
    for (let start = 0; start < iconPaths.length; start += batchSize) {
        const batch = iconPaths.slice(start, start + batchSize);
        await Promise.all(batch.map(downloadIcon));
    }
};

runScript(async () => {
    const BATCH_SIZE = 25;

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const iconPaths = await fetchIconPaths();
    await downloadInBatches(iconPaths, BATCH_SIZE);

    logSuccess(`Downloaded ${iconPaths.length} box sprites to ${OUTPUT_DIR}!`);
});
