import SearchableList from '@/components/common/SearchableList/SearchableList';
import { GameDataSource } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import ItemDetail from './ItemDetail/ItemDetail';
import styles from './ItemsSubtab.module.scss';

type ItemsSubtabProps = {
    dataSource: GameDataSource;
    generation: number;
    onSelectItem: (slug: string) => void;
    selectedItem?: string;
};

const ItemsSubtab: React.FC<ItemsSubtabProps> = ({
    dataSource,
    generation,
    onSelectItem,
    selectedItem,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableItems = ItemHelpers.getBrowsableItems(
        dataSource,
        generation
    ).sort((a, b) => a.name.localeCompare(b.name));
    const effectiveItem = selectedItem ?? availableItems[0]?.slug ?? '';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['items-subtab']}>
            <SearchableList
                emptyMessage="No items found"
                items={availableItems}
                onSelectItem={onSelectItem}
                searchAriaLabel="Search items"
                searchPlaceholder="Search items..."
                selectedItem={effectiveItem}
                sortAlphabetically
            />
            <ItemDetail
                dataSource={dataSource}
                generation={generation}
                itemSlug={effectiveItem}
            />
        </div>
    );
};

export default ItemsSubtab;
