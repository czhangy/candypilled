'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Battle, Encounter, Game, Location, Run } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import LocationHelpers from '@/lib/utils/LocationHelpers';
import BattleCard from './BattleCard/BattleCard';
import EncounterTable from './EncounterTable/EncounterTable';
import LocationMap from './LocationMap/LocationMap';
import styles from './SplitLocation.module.scss';

interface SplitLocationProps {
    game: Game;
    location: Location;
    run: Run;
    variant: string;
}

const SplitLocation: React.FC<SplitLocationProps> = ({
    game,
    location,
    run,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    interface Section {
        map?: StaticImageData;
        battles: Battle[];
        encounters?: Encounter[];
    }

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const defeatedBattles = run.defeatedBattles;
    const nextPersonalBestBattleKey =
        BattleProgressHelpers.getNextRequiredBattleKey(game, run.personalBest);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const isBattleDefeated = (battle: Battle): boolean =>
        defeatedBattles.includes(BattleHelpers.getKey(battle));

    const isBattleNextPersonalBest = (battle: Battle): boolean =>
        BattleHelpers.getKey(battle) === nextPersonalBestBattleKey;

    const getDefaultBattleFrom = (battles: Battle[]): Battle | undefined => {
        const requiredBattles = battles.filter((battle) => !battle.isOptional);
        const candidates =
            requiredBattles.length > 0 ? requiredBattles : battles;

        return (
            candidates.find((battle) => !isBattleDefeated(battle)) ??
            candidates[candidates.length - 1]
        );
    };

    const getDefaultSelectedBattle = (): Battle | undefined =>
        getDefaultBattleFrom(LocationHelpers.getBattles(location));

    const getDefaultSubareaIndex = (): number => {
        if (!location.subareas) return 0;

        const defaultBattle = getDefaultSelectedBattle();
        const index = location.subareas.findIndex((subarea) =>
            defaultBattle
                ? (subarea.battles ?? []).includes(defaultBattle)
                : false
        );

        return index === -1 ? 0 : index;
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [selectedBattle, setSelectedBattle] = useState<Battle | undefined>(
        getDefaultSelectedBattle
    );
    const [selectedSubareaIndex, setSelectedSubareaIndex] = useState<number>(
        getDefaultSubareaIndex
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleHeaderClick = (): void => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
    };

    const handleSubareaClick = (index: number): void => {
        const subarea = location.subareas?.[index];
        setSelectedSubareaIndex(index);
        setSelectedBattle(
            getDefaultBattleFrom(
                subarea?.hideBattles ? [] : (subarea?.battles ?? [])
            )
        );
    };

    const handleBattleClick = (battle: Battle): void => {
        setSelectedBattle(battle);
    };

    const handleBattleToggleDefeated = (battle: Battle): void => {
        const battleKey = BattleHelpers.getKey(battle);
        const wasDefeated = defeatedBattles.includes(battleKey);

        const updatedRun: Run = {
            ...run,
            defeatedBattles: wasDefeated
                ? defeatedBattles.filter((key) => key !== battleKey)
                : [...defeatedBattles, battleKey],
        };

        if (!wasDefeated && !battle.isOptional) {
            const candidatePosition = BattleProgressHelpers.getPosition(
                game,
                battleKey
            );
            const personalBestPosition = BattleProgressHelpers.getPosition(
                game,
                run.personalBest
            );

            if (
                candidatePosition &&
                (!personalBestPosition ||
                    BattleProgressHelpers.isFarther(
                        candidatePosition,
                        personalBestPosition
                    ))
            ) {
                updatedRun.personalBest = battleKey;
            }
        }

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeSubarea = location.subareas?.[selectedSubareaIndex];
    const section: Section = activeSubarea
        ? {
              map: activeSubarea.map,
              battles: activeSubarea.hideBattles
                  ? []
                  : (activeSubarea.battles ?? []),
              encounters: activeSubarea.encountersKey
                  ? EncounterHelpers.get(game.name, activeSubarea.encountersKey)
                  : undefined,
          }
        : {
              map: location.map,
              battles: location.battles ?? [],
              encounters: location.encountersKey
                  ? EncounterHelpers.get(game.name, location.encountersKey)
                  : undefined,
          };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-location']}>
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
            {isOpen && (section.map || section.encounters) && (
                <div className={styles.content}>
                    {section.map && (
                        <LocationMap
                            alt={`${location.name} map`}
                            battles={section.battles}
                            isBattleDefeated={isBattleDefeated}
                            isBattleNextPersonalBest={isBattleNextPersonalBest}
                            map={section.map}
                            onBattleClick={handleBattleClick}
                            selectedBattle={selectedBattle}
                        />
                    )}
                    {selectedBattle &&
                        section.battles.includes(selectedBattle) && (
                            <BattleCard
                                battle={selectedBattle}
                                isDefeated={isBattleDefeated(selectedBattle)}
                                onToggleDefeated={() =>
                                    handleBattleToggleDefeated(selectedBattle)
                                }
                                starter={run.starter}
                                variant={variant}
                            />
                        )}
                    {section.encounters && (
                        <EncounterTable
                            encounters={section.encounters}
                            generation={game.generation}
                            variant={variant}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default SplitLocation;
