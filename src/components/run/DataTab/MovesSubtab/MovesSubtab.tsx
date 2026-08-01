import SearchableList from '@/components/common/SearchableList/SearchableList';
import SpeciesListPanel from '@/components/run/DataTab/SpeciesListPanel/SpeciesListPanel';
import { MOVES } from '@/lib/data/moves';
import { Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import MoveDetail from './MoveDetail/MoveDetail';
import styles from './MovesSubtab.module.scss';

type MovesSubtabProps = {
    game: Game;
    onSelectMove: (slug: string) => void;
    onSelectSpeciesLink: (slug: string) => void;
    selectedMove?: string;
};

const MovesSubtab: React.FC<MovesSubtabProps> = ({
    game,
    onSelectMove,
    onSelectSpeciesLink,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const gameSpecies = EncounterHelpers.getGameSpecies(game);
    const availableMoves = Object.values(MOVES).filter(
        (move) =>
            move.introducedInGeneration <= game.generation &&
            PokemonHelpers.getSpeciesWithMove(
                gameSpecies,
                move.slug,
                game.version
            ).length > 0
    );
    const learnedBy = selectedMove
        ? PokemonHelpers.getSpeciesWithMove(
              gameSpecies,
              selectedMove,
              game.version
          )
        : [];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['moves-subtab']}>
            <SearchableList
                emptyMessage="No moves found"
                items={availableMoves}
                onSelectItem={onSelectMove}
                searchAriaLabel="Search moves"
                searchPlaceholder="Search moves..."
                selectedItem={selectedMove}
                sortAlphabetically
            />
            <MoveDetail generation={game.generation} moveSlug={selectedMove} />
            <SpeciesListPanel
                emptyMessage="No Pokémon learn this move"
                entries={learnedBy}
                onSelectSpecies={onSelectSpeciesLink}
                title="Learned By"
            />
        </div>
    );
};

export default MovesSubtab;
