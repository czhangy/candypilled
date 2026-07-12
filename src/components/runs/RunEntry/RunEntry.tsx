import Image from 'next/image';
import Link from 'next/link';
import BoxIcon from '@/lib/icons/BoxIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import RunIcon from '@/lib/icons/RunIcon';
import SkullIcon from '@/lib/icons/SkullIcon';
import { Game, Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunEntry.module.scss';

interface RunEntryProps {
    game: Game;
    run: Run | null;
}

const RunEntry: React.FC<RunEntryProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Link
            className={styles['run-entry']}
            href={`/runs/${StringHelpers.toSlug(game.name)}`}
        >
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
        </Link>
    );
};

export default RunEntry;
