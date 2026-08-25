import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { MIN_IV } from '@/lib/static/constants';
import { BattlePokemon, GameDataSource } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import MoveList from './MoveList/MoveList';
import styles from './PokemonSlot.module.scss';

type PokemonSlotProps = {
    dataSource: GameDataSource;
    generation: number;
    // Keeps the held item and moveset interactive even when `isReadOnly`,
    // for contexts that allow editing those two fields but not species,
    // ability, or nature (e.g. a saved Hall of Fame team).
    hofDisplay: boolean;
    isReadOnly: boolean;
    onSelectAbility?: (slug: string) => void;
    onSelectItem?: (slug: string) => void;
    onSelectMove?: (slug: string) => void;
    onSelectSpecies?: (species: string) => void;
    pokemon: BattlePokemon | null;
    position: 'single' | 'top' | 'middle' | 'bottom';
    variant: string;
    version: string;
};

const PokemonSlot: React.FC<PokemonSlotProps> = ({
    dataSource,
    generation,
    hofDisplay,
    isReadOnly,
    onSelectAbility,
    onSelectItem,
    onSelectMove,
    onSelectSpecies,
    pokemon,
    position,
    variant,
    version,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 13;
    const ITEM_ICON_SIZE = 16;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getTypes = (name: string): string[] =>
        PokemonHelpers.getPokemonTypes(dataSource, name, generation) ?? [];

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const displaySlug = pokemon
        ? PokemonHelpers.getDisplaySlug(dataSource, pokemon)
        : undefined;
    const speciesName = displaySlug
        ? (PokemonHelpers.getPokemonData(dataSource, displaySlug)?.name ??
          pokemon?.slug)
        : undefined;
    const sprite = displaySlug
        ? PokemonHelpers.getPokemonSprite(dataSource, displaySlug, variant)
        : undefined;
    const heldItemSlug = pokemon?.heldItem;
    const heldItem = heldItemSlug
        ? ItemHelpers.getHeldItemData(dataSource, heldItemSlug)?.name
        : undefined;
    const heldItemSprite = heldItemSlug
        ? ItemHelpers.getHeldItemSprite(dataSource, heldItemSlug)
        : undefined;
    const types = displaySlug ? getTypes(displaySlug) : [];
    const abilitySlug = pokemon?.ability;
    const ability = abilitySlug
        ? AbilityHelpers.getAbilityData(abilitySlug)?.name
        : undefined;
    const highlightDangerous =
        !hofDisplay && !(settings['hide-dangerous'] ?? false);
    const moves =
        pokemon?.moves ??
        (pokemon
            ? PokemonHelpers.getMovesAtLevel(
                  dataSource,
                  pokemon.slug,
                  version,
                  pokemon.level
              )
            : []);
    const speciesContent = pokemon && (
        <>
            <div className={styles['pokemon-slot__sprite']}>
                {sprite && speciesName && (
                    <Image
                        alt={speciesName}
                        height={SPRITE_SIZE}
                        src={sprite}
                        width={SPRITE_SIZE}
                    />
                )}
            </div>
            <div className={styles['pokemon-slot__name']}>
                <span>
                    {!hofDisplay && `Lv.${pokemon.level} `}
                    {speciesName}
                    {pokemon.gender && (
                        <span
                            className={[
                                styles['pokemon-slot__gender'],
                                styles[
                                    `pokemon-slot__gender--${pokemon.gender}`
                                ],
                            ].join(' ')}
                        >
                            {pokemon.gender === 'male' ? '♂' : '♀'}
                        </span>
                    )}
                </span>
                {types.length > 0 && (
                    <div className={styles['pokemon-slot__types']}>
                        {types.map((type) => (
                            <TypeBadge
                                height={TYPE_BADGE_HEIGHT}
                                key={type}
                                type={type}
                                width={TYPE_BADGE_WIDTH}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
    const natureContent = pokemon?.nature && (
        <>
            {pokemon.nature}
            {NatureHelpers.getNatureEffect(pokemon.nature) && (
                <span className={styles['pokemon-slot__nature-effect']}>
                    {' '}
                    {NatureHelpers.getNatureEffect(pokemon.nature)}
                </span>
            )}
        </>
    );
    const positionClass = styles[`pokemon-slot--${position}`];
    const isItemAndMovesReadOnly = isReadOnly && !hofDisplay;
    // Even without a held item, the item slot must stay clickable in HOF
    // display mode so one can be assigned; elsewhere an item button is only
    // shown once a held item actually exists.
    const canClickItem = !isItemAndMovesReadOnly && (!!heldItem || hofDisplay);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!pokemon) {
        return (
            <div
                className={[
                    styles['pokemon-slot'],
                    styles['pokemon-slot--empty'],
                    positionClass,
                ].join(' ')}
            />
        );
    }

    return (
        <div className={[styles['pokemon-slot'], positionClass].join(' ')}>
            {isReadOnly ? (
                <div
                    className={[
                        styles['pokemon-slot__link'],
                        styles['pokemon-slot__link--readonly'],
                    ].join(' ')}
                >
                    {speciesContent}
                </div>
            ) : (
                <button
                    className={styles['pokemon-slot__link']}
                    onClick={() =>
                        onSelectSpecies?.(displaySlug ?? pokemon.slug)
                    }
                    type="button"
                >
                    {speciesContent}
                </button>
            )}
            <ul className={styles['pokemon-slot__metadata']}>
                <li className={styles['pokemon-slot__metadata-item--accent']}>
                    {canClickItem ? (
                        <button
                            className={[
                                styles['ability-button'],
                                styles['held-item'],
                            ].join(' ')}
                            onClick={() => onSelectItem?.(heldItemSlug ?? '')}
                            type="button"
                        >
                            {heldItemSprite && (
                                <Image
                                    alt={heldItem ?? ''}
                                    height={ITEM_ICON_SIZE}
                                    src={heldItemSprite}
                                    width={ITEM_ICON_SIZE}
                                />
                            )}
                            {heldItem ?? '-'}
                        </button>
                    ) : heldItem ? (
                        <span
                            className={[
                                styles['ability-button'],
                                styles['ability-button--readonly'],
                                styles['held-item'],
                            ].join(' ')}
                        >
                            {heldItemSprite && (
                                <Image
                                    alt={heldItem}
                                    height={ITEM_ICON_SIZE}
                                    src={heldItemSprite}
                                    width={ITEM_ICON_SIZE}
                                />
                            )}
                            {heldItem}
                        </span>
                    ) : (
                        '-'
                    )}
                </li>
                <li className={styles['pokemon-slot__metadata-item--ability']}>
                    {ability ? (
                        isReadOnly ? (
                            <span
                                className={[
                                    styles['ability-button'],
                                    styles['ability-button--readonly'],
                                    highlightDangerous &&
                                        AbilityHelpers.isDangerousAbility(
                                            abilitySlug as string
                                        ) &&
                                        styles['ability-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {ability}
                            </span>
                        ) : (
                            <button
                                className={[
                                    styles['ability-button'],
                                    highlightDangerous &&
                                        AbilityHelpers.isDangerousAbility(
                                            abilitySlug as string
                                        ) &&
                                        styles['ability-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() =>
                                    onSelectAbility?.(abilitySlug as string)
                                }
                                type="button"
                            >
                                {ability}
                            </button>
                        )
                    ) : (
                        '-'
                    )}
                </li>
                <li className={styles['pokemon-slot__metadata-item--nature']}>
                    {!pokemon.nature ? (
                        '-'
                    ) : isReadOnly ? (
                        <span
                            className={[
                                styles['ability-button'],
                                styles['ability-button--readonly'],
                            ].join(' ')}
                        >
                            {natureContent}
                        </span>
                    ) : (
                        <a
                            className={styles['ability-button']}
                            href={`/natures?nature=${pokemon.nature.toLowerCase()}`}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {natureContent}
                        </a>
                    )}
                </li>
                <MoveList
                    dataSource={dataSource}
                    generation={generation}
                    highlightDangerous={highlightDangerous}
                    isReadOnly={isItemAndMovesReadOnly}
                    ivs={StatHelpers.normalizeStats(pokemon.ivs, MIN_IV)}
                    moves={moves}
                    onSelectMove={onSelectMove}
                />
            </ul>
        </div>
    );
};

export default PokemonSlot;
