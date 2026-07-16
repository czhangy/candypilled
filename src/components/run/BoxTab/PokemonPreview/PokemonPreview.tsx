import Image from 'next/image';
import { CaughtPokemon, StatValues } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import MoveCard from './MoveCard/MoveCard';
import styles from './PokemonPreview.module.scss';

interface PokemonPreviewProps {
    generation: number;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    pokemon?: CaughtPokemon;
    variant: string;
}

const PokemonPreview: React.FC<PokemonPreviewProps> = ({
    generation,
    onSelectAbility,
    onSelectMove,
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
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityClick = (ability: string): void => {
        onSelectAbility(StringHelpers.toTitleCase(ability));
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const renderStatValues = (stats: number | StatValues): React.ReactNode => {
        if (typeof stats === 'number') {
            return <span className={styles['stats-flat']}>{stats}</span>;
        }

        return (
            <div className={styles['stats-grid']}>
                {STAT_FIELDS.map((field) => (
                    <div className={styles.stat} key={field.key}>
                        <span className={styles['stat-label']}>
                            {field.label}
                        </span>
                        <span className={styles['stat-value']}>
                            {stats[field.key]}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const data = pokemon ? PokemonHelpers.get(pokemon.name) : undefined;
    const sprite = pokemon
        ? PokemonHelpers.getSprite(pokemon.name, variant)
        : undefined;
    const moveSlots = pokemon
        ? Array.from(
              { length: MOVE_SLOT_COUNT },
              (_, index) => pokemon.moves[index]
          )
        : [];
    const ability = pokemon?.ability;

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
                        </div>
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
                        {pokemon.ivs !== undefined && (
                            <div className={styles.section}>
                                <span className={styles['section-label']}>
                                    IVs
                                </span>
                                {renderStatValues(pokemon.ivs)}
                            </div>
                        )}
                        {pokemon.evs && (
                            <div className={styles.section}>
                                <span className={styles['section-label']}>
                                    EVs
                                </span>
                                {renderStatValues(pokemon.evs)}
                            </div>
                        )}
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokemon to preview it
                    </span>
                )}
            </div>
        </div>
    );
};

export default PokemonPreview;
