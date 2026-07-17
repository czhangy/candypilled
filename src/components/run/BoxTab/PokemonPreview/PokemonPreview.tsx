import { useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { STAT_FIELDS } from '@/lib/static/constants';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon, StatValues } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import EditPokemonModal from './EditPokemonModal/EditPokemonModal';
import EvolveModal from './EvolveModal/EvolveModal';
import MoveCard from './MoveCard/MoveCard';
import styles from './PokemonPreview.module.scss';

type PokemonPreviewProps = {
    accentColor: string;
    generation: number;
    levelCap: number | null;
    onEdit: (
        pokemon: CaughtPokemon,
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >
    ) => void;
    onEvolve: (pokemon: CaughtPokemon, newName: string) => void;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onToggleStatus: (pokemon: CaughtPokemon) => void;
    pokemon?: CaughtPokemon;
    variant: string;
    view: BoxView;
};

const PokemonPreview: React.FC<PokemonPreviewProps> = ({
    accentColor,
    generation,
    levelCap,
    onEdit,
    onEvolve,
    onSelectAbility,
    onSelectMove,
    onToggleStatus,
    pokemon,
    variant,
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
    const MOVE_SLOT_COUNT = 4;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isEvolveOpen, setIsEvolveOpen] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityClick = (ability: string): void => {
        onSelectAbility(StringHelpers.toTitleCase(ability));
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
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >
    ): void => {
        setIsEditOpen(false);
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

    const handleEvolveConfirm = (newName: string): void => {
        setIsEvolveOpen(false);
        if (pokemon) {
            onEvolve(pokemon, newName);
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

    const data = pokemon
        ? PokemonHelpers.getPokemonData(pokemon.name)
        : undefined;
    const sprite = pokemon
        ? PokemonHelpers.getPokemonSprite(pokemon.name, variant)
        : undefined;
    const hideTradeEvos = settings['disable-trade-evos'] ?? false;
    const nextEvolutions =
        pokemon && pokemon.status !== PokemonStatus.Dead
            ? EvolutionHelpers.getNextEvolutions(
                  pokemon.name,
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
    const ability = pokemon
        ? PokemonHelpers.getAbilityName(
              pokemon.name,
              generation,
              pokemon.ability
          )
        : undefined;
    const baseStats =
        pokemon && data
            ? PokemonHelpers.getPokemonStats(pokemon.name, generation)
            : undefined;
    const stats =
        pokemon && baseStats
            ? StatHelpers.calculateStats(
                  baseStats,
                  pokemon.level,
                  StatHelpers.normalizeStats(pokemon.ivs, 31),
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
                                <span className={styles.name}>{data.name}</span>
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
                                            <span
                                                className={
                                                    styles['detail-value']
                                                }
                                            >
                                                {pokemon.nature}
                                            </span>
                                        </div>
                                    )}
                                    {ability && (
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
                                                    handleAbilityClick(ability)
                                                }
                                                type="button"
                                            >
                                                {StringHelpers.toTitleCase(
                                                    ability
                                                )}
                                            </button>
                                        </div>
                                    )}
                                    <div className={styles.detail}>
                                        <span
                                            className={styles['detail-label']}
                                        >
                                            Location
                                        </span>
                                        <span
                                            className={styles['detail-value']}
                                        >
                                            {pokemon.location}
                                        </span>
                                    </div>
                                    {pokemon.heldItem && (
                                        <div className={styles.detail}>
                                            <span
                                                className={
                                                    styles['detail-label']
                                                }
                                            >
                                                Held Item
                                            </span>
                                            <span
                                                className={
                                                    styles['detail-value']
                                                }
                                            >
                                                {pokemon.heldItem}
                                            </span>
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
                                {view === 'box' && (
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
                                        key={move ?? `empty-${index}`}
                                        move={move}
                                        onSelectMove={onSelectMove}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokemon to preview it
                    </span>
                )}
            </div>
            {isEditOpen && pokemon && (
                <EditPokemonModal
                    accentColor={accentColor}
                    generation={generation}
                    onClose={handleEditClose}
                    onSubmit={handleEditSubmit}
                    pokemon={pokemon}
                />
            )}
            {isEvolveOpen && pokemon && (
                <EvolveModal
                    accentColor={accentColor}
                    evolutions={nextEvolutions}
                    onClose={handleEvolveClose}
                    onConfirm={handleEvolveConfirm}
                    pokemonName={pokemon.name}
                    variant={variant}
                />
            )}
        </div>
    );
};

export default PokemonPreview;
