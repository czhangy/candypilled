import Image from 'next/image';
import { Game } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import styles from './ItemDetail.module.scss';

type ItemDetailProps = {
    game: Game;
    itemSlug: string;
    onSelectLocation: (location: string) => void;
    showDescription: boolean;
};

const ItemDetail: React.FC<ItemDetailProps> = ({
    game,
    itemSlug,
    onSelectLocation,
    showDescription,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 32;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const itemData = ItemHelpers.getHeldItemData(game.dataSource, itemSlug);
    const values = ItemHelpers.getHeldItemForGeneration(
        game.dataSource,
        itemSlug,
        game.generation
    );
    const locations = ItemHelpers.getItemLocations(game, itemSlug);

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
                        {showDescription && values && (
                            <p className={styles.description}>
                                {values.description}
                            </p>
                        )}
                        {showDescription && (
                            <div className={styles.effect}>
                                <span className={styles['effect-label']}>
                                    Effect
                                </span>
                                <p className={styles['effect-text']}>
                                    {itemData.effect}
                                </p>
                            </div>
                        )}
                        <div className={styles.locations}>
                            <span className={styles['locations-label']}>
                                Locations
                            </span>
                            {locations.length === 0 ? (
                                <p className={styles['locations-empty']}>
                                    No locations found
                                </p>
                            ) : (
                                <ul className={styles['locations-list']}>
                                    {locations.map((location, index) => (
                                        <li key={`${location.name}-${index}`}>
                                            <button
                                                className={styles.location}
                                                onClick={() =>
                                                    onSelectLocation(
                                                        location.locationName
                                                    )
                                                }
                                                type="button"
                                            >
                                                <span
                                                    className={
                                                        styles['location-name']
                                                    }
                                                >
                                                    {location.name}
                                                </span>
                                                {location.count > 1 && (
                                                    <span
                                                        className={
                                                            styles[
                                                                'location-count'
                                                            ]
                                                        }
                                                    >
                                                        x{location.count}
                                                    </span>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
