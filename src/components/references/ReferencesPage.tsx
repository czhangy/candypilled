'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Tabs from '@/components/common/Tabs/Tabs';
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
        searchParams.get('tab') === 'natures' ? 'natures' : 'types';

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
            {activeTab === 'natures' ? <NaturesTab /> : <TypesTab />}
        </div>
    );
};

export default ReferencesPage;
