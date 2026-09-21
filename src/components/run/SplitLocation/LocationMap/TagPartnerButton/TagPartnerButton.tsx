import Image from 'next/image';
import { Game } from '@/lib/static/types';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TagPartnerButton.module.scss';

type TagPartnerButtonProps = {
    battleKey: string;
    game: Game;
    isSelected: boolean;
    onClick: () => void;
};

const TagPartnerButton: React.FC<TagPartnerButtonProps> = ({
    battleKey,
    game,
    isSelected,
    onClick,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE_PX = 56;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const data = game.battles[battleKey];
    const displayName = data
        ? TrainerHelpers.getDisplayName(data.trainerClass, data.name)
        : '';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!data) return null;

    return (
        <button
            aria-label={displayName}
            aria-pressed={isSelected}
            className={[
                styles['tag-partner-button'],
                isSelected && styles['tag-partner-button--selected'],
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={onClick}
            type="button"
        >
            <Image
                alt={displayName}
                height={SPRITE_SIZE_PX}
                src={TrainerHelpers.getTagPartnerSprite(
                    data.trainerClass,
                    game.trainerAssetFolder
                )}
                width={SPRITE_SIZE_PX}
            />
        </button>
    );
};

export default TagPartnerButton;
