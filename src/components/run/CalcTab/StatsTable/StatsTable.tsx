import Dropdown from '@/components/common/Dropdown/Dropdown';
import { STAT_FIELDS } from '@/lib/static/constants';
import { DropdownOption, StatValues } from '@/lib/static/types';
import styles from './StatsTable.module.scss';

type StatsTableProps = {
    baseStats?: StatValues;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    evs?: StatValues;
    hideEvs: boolean;
    ivs?: StatValues;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ) => void;
    onEvChange?: (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onIvChange?: (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    totalStats?: StatValues;
};

const StatsTable: React.FC<StatsTableProps> = ({
    baseStats,
    boosts,
    evs,
    hideEvs,
    ivs,
    onBoostChange,
    onEvChange,
    onIvChange,
    totalStats,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_IV = 0;
    const MAX_IV = 31;
    const MIN_EV = 0;
    const MAX_EV = 252;
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
                    {!hideEvs && <th>EV</th>}
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
                            {onIvChange ? (
                                <input
                                    className={styles['iv-input']}
                                    max={MAX_IV}
                                    min={MIN_IV}
                                    onChange={(event) => onIvChange(key, event)}
                                    type="number"
                                    value={ivs?.[key] ?? MAX_IV}
                                />
                            ) : (
                                ivs?.[key]
                            )}
                        </td>
                        {!hideEvs && (
                            <td>
                                {onEvChange ? (
                                    <input
                                        className={styles['ev-input']}
                                        max={MAX_EV}
                                        min={MIN_EV}
                                        onChange={(event) =>
                                            onEvChange(key, event)
                                        }
                                        type="number"
                                        value={evs?.[key] ?? 0}
                                    />
                                ) : (
                                    evs?.[key]
                                )}
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
                        <td className={styles.total}>{totalStats?.[key]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StatsTable;
