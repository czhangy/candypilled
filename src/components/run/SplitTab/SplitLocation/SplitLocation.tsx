'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { STARTER_LOCATION_NAME } from '@/lib/static/constants';
import { PokemonStatus } from '@/lib/static/enums';
import {
    Battle,
    CaughtPokemon,
    Encounter,
    Game,
    Location,
    Run,
} from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import BattleCard from './BattleCard/BattleCard';
import EncounterTable from './EncounterTable/EncounterTable';
import LocationMap from './LocationMap/LocationMap';
import PokedexTile from './PokedexTile/PokedexTile';
import styles from './SplitLocation.module.scss';

type SplitLocationProps = {
    game: Game;
    location: Location;
    onSelectAbility: (name: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    run: Run;
    variant: string;
};

const SplitLocation: React.FC<SplitLocationProps> = ({
    game,
    location,
    onSelectAbility,
    onSelectLocation,
    onSelectMove,
    run,
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
    // RENDERING
    // -------------------------------------------------------------------------

    const defeatedBattles = run.defeatedBattles;
    const nextPersonalBestBattleKey = BattleHelpers.getNextRequiredBattleKey(
        game,
        run.personalBest
    );

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const isBattleDefeated = (battle: Battle): boolean =>
        defeatedBattles.includes(BattleHelpers.getBattleKey(battle));

    const isBattleNextPB = (battle: Battle): boolean =>
        BattleHelpers.getBattleKey(battle) === nextPersonalBestBattleKey;

    const getDefaultSelectedBattle = (
        subareaIndex: number
    ): Battle | undefined => {
        const subarea = location.subareas?.[subareaIndex];
        const battles = location.subareas
            ? subarea?.hideBattles
                ? []
                : (subarea?.battles ?? [])
            : (location.battles ?? []);

        const requiredBattles = battles.filter((battle) => !battle.isOptional);
        const candidates =
            requiredBattles.length > 0 ? requiredBattles : battles;

        return (
            candidates.find((battle) => !isBattleDefeated(battle)) ??
            candidates[candidates.length - 1]
        );
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(true);
    const [selectedSubareaIndex, setSelectedSubareaIndex] = useState<number>(0);
    const [selectedBattle, setSelectedBattle] = useState<Battle | undefined>(
        () => getDefaultSelectedBattle(selectedSubareaIndex)
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
        const battleKey = BattleHelpers.getBattleKey(battle);
        const wasDefeated = defeatedBattles.includes(battleKey);

        const updatedRun: Run = {
            ...run,
            defeatedBattles: wasDefeated
                ? defeatedBattles.filter((key) => key !== battleKey)
                : [...defeatedBattles, battleKey],
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
    };

    const handleAddPokemon = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >
    ): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: [
                ...run.caughtPokemon,
                {
                    ...details,
                    heldItem: '',
                    location: location.name,
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

    const dupes = run.caughtPokemon.map((caught) => caught.name);
    const starterCaughtSeparately = run.caughtPokemon.some(
        (caught) => caught.location === STARTER_LOCATION_NAME
    );
    const isMissed = run.missedLocations.includes(location.name);
    const usedLocations = [
        ...run.caughtPokemon.map((caught) => caught.location),
        ...run.missedLocations,
    ];
    const encounter = run.caughtPokemon.find(
        (caught) => caught.location === location.name
    )?.name;
    const activeSubarea = location.subareas?.[selectedSubareaIndex];
    const section: Section = activeSubarea
        ? {
              map: activeSubarea.map,
              battles: activeSubarea.hideBattles
                  ? []
                  : (activeSubarea.battles ?? []),
              encounters: activeSubarea.encountersKey
                  ? game.encounters[activeSubarea.encountersKey]?.encounters
                  : undefined,
          }
        : {
              map: location.map,
              battles: location.battles ?? [],
              encounters: location.encountersKey
                  ? game.encounters[location.encountersKey]?.encounters
                  : undefined,
          };
    const isStarterCatch =
        !!encounter &&
        !!section.encounters?.some(
            (locationEncounter) =>
                locationEncounter.method === 'starter' &&
                EvolutionHelpers.isSameEvolutionLine(
                    locationEncounter.species,
                    encounter,
                    game.generation
                )
        );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['split-location']}
            id={StringHelpers.toSlug(location.name)}
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
            {(section.map || section.encounters) && (
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
                                    isBattleDefeated={isBattleDefeated}
                                    isBattleNextPB={isBattleNextPB}
                                    map={section.map}
                                    onBattleClick={(battle: Battle) =>
                                        setSelectedBattle(battle)
                                    }
                                    selectedBattle={selectedBattle}
                                />
                            )}
                            {selectedBattle &&
                                section.battles.includes(selectedBattle) && (
                                    <BattleCard
                                        battle={selectedBattle}
                                        generation={game.generation}
                                        isDefeated={isBattleDefeated(
                                            selectedBattle
                                        )}
                                        onSelectAbility={onSelectAbility}
                                        onSelectMove={onSelectMove}
                                        onToggleDefeated={() =>
                                            handleBattleToggleDefeated(
                                                selectedBattle
                                            )
                                        }
                                        starter={run.starter}
                                        variant={variant}
                                    />
                                )}
                            {section.encounters && (
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
                                        onToggleMissed={handleToggleMissed}
                                        selectedSpecies={
                                            selectedEncounter?.species
                                        }
                                        starterCaughtSeparately={
                                            starterCaughtSeparately
                                        }
                                        variant={variant}
                                    />
                                    <PokedexTile
                                        defaultLevel={
                                            selectedEncounter?.minLevel
                                        }
                                        dupes={dupes}
                                        encounter={encounter}
                                        game={game}
                                        generation={game.generation}
                                        isLocationMissed={isMissed}
                                        isStarterCatch={isStarterCatch}
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
