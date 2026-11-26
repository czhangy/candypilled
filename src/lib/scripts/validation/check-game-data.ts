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

const PROGRESSION_METADATA = [
    BattleMetadata.Required,
    BattleMetadata.Boss,
    BattleMetadata.Choice,
];

// Every battle placed in one of game's locations for game itself (a
// placement restricted to another version doesn't count).
const getPlacements = (
    game: Game
): { battleKey: string; locationName: string }[] =>
    game.locations.flatMap((location) =>
        (location.subareas
            ? location.subareas.flatMap((subarea) => subarea.battles ?? [])
            : (location.battles ?? [])
        )
            .filter((battle) => !battle.game || battle.game === game.name)
            .map((battle) => ({
                battleKey: battle.battleKey,
                locationName: location.name,
            }))
    );

const getPlacedKeys = (games: Game[]): Set<string> =>
    new Set(
        games.flatMap(getPlacements).map((placement) => placement.battleKey)
    );

// A Required, Boss or Choice battle must be placed in a location some split
// lists. One that only a sibling version places (Ruby/Sapphire share a battle
// table) isn't this game's to wire. Only reports; never wires.
const checkSplitWiring = (game: Game, siblings: Game[]): string[] => {
    const wiredLocations = new Set(
        game.splits.flatMap((split) =>
            split.locations.map((location) => location.name)
        )
    );
    const placements = getPlacements(game);
    const siblingBattleKeys = getPlacedKeys(siblings);

    return Object.entries(game.battles)
        .filter(([, battle]) =>
            battle.metadata.some((value) =>
                PROGRESSION_METADATA.includes(value)
            )
        )
        .flatMap(([key]) => {
            const ownPlacements = placements.filter(
                (placement) => placement.battleKey === key
            );
            if (
                ownPlacements.some((placement) =>
                    wiredLocations.has(placement.locationName)
                ) ||
                (ownPlacements.length === 0 && siblingBattleKeys.has(key))
            ) {
                return [];
            }

            return ownPlacements.length === 0
                ? `battle ${key}: not placed in any location`
                : `battle ${key}: only in locations no split lists (${ownPlacements.map((placement) => placement.locationName).join(', ')})`;
        });
};

// battleOrder must list each battle placed in one of the game's locations
// exactly once. A battle only a sibling version places (Ruby/Sapphire share a
// battleOrder) may be listed too, but nothing placed nowhere.
const checkBattleOrder = (game: Game, siblings: Game[]): string[] => {
    const placedKeys = getPlacedKeys([game]);
    const siblingKeys = getPlacedKeys(siblings);
    const listedKeys = new Set<string>();
    const duplicated = new Set<string>();
    game.battleOrder.forEach((key) => {
        if (listedKeys.has(key)) duplicated.add(key);
        listedKeys.add(key);
    });

    return [
        ...[...placedKeys]
            .filter((key) => !listedKeys.has(key))
            .map((key) => `battle ${key}: missing from battleOrder`),
        ...[...listedKeys]
            .filter((key) => !placedKeys.has(key) && !siblingKeys.has(key))
            .map((key) => `battleOrder: "${key}" isn't placed in a location`),
        ...[...duplicated].map((key) => `battleOrder: duplicate "${key}"`),
    ];
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

const getValidAiFlags = (game: Game): AiFlag[] =>
    (game.generation === 4
        ? Object.values(Gen4AiFlag)
        : Object.values(Gen3AiFlag)
    ).filter(
        (flag) =>
            flag !== Gen3AiFlag.DoubleBattle ||
            getImpliedDoubleFlag(game) !== undefined
    );

// A team's aiFlags must come from its generation's enum, and carry the
// flag the game adds in double battles exactly when the battle is one. A
// tag partner is exempt from the second rule: it has no metadata of its own.
const checkAiFlags = (game: Game): string[] => {
    const impliedDoubleFlag = getImpliedDoubleFlag(game);
    const validFlags = getValidAiFlags(game);
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

// Move AI notes must name real moves and real rules, use flags from the
// game's generation, and leave no rule unused.
const checkMoveAi = (game: Game): string[] => {
    const validFlags = getValidAiFlags(game);
    const { moves, rules } = game.moveAi;
    const usedKeys = new Set(Object.values(moves).flat());

    return [
        ...Object.entries(rules).flatMap(([key, rule]) => [
            ...(validFlags.includes(rule.flag)
                ? []
                : [
                      `move AI rule "${key}": AI flag "${rule.flag}" is not valid for ${game.name}`,
                  ]),
            ...(usedKeys.has(key)
                ? []
                : [`move AI rule "${key}": not used by any move`]),
        ]),
        ...Object.entries(moves).flatMap(([slug, keys]) => [
            ...(slug in game.dataSource.moves
                ? []
                : [`move AI "${slug}": unknown move`]),
            ...keys
                .filter((key) => !(key in rules))
                .map((key) => `move AI "${slug}": unknown rule "${key}"`),
        ]),
    ];
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

const checkGame = (game: Game, games: Game[]): Report => {
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
    const siblings = games.filter(
        (other) =>
            other !== game &&
            GAME_CHECK_CONFIGS[other.name]?.dataFolder === config.dataFolder
    );

    return {
        title: game.name,
        violations: [
            ...checkMethodSplits(game),
            ...checkSplitNames(game),
            ...checkTrainerClasses(game),
            ...checkBattleMetadata(game),
            ...checkSplitWiring(game, siblings),
            ...checkBattleOrder(game, siblings),
            ...checkAiFlags(game),
            ...checkMoveAi(game),
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
        ...games.map((game) => checkGame(game, games)),
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
