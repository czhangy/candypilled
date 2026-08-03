import Modal from '@/components/common/Modal/Modal';
import SearchableList from '@/components/common/SearchableList/SearchableList';
import { MOVES } from '@/lib/data/moves';
import styles from './MovePickerModal.module.scss';

type MovePickerModalProps = {
    generation: number;
    onClose: () => void;
    onSelect: (slug: string) => void;
    selectedMove?: string;
};

const MovePickerModal: React.FC<MovePickerModalProps> = ({
    generation,
    onClose,
    onSelect,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableMoves = Object.values(MOVES)
        .filter((move) => move.introducedInGeneration <= generation)
        .sort((a, b) => a.name.localeCompare(b.name));

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSelectMove = (slug: string, requestClose: () => void): void => {
        onSelect(slug);
        requestClose();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal onClose={onClose} title="Choose a Move">
            {(requestClose) => (
                <div className={styles['move-picker-modal']}>
                    <SearchableList
                        emptyMessage="No moves found"
                        items={availableMoves}
                        onSelectItem={(slug) =>
                            handleSelectMove(slug, requestClose)
                        }
                        searchAriaLabel="Search moves"
                        searchPlaceholder="Search moves..."
                        selectedItem={selectedMove}
                        sortAlphabetically={false}
                    />
                </div>
            )}
        </Modal>
    );
};

export default MovePickerModal;
