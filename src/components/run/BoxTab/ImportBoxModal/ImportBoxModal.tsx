'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { BoxImportError, CaughtPokemon, Game } from '@/lib/static/types';
import BoxImportHelpers from '@/lib/utils/BoxImportHelpers';
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

    const handleSubmit = async (
        event: React.FormEvent,
        requestClose: () => void
    ): Promise<void> => {
        event.preventDefault();
        setIsImporting(true);

        const result = await BoxImportHelpers.parseFiles(files, game);
        setIsImporting(false);

        if (!result.success) {
            setErrors(result.errors);
            return;
        }

        setErrors([]);
        onSubmit(result.pokemon);
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
            title="Import Box"
        >
            {(requestClose) => (
                <form
                    className={styles['import-box-modal']}
                    onSubmit={(event) => handleSubmit(event, requestClose)}
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
                        &apos;s box view as a{' '}
                        <code>{BoxImportHelpers.getFileExtension(game)}</code>{' '}
                        file, then select them all below.
                    </p>
                    <p className={styles.warning}>
                        Each imported Pokémon replaces whatever is already
                        recorded at its catch location; new locations are added.
                        This can&apos;t be undone.
                    </p>
                    <input
                        accept={BoxImportHelpers.getFileExtension(game)}
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
