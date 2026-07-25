import SearchableList from '@/components/common/SearchableList/SearchableList';
import { MOVES } from '@/lib/data/moves';
import MoveDetail from './MoveDetail/MoveDetail';
import styles from './MovesSubtab.module.scss';

type MovesSubtabProps = {
    generation: number;
    onSelectMove: (slug: string) => void;
    selectedMove?: string;
};

const MovesSubtab: React.FC<MovesSubtabProps> = ({
    generation,
    onSelectMove,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableMoves = Object.values(MOVES).filter(
        (move) => move.introducedInGeneration <= generation
    );

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
        </div>
    );
};

export default MovesSubtab;
