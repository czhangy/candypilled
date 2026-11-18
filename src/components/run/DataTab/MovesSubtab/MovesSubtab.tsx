import SearchableList from '@/components/common/SearchableList/SearchableList';
import { Game } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import MoveDetail from './MoveDetail/MoveDetail';
import styles from './MovesSubtab.module.scss';

type MovesSubtabProps = {
    game: Game;
    onSelectMove: (slug: string) => void;
    selectedMove?: string;
};

const MovesSubtab: React.FC<MovesSubtabProps> = ({
    game,
    onSelectMove,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableMoves = Object.values(game.dataSource.moves)
        .filter((move) => move.introducedInGeneration <= game.generation)
        .sort((a, b) => a.name.localeCompare(b.name));
    const effectiveMove = selectedMove ?? availableMoves[0]?.slug ?? '';

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
                selectedItem={effectiveMove}
                sortAlphabetically
            />
            <MoveDetail
                aiRoutines={MoveHelpers.getMoveAi(game.moveAi, effectiveMove)}
                dataSource={game.dataSource}
                generation={game.generation}
                moveSlug={effectiveMove}
            />
        </div>
    );
};

export default MovesSubtab;
