'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import {
    notFound,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import { GAMES } from '@/lib/static/constants';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import AbilitiesTab from './AbilitiesTab/AbilitiesTab';
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
        { id: 'abilities', label: 'Abilities' },
    ];

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const gameRuns = useSyncExternalStore(
        LocalStorageHelpers.subscribe,
        LocalStorageHelpers.getSnapshot,
        LocalStorageHelpers.getServerSnapshot
    );

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeTab = searchParams.get('tab') ?? TABS[0].id;
    const selectedMove = searchParams.get('move') ?? undefined;
    const selectedAbility = searchParams.get('ability') ?? undefined;

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
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const updateQueryParams = (
        updates: Record<string, string | undefined>
    ): void => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value]) => {
            if (value === undefined) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });
        router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        updateQueryParams({ tab: id });
    };

    const handleMoveSelect = (name: string): void => {
        updateQueryParams({ move: name });
    };

    const handleMoveLinkClick = (name: string): void => {
        window.open(
            `${pathname}?tab=moves&move=${encodeURIComponent(name)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const handleAbilitySelect = (name: string): void => {
        updateQueryParams({ ability: name });
    };

    const handleAbilityLinkClick = (name: string): void => {
        window.open(
            `${pathname}?tab=abilities&ability=${encodeURIComponent(name)}`,
            '_blank',
            'noopener,noreferrer'
        );
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
            {activeTab === 'split' && (
                <SplitTab
                    game={game}
                    onSelectAbility={handleAbilityLinkClick}
                    onSelectMove={handleMoveLinkClick}
                    run={run}
                />
            )}
            {activeTab === 'moves' && (
                <MovesTab
                    generation={game.generation}
                    onSelectMove={handleMoveSelect}
                    selectedMove={selectedMove}
                />
            )}
            {activeTab === 'abilities' && (
                <AbilitiesTab
                    generation={game.generation}
                    onSelectAbility={handleAbilitySelect}
                    selectedAbility={selectedAbility}
                />
            )}
        </div>
    );
};

export default RunPage;
