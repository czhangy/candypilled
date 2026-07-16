'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { BattlePokemon } from '@/lib/static/types';
import styles from './AddPokemonModal.module.scss';
import PokemonForm from './PokemonForm/PokemonForm';

interface AddPokemonModalProps {
    accentColor?: string;
    allSpecies: string[];
    defaultLevel?: number;
    defaultLocation: string;
    defaultSpecies: string;
    existingLocations: string[];
    generation: number;
    onClose: () => void;
    onSubmit: (
        details: Pick<
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >,
        location: string
    ) => void;
    realLocations: string[];
    showLocation: boolean;
}

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({
    accentColor,
    allSpecies,
    defaultLevel,
    defaultLocation,
    defaultSpecies,
    existingLocations,
    generation,
    onClose,
    onSubmit,
    realLocations,
    showLocation,
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
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ): void => {
        onSubmit(details, location);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const isDuplicateCaughtLocation =
        showLocation && existingLocations.includes(location);
    const isRealLocationName = showLocation && realLocations.includes(location);
    const disabledReason = isDuplicateCaughtLocation
        ? 'A Pokemon is already recorded at this location.'
        : isRealLocationName
          ? "This is a real location in the game — catch it from that location's Pokedex tile instead."
          : '';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal accentColor={accentColor} onClose={onClose} title="Add Pokemon">
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
                    onSubmit={handleFormSubmit}
                    showAbility
                    showEvs={false}
                    showLevel
                    showMoves
                    submitLabel="Add"
                />
            </div>
        </Modal>
    );
};

export default AddPokemonModal;
