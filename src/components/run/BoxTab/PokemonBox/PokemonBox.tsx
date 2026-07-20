import { useState } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonBox.module.scss';
import TagFilter from './TagFilter/TagFilter';

type PokemonBoxProps = {
    caughtPokemon: CaughtPokemon[];
    levelCap: number | null;
    onAddPokemonClick: () => void;
    onReorderPokemon: (fromLocation: string, toLocation: string) => void;
    onSelectPokemon: (location: string) => void;
    onViewChange: (view: BoxView) => void;
    selectedPokemon?: string;
    variant: string;
    view: BoxView;
};

const PokemonBox: React.FC<PokemonBoxProps> = ({
    caughtPokemon,
    levelCap,
    onAddPokemonClick,
    onReorderPokemon,
    onSelectPokemon,
    onViewChange,
    selectedPokemon,
    variant,
    view,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [draggedLocation, setDraggedLocation] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const allTags = [
        ...new Set(caughtPokemon.flatMap((pokemon) => pokemon.tags)),
    ].sort((a, b) => a.localeCompare(b));
    const displayedPokemon = caughtPokemon.filter(
        (pokemon) =>
            (view === 'graveyard'
                ? pokemon.status === PokemonStatus.Dead
                : pokemon.status !== PokemonStatus.Dead) &&
            selectedTags.every((tag) => pokemon.tags.includes(tag))
    );
    const emptyMessage =
        selectedTags.length > 0
            ? 'No Pokémon match the selected tags'
            : view === 'graveyard'
              ? 'Graveyard is empty'
              : 'Box is empty';

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handlePokemonClick = (location: string): void => {
        onSelectPokemon(location);
    };

    const handleViewClick = (nextView: BoxView): void => {
        onViewChange(nextView);
    };

    const handleTagsChange = (tags: string[]): void => {
        setSelectedTags(tags);
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
                    aria-pressed={view === 'box'}
                    className={[
                        styles['header-button'],
                        view === 'box' && styles['header-button--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    onClick={() => handleViewClick('box')}
                    type="button"
                >
                    Box
                </button>
                <button
                    aria-pressed={view === 'graveyard'}
                    className={[
                        styles['header-button'],
                        view === 'graveyard' && styles['header-button--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    onClick={() => handleViewClick('graveyard')}
                    type="button"
                >
                    Graveyard
                </button>
                {allTags.length > 0 && (
                    <TagFilter
                        onChange={handleTagsChange}
                        selectedTags={selectedTags}
                        tags={allTags}
                    />
                )}
                {view === 'box' && (
                    <button
                        className={styles['add-button']}
                        onClick={onAddPokemonClick}
                        type="button"
                    >
                        Add
                    </button>
                )}
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
                            const data = PokemonHelpers.getPokemonData(
                                pokemon.name
                            );
                            const sprite = PokemonHelpers.getPokemonSprite(
                                pokemon.name,
                                variant
                            );
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
                                    {sprite && (
                                        <Image
                                            alt={data?.name ?? pokemon.name}
                                            height={SPRITE_SIZE}
                                            src={sprite}
                                            width={SPRITE_SIZE}
                                        />
                                    )}
                                    {pokemon.tags.length > 0 && (
                                        <Tooltip
                                            position="right"
                                            text={pokemon.tags.join(', ')}
                                        >
                                            <span className={styles.tag} />
                                        </Tooltip>
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
