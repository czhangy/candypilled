import { MOVES } from '@/lib/data/moves';
import MoveDetail from './MoveDetail/MoveDetail';
import MoveList from './MoveList/MoveList';
import styles from './MovesTab.module.scss';

interface MovesTabProps {
    generation: number;
    onSelectMove: (name: string) => void;
    selectedMove?: string;
}

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
            <MoveList
                moves={availableMoves}
                onSelectMove={onSelectMove}
                selectedMove={selectedMove}
            />
            <MoveDetail generation={generation} move={selectedMove} />
        </div>
    );
};

export default MovesTab;
