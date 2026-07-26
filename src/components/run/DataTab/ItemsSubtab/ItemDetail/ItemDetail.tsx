import Image from 'next/image';
import GenerationHelpers from '@/lib/utils/GenerationHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import styles from './ItemDetail.module.scss';

type ItemDetailProps = {
    generation: number;
    itemSlug?: string;
};

const ItemDetail: React.FC<ItemDetailProps> = ({ generation, itemSlug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 32;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const itemData = itemSlug
        ? ItemHelpers.getHeldItemData(itemSlug)
        : undefined;
    const values = itemData
        ? GenerationHelpers.resolveGeneration(
              itemData.valuesByGeneration,
              generation
          )
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['item-detail']}>
            <div className={styles.header}>Details</div>
            <div
                className={[
                    styles.content,
                    !itemData && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {itemData ? (
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
                ) : (
                    <span className={styles.placeholder}>
                        Select an item to view its details
                    </span>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
