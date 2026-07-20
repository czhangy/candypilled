'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { CaughtPokemon } from '@/lib/static/types';
import styles from './AddPokemonModal.module.scss';
import PokemonForm from './PokemonForm/PokemonForm';

type AddPokemonModalProps = {
    accentColor?: string;
    allSpecies: string[];
    buttonTextColor?: string;
    defaultLevel?: number;
    defaultLocation: string;
    defaultSpecies: string;
    existingLocations: string[];
    generation: number;
    onClose: () => void;
    onSubmit: (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >,
        location: string
    ) => void;
    showLocation: boolean;
    version: string;
};

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({
    accentColor,
    allSpecies,
    buttonTextColor,
    defaultLevel,
    defaultLocation,
    defaultSpecies,
    existingLocations,
    generation,
    onClose,
    onSubmit,
    showLocation,
    version,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [location, setLocation] = useState(defaultLocation);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleLocationChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setLocation(event.target.value);
    };

    const handleFormSubmit = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >,
        requestClose: () => void
    ): void => {
        onSubmit(details, location);
        requestClose();
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const isDuplicateCaughtLocation =
        showLocation && existingLocations.includes(location);
    const disabledReason = isDuplicateCaughtLocation
        ? 'A Pokémon is already recorded at this location'
        : '';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title="Add Pokémon"
        >
            {(requestClose) => (
                <div className={styles['add-pokemon-modal']}>
                    {showLocation && (
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="location">
                                Location
                            </label>
                            <input
                                className={styles.input}
                                id="location"
                                onChange={handleLocationChange}
                                type="text"
                                value={location}
                            />
                        </div>
                    )}
                    <PokemonForm
                        allSpecies={allSpecies}
                        defaultLevel={defaultLevel}
                        defaultSpecies={defaultSpecies}
                        disabledReason={disabledReason}
                        generation={generation}
                        lockSpecies={false}
                        onSubmit={(details) =>
                            handleFormSubmit(details, requestClose)
                        }
                        recalculateMovesOnLevelChange
                        showAbility
                        showEvs={false}
                        showLevel
                        showMoves
                        showTags
                        submitLabel="Add"
                        version={version}
                    />
                </div>
            )}
        </Modal>
    );
};

export default AddPokemonModal;
