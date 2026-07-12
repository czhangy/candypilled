'use client';

import { useState } from 'react';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Location } from '@/lib/static/types';
import LocationMap from './LocationMap/LocationMap';
import styles from './SplitLocation.module.scss';

interface SplitLocationProps {
    location: Location;
}

const SplitLocation: React.FC<SplitLocationProps> = ({ location }) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleHeaderClick = (): void => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
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
            {isOpen && (
                <div className={styles.content}>
                    {location.map ? (
                        <LocationMap
                            alt={`${location.name} map`}
                            height={location.map.height}
                            src={location.map.src}
                            trainers={location.trainers}
                            width={location.map.width}
                        />
                    ) : (
                        <p className={styles.placeholder}>
                            Map and encounter table coming soon.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SplitLocation;
