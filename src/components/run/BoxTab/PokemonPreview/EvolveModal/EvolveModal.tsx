'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import { EvolutionStep } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './EvolveModal.module.scss';

interface EvolveModalProps {
    accentColor: string;
    evolutions: EvolutionStep[];
    onClose: () => void;
    onConfirm: (newName: string) => void;
    pokemonName: string;
    variant: string;
}

const EvolveModal: React.FC<EvolveModalProps> = ({
    accentColor,
    evolutions,
    onClose,
    onConfirm,
    pokemonName,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 72;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selected, setSelected] = useState<string | undefined>(
        evolutions.length === 1 ? evolutions[0].name : undefined
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const displayName = StringHelpers.toTitleCase(
        PokemonHelpers.get(pokemonName)?.name ?? pokemonName
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleOptionClick = (name: string): void => {
        setSelected(name);
    };

    const handleConfirmClick = (): void => {
        if (selected) onConfirm(selected);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            onClose={onClose}
            title={`Evolve ${displayName}?`}
        >
            <div className={styles['evolve-modal']}>
                <div className={styles.options}>
                    {evolutions.map((evolution) => {
                        const sprite = PokemonHelpers.getSprite(
                            evolution.name,
                            variant
                        );

                        return (
                            <button
                                className={[
                                    styles.option,
                                    evolution.name === selected &&
                                        styles['option--selected'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={evolution.name}
                                onClick={() =>
                                    handleOptionClick(evolution.name)
                                }
                                type="button"
                            >
                                <div className={styles.sprite}>
                                    {sprite && (
                                        <Image
                                            alt={evolution.name}
                                            height={SPRITE_SIZE}
                                            src={sprite}
                                            width={SPRITE_SIZE}
                                        />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className={styles['confirm-actions']}>
                    <button
                        className={styles.cancel}
                        onClick={onClose}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.confirm}
                        disabled={!selected}
                        onClick={handleConfirmClick}
                        type="button"
                    >
                        Evolve
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default EvolveModal;
