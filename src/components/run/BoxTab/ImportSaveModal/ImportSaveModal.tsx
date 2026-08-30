'use client';

import ImportSaveForm from '@/components/common/ImportSaveForm/ImportSaveForm';
import Modal from '@/components/common/Modal/Modal';
import { CaughtPokemon, Game } from '@/lib/static/types';

type ImportSaveModalProps = {
    accentColor?: string;
    buttonTextColor?: string;
    game: Game;
    onClose: () => void;
    onSubmit: (
        pokemon: CaughtPokemon[],
        completedSplits: string[],
        gender: 'male' | 'female'
    ) => void;
};

const ImportSaveModal: React.FC<ImportSaveModalProps> = ({
    accentColor,
    buttonTextColor,
    game,
    onClose,
    onSubmit,
}) => (
    <Modal
        accentColor={accentColor}
        buttonTextColor={buttonTextColor}
        onClose={onClose}
        title="Import Save"
    >
        {(requestClose) => (
            <ImportSaveForm
                game={game}
                onImport={onSubmit}
                requestClose={requestClose}
            />
        )}
    </Modal>
);

export default ImportSaveModal;
