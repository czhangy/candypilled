import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import EvolutionLine from '@/components/run/SplitTab/SplitLocation/PokedexTile/EvolutionLine/EvolutionLine';
import LearnsetList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import { MOVE_SLOT_COUNT, STAT_FIELDS } from '@/lib/static/constants';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, StatValues } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import MoveCard from './MoveCard/MoveCard';
import styles from './PokemonPreview.module.scss';

type PokemonPreviewProps = {
    canSelectLocation: boolean;
    generation: number;
    levelCap: number | null;
    onSelectAbility: (slug: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (slug: string) => void;
    onToggleStatus: (pokemon: CaughtPokemon) => void;
    pokemon?: CaughtPokemon;
    variant: string;
    version: string;
};

const PokemonPreview: React.FC<PokemonPreviewProps> = ({
    canSelectLocation,
    generation,
    levelCap,
    onSelectAbility,
    onSelectItem,
    onSelectLocation,
    onSelectMove,
    onSelectSpecies,
    onToggleStatus,
    pokemon,
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

    const SPRITE_SIZE = 120;

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
    const evolutionLine = pokemon
        ? EvolutionHelpers.getFullEvolutionLine(pokemon.slug, generation)
        : undefined;
    const learnset = pokemon
        ? PokemonHelpers.getPokemonLearnset(pokemon.slug, version)
        : undefined;
    const isOverCap =
        !!pokemon && levelCap !== null && pokemon.level > levelCap;
    const moveSlots = pokemon
        ? Array.from(
              { length: MOVE_SLOT_COUNT },
              (_, index) => pokemon.moves[index]
          )
        : [];
    const abilitySlug = pokemon?.ability;
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
                                                {NatureHelpers.getNatureEffect(
                                                    pokemon.nature
                                                ) && (
                                                    <span
                                                        className={
                                                            styles[
                                                                'nature-effect'
                                                            ]
                                                        }
                                                    >
                                                        {' '}
                                                        {NatureHelpers.getNatureEffect(
                                                            pokemon.nature
                                                        )}
                                                    </span>
                                                )}
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
                                </div>
                            </div>
                            <div className={styles.actions}>
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
                        <div className={styles['evolution-wrapper']}>
                            <EvolutionLine
                                currentSlug={pokemon.slug}
                                hideTradeEvos={hideTradeEvos}
                                onSelectSpecies={onSelectSpecies}
                                step={evolutionLine}
                                variant={variant}
                            />
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
                        <div className={styles.section}>
                            <span className={styles['section-label']}>
                                Learnset
                            </span>
                            <LearnsetList
                                generation={generation}
                                interactive
                                moves={learnset ?? []}
                                onSelectMove={onSelectMove}
                            />
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokémon to preview it
                    </span>
                )}
            </div>
        </div>
    );
};

export default PokemonPreview;
