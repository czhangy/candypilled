import Image from 'next/image';
import { CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonPreview.module.scss';

interface PokemonPreviewProps {
    pokemon?: CaughtPokemon;
    variant: string;
}

const PokemonPreview: React.FC<PokemonPreviewProps> = ({
    pokemon,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 160;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const data = pokemon ? PokemonHelpers.get(pokemon.name) : undefined;
    const sprite = pokemon
        ? PokemonHelpers.getSprite(pokemon.name, variant)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-preview']}>
            <div className={styles.header}>Preview</div>
            <div
                className={[styles.content, !data && styles['content--empty']]
                    .filter(Boolean)
                    .join(' ')}
            >
                {data ? (
                    <div className={styles.sprite}>
                        {sprite && (
                            <Image
                                alt={data.name}
                                height={SPRITE_SIZE}
                                src={sprite}
                                width={SPRITE_SIZE}
                            />
                        )}
                    </div>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokemon to preview it
                    </span>
                )}
            </div>
        </div>
    );
};

export default PokemonPreview;
