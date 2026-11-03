import SearchableList from '@/components/common/SearchableList/SearchableList';
import { Game, Run } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import PokedexDetail from './PokedexDetail/PokedexDetail';
import styles from './PokedexSubtab.module.scss';

type PokedexSubtabProps = {
    game: Game;
    onSelectAbility: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    run: Run;
    selectedSpecies?: string;
};

const PokedexSubtab: React.FC<PokedexSubtabProps> = ({
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

    const variant = game.pokemonAssetFolder ?? game.version;
    const availableSpecies = PokemonHelpers.getAllSpecies(
        game.dataSource,
        game.generation
    ).sort((a, b) => a.dexNumber - b.dexNumber);
    const usedLocations = RunHelpers.getUsedLocations(run);
    const effectiveSpecies = selectedSpecies ?? availableSpecies[0]?.slug ?? '';
    const selectedPokemon = PokemonHelpers.getPokemonData(
        game.dataSource,
        effectiveSpecies
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-subtab']}>
            <SearchableList
                emptyMessage="No Pokémon found"
                items={availableSpecies}
                onSelectItem={onSelectSpecies}
                searchAriaLabel="Search Pokémon"
                searchPlaceholder="Search Pokémon..."
                selectedItem={selectedPokemon?.slug}
                sortAlphabetically={false}
            />
            <PokedexDetail
                game={game}
                onSelectAbility={onSelectAbility}
                onSelectLocation={onSelectLocation}
                onSelectMove={onSelectMove}
                onSelectSpecies={onSelectSpecies}
                species={effectiveSpecies}
                usedLocations={usedLocations}
                variant={variant}
            />
        </div>
    );
};

export default PokedexSubtab;
