'use client';

import { useState } from 'react';
import ImportSaveForm from '@/components/common/ImportSaveForm/ImportSaveForm';
import Modal from '@/components/common/Modal/Modal';
import Tabs from '@/components/common/Tabs/Tabs';
import ConfirmActions from '@/components/runs/RunEntry/ConfirmActions/ConfirmActions';
import { CaughtPokemon, Game } from '@/lib/static/types';
import styles from './DataModal.module.scss';

type DataModalProps = {
    accentColor: string;
    buttonTextColor?: string;
    game: Game;
    hasExistingRun: boolean;
    onClose: () => void;
    onImport: (pokemon: CaughtPokemon[], completedSplits: string[]) => void;
    onReset: () => void;
};

const DataModal: React.FC<DataModalProps> = ({
    accentColor,
    buttonTextColor,
    game,
    hasExistingRun,
    onClose,
    onImport,
    onReset,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeTab, setActiveTab] = useState<'import' | 'reset'>('import');

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'import', label: 'Import' },
        ...(hasExistingRun ? [{ id: 'reset', label: 'Reset' }] : []),
    ];

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const description = `All data for ${game.name}, including your current run and Hall of Fame count, will be deleted and can't be recovered.`;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        setActiveTab(id as 'import' | 'reset');
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title={`Manage ${game.name} Data`}
        >
            {(requestClose) => (
                <>
                    <Tabs
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                        tabs={TABS}
                    />
                    {activeTab === 'import' && (
                        <ImportSaveForm
                            game={game}
                            onImport={onImport}
                            requestClose={requestClose}
                        />
                    )}
                    {hasExistingRun && activeTab === 'reset' && (
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
