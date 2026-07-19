'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const containerRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback((): void => {
        setIsOpen(false);
        setIsClosing(
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }, []);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggleOpen = (): void => {
        if (isOpen) {
            handleClose();
        } else {
            setIsOpen(true);
        }
    };

    const handleTagToggle = (tag: string): void => {
        onChange(
            selectedTags.includes(tag)
                ? selectedTags.filter((selectedTag) => selectedTag !== tag)
                : [...selectedTags, tag]
        );
    };

    const handleAnimationEnd = (): void => {
        setIsClosing(false);
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent): void => {
            if (!containerRef.current?.contains(event.target as Node)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClose, isOpen]);

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
            {(isOpen || isClosing) && (
                <ul
                    className={[
                        styles.menu,
                        isClosing && styles['menu--closing'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    onAnimationEnd={handleAnimationEnd}
                >
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
