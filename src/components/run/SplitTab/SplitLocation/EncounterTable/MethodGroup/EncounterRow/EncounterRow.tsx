import Image from 'next/image';
import { EncounterMethod } from '@/lib/static/enums';
import { Encounter, GameDataSource, ItemData } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EncounterRow.module.scss';

type EncounterRowProps = {
    dataSource: GameDataSource;
    displayChance: number | null;
    encounter: Encounter;
    isCaughtElsewhere: boolean;
    isCaughtHere: boolean;
    isSelected: boolean;
    onClick: () => void;
    onSelectItem: (slug: string) => void;
};

const EncounterRow: React.FC<EncounterRowProps> = ({
    dataSource,
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
    // Only these methods roll for a wild held item in the actual games --
    // eggs, gifts, starters, static encounters, fossils, and trades never
    // do, even though a species may list wildHeldItems for its grass/surf/
    // fishing encounters elsewhere.
    const WILD_METHODS = new Set([
        EncounterMethod.Binoculars,
        EncounterMethod.Cave,
        EncounterMethod.FeebasTile,
        EncounterMethod.GoodRod,
        EncounterMethod.Grass,
        EncounterMethod.HoneyTree,
        EncounterMethod.OldRod,
        EncounterMethod.PokeRadar,
        EncounterMethod.SuperRod,
        EncounterMethod.Surf,
        EncounterMethod.Walking,
    ]);

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

    const pokemon = PokemonHelpers.getPokemonData(
        dataSource,
        encounter.species
    );
    const sprite = PokemonHelpers.getBoxSprite(encounter.species);
    const tradeForPokemon = encounter.tradeFor
        ? PokemonHelpers.getPokemonData(dataSource, encounter.tradeFor)
        : undefined;
    const heldItemSlugs = encounter.heldItem
        ? [encounter.heldItem]
        : WILD_METHODS.has(encounter.method)
          ? (pokemon?.wildHeldItems ?? [])
          : [];
    const heldItems = heldItemSlugs
        .map((slug) => ItemHelpers.getHeldItemData(dataSource, slug))
        .filter((item): item is ItemData => item !== undefined);

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
                        {heldItems.map((item) => (
                            <button
                                className={styles['pokemon__held-item']}
                                key={item.slug}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onSelectItem(item.slug);
                                }}
                                type="button"
                            >
                                <Image
                                    alt={item.name}
                                    height={ITEM_ICON_SIZE}
                                    src={item.sprite}
                                    width={ITEM_ICON_SIZE}
                                />
                                {item.name}
                            </button>
                        ))}
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
