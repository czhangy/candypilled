import CheckIcon from '@/lib/icons/CheckIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import DoubleExclamationMarkIcon from '@/lib/icons/DoubleExclamationMarkIcon';
import ExclamationMarkIcon from '@/lib/icons/ExclamationMarkIcon';
import { Battle } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './TrainerMarker.module.scss';

type TrainerMarkerProps = {
    isDefeated: boolean;
    isNextPersonalBest: boolean;
    isPreview: boolean;
    isSelected: boolean;
    mapHeight: number;
    mapWidth: number;
    onClick: (trainer: Battle) => void;
    trainer: Battle;
};

const TrainerMarker: React.FC<TrainerMarkerProps> = ({
    isDefeated,
    isNextPersonalBest,
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

    const TRAINER_WIDTH_PX = 22;
    const TRAINER_HEIGHT_PX = 30;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const width =
        ((trainer.isDoubleWidthMarker
            ? TRAINER_WIDTH_PX * 2 - 8
            : TRAINER_WIDTH_PX) /
            mapWidth) *
        100;
    const height =
        ((trainer.isDoubleHeightMarker
            ? TRAINER_HEIGHT_PX * 2 - 20
            : TRAINER_HEIGHT_PX) /
            mapHeight) *
        100;

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
                isPreview ? undefined : BattleHelpers.getFullName(trainer)
            }
            aria-pressed={isPreview ? undefined : isSelected}
            className={[
                styles['trainer-marker'],
                trainer.isMiniboss && styles['trainer-marker--miniboss'],
                trainer.isBoss && styles['trainer-marker--boss'],
                isDefeated && styles['trainer-marker--defeated'],
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
            {isDefeated && (
                <span className={styles['trainer-marker__check']}>
                    <CheckIcon />
                </span>
            )}
            {!isDefeated && isNextPersonalBest && (
                <span className={styles['trainer-marker__crown']}>
                    <CrownIcon />
                </span>
            )}
            {!isDefeated && !isNextPersonalBest && trainer.isBoss && (
                <span className={styles['trainer-marker__annotation']}>
                    <DoubleExclamationMarkIcon />
                </span>
            )}
            {!isDefeated &&
                !isNextPersonalBest &&
                !trainer.isBoss &&
                trainer.isMiniboss && (
                    <span className={styles['trainer-marker__annotation']}>
                        <ExclamationMarkIcon />
                    </span>
                )}
        </button>
    );
};

export default TrainerMarker;
