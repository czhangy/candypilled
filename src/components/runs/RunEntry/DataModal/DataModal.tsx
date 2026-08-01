'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import Tabs from '@/components/common/Tabs/Tabs';
import ConfirmActions from '@/components/runs/RunEntry/ConfirmActions/ConfirmActions';
import styles from './DataModal.module.scss';

type DataModalProps = {
    accentColor: string;
    buttonTextColor?: string;
    gameName: string;
    hasExistingRun: boolean;
    onClose: () => void;
    onReset: () => void;
};

const DataModal: React.FC<DataModalProps> = ({
    accentColor,
    buttonTextColor,
    gameName,
    hasExistingRun,
    onClose,
    onReset,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeTab, setActiveTab] = useState<'reset'>('reset');

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = hasExistingRun ? [{ id: 'reset', label: 'Reset' }] : [];

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const description = `All data for ${gameName}, including your current run, personal best, and Hall of Fame count, will be deleted and can't be recovered.`;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        setActiveTab(id as 'reset');
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title={`Manage ${gameName} Data`}
        >
            {(requestClose) => (
                <>
                    <Tabs
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                        tabs={TABS}
                    />
                    {hasExistingRun && (
                        <>
                            <p className={styles.description}>{description}</p>
                            <ConfirmActions
                                confirmLabel="Reset Game"
                                onCancel={requestClose}
                                onConfirm={() => {
                                    onReset();
                                    requestClose();
                                }}
                                variant="destructive"
                            />
                        </>
                    )}
                </>
            )}
        </Modal>
    );
};

export default DataModal;
