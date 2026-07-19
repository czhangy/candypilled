import { useState, useSyncExternalStore } from 'react';
import { EncounterMethod } from '@/lib/static/enums';
import { Encounter } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './EncounterTable.module.scss';
import MethodGroup from './MethodGroup/MethodGroup';
import TimeOfDayButtons from './TimeOfDayButtons/TimeOfDayButtons';

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

    const METHOD_ORDER = [
        EncounterMethod.Starter,
        EncounterMethod.Special,
        EncounterMethod.Gift,
        EncounterMethod.Egg,
        EncounterMethod.Grass,
        EncounterMethod.Walking,
        EncounterMethod.Cave,
        EncounterMethod.FeebasTile,
        EncounterMethod.OldRod,
        EncounterMethod.GoodRod,
        EncounterMethod.Surf,
        EncounterMethod.HoneyTree,
    ];

    const UNMISSABLE_ENCOUNTER_METHODS = [
        EncounterMethod.Gift,
        EncounterMethod.Egg,
        EncounterMethod.Fossil,
        EncounterMethod.Special,
    ];

    const TIME_OF_DAY_CONDITIONS = ['time-morning', 'time-day', 'time-night'];

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

    const isCaughtElsewhere = (species: string): boolean =>
        !isCaughtHere(species) && isEvolutionLineCaught(species);

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

    const handleEncounterSelect = (encounter: Encounter): void => {
        onSelectEncounter?.(encounter);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const timesOfDay = getTimesOfDay();

    const effectiveTimeOfDay = timesOfDay.includes(selectedTimeOfDay ?? '')
        ? selectedTimeOfDay
        : timesOfDay[0];

    const hasStarterEncounter = encounters.some(
        (encounter) => encounter.method === EncounterMethod.Starter
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
            ) || encounter.conditions?.includes(effectiveTimeOfDay ?? '');

        const isDupe =
            hideDupes &&
            !isCaughtHere(encounter.species) &&
            isEvolutionLineCaught(encounter.species);

        const isSeparateStarter =
            starterCaughtSeparately &&
            encounter.method === EncounterMethod.Starter;

        return matchesTimeOfDay && !isDupe && !isSeparateStarter;
    });

    const hasVisibleStarterEncounter = visibleEncounters.some(
        (encounter) => encounter.method === EncounterMethod.Starter
    );

    const methods = [
        ...new Set(
            visibleEncounters
                .filter(
                    (encounter) =>
                        !hasVisibleStarterEncounter ||
                        encounter.method === EncounterMethod.Starter
                )
                .map((encounter) => encounter.method)
        ),
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

    const getEncountersForMethod = (method: EncounterMethod): Encounter[] =>
        visibleEncounters
            .filter((encounter) => encounter.method === method)
            .sort((a, b) => {
                const chanceDiff = (b.chance ?? 0) - (a.chance ?? 0);
                if (chanceDiff !== 0) return chanceDiff;

                const minLevelDiff = a.minLevel - b.minLevel;
                if (minLevelDiff !== 0) return minLevelDiff;

                return getEncounterName(a).localeCompare(getEncounterName(b));
            });

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
                {timesOfDay.length > 1 && !hasVisibleStarterEncounter && (
                    <TimeOfDayButtons
                        onSelect={handleTimeOfDayChange}
                        selectedTime={effectiveTimeOfDay}
                        times={timesOfDay}
                    />
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
                        <MethodGroup
                            encounters={getEncountersForMethod(method)}
                            getDisplayChance={getDisplayChance}
                            isSpeciesCaughtElsewhere={isCaughtElsewhere}
                            isSpeciesCaughtHere={isCaughtHere}
                            key={method}
                            method={method}
                            onSelectEncounter={handleEncounterSelect}
                            selectedSpecies={selectedSpecies}
                            variant={variant}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EncounterTable;
