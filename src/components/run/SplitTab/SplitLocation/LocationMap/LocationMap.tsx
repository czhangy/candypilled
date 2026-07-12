import Image, { StaticImageData } from 'next/image';
import { Trainer } from '@/lib/static/types';
import styles from './LocationMap.module.scss';
import TrainerMarker from './TrainerMarker/TrainerMarker';

interface LocationMapProps {
    alt: string;
    map: StaticImageData;
    trainers?: Trainer[];
}

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    map,
    trainers = [],
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['location-map']}>
            <span className={styles.label}>Map</span>
            <div className={styles.image}>
                <Image alt={alt} src={map} />
                {trainers.map((trainer) => (
                    <TrainerMarker
                        key={trainer.name}
                        mapHeight={map.height}
                        mapWidth={map.width}
                        trainer={trainer}
                    />
                ))}
            </div>
        </div>
    );
};

export default LocationMap;
