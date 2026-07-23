import { STAT_FIELDS } from '@/lib/static/constants';
import { StatValues } from '@/lib/static/types';
import styles from './StatsChart.module.scss';

type StatsChartProps = {
    stats?: StatValues;
};

const StatsChart: React.FC<StatsChartProps> = ({ stats }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // The highest base stat any Pokémon can have, used to scale every bar
    // to a consistent, comparable width.
    const STAT_MAX = 255;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const total = stats
        ? stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe
        : 0;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!stats) {
        return null;
    }

    return (
        <div className={styles.stats}>
            <span className={styles['stats-label']}>Base Stats</span>
            <div className={styles['stats-content']}>
                <div className={styles['stats-chart']}>
                    <div className={styles.rows}>
                        {STAT_FIELDS.map((row) => {
                            const value = stats[row.key];
                            const percent = (value / STAT_MAX) * 100;

                            return (
                                <div className={styles.row} key={row.key}>
                                    <div className={styles.info}>
                                        <span className={styles.label}>
                                            {row.label}
                                        </span>
                                        <span className={styles.value}>
                                            {value}
                                        </span>
                                    </div>
                                    <div className={styles.track}>
                                        <div
                                            className={styles.fill}
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.total}>
                        <div className={styles['total-info']}>
                            <span className={styles['total-label']}>BST</span>
                            <span className={styles['total-value']}>
                                {total}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsChart;
