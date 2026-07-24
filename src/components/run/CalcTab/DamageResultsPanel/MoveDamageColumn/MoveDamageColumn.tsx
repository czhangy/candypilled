import { MOVE_SLOT_COUNT } from '@/lib/static/constants';
import { CalcPokemonInput } from '@/lib/static/types';
import DamageCalcHelpers from '@/lib/utils/DamageCalcHelpers';
import styles from './MoveDamageColumn.module.scss';

type MoveDamageColumnProps = {
    activeIndex: number | null;
    attacker: CalcPokemonInput | null;
    defender: CalcPokemonInput | null;
    generation: number;
    moveNames: string[];
    onSelectMove: (index: number) => void;
};

const MoveDamageColumn: React.FC<MoveDamageColumnProps> = ({
    activeIndex,
    attacker,
    defender,
    generation,
    moveNames,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const paddedMoveNames = Array.from(
        { length: MOVE_SLOT_COUNT },
        (_, index) => moveNames[index] ?? ''
    );
    const moveRanges = paddedMoveNames.map((moveName, index) => ({
        index,
        moveName,
        range:
            attacker && defender
                ? DamageCalcHelpers.getDamagePercentRange(
                      generation,
                      attacker,
                      defender,
                      moveName
                  )
                : null,
    }));
    const highestDamage = Math.max(
        ...moveRanges.map(({ range }) => range?.[1] ?? -Infinity)
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['move-damage-column']}>
            {moveRanges.map(({ index, moveName, range }) => (
                <div
                    className={[
                        styles.row,
                        range?.[1] === highestDamage && styles['row--highest'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    key={index}
                >
                    {moveName ? (
                        <button
                            className={[
                                styles.move,
                                index === activeIndex && styles['move--active'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => onSelectMove(index)}
                            type="button"
                        >
                            {moveName}
                        </button>
                    ) : (
                        <span
                            className={[
                                styles.move,
                                styles['move--empty'],
                            ].join(' ')}
                        >
                            -
                        </span>
                    )}
                    <span className={styles.range}>
                        {range ? `${range[0]} - ${range[1]}%` : '-'}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default MoveDamageColumn;
