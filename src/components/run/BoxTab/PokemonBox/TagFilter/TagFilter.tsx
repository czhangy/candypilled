'use client';

import { useEffect, useRef, useState } from 'react';
import FilterIcon from '@/lib/icons/FilterIcon';
import styles from './TagFilter.module.scss';

type TagFilterProps = {
    onChange: (tags: string[]) => void;
    selectedTags: string[];
    tags: string[];
};

const TagFilter: React.FC<TagFilterProps> = ({
    onChange,
    selectedTags,
    tags,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const containerRef = useRef<HTMLDivElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggleOpen = (): void => {
        setIsOpen((prev) => !prev);
    };

    const handleTagToggle = (tag: string): void => {
        onChange(
            selectedTags.includes(tag)
                ? selectedTags.filter((selectedTag) => selectedTag !== tag)
                : [...selectedTags, tag]
        );
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent): void => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['tag-filter']} ref={containerRef}>
            <button
                aria-expanded={isOpen}
                aria-label="Filter by tag"
                className={[
                    styles.trigger,
                    selectedTags.length > 0 && styles['trigger--active'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={handleToggleOpen}
                type="button"
            >
                <FilterIcon />
            </button>
            {isOpen && (
                <ul className={styles.menu}>
                    {tags.map((tag) => (
                        <li key={tag}>
                            <label className={styles.option}>
                                <input
                                    checked={selectedTags.includes(tag)}
                                    className={styles.checkbox}
                                    onChange={() => handleTagToggle(tag)}
                                    type="checkbox"
                                />
                                <span className={styles['tag-label']}>
                                    {tag}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TagFilter;
