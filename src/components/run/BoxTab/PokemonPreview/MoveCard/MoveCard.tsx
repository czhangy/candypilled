import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveCard.module.scss';

type MoveCardProps = {
    generation: number;
    move?: string;
    onSelectMove: (name: string) => void;
};

const MoveCard: React.FC<MoveCardProps> = ({
    generation,
    move,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 24;
    const BADGE_HEIGHT = 10;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        if (moveData) onSelectMove(moveData.name);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const moveData = move ? MoveHelpers.getMoveData(move) : undefined;
    const values = move
        ? MoveHelpers.getMoveForGeneration(move, generation)
        : undefined;
    const moveColor = values
        ? TypeHelpers.getTypeColor(values.type)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!moveData || !values) {
        return (
            <div className={styles['move-card']}>
                <span className={styles.placeholder}>Empty</span>
            </div>
        );
    }

    return (
        <button
            className={styles['move-card']}
            onClick={handleClick}
            style={{ '--move-color': moveColor } as React.CSSProperties}
            type="button"
        >
            <span className={styles.name}>{moveData.name}</span>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles['stat-label']}>CAT</span>
                    <span className={styles['stat-value']}>
                        <CategoryBadge
                            category={moveData.category}
                            height={BADGE_HEIGHT}
                            width={BADGE_WIDTH}
                        />
                    </span>
                </div>
                <div className={styles.stat}>
                    <span className={styles['stat-label']}>BP</span>
                    <span className={styles['stat-value']}>
                        {values.power ?? '—'}
                    </span>
                </div>
                <div className={styles.stat}>
                    <span className={styles['stat-label']}>PP</span>
                    <span className={styles['stat-value']}>{values.pp}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles['stat-label']}>ACC</span>
                    <span className={styles['stat-value']}>
                        {values.accuracy ?? '—'}
                    </span>
                </div>
            </div>
        </button>
    );
};

export default MoveCard;
