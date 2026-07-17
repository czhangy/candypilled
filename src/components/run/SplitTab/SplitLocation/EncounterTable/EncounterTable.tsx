import { Fragment, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import DayIcon from '@/lib/icons/DayIcon';
import MorningIcon from '@/lib/icons/MorningIcon';
import NightIcon from '@/lib/icons/NightIcon';
import { Encounter } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './EncounterTable.module.scss';

type EncounterTableProps = {
    caughtHere?: string;
    dupes: string[];
    encounters: Encounter[];
    generation: number;
    isMissed: boolean;
    onSelectEncounter?: (encounter: Encounter) => void;
    onToggleMissed: () => void;
    selectedSpecies?: string;
    starterCaughtSeparately: boolean;
    variant: string;
};

const EncounterTable: React.FC<EncounterTableProps> = ({
    caughtHere,
    dupes,
    encounters,
    generation,
    isMissed,
    onSelectEncounter,
    onToggleMissed,
    selectedSpecies,
    starterCaughtSeparately,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 48;
    const METHOD_ICON_SIZE = 22;

    const METHOD_ORDER = [
        'starter',
        'only-one',
        'gift',
        'gift-egg',
        'grass',
        'cave',
        'old-rod',
        'good-rod',
        'feebas-tile-fishing',
        'surf',
        'honey-tree',
    ];

    const UNMISSABLE_ENCOUNTER_METHODS = [
        'gift',
        'gift-egg',
        'fossil',
        'only-one',
    ];

    const TIME_OF_DAY_CONDITIONS = ['time-morning', 'time-day', 'time-night'];

    const TIME_OF_DAY_LABELS: Record<string, string> = {
        'time-morning': 'Morning',
        'time-day': 'Day',
        'time-night': 'Night',
    };

    const TIME_OF_DAY_ICONS: Record<string, React.FC> = {
        'time-morning': MorningIcon,
        'time-day': DayIcon,
        'time-night': NightIcon,
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getTimesOfDay = (): string[] =>
        TIME_OF_DAY_CONDITIONS.filter((time) =>
            encounters.some((encounter) => encounter.conditions?.includes(time))
        );

    const isCaughtHere = (species: string): boolean =>
        !!caughtHere &&
        EvolutionHelpers.isSameEvolutionLine(species, caughtHere, generation);

    const isEvolutionLineCaught = (species: string): boolean =>
        dupes.some((name) =>
            EvolutionHelpers.isSameEvolutionLine(species, name, generation)
        );

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<
        string | undefined
    >(getTimesOfDay()[0]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTimeOfDayChange = (time: string): void => {
        setSelectedTimeOfDay(time);
    };

    const handleRowClick = (encounter: Encounter): void => {
        onSelectEncounter?.(encounter);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const timesOfDay = getTimesOfDay();

    const hasStarterEncounter = encounters.some(
        (encounter) => encounter.method === 'starter'
    );

    const isMissable =
        !hasStarterEncounter &&
        encounters.some(
            (encounter) =>
                !UNMISSABLE_ENCOUNTER_METHODS.includes(encounter.method)
        );

    const hideDupes = settings['hide-dupes'] ?? false;

    const visibleEncounters = encounters.filter((encounter) => {
        const matchesTimeOfDay =
            !TIME_OF_DAY_CONDITIONS.some((time) =>
                encounter.conditions?.includes(time)
            ) || encounter.conditions?.includes(selectedTimeOfDay ?? '');

        const isDupe =
            hideDupes &&
            !isCaughtHere(encounter.species) &&
            isEvolutionLineCaught(encounter.species);

        const isSeparateStarter =
            starterCaughtSeparately && encounter.method === 'starter';

        return matchesTimeOfDay && !isDupe && !isSeparateStarter;
    });

    const methods = [
        ...new Set(visibleEncounters.map((encounter) => encounter.method)),
    ].sort((a, b) => {
        const aIndex = METHOD_ORDER.indexOf(a);
        const bIndex = METHOD_ORDER.indexOf(b);
        return (
            (aIndex === -1 ? METHOD_ORDER.length : aIndex) -
            (bIndex === -1 ? METHOD_ORDER.length : bIndex)
        );
    });

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getEncounterName = (encounter: Encounter): string =>
        PokemonHelpers.getPokemonData(encounter.species)?.name ??
        encounter.species;

    const getEncountersForMethod = (method: string): Encounter[] =>
        visibleEncounters
            .filter((encounter) => encounter.method === method)
            .sort((a, b) => {
                const chanceDiff = (b.chance ?? 0) - (a.chance ?? 0);
                if (chanceDiff !== 0) return chanceDiff;

                const minLevelDiff = a.minLevel - b.minLevel;
                if (minLevelDiff !== 0) return minLevelDiff;

                return getEncounterName(a).localeCompare(getEncounterName(b));
            });

    const getLevelLabel = (encounter: Encounter): string =>
        encounter.minLevel === encounter.maxLevel
            ? `Lv. ${encounter.minLevel}`
            : `Lv. ${encounter.minLevel}-${encounter.maxLevel}`;

    const getMethodLabel = (method: string): string =>
        method
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const getMethodIcon = (method: string): string =>
        `/encounter_methods/${method}.png`;

    const getDisplayChance = (encounter: Encounter): number | null => {
        if (encounter.chance === null || !hideDupes) return encounter.chance;

        const group = getEncountersForMethod(encounter.method);
        const total = group.reduce((sum, e) => sum + (e.chance ?? 0), 0);
        if (total === 0) return encounter.chance;

        return Math.floor((encounter.chance / total) * 100);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['encounter-table-wrapper']}>
            <div className={styles.header}>
                <span className={styles.label}>Encounters</span>
                {timesOfDay.length > 1 && (
                    <div className={styles['time-of-day-buttons']}>
                        {timesOfDay.map((time) => {
                            const TimeOfDayIcon = TIME_OF_DAY_ICONS[time];
                            return (
                                <Tooltip
                                    key={time}
                                    position="center"
                                    text={TIME_OF_DAY_LABELS[time]}
                                >
                                    <button
                                        aria-label={TIME_OF_DAY_LABELS[time]}
                                        aria-pressed={
                                            time === selectedTimeOfDay
                                        }
                                        className={[
                                            styles['time-of-day-button'],
                                            time === selectedTimeOfDay &&
                                                styles[
                                                    'time-of-day-button--active'
                                                ],
                                        ]
                                            .filter(Boolean)
                                            .join(' ')}
                                        onClick={() =>
                                            handleTimeOfDayChange(time)
                                        }
                                        type="button"
                                    >
                                        <TimeOfDayIcon />
                                    </button>
                                </Tooltip>
                            );
                        })}
                    </div>
                )}
            </div>
            {isMissable && (
                <button
                    className={[
                        styles['miss-button'],
                        isMissed && styles['miss-button--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    disabled={!isMissed && !!caughtHere}
                    onClick={onToggleMissed}
                    type="button"
                >
                    {isMissed ? 'MISSED' : 'MISS'}
                </button>
            )}
            <table className={styles['encounter-table']}>
                <colgroup>
                    <col className={styles['col-pokemon']} />
                    <col className={styles['col-level']} />
                    <col className={styles['col-chance']} />
                </colgroup>
                <tbody>
                    {methods.map((method) => (
                        <Fragment key={method}>
                            <tr>
                                <th colSpan={3}>
                                    <div className={styles.method}>
                                        <Image
                                            alt=""
                                            height={METHOD_ICON_SIZE}
                                            src={getMethodIcon(method)}
                                            width={METHOD_ICON_SIZE}
                                        />
                                        {getMethodLabel(method)}
                                    </div>
                                </th>
                            </tr>
                            {getEncountersForMethod(method).map((encounter) => {
                                const pokemon = PokemonHelpers.getPokemonData(
                                    encounter.species
                                );
                                const sprite = PokemonHelpers.getPokemonSprite(
                                    encounter.species,
                                    variant
                                );
                                const isCaughtElsewhere =
                                    !isCaughtHere(encounter.species) &&
                                    isEvolutionLineCaught(encounter.species);

                                return (
                                    <tr
                                        className={[
                                            styles.row,
                                            encounter.species ===
                                                selectedSpecies &&
                                                styles['row--selected'],
                                            isCaughtHere(encounter.species) &&
                                                styles['row--caught'],
                                            isCaughtElsewhere &&
                                                styles['row--used'],
                                        ]
                                            .filter(Boolean)
                                            .join(' ')}
                                        key={`${method}-${encounter.species}-${encounter.minLevel}-${encounter.maxLevel}-${encounter.chance}`}
                                        onClick={() =>
                                            handleRowClick(encounter)
                                        }
                                    >
                                        <td>
                                            <div className={styles.pokemon}>
                                                <div
                                                    className={
                                                        styles[
                                                            'pokemon__sprite'
                                                        ]
                                                    }
                                                >
                                                    {sprite && (
                                                        <Image
                                                            alt={
                                                                pokemon?.name ??
                                                                encounter.species
                                                            }
                                                            height={SPRITE_SIZE}
                                                            src={sprite}
                                                            width={SPRITE_SIZE}
                                                        />
                                                    )}
                                                </div>
                                                <div
                                                    className={
                                                        styles['pokemon__info']
                                                    }
                                                >
                                                    <span>
                                                        {pokemon?.name ??
                                                            encounter.species}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{getLevelLabel(encounter)}</td>
                                        <td className={styles.chance}>
                                            {encounter.chance !== null
                                                ? `${getDisplayChance(encounter)}%`
                                                : '—'}
                                        </td>
                                    </tr>
                                );
                            })}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EncounterTable;
