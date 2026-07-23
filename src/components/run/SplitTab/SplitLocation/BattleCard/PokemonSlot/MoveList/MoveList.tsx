import { StatValues } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveList.module.scss';

type MoveListProps = {
    generation: number;
    highlightDangerous: boolean;
    isReadOnly: boolean;
    ivs: StatValues;
    moves: string[];
    onSelectMove: (name: string) => void;
};

const MoveList: React.FC<MoveListProps> = ({
    generation,
    highlightDangerous,
    isReadOnly,
    ivs,
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
        const type = MoveHelpers.getMoveType(move, generation, ivs);
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
                        {isReadOnly ? (
                            <span
                                className={[
                                    styles['move-button'],
                                    styles['move-button--readonly'],
                                    highlightDangerous &&
                                        MoveHelpers.isDangerousMove(move) &&
                                        styles['move-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                style={
                                    {
                                        '--move-color': getMoveColor(move),
                                    } as React.CSSProperties
                                }
                            >
                                {move}
                            </span>
                        ) : (
                            <button
                                className={[
                                    styles['move-button'],
                                    highlightDangerous &&
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
                        )}
                    </li>
                )
            )}
        </>
    );
};

export default MoveList;
