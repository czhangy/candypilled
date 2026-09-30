import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { getLocationFiles } from '@/lib/scripts/utils/helpers';
import {
    AUDIT_COMPLETE,
    GAME_CHECK_CONFIGS,
    isLocationAudited,
} from '@/lib/scripts/validation/game-configs';
import { EncounterMethod } from '@/lib/static/enums';
import { Game, Location } from '@/lib/static/types';

type AuditSection = {
    battleKeys: string[];
    // Splits methods already carry, in their current order.
    existingSplits: Map<string, string>;
    label: string;
    location: Location;
    methods: string[];
    subareaName: string | undefined;
    tagPartnerKeys: string[];
};

type AnswerGroup = { items: string[]; splitInput: string };

type Answer = { groups: AnswerGroup[]; label: string };

type MethodEntry = { enumKey: string; split: string };

const GROUP_LEVEL = 1;
const ITEM_LEVEL = 2;

const unique = (values: string[]): string[] => [...new Set(values)];

const normalize = (value: string): string =>
    value.toLowerCase().replace(/[^a-z0-9]/g, '');

const enumKeyByMethod = new Map(
    Object.entries(EncounterMethod).map(([key, value]) => [
        value as string,
        key,
    ])
);

const getConfig = (game: Game): (typeof GAME_CHECK_CONFIGS)[string] => {
    const config = GAME_CHECK_CONFIGS[game.name];
    if (!config) {
        throw new Error(`${game.name} has no entry in GAME_CHECK_CONFIGS.`);
    }

    return config;
};

const getSortedLocations = (game: Game): Location[] =>
    [...game.locations].sort((a, b) => a.name.localeCompare(b.name));

const getSections = (game: Game, gamesInFolder: Game[]): AuditSection[] =>
    getSortedLocations(game).flatMap((location) => {
        const parts = location.subareas
            ? location.subareas.map((subarea) => ({
                  battles: subarea.battles,
                  encountersKey: subarea.encountersKey,
                  methodSplits: subarea.methodSplits,
                  subareaName: subarea.name as string | undefined,
                  tagPartner: subarea.tagPartner,
              }))
            : [
                  {
                      battles: location.battles,
                      encountersKey: location.encountersKey,
                      methodSplits: location.methodSplits,
                      subareaName: undefined as string | undefined,
                      tagPartner: location.tagPartner,
                  },
              ];

        return parts.map((part) => ({
            battleKeys: unique(
                (part.battles ?? []).map((battle) => battle.battleKey)
            ),
            existingSplits: new Map(
                (part.methodSplits ?? []).map((entry) => [
                    entry.method as string,
                    entry.split,
                ])
            ),
            label: part.subareaName
                ? `${location.name} / ${part.subareaName}`
                : location.name,
            location,
            methods: part.encountersKey
                ? unique(
                      gamesInFolder.flatMap((folderGame) =>
                          (
                              folderGame.encounters[part.encountersKey!] ?? []
                          ).map((encounter) => encounter.method)
                      )
                  )
                : [],
            subareaName: part.subareaName,
            tagPartnerKeys: unique(
                (part.tagPartner ?? []).map((partner) => partner.battleKey)
            ),
        }));
    });

const isEmpty = (section: AuditSection): boolean =>
    section.battleKeys.length === 0 &&
    section.tagPartnerKeys.length === 0 &&
    section.methods.length === 0;

const getRemainingLocations = (game: Game): Location[] =>
    getSortedLocations(game).filter(
        (location) =>
            !isLocationAudited(getConfig(game).auditedThrough, location.name)
    );

// The location the pointer should move to once a batch ending at `through`
// is applied: the end of the game's locations means the audit is complete.
const getNewPointer = (game: Game, through: string): string => {
    const locations = getSortedLocations(game);

    return locations[locations.length - 1].name === through
        ? AUDIT_COMPLETE
        : through;
};

