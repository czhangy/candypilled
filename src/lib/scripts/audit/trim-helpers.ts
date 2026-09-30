import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import {
    getCompletionReminder,
    setConfigField,
} from '@/lib/scripts/audit/audit-helpers';
import { getLocationFiles } from '@/lib/scripts/utils/helpers';
import {
    AUDIT_COMPLETE,
    GAME_CHECK_CONFIGS,
} from '@/lib/scripts/validation/game-configs';
import { Game } from '@/lib/static/types';

type SplitEntry = {
    // The location's name, resolved through the split file's imports.
    name: string;
    // Subarea order set by a LocationHelpers.withSubareaOrder wrapper.
    subareaOrder: string[];
    // The constant the entry references, e.g. ROUTE_201.
    identifier: string;
    lines: string[];
};

type ParsedSplit = {
    after: string[];
    before: string[];
    entries: SplitEntry[];
    filePath: string;
    source: string;
};

const count = (text: string, character: string): number =>
    text.split(character).length - 1;

const normalize = (value: string): string =>
    value.toLowerCase().replace(/[^a-z0-9]/g, '');

const findSplitFile = (dataFolder: string, splitName: string): string => {
    const directory = path.join(
        process.cwd(),
        'src/lib/data',
        dataFolder,
        'splits'
    );
    const file = fs
        .readdirSync(directory)
        .filter((candidate) => candidate.endsWith('.ts'))
        .find((candidate) =>
            fs
                .readFileSync(path.join(directory, candidate), 'utf-8')
                .includes(`name: '${splitName}',`)
        );
    if (!file) {
        throw new Error(`No split file found for "${splitName}".`);
    }

    return path.join(directory, file);
};

const parseSplit = async (
    dataFolder: string,
    splitName: string
): Promise<ParsedSplit> => {
    const filePath = findSplitFile(dataFolder, splitName);
    const source = fs.readFileSync(filePath, 'utf-8');
    const lines = source.split('\n');
    const start = lines.findIndex((line) => line === '    locations: [');
    const end = lines.findIndex(
        (line, index) => index > start && line === '    ],'
    );
    if (start === -1 || end === -1) {
        throw new Error(`Can't find the locations array in ${filePath}.`);
    }

    const nameByFile = new Map(
        (await getLocationFiles(dataFolder)).map(({ filePath: file, name }) => [
            path.basename(file, '.ts'),
            name,
        ])
    );
    const nameByIdentifier = new Map<string, string>();
    for (const match of source.matchAll(
        /^import ([A-Z][A-Z0-9_]*) from '@\/lib\/data\/[^']+\/locations\/([^']+)';$/gm
    )) {
        const name = nameByFile.get(match[2]);
        if (name) nameByIdentifier.set(match[1], name);
    }

    const entries: SplitEntry[] = [];
    let current: string[] = [];
    let depth = 0;
    lines.slice(start + 1, end).forEach((line) => {
        current.push(line);
        depth +=
            count(line, '(') +
            count(line, '[') -
            count(line, ')') -
            count(line, ']');
        if (depth === 0 && line.trimEnd().endsWith(',')) {
            const text = current.join('\n');
            const identifier = text.match(/\b[A-Z][A-Z0-9_]{2,}\b/)?.[0] ?? '';
            const name = nameByIdentifier.get(identifier);
            if (!name) {
                throw new Error(
                    `Can't resolve the location for "${text.trim()}".`
                );
            }
            entries.push({
                identifier,
                lines: current,
                name,
                subareaOrder: [...text.matchAll(/'([^']+)'/g)].map(
                    (quoted) => quoted[1]
                ),
            });
            current = [];
        }
    });

    return {
        after: lines.slice(end),
        before: lines.slice(0, start + 1),
        entries,
        filePath,
        source,
    };
};

const getNextSplitName = (game: Game): string | undefined => {
    const { trimmedThrough } = GAME_CHECK_CONFIGS[game.name];
    if (trimmedThrough === AUDIT_COMPLETE) return undefined;

    const names = game.splits.map((split) => split.name);
    const next =
        trimmedThrough === null ? 0 : names.indexOf(trimmedThrough) + 1;

    return names[next];
};

export const buildTrimSheet = async (game: Game): Promise<string> => {
    const splitName = getNextSplitName(game);
    if (!splitName) return `${game.name}: every split is trimmed.`;

    const { dataFolder, trimmedThrough } = GAME_CHECK_CONFIGS[game.name];
    const { entries } = await parseSplit(dataFolder, splitName);

    return [
        `# ${game.name}: next split to trim is "${splitName}" (${entries.length} locations, in order; after ${trimmedThrough === null ? 'the start' : `"${trimmedThrough}"`})`,
        ...entries.map(
            (entry, index) =>
                `${index + 1}. ${entry.name}${
                    entry.subareaOrder.length > 0
                        ? ` (subarea order: ${entry.subareaOrder.join(', ')})`
                        : ''
                }`
        ),
    ].join('\n');
};

