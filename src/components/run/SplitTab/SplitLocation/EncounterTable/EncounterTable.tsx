import { Fragment, useState } from 'react';
import Image from 'next/image';
import DayIcon from '@/lib/icons/DayIcon';
import MorningIcon from '@/lib/icons/MorningIcon';
import NightIcon from '@/lib/icons/NightIcon';
import { Encounter } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EncounterTable.module.scss';

interface EncounterTableProps {
    dupes: string[];
    encounters: Encounter[];
    generation: number;
    onSelectEncounter?: (encounter: Encounter) => void;
    selectedSpecies?: string;
    variant: string;
}

const EncounterTable: React.FC<EncounterTableProps> = ({
    dupes,
    encounters,
    generation,
    onSelectEncounter,
    selectedSpecies,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 60;
    const METHOD_ICON_SIZE = 22;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 14;

    const METHOD_ORDER = [
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

    const visibleEncounters = encounters.filter(
        (encounter) =>
            !TIME_OF_DAY_CONDITIONS.some((time) =>
                encounter.conditions?.includes(time)
            ) || encounter.conditions?.includes(selectedTimeOfDay ?? '')
    );

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
        PokemonHelpers.get(encounter.species)?.name ?? encounter.species;

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

    const getTypes = (species: string): string[] =>
        PokemonHelpers.getTypes(species, generation) ?? [];

    const isEvolutionLineCaught = (species: string): boolean =>
        dupes.some((name) =>
            PokemonHelpers.isSameEvolutionLine(species, name, generation)
        );

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
                                <button
                                    aria-label={TIME_OF_DAY_LABELS[time]}
                                    aria-pressed={time === selectedTimeOfDay}
                                    className={[
                                        styles['time-of-day-button'],
                                        time === selectedTimeOfDay &&
                                            styles[
                                                'time-of-day-button--active'
                                            ],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    key={time}
                                    onClick={() => handleTimeOfDayChange(time)}
                                    type="button"
                                >
                                    <TimeOfDayIcon />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
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
                                const pokemon = PokemonHelpers.get(
                                    encounter.species
                                );
                                const sprite = PokemonHelpers.getSprite(
                                    encounter.species,
                                    variant
                                );
                                const types = getTypes(encounter.species);
                                const isCaught = isEvolutionLineCaught(
                                    encounter.species
                                );

                                return (
                                    <tr
                                        className={[
                                            styles.row,
                                            encounter.species ===
                                                selectedSpecies &&
                                                styles['row--selected'],
                                            isCaught && styles['row--caught'],
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
                                                    {types.length > 0 && (
                                                        <div
                                                            className={
                                                                styles[
                                                                    'pokemon__types'
                                                                ]
                                                            }
                                                        >
                                                            {types.map(
                                                                (type) => (
                                                                    <Image
                                                                        alt={
                                                                            type
                                                                        }
                                                                        height={
                                                                            TYPE_BADGE_HEIGHT
                                                                        }
                                                                        key={
                                                                            type
                                                                        }
                                                                        src={`/types/${type}.png`}
                                                                        width={
                                                                            TYPE_BADGE_WIDTH
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{getLevelLabel(encounter)}</td>
                                        <td className={styles.chance}>
                                            {encounter.chance !== null
                                                ? `${encounter.chance}%`
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
