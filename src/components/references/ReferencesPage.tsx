'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Tabs from '@/components/common/Tabs/Tabs';
import AiTab from './AiTab/AiTab';
import NaturesTab from './NaturesTab/NaturesTab';
import styles from './ReferencesPage.module.scss';
import TypesTab from './TypesTab/TypesTab';

const ReferencesPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'types', label: 'Types' },
        { id: 'natures', label: 'Natures' },
        { id: 'ai', label: 'AI' },
    ];

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const router = useRouter();
    const searchParams = useSearchParams();

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        router.replace(`/references?tab=${id}`, { scroll: false });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeTab =
        TABS.find((tab) => tab.id === searchParams.get('tab'))?.id ?? 'types';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['references-page']}>
            <Tabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
                tabs={TABS}
            />
            {activeTab === 'types' && <TypesTab />}
            {activeTab === 'natures' && <NaturesTab />}
            {activeTab === 'ai' && <AiTab />}
        </div>
    );
};

export default ReferencesPage;
