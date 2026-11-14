import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import SectionToggle from '@/components/run/SplitLocation/SectionToggle/SectionToggle';
import { BadgeAssetFolder, EncounterMethod } from '@/lib/static/enums';
import { Encounter, GameDataSource } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import EncounterRow from './EncounterRow/EncounterRow';
import styles from './MethodGroup.module.scss';

type MethodGroupProps = {
    badgeAssetFolder: BadgeAssetFolder;
    dataSource: GameDataSource;
    encounters: Encounter[];
    isSpeciesCaughtElsewhere: (species: string) => boolean;
    isSpeciesCaughtHere: (species: string) => boolean;
    method: EncounterMethod;
    onSelectEncounter: (encounter: Encounter) => void;
    selectedSpecies?: string;
    // The split (Split.name) this method group first becomes available
    // in — absent when no MethodSplit entry matches this method, in which
    // case no badge is shown.
    splitName?: string;
};

const MethodGroup: React.FC<MethodGroupProps> = ({
    badgeAssetFolder,
    dataSource,
    encounters,
    isSpeciesCaughtElsewhere,
    isSpeciesCaughtHere,
    method,
    onSelectEncounter,
    selectedSpecies,
    splitName,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isCollapsed, setIsCollapsed] = useState(false);

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
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggleClick = (): void => {
        setIsCollapsed((collapsed) => !collapsed);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Fragment>
            <tr>
                <th colSpan={3}>
                    <SectionToggle
                        isCollapsed={isCollapsed}
                        onToggle={handleToggleClick}
                    >
                        {splitName && (
                            <Tooltip
                                className={styles.badge}
                                position="left"
                                text={`${splitName} Split`}
                            >
                                <Image
                                    alt=""
                                    fill
                                    sizes="1rem"
                                    src={`/badges/${badgeAssetFolder}/${StringHelpers.toSlug(splitName)}.png`}
                                />
                            </Tooltip>
                        )}
                        {getMethodLabel()}
                    </SectionToggle>
                </th>
            </tr>
            {!isCollapsed &&
                encounters.map((encounter) => (
                    <EncounterRow
                        dataSource={dataSource}
                        encounter={encounter}
                        isCaughtElsewhere={isSpeciesCaughtElsewhere(
                            encounter.species
                        )}
                        isCaughtHere={isSpeciesCaughtHere(encounter.species)}
                        isSelected={encounter.species === selectedSpecies}
                        key={`${method}-${encounter.species}-${encounter.minLevel}-${encounter.maxLevel}-${encounter.chance}`}
                        onClick={() => onSelectEncounter(encounter)}
                    />
                ))}
        </Fragment>
    );
};

export default MethodGroup;
