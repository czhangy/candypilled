'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent): void => {
            if (!navRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggle = (): void => {
        setIsOpen((prev) => !prev);
    };

    const handleClose = (): void => {
        setIsOpen(false);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <nav className={styles.navbar} ref={navRef}>
            {pathname !== '/' && (
                <Link className={styles.logo} href="/">
                    <Image
                        alt="Candypilled home"
                        height={40}
                        src="/common/candy.png"
                        width={40}
                    />
                    <span className={styles['logo-text']}>Candypilled</span>
                </Link>
            )}
            <button
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className={[
                    styles['menu-button'],
                    isOpen && styles['menu-button--open'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={handleToggle}
                type="button"
            >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </button>
            <ul
                className={[styles.menu, isOpen && styles['menu--open']]
                    .filter(Boolean)
                    .join(' ')}
            >
                <li>
                    <Link href="/runs" onClick={handleClose}>
                        Runs
                    </Link>
                </li>
                <li>
                    <Link href="/settings" onClick={handleClose}>
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
