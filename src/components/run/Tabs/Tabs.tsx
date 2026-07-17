'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './Tabs.module.scss';

type TabsProps = {
    activeTab: string;
    onTabChange: (id: string) => void;
    tabs: { id: string; label: React.ReactNode; ariaLabel?: string }[];
};

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, tabs }) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [underline, setUnderline] = useState({ left: 0, width: 0 });

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useLayoutEffect(() => {
        const measure = (): void => {
            const activeEl = tabRefs.current.get(activeTab);
            if (activeEl) {
                setUnderline({
                    left: activeEl.offsetLeft,
                    width: activeEl.offsetWidth,
                });
            }
        };

        measure();

        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [activeTab, tabs]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabClick = (id: string): void => {
        onTabChange(id);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <button
                    aria-label={tab.ariaLabel}
                    className={[
                        styles.tab,
                        tab.id === activeTab && styles['tab--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    ref={(el) => {
                        if (el) {
                            tabRefs.current.set(tab.id, el);
                        } else {
                            tabRefs.current.delete(tab.id);
                        }
                    }}
                    type="button"
                >
                    {tab.label}
                </button>
            ))}
            <span
                className={styles.underline}
                style={
                    {
                        '--underline-left': `${underline.left}px`,
                        '--underline-width': `${underline.width}px`,
                    } as React.CSSProperties
                }
            />
        </div>
    );
};

export default Tabs;
