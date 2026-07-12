import Image from 'next/image';
import { Trainer } from '@/lib/static/types';
import styles from './LocationMap.module.scss';
import TrainerMarker from './TrainerMarker/TrainerMarker';

interface LocationMapProps {
    alt: string;
    height: number;
    src: string;
    trainers: Trainer[];
    width: number;
}

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    height,
    src,
    trainers,
    width,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['location-map']}>
            <span className={styles.label}>Map</span>
            <div className={styles.image}>
                <Image alt={alt} height={height} src={src} width={width} />
                {trainers.map((trainer) => (
                    <TrainerMarker
                        key={trainer.name}
                        mapHeight={height}
                        mapWidth={width}
                        trainer={trainer}
                    />
                ))}
            </div>
        </div>
    );
};

export default LocationMap;
