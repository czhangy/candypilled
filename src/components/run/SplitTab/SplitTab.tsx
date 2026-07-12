'use client';

import { Game, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import SplitLocation from './SplitLocation/SplitLocation';
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
    const currentSplit = game.splits.find((split) => split.name === run.split);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleStarterSelect = (starter: string): void => {
        LocalStorageHelpers.saveRun(game, { ...run, starter });
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
                    variant={StringHelpers.toSlug(game.name)}
                />
            )}
            <div className={styles.locations}>
                {currentSplit?.locations.map((location) => (
                    <SplitLocation
                        key={location.name}
                        location={location}
                        variant={StringHelpers.toSlug(game.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SplitTab;
