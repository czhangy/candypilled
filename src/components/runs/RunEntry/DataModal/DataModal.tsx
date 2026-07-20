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
    onClose: () => void;
    onExport: () => void;
    onReset: () => void;
};

const DataModal: React.FC<DataModalProps> = ({
    accentColor,
    buttonTextColor,
    gameName,
    onClose,
    onExport,
    onReset,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeTab, setActiveTab] = useState<'export' | 'reset'>('export');

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'export', label: 'Export' },
        { id: 'reset', label: 'Reset' },
    ];

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const description =
        activeTab === 'export'
            ? `This will download a JSON file containing all of your data for ${gameName}.`
            : `All data for ${gameName}, including your current run, personal best, and Hall of Fame count, will be deleted and can't be recovered.`;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        setActiveTab(id as 'export' | 'reset');
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
                    <p className={styles.description}>{description}</p>
                    <ConfirmActions
                        confirmLabel={
                            activeTab === 'export' ? 'Export' : 'Reset Game'
                        }
                        onCancel={requestClose}
                        onConfirm={() => {
                            if (activeTab === 'export') {
                                onExport();
                            } else {
                                onReset();
                            }
                            requestClose();
                        }}
                        variant={
                            activeTab === 'export' ? 'accent' : 'destructive'
                        }
                    />
                </>
            )}
        </Modal>
    );
};

export default DataModal;
