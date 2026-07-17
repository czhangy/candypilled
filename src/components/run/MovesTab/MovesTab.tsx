import SearchableList from '@/components/common/SearchableList/SearchableList';
import { MOVES } from '@/lib/data/moves';
import MoveDetail from './MoveDetail/MoveDetail';
import styles from './MovesTab.module.scss';

type MovesTabProps = {
    generation: number;
    onSelectMove: (name: string) => void;
    selectedMove?: string;
};

const MovesTab: React.FC<MovesTabProps> = ({
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
        <div className={styles['moves-tab']}>
            <SearchableList
                emptyMessage="No moves found"
                items={availableMoves}
                onSelectItem={onSelectMove}
                searchAriaLabel="Search moves"
                searchPlaceholder="Search moves..."
                selectedItem={selectedMove}
            />
            <MoveDetail generation={generation} move={selectedMove} />
        </div>
    );
};

export default MovesTab;
