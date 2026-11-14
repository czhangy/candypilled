import Dropdown from '@/components/common/Dropdown/Dropdown';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { STAT_FIELDS } from '@/lib/static/constants';
import {
    BoxComparison,
    BoxFilters as BoxFiltersValue,
    DropdownOption,
    GameDataSource,
    StatValues,
} from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './BoxFilters.module.scss';
import ComparisonInput from './ComparisonInput/ComparisonInput';

type BoxFiltersProps = {
    dataSource: GameDataSource;
    filters: BoxFiltersValue;
    generation: number;
    onChange: (filters: BoxFiltersValue) => void;
};

const BoxFilters: React.FC<BoxFiltersProps> = ({
    dataSource,
    filters,
    generation,
    onChange,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TYPE_BADGE_WIDTH = 37;
    const TYPE_BADGE_HEIGHT = 16;
    const DEFAULT_LEVEL = 50;
    const MAX_LEVEL = 100;
    const DEFAULT_STAT_VALUE = 100;
    const MAX_STAT_VALUE = 999;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTypeClick = (type: string): void => {
        onChange({ ...filters, type: type === filters.type ? null : type });
    };

    const handleStatSelect = (stat: string): void => {
        onChange({
            ...filters,
            stat: {
                operator: filters.stat?.operator ?? '>',
                stat: stat as keyof StatValues,
                value: filters.stat?.value ?? DEFAULT_STAT_VALUE,
            },
        });
    };

    const handleStatComparisonChange = (comparison: BoxComparison): void => {
        if (!filters.stat) return;

        onChange({ ...filters, stat: { ...filters.stat, ...comparison } });
    };

    const handleLevelChange = (level: BoxComparison): void => {
        onChange({ ...filters, level });
    };

    const handleTmSelect = (tm: string): void => {
        onChange({ ...filters, tm });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const types = TypeHelpers.getGameTypes(dataSource, generation);
    const statOptions: DropdownOption[] = STAT_FIELDS.map(({ key, label }) => ({
        label,
        value: key,
    }));
    const tmOptions: DropdownOption[] = ItemHelpers.getBrowsableTms(
        dataSource,
        generation
    )
        .map((tm) => ({ label: tm.name, value: tm.slug }))
        .sort((a, b) => a.label.localeCompare(b.label));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['box-filters']}>
            <div className={styles.field}>
                <span className={styles.label}>Type</span>
                <div className={styles.types}>
                    {types.map((type) => (
                        <button
                            aria-label={`Filter by ${type}`}
                            aria-pressed={type === filters.type}
                            className={[
                                styles.type,
                                filters.type !== null &&
                                    type !== filters.type &&
                                    styles['type--inactive'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            key={type}
                            onClick={() => handleTypeClick(type)}
                            type="button"
                        >
                            <TypeBadge
                                height={TYPE_BADGE_HEIGHT}
                                type={type}
                                width={TYPE_BADGE_WIDTH}
                            />
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Stat</span>
                <div className={styles.controls}>
                    <div className={styles.dropdown}>
                        <Dropdown
                            dense
                            onChange={handleStatSelect}
                            options={statOptions}
                            value={filters.stat?.stat ?? ''}
                        />
                    </div>
                    {filters.stat && (
                        <ComparisonInput
                            comparison={filters.stat}
                            defaultValue={DEFAULT_STAT_VALUE}
                            max={MAX_STAT_VALUE}
                            onChange={handleStatComparisonChange}
                        />
                    )}
                </div>
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Can learn</span>
                <div className={styles.controls}>
                    <div className={styles.dropdown}>
                        <Dropdown
                            dense
                            onChange={handleTmSelect}
                            options={tmOptions}
                            searchable
                            value={filters.tm ?? ''}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Level</span>
                <div className={styles.controls}>
                    <ComparisonInput
                        comparison={filters.level}
                        defaultValue={DEFAULT_LEVEL}
                        max={MAX_LEVEL}
                        onChange={handleLevelChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default BoxFilters;
