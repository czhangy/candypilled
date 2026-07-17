import { Game } from '@/lib/static/types';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import styles from './SplitHeader.module.scss';

type SplitHeaderProps = {
    currentSplitName: string | null;
    game: Game;
};

const SplitHeader: React.FC<SplitHeaderProps> = ({
    currentSplitName,
    game,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const levelCap = currentSplit
        ? SplitHelpers.getLevelCap(currentSplit)
        : null;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-header']}>
            <div className={styles['title-group']}>
                <h2 className={styles.title}>{currentSplitName} Split</h2>
                {levelCap !== null && (
                    <span className={styles['level-cap']}>
                        Level Cap: {levelCap}
                    </span>
                )}
            </div>
        </div>
    );
};

export default SplitHeader;
