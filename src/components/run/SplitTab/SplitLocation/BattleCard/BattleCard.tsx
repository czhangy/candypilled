import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { Battle, BattlePokemon } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './BattleCard.module.scss';

interface BattleCardProps {
    battle: Battle;
    generation: number;
    isDefeated: boolean;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onToggleDefeated: () => void;
    starter: string;
    variant: string;
}

const BattleCard: React.FC<BattleCardProps> = ({
    battle,
    generation,
    isDefeated,
    onSelectAbility,
    onSelectMove,
    onToggleDefeated,
    starter,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const ITEM_SPRITE_SIZE = 32;
    const MOVE_SLOT_COUNT = 4;
    const SPRITE_SIZE = 96;
    const TEAM_SLOT_COUNT = 6;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 13;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getTypes = (name: string): string[] =>
        PokemonHelpers.getPokemonTypes(name, generation) ?? [];

    const getAbility = (pokemon: BattlePokemon): string | undefined => {
        const ability = PokemonHelpers.getAbilityName(
            pokemon.name,
            generation,
            pokemon.ability
        );
        return ability && StringHelpers.toTitleCase(ability);
    };

    const getMoveColor = (move: string): string | undefined => {
        const type = MoveHelpers.getMoveForGeneration(move, generation)?.type;
        return type ? TypeHelpers.getTypeColor(type) : undefined;
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityClick = (ability: string): void => {
        onSelectAbility(ability);
    };

    const handleMoveClick = (move: string): void => {
        onSelectMove(move);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const team = BattleHelpers.getTeamFromOptions(battle, starter);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <span className={styles.label}>
                {battle.isBoss
                    ? 'Boss'
                    : battle.isMiniboss
                      ? 'Miniboss'
                      : 'Battle'}
            </span>
            <div className={styles.content}>
                <div className={styles['trainer-header']}>
                    {battle.trainerClass} {battle.name}
                </div>
                <div className={styles.body}>
                    <div className={styles.trainer}>
                        <div className={styles['trainer__sprite']}>
                            <Image
                                alt={`${battle.trainerClass} ${battle.name}`}
                                height={SPRITE_SIZE}
                                src={TrainerHelpers.getTrainerSprite(
                                    battle.trainerClass,
                                    battle.name,
                                    variant
                                )}
                                width={SPRITE_SIZE}
                            />
                        </div>
                        {battle.isOptional && (
                            <div className={styles['trainer__metadata']}>
                                OPTIONAL
                            </div>
                        )}
                        {battle.isTrueDouble ? (
                            <div className={styles['trainer__metadata']}>
                                TRUE DOUBLE
                            </div>
                        ) : (
                            battle.isDouble && (
                                <div className={styles['trainer__metadata']}>
                                    DOUBLE
                                </div>
                            )
                        )}
                        {battle.fieldCondition && (
                            <div className={styles['trainer__metadata']}>
                                {battle.fieldCondition}
                                {battle.fieldCondition === 'Fog' && (
                                    <Tooltip
                                        position="center"
                                        text="Can be cleared using Defog"
                                    >
                                        <span
                                            className={
                                                styles['field-condition__note']
                                            }
                                        >
                                            *
                                        </span>
                                    </Tooltip>
                                )}
                            </div>
                        )}
                        {battle.items && (
                            <div
                                className={[
                                    styles['trainer__metadata'],
                                    styles['trainer__item'],
                                ].join(' ')}
                            >
                                <span className={styles['trainer__item-count']}>
                                    {`${battle.items.count}x`}
                                </span>
                                <Image
                                    alt={battle.items.name}
                                    height={ITEM_SPRITE_SIZE}
                                    src={ItemHelpers.getItemSprite(
                                        battle.items.name
                                    )}
                                    width={ITEM_SPRITE_SIZE}
                                />
                            </div>
                        )}
                        <button
                            className={[
                                styles['trainer__metadata'],
                                styles['trainer__defeat'],
                                isDefeated &&
                                    styles['trainer__defeat--defeated'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={onToggleDefeated}
                            type="button"
                        >
                            {isDefeated ? 'DEFEATED' : 'DEFEAT'}
                        </button>
                    </div>
                    <div className={styles.team}>
                        {Array.from(
                            { length: TEAM_SLOT_COUNT },
                            (_, index) => team[index] ?? null
                        ).map((pokemon, index) => {
                            if (!pokemon) {
                                return (
                                    <div
                                        className={[
                                            styles['pokemon-slot'],
                                            styles['pokemon-slot--empty'],
                                        ].join(' ')}
                                        key={`empty-${index}`}
                                    />
                                );
                            }

                            const sprite = PokemonHelpers.getPokemonSprite(
                                pokemon.name,
                                variant
                            );
                            const types = getTypes(pokemon.name);
                            const ability = getAbility(pokemon);

                            return (
                                <div
                                    className={styles['pokemon-slot']}
                                    key={`${pokemon.name}-${index}`}
                                >
                                    <div
                                        className={
                                            styles['pokemon-slot__sprite']
                                        }
                                    >
                                        {sprite && (
                                            <Image
                                                alt={pokemon.name}
                                                height={SPRITE_SIZE}
                                                src={sprite}
                                                width={SPRITE_SIZE}
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={styles['pokemon-slot__name']}
                                    >
                                        <span>
                                            Lv.{pokemon.level} {pokemon.name}
                                        </span>
                                        {types.length > 0 && (
                                            <div
                                                className={
                                                    styles[
                                                        'pokemon-slot__types'
                                                    ]
                                                }
                                            >
                                                {types.map((type) => (
                                                    <Image
                                                        alt={type}
                                                        height={
                                                            TYPE_BADGE_HEIGHT
                                                        }
                                                        key={type}
                                                        src={`/types/${type}.png`}
                                                        width={TYPE_BADGE_WIDTH}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <ul
                                        className={
                                            styles['pokemon-slot__metadata']
                                        }
                                    >
                                        <li
                                            className={
                                                styles[
                                                    'pokemon-slot__metadata-item--accent'
                                                ]
                                            }
                                        >
                                            {pokemon.heldItem || '-'}
                                        </li>
                                        <li
                                            className={
                                                styles[
                                                    'pokemon-slot__metadata-item--ability'
                                                ]
                                            }
                                        >
                                            {ability ? (
                                                <button
                                                    className={
                                                        styles['ability-button']
                                                    }
                                                    onClick={() =>
                                                        handleAbilityClick(
                                                            ability
                                                        )
                                                    }
                                                    type="button"
                                                >
                                                    {ability}
                                                </button>
                                            ) : (
                                                '-'
                                            )}
                                        </li>
                                        <li
                                            className={
                                                styles[
                                                    'pokemon-slot__metadata-item--nature'
                                                ]
                                            }
                                        >
                                            {pokemon.nature ? (
                                                <>
                                                    {pokemon.nature}
                                                    {NatureHelpers.getNatureEffect(
                                                        pokemon.nature
                                                    ) && (
                                                        <span
                                                            className={
                                                                styles[
                                                                    'pokemon-slot__nature-effect'
                                                                ]
                                                            }
                                                        >
                                                            {' '}
                                                            {NatureHelpers.getNatureEffect(
                                                                pokemon.nature
                                                            )}
                                                        </span>
                                                    )}
                                                </>
                                            ) : (
                                                '-'
                                            )}
                                        </li>
                                        {Array.from(
                                            { length: MOVE_SLOT_COUNT },
                                            (_, index) =>
                                                pokemon.moves[index] ?? '-'
                                        ).map((move, index) =>
                                            move === '-' ? (
                                                <li key={index}>{move}</li>
                                            ) : (
                                                <li key={index}>
                                                    <button
                                                        className={[
                                                            styles[
                                                                'move-button'
                                                            ],
                                                            MoveHelpers.isDangerousMove(
                                                                move
                                                            ) &&
                                                                styles[
                                                                    'move-button--dangerous'
                                                                ],
                                                        ]
                                                            .filter(Boolean)
                                                            .join(' ')}
                                                        onClick={() =>
                                                            handleMoveClick(
                                                                move
                                                            )
                                                        }
                                                        style={
                                                            {
                                                                '--move-color':
                                                                    getMoveColor(
                                                                        move
                                                                    ),
                                                            } as React.CSSProperties
                                                        }
                                                        type="button"
                                                    >
                                                        {move}
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleCard;
