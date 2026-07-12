'use client';

import styles from './Tabs.module.scss';

interface TabsProps {
    activeTab: string;
    onTabChange: (id: string) => void;
    tabs: { id: string; label: string }[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, tabs }) => {
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
