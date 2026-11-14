import { useState } from 'react';
import Image from 'next/image';
import CloseIcon from '@/lib/icons/CloseIcon';
import FilterIcon from '@/lib/icons/FilterIcon';
import { PokemonStatus } from '@/lib/static/enums';
import {
    BoxFilters as BoxFiltersValue,
    BoxView,
    CaughtPokemon,
    GameDataSource,
} from '@/lib/static/types';
import BoxFilterHelpers from '@/lib/utils/BoxFilterHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import BoxFilters from './BoxFilters/BoxFilters';
import styles from './PokemonBox.module.scss';

type PokemonBoxProps = {
    caughtPokemon: CaughtPokemon[];
    dataSource: GameDataSource;
    generation: number;
    levelCap: number | null;
    onSelectPokemon: (location: string) => void;
    onViewChange: (view: BoxView) => void;
    selectedPokemon?: string;
    version: string;
    view: BoxView;
};

const PokemonBox: React.FC<PokemonBoxProps> = ({
    caughtPokemon,
    dataSource,
    generation,
    levelCap,
    onSelectPokemon,
    onViewChange,
    selectedPokemon,
    version,
    view,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;
    const ITEM_ICON_SIZE = 24;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [filters, setFilters] = useState<BoxFiltersValue>(
        BoxFilterHelpers.EMPTY
    );
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeFilterCount = BoxFilterHelpers.countActive(filters);
    const hasActiveFilters = activeFilterCount > 0;
    const displayedPokemon = caughtPokemon.filter(
        (pokemon) =>
            (view === 'dead'
                ? pokemon.status === PokemonStatus.Dead
                : pokemon.status !== PokemonStatus.Dead) &&
            BoxFilterHelpers.matches(
                pokemon,
                filters,
                dataSource,
                generation,
                version
            )
    );
    const emptyMessage = hasActiveFilters
        ? 'No Pokémon match these filters'
        : `No ${view} Pokémon`;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handlePokemonClick = (location: string): void => {
        onSelectPokemon(location);
    };

    const handleFiltersClear = (): void => {
        setFilters(BoxFilterHelpers.EMPTY);
    };

    const handleFilterToggleClick = (): void => {
        setIsFilterPanelOpen(!isFilterPanelOpen);
    };

    const handleViewClick = (nextView: BoxView): void => {
        onViewChange(nextView);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-box']}>
            <div className={styles.header}>
                <button
                    aria-pressed={view === 'alive'}
                    className={[
                        styles['header-button'],
                        view === 'alive' && styles['header-button--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    onClick={() => handleViewClick('alive')}
                    type="button"
                >
                    Alive
                </button>
                <button
                    aria-pressed={view === 'dead'}
                    className={[
                        styles['header-button'],
                        view === 'dead' && styles['header-button--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    onClick={() => handleViewClick('dead')}
                    type="button"
                >
                    Dead
                </button>
                <div className={styles['header-actions']}>
                    {hasActiveFilters && (
                        <button
                            aria-label="Clear all filters"
                            className={[
                                styles['header-button'],
                                styles['header-button--icon'],
                            ].join(' ')}
                            onClick={handleFiltersClear}
                            type="button"
                        >
                            <CloseIcon />
                        </button>
                    )}
                    <button
                        aria-expanded={isFilterPanelOpen}
                        aria-label="Toggle filters"
                        className={[
                            styles['header-button'],
                            styles['header-button--icon'],
                            (isFilterPanelOpen || hasActiveFilters) &&
                                styles['header-button--active'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        onClick={handleFilterToggleClick}
                        type="button"
                    >
                        <FilterIcon />
                        {hasActiveFilters && activeFilterCount}
                    </button>
                </div>
            </div>
            {isFilterPanelOpen && (
                <BoxFilters
                    dataSource={dataSource}
                    filters={filters}
                    generation={generation}
                    onChange={setFilters}
                />
            )}
            <div
                className={[
                    styles.content,
                    displayedPokemon.length === 0 && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {displayedPokemon.length > 0 ? (
                    <div className={styles.grid}>
                        {displayedPokemon.map((pokemon) => {
                            const displaySlug = PokemonHelpers.getDisplaySlug(
                                dataSource,
                                pokemon
                            );
                            const data = PokemonHelpers.getPokemonData(
                                dataSource,
                                displaySlug
                            );
                            const sprite =
                                PokemonHelpers.getBoxSprite(displaySlug);
                            const heldItemData = pokemon.heldItem
                                ? ItemHelpers.getHeldItemData(
                                      dataSource,
                                      pokemon.heldItem
                                  )
                                : undefined;
                            const isOverCap =
                                levelCap !== null && pokemon.level > levelCap;

                            return (
                                <button
                                    aria-pressed={
                                        pokemon.location === selectedPokemon
                                    }
                                    className={[
                                        styles.slot,
                                        pokemon.location === selectedPokemon &&
                                            styles['slot--selected'],
                                        isOverCap && styles['slot--over-cap'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    key={pokemon.location}
                                    onClick={() =>
                                        handlePokemonClick(pokemon.location)
                                    }
                                    type="button"
                                >
                                    <Image
                                        alt={data?.name ?? pokemon.slug}
                                        height={SPRITE_HEIGHT}
                                        src={sprite}
                                        width={SPRITE_WIDTH}
                                    />
                                    {heldItemData && (
                                        <Image
                                            alt={heldItemData.name}
                                            className={styles['held-item']}
                                            height={ITEM_ICON_SIZE}
                                            src={heldItemData.sprite}
                                            width={ITEM_ICON_SIZE}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <span className={styles.placeholder}>{emptyMessage}</span>
                )}
            </div>
        </div>
    );
};

export default PokemonBox;
