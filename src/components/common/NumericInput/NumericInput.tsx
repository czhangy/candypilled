'use client';

import useDigitInput from '@/lib/hooks/useDigitInput';
import styles from './NumericInput.module.scss';

type NumericInputProps = {
    dense: boolean;
    disabled: boolean;
    id?: string;
    max: number;
    min: number;
    onChange: (value: number) => void;
    value: number;
};

const NumericInput: React.FC<NumericInputProps> = ({
    dense,
    disabled,
    id,
    max,
    min,
    onChange,
    value,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const {
        onBlur,
        onChange: handleChange,
        value: text,
    } = useDigitInput(value, min, max, onChange);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <input
            className={[
                styles['numeric-input'],
                dense && styles['numeric-input--dense'],
            ]
                .filter(Boolean)
                .join(' ')}
            disabled={disabled}
            id={id}
            inputMode="numeric"
            onBlur={onBlur}
            onChange={handleChange}
            type="text"
            value={text}
        />
    );
};

export default NumericInput;
