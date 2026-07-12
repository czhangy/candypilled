'use client';

import { useState } from 'react';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Battle, Game, Location, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import BattleCard from './BattleCard/BattleCard';
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

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getBattleId = (battle: Battle): string =>
        `${location.name}:${battle.name}`;

    const isBattleDefeated = (battle: Battle): boolean =>
        defeatedBattles.includes(getBattleId(battle));

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
    const [isOpen, setIsOpen] = useState(location.name === 'Route 202');
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
        const battleId = getBattleId(battle);

        LocalStorageHelpers.saveRun(game, {
            ...run,
            defeatedBattles: defeatedBattles.includes(battleId)
                ? defeatedBattles.filter((id) => id !== battleId)
                : [...defeatedBattles, battleId],
        });
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
            {isOpen && location.map && (
                <div className={styles.content}>
                    <LocationMap
                        alt={`${location.name} map`}
                        battles={location.battles}
                        isBattleDefeated={isBattleDefeated}
                        map={location.map}
                        onBattleClick={handleBattleClick}
                        selectedBattle={selectedBattle}
                    />
                    {selectedBattle && (
                        <BattleCard
                            battle={selectedBattle}
                            isDefeated={isBattleDefeated(selectedBattle)}
                            onToggleDefeated={() =>
                                handleBattleToggleDefeated(selectedBattle)
                            }
                            variant={variant}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default SplitLocation;
