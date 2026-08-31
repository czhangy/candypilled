import Image from 'next/image';
import { GameDataSource } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import styles from './ItemDetail.module.scss';

type ItemDetailProps = {
    dataSource: GameDataSource;
    generation: number;
    itemSlug: string;
};

const ItemDetail: React.FC<ItemDetailProps> = ({
    dataSource,
    generation,
    itemSlug,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 32;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const itemData = ItemHelpers.getHeldItemData(dataSource, itemSlug);
    const values = ItemHelpers.getHeldItemForGeneration(
        dataSource,
        itemSlug,
        generation
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['item-detail']}>
            <div className={styles.header}>Details</div>
            <div className={styles.content}>
                {itemData && (
                    <>
                        <div className={styles.top}>
                            <Image
                                alt={itemData.name}
                                height={SPRITE_SIZE}
                                src={itemData.sprite}
                                width={SPRITE_SIZE}
                            />
                            <span className={styles.name}>{itemData.name}</span>
                        </div>
                        {values && (
                            <p className={styles.description}>
                                {values.description}
                            </p>
                        )}
                        <div className={styles.effect}>
                            <span className={styles['effect-label']}>
                                Effect
                            </span>
                            <p className={styles['effect-text']}>
                                {itemData.effect}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
