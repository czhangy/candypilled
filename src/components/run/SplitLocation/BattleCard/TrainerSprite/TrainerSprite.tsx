import Image from 'next/image';
import { TrainerAssetFolder } from '@/lib/static/enums';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerSprite.module.scss';

type TrainerSpriteProps = {
    alt: string;
    position: 'top' | 'middle';
    trainerAssetFolder: TrainerAssetFolder;
    trainerClass: string;
};

const TrainerSprite: React.FC<TrainerSpriteProps> = ({
    alt,
    position,
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
        <div
            className={[
                styles['trainer-sprite'],
                styles[`trainer-sprite--${position}`],
            ].join(' ')}
        >
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
