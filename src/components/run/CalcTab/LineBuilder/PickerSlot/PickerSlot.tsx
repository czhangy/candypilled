import Image from 'next/image';
import HeldItemIcon from '@/components/common/HeldItemIcon/HeldItemIcon';
import { GameDataSource, LinePokemon } from '@/lib/static/types';
import LineHelpers from '@/lib/utils/LineHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PickerSlot.module.scss';

type PickerSlotProps = {
    dataSource: GameDataSource;
    isDisabled: boolean;
    isSelected: boolean;
    onClick: (pokemon: LinePokemon) => void;
    pokemon: LinePokemon;
    showStatus: boolean;
};

const PickerSlot: React.FC<PickerSlotProps> = ({
    dataSource,
    isDisabled,
    isSelected,
    onClick,
    pokemon,
    showStatus,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        onClick(pokemon);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-pressed={isSelected}
            className={[styles.slot, isSelected && styles['slot--selected']]
                .filter(Boolean)
                .join(' ')}
            disabled={isDisabled}
            onClick={handleClick}
            type="button"
        >
            <Image
                alt={LineHelpers.getName(dataSource, pokemon)}
                height={SPRITE_HEIGHT}
                src={PokemonHelpers.getBoxSprite(pokemon.slug)}
                width={SPRITE_WIDTH}
            />
            {showStatus && pokemon.status && (
                <span
                    className={[
                        styles.status,
                        styles[`status--${pokemon.status}`],
                    ].join(' ')}
                >
                    {pokemon.status.toUpperCase()}
                </span>
            )}
            {pokemon.heldItem && (
                <HeldItemIcon dataSource={dataSource} slug={pokemon.heldItem} />
            )}
        </button>
    );
};

export default PickerSlot;
