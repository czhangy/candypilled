'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Subtabs from '@/components/common/Subtabs/Subtabs';
import styles from './AiTab.module.scss';
import Gen3Ai from './Gen3Ai/Gen3Ai';
import Gen4Ai from './Gen4Ai/Gen4Ai';

const AiTab: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SUBTABS = [
        { id: '3', label: 'Gen 3' },
        { id: '4', label: 'Gen 4' },
    ];

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const router = useRouter();
    const searchParams = useSearchParams();

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSubtabChange = (id: string): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('gen', id);
        router.replace(`/references?${params.toString()}`, { scroll: false });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeSubtab =
        SUBTABS.find((subtab) => subtab.id === searchParams.get('gen'))?.id ??
        SUBTABS[0].id;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['ai-tab']}>
            <Subtabs
                activeSubtab={activeSubtab}
                onSubtabChange={handleSubtabChange}
                subtabs={SUBTABS}
            />
            {activeSubtab === '3' ? <Gen3Ai /> : <Gen4Ai />}
        </div>
    );
};

export default AiTab;
