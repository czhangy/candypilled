import SearchableList from '@/components/common/SearchableList/SearchableList';
import { ABILITIES } from '@/lib/data/abilities';
import { Game } from '@/lib/static/types';
import styles from './AbilitiesSubtab.module.scss';
import AbilityDetail from './AbilityDetail/AbilityDetail';

type AbilitiesSubtabProps = {
    game: Game;
    onSelectAbility: (slug: string) => void;
    selectedAbility?: string;
};

const AbilitiesSubtab: React.FC<AbilitiesSubtabProps> = ({
    game,
    onSelectAbility,
    selectedAbility,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableAbilities = Object.values(ABILITIES)
        .filter((ability) => ability.introducedInGeneration <= game.generation)
        .sort((a, b) => a.name.localeCompare(b.name));
    const effectiveAbility =
        selectedAbility ?? availableAbilities[0]?.slug ?? '';

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
                selectedItem={effectiveAbility}
                sortAlphabetically
            />
            <AbilityDetail
                abilitySlug={effectiveAbility}
                generation={game.generation}
            />
        </div>
    );
};

export default AbilitiesSubtab;
