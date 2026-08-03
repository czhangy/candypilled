'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { Game } from '@/lib/static/types';
import NotesHelpers from '@/lib/utils/NotesHelpers';
import styles from './BattleNotesModal.module.scss';

type BattleNotesModalProps = {
    accentColor: string;
    battleKey: string;
    buttonTextColor?: string;
    game: Game;
    onClose: () => void;
};

const BattleNotesModal: React.FC<BattleNotesModalProps> = ({
    accentColor,
    battleKey,
    buttonTextColor,
    game,
    onClose,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [note, setNote] = useState(() =>
        NotesHelpers.getNote(game, battleKey)
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleNoteChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setNote(event.target.value);
    };

    const handleSaveButtonClick = (requestClose: () => void): void => {
        NotesHelpers.saveNote(game, battleKey, note);
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
            title="Add Notes"
        >
            {(requestClose) => (
                <div className={styles['battle-notes-modal']}>
                    <textarea
                        className={styles.textarea}
                        onChange={handleNoteChange}
                        value={note}
                    />
                    <div className={styles.footer}>
                        <button
                            className={styles['save-button']}
                            onClick={() => handleSaveButtonClick(requestClose)}
                            type="button"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default BattleNotesModal;
