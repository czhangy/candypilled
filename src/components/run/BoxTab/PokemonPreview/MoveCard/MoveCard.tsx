import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import { StatValues } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveCard.module.scss';

type MoveCardProps = {
    generation: number;
    ivs: StatValues;
    moveSlug?: string;
    onSelectMove: (slug: string) => void;
};

const MoveCard: React.FC<MoveCardProps> = ({
    generation,
    ivs,
    moveSlug,
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
        if (moveSlug) onSelectMove(moveSlug);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const moveData = moveSlug ? MoveHelpers.getMoveData(moveSlug) : undefined;
    const values = moveSlug
        ? MoveHelpers.getMoveForGeneration(moveSlug, generation)
        : undefined;
    const moveType = moveSlug
        ? MoveHelpers.getMoveType(moveSlug, generation, ivs)
        : undefined;
    const moveColor = moveType ? TypeHelpers.getTypeColor(moveType) : undefined;

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
