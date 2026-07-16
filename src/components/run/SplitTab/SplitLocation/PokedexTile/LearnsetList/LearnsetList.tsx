import Image from 'next/image';
import { LearnsetMove } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './LearnsetList.module.scss';

interface LearnsetListProps {
    generation: number;
    interactive: boolean;
    moves: LearnsetMove[];
    onSelectMove: (name: string) => void;
}

const LearnsetList: React.FC<LearnsetListProps> = ({
    generation,
    interactive,
    moves,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 32;
    const BADGE_HEIGHT = 14;

    const METHOD_LABELS: Record<LearnsetMove['method'], string> = {
        'level-up': 'Level',
        machine: 'TM',
        tutor: 'Tutor',
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleMoveClick = (name: string): void => {
        onSelectMove(name);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <ul className={styles['learnset-list']}>
            {moves.map((move) => {
                const moveData = MoveHelpers.get(move.name);
                const values = MoveHelpers.getValues(move.name, generation);
                const name = moveData?.name ?? move.name;

                const content = (
                    <>
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
                        <span className={styles.name}>{name}</span>
                        {moveData && values && (
                            <div className={styles.details}>
                                <Image
                                    alt={values.type}
                                    height={BADGE_HEIGHT}
                                    src={`/types/${values.type}.png`}
                                    width={BADGE_WIDTH}
                                />
                                <Image
                                    alt={moveData.category}
                                    height={BADGE_HEIGHT}
                                    src={`/move_categories/${moveData.category}.png`}
                                    width={BADGE_WIDTH}
                                />
                                <span className={styles.power}>
                                    {values.power !== null
                                        ? `${values.power}BP`
                                        : '—'}
                                </span>
                            </div>
                        )}
                    </>
                );

                return (
                    <li key={`${move.method}-${move.name}-${move.level ?? ''}`}>
                        {interactive ? (
                            <button
                                className={styles.row}
                                onClick={() => handleMoveClick(name)}
                                type="button"
                            >
                                {content}
                            </button>
                        ) : (
                            <div
                                className={[styles.row, styles['row--static']]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {content}
                            </div>
                        )}
                    </li>
                );
            })}
            {moves.length === 0 && (
                <li className={styles.empty}>No moves found</li>
            )}
        </ul>
    );
};

export default LearnsetList;
