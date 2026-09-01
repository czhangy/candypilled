'use client';

import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import Modal from '@/components/common/Modal/Modal';
import { DropdownOption, Game } from '@/lib/static/types';
import styles from './LocationSelectModal.module.scss';

type LocationSelectModalProps = {
    game: Game;
    onClose: () => void;
    onSelect: (location: string) => void;
    options: DropdownOption[];
};

const LocationSelectModal: React.FC<LocationSelectModalProps> = ({
    game,
    onClose,
    onSelect,
    options,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedLocation, setSelectedLocation] = useState('');

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleConfirmClick = (requestClose: () => void): void => {
        if (!selectedLocation) return;
        onSelect(selectedLocation);
        requestClose();
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
            title="Select Location"
        >
            {(requestClose) => (
                <div className={styles['location-select-modal']}>
                    <Dropdown
                        onChange={setSelectedLocation}
                        options={options}
                        placeholder="Select location…"
                        searchable
                        value={selectedLocation}
                    />
                    <div className={styles.footer}>
                        <button
                            className={styles['confirm-button']}
                            disabled={!selectedLocation}
                            onClick={() => handleConfirmClick(requestClose)}
                            type="button"
                        >
                            CONFIRM
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default LocationSelectModal;
