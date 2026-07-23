'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import HighlightedText from '@/components/common/HighlightedText/HighlightedText';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { DropdownOption } from '@/lib/static/types';
import styles from './Dropdown.module.scss';

type DropdownProps = {
    dense?: boolean;
    onChange: (value: string) => void;
    options: DropdownOption[];
    placeholder?: string;
    searchable?: boolean;
    value: string;
};

const Dropdown: React.FC<DropdownProps> = ({
    dense = false,
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

    type MenuPlacement = {
        accentColor: string;
        left: number;
        top: number;
        width: number;
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [query, setQuery] = useState('');
    const [menuPlacement, setMenuPlacement] = useState<MenuPlacement | null>(
        null
    );

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleCloseMenu = useCallback((): void => {
        setIsOpen(false);
        setQuery('');
        setIsClosing(
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }, []);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

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

    const handleAnimationEnd = (): void => {
        setIsClosing(false);
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
    }, [handleCloseMenu, isOpen]);

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
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={[styles.dropdown, dense && styles['dropdown--dense']]
                .filter(Boolean)
                .join(' ')}
            ref={containerRef}
        >
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
            {(isOpen || isClosing) &&
                menuPlacement &&
                createPortal(
                    <div
                        className={[
                            styles.menu,
                            dense && styles['menu--dense'],
                            isClosing && styles['menu--closing'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        onAnimationEnd={handleAnimationEnd}
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
                                                <HighlightedText
                                                    query={
                                                        searchable ? query : ''
                                                    }
                                                    text={option.label}
                                                />
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
