import SearchableList from '@/components/common/SearchableList/SearchableList';
import { Game, Run } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import PokedexDetail from './PokedexDetail/PokedexDetail';
import styles from './PokedexTab.module.scss';

type PokedexTabProps = {
    game: Game;
    onSelectAbility: (name: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    run: Run;
    selectedSpecies?: string;
};

const PokedexTab: React.FC<PokedexTabProps> = ({
    game,
    onSelectAbility,
    onSelectLocation,
    onSelectMove,
    onSelectSpecies,
    run,
    selectedSpecies,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const availableSpecies = PokemonHelpers.getAllSpecies(game.generation).map(
        (name) => ({ name })
    );
    const usedLocations = RunHelpers.getUsedLocations(run);
    const selectedPokemon = selectedSpecies
        ? PokemonHelpers.getPokemonData(selectedSpecies)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-tab']}>
            <SearchableList
                emptyMessage="No Pokémon found"
                items={availableSpecies}
                onSelectItem={onSelectSpecies}
                searchAriaLabel="Search Pokémon"
                searchPlaceholder="Search Pokémon..."
                selectedItem={selectedPokemon?.name}
            />
            <PokedexDetail
                game={game}
                onSelectAbility={onSelectAbility}
                onSelectLocation={onSelectLocation}
                onSelectMove={onSelectMove}
                onSelectSpecies={onSelectSpecies}
                species={selectedSpecies}
                usedLocations={usedLocations}
                variant={variant}
            />
        </div>
    );
};

export default PokedexTab;
