'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { Game, Location, Run } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import SplitLocation from './SplitLocation/SplitLocation';
import styles from './SplitTab.module.scss';

type SplitTabProps = {
    currentSplitName: string | null;
    game: Game;
    onSelectAbility: (name: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    run: Run;
    stickyOffset: number;
};

const SplitTab: React.FC<SplitTabProps> = ({
    currentSplitName,
    game,
    onSelectAbility,
    onSelectLocation,
    onSelectMove,
    run,
    stickyOffset,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeLocationSlug, setActiveLocationSlug] = useState<string | null>(
        null
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const variant = StringHelpers.toSlug(game.name);
    const badge = `/${variant}/badges/${StringHelpers.toSlug(currentSplitName ?? '')}.png`;

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        const slugs =
            currentSplit?.locations.map((location) =>
                StringHelpers.toSlug(location.name)
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

                const firstVisibleSlug = slugs.find((slug) =>
                    visibleSlugs.has(slug)
                );

                if (firstVisibleSlug) {
                    setActiveLocationSlug(firstVisibleSlug);
                }
            },
            {
                rootMargin: `-${stickyOffset + 16}px 0px -70% 0px`,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [currentSplit, stickyOffset]);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getCaughtPokemonName = (locationName: string): string | undefined => {
        const name = run.caughtPokemon.find(
            (caught) => caught.location === locationName
        )?.name;

        return name
            ? StringHelpers.toTitleCase(
                  PokemonHelpers.getPokemonData(name)?.name ?? name
              )
            : undefined;
    };

    const isLocationMissed = (locationName: string): boolean =>
        run.missedLocations.includes(locationName);

    const hasEncounters = (location: Location): boolean => {
        const encountersKeys = location.subareas
            ? location.subareas.map((subarea) => subarea.encountersKey)
            : [location.encountersKey];

        return encountersKeys.some(
            (key) => key && (game.encounters[key]?.length ?? 0) > 0
        );
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
                    <div className={styles.badge}>
                        <Image alt="" fill src={badge} />
                    </div>
                    <span className={styles['toc-label']}>Locations</span>
                    <ul className={styles['toc-list']}>
                        {currentSplit?.locations.map((location, index) => {
                            const caughtPokemonName = getCaughtPokemonName(
                                location.name
                            );
                            const missed = isLocationMissed(location.name);
                            const slug = StringHelpers.toSlug(location.name);

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
                                                      : "This encounter hasn't been taken"
                                            }
                                        >
                                            <span
                                                className={[
                                                    styles['caught-icon'],
                                                    missed &&
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
                                            className={styles['caught-icon']}
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
                </nav>
                <div className={styles.locations}>
                    {currentSplit?.locations.map((location, index) => (
                        <SplitLocation
                            game={game}
                            key={`${location.name}-${index}`}
                            location={location}
                            onSelectAbility={onSelectAbility}
                            onSelectLocation={onSelectLocation}
                            onSelectMove={onSelectMove}
                            run={run}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplitTab;
