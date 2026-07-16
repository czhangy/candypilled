import Image from 'next/image';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonBox.module.scss';

interface PokemonBoxProps {
    caughtPokemon: CaughtPokemon[];
    levelCap: number | null;
    onAddPokemonClick: () => void;
    onSelectPokemon: (location: string) => void;
    onViewChange: (view: BoxView) => void;
    selectedPokemon?: string;
    variant: string;
    view: BoxView;
}

const PokemonBox: React.FC<PokemonBoxProps> = ({
    caughtPokemon,
    levelCap,
    onAddPokemonClick,
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
    // RENDERING
    // -------------------------------------------------------------------------

    const displayedPokemon = caughtPokemon.filter((pokemon) =>
        view === 'graveyard'
            ? pokemon.status === PokemonStatus.Dead
            : pokemon.status !== PokemonStatus.Dead
    );
    const emptyMessage =
        view === 'graveyard' ? 'Graveyard is empty' : 'Box is empty';

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handlePokemonClick = (location: string): void => {
        onSelectPokemon(location);
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
                            const data = PokemonHelpers.get(pokemon.name);
                            const sprite = PokemonHelpers.getSprite(
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
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    key={pokemon.location}
                                    onClick={() =>
                                        handlePokemonClick(pokemon.location)
                                    }
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
