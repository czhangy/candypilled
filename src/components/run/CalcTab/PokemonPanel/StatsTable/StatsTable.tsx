import NumericInput from '@/components/common/NumericInput/NumericInput';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { MAX_IV, MIN_IV, STAT_FIELDS } from '@/lib/static/constants';
import { SpeedComparison, StatValues } from '@/lib/static/types';
import styles from './StatsTable.module.scss';

type StatsTableProps = {
    baseStats?: StatValues;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    ivs: StatValues;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: number
    ) => void;
    onIvChange: (stat: keyof StatValues, value: number) => void;
    speedComparison: SpeedComparison | undefined;
    totalStats?: StatValues;
};

const StatsTable: React.FC<StatsTableProps> = ({
    baseStats,
    boosts,
    ivs,
    onBoostChange,
    onIvChange,
    speedComparison,
    totalStats,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_BOOST = -6;
    const MAX_BOOST = 6;

    const SPEED_TOOLTIPS: Record<SpeedComparison, string> = {
        faster: 'Higher Speed',
        slower: 'Lower Speed',
        tie: 'Speed Tie',
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const formatBoost = (stage: number): string =>
        stage > 0 ? `+${stage}` : String(stage);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <table className={styles.stats}>
            <thead>
                <tr>
                    <th />
                    <th>Base</th>
                    <th>IV</th>
                    <th>Stage</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {STAT_FIELDS.map(({ key, label }) => (
                    <tr key={key}>
                        <th className={styles['stat-label']}>
                            <span className={styles['label-text']}>
                                {label}
                                {key === 'spe' && speedComparison && (
                                    <span
                                        className={[
                                            styles['speed-icon'],
                                            styles[
                                                `speed-icon--${speedComparison}`
                                            ],
                                        ].join(' ')}
                                    >
                                        <Tooltip
                                            position="center"
                                            text={
                                                SPEED_TOOLTIPS[speedComparison]
                                            }
                                        >
                                            {speedComparison === 'tie' ? (
                                                <span
                                                    className={
                                                        styles['tie-mark']
                                                    }
                                                >
                                                    =
                                                </span>
                                            ) : (
                                                <ChevronIcon />
                                            )}
                                        </Tooltip>
                                    </span>
                                )}
                            </span>
                        </th>
                        <td>{baseStats?.[key]}</td>
                        <td>
                            <NumericInput
                                dense
                                disabled={false}
                                max={MAX_IV}
                                min={MIN_IV}
                                onChange={(value) => onIvChange(key, value)}
                                value={ivs[key]}
                            />
                        </td>
                        <td className={styles['boost-cell']}>
                            {key !== 'hp' && (
                                <div className={styles.stepper}>
                                    <button
                                        aria-label={`Lower ${label} stage`}
                                        className={styles['stepper-button']}
                                        disabled={boosts[key] <= MIN_BOOST}
                                        onClick={() =>
                                            onBoostChange(key, boosts[key] - 1)
                                        }
                                        type="button"
                                    >
                                        −
                                    </button>
                                    <span className={styles['stepper-value']}>
                                        {formatBoost(boosts[key])}
                                    </span>
                                    <button
                                        aria-label={`Raise ${label} stage`}
                                        className={styles['stepper-button']}
                                        disabled={boosts[key] >= MAX_BOOST}
                                        onClick={() =>
                                            onBoostChange(key, boosts[key] + 1)
                                        }
                                        type="button"
                                    >
                                        +
                                    </button>
                                </div>
                            )}
                        </td>
                        <td className={styles.total}>{totalStats?.[key]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StatsTable;
