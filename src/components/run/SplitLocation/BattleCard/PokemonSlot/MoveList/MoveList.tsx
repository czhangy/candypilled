import MoveTooltip from '@/components/run/MoveTooltip/MoveTooltip';
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

                if (!moveSlug || !moveData) {
                    return <li key={index}>-</li>;
                }
                const moveName = moveData.name;

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
                        <MoveTooltip
                            className={styles['move-tooltip']}
                            dataSource={dataSource}
                            generation={generation}
                            ivs={ivs}
                            slug={moveSlug}
                        >
                            {button}
                        </MoveTooltip>
                    </li>
                );
            })}
        </>
    );
};

export default MoveList;
