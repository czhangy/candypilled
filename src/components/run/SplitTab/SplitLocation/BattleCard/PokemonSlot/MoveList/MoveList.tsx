import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveList.module.scss';

type MoveListProps = {
    generation: number;
    moves: string[];
    onSelectMove: (name: string) => void;
};

const MoveList: React.FC<MoveListProps> = ({
    generation,
    moves,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MOVE_SLOT_COUNT = 4;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMoveColor = (move: string): string | undefined => {
        const type = MoveHelpers.getMoveForGeneration(move, generation)?.type;
        return type ? TypeHelpers.getTypeColor(type) : undefined;
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <>
            {Array.from(
                { length: MOVE_SLOT_COUNT },
                (_, index) => moves[index] ?? '-'
            ).map((move, index) =>
                move === '-' ? (
                    <li key={index}>{move}</li>
                ) : (
                    <li key={index}>
                        <button
                            className={[
                                styles['move-button'],
                                MoveHelpers.isDangerousMove(move) &&
                                    styles['move-button--dangerous'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => onSelectMove(move)}
                            style={
                                {
                                    '--move-color': getMoveColor(move),
                                } as React.CSSProperties
                            }
                            type="button"
                        >
                            {move}
                        </button>
                    </li>
                )
            )}
        </>
    );
};

export default MoveList;
