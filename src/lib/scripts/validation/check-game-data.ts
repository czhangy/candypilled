import path from 'path';
import { TRAINER_CLASSES } from '@/lib/data/trainer-classes';
import {
    getLocationFiles,
    loadGames,
    logError,
    logSuccess,
    logWarning,
    runScript,
} from '@/lib/scripts/utils/helpers';
import { GAME_CHECK_CONFIGS } from '@/lib/scripts/validation/game-configs';
import {
    BattleMetadata,
    GameVersionGroup,
    Gen3AiFlag,
    Gen4AiFlag,
} from '@/lib/static/enums';
import {
    AiFlag,
    BattleTeam,
    BattleTrainer,
    Game,
    MethodSplit,
} from '@/lib/static/types';

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

const getEncounterSections = (game: Game): EncounterSection[] =>
    game.locations.flatMap((location) =>
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

const getTrainerClasses = (trainer: BattleTrainer): string[] => [
    trainer.trainerClass,
    ...trainer.teams.flatMap((team) => team.trainerClass ?? []),
];

const checkTrainerClasses = (game: Game): string[] =>
    Object.entries(game.battles).flatMap(([key, battle]) =>
        [
            ...getTrainerClasses(battle),
            ...(battle.secondTrainer
                ? getTrainerClasses(battle.secondTrainer)
                : []),
        ]
            .filter((trainerClass) => !(trainerClass in TRAINER_CLASSES))
            .map(
                (trainerClass) =>
                    `battle ${key}: unknown trainer class "${trainerClass}"`
            )
    );

const CATEGORY_METADATA = [
    BattleMetadata.Required,
    BattleMetadata.Boss,
    BattleMetadata.Optional,
    BattleMetadata.Choice,
];

const getTagPartnerKeys = (game: Game): Set<string> =>
    new Set(
        game.locations.flatMap((location) =>
            [location, ...(location.subareas ?? [])].flatMap((area) =>
                (area.tagPartner ?? []).map((partner) => partner.battleKey)
            )
        )
    );

const checkBattleMetadata = (game: Game): string[] => {
    const tagPartnerKeys = getTagPartnerKeys(game);
    return Object.entries(game.battles)
        .filter(([key]) => !tagPartnerKeys.has(key))
        .flatMap(([key, battle]) => {
            const count = CATEGORY_METADATA.filter((value) =>
                battle.metadata.includes(value)
            ).length;
            return count === 1
                ? []
                : `battle ${key}: needs exactly one of ${CATEGORY_METADATA.join('/')} metadata, has ${count}`;
        });
};

const DOUBLE_METADATA = [
    BattleMetadata.Double,
    BattleMetadata.TrueDouble,
    BattleMetadata.Tag,
];

// Ruby and Sapphire have no double-battle AI script, so they have no
// implied flag.
const getImpliedDoubleFlag = (game: Game): AiFlag | undefined => {
    if (game.generation === 4) {
        return Gen4AiFlag.TagStrategy;
    }
    return game.version === GameVersionGroup.RubySapphire
        ? undefined
        : Gen3AiFlag.DoubleBattle;
};

// A team's aiFlags must come from its generation's enum, and carry the
// flag the game adds in double battles exactly when the battle is one. A
// tag partner is exempt from the second rule: it has no metadata of its own.
const checkAiFlags = (game: Game): string[] => {
    const impliedDoubleFlag = getImpliedDoubleFlag(game);
    const validFlags: AiFlag[] = (
        game.generation === 4
            ? Object.values(Gen4AiFlag)
            : Object.values(Gen3AiFlag)
    ).filter(
        (flag) =>
            flag !== Gen3AiFlag.DoubleBattle || impliedDoubleFlag !== undefined
    );
    const tagPartnerKeys = getTagPartnerKeys(game);

    return Object.entries(game.battles).flatMap(([key, battle]) => {
        const isDouble = battle.metadata.some((value) =>
            DOUBLE_METADATA.includes(value)
        );
        const getDoubleFlagViolation = (team: BattleTeam): string[] =>
            impliedDoubleFlag !== undefined &&
            !tagPartnerKeys.has(key) &&
            team.aiFlags.includes(impliedDoubleFlag) !== isDouble
                ? [
                      `battle ${key}: ${isDouble ? 'missing' : 'unexpected'} AI flag "${impliedDoubleFlag}"`,
                  ]
                : [];

        return [
            ...battle.teams,
            ...(battle.secondTrainer?.teams ?? []),
        ].flatMap((team) => [
            ...team.aiFlags
                .filter((flag) => !validFlags.includes(flag))
                .map(
                    (flag) =>
                        `battle ${key}: AI flag "${flag}" is not valid for ${game.name}`
                ),
            ...getDoubleFlagViolation(team),
        ]);
    });
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

    if (!config.isEnabled) {
        return {
            title: game.name,
            violations: [],
            warnings: ['validation disabled, skipping all checks'],
        };
    }

    const hasMetTable = Object.keys(game.metLocationById).length > 0;

    return {
        title: game.name,
        violations: [
            ...checkMethodSplits(game),
            ...checkSplitNames(game),
            ...checkTrainerClasses(game),
            ...checkBattleMetadata(game),
            ...checkAiFlags(game),
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
        const config = GAME_CHECK_CONFIGS[game.name];
        if (config?.isEnabled) {
            gamesByFolder.set(config.dataFolder, [
                ...(gamesByFolder.get(config.dataFolder) ?? []),
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
