'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Tabs from '@/components/common/Tabs/Tabs';
import { GAMES } from '@/lib/static/constants';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunPage.module.scss';

interface RunPageProps {
    slug: string;
}

const RunPage: React.FC<RunPageProps> = ({ slug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'split', label: 'Split' },
        { id: 'box', label: 'Box' },
    ];

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeTab, setActiveTab] = useState(TABS[0].id);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const game = GAMES.find(
        (candidate) => StringHelpers.toSlug(candidate.name) === slug
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        setActiveTab(id);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!game) {
        notFound();
    }

    return (
        <div className={styles['run-page']}>
            <Tabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
                tabs={TABS}
            />
        </div>
    );
};

export default RunPage;
