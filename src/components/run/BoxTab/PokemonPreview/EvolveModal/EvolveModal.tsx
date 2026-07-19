'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import { EvolutionStep } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './EvolveModal.module.scss';

type EvolveModalProps = {
    accentColor: string;
    evolutions: EvolutionStep[];
    onClose: () => void;
    onConfirm: (newName: string) => void;
    pokemonName: string;
    variant: string;
};

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

    const [selected, setSelected] = useState<string | undefined>(() => {
        const formNames = evolutions.flatMap((step) =>
            PokemonHelpers.getPokemonForms(step.name)
        );
        return formNames.length === 1 ? formNames[0] : undefined;
    });

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const displayName = StringHelpers.toTitleCase(
        PokemonHelpers.getPokemonData(pokemonName)?.name ?? pokemonName
    );
    // A step's name is ambiguous when it doesn't resolve to its own entry
    // (e.g. "wormadam", whose actual form depends on Burmy's cloak, which
    // the evolution chain doesn't track), so it's expanded into one
    // selectable option per form instead of one option per step.
    const formNames = evolutions.flatMap((step) =>
        PokemonHelpers.getPokemonForms(step.name)
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleOptionClick = (name: string): void => {
        setSelected(name);
    };

    const handleConfirmClick = (requestClose: () => void): void => {
        if (!selected) return;
        onConfirm(selected);
        requestClose();
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
            {(requestClose) => (
                <div className={styles['evolve-modal']}>
                    <div className={styles.options}>
                        {formNames.map((formName) => {
                            const sprite = PokemonHelpers.getPokemonSprite(
                                formName,
                                variant
                            );

                            return (
                                <button
                                    className={[
                                        styles.option,
                                        formName === selected &&
                                            styles['option--selected'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    key={formName}
                                    onClick={() => handleOptionClick(formName)}
                                    type="button"
                                >
                                    <div className={styles.sprite}>
                                        {sprite && (
                                            <Image
                                                alt={formName}
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
                            onClick={requestClose}
                            type="button"
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.confirm}
                            disabled={!selected}
                            onClick={() => handleConfirmClick(requestClose)}
                            type="button"
                        >
                            Evolve
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default EvolveModal;
