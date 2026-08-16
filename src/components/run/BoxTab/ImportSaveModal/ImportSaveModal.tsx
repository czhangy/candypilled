'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import SaveFileParser from '@/lib/parsers/SaveFileParser';
import { CaughtPokemon, Game, SaveImportError } from '@/lib/static/types';
import styles from './ImportSaveModal.module.scss';

type ImportSaveModalProps = {
    accentColor?: string;
    buttonTextColor?: string;
    game: Game;
    onClose: () => void;
    onSubmit: (pokemon: CaughtPokemon[]) => void;
};

const ImportSaveModal: React.FC<ImportSaveModalProps> = ({
    accentColor,
    buttonTextColor,
    game,
    onClose,
    onSubmit,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [file, setFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<SaveImportError[]>([]);
    const [isImporting, setIsImporting] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFile(event.target.files?.[0] ?? null);
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        if (!file) return;

        setIsImporting(true);
        setErrors([]);

        try {
            const buffer = await file.arrayBuffer();
            const pokemon = SaveFileParser.parse(game, buffer);
            onSubmit(pokemon);
            onClose();
        } catch (error) {
            setErrors([
                {
                    fileName: file.name,
                    message:
                        error instanceof Error
                            ? error.message
                            : `Couldn't read this save file.`,
                },
            ]);
        } finally {
            setIsImporting(false);
        }
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title="Import Save"
        >
            {() => (
                <form
                    className={styles['import-save-modal']}
                    onSubmit={handleSubmit}
                >
                    <p className={styles.hint}>
                        Select your {game.name} <code>.sav</code> file to import
                        every Pokémon in its party and PC boxes.
                    </p>
                    <p className={styles.warning}>
                        Each imported Pokémon replaces whatever is already
                        recorded at its catch location, unless that location is
                        marked dead; new locations are added. This can&apos;t be
                        undone.
                    </p>
                    <input
                        accept=".sav"
                        className={styles['file-input']}
                        onChange={handleFileChange}
                        type="file"
                    />
                    {file && (
                        <ul className={styles['file-list']}>
                            <li>{file.name}</li>
                        </ul>
                    )}
                    {errors.length > 0 && (
                        <ul className={styles.errors}>
                            {errors.map((error, index) => (
                                <li key={index}>
                                    <strong>{error.fileName}</strong>:{' '}
                                    {error.message}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className={styles.footer}>
                        <button
                            className={styles['submit-button']}
                            disabled={!file || isImporting}
                            type="submit"
                        >
                            {isImporting ? 'Importing…' : 'Import'}
                        </button>
                    </div>
                </form>
            )}
        </Modal>
    );
};

export default ImportSaveModal;
