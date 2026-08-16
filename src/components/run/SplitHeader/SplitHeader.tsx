import { Game } from '@/lib/static/types';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import styles from './SplitHeader.module.scss';
import SplitSelect from './SplitSelect/SplitSelect';

type SplitHeaderProps = {
    completedSplits: string[];
    currentSplitName: string | null;
    game: Game;
    gender: 'male' | 'female' | undefined;
    onSelectSplit: (name: string) => void;
    runSplitName: string | null;
};

const SplitHeader: React.FC<SplitHeaderProps> = ({
    completedSplits,
    currentSplitName,
    game,
    gender,
    onSelectSplit,
    runSplitName,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const runSplit = game.splits.find((split) => split.name === runSplitName);
    const levelCap = runSplit
        ? SplitHelpers.getLevelCap(game, runSplit, completedSplits, gender)
        : null;
    const splitNames = game.splits.map((split) => split.name);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-header']}>
            <div className={styles['title-group']}>
                <h2 className={styles.title}>
                    <SplitSelect
                        onChange={onSelectSplit}
                        options={splitNames}
                        value={currentSplitName ?? ''}
                    />
                    <span>Split</span>
                </h2>
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
