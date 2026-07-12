'use client';

import { useState } from 'react';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Location, Trainer } from '@/lib/static/types';
import BattleCard from './BattleCard/BattleCard';
import LocationMap from './LocationMap/LocationMap';
import styles from './SplitLocation.module.scss';

interface SplitLocationProps {
    location: Location;
}

const SplitLocation: React.FC<SplitLocationProps> = ({ location }) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    // TODO: remove dev default-open once map/marker work is done
    const [isOpen, setIsOpen] = useState(location.name === 'Route 202');
    const [selectedTrainer, setSelectedTrainer] = useState<Trainer>();

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleHeaderClick = (): void => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
    };

    const handleTrainerClick = (trainer: Trainer): void => {
        setSelectedTrainer((previousTrainer) =>
            previousTrainer === trainer ? undefined : trainer
        );
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
                        map={location.map}
                        onTrainerClick={handleTrainerClick}
                        selectedTrainer={selectedTrainer}
                        trainers={location.trainers}
                    />
                    {selectedTrainer && (
                        <BattleCard trainer={selectedTrainer} />
                    )}
                </div>
            )}
        </div>
    );
};

export default SplitLocation;
