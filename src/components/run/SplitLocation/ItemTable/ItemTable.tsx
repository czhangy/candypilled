import { Fragment, useState } from 'react';
import Image from 'next/image';
import SectionToggle from '@/components/run/SplitLocation/SectionToggle/SectionToggle';
import { ItemCategory } from '@/lib/static/enums';
import { GameDataSource, LocationItem } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import styles from './ItemTable.module.scss';

type ItemTableProps = {
    dataSource: GameDataSource;
    items: LocationItem[];
};

const ItemTable: React.FC<ItemTableProps> = ({ dataSource, items }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type Row = {
        item: LocationItem;
        name: string;
        sprite: string;
    };

    const ITEM_ICON_SIZE = 24;

    const CATEGORY_ORDER = [
        ItemCategory.KeyItem,
        ItemCategory.HeldItem,
        ItemCategory.Consumable,
        ItemCategory.EvolutionItem,
        ItemCategory.PokeBall,
        ItemCategory.TmHm,
        ItemCategory.Berry,
    ];

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [collapsedCategories, setCollapsedCategories] = useState<
        ItemCategory[]
    >([]);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getCategoryRows = (category: ItemCategory): Row[] =>
        items
            .flatMap((item): Row[] => {
                const itemData = ItemHelpers.getHeldItemData(
                    dataSource,
                    item.slug
                );
                return itemData && item.category === category
                    ? [
                          {
                              item,
                              name: itemData.name,
                              sprite: itemData.sprite,
                          },
                      ]
                    : [];
            })
            .sort((a, b) => a.name.localeCompare(b.name));

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleCategoryToggle = (category: ItemCategory): void => {
        setCollapsedCategories((collapsed) =>
            collapsed.includes(category)
                ? collapsed.filter((other) => other !== category)
                : [...collapsed, category]
        );
    };

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
                    <col className={styles['col-item']} />
                    <col className={styles['col-found']} />
                </colgroup>
                <tbody>
                    {CATEGORY_ORDER.map((category) => {
                        const rows = getCategoryRows(category);
                        if (rows.length === 0) return null;

                        const isCollapsed =
                            collapsedCategories.includes(category);

                        return (
                            <Fragment key={category}>
                                <tr className={styles['category-row']}>
                                    <th colSpan={2}>
                                        <SectionToggle
                                            isCollapsed={isCollapsed}
                                            onToggle={() =>
                                                handleCategoryToggle(category)
                                            }
                                        >
                                            {category}
                                        </SectionToggle>
                                    </th>
                                </tr>
                                {!isCollapsed &&
                                    rows.map(
                                        ({ item, name, sprite }, rowIndex) => (
                                            <tr
                                                className={styles.row}
                                                key={`${item.slug}-${rowIndex}`}
                                            >
                                                <td>
                                                    <span
                                                        className={
                                                            styles['item-name']
                                                        }
                                                    >
                                                        <Image
                                                            alt={name}
                                                            height={
                                                                ITEM_ICON_SIZE
                                                            }
                                                            src={sprite}
                                                            width={
                                                                ITEM_ICON_SIZE
                                                            }
                                                        />
                                                        {item.count > 1
                                                            ? `${name} ×${item.count}`
                                                            : name}
                                                    </span>
                                                </td>
                                                <td
                                                    className={
                                                        styles['found-cell']
                                                    }
                                                >
                                                    <div
                                                        className={styles.found}
                                                    >
                                                        <span>
                                                            {item.method}
                                                        </span>
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
                                        )
                                    )}
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ItemTable;
