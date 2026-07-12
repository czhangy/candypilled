'use client';

import { Game, Run } from '@/lib/static/types';
import RunStoreHelpers from '@/lib/utils/RunStoreHelpers';
import styles from './SplitTab.module.scss';
import StarterSelect from './StarterSelect/StarterSelect';

interface SplitTabProps {
    game: Game;
    run: Run;
}

const SplitTab: React.FC<SplitTabProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const isFirstSplit = run.split === game.splits[0].name;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleStarterSelect = (starter: string): void => {
        RunStoreHelpers.saveRun(game, { ...run, starter });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-tab']}>
            <h2 className={styles.header}>{run.split} Split</h2>
            {isFirstSplit && (
                <StarterSelect
                    onSelect={handleStarterSelect}
                    selected={run.starter}
                    starters={game.starters}
                />
            )}
        </div>
    );
};

export default SplitTab;
