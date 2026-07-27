import Image from 'next/image';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerSprite.module.scss';

type TrainerSpriteProps = {
    alt: string;
    trainerClass: string;
    variant: string;
};

const TrainerSprite: React.FC<TrainerSpriteProps> = ({
    alt,
    trainerClass,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['trainer-sprite']}>
            <Image
                alt={alt}
                height={SPRITE_SIZE}
                src={TrainerHelpers.getTrainerSprite(trainerClass, variant)}
                width={SPRITE_SIZE}
            />
        </div>
    );
};

export default TrainerSprite;
