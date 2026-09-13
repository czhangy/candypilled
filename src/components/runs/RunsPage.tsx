'use client';

import { useSyncExternalStore } from 'react';
import { GAMES } from '@/lib/data/games';
import RunHelpers from '@/lib/utils/RunHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import RunEntry from './RunEntry/RunEntry';
import styles from './RunsPage.module.scss';

const RunsPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const gameRuns = useSyncExternalStore(
        RunHelpers.subscribe,
        () => RunHelpers.getRunsForGames(GAMES),
        RunHelpers.getServerGamesSnapshot
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
