'use client';

import Modal from '@/components/common/Modal/Modal';
import ConfirmActions from '@/components/runs/RunEntry/ConfirmActions/ConfirmActions';
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
                    <ConfirmActions
                        confirmLabel={confirmLabel}
                        onCancel={requestClose}
                        onConfirm={() => {
                            onConfirm();
                            requestClose();
                        }}
                        variant="destructive"
                    />
                </>
            )}
        </Modal>
    );
};

export default ConfirmModal;
