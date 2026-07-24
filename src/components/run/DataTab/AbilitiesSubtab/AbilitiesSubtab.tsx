import SearchableList from '@/components/common/SearchableList/SearchableList';
import { ABILITIES } from '@/lib/data/abilities';
import styles from './AbilitiesSubtab.module.scss';
import AbilityDetail from './AbilityDetail/AbilityDetail';

type AbilitiesSubtabProps = {
    generation: number;
    onSelectAbility: (name: string) => void;
    selectedAbility?: string;
};

const AbilitiesSubtab: React.FC<AbilitiesSubtabProps> = ({
    generation,
    onSelectAbility,
    selectedAbility,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableAbilities = Object.values(ABILITIES).filter(
        (ability) => ability.introducedInGeneration <= generation
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['abilities-subtab']}>
            <SearchableList
                emptyMessage="No abilities found"
                items={availableAbilities}
                onSelectItem={onSelectAbility}
                searchAriaLabel="Search abilities"
                searchPlaceholder="Search abilities..."
                selectedItem={selectedAbility}
            />
            <AbilityDetail ability={selectedAbility} generation={generation} />
        </div>
    );
};

export default AbilitiesSubtab;
