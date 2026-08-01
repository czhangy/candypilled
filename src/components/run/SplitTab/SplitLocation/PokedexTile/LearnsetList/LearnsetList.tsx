import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { LearnsetMove } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './LearnsetList.module.scss';

type LearnsetListProps = {
    generation: number;
    interactive: boolean;
    moves: LearnsetMove[];
    onSelectMove: (slug: string) => void;
};

const LearnsetList: React.FC<LearnsetListProps> = ({
    generation,
    interactive,
    moves,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 32;
    const BADGE_HEIGHT = 14;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleMoveClick = (slug: string): void => {
        onSelectMove(slug);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <ul className={styles['learnset-list']}>
            {moves.map((move) => {
                const moveData = MoveHelpers.getMoveData(move.slug);
                const values = MoveHelpers.getMoveForGeneration(
                    move.slug,
                    generation
                );
                const name = moveData?.name ?? move.slug;

                const content = (
                    <>
                        <span
                            className={[
                                styles.method,
                                styles[`method--${move.method}`],
                            ].join(' ')}
                        >
                            {MoveHelpers.getLearnsetMethodLabel(move)}
                        </span>
                        <span className={styles.name}>{name}</span>
                        {moveData && values && (
                            <div className={styles.details}>
                                <TypeBadge
                                    height={BADGE_HEIGHT}
                                    type={values.type}
                                    width={BADGE_WIDTH}
                                />
                                <CategoryBadge
                                    category={moveData.category}
                                    height={BADGE_HEIGHT}
                                    width={BADGE_WIDTH}
                                />
                                <span className={styles.power}>
                                    {values.power !== null
                                        ? `${values.power}BP`
                                        : '—'}
                                </span>
                            </div>
                        )}
                    </>
                );

                return (
                    <li key={`${move.method}-${move.slug}-${move.level ?? ''}`}>
                        {interactive ? (
                            <button
                                className={styles.row}
                                onClick={() => handleMoveClick(move.slug)}
                                type="button"
                            >
                                {content}
                            </button>
                        ) : (
                            <div
                                className={[styles.row, styles['row--static']]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {content}
                            </div>
                        )}
                    </li>
                );
            })}
            {moves.length === 0 && (
                <li className={styles.empty}>No moves found</li>
            )}
        </ul>
    );
};

export default LearnsetList;
