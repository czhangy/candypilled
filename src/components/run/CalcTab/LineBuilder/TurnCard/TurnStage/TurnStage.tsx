import { useId } from 'react';
import { LINE_SIDES } from '@/lib/static/constants';
import {
    GameDataSource,
    LinePokemon,
    LinePosition,
    LineSide,
    LineSlot,
} from '@/lib/static/types';
import LineHelpers from '@/lib/utils/LineHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './TurnStage.module.scss';

type TurnStageProps = {
    dataSource: GameDataSource;
    isLocked: boolean;
    onPokemonClear: (side: LineSide, slot: number) => void;
    order: LinePosition[];
    slots: {
        index: number;
        pokemon: LinePokemon | undefined;
        position: LinePosition;
        side: LineSide;
        slot: LineSlot;
    }[];
    variant: string;
};

const TurnStage: React.FC<TurnStageProps> = ({
    dataSource,
    isLocked,
    onPokemonClear,
    order,
    slots,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type Point = { x: number; y: number };

    const WIDTH = 400;
    const SPRITE_SIZE = 96;
    const SIDE_X: Record<LineSide, number> = { player: 100, trainer: 300 };
    const CLEAR_RADIUS = 10;
    const CLEAR_CROSS = 4;
    const ARROW_TAIL_GAP = 4;
    const ARROW_HEAD_GAP = 6;
    const ARROW_HEAD_LENGTH = 10;
    const LABEL_OFFSET = 12;
    // How far each of two opposing arrows between the same pair sits to its
    // own side of the line between them, so they don't overlap.
    const REVERSE_ARROW_OFFSET = 7;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getCenter = (position: LinePosition): Point => {
        const { index, side } = LineHelpers.parsePosition(position);
        return { x: SIDE_X[side], y: rowHeight * (index + 0.5) };
    };

    // The occupied positions a move from `attacker` on `side` hits.
    const getTargetPositions = (
        attacker: LinePosition,
        side: LineSide,
        target: LineSlot['target']
    ): LinePosition[] => {
        if (!target) return [];
        if (target === 'foes') {
            return occupied
                .filter((entry) => entry.side !== side)
                .map((entry) => entry.position);
        }
        if (target === 'others') {
            return occupied
                .filter((entry) => entry.position !== attacker)
                .map((entry) => entry.position);
        }
        return occupied.some((entry) => entry.position === target)
            ? [target]
            : [];
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const stageId = useId();

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClearKeyDown = (
        event: React.KeyboardEvent<SVGGElement>,
        side: LineSide,
        slot: number
    ): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onPokemonClear(side, slot);
        }
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    // useId's colons aren't valid inside a url(#…) reference.
    const markerId = stageId.replace(/:/g, '');
    const slotsPerSide = slots.length / LINE_SIDES.length;
    // Doubles need room between stacked sprites for an arrow.
    const rowHeight = SPRITE_SIZE + (slotsPerSide > 1 ? 40 : 8);
    const height = rowHeight * slotsPerSide;
    const occupied = slots.filter(({ pokemon }) => pokemon);

    // One arrow per attacker/target pair; only an attacker's first arrow
    // carries the move's label.
    const pairs = occupied.flatMap(({ position, side, slot }) => {
        const { move, target } = slot;
        if (!move) return [];

        return getTargetPositions(position, side, target).map((to, index) => ({
            from: position,
            hasLabel: index === 0,
            move,
            side,
            to,
        }));
    });
    const arrows = pairs.map((pair) => {
        const from = getCenter(pair.from);
        const to = getCenter(pair.to);
        const length = Math.hypot(to.x - from.x, to.y - from.y);
        const ux = (to.x - from.x) / length;
        const uy = (to.y - from.y) / length;
        // The normal points to this arrow's own side of the line between
        // the two Pokémon, which is the opposite side for a reverse arrow.
        const nx = -uy;
        const ny = ux;
        const hasReverse = pairs.some(
            (other) => other.from === pair.to && other.to === pair.from
        );
        const offset = hasReverse ? REVERSE_ARROW_OFFSET : 0;
        // Distance from a sprite's center to its edge along the arrow's
        // direction, so the arrow starts and ends at the sprite borders.
        const edge = Math.min(
            SPRITE_SIZE / 2 / Math.abs(ux),
            SPRITE_SIZE / 2 / Math.abs(uy)
        );
        const start: Point = {
            x: from.x + ux * (edge + ARROW_TAIL_GAP) + nx * offset,
            y: from.y + uy * (edge + ARROW_TAIL_GAP) + ny * offset,
        };
        // The line stops where the arrowhead starts, so it never pokes out
        // past the point.
        const end: Point = {
            x:
                to.x -
                ux * (edge + ARROW_HEAD_GAP + ARROW_HEAD_LENGTH) +
                nx * offset,
            y:
                to.y -
                uy * (edge + ARROW_HEAD_GAP + ARROW_HEAD_LENGTH) +
                ny * offset,
        };
        // The label goes away from an opposing arrow, or above a lone one.
        const labelSide = hasReverse ? 1 : ny <= 0 ? 1 : -1;
        const rank = order.indexOf(pair.from);
        const moveName =
            MoveHelpers.getMoveData(dataSource, pair.move)?.name ?? pair.move;

        return {
            end,
            key: `${pair.from}>${pair.to}`,
            label: pair.hasLabel
                ? order.length >= 2 && rank !== -1
                    ? `${rank + 1}. ${moveName}`
                    : moveName
                : undefined,
            labelPoint: {
                x: (start.x + end.x) / 2 + nx * labelSide * LABEL_OFFSET,
                y: (start.y + end.y) / 2 + ny * labelSide * LABEL_OFFSET,
            },
            side: pair.side,
            start,
        };
    });

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['turn-stage']}>
            <svg
                className={styles.canvas}
                viewBox={`0 0 ${WIDTH} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {LINE_SIDES.map((side) => (
                        <marker
                            id={`${markerId}-${side}`}
                            key={side}
                            markerHeight={ARROW_HEAD_LENGTH}
                            markerUnits="userSpaceOnUse"
                            markerWidth={ARROW_HEAD_LENGTH}
                            orient="auto"
                            refX={0}
                            refY={ARROW_HEAD_LENGTH / 2}
                        >
                            <path
                                className={styles[`arrowhead--${side}`]}
                                d={`M0,0 L${ARROW_HEAD_LENGTH},${ARROW_HEAD_LENGTH / 2} L0,${ARROW_HEAD_LENGTH} z`}
                            />
                        </marker>
                    ))}
                </defs>
                {slots.map(({ index, pokemon, position, side }) => {
                    const center = getCenter(position);

                    return pokemon ? (
                        <g className={styles.pokemon} key={position}>
                            <image
                                className={styles.sprite}
                                height={SPRITE_SIZE}
                                href={PokemonHelpers.getPokemonSprite(
                                    dataSource,
                                    pokemon.slug,
                                    variant
                                )}
                                width={SPRITE_SIZE}
                                x={center.x - SPRITE_SIZE / 2}
                                y={center.y - SPRITE_SIZE / 2}
                            />
                            {!isLocked && (
                                <g
                                    aria-label="Remove from turn"
                                    className={styles.clear}
                                    onClick={() => onPokemonClear(side, index)}
                                    onKeyDown={(
                                        event: React.KeyboardEvent<SVGGElement>
                                    ) => handleClearKeyDown(event, side, index)}
                                    role="button"
                                    tabIndex={0}
                                    transform={`translate(${
                                        center.x +
                                        SPRITE_SIZE / 2 -
                                        CLEAR_RADIUS
                                    } ${center.y - SPRITE_SIZE / 2 + CLEAR_RADIUS})`}
                                >
                                    <circle
                                        className={styles['clear-background']}
                                        r={CLEAR_RADIUS}
                                    />
                                    <path
                                        className={styles['clear-icon']}
                                        d={`M${-CLEAR_CROSS},${-CLEAR_CROSS} L${CLEAR_CROSS},${CLEAR_CROSS} M${CLEAR_CROSS},${-CLEAR_CROSS} L${-CLEAR_CROSS},${CLEAR_CROSS}`}
                                    />
                                </g>
                            )}
                        </g>
                    ) : (
                        <rect
                            className={styles.placeholder}
                            height={SPRITE_SIZE}
                            key={position}
                            rx={8}
                            width={SPRITE_SIZE}
                            x={center.x - SPRITE_SIZE / 2}
                            y={center.y - SPRITE_SIZE / 2}
                        />
                    );
                })}
                {arrows.map((arrow) => (
                    <g className={styles['arrow-group']} key={arrow.key}>
                        <line
                            className={styles[`arrow--${arrow.side}`]}
                            markerEnd={`url(#${markerId}-${arrow.side})`}
                            x1={arrow.start.x}
                            x2={arrow.end.x}
                            y1={arrow.start.y}
                            y2={arrow.end.y}
                        />
                        {arrow.label && (
                            <text
                                className={styles['arrow-label']}
                                textAnchor="middle"
                                x={arrow.labelPoint.x}
                                y={arrow.labelPoint.y}
                            >
                                {arrow.label}
                            </text>
                        )}
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default TurnStage;
