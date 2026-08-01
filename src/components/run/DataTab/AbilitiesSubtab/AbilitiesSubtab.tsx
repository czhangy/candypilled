import SearchableList from '@/components/common/SearchableList/SearchableList';
import SpeciesListPanel from '@/components/run/DataTab/SpeciesListPanel/SpeciesListPanel';
import { ABILITIES } from '@/lib/data/abilities';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './AbilitiesSubtab.module.scss';
import AbilityDetail from './AbilityDetail/AbilityDetail';

type AbilitiesSubtabProps = {
    generation: number;
    onSelectAbility: (slug: string) => void;
    onSelectSpeciesLink: (slug: string) => void;
    selectedAbility?: string;
};

const AbilitiesSubtab: React.FC<AbilitiesSubtabProps> = ({
    generation,
    onSelectAbility,
    onSelectSpeciesLink,
    selectedAbility,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableAbilities = Object.values(ABILITIES).filter(
        (ability) => ability.introducedInGeneration <= generation
    );
    const givenTo = selectedAbility
        ? PokemonHelpers.getSpeciesWithAbility(selectedAbility, generation)
        : [];

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
            <AbilityDetail
                abilitySlug={selectedAbility}
                generation={generation}
            />
            <SpeciesListPanel
                emptyMessage="No Pokémon have this ability"
                entries={givenTo}
                onSelectSpecies={onSelectSpeciesLink}
                title="Given To"
            />
        </div>
    );
};

export default AbilitiesSubtab;
