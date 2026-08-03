import Modal from '@/components/common/Modal/Modal';
import SearchableList from '@/components/common/SearchableList/SearchableList';
import { ITEMS } from '@/lib/data/items';
import styles from './ItemPickerModal.module.scss';

type ItemPickerModalProps = {
    generation: number;
    onClose: () => void;
    onSelect: (slug: string | undefined) => void;
    selectedItem?: string;
};

const ItemPickerModal: React.FC<ItemPickerModalProps> = ({
    generation,
    onClose,
    onSelect,
    selectedItem,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Sentinel value for the "no held item" option, since `SearchableList`
    // identifies items by a non-empty slug.
    const NONE_SLUG = 'none';

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableItems = [
        { name: 'None', slug: NONE_SLUG },
        ...Object.values(ITEMS)
            .filter(
                (item) =>
                    item.introducedInGeneration <= generation &&
                    (item.removedInGeneration === undefined ||
                        generation < item.removedInGeneration)
            )
            .sort((a, b) => a.name.localeCompare(b.name)),
    ];

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSelectItem = (slug: string, requestClose: () => void): void => {
        onSelect(slug === NONE_SLUG ? undefined : slug);
        requestClose();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal onClose={onClose} title="Choose a Held Item">
            {(requestClose) => (
                <div className={styles['item-picker-modal']}>
                    <SearchableList
                        emptyMessage="No items found"
                        items={availableItems}
                        onSelectItem={(slug) =>
                            handleSelectItem(slug, requestClose)
                        }
                        searchAriaLabel="Search items"
                        searchPlaceholder="Search items..."
                        selectedItem={selectedItem ?? NONE_SLUG}
                        sortAlphabetically={false}
                    />
                </div>
            )}
        </Modal>
    );
};

export default ItemPickerModal;
