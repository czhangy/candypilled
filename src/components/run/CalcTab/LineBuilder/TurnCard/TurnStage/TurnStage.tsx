import { useId, useRef } from 'react';
import { GameDataSource, LinePokemon, LineSide } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './TurnStage.module.scss';

type TurnStageProps = {
    dataSource: GameDataSource;
    isLocked: boolean;
    isPlayerFirst: boolean;
    onPlayerFirstChange: (isPlayerFirst: boolean) => void;
    onPokemonClear: (side: LineSide) => void;
    player: LinePokemon | undefined;
    playerMove: string | undefined;
    trainer: LinePokemon | undefined;
    trainerMove: string | undefined;
    variant: string;
};

const TurnStage: React.FC<TurnStageProps> = ({
    dataSource,
    isLocked,
    isPlayerFirst,
    onPlayerFirstChange,
    onPokemonClear,
    player,
    playerMove,
    trainer,
    trainerMove,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const WIDTH = 400;
    const SPRITE_SIZE = 96;
    const HEIGHT = SPRITE_SIZE + 8;
    const CENTER_Y = HEIGHT / 2;
    const SIDE_X: Record<LineSide, number> = { player: 100, trainer: 300 };
    const CLEAR_RADIUS = 10;
    const CLEAR_CROSS = 4;
    const ARROW_TAIL_GAP = 4;
    const ARROW_HEAD_GAP = 6;
    const ARROW_HEAD_LENGTH = 10;
    const LABEL_OFFSET = 12;
    // How far each of two arrows sits above or below the center line.
    const ARROW_LANE_OFFSET = 7;
    const ARROW_HIT_WIDTH = 16;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // An arrow from `side`'s active Pokémon to the other side's, or nothing
    // unless both are on the field and `side` has picked a move. With two
    // arrows, each takes its own lane above or below the center line.
    const getArrow = (
        side: LineSide,
        move: string | undefined,
        hasBothArrows: boolean
    ) => {
        if (!player || !trainer || !move) return undefined;

        const other: LineSide = side === 'player' ? 'trainer' : 'player';
        // Sprites are side by side, so the arrow runs horizontally between
        // their facing edges.
        const ux = Math.sign(SIDE_X[other] - SIDE_X[side]);
        const lane = !hasBothArrows
            ? 0
            : (side === 'player') === isPlayerFirst
              ? -1
              : 1;
        const y = CENTER_Y + lane * ARROW_LANE_OFFSET;

        return {
            // The line stops where the arrowhead starts, so it never pokes
            // out past the point.
            end:
                SIDE_X[other] -
                ux * (SPRITE_SIZE / 2 + ARROW_HEAD_GAP + ARROW_HEAD_LENGTH),
            label: MoveHelpers.getMoveData(dataSource, move)?.name ?? move,
            // Pushes the label away from the other arrow, or above a lone one.
            labelY: y + (lane === 1 ? LABEL_OFFSET : -LABEL_OFFSET),
            side,
            start: SIDE_X[side] + ux * (SPRITE_SIZE / 2 + ARROW_TAIL_GAP),
            y,
        };
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const stageId = useId();
    const svgRef = useRef<SVGSVGElement>(null);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClearKeyDown = (
        event: React.KeyboardEvent<SVGGElement>,
        side: LineSide
    ): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onPokemonClear(side);
        }
    };

    const handleArrowPointerDown = (
        event: React.PointerEvent<SVGGElement>
    ): void => {
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    // Dragging an arrow above the center line puts it in the top lane, and
    // below it, the bottom lane.
    const handleArrowPointerMove = (
        event: React.PointerEvent<SVGGElement>,
        side: LineSide
    ): void => {
        const svg = svgRef.current;
        if (
            !svg ||
            !hasBothMoves ||
            !event.currentTarget.hasPointerCapture(event.pointerId)
        ) {
            return;
        }

        const rect = svg.getBoundingClientRect();
        const y = ((event.clientY - rect.top) / rect.height) * HEIGHT;
        const isNowPlayerFirst = (side === 'player') === y < CENTER_Y;
        if (isNowPlayerFirst !== isPlayerFirst) {
            onPlayerFirstChange(isNowPlayerFirst);
        }
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    // useId's colons aren't valid inside a url(#…) reference.
    const markerId = stageId.replace(/:/g, '');
    const hasBothMoves = Boolean(
        player && trainer && playerMove && trainerMove
    );
    const arrows = [
        getArrow('player', playerMove, hasBothMoves),
        getArrow('trainer', trainerMove, hasBothMoves),
    ].filter((arrow) => arrow !== undefined);
    const slots: { pokemon: LinePokemon | undefined; side: LineSide }[] = [
        { pokemon: player, side: 'player' },
        { pokemon: trainer, side: 'trainer' },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['turn-stage']}>
            <svg
                className={styles.canvas}
                ref={svgRef}
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {slots.map(({ side }) => (
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
                {slots.map(({ pokemon, side }) =>
                    pokemon ? (
                        <g className={styles.pokemon} key={side}>
                            <image
                                className={styles.sprite}
                                height={SPRITE_SIZE}
                                href={PokemonHelpers.getPokemonSprite(
                                    dataSource,
                                    pokemon.slug,
                                    variant
                                )}
                                width={SPRITE_SIZE}
                                x={SIDE_X[side] - SPRITE_SIZE / 2}
                                y={CENTER_Y - SPRITE_SIZE / 2}
                            />
                            {!isLocked && (
                                <g
                                    aria-label="Remove from turn"
                                    className={styles.clear}
                                    onClick={() => onPokemonClear(side)}
                                    onKeyDown={(
                                        event: React.KeyboardEvent<SVGGElement>
                                    ) => handleClearKeyDown(event, side)}
                                    role="button"
                                    tabIndex={0}
                                    transform={`translate(${
                                        SIDE_X[side] +
                                        SPRITE_SIZE / 2 -
                                        CLEAR_RADIUS
                                    } ${CENTER_Y - SPRITE_SIZE / 2 + CLEAR_RADIUS})`}
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
                            key={side}
                            rx={8}
                            width={SPRITE_SIZE}
                            x={SIDE_X[side] - SPRITE_SIZE / 2}
                            y={CENTER_Y - SPRITE_SIZE / 2}
                        />
                    )
                )}
                {arrows.map((arrow) => (
                    <g
                        className={[
                            styles['arrow-group'],
                            hasBothMoves && styles['arrow-group--draggable'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={arrow.side}
                        onPointerDown={handleArrowPointerDown}
                        onPointerMove={(
                            event: React.PointerEvent<SVGGElement>
                        ) => handleArrowPointerMove(event, arrow.side)}
                    >
                        <line
                            className={styles['arrow-hit']}
                            strokeWidth={ARROW_HIT_WIDTH}
                            x1={arrow.start}
                            x2={arrow.end}
                            y1={arrow.y}
                            y2={arrow.y}
                        />
                        <line
                            className={styles[`arrow--${arrow.side}`]}
                            markerEnd={`url(#${markerId}-${arrow.side})`}
                            x1={arrow.start}
                            x2={arrow.end}
                            y1={arrow.y}
                            y2={arrow.y}
                        />
                        <text
                            className={styles['arrow-label']}
                            textAnchor="middle"
                            x={(arrow.start + arrow.end) / 2}
                            y={arrow.labelY}
                        >
                            {arrow.label}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default TurnStage;
