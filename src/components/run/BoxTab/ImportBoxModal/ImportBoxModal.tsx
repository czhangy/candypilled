'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { BoxImportError, CaughtPokemon, Game } from '@/lib/static/types';
import styles from './ImportBoxModal.module.scss';

type ImportBoxModalProps = {
    accentColor?: string;
    buttonTextColor?: string;
    game: Game;
    onClose: () => void;
    onSubmit: (pokemon: CaughtPokemon[]) => void;
};

const ImportBoxModal: React.FC<ImportBoxModalProps> = ({
    accentColor,
    buttonTextColor,
    game,
    onClose,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for BoxTab's call signature; never fires since import always fails
    onSubmit,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [files, setFiles] = useState<File[]>([]);
    const [errors, setErrors] = useState<BoxImportError[]>([]);
    const [isImporting, setIsImporting] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleFilesChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFiles(Array.from(event.target.files ?? []));
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        setIsImporting(true);

        const importErrors: BoxImportError[] = files.map((file) => ({
            fileName: file.name,
            message: `Box import is not currently supported for ${game.name}.`,
        }));

        setIsImporting(false);
        setErrors(importErrors);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title="Import Box"
        >
            {() => (
                <form
                    className={styles['import-box-modal']}
                    onSubmit={handleSubmit}
                >
                    <p className={styles.hint}>
                        Export each Pokémon from{' '}
                        <a
                            href="https://github.com/kwsch/PKHeX"
                            rel="noreferrer"
                            target="_blank"
                        >
                            PKHeX
                        </a>
                        &apos;s box view as a <code></code> file, then select
                        them all below.
                    </p>
                    <p className={styles.warning}>
                        Each imported Pokémon replaces whatever is already
                        recorded at its catch location; new locations are added.
                        This can&apos;t be undone.
                    </p>
                    <input
                        accept=""
                        className={styles['file-input']}
                        multiple
                        onChange={handleFilesChange}
                        type="file"
                    />
                    {files.length > 0 && (
                        <ul className={styles['file-list']}>
                            {files.map((file) => (
                                <li key={file.name}>{file.name}</li>
                            ))}
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
                            disabled={files.length === 0 || isImporting}
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

export default ImportBoxModal;
