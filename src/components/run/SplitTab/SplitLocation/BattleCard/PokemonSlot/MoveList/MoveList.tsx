import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { MOVE_SLOT_COUNT } from '@/lib/static/constants';
import { GameDataSource, StatValues } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './MoveList.module.scss';

type MoveListProps = {
    dataSource: GameDataSource;
    generation: number;
    highlightDangerous: boolean;
    isReadOnly: boolean;
    ivs: StatValues;
    moves: string[];
    onSelectMove?: (slug: string) => void;
};

const MoveList: React.FC<MoveListProps> = ({
    dataSource,
    generation,
    highlightDangerous,
    isReadOnly,
    ivs,
    moves,
    onSelectMove,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 32;
    const BADGE_HEIGHT = 13;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMoveColor = (moveSlug: string): string | undefined => {
        const type = MoveHelpers.getMoveType(
            dataSource,
            moveSlug,
            generation,
            ivs
        );
        return type ? TypeHelpers.getTypeColor(type) : undefined;
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <>
            {Array.from(
                { length: MOVE_SLOT_COUNT },
                (_, index) => moves[index] ?? ''
            ).map((moveSlug, index) => {
                const moveData = moveSlug
                    ? MoveHelpers.getMoveData(dataSource, moveSlug)
                    : undefined;
                const moveValues = moveSlug
                    ? MoveHelpers.getMoveForGeneration(
                          dataSource,
                          moveSlug,
                          generation
                      )
                    : undefined;
                const moveType = moveSlug
                    ? MoveHelpers.getMoveType(
                          dataSource,
                          moveSlug,
                          generation,
                          ivs
                      )
                    : undefined;

                if (!moveSlug || !moveData || !moveValues) {
                    return <li key={index}>-</li>;
                }
                const moveName = moveData.name;

                const stats: {
                    key: string;
                    label: string;
                    value: React.ReactNode;
                }[] = [
                    ...(moveType
                        ? [
                              {
                                  key: 'type',
                                  label: 'Type',
                                  value: (
                                      <TypeBadge
                                          height={BADGE_HEIGHT}
                                          type={moveType}
                                          width={BADGE_WIDTH}
                                      />
                                  ),
                              },
                          ]
                        : []),
                    {
                        key: 'cat',
                        label: 'Cat',
                        value: (
                            <CategoryBadge
                                category={moveData.category}
                                height={BADGE_HEIGHT}
                                width={BADGE_WIDTH}
                            />
                        ),
                    },
                    {
                        key: 'bp',
                        label: 'BP',
                        value: moveValues.power ?? '—',
                    },
                    { key: 'pp', label: 'PP', value: moveValues.pp },
                    {
                        key: 'acc',
                        label: 'Acc',
                        value: moveValues.accuracy ?? '—',
                    },
                ];

                const button = isReadOnly ? (
                    <span
                        className={[
                            styles['move-button'],
                            styles['move-button--readonly'],
                            highlightDangerous &&
                                MoveHelpers.isDangerousMove(
                                    dataSource,
                                    moveSlug
                                ) &&
                                styles['move-button--dangerous'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        style={
                            {
                                '--move-color': getMoveColor(moveSlug),
                            } as React.CSSProperties
                        }
                    >
                        {moveName}
                    </span>
                ) : (
                    <button
                        className={[
                            styles['move-button'],
                            highlightDangerous &&
                                MoveHelpers.isDangerousMove(
                                    dataSource,
                                    moveSlug
                                ) &&
                                styles['move-button--dangerous'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        onClick={() => onSelectMove?.(moveSlug)}
                        style={
                            {
                                '--move-color': getMoveColor(moveSlug),
                            } as React.CSSProperties
                        }
                        type="button"
                    >
                        {moveName}
                    </button>
                );

                return (
                    <li key={index}>
                        <Tooltip
                            className={styles['move-tooltip']}
                            position="center"
                            text={
                                <div className={styles['tooltip-stats']}>
                                    {stats.map((stat) => (
                                        <div
                                            className={styles['tooltip-stat']}
                                            key={stat.key}
                                        >
                                            <span
                                                className={
                                                    styles['tooltip-stat-label']
                                                }
                                            >
                                                {stat.label}
                                            </span>
                                            <span
                                                className={
                                                    styles['tooltip-stat-value']
                                                }
                                            >
                                                {stat.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            }
                        >
                            {button}
                        </Tooltip>
                    </li>
                );
            })}
        </>
    );
};

export default MoveList;
