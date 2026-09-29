import fs from 'fs';
import path from 'path';
import {
    logError,
    logSuccess,
    logWarning,
    runScript,
} from '@/lib/scripts/utils/helpers';
import { Game, Location, MethodSplit } from '@/lib/static/types';

type GameCheckConfig = {
    // Folder under src/lib/data/ holding this game's locations/ directory.
    dataFolder: string;
    // True once every battle and encounter method has a real split, so an
    // unfinished game's placeholder data doesn't fail the method-split check.
    isSplitAudited: boolean;
    // Locations that intentionally have no met-table entry (the met index
    // doesn't cover gyms, Elite Four rooms, or the champion's room).
    unmappedLocations: string[];
};

type Report = {
    title: string;
    violations: string[];
    warnings: string[];
};

type EncounterSection = {
    encountersKey: string | undefined;
    label: string;
    methodSplits: MethodSplit[] | undefined;
};

const HOENN_UNMAPPED_LOCATIONS = [
    'Dewford Gym',
    "Drake's Room",
    'Fortree Gym',
    "Glacia's Room",
    'Lavaridge Gym',
    'Mauville Gym',
    'Mossdeep Gym',
    'Petalburg Gym',
    "Phoebe's Room",
    'Rustboro Gym',
    "Sidney's Room",
    'Sootopolis Gym',
    "Steven's Room",
    'Trick House',
];

const SINNOH_UNMAPPED_LOCATIONS = [
    "Aaron's Room",
    "Bertha's Room",
    'Canalave Gym',
    "Cynthia's Room",
    'Eterna Gym',
    "Flint's Room",
    'Hearthome Gym',
    "Lucian's Room",
    'Oreburgh Gym',
    'Pastoria Gym',
    'Snowpoint Gym',
    'Sunyshore Gym',
    'Veilstone Gym',
];

// The Team Galactic Eterna Building's met index (122) debuted in Platinum,
// so a Diamond or Pearl save can never carry it.
const DIAMOND_PEARL_UNMAPPED_LOCATIONS = [
    ...SINNOH_UNMAPPED_LOCATIONS,
    'Team Galactic Eterna Building',
];

// Every registered game needs an entry here, keyed by Game.name.
const GAME_CHECK_CONFIGS: Record<string, GameCheckConfig> = {
    Ruby: {
        dataFolder: 'ruby-sapphire',
        isSplitAudited: true,
        unmappedLocations: HOENN_UNMAPPED_LOCATIONS,
    },
    Sapphire: {
        dataFolder: 'ruby-sapphire',
        isSplitAudited: true,
        unmappedLocations: HOENN_UNMAPPED_LOCATIONS,
    },
    Emerald: {
        dataFolder: 'emerald',
        isSplitAudited: false,
        unmappedLocations: [],
    },
    Diamond: {
        dataFolder: 'diamond-pearl',
        isSplitAudited: false,
        unmappedLocations: DIAMOND_PEARL_UNMAPPED_LOCATIONS,
    },
    Pearl: {
        dataFolder: 'diamond-pearl',
        isSplitAudited: false,
        unmappedLocations: DIAMOND_PEARL_UNMAPPED_LOCATIONS,
    },
    Platinum: {
        dataFolder: 'platinum',
        isSplitAudited: false,
        unmappedLocations: SINNOH_UNMAPPED_LOCATIONS,
    },
    'Renegade Platinum': {
        dataFolder: 'renegade-platinum',
        isSplitAudited: false,
        unmappedLocations: SINNOH_UNMAPPED_LOCATIONS,
    },
};

// The game data imports map images, which plain Node can't load.
const stubImageImports = (): void => {
    require.extensions['.png'] = (module: NodeJS.Module): void => {
        module.exports = { height: 0, src: '', width: 0 };
    };
};

const getEncounterSections = (game: Game): EncounterSection[] =>
    game.locations.flatMap((location: Location) =>
        location.subareas
            ? location.subareas.map((subarea) => ({
                  encountersKey: subarea.encountersKey,
                  label: `${location.name} / ${subarea.name}`,
                  methodSplits: subarea.methodSplits,
              }))
            : [
                  {
                      encountersKey: location.encountersKey,
                      label: location.name,
                      methodSplits: location.methodSplits,
                  },
              ]
    );

const checkMethodSplits = (game: Game): string[] =>
    getEncounterSections(game).flatMap((section) => {
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

const checkMetLocations = (game: Game, config: GameCheckConfig): string[] => {
    const metNames = new Set(Object.values(game.metLocationById));
    const locationNames = new Set(
        game.locations.map((location) => location.name)
    );

    const unmatchedMetNames = [...metNames]
        .filter((name) => !locationNames.has(name))
        .map((name) => `met-location "${name}" has no matching location`);
    const unmatchedLocations = [...locationNames]
        .filter(
            (name) =>
                !config.unmappedLocations.includes(name) && !metNames.has(name)
        )
        .map((name) => `location "${name}" has no matching met-location`);
    const staleUnmappedLocations = config.unmappedLocations
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
            violations: ['no entry in GAME_CHECK_CONFIGS (check-game-data.ts)'],
            warnings: [],
        };
    }

    const hasMetTable = Object.keys(game.metLocationById).length > 0;

    return {
        title: game.name,
        violations: [
            ...(config.isSplitAudited ? checkMethodSplits(game) : []),
            ...checkSplitNames(game),
            ...(hasMetTable ? checkMetLocations(game, config) : []),
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
    const directory = path.join(
        process.cwd(),
        'src/lib/data',
        dataFolder,
        'locations'
    );
    const listedNames = new Set(
        games.flatMap((game) => game.locations.map((location) => location.name))
    );

    const files = fs
        .readdirSync(directory)
        .filter((file) => file.endsWith('.ts'));
    const unlisted = (
        await Promise.all(
            files.map(async (file) => {
                const { default: location } = (await import(
                    path.join(directory, file)
                )) as { default: Location };
                return { file, name: location.name };
            })
        )
    ).filter(({ name }) => !listedNames.has(name));

    return {
        title: `${dataFolder}/locations`,
        violations: unlisted.map(
            ({ file, name }) => `${file}: "${name}" isn't in locations.ts`
        ),
        warnings: [],
    };
};

const checkGameData = async (): Promise<void> => {
    stubImageImports();
    const { GAMES } = await import('@/lib/data/games');

    const gamesByFolder = new Map<string, Game[]>();
    GAMES.forEach((game) => {
        const folder = GAME_CHECK_CONFIGS[game.name]?.dataFolder;
        if (folder) {
            gamesByFolder.set(folder, [
                ...(gamesByFolder.get(folder) ?? []),
                game,
            ]);
        }
    });

    const reports = [
        ...GAMES.map(checkGame),
        ...(await Promise.all(
            [...gamesByFolder].map(([folder, games]) =>
                checkLocationFiles(folder, games)
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
