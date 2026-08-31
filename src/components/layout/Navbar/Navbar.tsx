'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import SessionHelpers from '@/lib/utils/SessionHelpers';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const pathname = usePathname();
    const router = useRouter();
    const navRef = useRef<HTMLElement>(null);
    const hallOfFameEntries = useSyncExternalStore(
        HallOfFameHelpers.subscribe,
        HallOfFameHelpers.getSnapshot,
        HallOfFameHelpers.getServerSnapshot
    );
    const session = useSyncExternalStore(
        SessionHelpers.subscribe,
        SessionHelpers.getSnapshot,
        SessionHelpers.getServerSnapshot
    );

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

    const handleSignOutClick = async (): Promise<void> => {
        await SessionHelpers.signOut();
        router.push('/');
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
                {session && (
                    <li>
                        <Link href="/runs" onClick={handleClose}>
                            Runs
                        </Link>
                    </li>
                )}
                {session && (
                    <li>
                        <Link href="/settings" onClick={handleClose}>
                            Settings
                        </Link>
                    </li>
                )}
                <li>
                    <Link href="/types" onClick={handleClose}>
                        Types
                    </Link>
                </li>
                <li>
                    <Link href="/natures" onClick={handleClose}>
                        Natures
                    </Link>
                </li>
                {session && hallOfFameEntries.length > 0 && (
                    <li>
                        <Link href="/hof" onClick={handleClose}>
                            Hall of Fame
                        </Link>
                    </li>
                )}
                <li>
                    <Link href="/credits" onClick={handleClose}>
                        Credits
                    </Link>
                </li>
                {session && (
                    <li>
                        <button
                            className={styles['sign-out']}
                            onClick={handleSignOutClick}
                            type="button"
                        >
                            Sign Out
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
