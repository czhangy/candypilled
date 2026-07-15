'use client';

import Image from 'next/image';
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
}

const SplitTab: React.FC<SplitTabProps> = ({
    game,
    onSelectAbility,
    onSelectMove,
    run,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const currentSplit = game.splits.find((split) => split.name === run.split);
    const levelCap = currentSplit
        ? BattleProgressHelpers.getLevelCap(currentSplit, run.starter)
        : null;
    const variant = StringHelpers.toSlug(game.name);
    const badge = `/${variant}/badges/${StringHelpers.toSlug(run.split)}.png`;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-tab']}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    <Image alt="" fill src={badge} />
                </div>
                <div className={styles['title-group']}>
                    <h2 className={styles.title}>{run.split} Split</h2>
                    {levelCap !== null && (
                        <span className={styles['level-cap']}>
                            Level Cap: {levelCap}
                        </span>
                    )}
                </div>
            </div>
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
