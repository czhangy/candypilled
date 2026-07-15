import { LearnsetMove } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './LearnsetList.module.scss';

interface LearnsetListProps {
    moves: LearnsetMove[];
}

const LearnsetList: React.FC<LearnsetListProps> = ({ moves }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const METHOD_LABELS: Record<LearnsetMove['method'], string> = {
        'level-up': 'Level',
        machine: 'TM',
        egg: 'Egg',
        tutor: 'Tutor',
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <ul className={styles['learnset-list']}>
            {moves.map((move) => (
                <li
                    className={styles.row}
                    key={`${move.method}-${move.name}-${move.level ?? ''}`}
                >
                    <span
                        className={[
                            styles.method,
                            styles[`method--${move.method}`],
                        ].join(' ')}
                    >
                        {move.method === 'level-up'
                            ? `Lv. ${move.level}`
                            : METHOD_LABELS[move.method]}
                    </span>
                    <span className={styles.name}>
                        {MoveHelpers.get(move.name)?.name ?? move.name}
                    </span>
                </li>
            ))}
            {moves.length === 0 && (
                <li className={styles.empty}>No moves found</li>
            )}
        </ul>
    );
};

export default LearnsetList;
