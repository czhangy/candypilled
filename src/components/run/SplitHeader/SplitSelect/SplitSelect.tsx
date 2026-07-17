'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import styles from './SplitSelect.module.scss';

type SplitSelectProps = {
    onChange: (name: string) => void;
    options: string[];
    value: string;
};

const SplitSelect: React.FC<SplitSelectProps> = ({
    onChange,
    options,
    value,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MENU_GAP = 5;

    type MenuPlacement = {
        accentColor: string;
        left: number;
        minWidth: number;
        top: number;
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [menuPlacement, setMenuPlacement] = useState<MenuPlacement | null>(
        null
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggle = (): void => {
        setIsOpen((open) => !open);
    };

    const handleOptionClick = (option: string): void => {
        onChange(option);
        setIsOpen(false);
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
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

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
                minWidth: rect.width,
                top: rect.bottom + MENU_GAP,
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
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['split-select']} ref={containerRef}>
            <button
                aria-expanded={isOpen}
                className={styles.trigger}
                onClick={handleToggle}
                type="button"
            >
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
                <span className={styles.label}>{value}</span>
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
                                minWidth: menuPlacement.minWidth,
                                top: menuPlacement.top,
                            } as React.CSSProperties
                        }
                    >
                        <ul className={styles.options}>
                            {options.map((option) => (
                                <li key={option}>
                                    <button
                                        className={[
                                            styles.option,
                                            option === value &&
                                                styles['option--selected'],
                                        ]
                                            .filter(Boolean)
                                            .join(' ')}
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                        type="button"
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default SplitSelect;
