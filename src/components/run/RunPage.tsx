'use client';

import { useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import {
    notFound,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import Spinner from '@/components/common/Spinner/Spinner';
import Tabs from '@/components/common/Tabs/Tabs';
import { useGame } from '@/lib/context/GameContext';
import { CaughtPokemon } from '@/lib/static/types';
import ArrayHelpers from '@/lib/utils/ArrayHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import RunImportHelpers from '@/lib/utils/RunImportHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import BoxTab from './BoxTab/BoxTab';
import ImportSaveModal from './BoxTab/ImportSaveModal/ImportSaveModal';
import CalcTab from './CalcTab/CalcTab';
import DataTab from './DataTab/DataTab';
import HallOfFameTab from './HallOfFameTab/HallOfFameTab';
import ResourcesTab from './ResourcesTab/ResourcesTab';
import styles from './RunPage.module.scss';
import SplitHeader from './SplitHeader/SplitHeader';
import SplitTab from './SplitTab/SplitTab';

const RunPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TABS = [
        { id: 'split', label: 'Splits' },
        { id: 'box', label: 'Box' },
        { id: 'calc', label: 'Calc' },
        { id: 'data', label: 'Data' },
        { id: 'hof', label: 'Hall of Fame' },
        { id: 'resources', label: 'Resources' },
    ];

    const DEFAULT_SUBTAB = 'pokedex';

    const TAB_QUERY_PARAMS: Record<string, string[]> = {
        box: ['pokemon'],
        data: ['subtab', 'species', 'move', 'ability', 'item'],
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

    const game = useGame();
    const gameRuns = useSyncExternalStore(
        RunHelpers.subscribe,
        RunHelpers.getSnapshot,
        RunHelpers.getServerSnapshot
    );
    const isHydrated = useSyncExternalStore(
        RunHelpers.subscribe,
        RunHelpers.getIsHydratedSnapshot,
        RunHelpers.getServerIsHydratedSnapshot
    );

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const stickyHeaderRef = useRef<HTMLDivElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeSubtab = searchParams.get('subtab') ?? DEFAULT_SUBTAB;
    const selectedMove = searchParams.get('move') ?? undefined;
    const selectedAbility = searchParams.get('ability') ?? undefined;
    const selectedItem = searchParams.get('item') ?? undefined;
    const selectedPokemon = searchParams.get('pokemon') ?? undefined;
    const selectedSpecies = searchParams.get('species') ?? undefined;
    const selectedBattle = searchParams.get('battle') ?? undefined;

    const wipeMessage = ArrayHelpers.pickRandom([
        ...DEFAULT_WIPE_MESSAGES,
        ...game.wipeMessages,
    ]);

    const run = gameRuns.find(
        (gameRun) => gameRun.game.name === game.name
    )?.run;

    const isHallOfFameUnlocked = !!(
        run && SplitHelpers.isGameComplete(game, run.completedSplits)
    );

    const activeTab =
        searchParams.get('tab') ?? (isHallOfFameUnlocked ? 'hof' : TABS[0].id);

    const runSplitName = run
        ? SplitHelpers.getCurrentSplitName(game, run.completedSplits)
        : null;

    const currentSplitName = run
        ? (game.splits.find((split) => split.name === searchParams.get('split'))
              ?.name ?? runSplitName)
        : null;

    const visibleTabs = TABS.filter((tab) => {
        if (tab.id === 'hof') return isHallOfFameUnlocked;
        if (tab.id === 'resources') return !!game.resources?.length;
        return true;
    });

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
        Object.values(TAB_QUERY_PARAMS).forEach((params) => {
            params.forEach((param) => {
                updates[param] = undefined;
            });
        });
        updateQueryParams(updates);
    };

    const handleSubtabChange = (id: string): void => {
        updateQueryParams({
            ability: undefined,
            item: undefined,
            move: undefined,
            species: undefined,
            subtab: id,
        });
    };

    const handleMoveSelect = (slug: string): void => {
        updateQueryParams({ move: slug });
    };

    const handleMoveLinkClick = (slug: string): void => {
        router.push(
            `${pathname}?tab=data&subtab=moves&move=${encodeURIComponent(slug)}`
        );
    };

    const handleSpeciesLinkClick = (slug: string): void => {
        router.push(
            `${pathname}?tab=data&subtab=pokedex&species=${encodeURIComponent(
                slug
            )}`
        );
    };

    const handleAbilitySelect = (slug: string): void => {
        updateQueryParams({ ability: slug });
    };

    const handleItemSelect = (slug: string): void => {
        updateQueryParams({ item: slug });
    };

    const handleSpeciesSelect = (slug: string): void => {
        updateQueryParams({ species: slug });
    };

    const handleSpeciesPanelSelect = (slug: string): void => {
        updateQueryParams({
            ability: undefined,
            item: undefined,
            move: undefined,
            species: slug,
            subtab: 'pokedex',
        });
    };

    const handlePokemonSelect = (location: string): void => {
        updateQueryParams({ pokemon: location });
    };

    const handlePokemonDeselect = (): void => {
        updateQueryParams({ pokemon: undefined });
    };

    const handleBattleSelect = (battleKey: string): void => {
        updateQueryParams({ battle: battleKey });
    };

    const handleTrainerLinkClick = (battleKey: string): void => {
        window.open(
            `${pathname}?tab=calc&battle=${encodeURIComponent(battleKey)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const handleLocationSelect = (locationName: string): void => {
        const earliestLocation = SplitHelpers.getEarliestLocation(
            game,
            locationName
        );
        if (!earliestLocation) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', 'split');
        params.set('split', earliestLocation.splitName);
        params.delete('pokemon');
        params.delete('subtab');
        params.delete('move');
        params.delete('ability');
        params.delete('item');
        params.delete('species');

        router.push(
            `${pathname}?${params.toString()}#${SplitHelpers.getLocationSlug(
                locationName,
                earliestLocation.index
            )}`
        );
    };

    const handleAbilityLinkClick = (slug: string): void => {
        router.push(
            `${pathname}?tab=data&subtab=abilities&ability=${encodeURIComponent(
                slug
            )}`
        );
    };

    const handleItemLinkClick = (slug: string): void => {
        router.push(
            `${pathname}?tab=data&subtab=items&item=${encodeURIComponent(slug)}`
        );
    };

    const handleSplitSelect = (splitName: string): void => {
        updateQueryParams({ split: splitName });
        window.scrollTo({ top: 0 });
    };

    const handleSplitToggleComplete = async (
        splitName: string
    ): Promise<void> => {
        if (!run) return;

        const wasCompleted = run.completedSplits.includes(splitName);
        const splitIndex = game.splits.findIndex(
            (split) => split.name === splitName
        );

        const completedSplits = wasCompleted
            ? run.completedSplits.filter((name) => name !== splitName)
            : [
                  ...new Set([
                      ...run.completedSplits,
                      ...game.splits
                          .slice(0, splitIndex + 1)
                          .map((split) => split.name),
                  ]),
              ];

        await RunHelpers.saveRun(game, { ...run, completedSplits });

        if (
            !wasCompleted &&
            SplitHelpers.isGameComplete(game, completedSplits)
        ) {
            updateQueryParams({ tab: 'hof' });
            window.scrollTo({ top: 0 });
        }
    };

    const handleWipeToggle = async (): Promise<void> => {
        if (!run) return;

        await RunHelpers.saveRun(game, { ...run, wipe: !run.wipe });
    };

    const handleImportClick = (): void => {
        setIsImportModalOpen(true);
    };

    const handleCloseImportModal = (): void => {
        setIsImportModalOpen(false);
    };

    const handleImportSave = async (
        importedPokemon: CaughtPokemon[],
        importedCompletedSplits: string[],
        importedGender: 'male' | 'female'
    ): Promise<void> => {
        if (!run) return;

        await RunHelpers.saveRun(
            game,
            RunImportHelpers.mergeImport(
                run,
                importedPokemon,
                importedCompletedSplits,
                importedGender
            )
        );
        handlePokemonDeselect();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!isHydrated) {
        return (
            <div
                className={styles['run-page']}
                style={
                    {
                        '--accent-color': game.accentColor,
                    } as React.CSSProperties
                }
            >
                <div className={styles.loading}>
                    <Spinner />
                </div>
            </div>
        );
    }

    if (!run) {
        notFound();
    }

    return (
        <div
            className={styles['run-page']}
            style={
                {
                    '--accent-color': game.accentColor,
                    ...(game.textContrastColor && {
                        '--button-text-color': game.textContrastColor,
                    }),
                } as React.CSSProperties
            }
        >
            <Link className={styles.back} href="/runs">
                ← Runs
            </Link>
            <div className={styles['title-row']}>
                <h1 className={styles.title}>
                    Pokémon {game.name} — Attempt #{run.attempt}
                </h1>
                <div className={styles.actions}>
                    <button
                        className={styles.import}
                        onClick={handleImportClick}
                        type="button"
                    >
                        Import
                    </button>
                    <button
                        className={styles.wipe}
                        onClick={handleWipeToggle}
                        type="button"
                    >
                        {run.wipe ? 'RESPAWN' : 'Wipe'}
                    </button>
                </div>
            </div>
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
                                completedSplits={run.completedSplits}
                                currentSplitName={currentSplitName}
                                game={game}
                                gender={run.gender}
                                onSelectSplit={handleSplitSelect}
                            />
                        )}
                        <Tabs
                            activeTab={activeTab}
                            className={styles.tabs}
                            onTabChange={handleTabChange}
                            tabs={visibleTabs}
                        />
                    </div>
                    {activeTab === 'split' && (
                        <SplitTab
                            currentSplitName={currentSplitName}
                            game={game}
                            onSelectAbility={handleAbilityLinkClick}
                            onSelectBattleMarker={handleBattleSelect}
                            onSelectItem={handleItemLinkClick}
                            onSelectLocation={handleLocationSelect}
                            onSelectMove={handleMoveLinkClick}
                            onSelectSpecies={handleSpeciesLinkClick}
                            onSelectSplit={handleSplitSelect}
                            onSelectTrainer={handleTrainerLinkClick}
                            onToggleSplitComplete={handleSplitToggleComplete}
                            run={run}
                            selectedBattleKey={selectedBattle}
                            stickyOffset={stickyHeaderHeight}
                        />
                    )}
                    {activeTab === 'box' && (
                        <BoxTab
                            game={game}
                            onDeselectPokemon={handlePokemonDeselect}
                            onSelectAbility={handleAbilityLinkClick}
                            onSelectItem={handleItemLinkClick}
                            onSelectLocation={handleLocationSelect}
                            onSelectMove={handleMoveLinkClick}
                            onSelectPokemon={handlePokemonSelect}
                            onSelectSpecies={handleSpeciesLinkClick}
                            run={run}
                            selectedPokemon={selectedPokemon}
                        />
                    )}
                    {activeTab === 'data' && (
                        <DataTab
                            activeSubtab={activeSubtab}
                            game={game}
                            onSelectAbility={handleAbilitySelect}
                            onSelectAbilityLink={handleAbilityLinkClick}
                            onSelectItem={handleItemSelect}
                            onSelectLocation={handleLocationSelect}
                            onSelectMove={handleMoveSelect}
                            onSelectMoveLink={handleMoveLinkClick}
                            onSelectSpecies={handleSpeciesSelect}
                            onSelectSpeciesLink={handleSpeciesPanelSelect}
                            onSubtabChange={handleSubtabChange}
                            run={run}
                            selectedAbility={selectedAbility}
                            selectedItem={selectedItem}
                            selectedMove={selectedMove}
                            selectedSpecies={selectedSpecies}
                        />
                    )}
                    {activeTab === 'calc' && (
                        <CalcTab
                            game={game}
                            onSelectBattle={handleBattleSelect}
                            run={run}
                            selectedBattle={selectedBattle}
                        />
                    )}
                    {activeTab === 'hof' && isHallOfFameUnlocked && (
                        <HallOfFameTab game={game} run={run} />
                    )}
                    {activeTab === 'resources' && <ResourcesTab game={game} />}
                </>
            )}
            {isImportModalOpen && (
                <ImportSaveModal
                    accentColor={game.accentColor}
                    buttonTextColor={game.textContrastColor}
                    game={game}
                    onClose={handleCloseImportModal}
                    onSubmit={handleImportSave}
                />
            )}
        </div>
    );
};

export default RunPage;