const formatWithPrettier = (filePath: string): void => {
    execFileSync('npx', ['prettier', '--write', filePath], {
        stdio: 'ignore',
    });
};

// Applies a trim to the next split: removes and moves locations by name,
// deletes imports nothing uses any more, and (on "done") advances the
// progress pointer. Nothing is written if any name is wrong.
export const applyTrim = async (
    game: Game,
    gamesInFolder: Game[],
    text: string
): Promise<string[]> => {
    const { dataFolder } = GAME_CHECK_CONFIGS[game.name];
    const lines = text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'));

    const splitLine = lines.find((line) => line.startsWith('split:'));
    const splitInput = splitLine?.slice('split:'.length).trim() ?? '';
    const splitName = game.splits.find(
        (split) => normalize(split.name) === normalize(splitInput)
    )?.name;
    if (!splitName) {
        throw new Error(`Unknown or missing split "${splitInput}".`);
    }

    const parsed = await parseSplit(dataFolder, splitName);
    const errors: string[] = [];
    const findEntry = (name: string): SplitEntry | undefined => {
        // "Name #2" picks the second entry of a location listed twice.
        const [, baseName, ordinal] = name.match(/^(.+?)(?:\s+#(\d+))?$/) ?? [];
        const entry = parsed.entries.filter(
            (candidate) => normalize(candidate.name) === normalize(baseName)
        )[Number(ordinal ?? 1) - 1];
        if (!entry) errors.push(`"${name}" isn't in ${splitName}`);

        return entry;
    };

    let entries = [...parsed.entries];
    const removedIdentifiers: string[] = [];
    lines.forEach((line) => {
        if (line.startsWith('remove:')) {
            line.slice('remove:'.length)
                .split(',')
                .map((name) => name.trim())
                .filter(Boolean)
                .forEach((name) => {
                    const entry = findEntry(name);
                    if (entry) {
                        entries = entries.filter((each) => each !== entry);
                        removedIdentifiers.push(entry.identifier);
                    }
                });
        } else if (line.startsWith('move:')) {
            const match = line
                .slice('move:'.length)
                .trim()
                .match(/^(.+?)\s+(after|before)\s+(.+)$|^(.+?)\s+first$/);
            if (!match) {
                errors.push(`Can't read "${line}"`);
                return;
            }
            const mover = findEntry(match[1] ?? match[4]);
            const anchor = match[3] ? findEntry(match[3]) : undefined;
            if (!mover || (match[3] && !anchor)) return;

            entries = entries.filter((each) => each !== mover);
            if (!anchor) {
                entries.unshift(mover);
                return;
            }
            const anchorIndex = entries.indexOf(anchor);
            entries.splice(
                match[2] === 'after' ? anchorIndex + 1 : anchorIndex,
                0,
                mover
            );
        }
    });

    if (errors.length > 0) {
        throw new Error(`Nothing written:\n  ${errors.join('\n  ')}`);
    }

    let source = [
        ...parsed.before,
        ...entries.flatMap((entry) => entry.lines),
        ...parsed.after,
    ].join('\n');
    const isUnused = (identifier: string): boolean =>
        !source
            .split('\n')
            .some(
                (line) =>
                    !line.startsWith('import ') &&
                    new RegExp(`\\b${identifier}\\b`).test(line)
            );
    [...removedIdentifiers, 'LocationHelpers'].forEach((identifier) => {
        if (isUnused(identifier)) {
            source = source.replace(
                new RegExp(`^import ${identifier} from '[^']+';\\n`, 'm'),
                ''
            );
        }
    });
    fs.writeFileSync(parsed.filePath, source);
    formatWithPrettier(parsed.filePath);

    const isDone = lines.includes('done');
    const isLastSplit = game.splits[game.splits.length - 1].name === splitName;
    const folderGameNames = gamesInFolder.map((folderGame) => folderGame.name);
    if (isDone) {
        setConfigField(
            folderGameNames,
            'trimmedThrough',
            isLastSplit ? AUDIT_COMPLETE : splitName
        );
    }

    return [
        `${splitName}: ${removedIdentifiers.length} removed, ${entries.length} locations now.`,
        isDone
            ? `Trim progress is now through "${splitName}".`
            : 'Not marked done, so the trim progress did not move.',
        ...(isDone && isLastSplit
            ? getCompletionReminder(folderGameNames, 'trimmedThrough')
            : []),
    ];
};
