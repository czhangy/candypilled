import Image from 'next/image';
import { TrainerAssetFolder } from '@/lib/static/enums';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerSprite.module.scss';

type TrainerSpriteProps = {
    alt: string;
    trainerAssetFolder: TrainerAssetFolder;
    trainerClass: string;
};

const TrainerSprite: React.FC<TrainerSpriteProps> = ({
    alt,
    trainerAssetFolder,
    trainerClass,
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
                src={TrainerHelpers.getTrainerSprite(
                    trainerClass,
                    trainerAssetFolder
                )}
                width={SPRITE_SIZE}
            />
        </div>
    );
};

export default TrainerSprite;
