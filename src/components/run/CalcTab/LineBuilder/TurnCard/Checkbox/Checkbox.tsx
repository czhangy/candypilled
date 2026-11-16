import styles from './Checkbox.module.scss';

type CheckboxProps = {
    checked: boolean;
    isDisabled: boolean;
    label: string;
    onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    isDisabled,
    label,
    onChange,
}) => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleChange = (): void => {
        onChange();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <label className={styles.checkbox}>
            <input
                checked={checked}
                disabled={isDisabled}
                onChange={handleChange}
                type="checkbox"
            />
            {label}
        </label>
    );
};

export default Checkbox;
