'use client';

import { useState, useSyncExternalStore } from 'react';
import { StaticImageData } from 'next/image';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { EncounterMethod, PokemonStatus } from '@/lib/static/enums';
import {
    Battle,
    CaughtPokemon,
    Encounter,
    Game,
    Location,
    Run,
} from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import BattleCard from './BattleCard/BattleCard';
import EncounterTable from './EncounterTable/EncounterTable';
import LocationMap from './LocationMap/LocationMap';
import PokedexTile from './PokedexTile/PokedexTile';
import styles from './SplitLocation.module.scss';

type SplitLocationProps = {
    game: Game;
    index: number;
    location: Location;
    onAdvanceSplit: (splitName: string) => void;
    onClearBattleMarker: () => void;
    onGameComplete: () => void;
    onSelectAbility: (slug: string) => void;
    onSelectBattleMarker: (battleKey: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    onSelectTrainer: (battleKey: string) => void;
    run: Run;
    selectedBattleKey?: string;
    variant: string;
};

const SplitLocation: React.FC<SplitLocationProps> = ({
    game,
    index,
    location,
    onAdvanceSplit,
    onClearBattleMarker,
    onGameComplete,
    onSelectAbility,
    onSelectBattleMarker,
    onSelectItem,
    onSelectLocation,
    onSelectMove,
    onSelectSpecies,
    onSelectTrainer,
    run,
    selectedBattleKey,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type Section = {
        map?: StaticImageData;
        battles: Battle[];
        encounters?: Encounter[];
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const defeatedBattles = run.defeatedBattles;
    const nextPersonalBestBattleKey = BattleHelpers.getNextRequiredBattleKey(
        game,
        run.personalBest
    );
    const isChasingPersonalBest =
        !!run.personalBest && !defeatedBattles.includes(run.personalBest);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const isBattleDefeated = (battle: Battle): boolean =>
        defeatedBattles.includes(BattleHelpers.getBattleKey(battle));

    const isBattleNextPB = (battle: Battle): boolean =>
        isChasingPersonalBest &&
        BattleHelpers.getBattleKey(battle) === nextPersonalBestBattleKey;

    const getDefaultSelectedBattle = (
        subareaIndex: number
    ): Battle | undefined => {
        const subarea = location.subareas?.[subareaIndex];
        const battles = location.hideBattles
            ? []
            : location.subareas
              ? subarea?.hideBattles
                  ? []
                  : (subarea?.battles ?? [])
              : (location.battles ?? []);

        const queriedBattle = battles.find(
            (battle) => BattleHelpers.getBattleKey(battle) === selectedBattleKey
        );
        if (queriedBattle) return queriedBattle;

        const requiredBattles = battles.filter((battle) => !battle.isOptional);
        const candidates =
            requiredBattles.length > 0 ? requiredBattles : battles;

        return (
            candidates.find((battle) => !isBattleDefeated(battle)) ??
            candidates[candidates.length - 1]
        );
    };

    const getAllBattles = (): {
        battle: Battle;
        subareaIndex: number;
    }[] => {
        const battlesBySubarea = location.subareas
            ? location.subareas.map((subarea, subareaIndex) => ({
                  battles:
                      location.hideBattles || subarea.hideBattles
                          ? []
                          : (subarea.battles ?? []),
                  subareaIndex,
              }))
            : [
                  {
                      battles: location.hideBattles
                          ? []
                          : (location.battles ?? []),
                      subareaIndex: 0,
                  },
              ];

        return battlesBySubarea.flatMap(({ battles, subareaIndex }) =>
            battles.map((battle) => ({ battle, subareaIndex }))
        );
    };

    const getInitialSubareaIndex = (): number => {
        if (!location.subareas || location.subareas.length === 0) {
            return 0;
        }

        if (selectedBattleKey) {
            const queried = getAllBattles().find(
                ({ battle }) =>
                    BattleHelpers.getBattleKey(battle) === selectedBattleKey
            );
            if (queried) return queried.subareaIndex;
        }

        const hasAnyEncounters = location.subareas.some(
            (subarea) => !!subarea.encountersKey
        );
        const takenEncounter = run.caughtPokemon.some(
            (caught) => caught.location === location.name
        );

        if (hasAnyEncounters && !takenEncounter) {
            return 0;
        }

        const candidates = getAllBattles();
        if (candidates.length === 0) {
            return 0;
        }

        const nextUndefeated = candidates.find(
            ({ battle }) => !isBattleDefeated(battle)
        );

        return (nextUndefeated ?? candidates[candidates.length - 1])
            .subareaIndex;
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(true);
    const [selectedSubareaIndex, setSelectedSubareaIndex] = useState<number>(
        getInitialSubareaIndex
    );
    const [selectedBattle, setSelectedBattle] = useState<Battle | undefined>(
        () => getDefaultSelectedBattle(getInitialSubareaIndex())
    );
    const [selectedEncounter, setSelectedEncounter] = useState<
        Encounter | undefined
    >(undefined);
    const [speciesOverride, setSpeciesOverride] = useState<string | undefined>(
        undefined
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleHeaderClick = (): void => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
    };

    const handleSubareaClick = (index: number): void => {
        setSelectedSubareaIndex(index);
        setSelectedBattle(getDefaultSelectedBattle(index));
        setSelectedEncounter(undefined);
        setSpeciesOverride(undefined);
    };

    const handleEncounterSelect = (encounter: Encounter): void => {
        setSelectedEncounter(encounter);
        setSpeciesOverride(undefined);
    };

    const handleBattleToggleDefeated = (battle: Battle): void => {
        onClearBattleMarker();

        const battleKey = BattleHelpers.getBattleKey(battle);
        const wasDefeated = defeatedBattles.includes(battleKey);

        const updatedRun: Run = {
            ...run,
            defeatedBattles: wasDefeated
                ? defeatedBattles.filter((key) => key !== battleKey)
                : [
                      ...defeatedBattles,
                      ...BattleHelpers.getRequiredBattleKeysBefore(
                          game,
                          battleKey
                      ).filter((key) => !defeatedBattles.includes(key)),
                      battleKey,
                  ],
        };

        if (!wasDefeated && !battle.isOptional) {
            const candidatePosition = BattleHelpers.countProgress(
                game,
                battleKey
            );
            const personalBestPosition = BattleHelpers.countProgress(
                game,
                run.personalBest
            );

            if (
                candidatePosition &&
                (!personalBestPosition ||
                    BattleHelpers.isFarther(
                        candidatePosition,
                        personalBestPosition
                    ))
            ) {
                updatedRun.personalBest = battleKey;
            }
        }

        LocalStorageHelpers.saveRun(game, updatedRun);

        if (!wasDefeated) {
            const requiredBattleKeys =
                BattleHelpers.getRequiredBattleKeys(game);
            const isLastRequiredBattle =
                battleKey === requiredBattleKeys[requiredBattleKeys.length - 1];

            if (isLastRequiredBattle) {
                onGameComplete();
            } else {
                const nextSplitName = BattleHelpers.getNextSplitAfterBattle(
                    game,
                    battleKey
                );
                if (nextSplitName) {
                    onAdvanceSplit(nextSplitName);
                }
            }

            const allBattles = getAllBattles();
            const currentIndex = allBattles.findIndex(
                ({ battle: candidate }) =>
                    BattleHelpers.getBattleKey(candidate) === battleKey
            );
            const nextBattle = allBattles[currentIndex + 1];

            if (nextBattle) {
                setSelectedSubareaIndex(nextBattle.subareaIndex);
                setSelectedBattle(nextBattle.battle);
                setSelectedEncounter(undefined);
                setSpeciesOverride(undefined);
                onSelectBattleMarker(
                    BattleHelpers.getBattleKey(nextBattle.battle)
                );
            }
        }
    };

    const handleAddPokemon = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
        >
    ): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: [
                ...run.caughtPokemon,
                {
                    ...details,
                    heldItem: '',
                    // An egg's actual hatch location isn't tracked, so it's
                    // recorded under a placeholder location rather than the
                    // encounter's own (misleading) one.
                    location: isEggEncounter ? 'Mystery Zone' : location.name,
                    status: PokemonStatus.Alive,
                },
            ],
            missedLocations: run.missedLocations.filter(
                (missedLocation) => missedLocation !== location.name
            ),
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    const handleRemovePokemon = (): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.filter(
                (caught) => caught.location !== location.name
            ),
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    const handleToggleMissed = (): void => {
        const updatedRun: Run = {
            ...run,
            missedLocations: isMissed
                ? run.missedLocations.filter(
                      (missedLocation) => missedLocation !== location.name
                  )
                : [...run.missedLocations, location.name],
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const dupes = run.caughtPokemon.map((caught) => caught.slug);
    const isMissed = run.missedLocations.includes(location.name);
    const usedLocations = RunHelpers.getUsedLocations(run);
    const encounter = run.caughtPokemon.find(
        (caught) => caught.location === location.name
    )?.slug;
    const activeSubarea = location.subareas?.[selectedSubareaIndex];
    const section: Section = activeSubarea
        ? {
              map: activeSubarea.map,
              battles:
                  location.hideBattles || activeSubarea.hideBattles
                      ? []
                      : (activeSubarea.battles ?? []),
              encounters: activeSubarea.encountersKey
                  ? game.encounters[activeSubarea.encountersKey]
                  : undefined,
          }
        : {
              map: location.map,
              battles: location.hideBattles ? [] : (location.battles ?? []),
              encounters: location.encountersKey
                  ? game.encounters[location.encountersKey]
                  : undefined,
          };
    const isStarterEncounter = selectedEncounter
        ? selectedEncounter.method === EncounterMethod.Starter
        : !!encounter &&
          !!section.encounters?.some(
              (locationEncounter) =>
                  locationEncounter.method === EncounterMethod.Starter &&
                  EvolutionHelpers.isSameEvolutionLine(
                      locationEncounter.species,
                      encounter,
                      game.generation
                  )
          );
    const isEggEncounter = selectedEncounter
        ? selectedEncounter.method === EncounterMethod.Egg
        : !!encounter &&
          !!section.encounters?.some(
              (locationEncounter) =>
                  locationEncounter.method === EncounterMethod.Egg &&
                  EvolutionHelpers.isSameEvolutionLine(
                      locationEncounter.species,
                      encounter,
                      game.generation
                  )
          );
    const allEncountersHidden =
        !!section.encounters &&
        EncounterHelpers.areAllEncountersHidden(section.encounters, {
            caughtHere: encounter,
            dupes,
            generation: game.generation,
            settings,
        });

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['split-location']}
            id={SplitHelpers.getLocationSlug(location.name, index)}
        >
            <div className={styles.header}>
                <button
                    aria-expanded={isOpen}
                    className={styles['name-button']}
                    onClick={handleHeaderClick}
                    type="button"
                >
                    <span className={styles.name}>{location.name}</span>
                </button>
                {location.subareas && location.subareas.length > 1 && (
                    <div className={styles.subareas}>
                        {location.subareas.map((subarea, index) => (
                            <button
                                aria-pressed={index === selectedSubareaIndex}
                                className={[
                                    styles['subarea-button'],
                                    index === selectedSubareaIndex &&
                                        styles['subarea-button--active'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={subarea.name}
                                onClick={() => handleSubareaClick(index)}
                                type="button"
                            >
                                {subarea.name}
                            </button>
                        ))}
                    </div>
                )}
                <button
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${location.name} details`}
                    className={styles['chevron-button']}
                    onClick={handleHeaderClick}
                    type="button"
                >
                    <span
                        className={[
                            styles.chevron,
                            isOpen && styles['chevron--open'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                    >
                        <ChevronIcon />
                    </span>
                </button>
            </div>
            {(section.map || (section.encounters && !allEncountersHidden)) && (
                <div
                    className={[
                        styles['content-wrapper'],
                        isOpen && styles['content-wrapper--open'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <div className={styles.content}>
                        <div className={styles['content-inner']}>
                            {section.map && (
                                <LocationMap
                                    alt={`${location.name} map`}
                                    battles={section.battles}
                                    game={game}
                                    isBattleDefeated={isBattleDefeated}
                                    isBattleNextPB={isBattleNextPB}
                                    map={section.map}
                                    onBattleClick={(battle: Battle) => {
                                        setSelectedBattle(battle);
                                        onSelectBattleMarker(
                                            BattleHelpers.getBattleKey(battle)
                                        );
                                    }}
                                    priority={index === 0}
                                    selectedBattle={selectedBattle}
                                />
                            )}
                            {selectedBattle &&
                                section.battles.includes(selectedBattle) && (
                                    <BattleCard
                                        battle={selectedBattle}
                                        game={game}
                                        generation={game.generation}
                                        isDefeated={isBattleDefeated(
                                            selectedBattle
                                        )}
                                        onSelectAbility={onSelectAbility}
                                        onSelectItem={onSelectItem}
                                        onSelectMove={onSelectMove}
                                        onSelectSpecies={onSelectSpecies}
                                        onSelectTrainer={onSelectTrainer}
                                        onToggleDefeated={() =>
                                            handleBattleToggleDefeated(
                                                selectedBattle
                                            )
                                        }
                                        starter={run.starter}
                                        variant={variant}
                                        version={game.version}
                                    />
                                )}
                            {section.encounters && !allEncountersHidden && (
                                <div className={styles['encounters-row']}>
                                    <EncounterTable
                                        caughtHere={encounter}
                                        dupes={dupes}
                                        encounters={section.encounters}
                                        generation={game.generation}
                                        isMissed={isMissed}
                                        onSelectEncounter={
                                            handleEncounterSelect
                                        }
                                        onSelectItem={onSelectItem}
                                        onToggleMissed={handleToggleMissed}
                                        selectedSpecies={
                                            selectedEncounter?.species
                                        }
                                    />
                                    <PokedexTile
                                        defaultLevel={
                                            selectedEncounter?.minLevel ??
                                            undefined
                                        }
                                        dupes={dupes}
                                        encounter={encounter}
                                        game={game}
                                        generation={game.generation}
                                        isEggEncounter={isEggEncounter}
                                        isLocationMissed={isMissed}
                                        isStarterEncounter={isStarterEncounter}
                                        mode="catch"
                                        onAddPokemon={handleAddPokemon}
                                        onRemovePokemon={handleRemovePokemon}
                                        onSelectAbility={onSelectAbility}
                                        onSelectLocation={onSelectLocation}
                                        onSelectMove={onSelectMove}
                                        onSelectSpecies={(species: string) =>
                                            setSpeciesOverride(species)
                                        }
                                        originalSpecies={
                                            selectedEncounter?.species
                                        }
                                        species={
                                            speciesOverride ??
                                            selectedEncounter?.species
                                        }
                                        usedLocations={usedLocations}
                                        variant={variant}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SplitLocation;
