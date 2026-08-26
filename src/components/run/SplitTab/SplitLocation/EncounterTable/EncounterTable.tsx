import { useState, useSyncExternalStore } from 'react';
import { EncounterMethod } from '@/lib/static/enums';
import {
    Encounter,
    EncounterVisibilityContext,
    GameDataSource,
} from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './EncounterTable.module.scss';
import MethodGroup from './MethodGroup/MethodGroup';
import TimeOfDayButtons from './TimeOfDayButtons/TimeOfDayButtons';

type EncounterTableProps = {
    caughtHere?: string;
    dataSource: GameDataSource;
    dupes: string[];
    encounters: Encounter[];
    generation: number;
    isMissed: boolean;
    onSelectEncounter?: (encounter: Encounter) => void;
    onSelectItem: (slug: string) => void;
    onToggleMissed: () => void;
    selectedSpecies?: string;
};

const EncounterTable: React.FC<EncounterTableProps> = ({
    caughtHere,
    dataSource,
    dupes,
    encounters,
    generation,
    isMissed,
    onSelectEncounter,
    onSelectItem,
    onToggleMissed,
    selectedSpecies,
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
        EncounterMethod.Egg,
        EncounterMethod.Starter,
        EncounterMethod.Static,
        EncounterMethod.Gift,
        EncounterMethod.Trade,
        EncounterMethod.Binoculars,
        EncounterMethod.Grass,
        EncounterMethod.Walking,
        EncounterMethod.Cave,
        EncounterMethod.FeebasTile,
        EncounterMethod.OldRod,
        EncounterMethod.GoodRod,
        EncounterMethod.SuperRod,
        EncounterMethod.Surf,
        EncounterMethod.HoneyTree,
        EncounterMethod.PokeRadar,
    ];

    const UNMISSABLE_ENCOUNTER_METHODS = [
        EncounterMethod.Gift,
        EncounterMethod.Egg,
        EncounterMethod.Fossil,
        EncounterMethod.Trade,
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
        EvolutionHelpers.isSameEvolutionLine(
            dataSource,
            species,
            caughtHere,
            generation
        );

    const isEvolutionLineCaught = (species: string): boolean =>
        dupes.some((name) =>
            EvolutionHelpers.isSameEvolutionLine(
                dataSource,
                species,
                name,
                generation
            )
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

    const showDupes = settings['show-dupes'] ?? false;

    const visibilityContext: EncounterVisibilityContext = {
        caughtHere,
        dataSource,
        dupes,
        generation,
        settings,
    };

    const visibleEncounters = encounters.filter((encounter) => {
        const matchesTimeOfDay =
            !TIME_OF_DAY_CONDITIONS.some((time) =>
                encounter.conditions?.includes(time)
            ) || encounter.conditions?.includes(effectiveTimeOfDay ?? '');

        return (
            matchesTimeOfDay &&
            !EncounterHelpers.isEncounterHidden(encounter, visibilityContext)
        );
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
        PokemonHelpers.getPokemonData(dataSource, encounter.species)?.name ??
        encounter.species;

    const getEncountersForMethod = (method: EncounterMethod): Encounter[] =>
        visibleEncounters
            .filter((encounter) => encounter.method === method)
            .sort((a, b) => {
                const chanceDiff = (b.chance ?? 0) - (a.chance ?? 0);
                if (chanceDiff !== 0) return chanceDiff;

                const minLevelDiff = (a.minLevel ?? 0) - (b.minLevel ?? 0);
                if (minLevelDiff !== 0) return minLevelDiff;

                return getEncounterName(a).localeCompare(getEncounterName(b));
            });

    // Poké Radar draws from the same pool as Walking rather than being its
    // own self-contained 100% pool: radar-exclusive species take a fixed
    // absolute cut of the pool (their sheet chance, summed across every
    // defined radar entry regardless of catch state — a structural property
    // of the encounter table, not a display choice), and Walking species
    // split whatever's left in their existing relative proportions. Display
    // renormalizes only over currently-visible entries in that combined
    // pool, so a hidden Walking or Radar entry's share redistributes
    // proportionally to whatever's left, radar included.
    const getPokeRadarDisplayChance = (encounter: Encounter): number | null => {
        if (encounter.chance === null) return null;

        const totalRadarChance = encounters
            .filter((e) => e.method === EncounterMethod.PokeRadar)
            .reduce((sum, e) => sum + (e.chance ?? 0), 0);
        const walkingScale = 1 - totalRadarChance / 100;

        const visibleWalkingWeight = getEncountersForMethod(
            EncounterMethod.Walking
        ).reduce((sum, e) => sum + (e.chance ?? 0) * walkingScale, 0);
        const visibleRadarWeight = getEncountersForMethod(
            EncounterMethod.PokeRadar
        ).reduce((sum, e) => sum + (e.chance ?? 0), 0);

        const combinedTotal = visibleWalkingWeight + visibleRadarWeight;
        if (combinedTotal === 0) return encounter.chance;

        return Math.floor((encounter.chance / combinedTotal) * 100);
    };

    const getDisplayChance = (encounter: Encounter): number | null => {
        if (encounter.chance === null || showDupes) return encounter.chance;

        if (encounter.method === EncounterMethod.PokeRadar) {
            return getPokeRadarDisplayChance(encounter);
        }

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
                            dataSource={dataSource}
                            encounters={getEncountersForMethod(method)}
                            getDisplayChance={getDisplayChance}
                            isSpeciesCaughtElsewhere={isCaughtElsewhere}
                            isSpeciesCaughtHere={isCaughtHere}
                            key={method}
                            method={method}
                            onSelectEncounter={handleEncounterSelect}
                            onSelectItem={onSelectItem}
                            selectedSpecies={selectedSpecies}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EncounterTable;
