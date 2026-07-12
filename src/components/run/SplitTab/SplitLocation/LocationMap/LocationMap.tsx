import Image from 'next/image';
import styles from './LocationMap.module.scss';

interface LocationMapProps {
    alt: string;
    height: number;
    src: string;
    width: number;
}

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    height,
    src,
    width,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['location-map']}>
            <Image alt={alt} height={height} src={src} width={width} />
        </div>
    );
};

export default LocationMap;
