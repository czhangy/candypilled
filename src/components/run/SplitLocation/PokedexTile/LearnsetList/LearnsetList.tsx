import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { GameDataSource, LearnsetMove } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './LearnsetList.module.scss';

type LearnsetListProps = {
    dataSource: GameDataSource;
    generation: number;
    highlightedMoves: string[];
    interactive: boolean;
    levelOffsets: Record<string, number>;
    moves: LearnsetMove[];
    onSelectMove: (slug: string) => void;
    scrollable: boolean;
};

const LearnsetList: React.FC<LearnsetListProps> = ({
    dataSource,
    generation,
    highlightedMoves,
    interactive,
    levelOffsets,
    moves,
    onSelectMove,
    scrollable,
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
    // RENDERING
    // -------------------------------------------------------------------------

    const hasOffsets = Object.keys(levelOffsets).length > 0;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <ul
            className={[
                styles['learnset-list'],
                scrollable && styles['learnset-list--scrollable'],
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {moves.map((move) => {
                const moveData = MoveHelpers.getMoveData(dataSource, move.slug);
                const values = MoveHelpers.getMoveForGeneration(
                    dataSource,
                    move.slug,
                    generation
                );
                const category = MoveHelpers.getMoveCategory(
                    dataSource,
                    move.slug,
                    generation
                );
                const name = moveData?.name ?? move.slug;
                const isHighlighted =
                    move.method === 'level-up' &&
                    highlightedMoves.includes(move.slug);
                const isDangerous =
                    isHighlighted &&
                    MoveHelpers.isDangerousEncounterMove(move.slug);
                const levelOffset = levelOffsets[`${move.slug}-${move.level}`];
                const rowClassName = [
                    styles.row,
                    !interactive && styles['row--static'],
                    isHighlighted && styles['row--highlighted'],
                    isDangerous && styles['row--dangerous'],
                ]
                    .filter(Boolean)
                    .join(' ');

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
                        {hasOffsets && (
                            <span className={styles.offset}>
                                {levelOffset !== undefined &&
                                    `(${levelOffset > 0 ? '+' : ''}${levelOffset})`}
                            </span>
                        )}
                        <span className={styles.name}>{name}</span>
                        {moveData && values && category && (
                            <div className={styles.details}>
                                <TypeBadge
                                    height={BADGE_HEIGHT}
                                    type={values.type}
                                    width={BADGE_WIDTH}
                                />
                                <CategoryBadge
                                    category={category}
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
                                className={rowClassName}
                                onClick={() => handleMoveClick(move.slug)}
                                type="button"
                            >
                                {content}
                            </button>
                        ) : (
                            <div className={rowClassName}>{content}</div>
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
