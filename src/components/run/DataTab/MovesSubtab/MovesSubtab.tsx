import SearchableList from '@/components/common/SearchableList/SearchableList';
import SpeciesListPanel from '@/components/run/DataTab/SpeciesListPanel/SpeciesListPanel';
import { MOVES } from '@/lib/data/moves';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import MoveDetail from './MoveDetail/MoveDetail';
import styles from './MovesSubtab.module.scss';

type MovesSubtabProps = {
    generation: number;
    onSelectMove: (slug: string) => void;
    onSelectSpeciesLink: (slug: string) => void;
    selectedMove?: string;
    version: string;
};

const MovesSubtab: React.FC<MovesSubtabProps> = ({
    generation,
    onSelectMove,
    onSelectSpeciesLink,
    selectedMove,
    version,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableMoves = Object.values(MOVES).filter(
        (move) => move.introducedInGeneration <= generation
    );
    const learnedBy = selectedMove
        ? PokemonHelpers.getSpeciesWithMove(selectedMove, version, generation)
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
            />
            <MoveDetail generation={generation} moveSlug={selectedMove} />
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
