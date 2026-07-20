import { EncounterLocation } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './LocationsList.module.scss';

type LocationsListProps = {
    interactive: boolean;
    locations: EncounterLocation[];
    onSelectLocation: (location: string) => void;
    usedLocations: string[];
};

const LocationsList: React.FC<LocationsListProps> = ({
    interactive,
    locations,
    onSelectLocation,
    usedLocations,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getLevelLabel = ({ encounter }: EncounterLocation): string =>
        encounter.minLevel === encounter.maxLevel
            ? `Lv. ${encounter.minLevel}`
            : `Lv. ${encounter.minLevel}-${encounter.maxLevel}`;

    // usedLocations stores each location's base name (never subarea-
    // qualified), while a location with subareas is named here as
    // "Location (Subarea)" — so match on that base name prefix too.
    const isUsed = (name: string): boolean =>
        usedLocations.some(
            (used) => name === used || name.startsWith(`${used} (`)
        );

    // A subarea-qualified name is "Location (Subarea)" — strip the
    // subarea to get the split location's actual name for linking, since
    // every location here is assumed to have a corresponding split.
    const getBaseName = (name: string): string =>
        name.match(/^(.+) \([^)]+\)$/)?.[1] ?? name;

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
            {sortedLocations.map((location, index) => {
                const content = (
                    <>
                        <span className={styles.name}>{location.name}</span>
                        <span className={styles.level}>
                            {getLevelLabel(location)}
                        </span>
                        <span className={styles.chance}>
                            {location.encounter.chance !== null
                                ? `${location.encounter.chance}%`
                                : '—'}
                        </span>
                        <span className={styles.method}>
                            {StringHelpers.toTitleCase(
                                location.encounter.method
                            )}
                        </span>
                    </>
                );

                return (
                    <li key={`${location.name}-${index}`}>
                        {interactive ? (
                            <button
                                className={[
                                    styles.row,
                                    isUsed(location.name) &&
                                        styles['row--used'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() =>
                                    onSelectLocation(getBaseName(location.name))
                                }
                                type="button"
                            >
                                {content}
                            </button>
                        ) : (
                            <div
                                className={[
                                    styles.row,
                                    styles['row--static'],
                                    isUsed(location.name) &&
                                        styles['row--used'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {content}
                            </div>
                        )}
                    </li>
                );
            })}
            {sortedLocations.length === 0 && (
                <li className={styles.empty}>No locations found</li>
            )}
        </ul>
    );
};

export default LocationsList;
