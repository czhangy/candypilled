import { Trainer } from '@/lib/static/types';
import styles from './BattleCard.module.scss';

interface BattleCardProps {
    trainer: Trainer;
}

const BattleCard: React.FC<BattleCardProps> = ({ trainer }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const PLACEHOLDER_SLOTS = Array.from({ length: 6 }, (_, index) => ({
        ability: 'Ability',
        id: index,
        item: 'Held Item',
        level: 100,
        moves: ['Move 1', 'Move 2', 'Move 3', 'Move 4'],
        name: 'Pokemon',
        nature: 'Nature',
    }));

    const PLACEHOLDER_ITEMS = ['1x Potion', '2x Full Restore'];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <span className={styles.label}>Battle</span>
            <div className={styles.content}>
                <div className={styles['trainer-header']}>
                    {trainer.trainerClass} {trainer.name}
                </div>
                <div className={styles.body}>
                    <div className={styles.trainer}>
                        <div className={styles['trainer__sprite']} />
                        <ul className={styles['trainer__items']}>
                            {PLACEHOLDER_ITEMS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.team}>
                        {PLACEHOLDER_SLOTS.map((slot) => (
                            <div
                                className={styles['pokemon-slot']}
                                key={slot.id}
                            >
                                <div
                                    className={styles['pokemon-slot__sprite']}
                                />
                                <div className={styles['pokemon-slot__name']}>
                                    {slot.name}
                                </div>
                                <div className={styles['pokemon-slot__level']}>
                                    Lvl. {slot.level}
                                </div>
                                <div className={styles['pokemon-slot__traits']}>
                                    <span>{slot.nature}</span>
                                    <span>{slot.ability}</span>
                                </div>
                                <ul className={styles['pokemon-slot__details']}>
                                    <li>{slot.item}</li>
                                    {slot.moves.map((move) => (
                                        <li key={move}>{move}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleCard;
