import { useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { MOVE_SLOT_COUNT, STAT_FIELDS } from '@/lib/static/constants';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon, StatValues } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import EditPokemonModal from './EditPokemonModal/EditPokemonModal';
import EvolveModal from './EvolveModal/EvolveModal';
import MoveCard from './MoveCard/MoveCard';
import styles from './PokemonPreview.module.scss';

type PokemonPreviewProps = {
    accentColor: string;
    buttonTextColor?: string;
    canSelectLocation: boolean;
    generation: number;
    levelCap: number | null;
    onEdit: (
        pokemon: CaughtPokemon,
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'heldItem'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
            | 'tags'
        >
    ) => void;
    onEvolve: (pokemon: CaughtPokemon, newSlug: string) => void;
    onSelectAbility: (slug: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onToggleStatus: (pokemon: CaughtPokemon) => void;
    pokemon?: CaughtPokemon;
    variant: string;
    version: string;
    view: BoxView;
};

const PokemonPreview: React.FC<PokemonPreviewProps> = ({
    accentColor,
    buttonTextColor,
    canSelectLocation,
    generation,
    levelCap,
    onEdit,
    onEvolve,
    onSelectAbility,
    onSelectItem,
    onSelectLocation,
    onSelectMove,
    onToggleStatus,
    pokemon,
    variant,
    version,
    view,
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

    const SPRITE_SIZE = 120;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isEvolveOpen, setIsEvolveOpen] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityClick = (abilitySlug: string): void => {
        onSelectAbility(abilitySlug);
    };

    const handleLocationClick = (location: string): void => {
        onSelectLocation(location);
    };

    const handleItemClick = (itemSlug: string): void => {
        onSelectItem(itemSlug);
    };

    const handleToggleStatusClick = (): void => {
        if (pokemon) {
            onToggleStatus(pokemon);
        }
    };

    const handleEditClick = (): void => {
        setIsEditOpen(true);
    };

    const handleEditClose = (): void => {
        setIsEditOpen(false);
    };

    const handleEditSubmit = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'heldItem'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
            | 'tags'
        >
    ): void => {
        if (pokemon) {
            onEdit(pokemon, details);
        }
    };

    const handleEvolveClick = (): void => {
        setIsEvolveOpen(true);
    };

    const handleEvolveClose = (): void => {
        setIsEvolveOpen(false);
    };

    const handleEvolveConfirm = (newSlug: string): void => {
        if (pokemon) {
            onEvolve(pokemon, newSlug);
        }
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const renderStatValues = (stats: StatValues): React.ReactNode => (
        <div className={styles['stats-grid']}>
            {STAT_FIELDS.map((field) => {
                const modifier = NatureHelpers.getNatureModifier(
                    pokemon?.nature,
                    field.key
                );

                return (
                    <div className={styles.stat} key={field.key}>
                        <span className={styles['stat-label']}>
                            {field.label}
                        </span>
                        <span
                            className={[
                                styles['stat-value'],
                                modifier > 1 && styles['stat-value--increased'],
                                modifier < 1 && styles['stat-value--decreased'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {stats[field.key]}
                        </span>
                    </div>
                );
            })}
        </div>
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const displaySlug = pokemon
        ? PokemonHelpers.getDisplaySlug(pokemon)
        : undefined;
    const data = displaySlug
        ? PokemonHelpers.getPokemonData(displaySlug)
        : undefined;
    const sprite = displaySlug
        ? PokemonHelpers.getPokemonSprite(displaySlug, variant)
        : undefined;
    const hideTradeEvos = settings['disable-trade-evos'] ?? false;
    const nextEvolutions =
        pokemon && pokemon.status !== PokemonStatus.Dead
            ? EvolutionHelpers.getNextEvolutions(
                  pokemon.slug,
                  generation
              ).filter(
                  (step) =>
                      !hideTradeEvos ||
                      !EvolutionHelpers.isTradeEvolution(step.methods)
              )
            : [];
    const isOverCap =
        !!pokemon && levelCap !== null && pokemon.level > levelCap;
    const moveSlots = pokemon
        ? Array.from(
              { length: MOVE_SLOT_COUNT },
              (_, index) => pokemon.moves[index]
          )
        : [];
    const abilitySlug =
        pokemon && displaySlug
            ? PokemonHelpers.getAbilitySlug(
                  displaySlug,
                  generation,
                  pokemon.ability
              )
            : undefined;
    const abilityName = abilitySlug
        ? AbilityHelpers.getAbilityData(abilitySlug)?.name
        : undefined;
    const heldItemSlug = pokemon?.heldItem;
    const heldItemName = heldItemSlug
        ? ItemHelpers.getHeldItemData(heldItemSlug)?.name
        : undefined;
    const ivs = pokemon
        ? StatHelpers.normalizeStats(pokemon.ivs, 31)
        : undefined;
    const baseStats =
        displaySlug && data
            ? PokemonHelpers.getPokemonStats(displaySlug, generation)
            : undefined;
    const stats =
        pokemon && baseStats && ivs
            ? StatHelpers.calculateStats(
                  baseStats,
                  pokemon.level,
                  ivs,
                  StatHelpers.normalizeStats(pokemon.evs, 0),
                  pokemon.nature
              )
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
                {data && pokemon ? (
                    <>
                        <div className={styles.top}>
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
                            <div className={styles.info}>
                                <span className={styles.name}>
                                    {data.name}
                                    {pokemon.gender && (
                                        <span
                                            className={[
                                                styles.gender,
                                                styles[
                                                    `gender--${pokemon.gender}`
                                                ],
                                            ].join(' ')}
                                        >
                                            {pokemon.gender === 'male'
                                                ? '♂'
                                                : '♀'}
                                        </span>
                                    )}
                                </span>
                                <div className={styles.details}>
                                    <div className={styles.detail}>
                                        <span
                                            className={styles['detail-label']}
                                        >
                                            Level
                                        </span>
                                        <span
                                            className={[
                                                styles['detail-value'],
                                                isOverCap &&
                                                    styles[
                                                        'detail-value--over-cap'
                                                    ],
                                            ]
                                                .filter(Boolean)
                                                .join(' ')}
                                        >
                                            {pokemon.level}
                                        </span>
                                    </div>
                                    {pokemon.nature && (
                                        <div className={styles.detail}>
                                            <span
                                                className={
                                                    styles['detail-label']
                                                }
                                            >
                                                Nature
                                            </span>
                                            <a
                                                className={
                                                    styles['detail-link']
                                                }
                                                href={`/natures?nature=${pokemon.nature.toLowerCase()}`}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                {pokemon.nature}
                                            </a>
                                        </div>
                                    )}
                                    {abilitySlug && abilityName && (
                                        <div className={styles.detail}>
                                            <span
                                                className={
                                                    styles['detail-label']
                                                }
                                            >
                                                Ability
                                            </span>
                                            <button
                                                className={
                                                    styles['detail-link']
                                                }
                                                onClick={() =>
                                                    handleAbilityClick(
                                                        abilitySlug
                                                    )
                                                }
                                                type="button"
                                            >
                                                {abilityName}
                                            </button>
                                        </div>
                                    )}
                                    <div className={styles.detail}>
                                        <span
                                            className={styles['detail-label']}
                                        >
                                            Location
                                        </span>
                                        {canSelectLocation ? (
                                            <button
                                                className={
                                                    styles['detail-link']
                                                }
                                                onClick={() =>
                                                    handleLocationClick(
                                                        pokemon.location
                                                    )
                                                }
                                                type="button"
                                            >
                                                {pokemon.location}
                                            </button>
                                        ) : (
                                            <span
                                                className={
                                                    styles['detail-value']
                                                }
                                            >
                                                {pokemon.location}
                                            </span>
                                        )}
                                    </div>
                                    {heldItemSlug && heldItemName && (
                                        <div className={styles.detail}>
                                            <span
                                                className={
                                                    styles['detail-label']
                                                }
                                            >
                                                Held Item
                                            </span>
                                            <button
                                                className={
                                                    styles['detail-link']
                                                }
                                                onClick={() =>
                                                    handleItemClick(
                                                        heldItemSlug
                                                    )
                                                }
                                                type="button"
                                            >
                                                {heldItemName}
                                            </button>
                                        </div>
                                    )}
                                    {pokemon.tags.length > 0 && (
                                        <div className={styles.detail}>
                                            <span
                                                className={
                                                    styles['detail-label']
                                                }
                                            >
                                                Tags
                                            </span>
                                            <div className={styles.tags}>
                                                {pokemon.tags.map((tag) => (
                                                    <span
                                                        className={styles.tag}
                                                        key={tag}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.actions}>
                                {view === 'alive' && (
                                    <button
                                        className={styles['edit-button']}
                                        onClick={handleEditClick}
                                        type="button"
                                    >
                                        EDIT
                                    </button>
                                )}
                                {nextEvolutions.length > 0 && (
                                    <button
                                        className={styles['evolve-button']}
                                        onClick={handleEvolveClick}
                                        type="button"
                                    >
                                        EVOLVE
                                    </button>
                                )}
                                <button
                                    aria-pressed={
                                        pokemon.status === PokemonStatus.Dead
                                    }
                                    className={styles['status-button']}
                                    onClick={handleToggleStatusClick}
                                    type="button"
                                >
                                    {pokemon.status === PokemonStatus.Dead
                                        ? 'REVIVE'
                                        : 'KILL'}
                                </button>
                            </div>
                        </div>
                        {stats && (
                            <div className={styles.section}>
                                <span className={styles['section-label']}>
                                    Stats
                                </span>
                                {renderStatValues(stats)}
                            </div>
                        )}
                        <div className={styles.section}>
                            <span className={styles['section-label']}>
                                Moves
                            </span>
                            <div className={styles['moves-grid']}>
                                {moveSlots.map((move, index) => (
                                    <MoveCard
                                        generation={generation}
                                        ivs={StatHelpers.normalizeStats(
                                            pokemon.ivs,
                                            31
                                        )}
                                        key={move ?? `empty-${index}`}
                                        moveSlug={move}
                                        onSelectMove={onSelectMove}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokémon to preview it
                    </span>
                )}
            </div>
            {isEditOpen && pokemon && (
                <EditPokemonModal
                    accentColor={accentColor}
                    buttonTextColor={buttonTextColor}
                    generation={generation}
                    onClose={handleEditClose}
                    onSubmit={handleEditSubmit}
                    pokemon={pokemon}
                    version={version}
                />
            )}
            {isEvolveOpen && pokemon && (
                <EvolveModal
                    accentColor={accentColor}
                    evolutions={nextEvolutions}
                    onClose={handleEvolveClose}
                    onConfirm={handleEvolveConfirm}
                    pokemonSlug={pokemon.slug}
                    variant={variant}
                />
            )}
        </div>
    );
};

export default PokemonPreview;
