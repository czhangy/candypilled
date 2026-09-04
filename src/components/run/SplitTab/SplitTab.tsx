'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Encounter, Game, Location, Run } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import RoamerTracker from './RoamerTracker/RoamerTracker';
import SplitLocation from './SplitLocation/SplitLocation';
import styles from './SplitTab.module.scss';

type SplitTabProps = {
    currentSplitName: string | null;
    game: Game;
    onSelectAbility: (slug: string) => void;
    onSelectBattleMarker: (battleKey: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    onSelectSplit: (splitName: string) => void;
    onSelectTrainer: (battleKey: string) => void;
    onToggleSplitComplete: (splitName: string) => void;
    run: Run;
    selectedBattleKey?: string;
    stickyOffset: number;
};

const SplitTab: React.FC<SplitTabProps> = ({
    currentSplitName,
    game,
    onSelectAbility,
    onSelectBattleMarker,
    onSelectItem,
    onSelectLocation,
    onSelectMove,
    onSelectSpecies,
    onSelectSplit,
    onSelectTrainer,
    onToggleSplitComplete,
    run,
    selectedBattleKey,
    stickyOffset,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeLocationSlug, setActiveLocationSlug] = useState<string | null>(
        null
    );

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const variant = game.pokemonAssetFolder ?? game.version;
    const badge = `/badges/${game.badgeAssetFolder}/${StringHelpers.toSlug(currentSplitName ?? '')}.png`;
    const isSplitCompleted =
        !!currentSplitName && run.completedSplits.includes(currentSplitName);
    const currentSplitIndex = game.splits.findIndex(
        (split) => split.name === currentSplitName
    );
    const previousSplitName =
        currentSplitIndex > 0 ? game.splits[currentSplitIndex - 1].name : null;
    const nextSplitName =
        currentSplitIndex !== -1 && currentSplitIndex < game.splits.length - 1
            ? game.splits[currentSplitIndex + 1].name
            : null;

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        const slugs =
            currentSplit?.locations.map((location, index) =>
                SplitHelpers.getLocationSlug(location.name, index)
            ) ?? [];
        const elements = slugs
            .map((slug) => document.getElementById(slug))
            .filter((element): element is HTMLElement => element !== null);

        if (elements.length === 0) {
            return;
        }

        const visibleSlugs = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSlugs.add(entry.target.id);
                    } else {
                        visibleSlugs.delete(entry.target.id);
                    }
                });

                const lastVisibleSlug = slugs
                    .filter((slug) => visibleSlugs.has(slug))
                    .pop();

                if (lastVisibleSlug) {
                    setActiveLocationSlug(lastVisibleSlug);
                }
            },
            {
                rootMargin: `-${stickyOffset + 16}px 0px -50% 0px`,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [currentSplit, stickyOffset]);

    useEffect(() => {
        if (!selectedBattleKey) return;

        const element = document.getElementById(
            StringHelpers.toSlug(selectedBattleKey)
        );
        if (!element) return;

        const SCROLL_GAP = 80;
        const targetTop =
            element.getBoundingClientRect().top +
            window.scrollY -
            stickyOffset -
            SCROLL_GAP;
        window.scrollTo({ top: targetTop });
        // Scrolls once per mount, i.e. every time this tab is switched
        // into, rather than reacting to selectedBattleKey changing while
        // already on this tab.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getCaughtPokemonName = (locationName: string): string | undefined => {
        const caught = run.caughtPokemon.find(
            (pokemon) => pokemon.location === locationName
        );
        if (!caught) return undefined;

        const displaySlug = PokemonHelpers.getDisplaySlug(
            game.dataSource,
            caught
        );

        return (
            PokemonHelpers.getPokemonData(game.dataSource, displaySlug)?.name ??
            displaySlug
        );
    };

    const isLocationMissed = (locationName: string): boolean =>
        run.missedLocations.includes(locationName);

    const getLocationEncounters = (location: Location): Encounter[] => {
        const encountersKeys = location.subareas
            ? location.subareas.map((subarea) => subarea.encountersKey)
            : [location.encountersKey];

        return encountersKeys.flatMap((key) =>
            key ? (game.encounters[key] ?? []) : []
        );
    };

    const hasEncounters = (location: Location): boolean =>
        getLocationEncounters(location).length > 0;

    const isAllEncountersDupes = (location: Location): boolean => {
        const dupes = run.caughtPokemon.map((caught) => caught.slug);
        const caughtHere = run.caughtPokemon.find(
            (caught) => caught.location === location.name
        )?.slug;

        return EncounterHelpers.areAllEncountersDupes(
            game.dataSource,
            getLocationEncounters(location),
            dupes,
            caughtHere,
            game.generation,
            settings['show-legendaries'] ?? false
        );
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSplitCompleteClick = (): void => {
        if (currentSplitName) {
            onToggleSplitComplete(currentSplitName);
        }
    };

    const handlePreviousSplitClick = (): void => {
        if (previousSplitName) {
            onSelectSplit(previousSplitName);
        }
    };

    const handleNextSplitClick = (): void => {
        if (nextSplitName) {
            onSelectSplit(nextSplitName);
        }
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['split-tab']}
            style={
                {
                    '--sticky-offset': `${stickyOffset}px`,
                } as React.CSSProperties
            }
        >
            <div className={styles.body}>
                <nav className={styles.toc}>
                    <div className={styles['toc-header']}>
                        <div className={styles.badge}>
                            <Image alt="" fill sizes="8rem" src={badge} />
                        </div>
                        <span className={styles['toc-label']}>Locations</span>
                        <ul className={styles['toc-list']}>
                            {currentSplit?.locations.map((location, index) => {
                                const caughtPokemonName = getCaughtPokemonName(
                                    location.name
                                );
                                const missed = isLocationMissed(location.name);
                                const allEncountersDupes =
                                    isAllEncountersDupes(location);
                                const slug = SplitHelpers.getLocationSlug(
                                    location.name,
                                    index
                                );

                                return (
                                    <li key={`${location.name}-${index}`}>
                                        {hasEncounters(location) ? (
                                            <Tooltip
                                                position="left"
                                                text={
                                                    caughtPokemonName
                                                        ? `This encounter has been taken – ${caughtPokemonName}`
                                                        : missed
                                                          ? 'This encounter was missed'
                                                          : allEncountersDupes
                                                            ? 'Every possible encounter here has already been caught'
                                                            : "This encounter hasn't been taken"
                                                }
                                            >
                                                <span
                                                    className={[
                                                        styles['caught-icon'],
                                                        (missed ||
                                                            allEncountersDupes) &&
                                                            styles[
                                                                'caught-icon--missed'
                                                            ],
                                                    ]
                                                        .filter(Boolean)
                                                        .join(' ')}
                                                >
                                                    <Image
                                                        alt=""
                                                        fill
                                                        sizes="0.9rem"
                                                        src={
                                                            caughtPokemonName
                                                                ? '/common/poke-ball.png'
                                                                : '/common/premier-ball.png'
                                                        }
                                                    />
                                                </span>
                                            </Tooltip>
                                        ) : (
                                            <span
                                                className={
                                                    styles['caught-icon']
                                                }
                                            />
                                        )}
                                        <a
                                            className={[
                                                styles['toc-link'],
                                                slug === activeLocationSlug &&
                                                    styles['toc-link--active'],
                                            ]
                                                .filter(Boolean)
                                                .join(' ')}
                                            href={`#${slug}`}
                                        >
                                            {location.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button
                        className={[
                            styles['complete-button'],
                            isSplitCompleted &&
                                styles['complete-button--completed'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        onClick={handleSplitCompleteClick}
                        type="button"
                    >
                        {isSplitCompleted ? 'SPLIT COMPLETED' : 'CLEAR SPLIT'}
                    </button>
                    <div className={styles['split-nav']}>
                        <button
                            className={styles['split-nav-button']}
                            disabled={!previousSplitName}
                            onClick={handlePreviousSplitClick}
                            type="button"
                        >
                            <span
                                className={[
                                    styles['split-nav-icon'],
                                    styles['split-nav-icon--previous'],
                                ].join(' ')}
                            >
                                <ChevronIcon />
                            </span>
                            Prev
                        </button>
                        <button
                            className={styles['split-nav-button']}
                            disabled={!nextSplitName}
                            onClick={handleNextSplitClick}
                            type="button"
                        >
                            Next
                            <span
                                className={[
                                    styles['split-nav-icon'],
                                    styles['split-nav-icon--next'],
                                ].join(' ')}
                            >
                                <ChevronIcon />
                            </span>
                        </button>
                    </div>
                    <RoamerTracker game={game} run={run} />
                </nav>
                <div className={styles.locations}>
                    {currentSplit?.locations.map((location, index) => (
                        <SplitLocation
                            game={game}
                            index={index}
                            key={`${location.name}-${index}`}
                            location={location}
                            onSelectAbility={onSelectAbility}
                            onSelectBattleMarker={onSelectBattleMarker}
                            onSelectItem={onSelectItem}
                            onSelectLocation={onSelectLocation}
                            onSelectMove={onSelectMove}
                            onSelectSpecies={onSelectSpecies}
                            onSelectTrainer={onSelectTrainer}
                            run={run}
                            selectedBattleKey={selectedBattleKey}
                            splitName={currentSplit?.name}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplitTab;
