'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { DropdownOption } from '@/lib/static/types';
import styles from './Dropdown.module.scss';

interface DropdownProps {
    onChange: (value: string) => void;
    options: DropdownOption[];
    placeholder?: string;
    searchable?: boolean;
    value: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    onChange,
    options,
    placeholder = 'Select…',
    searchable = false,
    value,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MENU_GAP = 5;

    interface MenuPlacement {
        accentColor: string;
        left: number;
        top: number;
        width: number;
    }

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [menuPlacement, setMenuPlacement] = useState<MenuPlacement | null>(
        null
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleCloseMenu = (): void => {
        setIsOpen(false);
        setQuery('');
    };

    const handleToggle = (): void => {
        if (isOpen) {
            handleCloseMenu();
        } else {
            setIsOpen(true);
        }
    };

    const handleOptionClick = (option: DropdownOption): void => {
        onChange(option.value);
        handleCloseMenu();
    };

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setQuery(event.target.value);
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent): void => {
            const target = event.target as Node;
            if (
                !containerRef.current?.contains(target) &&
                !menuRef.current?.contains(target)
            ) {
                handleCloseMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && searchable) {
            searchInputRef.current?.focus();
        }
    }, [isOpen, searchable]);

    useEffect(() => {
        if (!isOpen) return;

        const updatePlacement = (): void => {
            const trigger = containerRef.current;
            if (!trigger) return;

            const rect = trigger.getBoundingClientRect();
            const accentColor =
                getComputedStyle(trigger).getPropertyValue('--accent-color');

            setMenuPlacement({
                accentColor,
                left: rect.left,
                top: rect.bottom + MENU_GAP,
                width: rect.width,
            });
        };

        updatePlacement();
        window.addEventListener('resize', updatePlacement);
        window.addEventListener('scroll', updatePlacement, true);
        return () => {
            window.removeEventListener('resize', updatePlacement);
            window.removeEventListener('scroll', updatePlacement, true);
        };
    }, [isOpen]);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const selectedOption = options.find((option) => option.value === value);
    const filteredOptions =
        searchable && query
            ? options.filter((option) =>
                  option.label.toLowerCase().includes(query.toLowerCase())
              )
            : options;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getHighlightedLabel = (label: string): React.ReactNode => {
        if (!searchable || !query) return label;

        const index = label.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return label;

        return (
            <>
                {label.slice(0, index)}
                <span className={styles.match}>
                    {label.slice(index, index + query.length)}
                </span>
                {label.slice(index + query.length)}
            </>
        );
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles.dropdown} ref={containerRef}>
            <button
                aria-expanded={isOpen}
                className={styles.trigger}
                onClick={handleToggle}
                type="button"
            >
                <span className={styles['trigger-label']}>
                    {selectedOption?.label ?? placeholder}
                </span>
                <span
                    className={[
                        styles.chevron,
                        isOpen && styles['chevron--open'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <ChevronIcon />
                </span>
            </button>
            {isOpen &&
                menuPlacement &&
                createPortal(
                    <div
                        className={styles.menu}
                        ref={menuRef}
                        style={
                            {
                                '--accent-color': menuPlacement.accentColor,
                                left: menuPlacement.left,
                                top: menuPlacement.top,
                                width: menuPlacement.width,
                            } as React.CSSProperties
                        }
                    >
                        {searchable && (
                            <input
                                className={styles.search}
                                onChange={handleSearchChange}
                                placeholder="Search…"
                                ref={searchInputRef}
                                type="text"
                                value={query}
                            />
                        )}
                        <ul className={styles.options}>
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <li key={option.value}>
                                        <button
                                            className={[
                                                styles.option,
                                                option.value === value &&
                                                    styles['option--selected'],
                                            ]
                                                .filter(Boolean)
                                                .join(' ')}
                                            onClick={() =>
                                                handleOptionClick(option)
                                            }
                                            type="button"
                                        >
                                            <span
                                                className={
                                                    styles['option-label']
                                                }
                                            >
                                                {getHighlightedLabel(
                                                    option.label
                                                )}
                                            </span>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className={styles.empty}>No results</li>
                            )}
                        </ul>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default Dropdown;
