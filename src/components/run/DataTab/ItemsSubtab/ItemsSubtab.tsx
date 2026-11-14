import SearchableList from '@/components/common/SearchableList/SearchableList';
import { Game, ItemData } from '@/lib/static/types';
import ItemDetail from './ItemDetail/ItemDetail';
import styles from './ItemsSubtab.module.scss';

type ItemsSubtabProps = {
    game: Game;
    items: ItemData[];
    // Plural noun for what's listed, used in the search labels.
    noun: string;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    selectedItem?: string;
    showDescription: boolean;
};

const ItemsSubtab: React.FC<ItemsSubtabProps> = ({
    game,
    items,
    noun,
    onSelectItem,
    onSelectLocation,
    selectedItem,
    showDescription,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableItems = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
    const effectiveItem = selectedItem ?? availableItems[0]?.slug ?? '';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['items-subtab']}>
            <SearchableList
                emptyMessage={`No ${noun} found`}
                items={availableItems}
                onSelectItem={onSelectItem}
                searchAriaLabel={`Search ${noun}`}
                searchPlaceholder={`Search ${noun}...`}
                selectedItem={effectiveItem}
                sortAlphabetically
            />
            <ItemDetail
                game={game}
                itemSlug={effectiveItem}
                onSelectLocation={onSelectLocation}
                showDescription={showDescription}
            />
        </div>
    );
};

export default ItemsSubtab;
