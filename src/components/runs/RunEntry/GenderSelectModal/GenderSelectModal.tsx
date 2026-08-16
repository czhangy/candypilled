'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import { Game } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './GenderSelectModal.module.scss';

type GenderSelectModalProps = {
    game: Game;
    genders: { male: string; female: string };
    onClose: () => void;
    onSelect: (gender: 'male' | 'female') => void;
};

const GenderSelectModal: React.FC<GenderSelectModalProps> = ({
    game,
    genders,
    onClose,
    onSelect,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeGender, setActiveGender] = useState<'male' | 'female' | null>(
        null
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleGenderClick = (gender: 'male' | 'female'): void => {
        setActiveGender(gender);
    };

    const handleSelectClick = (): void => {
        if (!activeGender) return;
        onSelect(activeGender);
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
            title="Choose your gender"
        >
            {() => (
                <div className={styles['gender-select-modal']}>
                    <div className={styles.genders}>
                        {(['male', 'female'] as const).map((gender) => (
                            <button
                                className={[
                                    styles.gender,
                                    gender === activeGender &&
                                        styles['gender--selected'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={gender}
                                onClick={() => handleGenderClick(gender)}
                                type="button"
                            >
                                <Image
                                    alt={StringHelpers.toTitleCase(gender)}
                                    height={SPRITE_SIZE}
                                    src={genders[gender]}
                                    width={SPRITE_SIZE}
                                />
                            </button>
                        ))}
                    </div>
                    <div className={styles.footer}>
                        <button
                            className={styles.select}
                            disabled={!activeGender}
                            onClick={handleSelectClick}
                            type="button"
                        >
                            SELECT
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default GenderSelectModal;