export const buildSheet = (
    game: Game,
    gamesInFolder: Game[],
    count: number
): string => {
    const config = getConfig(game);
    const sections = getSections(game, gamesInFolder);
    const remaining = getRemainingLocations(game);
    const withContent = remaining.filter((location) =>
        sections.some(
            (section) => section.location === location && !isEmpty(section)
        )
    );

    if (withContent.length === 0) {
        return `${game.name}: no locations left to audit.`;
    }

    const batch = withContent.slice(0, count);
    const last = batch[batch.length - 1];
    const throughName =
        withContent.length === batch.length
            ? getSortedLocations(game).slice(-1)[0].name
            : last.name;
    const lines = [
        `# ${game.name}: ${batch.length} locations after ${config.auditedThrough === null ? 'the start' : `"${config.auditedThrough}"`} (alphabetical)`,
        '# Reply one line per section:  Label: <split>: <items>; <split>: <items>',
        '# Items: all | battles | tags | methods | <method> | <battleKey>. A specific item beats a group, a group beats "all".',
        `# Splits: ${game.splits.map((split) => split.name).join(', ')}`,
        `through: ${throughName}`,
        '',
    ];

    batch.forEach((location) => {
        sections
            .filter((section) => section.location === location)
            .filter((section) => !isEmpty(section))
            .forEach((section) => {
                lines.push(section.label);
                if (section.battleKeys.length > 0) {
                    lines.push(`  battles: ${section.battleKeys.join(', ')}`);
                }
                if (section.tagPartnerKeys.length > 0) {
                    lines.push(`  tags: ${section.tagPartnerKeys.join(', ')}`);
                }
                if (section.methods.length > 0) {
                    lines.push(`  methods: ${section.methods.join(', ')}`);
                }
                lines.push('');
            });
    });

    return lines.join('\n');
};

const parseAnswers = (
    text: string
): { answers: Answer[]; through: string | undefined } => {
    let through: string | undefined;
    const answers: Answer[] = [];

    text.split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .forEach((line) => {
            if (line.startsWith('through:')) {
                through = line.slice('through:'.length).trim();
                return;
            }

            const separator = line.indexOf(': ');
            if (separator === -1) {
                throw new Error(`Can't read answer line: "${line}"`);
            }

            const groups = line
                .slice(separator + 2)
                .split(';')
                .map((group) => group.trim())
                .filter(Boolean)
                .map((group) => {
                    const colon = group.indexOf(':');
                    if (colon === -1) {
                        throw new Error(
                            `Missing "split:" in "${group}" (${line})`
                        );
                    }

                    return {
                        items: group
                            .slice(colon + 1)
                            .split(',')
                            .map((item) => item.trim())
                            .filter(Boolean),
                        splitInput: group.slice(0, colon).trim(),
                    };
                });

            answers.push({ groups, label: line.slice(0, separator).trim() });
        });

    return { answers, through };
};

const resolveSplit = (
    input: string,
    splitNames: string[]
): string | undefined => {
    const target = normalize(input);
    const exact = splitNames.find((name) => normalize(name) === target);
    if (exact) return exact;

    const prefixed = splitNames.filter((name) =>
        normalize(name).startsWith(target)
    );

    return target && prefixed.length === 1 ? prefixed[0] : undefined;
};

