'use client';

import { useState, useSyncExternalStore } from 'react';
import { notFound } from 'next/navigation';
import Tabs from '@/components/common/Tabs/Tabs';
import { GAMES } from '@/lib/static/constants';
import RunStoreHelpers from '@/lib/utils/RunStoreHelpers';
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
    // HOOKS
    // -------------------------------------------------------------------------

    const gameRuns = useSyncExternalStore(
        RunStoreHelpers.subscribe,
        RunStoreHelpers.getSnapshot,
        RunStoreHelpers.getServerSnapshot
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
    )!.run!;

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
            <h1 className={styles.title}>
                Pokémon {game.name} — Attempt #{run.attempt}
            </h1>
            <Tabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
                tabs={TABS}
            />
        </div>
    );
};

export default RunPage;
