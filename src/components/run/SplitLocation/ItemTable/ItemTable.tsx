import { Fragment } from 'react';
import Image from 'next/image';
import { ItemCategory } from '@/lib/static/enums';
import { GameDataSource, LocationItem } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import styles from './ItemTable.module.scss';

type ItemTableProps = {
    collectedItems: string[];
    dataSource: GameDataSource;
    items: LocationItem[];
    keyPrefix: string;
    onToggleItem: (itemKey: string) => void;
};

const ItemTable: React.FC<ItemTableProps> = ({
    collectedItems,
    dataSource,
    items,
    keyPrefix,
    onToggleItem,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type Row = {
        index: number;
        item: LocationItem;
        name: string;
        sprite: string;
    };

    const ITEM_ICON_SIZE = 24;

    const CATEGORY_ORDER = [
        ItemCategory.KeyItem,
        ItemCategory.HeldItem,
        ItemCategory.Consumable,
        ItemCategory.TmHm,
        ItemCategory.Berry,
    ];

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // `index` is the item's position in the source list, which the saved
    // tracking key is built from, so it must survive the alphabetical sort.
    const getCategoryRows = (category: ItemCategory): Row[] =>
        items
            .flatMap((item, index): Row[] => {
                const itemData = ItemHelpers.getHeldItemData(
                    dataSource,
                    item.slug
                );
                return itemData && item.category === category
                    ? [
                          {
                              index,
                              item,
                              name: itemData.name,
                              sprite: itemData.sprite,
                          },
                      ]
                    : [];
            })
            .sort((a, b) => a.name.localeCompare(b.name));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['item-table-wrapper']}>
            <div className={styles.header}>
                <span className={styles.label}>Items</span>
            </div>
            <table className={styles['item-table']}>
                <colgroup>
                    <col className={styles['col-check']} />
                    <col className={styles['col-item']} />
                    <col className={styles['col-found']} />
                </colgroup>
                <tbody>
                    {CATEGORY_ORDER.map((category) => {
                        const rows = getCategoryRows(category);
                        if (rows.length === 0) return null;

                        return (
                            <Fragment key={category}>
                                <tr className={styles['category-row']}>
                                    <th colSpan={3}>{category}</th>
                                </tr>
                                {rows.map(({ index, item, name, sprite }) => {
                                    const itemKey = `${keyPrefix}/${index}`;
                                    const isCollected =
                                        collectedItems.includes(itemKey);

                                    return (
                                        <tr
                                            className={[
                                                styles.row,
                                                isCollected &&
                                                    styles['row--collected'],
                                            ]
                                                .filter(Boolean)
                                                .join(' ')}
                                            key={itemKey}
                                        >
                                            <td>
                                                <input
                                                    aria-label={`Collected ${name}`}
                                                    checked={isCollected}
                                                    className={styles.checkbox}
                                                    onChange={() =>
                                                        onToggleItem(itemKey)
                                                    }
                                                    type="checkbox"
                                                />
                                            </td>
                                            <td>
                                                <span
                                                    className={
                                                        styles['item-name']
                                                    }
                                                >
                                                    <Image
                                                        alt={name}
                                                        height={ITEM_ICON_SIZE}
                                                        src={sprite}
                                                        width={ITEM_ICON_SIZE}
                                                    />
                                                    {item.count > 1
                                                        ? `${name} ×${item.count}`
                                                        : name}
                                                </span>
                                            </td>
                                            <td>
                                                <div className={styles.found}>
                                                    <span>{item.method}</span>
                                                    {item.hidden && (
                                                        <span
                                                            className={
                                                                styles[
                                                                    'found__hidden'
                                                                ]
                                                            }
                                                        >
                                                            Hidden
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ItemTable;
