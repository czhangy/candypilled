'use client';

import Modal from '@/components/common/Modal/Modal';
import { Game } from '@/lib/static/types';
import styles from './GenderSelectModal.module.scss';

type GenderSelectModalProps = {
    game: Game;
    onClose: () => void;
    onSelect: (gender: 'male' | 'female') => void;
};

const GenderSelectModal: React.FC<GenderSelectModalProps> = ({
    game,
    onClose,
    onSelect,
}) => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleGenderClick = (gender: 'male' | 'female'): void => {
        onSelect(gender);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={game.accentColor}
            buttonTextColor={game.textContrastColor}
            maxWidth="24rem"
            onClose={onClose}
            title="Choose your protagonist"
        >
            {() => (
                <div className={styles['gender-select-modal']}>
                    <button
                        className={styles.gender}
                        onClick={() => handleGenderClick('male')}
                        type="button"
                    >
                        Male
                    </button>
                    <button
                        className={styles.gender}
                        onClick={() => handleGenderClick('female')}
                        type="button"
                    >
                        Female
                    </button>
                </div>
            )}
        </Modal>
    );
};

export default GenderSelectModal;
