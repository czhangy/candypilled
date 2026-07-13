import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tabs from '@/components/run/Tabs/Tabs';
import { Encounter } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EncounterTable.module.scss';

interface EncounterTableProps {
    encounters: Encounter[];
    variant: string;
}

const EncounterTable: React.FC<EncounterTableProps> = ({
    encounters,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 28;

    const METHOD_ORDER = [
        'only-one',
        'gift',
        'gift-egg',
        'walk',
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

    const getEncountersForMethod = (method: string): Encounter[] =>
        visibleEncounters
            .filter((encounter) => encounter.method === method)
            .sort((a, b) => b.chance - a.chance);

    const getLevelLabel = (encounter: Encounter): string =>
        encounter.minLevel === encounter.maxLevel
            ? `Lv. ${encounter.minLevel}`
            : `Lv. ${encounter.minLevel}-${encounter.maxLevel}`;

    const getMethodLabel = (method: string): string =>
        method
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['encounter-table-wrapper']}>
            {timesOfDay.length > 1 && (
                <Tabs
                    activeTab={selectedTimeOfDay ?? timesOfDay[0]}
                    onTabChange={handleTimeOfDayChange}
                    tabs={timesOfDay.map((time) => ({
                        id: time,
                        label: TIME_OF_DAY_LABELS[time],
                    }))}
                />
            )}
            <table className={styles['encounter-table']}>
                <tbody>
                    {methods.map((method) => (
                        <Fragment key={method}>
                            <tr>
                                <th colSpan={3}>{getMethodLabel(method)}</th>
                            </tr>
                            {getEncountersForMethod(method).map((encounter) => {
                                const pokemon = PokemonHelpers.get(
                                    encounter.species
                                );
                                const sprite = PokemonHelpers.getSprite(
                                    encounter.species,
                                    variant
                                );

                                return (
                                    <tr
                                        key={`${method}-${encounter.species}-${encounter.minLevel}-${encounter.maxLevel}-${encounter.chance}`}
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
                                                {pokemon?.name ??
                                                    encounter.species}
                                            </div>
                                        </td>
                                        <td>{getLevelLabel(encounter)}</td>
                                        <td className={styles.chance}>
                                            {encounter.chance}%
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
