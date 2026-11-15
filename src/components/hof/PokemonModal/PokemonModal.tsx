'use client';

import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import styles from './PokemonModal.module.scss';

type PokemonModalProps = {
    dexNumber: number;
    groups: {
        champed: boolean;
        name: string;
        sprite: string | undefined;
        version: string;
    }[];
    name: string;
    onClose: () => void;
};

const PokemonModal: React.FC<PokemonModalProps> = ({
    dexNumber,
    groups,
    name,
    onClose,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MAX_WIDTH = '36rem';
    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            maxWidth={MAX_WIDTH}
            onClose={onClose}
            title={`#${String(dexNumber).padStart(3, '0')} ${name}`}
        >
            {() => (
                <ul className={styles['pokemon-modal']}>
                    {groups.map((group) => (
                        <li
                            className={[
                                styles['pokemon-modal__group'],
                                !group.champed &&
                                    styles['pokemon-modal__group--unchamped'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            key={group.version}
                        >
                            <div className={styles['pokemon-modal__sprite']}>
                                {group.sprite && (
                                    <Image
                                        alt={group.champed ? name : ''}
                                        height={SPRITE_SIZE}
                                        src={group.sprite}
                                        width={SPRITE_SIZE}
                                    />
                                )}
                            </div>
                            <span className={styles['pokemon-modal__game']}>
                                {group.name}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </Modal>
    );
};

export default PokemonModal;
