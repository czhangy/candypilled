import { useState } from 'react';

/**
 * Backs a digit-only numeric input with a local text buffer, so the field
 * can be fully cleared while typing instead of snapping back to a clamped
 * value on every keystroke. The value is normalized and clamped to
 * [min, max] once a value commits or the field loses focus.
 */
const useDigitInput = (
    value: number,
    min: number,
    max: number,
    onCommit: (value: number) => void
) => {
    const [text, setText] = useState(String(value));
    const [prevValue, setPrevValue] = useState(value);

    if (value !== prevValue) {
        setPrevValue(value);
        setText(String(value));
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const digits = event.target.value.replace(/\D/g, '');
        setText(digits);

        if (digits !== '') {
            onCommit(Number(digits));
        }
    };

    const handleBlur = (): void => {
        const clamped = Math.min(max, Math.max(min, Number(text || min)));
        setText(String(clamped));
        onCommit(clamped);
    };

    return { onBlur: handleBlur, onChange: handleChange, value: text };
};

export default useDigitInput;
