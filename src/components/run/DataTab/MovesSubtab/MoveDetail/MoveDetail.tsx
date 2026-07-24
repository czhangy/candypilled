import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './MoveDetail.module.scss';

type MoveDetailProps = {
    generation: number;
    move?: string;
};

const MoveDetail: React.FC<MoveDetailProps> = ({ generation, move }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 40;
    const BADGE_HEIGHT = 18;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const moveData = move ? MoveHelpers.getMoveData(move) : undefined;
    const values = move
        ? MoveHelpers.getMoveForGeneration(move, generation)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['move-detail']}>
            <div className={styles.header}>Details</div>
            <div
                className={[
                    styles.content,
                    !(moveData && values) && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {moveData && values ? (
                    <>
                        <div className={styles.top}>
                            <span className={styles.name}>{moveData.name}</span>
                            {values.description && (
                                <p className={styles.description}>
                                    {values.description}
                                </p>
                            )}
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles['stat-label']}>
                                    Type
                                </span>
                                <TypeBadge
                                    height={BADGE_HEIGHT}
                                    type={values.type}
                                    width={BADGE_WIDTH}
                                />
                            </div>
                            <div className={styles.stat}>
                                <span className={styles['stat-label']}>
                                    Category
                                </span>
                                <CategoryBadge
                                    category={moveData.category}
                                    height={BADGE_HEIGHT}
                                    width={BADGE_WIDTH}
                                />
                            </div>
                            <div className={styles.stat}>
                                <span className={styles['stat-label']}>
                                    Power
                                </span>
                                <span className={styles['stat-value']}>
                                    {values.power ?? '—'}
                                </span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles['stat-label']}>
                                    Accuracy
                                </span>
                                <span className={styles['stat-value']}>
                                    {values.accuracy !== null
                                        ? `${values.accuracy}%`
                                        : '—'}
                                </span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles['stat-label']}>PP</span>
                                <span className={styles['stat-value']}>
                                    {values.pp}
                                </span>
                            </div>
                            {moveData.priority !== 0 && (
                                <div className={styles.stat}>
                                    <span className={styles['stat-label']}>
                                        Priority
                                    </span>
                                    <span className={styles['stat-value']}>
                                        {moveData.priority > 0
                                            ? `+${moveData.priority}`
                                            : moveData.priority}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className={styles.effect}>
                            <span className={styles['effect-label']}>
                                Effect
                            </span>
                            <p className={styles['effect-text']}>
                                {values.effect}
                                {values.effectChance !== null &&
                                    ` (${values.effectChance}% chance)`}
                            </p>
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a move to view its details
                    </span>
                )}
            </div>
        </div>
    );
};

export default MoveDetail;
