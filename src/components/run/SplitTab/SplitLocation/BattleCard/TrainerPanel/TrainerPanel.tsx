import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import {
    BattleMetadata,
    FieldCondition,
    TrainerAssetFolder,
} from '@/lib/static/enums';
import { Battle, BattleItem } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './TrainerPanel.module.scss';

type TrainerPanelProps = {
    battle: Battle;
    isStacked: boolean;
    items?: BattleItem[];
    metadata: BattleMetadata[];
    trainerAssetFolder: TrainerAssetFolder;
    trainerClass: string;
    trainerName: string;
};

const TrainerPanel: React.FC<TrainerPanelProps> = ({
    battle,
    isStacked,
    items,
    metadata,
    trainerAssetFolder,
    trainerClass,
    trainerName,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const ITEM_SPRITE_SIZE = 24;
    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const isRemovableFog = battle.fieldCondition === FieldCondition.Fog;

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
                    src={TrainerHelpers.getTrainerSprite(
                        trainerClass,
                        trainerAssetFolder
                    )}
                    width={SPRITE_SIZE}
                />
            </div>
            {items && (
                <div
                    className={[
                        styles['trainer__metadata'],
                        styles['trainer__item'],
                    ].join(' ')}
                >
                    {items.map((item) => (
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
            {battle.fieldCondition && (
                <div className={styles['trainer__metadata']}>
                    {battle.fieldCondition.toUpperCase()}
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
            {metadata.includes(BattleMetadata.Boss) && (
                <div className={styles['trainer__metadata']}>BOSS</div>
            )}
            {metadata.includes(BattleMetadata.Choice) && (
                <div className={styles['trainer__metadata']}>CHOICE</div>
            )}
            {metadata.includes(BattleMetadata.Miniboss) && (
                <div className={styles['trainer__metadata']}>MINIBOSS</div>
            )}
            {metadata.includes(BattleMetadata.Optional) && (
                <div className={styles['trainer__metadata']}>OPTIONAL</div>
            )}
            {metadata.includes(BattleMetadata.TrueDouble) ? (
                <div className={styles['trainer__metadata']}>TRUE DOUBLE</div>
            ) : (
                metadata.includes(BattleMetadata.Double) && (
                    <div className={styles['trainer__metadata']}>DOUBLE</div>
                )
            )}
            {metadata.includes(BattleMetadata.Tag) && (
                <div className={styles['trainer__metadata']}>TAG DOUBLE</div>
            )}
            {metadata.includes(BattleMetadata.BackToBack) && (
                <div className={styles['trainer__metadata']}>BACK-TO-BACK</div>
            )}
            {metadata.includes(BattleMetadata.Gauntlet) && (
                <div className={styles['trainer__metadata']}>GAUNTLET</div>
            )}
        </div>
    );
};

export default TrainerPanel;
