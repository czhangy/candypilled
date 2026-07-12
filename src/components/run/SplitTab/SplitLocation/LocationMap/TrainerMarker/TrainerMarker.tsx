import { Trainer } from '@/lib/static/types';
import styles from './TrainerMarker.module.scss';

interface TrainerMarkerProps {
    mapHeight: number;
    mapWidth: number;
    trainer: Trainer;
}

const TrainerMarker: React.FC<TrainerMarkerProps> = ({
    mapHeight,
    mapWidth,
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
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-label={`${trainer.trainerClass} ${trainer.name}`}
            className={styles['trainer-marker']}
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