// Assigns every item in a section a split, letting a specific item beat a
// group ("battles", "methods", "tags"), which beats "all".
const resolveAssignments = (
    section: AuditSection,
    groups: AnswerGroup[],
    splitNames: string[]
): {
    battleSplits: Map<string, string>;
    errors: string[];
    methodSplits: Map<string, string>;
} => {
    const errors: string[] = [];
    const chosen = new Map<string, { level: number; split: string }>();

    const assign = (item: string, split: string, level: number): void => {
        const current = chosen.get(item);
        if (!current || level > current.level) {
            chosen.set(item, { level, split });
        } else if (level === current.level && current.split !== split) {
            errors.push(
                `${section.label}: "${item}" is given both ${current.split} and ${split}`
            );
        }
    };

    const allItems = [
        ...section.battleKeys,
        ...section.tagPartnerKeys,
        ...section.methods,
    ];
    const categories: Record<string, string[]> = {
        battles: section.battleKeys,
        methods: section.methods,
        tags: section.tagPartnerKeys,
    };

    groups.forEach((group) => {
        const split = resolveSplit(group.splitInput, splitNames);
        if (!split) {
            errors.push(
                `${section.label}: unknown split "${group.splitInput}"`
            );
            return;
        }

        group.items.forEach((item) => {
            if (item === 'all') {
                allItems.forEach((each) => assign(each, split, 0));
            } else if (categories[item]) {
                categories[item].forEach((each) =>
                    assign(each, split, GROUP_LEVEL)
                );
            } else if (allItems.includes(item)) {
                assign(item, split, ITEM_LEVEL);
            } else {
                errors.push(`${section.label}: unknown item "${item}"`);
            }
        });
    });

    const unassigned = allItems.filter((item) => !chosen.has(item));
    if (unassigned.length > 0) {
        errors.push(`${section.label}: no split for ${unassigned.join(', ')}`);
    }

    const pick = (items: string[]): Map<string, string> =>
        new Map(
            items
                .filter((item) => chosen.has(item))
                .map((item) => [item, chosen.get(item)!.split])
        );

    return {
        battleSplits: pick([...section.battleKeys, ...section.tagPartnerKeys]),
        errors,
        methodSplits: pick(section.methods),
    };
};

const setBattleSplit = (
    source: string,
    battleKey: string,
    split: string
): string => {
    const pattern = new RegExp(
        `('${battleKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{\\n(?:.*\\n)*?        split: ')[^']*(',)`
    );
    if (!pattern.test(source)) {
        throw new Error(`Battle "${battleKey}" not found in battles.ts.`);
    }

    return source.replace(pattern, `$1${split}$2`);
};

// Sets or replaces one section's methodSplits line in a location file. The
// section is the whole location (fields at 4 spaces) or one named subarea
// (fields at 12 spaces).
const setMethodSplits = (
    source: string,
    subareaName: string | undefined,
    entries: MethodEntry[]
): string => {
    const lines = source.split('\n');
    const indent = ' '.repeat(subareaName === undefined ? 4 : 12);
    let start = 0;
    let end = lines.length;

    if (subareaName !== undefined) {
        const nameIndex = lines.findIndex(
            (line) =>
                line === `${indent}name: '${subareaName}',` ||
                line === `${indent}name: "${subareaName}",`
        );
        if (nameIndex === -1) {
            throw new Error(`Subarea "${subareaName}" not found in source.`);
        }
        start = nameIndex;
        end = lines.findIndex(
            (line, index) => index > nameIndex && line === '        },'
        );
    }

    const keyIndex = lines.findIndex(
        (line, index) =>
            index >= start &&
            index < end &&
            line.startsWith(`${indent}encountersKey: `)
    );
    if (keyIndex === -1) {
        throw new Error(
            `No encountersKey found for "${subareaName ?? 'location'}".`
        );
    }

    const newLine = `${indent}methodSplits: [${entries
        .map(
            (entry) =>
                `{ method: EncounterMethod.${entry.enumKey}, split: '${entry.split}' }`
        )
        .join(', ')}],`;

    const methodIndex = lines.findIndex(
        (line, index) =>
            index >= start &&
            index < end &&
            line.startsWith(`${indent}methodSplits:`)
    );
    if (methodIndex === -1) {
        lines.splice(keyIndex + 1, 0, newLine);
        return lines.join('\n');
    }

    const closesLater = lines[methodIndex].endsWith('[');
    const lastIndex = closesLater
        ? lines.findIndex(
              (line, index) => index > methodIndex && line === `${indent}],`
          )
        : methodIndex;
    lines.splice(methodIndex, lastIndex - methodIndex + 1, newLine);

    return lines.join('\n');
};

