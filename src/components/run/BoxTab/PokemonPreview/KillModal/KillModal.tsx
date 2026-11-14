'use client';

import { useState } from 'react';
import ConfirmActions from '@/components/common/ConfirmActions/ConfirmActions';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import Modal from '@/components/common/Modal/Modal';
import { DropdownOption } from '@/lib/static/types';
import styles from './KillModal.module.scss';

type KillModalProps = {
    accentColor: string;
    battleOptions: DropdownOption[];
    buttonTextColor: string | undefined;
    onClose: () => void;
    onConfirm: (deathBattleKey: string | undefined) => void;
};

const KillModal: React.FC<KillModalProps> = ({
    accentColor,
    battleOptions,
    buttonTextColor,
    onClose,
    onConfirm,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const NO_BATTLE_VALUE = '';

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [battleKey, setBattleKey] = useState(NO_BATTLE_VALUE);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleBattleChange = (value: string): void => {
        setBattleKey(value);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            maxWidth="28rem"
            onClose={onClose}
            title="Mark as dead"
        >
            {(requestClose) => (
                <div className={styles['kill-modal']}>
                    <Dropdown
                        onChange={handleBattleChange}
                        options={battleOptions}
                        searchable
                        value={battleKey}
                    />
                    <ConfirmActions
                        confirmLabel="KILL"
                        onCancel={requestClose}
                        onConfirm={() => {
                            onConfirm(battleKey || undefined);
                            requestClose();
                        }}
                        variant="destructive"
                    />
                </div>
            )}
        </Modal>
    );
};

export default KillModal;
