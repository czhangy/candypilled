import Image from 'next/image';
import { Battle } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './BattleCard.module.scss';

interface BattleCardProps {
    battle: Battle;
    isDefeated: boolean;
    onToggleDefeated: () => void;
    starter: string | null;
    variant: string;
}

const BattleCard: React.FC<BattleCardProps> = ({
    battle,
    isDefeated,
    onToggleDefeated,
    starter,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MOVE_SLOT_COUNT = 4;
    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const team = BattleHelpers.getTeam(battle, starter);

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
                                src={TrainerHelpers.getSprite(
                                    battle.trainerClass,
                                    battle.name,
                                    variant
                                )}
                                width={SPRITE_SIZE}
                            />
                        </div>
                        {battle.fieldCondition && (
                            <div className={styles['trainer__metadata']}>
                                {battle.fieldCondition}
                            </div>
                        )}
                        {battle.items && (
                            <div className={styles['trainer__metadata']}>
                                {`${battle.items.count}x ${battle.items.name}`}
                            </div>
                        )}
                        {battle.isOptional && (
                            <div className={styles['trainer__metadata']}>
                                OPTIONAL
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
                        {team.map((pokemon, index) => {
                            const sprite = PokemonHelpers.getSprite(
                                pokemon.name,
                                variant
                            );

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
                                        {pokemon.name}
                                    </div>
                                    <ul
                                        className={
                                            styles['pokemon-slot__metadata']
                                        }
                                    >
                                        <li
                                            className={
                                                styles[
                                                    'pokemon-slot__metadata-item--split'
                                                ]
                                            }
                                        >
                                            <span
                                                className={
                                                    styles[
                                                        'pokemon-slot__metadata-item--level'
                                                    ]
                                                }
                                            >
                                                Lv{pokemon.level}
                                            </span>
                                            <span
                                                className={
                                                    styles[
                                                        'pokemon-slot__metadata-item--accent'
                                                    ]
                                                }
                                            >
                                                {pokemon.heldItem || '-'}
                                            </span>
                                        </li>
                                        <li>{pokemon.ability}</li>
                                        <li>
                                            {pokemon.nature ? (
                                                <>
                                                    {pokemon.nature}
                                                    {NatureHelpers.getEffectLabel(
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
                                                            {NatureHelpers.getEffectLabel(
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
                                        ).map((move, index) => (
                                            <li key={index}>{move}</li>
                                        ))}
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
