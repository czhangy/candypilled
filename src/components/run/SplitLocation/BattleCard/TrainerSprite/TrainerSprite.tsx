import Image from 'next/image';
import WipeButton from '@/components/run/SplitLocation/BattleCard/WipeButton/WipeButton';
import { TrainerAssetFolder } from '@/lib/static/enums';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerSprite.module.scss';

type TrainerSpriteProps = {
    alt: string;
    onWipeClick?: () => void;
    position: 'top' | 'middle';
    trainerAssetFolder: TrainerAssetFolder;
    trainerClass: string;
};

const TrainerSprite: React.FC<TrainerSpriteProps> = ({
    alt,
    onWipeClick,
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
                onWipeClick && styles['trainer-sprite--wipe'],
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {onWipeClick && <WipeButton onClick={onWipeClick} />}
            <div className={styles['trainer-sprite__image']}>
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
        </div>
    );
};

export default TrainerSprite;
