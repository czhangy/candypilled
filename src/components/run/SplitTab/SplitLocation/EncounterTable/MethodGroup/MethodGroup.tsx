import { Fragment } from 'react';
import Image from 'next/image';
import { Encounter } from '@/lib/static/types';
import EncounterRow from './EncounterRow/EncounterRow';
import styles from './MethodGroup.module.scss';

type MethodGroupProps = {
    encounters: Encounter[];
    getDisplayChance: (encounter: Encounter) => number | null;
    isSpeciesCaughtElsewhere: (species: string) => boolean;
    isSpeciesCaughtHere: (species: string) => boolean;
    method: string;
    onSelectEncounter: (encounter: Encounter) => void;
    selectedSpecies?: string;
    variant: string;
};

const MethodGroup: React.FC<MethodGroupProps> = ({
    encounters,
    getDisplayChance,
    isSpeciesCaughtElsewhere,
    isSpeciesCaughtHere,
    method,
    onSelectEncounter,
    selectedSpecies,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMethodLabel = (): string =>
        method
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const getMethodIcon = (): string => `/encounter_methods/${method}.png`;

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const METHOD_ICON_SIZE = 22;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Fragment>
            <tr>
                <th colSpan={3}>
                    <div className={styles.method}>
                        <Image
                            alt=""
                            height={METHOD_ICON_SIZE}
                            src={getMethodIcon()}
                            width={METHOD_ICON_SIZE}
                        />
                        {getMethodLabel()}
                    </div>
                </th>
            </tr>
            {encounters.map((encounter) => (
                <EncounterRow
                    displayChance={getDisplayChance(encounter)}
                    encounter={encounter}
                    isCaughtElsewhere={isSpeciesCaughtElsewhere(
                        encounter.species
                    )}
                    isCaughtHere={isSpeciesCaughtHere(encounter.species)}
                    isSelected={encounter.species === selectedSpecies}
                    key={`${method}-${encounter.species}-${encounter.minLevel}-${encounter.maxLevel}-${encounter.chance}`}
                    onClick={() => onSelectEncounter(encounter)}
                    variant={variant}
                />
            ))}
        </Fragment>
    );
};

export default MethodGroup;
