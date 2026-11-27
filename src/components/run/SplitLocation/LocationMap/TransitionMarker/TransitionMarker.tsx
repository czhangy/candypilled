import Tooltip from '@/components/common/Tooltip/Tooltip';
import { MapTransition } from '@/lib/static/types';
import styles from './TransitionMarker.module.scss';

type TransitionMarkerProps = {
    mapHeight: number;
    mapWidth: number;
    onClick: (transition: MapTransition) => void;
    transition: MapTransition;
};

const TransitionMarker: React.FC<TransitionMarkerProps> = ({
    mapHeight,
    mapWidth,
    onClick,
    transition,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const width = (transition.width / mapWidth) * 100;
    const height = (transition.height / mapHeight) * 100;
    const destination = transition.subarea
        ? `${transition.location} – ${transition.subarea}`
        : transition.location;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        onClick(transition);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-label={`Go to ${destination}`}
            className={styles['transition-marker']}
            onClick={handleClick}
            style={
                {
                    '--x': `${transition.x}%`,
                    '--y': `${transition.y}%`,
                    '--width': `${width}%`,
                    '--height': `${height}%`,
                } as React.CSSProperties
            }
            type="button"
        >
            <Tooltip
                className={styles['transition-marker__tooltip']}
                position="center"
                text={destination}
            >
                {null}
            </Tooltip>
        </button>
    );
};

export default TransitionMarker;
