'use client';

import { useState, useSyncExternalStore } from 'react';
import Tabs from '@/components/common/Tabs/Tabs';
import DexEntry from '@/components/hof/DexEntry/DexEntry';
import PokemonModal from '@/components/hof/PokemonModal/PokemonModal';
import { VANILLA_DATA_SOURCE } from '@/lib/data/data-sources';
import { GAMES } from '@/lib/data/games';
import DexHelpers from '@/lib/utils/DexHelpers';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './HofPage.module.scss';

const HofPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const FILTER_TABS = [
        { id: 'all', label: 'All' },
        { id: 'champed', label: 'Champed' },
        { id: 'unchamped', label: 'Unchamped' },
    ];

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const entries = useSyncExternalStore(
        HallOfFameHelpers.subscribe,
        HallOfFameHelpers.getSnapshot,
        HallOfFameHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [filter, setFilter] = useState('all');
    const [selectedDexNumber, setSelectedDexNumber] = useState<number | null>(
        null
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const dexNumbers = DexHelpers.getDexNumbers();

    // Dex numbers of every Pokémon on any saved Hall of Fame team.
    const champedDexNumbers = new Set<number>();
    // The same, per version group.
    const champedDexNumbersByVersion = new Map<string, Set<number>>();
    entries.forEach((entry) => {
        const game = GAMES.find(
            (candidate) => StringHelpers.toSlug(candidate.name) === entry.game
        );
        if (!game) return;

        const versionChamped =
            champedDexNumbersByVersion.get(game.version) ?? new Set<number>();
        champedDexNumbersByVersion.set(game.version, versionChamped);
        entry.team.forEach((pokemon) => {
            const data = PokemonHelpers.getPokemonData(
                game.dataSource,
                pokemon.slug
            );
            if (!data) return;

            champedDexNumbers.add(data.dexNumber);
            versionChamped.add(data.dexNumber);
        });
    });
    const champedCount = dexNumbers.filter((dexNumber) =>
        champedDexNumbers.has(dexNumber)
    ).length;

    const visibleDexNumbers = dexNumbers.filter(
        (dexNumber) =>
            filter === 'all' ||
            champedDexNumbers.has(dexNumber) === (filter === 'champed')
    );

    const selected =
        selectedDexNumber === null
            ? undefined
            : PokemonHelpers.getSpeciesByDexNumber(
                  VANILLA_DATA_SOURCE,
                  selectedDexNumber
              );
    // Every version group the selected species is present in, champed if it
    // was champed in any game of the group.
    const selectedGroups =
        selectedDexNumber === null
            ? []
            : DexHelpers.getVersionGroupsWithSpecies(selectedDexNumber).map(
                  (group) => ({
                      champed: !!champedDexNumbersByVersion
                          .get(group.version)
                          ?.has(selectedDexNumber),
                      name: group.games.map((game) => game.name).join('/'),
                      sprite: DexHelpers.getVersionGroupSprite(
                          group,
                          selectedDexNumber
                      ),
                      version: group.version,
                  })
              );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleFilterChange = (id: string): void => {
        setFilter(id);
    };

    const handleEntryClick = (dexNumber: number): void => {
        setSelectedDexNumber(dexNumber);
    };

    const handleModalClose = (): void => {
        setSelectedDexNumber(null);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['hof-page']}>
            <h1 className={styles.title}>Hall of Fame</h1>
            <div className={styles.toolbar}>
                <p className={styles.count}>
                    {champedCount} / {dexNumbers.length} champed
                </p>
                <Tabs
                    activeTab={filter}
                    className={styles.filters}
                    onTabChange={handleFilterChange}
                    tabs={FILTER_TABS}
                />
            </div>
            <ul className={styles.grid}>
                {visibleDexNumbers.map((dexNumber) => {
                    const pokemon = PokemonHelpers.getSpeciesByDexNumber(
                        VANILLA_DATA_SOURCE,
                        dexNumber
                    );
                    if (!pokemon) return null;

                    // The first group is the earliest.
                    const presentGroups =
                        DexHelpers.getVersionGroupsWithSpecies(dexNumber);
                    const shiny = presentGroups.every((group) =>
                        champedDexNumbersByVersion
                            .get(group.version)
                            ?.has(dexNumber)
                    );
                    const baseSprite = DexHelpers.getVersionGroupSprite(
                        presentGroups[0],
                        dexNumber
                    );

                    return (
                        <DexEntry
                            champed={champedDexNumbers.has(dexNumber)}
                            key={pokemon.slug}
                            onClick={() => handleEntryClick(dexNumber)}
                            name={pokemon.name}
                            sprite={
                                baseSprite && shiny
                                    ? PokemonHelpers.getShinySprite(baseSprite)
                                    : baseSprite
                            }
                        />
                    );
                })}
            </ul>
            {selected && selectedDexNumber !== null && (
                <PokemonModal
                    dexNumber={selectedDexNumber}
                    groups={selectedGroups}
                    key={selected.slug}
                    name={selected.name}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
};

export default HofPage;
