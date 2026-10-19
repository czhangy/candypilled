'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import SplitLocation from '@/components/run/SplitLocation/SplitLocation';
import { Encounter, Game, Location, Run } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './LocationsTab.module.scss';

type LocationsTabProps = {
    game: Game;
    onSelectAbility: (slug: string) => void;
    onSelectBattleMarker: (battleKey: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectLocationName: (locationName: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    onSelectTrainer: (battleKey: string) => void;
    run: Run;
    selectedBattleKey?: string;
    selectedLocationName?: string;
    stickyOffset: number;
};

const LocationsTab: React.FC<LocationsTabProps> = ({
    game,
    onSelectAbility,
    onSelectBattleMarker,
    onSelectItem,
    onSelectLocation,
    onSelectLocationName,
    onSelectMove,
    onSelectSpecies,
    onSelectTrainer,
    run,
    selectedBattleKey,
    selectedLocationName,
    stickyOffset,
}) => {
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

    const variant = game.pokemonAssetFolder ?? game.version;

    // Every location in the game, sorted alphabetically -- this tab is a
    // flat, always-ungated reference view independent of split progress,
    // unlike the Split tab. Only one is ever rendered at a time, picked
    // below.
    const locations = [...game.locations].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const selectedIndex = selectedLocationName
        ? locations.findIndex(
              (location) => location.name === selectedLocationName
          )
        : -1;
    // Falls back to whichever location contains selectedBattleKey (directly
    // or within a subarea) when arriving via a battle deep-link with no
    // explicit selected location, else the first location alphabetically.
    const battleLocationIndex = selectedBattleKey
        ? locations.findIndex((location) =>
              (
                  location.battles ??
                  location.subareas?.flatMap(
                      (subarea) => subarea.battles ?? []
                  ) ??
                  []
              ).some((battle) => battle.battleKey === selectedBattleKey)
          )
        : -1;
    const activeIndex =
        selectedIndex !== -1
            ? selectedIndex
            : battleLocationIndex !== -1
              ? battleLocationIndex
              : 0;
    const activeLocation = locations[activeIndex] as Location | undefined;

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

    const handleLocationClick = (locationName: string): void => {
        onSelectLocationName(locationName);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['locations-tab']}
            style={
                {
                    '--sticky-offset': `${stickyOffset}px`,
                } as React.CSSProperties
            }
        >
            <div className={styles.body}>
                <nav className={styles.toc}>
                    <div className={styles['toc-header']}>
                        <ul className={styles['toc-list']}>
                            {locations.map((location, index) => {
                                const caughtPokemonName = getCaughtPokemonName(
                                    location.name
                                );
                                const missed = isLocationMissed(location.name);
                                const allEncountersDupes =
                                    isAllEncountersDupes(location);
                                const isActive = index === activeIndex;

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
                                        <button
                                            className={[
                                                styles['toc-link'],
                                                isActive &&
                                                    styles['toc-link--active'],
                                            ]
                                                .filter(Boolean)
                                                .join(' ')}
                                            onClick={() =>
                                                handleLocationClick(
                                                    location.name
                                                )
                                            }
                                            type="button"
                                        >
                                            {location.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
                <div className={styles.locations}>
                    {activeLocation && (
                        <SplitLocation
                            game={game}
                            index={activeIndex}
                            key={`${activeLocation.name}-${activeIndex}`}
                            location={activeLocation}
                            onSelectAbility={onSelectAbility}
                            onSelectBattleMarker={onSelectBattleMarker}
                            onSelectItem={onSelectItem}
                            onSelectLocation={onSelectLocation}
                            onSelectMove={onSelectMove}
                            onSelectSpecies={onSelectSpecies}
                            onSelectTrainer={onSelectTrainer}
                            run={run}
                            selectedBattleKey={selectedBattleKey}
                            splitName={undefined}
                            variant={variant}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LocationsTab;
