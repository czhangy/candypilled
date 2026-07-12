'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BoxIcon from '@/lib/icons/BoxIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import RunIcon from '@/lib/icons/RunIcon';
import SkullIcon from '@/lib/icons/SkullIcon';
import { Game, Run } from '@/lib/static/types';
import RunStoreHelpers from '@/lib/utils/RunStoreHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunEntry.module.scss';

interface RunEntryProps {
    game: Game;
    run: Run | null;
}

const RunEntry: React.FC<RunEntryProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const router = useRouter();

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleContinueClick = (): void => {
        router.push(`/runs/${StringHelpers.toSlug(game.name)}`);
    };

    const handleNewRunClick = (): void => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            deathCount: 0,
            split: game.splits[0].name,
            boxCount: 0,
            personalBest: run?.personalBest ?? 'N/A',
            hallOfFameCount: run?.hallOfFameCount ?? 0,
        };

        RunStoreHelpers.saveRun(game, newRun);
        router.push(`/runs/${StringHelpers.toSlug(game.name)}`);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['run-entry']}>
            <div className={styles.details}>
                <Image
                    alt={`${game.name} logo`}
                    className={styles.logo}
                    height={56}
                    src={game.logo}
                    width={112}
                />
                <div className={styles.info}>
                    <div className={styles.line}>
                        <span className={styles.name}>{game.name}</span>
                        <span className={styles.attempt}>
                            Attempt #{run?.attempt ?? 0}
                        </span>
                    </div>
                    <div className={styles.line}>
                        <span className={styles.split}>
                            <RunIcon />
                            {run?.split ?? '-'}
                        </span>
                        <span className={styles.boxes}>
                            <BoxIcon />
                            {run?.boxCount ?? '-'}
                        </span>
                        <span className={styles.deaths}>
                            <SkullIcon />
                            {run?.deathCount ?? '-'}
                        </span>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.line}>
                        {!run || run.hallOfFameCount === 0 ? (
                            <span className={styles['personal-best']}>
                                PB: {run?.personalBest ?? 'N/A'}
                            </span>
                        ) : (
                            <span className={styles['hall-of-fame']}>
                                <CrownIcon />
                                {run.hallOfFameCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                {run && (
                    <button
                        className={styles.continue}
                        onClick={handleContinueClick}
                        type="button"
                    >
                        Continue
                    </button>
                )}
                <button
                    className={styles['new-run']}
                    onClick={handleNewRunClick}
                    type="button"
                >
                    New
                </button>
            </div>
        </div>
    );
};

export default RunEntry;
