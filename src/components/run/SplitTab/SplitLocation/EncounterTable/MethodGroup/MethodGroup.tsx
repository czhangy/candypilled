import { Fragment } from 'react';
import { EncounterMethod } from '@/lib/static/enums';
import { Encounter, GameDataSource } from '@/lib/static/types';
import EncounterRow from './EncounterRow/EncounterRow';
import styles from './MethodGroup.module.scss';

type MethodGroupProps = {
    dataSource: GameDataSource;
    encounters: Encounter[];
    getDisplayChance: (encounter: Encounter) => number | null;
    isSpeciesCaughtElsewhere: (species: string) => boolean;
    isSpeciesCaughtHere: (species: string) => boolean;
    method: EncounterMethod;
    onSelectEncounter: (encounter: Encounter) => void;
    onSelectItem: (slug: string) => void;
    selectedSpecies?: string;
};

const MethodGroup: React.FC<MethodGroupProps> = ({
    dataSource,
    encounters,
    getDisplayChance,
    isSpeciesCaughtElsewhere,
    isSpeciesCaughtHere,
    method,
    onSelectEncounter,
    onSelectItem,
    selectedSpecies,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The slug has no accented characters to derive from, so this one
    // method needs its label spelled out rather than title-cased.
    const getMethodLabel = (): string =>
        method === EncounterMethod.PokeRadar
            ? 'Poké Radar'
            : method
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Fragment>
            <tr>
                <th colSpan={3}>
                    <div className={styles.method}>{getMethodLabel()}</div>
                </th>
            </tr>
            {encounters.map((encounter) => (
                <EncounterRow
                    dataSource={dataSource}
                    displayChance={getDisplayChance(encounter)}
                    encounter={encounter}
                    isCaughtElsewhere={isSpeciesCaughtElsewhere(
                        encounter.species
                    )}
                    isCaughtHere={isSpeciesCaughtHere(encounter.species)}
                    isSelected={encounter.species === selectedSpecies}
                    key={`${method}-${encounter.species}-${encounter.minLevel}-${encounter.maxLevel}-${encounter.chance}`}
                    onClick={() => onSelectEncounter(encounter)}
                    onSelectItem={onSelectItem}
                />
            ))}
        </Fragment>
    );
};

export default MethodGroup;