const ensureEncounterMethodImport = (source: string): string => {
    const pattern = /import \{([^}]*)\} from '@\/lib\/static\/enums';/;
    const match = source.match(pattern);
    if (!match) {
        throw new Error('No enums import found; add EncounterMethod by hand.');
    }

    const names = match[1]
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);
    if (names.includes('EncounterMethod')) return source;

    return source.replace(
        pattern,
        `import { ${[...names, 'EncounterMethod'].sort().join(', ')} } from '@/lib/static/enums';`
    );
};

// Deletes top-level array constants (e.g. a shared methodSplits list) that
// nothing references any more.
const removeUnusedConstants = (source: string): string =>
    source.replace(
        /^const ([A-Z][A-Z0-9_]*) = \[(?:[^\n]*\];\n|\n(?:[^\n]*\n)*?\];\n)\n?/gm,
        (block, name: string) =>
            (source.match(new RegExp(`\\b${name}\\b`, 'g')) ?? []).length === 1
                ? ''
                : block
    );

const formatWithPrettier = (files: string[]): void => {
    if (files.length > 0) {
        execFileSync('npx', ['prettier', '--write', ...files], {
            stdio: 'ignore',
        });
    }
};

// Sets one progress field for the given games in game-configs.ts.
export const setConfigField = (
    gameNames: string[],
    field: 'auditedThrough' | 'trimmedThrough',
    value: string
): void => {
    const configPath = path.join(
        process.cwd(),
        'src/lib/scripts/validation/game-configs.ts'
    );
    let source = fs.readFileSync(configPath, 'utf-8');
    const literal =
        value === AUDIT_COMPLETE
            ? 'AUDIT_COMPLETE'
            : value.includes("'")
              ? `"${value}"`
              : `'${value}'`;

    gameNames.forEach((name) => {
        const pattern = new RegExp(
            `(\\n    (?:'${name}'|${name}): \\{\\n(?:        [^\\n]*\\n)*?        ${field}: )[^\\n]+(,)`
        );
        if (!pattern.test(source)) {
            throw new Error(`Couldn't find ${name}'s ${field} entry.`);
        }
        source = source.replace(pattern, `$1${literal}$2`);
    });

    fs.writeFileSync(configPath, source);
    formatWithPrettier([configPath]);
};

// The reminder printed when finishing a game's audit leaves every game with
// both progress pointers complete.
export const getCompletionReminder = (
    gameNames: string[],
    completedField: 'auditedThrough' | 'trimmedThrough'
): string[] => {
    const isComplete = Object.entries(GAME_CHECK_CONFIGS).every(
        ([name, config]) =>
            (['auditedThrough', 'trimmedThrough'] as const).every(
                (field) =>
                    (gameNames.includes(name) && field === completedField) ||
                    config[field] === AUDIT_COMPLETE
            )
    );

    return isComplete
        ? [
              'Every audit is complete. Follow "When every game is complete" in .claude/docs/split-audit.md.',
          ]
        : [];
};

