'use client';

import { useState } from 'react';
import HighlightedText from '@/components/common/HighlightedText/HighlightedText';
import styles from './SearchableList.module.scss';

type SearchableListProps = {
    emptyMessage: string;
    // `slug` is the selection identity (returned by `onSelectItem` and
    // compared against `selectedItem`); `name` is the searched/displayed
    // text.
    items: { name: string; slug: string }[];
    onSelectItem: (slug: string) => void;
    searchAriaLabel: string;
    searchPlaceholder: string;
    selectedItem?: string;
    // Whether matching items are re-sorted alphabetically, or left in the
    // order items was given (e.g. dex number order).
    sortAlphabetically: boolean;
};

const SearchableList: React.FC<SearchableListProps> = ({
    emptyMessage,
    items,
    onSelectItem,
    searchAriaLabel,
    searchPlaceholder,
    selectedItem,
    sortAlphabetically,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [query, setQuery] = useState('');

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setQuery(event.target.value);
    };

    const handleItemClick = (slug: string): void => {
        onSelectItem(slug);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const normalizedQuery = query.trim().toLowerCase();
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(normalizedQuery)
    );
    const visibleItems = sortAlphabetically
        ? [...filteredItems].sort((a, b) => a.name.localeCompare(b.name))
        : filteredItems;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['searchable-list']}>
            <div className={styles.search}>
                <input
                    aria-label={searchAriaLabel}
                    className={styles['search-input']}
                    onChange={handleQueryChange}
                    placeholder={searchPlaceholder}
                    type="text"
                    value={query}
                />
            </div>
            <ul className={styles.list}>
                {visibleItems.map((item) => (
                    <li key={item.slug}>
                        <button
                            aria-pressed={item.slug === selectedItem}
                            className={[
                                styles.item,
                                item.slug === selectedItem &&
                                    styles['item--selected'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => handleItemClick(item.slug)}
                            type="button"
                        >
                            <HighlightedText query={query} text={item.name} />
                        </button>
                    </li>
                ))}
                {visibleItems.length === 0 && (
                    <li className={styles.empty}>{emptyMessage}</li>
                )}
            </ul>
        </div>
    );
};

export default SearchableList;
