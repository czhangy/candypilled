import ChevronIcon from '@/lib/icons/ChevronIcon';
import styles from './ReorderButtons.module.scss';

type ReorderButtonsProps = {
    canMoveDown: boolean;
    canMoveUp: boolean;
    onMoveDown: () => void;
    onMoveUp: () => void;
};

const ReorderButtons: React.FC<ReorderButtonsProps> = ({
    canMoveDown,
    canMoveUp,
    onMoveDown,
    onMoveUp,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['reorder-buttons']}>
            <button
                aria-label="Move up"
                className={[styles.button, styles['button--up']].join(' ')}
                disabled={!canMoveUp}
                onClick={onMoveUp}
                type="button"
            >
                <ChevronIcon />
            </button>
            <button
                aria-label="Move down"
                className={styles.button}
                disabled={!canMoveDown}
                onClick={onMoveDown}
                type="button"
            >
                <ChevronIcon />
            </button>
        </div>
    );
};

export default ReorderButtons;
