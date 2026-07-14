'use client';

import styles from './Tabs.module.scss';

interface TabsProps {
    activeTab: string;
    align?: 'center' | 'left';
    onTabChange: (id: string) => void;
    tabs: { id: string; label: React.ReactNode; ariaLabel?: string }[];
}

const Tabs: React.FC<TabsProps> = ({
    activeTab,
    align = 'center',
    onTabChange,
    tabs,
}) => {
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
        <div
            className={[styles.tabs, align === 'left' && styles['tabs--left']]
                .filter(Boolean)
                .join(' ')}
        >
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
                    type="button"
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
