import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import { CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonPickerModal.module.scss';

type PokemonPickerModalProps = {
    onClose: () => void;
    onSelect: (pokemon: CaughtPokemon) => void;
    pokemon: CaughtPokemon[];
    variant: string;
};

const PokemonPickerModal: React.FC<PokemonPickerModalProps> = ({
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
                                const sprite = PokemonHelpers.getPokemonSprite(
                                    caughtPokemon.name,
                                    variant
                                );

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
                                                alt={caughtPokemon.name}
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
