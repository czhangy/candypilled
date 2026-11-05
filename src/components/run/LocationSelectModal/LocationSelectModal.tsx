'use client';

import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import Modal from '@/components/common/Modal/Modal';
import { Game, Run } from '@/lib/static/types';
import RunHelpers from '@/lib/utils/RunHelpers';
import styles from './LocationSelectModal.module.scss';

type LocationSelectModalProps = {
    game: Game;
    onClose: () => void;
    onSelect: (location: string) => void;
    run: Run;
};

const LocationSelectModal: React.FC<LocationSelectModalProps> = ({
    game,
    onClose,
    onSelect,
    run,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedLocation, setSelectedLocation] = useState('');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const usedLocations = RunHelpers.getUsedLocations(run);
    const options = Object.values(game.metLocationById)
        .filter((name) => !usedLocations.includes(name))
        .map((name) => ({ label: name, value: name }));

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
