import Image from 'next/image';
import { CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './HofSlot.module.scss';

type HofSlotProps = {
    onClick: () => void;
    pokemon: CaughtPokemon | null;
    variant: string;
};

const HofSlot: React.FC<HofSlotProps> = ({ onClick, pokemon, variant }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const sprite = pokemon
        ? PokemonHelpers.getPokemonSprite(pokemon.name, variant)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-label={pokemon ? `Replace ${pokemon.name}` : 'Add Pokémon'}
            className={[
                styles['hof-slot'],
                !pokemon && styles['hof-slot--empty'],
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={onClick}
            type="button"
        >
            {pokemon ? (
                <div className={styles['hof-slot__sprite']}>
                    {sprite && (
                        <Image
                            alt={pokemon.name}
                            height={SPRITE_SIZE}
                            src={sprite}
                            width={SPRITE_SIZE}
                        />
                    )}
                </div>
            ) : (
                <span className={styles['hof-slot__placeholder']}>+</span>
            )}
        </button>
    );
};

export default HofSlot;
