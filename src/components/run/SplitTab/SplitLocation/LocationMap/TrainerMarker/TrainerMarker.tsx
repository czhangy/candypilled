import DoubleExclamationMarkIcon from '@/lib/icons/DoubleExclamationMarkIcon';
import ExclamationMarkIcon from '@/lib/icons/ExclamationMarkIcon';
import { BattleMetadata } from '@/lib/static/enums';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './TrainerMarker.module.scss';

type TrainerMarkerProps = {
    game: Game;
    isPreview: boolean;
    isSelected: boolean;
    mapHeight: number;
    mapWidth: number;
    onClick: (trainer: Battle) => void;
    trainer: Battle;
};

const TrainerMarker: React.FC<TrainerMarkerProps> = ({
    game,
    isPreview,
    isSelected,
    mapHeight,
    mapWidth,
    onClick,
    trainer,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Default marker box per generation, since sprite art scale differs by
    // generation. Gen 5 has no games onboarded yet, so it defaults to Gen
    // 4's size until a Gen 5 game's own sprites say otherwise.
    const DEFAULT_MARKER_SIZE_BY_GENERATION: Record<
        number,
        { width: number; height: number }
    > = {
        3: { width: 19, height: 25 },
        4: { width: 22, height: 30 },
        5: { width: 22, height: 30 },
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const defaultSize = DEFAULT_MARKER_SIZE_BY_GENERATION[game.generation];
    const width = ((trainer.customWidth ?? defaultSize.width) / mapWidth) * 100;
    const height =
        ((trainer.customHeight ?? defaultSize.height) / mapHeight) * 100;
    const metadata = game.battles[trainer.battleKey]?.metadata ?? [];
    const isBoss = metadata.includes(BattleMetadata.Boss);
    const isMiniboss = metadata.includes(BattleMetadata.Miniboss);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        if (isPreview) return;
        onClick(trainer);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-hidden={isPreview}
            aria-label={
                isPreview ? undefined : BattleHelpers.getFullName(trainer, game)
            }
            aria-pressed={isPreview ? undefined : isSelected}
            className={[
                styles['trainer-marker'],
                isMiniboss && styles['trainer-marker--miniboss'],
                isBoss && styles['trainer-marker--boss'],
                isSelected && styles['trainer-marker--selected'],
                isPreview && styles['trainer-marker--preview'],
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={handleClick}
            style={
                {
                    '--x': `${trainer.x}%`,
                    '--y': `${trainer.y}%`,
                    '--width': `${width}%`,
                    '--height': `${height}%`,
                } as React.CSSProperties
            }
            tabIndex={isPreview ? -1 : undefined}
            type="button"
        >
            {isBoss && (
                <span className={styles['trainer-marker__annotation']}>
                    <DoubleExclamationMarkIcon />
                </span>
            )}
            {!isBoss && isMiniboss && (
                <span className={styles['trainer-marker__annotation']}>
                    <ExclamationMarkIcon />
                </span>
            )}
        </button>
    );
};

export default TrainerMarker;
