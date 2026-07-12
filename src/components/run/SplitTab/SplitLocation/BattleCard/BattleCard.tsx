import { Trainer } from '@/lib/static/types';
import styles from './BattleCard.module.scss';

interface BattleCardProps {
    trainer: Trainer;
}

const BattleCard: React.FC<BattleCardProps> = ({ trainer }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <span className={styles.label}>Battle</span>
            <div className={styles.content}>
                <span className={styles.name}>
                    {trainer.trainerClass} {trainer.name}
                </span>
            </div>
        </div>
    );
};

export default BattleCard;
