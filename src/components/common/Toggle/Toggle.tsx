'use client';

import styles from './Toggle.module.scss';

type ToggleProps = {
    checked: boolean;
    label: string;
    onChange: (checked: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ checked, label, onChange }) => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        onChange(!checked);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-checked={checked}
            aria-label={label}
            className={[styles.toggle, checked && styles['toggle--checked']]
                .filter(Boolean)
                .join(' ')}
            onClick={handleClick}
            role="switch"
            type="button"
        >
            <span className={styles.knob} />
        </button>
    );
};

export default Toggle;
