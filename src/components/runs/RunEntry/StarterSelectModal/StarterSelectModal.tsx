'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import StarterSelect from './StarterSelect/StarterSelect';
import styles from './StarterSelectModal.module.scss';

interface StarterSelectModalProps {
    accentColor: string;
    onClose: () => void;
    onSelect: (starter: string) => void;
    starters: string[];
    variant: string;
}

const StarterSelectModal: React.FC<StarterSelectModalProps> = ({
    accentColor,
    onClose,
    onSelect,
    starters,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeStarter, setActiveStarter] = useState<string | null>(null);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleStarterSelect = (starter: string): void => {
        setActiveStarter(starter);
    };

    const handleConfirmClick = (): void => {
        if (activeStarter) onSelect(activeStarter);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            onClose={onClose}
            title="Choose your starter"
        >
            <div className={styles['starter-select-modal']}>
                <StarterSelect
                    onSelect={handleStarterSelect}
                    selected={activeStarter}
                    starters={starters}
                    variant={variant}
                />
                <div className={styles.footer}>
                    <button
                        className={styles['confirm-button']}
                        disabled={!activeStarter}
                        onClick={handleConfirmClick}
                        type="button"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default StarterSelectModal;
