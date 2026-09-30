import path from 'path';
import {
    getLocationFiles,
    loadGames,
    logError,
    logSuccess,
    logWarning,
    runScript,
} from '@/lib/scripts/utils/helpers';
import {
    GAME_CHECK_CONFIGS,
    isLocationAudited,
} from '@/lib/scripts/validation/game-configs';
import { Game, MethodSplit } from '@/lib/static/types';

type Report = {
    title: string;
    violations: string[];
    warnings: string[];
};

type EncounterSection = {
    encountersKey: string | undefined;
    label: string;
    locationName: string;
    methodSplits: MethodSplit[] | undefined;
};

const getEncounterSections = (game: Game): EncounterSection[] =>
    game.locations.flatMap((location) =>
        location.subareas
            ? location.subareas.map((subarea) => ({
                  encountersKey: subarea.encountersKey,
                  label: `${location.name} / ${subarea.name}`,
                  locationName: location.name,
                  methodSplits: subarea.methodSplits,
              }))
            : [
                  {
                      encountersKey: location.encountersKey,
                      label: location.name,
                      locationName: location.name,
                      methodSplits: location.methodSplits,
                  },
              ]
    );

const checkMethodSplits = (
    game: Game,
    auditedThrough: string | null
): string[] =>
    getEncounterSections(game)
        .filter((section) =>
            isLocationAudited(auditedThrough, section.locationName)
        )
        .flatMap((section) => {
            const declared = (section.methodSplits ?? []).map(
                (entry) => entry.method
            );
            const available = new Set(
                (section.encountersKey
                    ? (game.encounters[section.encountersKey] ?? [])
                    : []
                ).map((encounter) => encounter.method)
            );
            const missing = [...available].filter(
                (method) => !declared.includes(method)
            );
            const absent = declared.filter((method) => !available.has(method));
            const duplicated = new Set(
                declared.filter(
                    (method, index) => declared.indexOf(method) !== index
                )
            );

            return [
                missing.length > 0
                    ? `${section.label}: no split for ${missing.join(', ')}`
                    : null,
                absent.length > 0
                    ? `${section.label}: split for absent method ${absent.join(', ')}`
                    : null,
                duplicated.size > 0
                    ? `${section.label}: duplicate split for ${[...duplicated].join(', ')}`
                    : null,
            ].filter((violation) => violation !== null);
        });

const checkSplitNames = (game: Game): string[] => {
    const splitNames = new Set(game.splits.map((split) => split.name));

    const battleViolations = Object.entries(game.battles)
        .filter(([, battle]) => !splitNames.has(battle.split))
        .map(
            ([key, battle]) => `battle ${key}: unknown split "${battle.split}"`
        );
    const methodViolations = getEncounterSections(game).flatMap((section) =>
        (section.methodSplits ?? [])
            .filter((entry) => !splitNames.has(entry.split))
            .map(
                (entry) =>
                    `${section.label}: unknown split "${entry.split}" for ${entry.method}`
            )
    );

    return [...battleViolations, ...methodViolations];
};

const checkMetLocations = (
    game: Game,
    unmappedLocations: string[]
): string[] => {
    const metNames = new Set(Object.values(game.metLocationById));
    const locationNames = new Set(
        game.locations.map((location) => location.name)
    );

    const unmatchedMetNames = [...metNames]
        .filter((name) => !locationNames.has(name))
        .map((name) => `met-location "${name}" has no matching location`);
    const unmatchedLocations = [...locationNames]
        .filter(
            (name) => !unmappedLocations.includes(name) && !metNames.has(name)
        )
        .map((name) => `location "${name}" has no matching met-location`);
    const staleUnmappedLocations = unmappedLocations
        .filter((name) => !locationNames.has(name) || metNames.has(name))
        .map((name) => `stale unmapped location "${name}"`);

    return [
        ...unmatchedMetNames,
        ...unmatchedLocations,
        ...staleUnmappedLocations,
    ];
};

const checkGame = (game: Game): Report => {
    const config = GAME_CHECK_CONFIGS[game.name];
    if (!config) {
        return {
            title: game.name,
            violations: ['no entry in GAME_CHECK_CONFIGS (game-configs.ts)'],
            warnings: [],
        };
    }

    const hasMetTable = Object.keys(game.metLocationById).length > 0;

    return {
        title: game.name,
        violations: [
            ...checkMethodSplits(game, config.auditedThrough),
            ...checkSplitNames(game),
            ...(hasMetTable
                ? checkMetLocations(game, config.unmappedLocations)
                : []),
        ],
        warnings: hasMetTable
            ? []
            : ['no met-location table yet, skipping location correspondence'],
    };
};

// A location file that no game's locations.ts lists never reaches the
// Locations tab. Games sharing a folder are checked together, since a
// version-exclusive location is only listed by its own version.
const checkLocationFiles = async (
    dataFolder: string,
    games: Game[]
): Promise<Report> => {
    const listedNames = new Set(
        games.flatMap((game) => game.locations.map((location) => location.name))
    );
    const unlisted = (await getLocationFiles(dataFolder)).filter(
        ({ name }) => !listedNames.has(name)
    );

    return {
        title: `${dataFolder}/locations`,
        violations: unlisted.map(
            ({ filePath, name }) =>
                `${path.basename(filePath)}: "${name}" isn't in locations.ts`
        ),
        warnings: [],
    };
};

const checkGameData = async (): Promise<void> => {
    const games = await loadGames();

    const gamesByFolder = new Map<string, Game[]>();
    games.forEach((game) => {
        const folder = GAME_CHECK_CONFIGS[game.name]?.dataFolder;
        if (folder) {
            gamesByFolder.set(folder, [
                ...(gamesByFolder.get(folder) ?? []),
                game,
            ]);
        }
    });

    const reports = [
        ...games.map(checkGame),
        ...(await Promise.all(
            [...gamesByFolder].map(([folder, folderGames]) =>
                checkLocationFiles(folder, folderGames)
            )
        )),
    ];

    reports.forEach(({ title, violations, warnings }) => {
        warnings.forEach((warning) => logWarning(`${title}: ${warning}.`));

        if (violations.length === 0) {
            logSuccess(`${title}: OK`);
            return;
        }

        logError(`${title}: ${violations.length} violation(s)`);
        violations.forEach((violation) => console.log(`    ${violation}`));
    });

    const violationCount = reports.reduce(
        (total, report) => total + report.violations.length,
        0
    );
    if (violationCount > 0) {
        throw new Error(`${violationCount} game data violation(s) found.`);
    }
};

runScript(checkGameData);
