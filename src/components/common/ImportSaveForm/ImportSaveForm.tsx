'use client';

import { useState } from 'react';
import SaveFileParser from '@/lib/parsers/SaveFileParser';
import { CaughtPokemon, Game, SaveImportError } from '@/lib/static/types';
import styles from './ImportSaveForm.module.scss';

type ImportSaveFormProps = {
    game: Game;
    onImport: (pokemon: CaughtPokemon[], completedSplits: string[]) => void;
    requestClose: () => void;
};

const ImportSaveForm: React.FC<ImportSaveFormProps> = ({
    game,
    onImport,
    requestClose,
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
            const { pokemon, completedSplits } = SaveFileParser.parse(
                game,
                buffer
            );
            onImport(pokemon, completedSplits);
            requestClose();
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
        <form className={styles['import-save-form']} onSubmit={handleSubmit}>
            <p className={styles.hint}>
                Select your {game.name} <code>.sav</code> file to import every
                Pokémon in its party and PC boxes, and every split it reports as
                finished.
            </p>
            <p className={styles.warning}>
                Each imported Pokémon replaces whatever is already recorded at
                its catch location, unless that location is marked dead; new
                locations are added. Every split the save can resolve is set to
                match it exactly. This can&apos;t be undone.
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
                            <strong>{error.fileName}</strong>: {error.message}
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
    );
};

export default ImportSaveForm;
