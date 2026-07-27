import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { FieldCondition } from '@/lib/static/enums';
import { Battle } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerPanel.module.scss';

type TrainerPanelProps = {
    battle: Battle;
    isDefeated: boolean;
    isStacked: boolean;
    onToggleDefeated: () => void;
    trainerClass: string;
    trainerName: string;
    variant: string;
};

const TrainerPanel: React.FC<TrainerPanelProps> = ({
    battle,
    isDefeated,
    isStacked,
    onToggleDefeated,
    trainerClass,
    trainerName,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const FIELD_CONDITION_ICON_SIZE = 28;
    const ITEM_SPRITE_SIZE = 24;
    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const isRemovableFog = battle.fieldCondition === FieldCondition.Fog;
    const isDeepFog = battle.fieldCondition === FieldCondition.DeepFog;
    const fieldConditionIconSlug =
        isRemovableFog || isDeepFog
            ? StringHelpers.toSlug(FieldCondition.Fog)
            : StringHelpers.toSlug(battle.fieldCondition ?? '');

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={[
                styles.trainer,
                isStacked
                    ? styles['trainer--stacked']
                    : styles['trainer--single'],
            ].join(' ')}
        >
            <div className={styles['trainer__sprite']}>
                <Image
                    alt={TrainerHelpers.getDisplayName(
                        trainerClass,
                        trainerName
                    )}
                    height={SPRITE_SIZE}
                    src={TrainerHelpers.getTrainerSprite(trainerClass, variant)}
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
                    <Image
                        alt={battle.fieldCondition}
                        className={styles['field-condition__icon']}
                        height={FIELD_CONDITION_ICON_SIZE}
                        src={`/field-conditions/${fieldConditionIconSlug}.png`}
                        width={FIELD_CONDITION_ICON_SIZE}
                    />
                    {battle.fieldCondition}
                    {isRemovableFog && (
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
                    {battle.items.map((item) => (
                        <div
                            className={styles['trainer__item-row']}
                            key={item.name}
                        >
                            <span className={styles['trainer__item-count']}>
                                {`${item.count}x`}
                            </span>
                            <Tooltip position="center" text={item.name}>
                                <Image
                                    alt={item.name}
                                    height={ITEM_SPRITE_SIZE}
                                    src={ItemHelpers.getItemSprite(item.name)}
                                    width={ITEM_SPRITE_SIZE}
                                />
                            </Tooltip>
                        </div>
                    ))}
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
