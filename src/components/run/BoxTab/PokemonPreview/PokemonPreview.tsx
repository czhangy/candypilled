import { useState } from 'react';
import Image from 'next/image';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, StatValues } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import EvolveModal from './EvolveModal/EvolveModal';
import MoveCard from './MoveCard/MoveCard';
import styles from './PokemonPreview.module.scss';

interface PokemonPreviewProps {
    accentColor: string;
    generation: number;
    onEvolve: (pokemon: CaughtPokemon, newName: string) => void;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onToggleStatus: (pokemon: CaughtPokemon) => void;
    pokemon?: CaughtPokemon;
    variant: string;
}

const PokemonPreview: React.FC<PokemonPreviewProps> = ({
    accentColor,
    generation,
    onEvolve,
    onSelectAbility,
    onSelectMove,
    onToggleStatus,
    pokemon,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 120;
    const MOVE_SLOT_COUNT = 4;

    interface StatField {
        key: keyof StatValues;
        label: string;
    }

    const STAT_FIELDS: StatField[] = [
        { key: 'hp', label: 'HP' },
        { key: 'atk', label: 'Attack' },
        { key: 'def', label: 'Defense' },
        { key: 'spa', label: 'Sp. Atk' },
        { key: 'spd', label: 'Sp. Def' },
        { key: 'spe', label: 'Speed' },
    ];

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

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

    const normalizeStatValues = (
        stats: number | StatValues | undefined,
        fallback: number
    ): StatValues => {
        if (stats === undefined) {
            return {
                atk: fallback,
                def: fallback,
                hp: fallback,
                spa: fallback,
                spd: fallback,
                spe: fallback,
            };
        }

        if (typeof stats === 'number') {
            return {
                atk: stats,
                def: stats,
                hp: stats,
                spa: stats,
                spd: stats,
                spe: stats,
            };
        }

        return stats;
    };

    const renderStatValues = (stats: StatValues): React.ReactNode => (
        <div className={styles['stats-grid']}>
            {STAT_FIELDS.map((field) => (
                <div className={styles.stat} key={field.key}>
                    <span className={styles['stat-label']}>{field.label}</span>
                    <span className={styles['stat-value']}>
                        {stats[field.key]}
                    </span>
                </div>
            ))}
        </div>
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const data = pokemon ? PokemonHelpers.get(pokemon.name) : undefined;
    const sprite = pokemon
        ? PokemonHelpers.getSprite(pokemon.name, variant)
        : undefined;
    const nextEvolutions =
        pokemon && pokemon.status !== PokemonStatus.Dead
            ? PokemonHelpers.getNextEvolutions(pokemon.name, generation)
            : [];
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
            ? PokemonHelpers.getStats(pokemon.name, generation)
            : undefined;
    const stats =
        pokemon && baseStats
            ? StatHelpers.calculate(
                  baseStats,
                  pokemon.level,
                  normalizeStatValues(pokemon.ivs, 31),
                  normalizeStatValues(pokemon.evs, 0),
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
                                            className={styles['detail-value']}
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
                                </div>
                            </div>
                            <div className={styles.actions}>
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
