import Image from 'next/image';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveCard.module.scss';

interface MoveCardProps {
    generation: number;
    move?: string;
}

const MoveCard: React.FC<MoveCardProps> = ({ generation, move }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 24;
    const BADGE_HEIGHT = 10;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const moveData = move ? MoveHelpers.get(move) : undefined;
    const values = move ? MoveHelpers.getValues(move, generation) : undefined;
    const moveColor = values ? TypeHelpers.getColor(values.type) : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['move-card']}
            style={{ '--move-color': moveColor } as React.CSSProperties}
        >
            {moveData && values ? (
                <>
                    <span className={styles.name}>{moveData.name}</span>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles['stat-label']}>CAT</span>
                            <span className={styles['stat-value']}>
                                <Image
                                    alt={moveData.category}
                                    height={BADGE_HEIGHT}
                                    src={`/move_categories/${moveData.category}.png`}
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
                            <span className={styles['stat-value']}>
                                {values.pp}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles['stat-label']}>ACC</span>
                            <span className={styles['stat-value']}>
                                {values.accuracy ?? '—'}
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                <span className={styles.placeholder}>Empty</span>
            )}
        </div>
    );
};

export default MoveCard;
