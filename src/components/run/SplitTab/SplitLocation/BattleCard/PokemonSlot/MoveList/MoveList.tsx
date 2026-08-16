import { MOVE_SLOT_COUNT } from '@/lib/static/constants';
import { GameDataSource, StatValues } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveList.module.scss';

type MoveListProps = {
    dataSource: GameDataSource;
    generation: number;
    highlightDangerous: boolean;
    isReadOnly: boolean;
    ivs: StatValues;
    moves: string[];
    onSelectMove?: (slug: string) => void;
};

const MoveList: React.FC<MoveListProps> = ({
    dataSource,
    generation,
    highlightDangerous,
    isReadOnly,
    ivs,
    moves,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMoveColor = (moveSlug: string): string | undefined => {
        const type = MoveHelpers.getMoveType(
            dataSource,
            moveSlug,
            generation,
            ivs
        );
        return type ? TypeHelpers.getTypeColor(type) : undefined;
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <>
            {Array.from(
                { length: MOVE_SLOT_COUNT },
                (_, index) => moves[index] ?? ''
            ).map((moveSlug, index) => {
                const moveName = moveSlug
                    ? MoveHelpers.getMoveData(dataSource, moveSlug)?.name
                    : undefined;

                return !moveSlug || !moveName ? (
                    <li key={index}>-</li>
                ) : (
                    <li key={index}>
                        {isReadOnly ? (
                            <span
                                className={[
                                    styles['move-button'],
                                    styles['move-button--readonly'],
                                    highlightDangerous &&
                                        MoveHelpers.isDangerousMove(
                                            dataSource,
                                            moveSlug
                                        ) &&
                                        styles['move-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                style={
                                    {
                                        '--move-color': getMoveColor(moveSlug),
                                    } as React.CSSProperties
                                }
                            >
                                {moveName}
                            </span>
                        ) : (
                            <button
                                className={[
                                    styles['move-button'],
                                    highlightDangerous &&
                                        MoveHelpers.isDangerousMove(
                                            dataSource,
                                            moveSlug
                                        ) &&
                                        styles['move-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() => onSelectMove?.(moveSlug)}
                                style={
                                    {
                                        '--move-color': getMoveColor(moveSlug),
                                    } as React.CSSProperties
                                }
                                type="button"
                            >
                                {moveName}
                            </button>
                        )}
                    </li>
                );
            })}
        </>
    );
};

export default MoveList;
