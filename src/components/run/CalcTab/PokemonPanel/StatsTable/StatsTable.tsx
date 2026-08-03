import Dropdown from '@/components/common/Dropdown/Dropdown';
import NumericInput from '@/components/common/NumericInput/NumericInput';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import {
    MAX_EV,
    MAX_IV,
    MIN_EV,
    MIN_IV,
    STAT_FIELDS,
} from '@/lib/static/constants';
import {
    DropdownOption,
    SpeedComparison,
    StatValues,
} from '@/lib/static/types';
import styles from './StatsTable.module.scss';

type StatsTableProps = {
    baseStats?: StatValues;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    evs: StatValues;
    ivs: StatValues;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ) => void;
    onEvChange: (stat: keyof StatValues, value: number) => void;
    onIvChange: (stat: keyof StatValues, value: number) => void;
    showEvs: boolean;
    speedComparison: SpeedComparison | undefined;
    totalStats?: StatValues;
};

const StatsTable: React.FC<StatsTableProps> = ({
    baseStats,
    boosts,
    evs,
    ivs,
    onBoostChange,
    onEvChange,
    onIvChange,
    showEvs,
    speedComparison,
    totalStats,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_BOOST = -6;
    const MAX_BOOST = 6;

    const BOOST_OPTIONS: DropdownOption[] = Array.from(
        { length: MAX_BOOST - MIN_BOOST + 1 },
        (_, index) => {
            const stage = MIN_BOOST + index;
            return {
                label: stage > 0 ? `+${stage}` : String(stage),
                value: String(stage),
            };
        }
    );

    const SPEED_TOOLTIPS: Record<SpeedComparison, string> = {
        faster: 'Higher Speed',
        slower: 'Lower Speed',
        tie: 'Speed Tie',
    };

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
                    {showEvs && <th>EV</th>}
                    <th>Stage</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {STAT_FIELDS.map(({ key, label }) => (
                    <tr key={key}>
                        <th className={styles['stat-label']}>{label}</th>
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
                        {showEvs && (
                            <td>
                                <NumericInput
                                    dense
                                    disabled={false}
                                    max={MAX_EV}
                                    min={MIN_EV}
                                    onChange={(value) => onEvChange(key, value)}
                                    value={evs[key]}
                                />
                            </td>
                        )}
                        <td className={styles['boost-cell']}>
                            {key !== 'hp' && (
                                <Dropdown
                                    dense
                                    onChange={(value) =>
                                        onBoostChange(key, value)
                                    }
                                    options={BOOST_OPTIONS}
                                    value={String(boosts[key])}
                                />
                            )}
                        </td>
                        <td className={styles.total}>
                            {key === 'spe' && speedComparison ? (
                                <Tooltip
                                    position="center"
                                    text={SPEED_TOOLTIPS[speedComparison]}
                                >
                                    <span
                                        className={
                                            styles[`total--${speedComparison}`]
                                        }
                                    >
                                        {totalStats?.[key]}
                                    </span>
                                </Tooltip>
                            ) : (
                                totalStats?.[key]
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StatsTable;
