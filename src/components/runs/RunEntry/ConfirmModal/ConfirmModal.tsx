'use client';

import Modal from '@/components/common/Modal/Modal';
import styles from './ConfirmModal.module.scss';

type ConfirmModalProps = {
    confirmLabel: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    confirmLabel,
    description,
    onClose,
    onConfirm,
    title,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal onClose={onClose} title={title}>
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
                            className={styles.confirm}
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
