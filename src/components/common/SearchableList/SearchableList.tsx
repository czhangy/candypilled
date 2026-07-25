'use client';

import { useState } from 'react';
import HighlightedText from '@/components/common/HighlightedText/HighlightedText';
import styles from './SearchableList.module.scss';

type SearchableListProps = {
    emptyMessage: string;
    // `slug` is the selection identity (returned by `onSelectItem` and
    // compared against `selectedItem`) when present; `name` is always the
    // searched/displayed text. Items without a `slug` use `name` for both.
    items: { name: string; slug?: string }[];
    onSelectItem?: (key: string) => void;
    searchAriaLabel: string;
    searchPlaceholder: string;
    selectedItem?: string;
};

const SearchableList: React.FC<SearchableListProps> = ({
    emptyMessage,
    items,
    onSelectItem,
    searchAriaLabel,
    searchPlaceholder,
    selectedItem,
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

    const handleItemClick = (key: string): void => {
        onSelectItem?.(key);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const normalizedQuery = query.trim().toLowerCase();
    const visibleItems = items
        .filter((item) => item.name.toLowerCase().includes(normalizedQuery))
        .sort((a, b) => a.name.localeCompare(b.name));

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
                {visibleItems.map((item) => {
                    const key = item.slug ?? item.name;

                    return (
                        <li key={key}>
                            <button
                                aria-pressed={key === selectedItem}
                                className={[
                                    styles.item,
                                    key === selectedItem &&
                                        styles['item--selected'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() => handleItemClick(key)}
                                type="button"
                            >
                                <HighlightedText
                                    query={query}
                                    text={item.name}
                                />
                            </button>
                        </li>
                    );
                })}
                {visibleItems.length === 0 && (
                    <li className={styles.empty}>{emptyMessage}</li>
                )}
            </ul>
        </div>
    );
};

export default SearchableList;
