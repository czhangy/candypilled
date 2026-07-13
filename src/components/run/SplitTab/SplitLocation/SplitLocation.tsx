'use client';

import { useState } from 'react';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Battle, Game, Location, Run } from '@/lib/static/types';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
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
    // RENDERING
    // -------------------------------------------------------------------------

    const defeatedBattles = run.defeatedBattles;
    const nextPersonalBestBattleName =
        BattleProgressHelpers.getNextRequiredBattleName(game, run.personalBest);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const isBattleDefeated = (battle: Battle): boolean =>
        defeatedBattles.includes(battle.name);

    const isBattleNextPersonalBest = (battle: Battle): boolean =>
        battle.name === nextPersonalBestBattleName;

    const getDefaultSelectedBattle = (): Battle | undefined => {
        const battles = location.battles ?? [];
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

    // TODO: remove dev default-open once map/marker work is done
    const [isOpen, setIsOpen] = useState(location.name === 'Route 203');
    const [selectedBattle, setSelectedBattle] = useState<Battle | undefined>(
        getDefaultSelectedBattle
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleHeaderClick = (): void => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
    };

    const handleBattleClick = (battle: Battle): void => {
        setSelectedBattle(battle);
    };

    const handleBattleToggleDefeated = (battle: Battle): void => {
        const wasDefeated = defeatedBattles.includes(battle.name);

        const updatedRun: Run = {
            ...run,
            defeatedBattles: wasDefeated
                ? defeatedBattles.filter((name) => name !== battle.name)
                : [...defeatedBattles, battle.name],
        };

        if (!wasDefeated && !battle.isOptional) {
            const candidatePosition = BattleProgressHelpers.getPosition(
                game,
                battle.name
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
                updatedRun.personalBest = battle.name;
            }
        }

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-location']}>
            <button
                aria-expanded={isOpen}
                className={styles.header}
                onClick={handleHeaderClick}
                type="button"
            >
                <span className={styles.name}>{location.name}</span>
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
            {isOpen && (location.map || location.encounters) && (
                <div className={styles.content}>
                    {location.map && (
                        <LocationMap
                            alt={`${location.name} map`}
                            battles={location.battles}
                            isBattleDefeated={isBattleDefeated}
                            isBattleNextPersonalBest={isBattleNextPersonalBest}
                            map={location.map}
                            onBattleClick={handleBattleClick}
                            selectedBattle={selectedBattle}
                        />
                    )}
                    {selectedBattle && (
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
                    {location.encounters && (
                        <EncounterTable
                            encounters={location.encounters}
                            variant={variant}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default SplitLocation;
