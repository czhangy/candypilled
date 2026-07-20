'use client';

import Modal from '@/components/common/Modal/Modal';
import styles from './ConfirmModal.module.scss';

type ConfirmModalProps = {
    accentColor?: string;
    buttonTextColor?: string;
    confirmLabel: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    variant: 'accent' | 'destructive';
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    accentColor,
    buttonTextColor,
    confirmLabel,
    description,
    onClose,
    onConfirm,
    title,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title={title}
        >
            {(requestClose) => (
                <>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.actions}>
                        <button
                            className={styles.cancel}
                            onClick={requestClose}
                            type="button"
                        >
                            Cancel
                        </button>
                        <button
                            className={[
                                styles.confirm,
                                styles[`confirm--${variant}`],
                            ].join(' ')}
                            onClick={() => {
                                onConfirm();
                                requestClose();
                            }}
                            type="button"
                        >
                            {confirmLabel}
                        </button>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default ConfirmModal;
