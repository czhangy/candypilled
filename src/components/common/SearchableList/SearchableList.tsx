'use client';

import { useState } from 'react';
import HighlightedText from '@/components/common/HighlightedText/HighlightedText';
import styles from './SearchableList.module.scss';

type SearchableListProps = {
    emptyMessage: string;
    items: { name: string }[];
    onSelectItem?: (name: string) => void;
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

    const handleItemClick = (name: string): void => {
        onSelectItem?.(name);
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
                {visibleItems.map((item) => (
                    <li key={item.name}>
                        <button
                            aria-pressed={item.name === selectedItem}
                            className={[
                                styles.item,
                                item.name === selectedItem &&
                                    styles['item--selected'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => handleItemClick(item.name)}
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
