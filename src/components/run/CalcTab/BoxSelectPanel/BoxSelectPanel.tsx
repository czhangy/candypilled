import Image from 'next/image';
import { PokemonStatus } from '@/lib/static/enums';
import { Run } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './BoxSelectPanel.module.scss';

type BoxSelectPanelProps = {
    onSelectPokemon: (location: string) => void;
    run: Run;
    selectedLocation?: string;
};

const BoxSelectPanel: React.FC<BoxSelectPanelProps> = ({
    onSelectPokemon,
    run,
    selectedLocation,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const livingPokemon = run.caughtPokemon.filter(
        (pokemon) => pokemon.status === PokemonStatus.Alive
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['box-select-panel']}>
            {livingPokemon.length > 0 ? (
                <div className={styles.grid}>
                    {livingPokemon.map((pokemon) => (
                        <button
                            aria-pressed={pokemon.location === selectedLocation}
                            className={[
                                styles.slot,
                                pokemon.location === selectedLocation &&
                                    styles['slot--selected'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            key={pokemon.location}
                            onClick={() => onSelectPokemon(pokemon.location)}
                            type="button"
                        >
                            <Image
                                alt={pokemon.name}
                                height={SPRITE_HEIGHT}
                                src={PokemonHelpers.getBoxSprite(pokemon.name)}
                                width={SPRITE_WIDTH}
                            />
                        </button>
                    ))}
                </div>
            ) : (
                <span className={styles.placeholder}>Box is empty</span>
            )}
        </div>
    );
};

export default BoxSelectPanel;