// Validates a filled-in sheet in full, then writes every battle split,
// methodSplits entry, and the progress pointer. Nothing is written if any
// answer is missing or invalid.
export const applyAnswers = async (
    game: Game,
    gamesInFolder: Game[],
    text: string
): Promise<string[]> => {
    const config = getConfig(game);
    const sections = getSections(game, gamesInFolder);
    const splitNames = game.splits.map((split) => split.name);
    const { answers, through } = parseAnswers(text);
    const errors: string[] = [];

    const required = through
        ? sections.filter(
              (section) =>
                  !isEmpty(section) &&
                  !isLocationAudited(
                      config.auditedThrough,
                      section.location.name
                  ) &&
                  section.location.name.localeCompare(through) <= 0
          )
        : [];
    const answeredLabels = new Set<string>();
    const resolved = answers.flatMap((answer) => {
        const section = sections.find(
            (candidate) =>
                candidate.label.toLowerCase() === answer.label.toLowerCase()
        );
        if (!section) {
            errors.push(`Unknown section "${answer.label}"`);
            return [];
        }
        if (answeredLabels.has(section.label)) {
            errors.push(`${section.label} is answered twice`);
            return [];
        }
        answeredLabels.add(section.label);

        const assignments = resolveAssignments(
            section,
            answer.groups,
            splitNames
        );
        errors.push(...assignments.errors);

        return [{ ...assignments, section }];
    });

    required
        .filter((section) => !answeredLabels.has(section.label))
        .forEach((section) => errors.push(`No answer for ${section.label}`));

    const battleSplits = new Map<string, string>();
    resolved.forEach(({ battleSplits: splits, section }) =>
        splits.forEach((split, key) => {
            const previous = battleSplits.get(key);
            if (previous && previous !== split) {
                errors.push(
                    `${section.label}: battle ${key} is ${previous} elsewhere in this sheet`
                );
            }
            battleSplits.set(key, split);
        })
    );

    if (errors.length > 0) {
        throw new Error(`Nothing written:\n  ${errors.join('\n  ')}`);
    }

    const dataDirectory = path.join(
        process.cwd(),
        'src/lib/data',
        config.dataFolder
    );
    const changedFiles: string[] = [];

    const battlesPath = path.join(dataDirectory, 'battles.ts');
    let battlesSource = fs.readFileSync(battlesPath, 'utf-8');
    battleSplits.forEach((split, key) => {
        battlesSource = setBattleSplit(battlesSource, key, split);
    });
    fs.writeFileSync(battlesPath, battlesSource);
    changedFiles.push(battlesPath);

    const filesByName = new Map(
        (await getLocationFiles(config.dataFolder)).map(
            ({ filePath, name }) => [name, filePath] as const
        )
    );
    const sourceByFile = new Map<string, string>();
    resolved
        .filter(({ section }) => section.methods.length > 0)
        .forEach(({ methodSplits, section }) => {
            const filePath = filesByName.get(section.location.name);
            if (!filePath) {
                throw new Error(`No file for ${section.location.name}.`);
            }

            const existingOrder = [...section.existingSplits.keys()];
            const ordered = [
                ...existingOrder.filter((method) => methodSplits.has(method)),
                ...section.methods.filter(
                    (method) => !section.existingSplits.has(method)
                ),
            ];
            const entries = ordered.map((method) => ({
                enumKey: enumKeyByMethod.get(method) ?? method,
                split: methodSplits.get(method)!,
            }));
            const unchanged =
                ordered.length === existingOrder.length &&
                ordered.every(
                    (method, index) =>
                        method === existingOrder[index] &&
                        methodSplits.get(method) ===
                            section.existingSplits.get(method)
                );
            if (unchanged) return;

            sourceByFile.set(
                filePath,
                setMethodSplits(
                    sourceByFile.get(filePath) ??
                        fs.readFileSync(filePath, 'utf-8'),
                    section.subareaName,
                    entries
                )
            );
        });

    sourceByFile.forEach((source, filePath) => {
        fs.writeFileSync(
            filePath,
            removeUnusedConstants(ensureEncounterMethodImport(source))
        );
        changedFiles.push(filePath);
    });

    formatWithPrettier(changedFiles);

    if (through) {
        setConfigField(
            gamesInFolder.map((folderGame) => folderGame.name),
            'auditedThrough',
            getNewPointer(game, through)
        );
    }

    const newPointer = through ? getNewPointer(game, through) : undefined;
    const folderGameNames = gamesInFolder.map((folderGame) => folderGame.name);

    return [
        `${resolved.length} section(s) applied: ${battleSplits.size} battle split(s), ${sourceByFile.size} location file(s) changed.`,
        newPointer
            ? `Progress pointer is now "${newPointer}".`
            : 'No "through:" line, so the progress pointer was not moved.',
        ...(newPointer === AUDIT_COMPLETE
            ? getCompletionReminder(folderGameNames, 'auditedThrough')
            : []),
    ];
};
