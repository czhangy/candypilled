'use client';

import styles from './ConfirmActions.module.scss';

type ConfirmActionsProps = {
    confirmLabel: string;
    onCancel: () => void;
    onConfirm: () => void;
    variant: 'accent' | 'destructive';
};

const ConfirmActions: React.FC<ConfirmActionsProps> = ({
    confirmLabel,
    onCancel,
    onConfirm,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles.actions}>
            <button className={styles.cancel} onClick={onCancel} type="button">
                Cancel
            </button>
            <button
                className={[styles.confirm, styles[`confirm--${variant}`]].join(
                    ' '
                )}
                onClick={onConfirm}
                type="button"
            >
                {confirmLabel}
            </button>
        </div>
    );
};

export default ConfirmActions;
