import Image from 'next/image';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonBox.module.scss';

interface PokemonBoxProps {
    caughtPokemon: CaughtPokemon[];
    onSelectPokemon: (location: string) => void;
    selectedPokemon?: string;
    variant: string;
}

const PokemonBox: React.FC<PokemonBoxProps> = ({
    caughtPokemon,
    onSelectPokemon,
    selectedPokemon,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const livingPokemon = caughtPokemon.filter(
        (pokemon) => pokemon.status !== PokemonStatus.Dead
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handlePokemonClick = (location: string): void => {
        onSelectPokemon(location);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-box']}>
            <div className={styles.header}>Box</div>
            <div
                className={[
                    styles.content,
                    livingPokemon.length === 0 && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {livingPokemon.length > 0 ? (
                    <div className={styles.grid}>
                        {livingPokemon.map((pokemon) => {
                            const data = PokemonHelpers.get(pokemon.name);
                            const sprite = PokemonHelpers.getSprite(
                                pokemon.name,
                                variant
                            );

                            return (
                                <button
                                    aria-pressed={
                                        pokemon.location === selectedPokemon
                                    }
                                    className={[
                                        styles.slot,
                                        pokemon.location === selectedPokemon &&
                                            styles['slot--selected'],
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
                    <span className={styles.placeholder}>Box is empty</span>
                )}
            </div>
        </div>
    );
};

export default PokemonBox;
