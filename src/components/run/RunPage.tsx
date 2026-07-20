'use client';

import { useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import {
    notFound,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import { GAMES } from '@/lib/games';
import ArrayHelpers from '@/lib/utils/ArrayHelpers';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import AbilitiesTab from './AbilitiesTab/AbilitiesTab';
import BoxTab from './BoxTab/BoxTab';
import MovesTab from './MovesTab/MovesTab';
import PokedexTab from './PokedexTab/PokedexTab';
import styles from './RunPage.module.scss';
import SplitHeader from './SplitHeader/SplitHeader';
import SplitTab from './SplitTab/SplitTab';
import Tabs from './Tabs/Tabs';

type RunPageProps = {
    slug: string;
};

const RunPage: React.FC<RunPageProps> = ({ slug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'split', label: 'Splits' },
        { id: 'box', label: 'Box' },
        { id: 'pokedex', label: 'Pokédex' },
        { id: 'moves', label: 'Moves' },
        { id: 'abilities', label: 'Abilities' },
    ];

    const TAB_QUERY_PARAMS: Record<string, string> = {
        abilities: 'ability',
        box: 'pokemon',
        moves: 'move',
        pokedex: 'species',
    };

    const DEFAULT_WIPE_MESSAGES = [
        'Run it back.',
        'Unlucky.',
        'Go again.',
        'Next attempt is PB, trust.',
        "Next one's the run.",
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
    const stickyHeaderRef = useRef<HTMLDivElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeTab = searchParams.get('tab') ?? TABS[0].id;
    const selectedMove = searchParams.get('move') ?? undefined;
    const selectedAbility = searchParams.get('ability') ?? undefined;
    const selectedPokemon = searchParams.get('pokemon') ?? undefined;
    const selectedSpecies = searchParams.get('species') ?? undefined;

    const game = GAMES.find(
        (candidate) => StringHelpers.toSlug(candidate.name) === slug
    );

    const wipeMessage = game
        ? ArrayHelpers.pickRandom([
              ...DEFAULT_WIPE_MESSAGES,
              ...game.wipeMessages,
          ])
        : '';

    const run = gameRuns.find(
        (gameRun) => StringHelpers.toSlug(gameRun.game.name) === slug
    )?.run;

    const runSplitName =
        game && run
            ? SplitHelpers.getCurrentSplitName(game, run.defeatedBattles)
            : null;

    const currentSplitName =
        game && run
            ? (game.splits.find(
                  (split) => split.name === searchParams.get('split')
              )?.name ?? runSplitName)
            : null;

    const personalBestBattle =
        game && run?.personalBest
            ? BattleHelpers.getBattle(game, run.personalBest)
            : null;
    const personalBestSplitName =
        game && run?.personalBest
            ? SplitHelpers.getSplitName(game, run.personalBest)
            : null;
    const personalBestLabel = personalBestSplitName
        ? `${personalBestSplitName} Split${
              personalBestBattle
                  ? ` — ${BattleHelpers.getFullName(personalBestBattle)}`
                  : ''
          }`
        : null;

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
    // EFFECTS
    // -------------------------------------------------------------------------

    useLayoutEffect(() => {
        const measure = (): void => {
            if (stickyHeaderRef.current) {
                setStickyHeaderHeight(
                    stickyHeaderRef.current.getBoundingClientRect().height
                );
            }
        };

        measure();

        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [activeTab, run?.wipe]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTabChange = (id: string): void => {
        const updates: Record<string, string | undefined> = { tab: id };
        Object.values(TAB_QUERY_PARAMS).forEach((param) => {
            updates[param] = undefined;
        });
        updateQueryParams(updates);
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

    const handleSpeciesLinkClick = (species: string): void => {
        window.open(
            `${pathname}?tab=pokedex&species=${encodeURIComponent(
                StringHelpers.toSlug(species)
            )}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const handleAbilitySelect = (name: string): void => {
        updateQueryParams({ ability: name });
    };

    const handleSpeciesSelect = (species: string): void => {
        updateQueryParams({ species: StringHelpers.toSlug(species) });
    };

    const handlePokemonSelect = (location: string): void => {
        updateQueryParams({ pokemon: location });
    };

    const handlePokemonDeselect = (): void => {
        updateQueryParams({ pokemon: undefined });
    };

    const handleLocationSelect = (locationName: string): void => {
        if (!game) return;

        const earliestLocation = SplitHelpers.getEarliestLocation(
            game,
            locationName
        );
        if (!earliestLocation) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', 'split');
        params.set('split', earliestLocation.splitName);
        params.delete('pokemon');
        params.delete('move');
        params.delete('ability');
        params.delete('species');

        router.push(
            `${pathname}?${params.toString()}#${SplitHelpers.getLocationSlug(
                locationName,
                earliestLocation.index
            )}`
        );
    };

    const handleAbilityLinkClick = (name: string): void => {
        window.open(
            `${pathname}?tab=abilities&ability=${encodeURIComponent(name)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const handleSplitSelect = (splitName: string): void => {
        updateQueryParams({ split: splitName });
        window.scrollTo({ top: 0 });
    };

    const handleWipeToggle = (): void => {
        if (!game || !run) return;

        LocalStorageHelpers.saveRun(game, { ...run, wipe: !run.wipe });
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
            <div className={styles['title-row']}>
                <h1 className={styles.title}>
                    Pokémon {game.name} — Attempt #{run.attempt}
                </h1>
                <button
                    className={styles.wipe}
                    onClick={handleWipeToggle}
                    type="button"
                >
                    {run.wipe ? 'RESPAWN' : 'Wipe'}
                </button>
            </div>
            {personalBestLabel && (
                <p className={styles.subtitle}>
                    Personal Best: {personalBestLabel}
                </p>
            )}
            {run.wipe ? (
                <div className={styles['wipe-message']}>
                    <p className={styles['wipe-text']}>{wipeMessage}</p>
                </div>
            ) : (
                <>
                    <div
                        className={styles['sticky-header']}
                        ref={stickyHeaderRef}
                    >
                        {activeTab === 'split' && (
                            <SplitHeader
                                currentSplitName={currentSplitName}
                                game={game}
                                onSelectSplit={handleSplitSelect}
                                runSplitName={runSplitName}
                            />
                        )}
                        <Tabs
                            activeTab={activeTab}
                            onTabChange={handleTabChange}
                            tabs={TABS}
                        />
                    </div>
                    {activeTab === 'split' && (
                        <SplitTab
                            currentSplitName={currentSplitName}
                            game={game}
                            onAdvanceSplit={handleSplitSelect}
                            onSelectAbility={handleAbilityLinkClick}
                            onSelectLocation={handleLocationSelect}
                            onSelectMove={handleMoveLinkClick}
                            onSelectSpecies={handleSpeciesLinkClick}
                            run={run}
                            stickyOffset={stickyHeaderHeight}
                        />
                    )}
                    {activeTab === 'box' && (
                        <BoxTab
                            game={game}
                            onDeselectPokemon={handlePokemonDeselect}
                            onSelectAbility={handleAbilityLinkClick}
                            onSelectLocation={handleLocationSelect}
                            onSelectMove={handleMoveLinkClick}
                            onSelectPokemon={handlePokemonSelect}
                            run={run}
                            selectedPokemon={selectedPokemon}
                        />
                    )}
                    {activeTab === 'pokedex' && (
                        <PokedexTab
                            game={game}
                            onSelectAbility={handleAbilityLinkClick}
                            onSelectLocation={handleLocationSelect}
                            onSelectMove={handleMoveLinkClick}
                            onSelectSpecies={handleSpeciesSelect}
                            run={run}
                            selectedSpecies={selectedSpecies}
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
                </>
            )}
        </div>
    );
};

export default RunPage;
