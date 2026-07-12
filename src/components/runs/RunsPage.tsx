'use client';

import { useSyncExternalStore } from 'react';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import RunEntry from './RunEntry/RunEntry';
import styles from './RunsPage.module.scss';

const RunsPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const gameRuns = useSyncExternalStore(
        LocalStorageHelpers.subscribe,
        LocalStorageHelpers.getSnapshot,
        LocalStorageHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['runs-page']}>
            <ul className={styles.list}>
                {gameRuns.map(({ game, run }, index) => (
                    <li key={game.name}>
                        {game.generation !==
                            gameRuns[index - 1]?.game.generation && (
                            <div className={styles.generation}>
                                <span className={styles.heading}>
                                    Generation{' '}
                                    {StringHelpers.toRoman(game.generation)}
                                </span>
                                <hr className={styles.rule} />
                            </div>
                        )}
                        <RunEntry game={game} run={run} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RunsPage;
