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

    const POKE_BALL_ORDER = [
        'poke-ball',
        'great-ball',
        'ultra-ball',
        'master-ball',
        'premier-ball',
        'net-ball',
        'dive-ball',
        'nest-ball',
        'repeat-ball',
        'timer-ball',
        'luxury-ball',
        'dusk-ball',
        'heal-ball',
        'quick-ball',
        'level-ball',
        'lure-ball',
        'moon-ball',
        'love-ball',
        'heavy-ball',
        'fast-ball',
        'friend-ball',
        'safari-ball',
        'park-ball',
        'sport-ball',
        'dream-ball',
        'beast-ball',
        'cherish-ball',
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

    const compareRows = (category: ItemCategory, a: Row, b: Row): number =>
        category === ItemCategory.PokeBall
            ? POKE_BALL_ORDER.indexOf(a.item.slug) -
              POKE_BALL_ORDER.indexOf(b.item.slug)
            : a.name.localeCompare(b.name);

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
            .sort((a: Row, b: Row) => compareRows(category, a, b));

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
