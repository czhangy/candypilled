import DoubleExclamationMarkIcon from '@/lib/icons/DoubleExclamationMarkIcon';
import ExclamationMarkIcon from '@/lib/icons/ExclamationMarkIcon';
import { BattleMetadata } from '@/lib/static/enums';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './TrainerMarker.module.scss';

type TrainerMarkerProps = {
    game: Game;
    isPreview: boolean;
    isSelected: boolean;
    mapHeight: number;
    mapWidth: number;
    onClick: (trainer: Battle) => void;
    trainer: Battle;
};

const TrainerMarker: React.FC<TrainerMarkerProps> = ({
    game,
    isPreview,
    isSelected,
    mapHeight,
    mapWidth,
    onClick,
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

    const width = ((trainer.customWidth ?? TRAINER_WIDTH_PX) / mapWidth) * 100;
    const height =
        ((trainer.customHeight ?? TRAINER_HEIGHT_PX) / mapHeight) * 100;
    const metadata = game.battles[trainer.battleKey]?.metadata ?? [];
    const isBoss = metadata.includes(BattleMetadata.Boss);
    const isMiniboss = metadata.includes(BattleMetadata.Miniboss);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleClick = (): void => {
        if (isPreview) return;
        onClick(trainer);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-hidden={isPreview}
            aria-label={
                isPreview ? undefined : BattleHelpers.getFullName(trainer, game)
            }
            aria-pressed={isPreview ? undefined : isSelected}
            className={[
                styles['trainer-marker'],
                isMiniboss && styles['trainer-marker--miniboss'],
                isBoss && styles['trainer-marker--boss'],
                isSelected && styles['trainer-marker--selected'],
                isPreview && styles['trainer-marker--preview'],
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={handleClick}
            style={
                {
                    '--x': `${trainer.x}%`,
                    '--y': `${trainer.y}%`,
                    '--width': `${width}%`,
                    '--height': `${height}%`,
                } as React.CSSProperties
            }
            tabIndex={isPreview ? -1 : undefined}
            type="button"
        >
            {isBoss && (
                <span className={styles['trainer-marker__annotation']}>
                    <DoubleExclamationMarkIcon />
                </span>
            )}
            {!isBoss && isMiniboss && (
                <span className={styles['trainer-marker__annotation']}>
                    <ExclamationMarkIcon />
                </span>
            )}
        </button>
    );
};

export default TrainerMarker;
