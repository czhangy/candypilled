import Modal from '@/components/common/Modal/Modal';
import SearchableList from '@/components/common/SearchableList/SearchableList';
import { GameDataSource, MoveSlug } from '@/lib/static/types';
import styles from './MovePickerModal.module.scss';

type MovePickerModalProps = {
    dataSource: GameDataSource;
    generation: number;
    onClose: () => void;
    onSelect: (slug: MoveSlug) => void;
    selectedMove?: MoveSlug;
};

const MovePickerModal: React.FC<MovePickerModalProps> = ({
    dataSource,
    generation,
    onClose,
    onSelect,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableMoves = Object.values(dataSource.moves)
        .filter((move) => move.introducedInGeneration <= generation)
        .sort((a, b) => a.name.localeCompare(b.name));

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSelectMove = (slug: string, requestClose: () => void): void => {
        onSelect(slug as MoveSlug);
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
