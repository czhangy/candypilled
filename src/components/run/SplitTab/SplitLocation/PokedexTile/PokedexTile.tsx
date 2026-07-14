import Image from 'next/image';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokedexTile.module.scss';

interface PokedexTileProps {
    generation: number;
    species?: string;
    variant: string;
}

const PokedexTile: React.FC<PokedexTileProps> = ({
    generation,
    species,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 80;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 14;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = species ? PokemonHelpers.get(species) : undefined;
    const sprite = species
        ? PokemonHelpers.getSprite(species, variant)
        : undefined;
    const types = species
        ? (PokemonHelpers.getTypes(species, generation) ?? [])
        : [];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-tile']}>
            <div className={styles.header}>Pokedex</div>
            <div
                className={[
                    styles.content,
                    !pokemon && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {pokemon ? (
                    <>
                        <div className={styles.sprite}>
                            {sprite && (
                                <Image
                                    alt={pokemon.name}
                                    height={SPRITE_SIZE}
                                    src={sprite}
                                    width={SPRITE_SIZE}
                                />
                            )}
                        </div>
                        <div className={styles.info}>
                            <span className={styles.name}>{pokemon.name}</span>
                            {types.length > 0 && (
                                <div className={styles.types}>
                                    {types.map((type) => (
                                        <Image
                                            alt={type}
                                            height={TYPE_BADGE_HEIGHT}
                                            key={type}
                                            src={`/types/${type}.png`}
                                            width={TYPE_BADGE_WIDTH}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokemon to view its details
                    </span>
                )}
            </div>
        </div>
    );
};

export default PokedexTile;
