import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import { CaughtPokemon, GameDataSource } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonPickerModal.module.scss';

type PokemonPickerModalProps = {
    dataSource: GameDataSource;
    onClose: () => void;
    onSelect: (pokemon: CaughtPokemon) => void;
    pokemon: CaughtPokemon[];
    variant: string;
};

const PokemonPickerModal: React.FC<PokemonPickerModalProps> = ({
    dataSource,
    onClose,
    onSelect,
    pokemon,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal onClose={onClose} title="Choose a Pokémon">
            {(requestClose) => (
                <div className={styles['pokemon-picker-modal']}>
                    {pokemon.length > 0 ? (
                        <div className={styles.grid}>
                            {pokemon.map((caughtPokemon) => {
                                const displaySlug =
                                    PokemonHelpers.getDisplaySlug(
                                        dataSource,
                                        caughtPokemon
                                    );
                                const sprite = PokemonHelpers.getPokemonSprite(
                                    dataSource,
                                    displaySlug,
                                    variant
                                );
                                const name =
                                    PokemonHelpers.getPokemonData(
                                        dataSource,
                                        displaySlug
                                    )?.name ?? caughtPokemon.slug;

                                return (
                                    <button
                                        className={styles.slot}
                                        key={caughtPokemon.location}
                                        onClick={() => {
                                            onSelect(caughtPokemon);
                                            requestClose();
                                        }}
                                        type="button"
                                    >
                                        {sprite && (
                                            <Image
                                                alt={name}
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
                        <span className={styles.placeholder}>
                            No available Pokémon left in the box.
                        </span>
                    )}
                </div>
            )}
        </Modal>
    );
};

export default PokemonPickerModal;
