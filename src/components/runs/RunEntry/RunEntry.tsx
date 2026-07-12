import Image from 'next/image';
import Link from 'next/link';
import BoxIcon from '@/lib/icons/BoxIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import RunIcon from '@/lib/icons/RunIcon';
import SkullIcon from '@/lib/icons/SkullIcon';
import { Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunEntry.module.scss';

interface RunEntryProps {
    run: Run;
}

const RunEntry: React.FC<RunEntryProps> = ({ run }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Link
            className={styles['run-entry']}
            href={`/runs/${StringHelpers.toSlug(run.name)}`}
        >
            <Image
                alt={`${run.name} logo`}
                className={styles.logo}
                height={56}
                src={run.logo}
                width={112}
            />
            <div className={styles.info}>
                <div className={styles.line}>
                    <span className={styles.name}>{run.name}</span>
                    <span className={styles.attempt}>
                        Attempt #{run.attempt}
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.split}>
                        <RunIcon />
                        {run.split}
                    </span>
                    <span className={styles.boxes}>
                        <BoxIcon />
                        {run.boxCount}
                    </span>
                    <span className={styles.deaths}>
                        <SkullIcon />
                        {run.deathCount}
                    </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.line}>
                    {run.hallOfFameCount === 0 ? (
                        <span className={styles['personal-best']}>
                            PB: {run.personalBest}
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
