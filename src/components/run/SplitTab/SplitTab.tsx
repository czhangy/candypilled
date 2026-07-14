'use client';

import Image from 'next/image';
import { Game, Run } from '@/lib/static/types';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
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
    const levelCap = currentSplit
        ? BattleProgressHelpers.getLevelCap(currentSplit, run.starter)
        : null;
    const variant = StringHelpers.toSlug(game.name);
    const badge = `/${variant}/badges/${StringHelpers.toSlug(run.split)}.png`;

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
            <div className={styles.header}>
                <div className={styles['title-group']}>
                    <div className={styles.badge}>
                        <Image alt="" fill src={badge} />
                    </div>
                    <h2 className={styles.title}>{run.split} Split</h2>
                </div>
                {levelCap !== null && (
                    <span className={styles['level-cap']}>
                        Level Cap: {levelCap}
                    </span>
                )}
            </div>
            {isFirstSplit && (
                <StarterSelect
                    onSelect={handleStarterSelect}
                    selected={run.starter}
                    starters={game.starters}
                    variant={variant}
                />
            )}
            <div className={styles.locations}>
                {currentSplit?.locations.map((location) => (
                    <SplitLocation
                        game={game}
                        key={location.name}
                        location={location}
                        run={run}
                        variant={variant}
                    />
                ))}
            </div>
        </div>
    );
};

export default SplitTab;
