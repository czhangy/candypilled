'use client';

import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import Modal from '@/components/common/Modal/Modal';
import { DropdownOption, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './WipeSelectModal.module.scss';

type WipeSelectModalProps = {
    game: Game;
    gender: 'male' | 'female';
    onClose: () => void;
    onSelect: (battleKey: string) => void;
};

const WipeSelectModal: React.FC<WipeSelectModalProps> = ({
    game,
    gender,
    onClose,
    onSelect,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedBattleKey, setSelectedBattleKey] = useState('');

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleConfirmClick = (requestClose: () => void): void => {
        if (!selectedBattleKey) return;
        onSelect(selectedBattleKey);
        requestClose();
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const options: DropdownOption[] = BattleHelpers.getAllBattles(
        game,
        gender
    ).map((battle) => ({
        label: BattleHelpers.getFullName(battle, game),
        value: BattleHelpers.getBattleKey(battle),
    }));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={game.accentColor}
            buttonTextColor={game.textContrastColor}
            maxWidth="24rem"
            onClose={onClose}
            title="Who did you wipe to?"
        >
            {(requestClose) => (
                <div className={styles['wipe-select-modal']}>
                    <Dropdown
                        onChange={setSelectedBattleKey}
                        options={options}
                        placeholder="Select trainer…"
                        searchable
                        value={selectedBattleKey}
                    />
                    <div className={styles.footer}>
                        <button
                            className={styles['confirm-button']}
                            disabled={!selectedBattleKey}
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

export default WipeSelectModal;
