import { EncounterLocation } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './LocationsList.module.scss';

interface LocationsListProps {
    locations: EncounterLocation[];
    usedLocations: string[];
}

const LocationsList: React.FC<LocationsListProps> = ({
    locations,
    usedLocations,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getLevelLabel = ({ encounter }: EncounterLocation): string =>
        encounter.minLevel === encounter.maxLevel
            ? `Lv. ${encounter.minLevel}`
            : `Lv. ${encounter.minLevel}-${encounter.maxLevel}`;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const sortedLocations = [...locations].sort(
        (a, b) => a.encounter.minLevel - b.encounter.minLevel
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <ul className={styles['locations-list']}>
            {sortedLocations.map((location, index) => (
                <li
                    className={[
                        styles.row,
                        usedLocations.includes(location.name) &&
                            styles['row--used'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    key={`${location.name}-${index}`}
                >
                    <span className={styles.chance}>
                        {location.encounter.chance !== null
                            ? `${location.encounter.chance}%`
                            : '—'}
                    </span>
                    <span className={styles.name}>{location.name}</span>
                    <span className={styles.level}>
                        {getLevelLabel(location)}
                    </span>
                    <span className={styles.method}>
                        {StringHelpers.toTitleCase(location.encounter.method)}
                    </span>
                </li>
            ))}
            {sortedLocations.length === 0 && (
                <li className={styles.empty}>No locations found</li>
            )}
        </ul>
    );
};

export default LocationsList;
