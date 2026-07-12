import CheckIcon from '@/lib/icons/CheckIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import { Battle } from '@/lib/static/types';
import styles from './TrainerMarker.module.scss';

interface TrainerMarkerProps {
    isDefeated: boolean;
    isNextPersonalBest: boolean;
    isSelected: boolean;
    mapHeight: number;
    mapWidth: number;
    onClick: (trainer: Battle) => void;
    trainer: Battle;
}

const TrainerMarker: React.FC<TrainerMarkerProps> = ({
    isDefeated,
    isNextPersonalBest,
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

    const width = (TRAINER_WIDTH_PX / mapWidth) * 100;
    const height = (TRAINER_HEIGHT_PX / mapHeight) * 100;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        onClick(trainer);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-label={`${trainer.trainerClass} ${trainer.name}`}
            aria-pressed={isSelected}
            className={[
                styles['trainer-marker'],
                isDefeated && styles['trainer-marker--defeated'],
                isSelected && styles['trainer-marker--selected'],
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
        </button>
    );
};

export default TrainerMarker;
