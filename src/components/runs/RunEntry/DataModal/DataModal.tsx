'use client';

import { useRef, useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import Tabs from '@/components/common/Tabs/Tabs';
import ConfirmActions from '@/components/runs/RunEntry/ConfirmActions/ConfirmActions';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Run } from '@/lib/static/types';
import styles from './DataModal.module.scss';

type DataModalProps = {
    accentColor: string;
    buttonTextColor?: string;
    gameName: string;
    hasExistingRun: boolean;
    onClose: () => void;
    onExport: () => void;
    onImport: (run: Run) => void;
    onReset: () => void;
};

const DataModal: React.FC<DataModalProps> = ({
    accentColor,
    buttonTextColor,
    gameName,
    hasExistingRun,
    onClose,
    onExport,
    onImport,
    onReset,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const fileInputRef = useRef<HTMLInputElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeTab, setActiveTab] = useState<'export' | 'import' | 'reset'>(
        hasExistingRun ? 'export' : 'import'
    );
    const [importError, setImportError] = useState<string | null>(null);

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = hasExistingRun
        ? [
              { id: 'import', label: 'Import' },
              { id: 'export', label: 'Export' },
              { id: 'reset', label: 'Reset' },
          ]
        : [{ id: 'import', label: 'Import' }];

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const description =
        activeTab === 'import'
            ? `Upload a JSON file to overwrite your current data for ${gameName}. Your current run and personal best will be replaced and can't be recovered.`
            : activeTab === 'export'
              ? `This will download a JSON file containing all of your data for ${gameName}.`
              : `All data for ${gameName}, including your current run, personal best, and Hall of Fame count, will be deleted and can't be recovered.`;

    const confirmLabel =
        activeTab === 'import'
            ? 'Choose File'
            : activeTab === 'export'
              ? 'Export'
              : 'Reset Game';

    const confirmVariant = activeTab === 'reset' ? 'destructive' : 'accent';

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const isValidCaughtPokemon = (value: unknown): value is CaughtPokemon => {
        if (typeof value !== 'object' || value === null) {
            return false;
        }

        const pokemon = value as Record<string, unknown>;

        return (
            typeof pokemon.name === 'string' &&
            typeof pokemon.level === 'number' &&
            typeof pokemon.location === 'string' &&
            Object.values(PokemonStatus).includes(
                pokemon.status as PokemonStatus
            ) &&
            Array.isArray(pokemon.moves) &&
            pokemon.moves.every((move) => typeof move === 'string') &&
            Array.isArray(pokemon.tags) &&
            pokemon.tags.every((tag) => typeof tag === 'string') &&
            [1, 2, 3].includes(pokemon.ability as number)
        );
    };

    const isValidRun = (value: unknown): value is Run => {
        if (typeof value !== 'object' || value === null) {
            return false;
        }

        const run = value as Record<string, unknown>;

        return (
            typeof run.attempt === 'number' &&
            Array.isArray(run.defeatedBattles) &&
            run.defeatedBattles.every((battle) => typeof battle === 'string') &&
            typeof run.personalBest === 'string' &&
            typeof run.hallOfFameCount === 'number' &&
            typeof run.starter === 'string' &&
            Array.isArray(run.caughtPokemon) &&
            run.caughtPokemon.every(isValidCaughtPokemon) &&
            Array.isArray(run.missedLocations) &&
            run.missedLocations.every(
                (location) => typeof location === 'string'
            ) &&
            typeof run.wipe === 'boolean'
        );
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        setActiveTab(id as 'export' | 'import' | 'reset');
        setImportError(null);
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
        requestClose: () => void
    ): Promise<void> => {
        const file = event.target.files?.[0];
        event.target.value = '';
        if (!file) {
            return;
        }

        let parsed: unknown;
        try {
            parsed = JSON.parse(await file.text());
        } catch {
            setImportError('That file is not valid JSON.');
            return;
        }

        if (!isValidRun(parsed)) {
            setImportError(
                "That file doesn't match the expected run data format."
            );
            return;
        }

        setImportError(null);
        onImport(parsed);
        requestClose();
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
                    {importError && (
                        <p className={styles.error}>{importError}</p>
                    )}
                    <input
                        accept="application/json"
                        hidden
                        onChange={(event) =>
                            handleFileChange(event, requestClose)
                        }
                        ref={fileInputRef}
                        type="file"
                    />
                    <ConfirmActions
                        confirmLabel={confirmLabel}
                        onCancel={requestClose}
                        onConfirm={() => {
                            if (activeTab === 'import') {
                                fileInputRef.current?.click();
                            } else if (activeTab === 'export') {
                                onExport();
                                requestClose();
                            } else {
                                onReset();
                                requestClose();
                            }
                        }}
                        variant={confirmVariant}
                    />
                </>
            )}
        </Modal>
    );
};

export default DataModal;
