import { useSyncExternalStore } from 'react';
import SearchableList from '@/components/common/SearchableList/SearchableList';
import { Game, Run } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
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
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const availableSpecies = EncounterHelpers.getGameSpecies(
        game,
        settings['show-national-dex-data'] ?? false
    );
    const usedLocations = RunHelpers.getUsedLocations(run);
    const selectedPokemon = selectedSpecies
        ? PokemonHelpers.getPokemonData(selectedSpecies)
        : undefined;

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
                species={selectedSpecies}
                usedLocations={usedLocations}
                variant={variant}
            />
        </div>
    );
};

export default PokedexSubtab;
