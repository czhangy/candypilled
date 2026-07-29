import Image from 'next/image';
import { Encounter } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EncounterRow.module.scss';

type EncounterRowProps = {
    displayChance: number | null;
    encounter: Encounter;
    isCaughtElsewhere: boolean;
    isCaughtHere: boolean;
    isSelected: boolean;
    onClick: () => void;
    onSelectItem: (slug: string) => void;
};

const EncounterRow: React.FC<EncounterRowProps> = ({
    displayChance,
    encounter,
    isCaughtElsewhere,
    isCaughtHere,
    isSelected,
    onClick,
    onSelectItem,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;
    const ITEM_ICON_SIZE = 12;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getLevelLabel = (): string => {
        if (encounter.minLevel === null || encounter.maxLevel === null)
            return '—';

        return encounter.minLevel === encounter.maxLevel
            ? `Lv. ${encounter.minLevel}`
            : `Lv. ${encounter.minLevel}-${encounter.maxLevel}`;
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = PokemonHelpers.getPokemonData(encounter.species);
    const sprite = PokemonHelpers.getBoxSprite(encounter.species);
    const tradeForPokemon = encounter.tradeFor
        ? PokemonHelpers.getPokemonData(encounter.tradeFor)
        : undefined;
    const heldItem = encounter.heldItem
        ? ItemHelpers.getHeldItemData(encounter.heldItem)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <tr
            className={[
                styles.row,
                isSelected && styles['row--selected'],
                isCaughtHere && styles['row--caught'],
                isCaughtElsewhere && styles['row--used'],
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={onClick}
        >
            <td>
                <div className={styles.pokemon}>
                    <div className={styles['pokemon__sprite']}>
                        <Image
                            alt={pokemon?.name ?? encounter.species}
                            height={SPRITE_HEIGHT}
                            src={sprite}
                            width={SPRITE_WIDTH}
                        />
                    </div>
                    <div className={styles['pokemon__info']}>
                        <span>{pokemon?.name ?? encounter.species}</span>
                        {encounter.tradeFor && (
                            <span className={styles['pokemon__trade-for']}>
                                Trade{' '}
                                {tradeForPokemon?.name ?? encounter.tradeFor}
                            </span>
                        )}
                        {heldItem && (
                            <button
                                className={styles['pokemon__held-item']}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onSelectItem(heldItem.slug);
                                }}
                                type="button"
                            >
                                <Image
                                    alt={heldItem.name}
                                    height={ITEM_ICON_SIZE}
                                    src={heldItem.sprite}
                                    width={ITEM_ICON_SIZE}
                                />
                                {heldItem.name}
                            </button>
                        )}
                    </div>
                </div>
            </td>
            <td>{getLevelLabel()}</td>
            <td className={styles.chance}>
                {encounter.chance !== null ? `${displayChance}%` : '—'}
            </td>
        </tr>
    );
};

export default EncounterRow;
