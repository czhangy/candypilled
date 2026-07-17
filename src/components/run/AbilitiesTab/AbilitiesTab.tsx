import SearchableList from '@/components/common/SearchableList/SearchableList';
import { ABILITIES } from '@/lib/data/abilities';
import styles from './AbilitiesTab.module.scss';
import AbilityDetail from './AbilityDetail/AbilityDetail';

type AbilitiesTabProps = {
    generation: number;
    onSelectAbility: (name: string) => void;
    selectedAbility?: string;
};

const AbilitiesTab: React.FC<AbilitiesTabProps> = ({
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
        <div className={styles['abilities-tab']}>
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

export default AbilitiesTab;
