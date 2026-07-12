'use client';

import { useSyncExternalStore } from 'react';
import RunStoreHelpers from '@/lib/utils/RunStoreHelpers';
import RunEntry from './RunEntry/RunEntry';
import styles from './RunsPage.module.scss';

const RunsPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const gameRuns = useSyncExternalStore(
        RunStoreHelpers.subscribe,
        RunStoreHelpers.getSnapshot,
        RunStoreHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['runs-page']}>
            <ul className={styles.list}>
                {gameRuns.map(({ game, run }) => (
                    <li key={game.name}>
                        <RunEntry game={game} run={run} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RunsPage;
