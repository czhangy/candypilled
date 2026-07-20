import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { Battle } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerPanel.module.scss';

type TrainerPanelProps = {
    battle: Battle;
    isDefeated: boolean;
    onToggleDefeated: () => void;
    variant: string;
};

const TrainerPanel: React.FC<TrainerPanelProps> = ({
    battle,
    isDefeated,
    onToggleDefeated,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const ITEM_SPRITE_SIZE = 32;
    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles.trainer}>
            <div className={styles['trainer__sprite']}>
                <Image
                    alt={BattleHelpers.getFullName(battle)}
                    height={SPRITE_SIZE}
                    src={TrainerHelpers.getTrainerSprite(
                        battle.trainerClass,
                        battle.name,
                        variant
                    )}
                    width={SPRITE_SIZE}
                />
            </div>
            {battle.isOptional && (
                <div className={styles['trainer__metadata']}>OPTIONAL</div>
            )}
            {battle.isTrueDouble ? (
                <div className={styles['trainer__metadata']}>TRUE DOUBLE</div>
            ) : (
                battle.isDouble && (
                    <div className={styles['trainer__metadata']}>DOUBLE</div>
                )
            )}
            {battle.isTag && (
                <div className={styles['trainer__metadata']}>TAG DOUBLE</div>
            )}
            {battle.isBackToBack && (
                <div className={styles['trainer__metadata']}>BACK TO BACK</div>
            )}
            {battle.isGauntlet && (
                <div className={styles['trainer__metadata']}>GAUNTLET</div>
            )}
            {battle.fieldCondition && (
                <div className={styles['trainer__metadata']}>
                    {battle.fieldCondition}
                    {battle.fieldCondition === 'Fog' && (
                        <Tooltip
                            position="center"
                            text="Can be cleared using Defog"
                        >
                            <span className={styles['field-condition__note']}>
                                *
                            </span>
                        </Tooltip>
                    )}
                </div>
            )}
            {battle.items && (
                <div
                    className={[
                        styles['trainer__metadata'],
                        styles['trainer__item'],
                    ].join(' ')}
                >
                    <span className={styles['trainer__item-count']}>
                        {`${battle.items.count}x`}
                    </span>
                    <Tooltip position="center" text={battle.items.name}>
                        <Image
                            alt={battle.items.name}
                            height={ITEM_SPRITE_SIZE}
                            src={ItemHelpers.getItemSprite(battle.items.name)}
                            width={ITEM_SPRITE_SIZE}
                        />
                    </Tooltip>
                </div>
            )}
            <button
                className={[
                    styles['trainer__metadata'],
                    styles['trainer__defeat'],
                    isDefeated && styles['trainer__defeat--defeated'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={onToggleDefeated}
                type="button"
            >
                {isDefeated ? 'DEFEATED' : 'DEFEAT'}
            </button>
        </div>
    );
};

export default TrainerPanel;
