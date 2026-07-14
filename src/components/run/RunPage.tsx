'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GAMES } from '@/lib/static/constants';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import MovesTab from './MovesTab/MovesTab';
import styles from './RunPage.module.scss';
import SplitTab from './SplitTab/SplitTab';
import Tabs from './Tabs/Tabs';

interface RunPageProps {
    slug: string;
}

const RunPage: React.FC<RunPageProps> = ({ slug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'split', label: 'Splits' },
        { id: 'box', label: 'Box' },
        { id: 'moves', label: 'Moves' },
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

    const personalBestBattle =
        game && run?.personalBest
            ? BattleProgressHelpers.getBattle(game, run.personalBest)
            : null;
    const personalBestSplitName =
        game && run?.personalBest
            ? BattleProgressHelpers.getSplitName(game, run.personalBest)
            : null;
    const personalBestLabel = personalBestSplitName
        ? `${personalBestSplitName} Split${
              personalBestBattle
                  ? ` — ${personalBestBattle.trainerClass} ${personalBestBattle.name}`
                  : ''
          }`
        : 'N/A';

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        setActiveTab(id);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!game || !run) {
        notFound();
    }

    return (
        <div
            className={styles['run-page']}
            style={
                { '--accent-color': game.accentColor } as React.CSSProperties
            }
        >
            <Link className={styles.back} href="/runs">
                ← Runs
            </Link>
            <h1 className={styles.title}>
                Pokémon {game.name} — Attempt #{run.attempt}
            </h1>
            <p className={styles.subtitle}>
                Personal Best: {personalBestLabel}
            </p>
            <Tabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
                tabs={TABS}
            />
            {activeTab === 'split' && <SplitTab game={game} run={run} />}
            {activeTab === 'moves' && <MovesTab generation={game.generation} />}
        </div>
    );
};

export default RunPage;
