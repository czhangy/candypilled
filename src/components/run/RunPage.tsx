'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Tabs from '@/components/common/Tabs/Tabs';
import { GAMES } from '@/lib/static/constants';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunPage.module.scss';
import SplitTab from './SplitTab/SplitTab';

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
    // HOOKS
    // -------------------------------------------------------------------------

    const gameRuns = useSyncExternalStore(
        LocalStorageHelpers.subscribe,
        LocalStorageHelpers.getSnapshot,
        LocalStorageHelpers.getServerSnapshot
    );

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

    const run = gameRuns.find(
        (gameRun) => StringHelpers.toSlug(gameRun.game.name) === slug
    )?.run;

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

    if (!run) {
        return null;
    }

    return (
        <div className={styles['run-page']}>
            <Link className={styles.back} href="/runs">
                ← Runs
            </Link>
            <h1 className={styles.title}>
                Pokémon {game.name} — Attempt #{run.attempt}
            </h1>
            <Tabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
                tabs={TABS}
            />
            {activeTab === 'split' && <SplitTab game={game} run={run} />}
        </div>
    );
};

export default RunPage;
