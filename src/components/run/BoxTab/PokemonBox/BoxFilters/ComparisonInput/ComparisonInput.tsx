import NumericInput from '@/components/common/NumericInput/NumericInput';
import { BoxComparison } from '@/lib/static/types';
import styles from './ComparisonInput.module.scss';

type ComparisonInputProps = {
    // Null until an operator is picked, which then starts the comparison at
    // `defaultValue`.
    comparison: BoxComparison | null;
    defaultValue: number;
    max: number;
    onChange: (comparison: BoxComparison) => void;
};

const ComparisonInput: React.FC<ComparisonInputProps> = ({
    comparison,
    defaultValue,
    max,
    onChange,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const OPERATORS: BoxComparison['operator'][] = ['<', '>'];

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleOperatorClick = (operator: BoxComparison['operator']): void => {
        onChange({ operator, value: comparison?.value ?? defaultValue });
    };

    const handleValueChange = (value: number): void => {
        if (!comparison) return;

        onChange({ ...comparison, value });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['comparison-input']}>
            <div className={styles.operators}>
                {OPERATORS.map((operator) => (
                    <button
                        aria-pressed={operator === comparison?.operator}
                        className={[
                            styles.operator,
                            operator === comparison?.operator &&
                                styles['operator--active'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={operator}
                        onClick={() => handleOperatorClick(operator)}
                        type="button"
                    >
                        {operator}
                    </button>
                ))}
            </div>
            {comparison && (
                <div className={styles.value}>
                    <NumericInput
                        dense
                        disabled={false}
                        max={max}
                        min={0}
                        onChange={handleValueChange}
                        value={comparison.value}
                    />
                </div>
            )}
        </div>
    );
};

export default ComparisonInput;
