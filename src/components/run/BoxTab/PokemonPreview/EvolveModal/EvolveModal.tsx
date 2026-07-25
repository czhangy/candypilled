'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import { EvolutionStep } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EvolveModal.module.scss';

type EvolveModalProps = {
    accentColor: string;
    evolutions: EvolutionStep[];
    onClose: () => void;
    onConfirm: (newSlug: string) => void;
    pokemonSlug: string;
    variant: string;
};

const EvolveModal: React.FC<EvolveModalProps> = ({
    accentColor,
    evolutions,
    onClose,
    onConfirm,
    pokemonSlug,
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
        const formSlugs = evolutions.flatMap((step) =>
            PokemonHelpers.getPokemonForms(step.slug)
        );
        return formSlugs.length === 1 ? formSlugs[0] : undefined;
    });

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const displayName =
        PokemonHelpers.getPokemonData(pokemonSlug)?.name ?? pokemonSlug;
    // A step's slug is ambiguous when it doesn't resolve to its own entry
    // (e.g. "wormadam", whose actual form depends on Burmy's cloak, which
    // the evolution chain doesn't track), so it's expanded into one
    // selectable option per form instead of one option per step.
    const formSlugs = evolutions.flatMap((step) =>
        PokemonHelpers.getPokemonForms(step.slug)
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleOptionClick = (slug: string): void => {
        setSelected(slug);
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
                        {formSlugs.map((formSlug) => {
                            const formName =
                                PokemonHelpers.getPokemonData(formSlug)?.name ??
                                formSlug;
                            const sprite = PokemonHelpers.getPokemonSprite(
                                formSlug,
                                variant
                            );

                            return (
                                <button
                                    className={[
                                        styles.option,
                                        formSlug === selected &&
                                            styles['option--selected'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    key={formSlug}
                                    onClick={() => handleOptionClick(formSlug)}
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
