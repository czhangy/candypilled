import { useState } from 'react';
import Image from 'next/image';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonBox.module.scss';

type PokemonBoxProps = {
    caughtPokemon: CaughtPokemon[];
    levelCap: number | null;
    onReorderPokemon: (fromLocation: string, toLocation: string) => void;
    onSelectPokemon: (location: string) => void;
    onViewChange: (view: BoxView) => void;
    selectedPokemon?: string;
    view: BoxView;
};

const PokemonBox: React.FC<PokemonBoxProps> = ({
    caughtPokemon,
    levelCap,
    onReorderPokemon,
    onSelectPokemon,
    onViewChange,
    selectedPokemon,
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

    const [draggedLocation, setDraggedLocation] = useState('');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const displayedPokemon = caughtPokemon.filter((pokemon) =>
        view === 'dead'
            ? pokemon.status === PokemonStatus.Dead
            : pokemon.status !== PokemonStatus.Dead
    );
    const emptyMessage =
        view === 'dead' ? 'No dead Pokémon' : 'No alive Pokémon';

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handlePokemonClick = (location: string): void => {
        onSelectPokemon(location);
    };

    const handleViewClick = (nextView: BoxView): void => {
        onViewChange(nextView);
    };

    const handleDragStart = (location: string): void => {
        setDraggedLocation(location);
    };

    const handleDragOver = (e: React.DragEvent<HTMLButtonElement>): void => {
        e.preventDefault();
    };

    const handleDrop = (location: string): void => {
        if (draggedLocation && draggedLocation !== location) {
            onReorderPokemon(draggedLocation, location);
        }

        setDraggedLocation('');
    };

    const handleDragEnd = (): void => {
        setDraggedLocation('');
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
            </div>
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
                            const displaySlug =
                                PokemonHelpers.getDisplaySlug(pokemon);
                            const data =
                                PokemonHelpers.getPokemonData(displaySlug);
                            const sprite =
                                PokemonHelpers.getBoxSprite(displaySlug);
                            const heldItemData = pokemon.heldItem
                                ? ItemHelpers.getHeldItemData(pokemon.heldItem)
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
                                        pokemon.location === draggedLocation &&
                                            styles['slot--dragging'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    draggable
                                    key={pokemon.location}
                                    onClick={() =>
                                        handlePokemonClick(pokemon.location)
                                    }
                                    onDragEnd={handleDragEnd}
                                    onDragOver={handleDragOver}
                                    onDragStart={() =>
                                        handleDragStart(pokemon.location)
                                    }
                                    onDrop={() => handleDrop(pokemon.location)}
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
