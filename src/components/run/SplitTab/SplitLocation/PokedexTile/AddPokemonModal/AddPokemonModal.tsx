'use client';

import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import Modal from '@/components/common/Modal/Modal';
import { CaughtPokemon, DropdownOption, PokemonData } from '@/lib/static/types';
import styles from './AddPokemonModal.module.scss';
import PokemonForm from './PokemonForm/PokemonForm';

type AddPokemonModalProps = {
    accentColor?: string;
    allLocations: string[];
    allSpecies: PokemonData[];
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
            | 'gender'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
            | 'tags'
        >,
        location: string
    ) => void;
    showLocation: boolean;
    version: string;
};

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({
    accentColor,
    allLocations,
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

    const handleLocationChange = (value: string): void => {
        setLocation(value);
    };

    const handleFormSubmit = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
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

    const locationOptions: DropdownOption[] = allLocations
        .filter((name) => !existingLocations.includes(name))
        .map((name) => ({ label: name, value: name }));
    const disabledReason = showLocation && !location ? 'Select a location' : '';

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
                            <span className={styles.label}>Location</span>
                            <Dropdown
                                onChange={handleLocationChange}
                                options={locationOptions}
                                searchable
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
                        showHeldItem={false}
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
