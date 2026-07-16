'use client';

import { Game, Run } from '@/lib/static/types';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import SplitLocation from './SplitLocation/SplitLocation';
import styles from './SplitTab.module.scss';

interface SplitTabProps {
    game: Game;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    run: Run;
    stickyOffset: number;
}

const SplitTab: React.FC<SplitTabProps> = ({
    game,
    onSelectAbility,
    onSelectMove,
    run,
    stickyOffset,
}) => {
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
    const variant = StringHelpers.toSlug(game.name);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['split-tab']}
            style={
                {
                    '--sticky-offset': `${stickyOffset}px`,
                } as React.CSSProperties
            }
        >
            <div className={styles.body}>
                <nav className={styles.toc}>
                    <span className={styles['toc-label']}>Locations</span>
                    <ul className={styles['toc-list']}>
                        {currentSplit?.locations.map((location) => (
                            <li key={location.name}>
                                <a
                                    className={styles['toc-link']}
                                    href={`#${StringHelpers.toSlug(location.name)}`}
                                >
                                    {location.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.locations}>
                    {currentSplit?.locations.map((location) => (
                        <SplitLocation
                            game={game}
                            key={location.name}
                            location={location}
                            onSelectAbility={onSelectAbility}
                            onSelectMove={onSelectMove}
                            run={run}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplitTab;
