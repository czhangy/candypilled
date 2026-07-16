import Image from 'next/image';
import { Game, Run } from '@/lib/static/types';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './SplitHeader.module.scss';

interface SplitHeaderProps {
    game: Game;
    run: Run;
}

const SplitHeader: React.FC<SplitHeaderProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const currentSplitName = BattleProgressHelpers.getCurrentSplitName(
        game,
        run.defeatedBattles
    );
    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const levelCap = currentSplit
        ? BattleProgressHelpers.getLevelCap(currentSplit, run.starter)
        : null;
    const variant = StringHelpers.toSlug(game.name);
    const badge = `/${variant}/badges/${StringHelpers.toSlug(currentSplitName ?? '')}.png`;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-header']}>
            <div className={styles.badge}>
                <Image alt="" fill src={badge} />
            </div>
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
