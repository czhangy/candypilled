import { Run } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import RunEntry from './RunEntry/RunEntry';
import styles from './RunsPage.module.scss';

const RunsPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const runs: Run[] = [
        {
            name: 'Platinum',
            logo: '/logos/platinum.png',
            attempt: 1,
            deathCount: 2,
            split: 'Maylene Split',
            boxCount: 3,
            personalBest: 'Wake Split',
            hallOfFameCount: 0,
        },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['runs-page']}>
            <ul className={styles.list}>
                {runs.map((run) => (
                    <li key={StringHelpers.toSlug(run.name)}>
                        <RunEntry run={run} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RunsPage;
