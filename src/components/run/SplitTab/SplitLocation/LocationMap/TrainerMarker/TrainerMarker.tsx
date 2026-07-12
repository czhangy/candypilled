import { Trainer } from '@/lib/static/types';
import styles from './TrainerMarker.module.scss';

interface TrainerMarkerProps {
    isSelected?: boolean;
    mapHeight: number;
    mapWidth: number;
    onClick: (trainer: Trainer) => void;
    trainer: Trainer;
}

const TrainerMarker: React.FC<TrainerMarkerProps> = ({
    isSelected = false,
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
        />
    );
};

export default TrainerMarker;
