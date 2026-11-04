import Image from 'next/image';
import { GameDataSource } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import styles from './HeldItemIcon.module.scss';

type HeldItemIconProps = {
    dataSource: GameDataSource;
    slug: string;
};

const HeldItemIcon: React.FC<HeldItemIconProps> = ({ dataSource, slug }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const ICON_SIZE = 24;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const itemData = ItemHelpers.getHeldItemData(dataSource, slug);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return itemData ? (
        <Image
            alt={itemData.name}
            className={styles['held-item-icon']}
            height={ICON_SIZE}
            src={itemData.sprite}
            width={ICON_SIZE}
        />
    ) : null;
};

export default HeldItemIcon;
