import ReorderButtons from '@/components/run/CalcTab/LineBuilder/ReorderButtons/ReorderButtons';
import { LinePosition } from '@/lib/static/types';
import styles from './OrderList.module.scss';

type OrderListProps = {
    items: { label: string; position: LinePosition }[];
    onMove: (position: LinePosition, offset: -1 | 1) => void;
};

// The turn's actions in the order they happen, which can be rearranged.
const OrderList: React.FC<OrderListProps> = ({ items, onMove }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <ol className={styles['order-list']}>
            {items.map((item, index) => (
                <li className={styles.item} key={item.position}>
                    <span className={styles.rank}>{index + 1}</span>
                    <span className={styles.label}>{item.label}</span>
                    <ReorderButtons
                        canMoveDown={index < items.length - 1}
                        canMoveUp={index > 0}
                        onMoveDown={() => onMove(item.position, 1)}
                        onMoveUp={() => onMove(item.position, -1)}
                    />
                </li>
            ))}
        </ol>
    );
};

export default OrderList;
