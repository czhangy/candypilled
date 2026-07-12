import Image from 'next/image';
import { Battle } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './BattleCard.module.scss';

interface BattleCardProps {
    battle: Battle;
    variant: string;
}

const BattleCard: React.FC<BattleCardProps> = ({ battle, variant }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MOVE_SLOT_COUNT = 4;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <span className={styles.label}>Battle</span>
            <div className={styles.content}>
                <div className={styles['trainer-header']}>
                    {battle.trainerClass} {battle.name}
                </div>
                <div className={styles.body}>
                    <div className={styles.trainer}>
                        <div className={styles['trainer__sprite']}>
                            <Image
                                alt={`${battle.trainerClass} ${battle.name}`}
                                height={80}
                                src={TrainerHelpers.getSprite(
                                    battle.trainerClass,
                                    variant
                                )}
                                width={80}
                            />
                        </div>
                        <div className={styles['trainer__metadata']}>
                            {battle.fieldCondition ?? '-'}
                        </div>
                        <div className={styles['trainer__metadata']}>
                            {battle.items
                                ? `${battle.items.count}x ${battle.items.name}`
                                : '-'}
                        </div>
                    </div>
                    <div className={styles.team}>
                        {battle.team.map((pokemon) => {
                            const sprite = PokemonHelpers.getSprite(
                                pokemon.name,
                                variant
                            );

                            return (
                                <div
                                    className={styles['pokemon-slot']}
                                    key={pokemon.name}
                                >
                                    <div
                                        className={
                                            styles['pokemon-slot__sprite']
                                        }
                                    >
                                        {sprite && (
                                            <Image
                                                alt={pokemon.name}
                                                height={80}
                                                src={sprite}
                                                width={80}
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={styles['pokemon-slot__name']}
                                    >
                                        {pokemon.name}
                                    </div>
                                    <div
                                        className={
                                            styles['pokemon-slot__level']
                                        }
                                    >
                                        <span>Lv. {pokemon.level}</span>
                                        <span>{pokemon.nature ?? '-'}</span>
                                    </div>
                                    <div
                                        className={
                                            styles['pokemon-slot__traits']
                                        }
                                    >
                                        <span>{pokemon.ability}</span>
                                    </div>
                                    <ul
                                        className={
                                            styles['pokemon-slot__details']
                                        }
                                    >
                                        <li>{pokemon.heldItem || '-'}</li>
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
