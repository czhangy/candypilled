import MoveTooltip from '@/components/run/MoveTooltip/MoveTooltip';
import { MOVE_SLOT_COUNT } from '@/lib/static/constants';
import {
    CalcField,
    CalcPokemonInput,
    GameDataSource,
    StatValues,
} from '@/lib/static/types';
import DamageCalcHelpers from '@/lib/utils/DamageCalcHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveDamageColumn.module.scss';

type MoveDamageColumnProps = {
    attacker: CalcPokemonInput | null;
    dataSource: GameDataSource;
    defender: CalcPokemonInput | null;
    field: CalcField;
    generation: number;
    highlightInaccurate: boolean;
    ivs: StatValues;
    moveNames: string[];
    onSelectMove: (index: number) => void;
};

const MoveDamageColumn: React.FC<MoveDamageColumnProps> = ({
    attacker,
    dataSource,
    defender,
    field,
    generation,
    highlightInaccurate,
    ivs,
    moveNames,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMoveColor = (moveName: string): string | undefined => {
        const type = MoveHelpers.getMoveTypeByName(
            dataSource,
            moveName,
            generation,
            ivs
        );
        return type ? TypeHelpers.getTypeColor(type) : undefined;
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const paddedMoveNames = Array.from(
        { length: MOVE_SLOT_COUNT },
        (_, index) => moveNames[index] ?? ''
    );
    const moveRanges = paddedMoveNames.map((moveName, index) => {
        const slug = MoveHelpers.getSlugByName(dataSource, moveName) ?? '';
        const isStatus =
            MoveHelpers.getMoveCategory(dataSource, slug, generation) ===
            'status';
        const isUncalculable = DamageCalcHelpers.isUncalculableMove(
            dataSource,
            moveName
        );
        const accuracy = MoveHelpers.getMoveForGeneration(
            dataSource,
            slug,
            generation
        )?.accuracy;
        return {
            index,
            isInaccurate:
                highlightInaccurate && accuracy != null && accuracy < 100,
            isStatus,
            isUncalculable,
            moveName,
            slug,
            range:
                attacker && defender && !isStatus && !isUncalculable
                    ? DamageCalcHelpers.getDamagePercentRange(
                          generation,
                          dataSource,
                          attacker,
                          defender,
                          moveName,
                          field
                      )
                    : null,
        };
    });

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['move-damage-column']}>
            {moveRanges.map(
                ({
                    index,
                    isInaccurate,
                    isStatus,
                    isUncalculable,
                    moveName,
                    range,
                    slug,
                }) => (
                    <div className={styles.row} key={index}>
                        {moveName ? (
                            <MoveTooltip
                                className={styles['move-tooltip']}
                                dataSource={dataSource}
                                generation={generation}
                                ivs={ivs}
                                slug={slug}
                            >
                                <button
                                    className={[
                                        styles.move,
                                        isInaccurate &&
                                            styles['move--inaccurate'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    onClick={() => onSelectMove(index)}
                                    style={
                                        {
                                            '--move-color':
                                                getMoveColor(moveName),
                                        } as React.CSSProperties
                                    }
                                    type="button"
                                >
                                    {moveName}
                                </button>
                            </MoveTooltip>
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
                            {isStatus
                                ? 'N/A'
                                : isUncalculable
                                  ? '???'
                                  : range
                                    ? `${range[0]} - ${range[1]}%`
                                    : '-'}
                        </span>
                    </div>
                )
            )}
        </div>
    );
};

export default MoveDamageColumn;
