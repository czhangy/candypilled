import SearchableList from '@/components/common/SearchableList/SearchableList';
import SpeciesListPanel from '@/components/run/DataTab/SpeciesListPanel/SpeciesListPanel';
import { ABILITIES } from '@/lib/data/abilities';
import { Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './AbilitiesSubtab.module.scss';
import AbilityDetail from './AbilityDetail/AbilityDetail';

type AbilitiesSubtabProps = {
    game: Game;
    onSelectAbility: (slug: string) => void;
    onSelectSpeciesLink: (slug: string) => void;
    selectedAbility?: string;
};

const AbilitiesSubtab: React.FC<AbilitiesSubtabProps> = ({
    game,
    onSelectAbility,
    onSelectSpeciesLink,
    selectedAbility,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const gameSpecies = EncounterHelpers.getGameSpecies(game);
    const availableAbilities = Object.values(ABILITIES).filter(
        (ability) =>
            ability.introducedInGeneration <= game.generation &&
            PokemonHelpers.getSpeciesWithAbility(
                gameSpecies,
                ability.slug,
                game.generation
            ).length > 0
    );
    const givenTo = selectedAbility
        ? PokemonHelpers.getSpeciesWithAbility(
              gameSpecies,
              selectedAbility,
              game.generation
          )
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
                sortAlphabetically
            />
            <AbilityDetail
                abilitySlug={selectedAbility}
                generation={game.generation}
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
