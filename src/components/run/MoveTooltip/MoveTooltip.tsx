import CategoryBadge from '@/components/common/CategoryBadge/CategoryBadge';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { GameDataSource, StatValues } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './MoveTooltip.module.scss';

type MoveTooltipProps = {
    children: React.ReactNode;
    className: string;
    dataSource: GameDataSource;
    generation: number;
    ivs: StatValues;
    slug: string;
};

const MoveTooltip: React.FC<MoveTooltipProps> = ({
    children,
    className,
    dataSource,
    generation,
    ivs,
    slug,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const BADGE_WIDTH = 26;
    const BADGE_HEIGHT = 11;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const values = MoveHelpers.getMoveForGeneration(
        dataSource,
        slug,
        generation
    );
    const category = MoveHelpers.getMoveCategory(dataSource, slug, generation);
    const type = MoveHelpers.getMoveType(dataSource, slug, generation, ivs);
    const power = MoveHelpers.getMovePower(dataSource, slug, generation, ivs);

    if (!values || !category) {
        return <>{children}</>;
    }

    const stats: { key: string; label: string; value: React.ReactNode }[] = [
        ...(type
            ? [
                  {
                      key: 'type',
                      label: 'Type',
                      value: (
                          <TypeBadge
                              height={BADGE_HEIGHT}
                              type={type}
                              width={BADGE_WIDTH}
                          />
                      ),
                  },
              ]
            : []),
        {
            key: 'cat',
            label: 'Cat',
            value: (
                <CategoryBadge
                    category={category}
                    height={BADGE_HEIGHT}
                    width={BADGE_WIDTH}
                />
            ),
        },
        { key: 'bp', label: 'BP', value: power ?? '—' },
        { key: 'pp', label: 'PP', value: values.pp },
        { key: 'acc', label: 'Acc', value: values.accuracy ?? '—' },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Tooltip
            className={className}
            position="center"
            text={
                <div className={styles['tooltip-stats']}>
                    {stats.map((stat) => (
                        <div className={styles['tooltip-stat']} key={stat.key}>
                            <span className={styles['tooltip-stat-label']}>
                                {stat.label}
                            </span>
                            <span className={styles['tooltip-stat-value']}>
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>
            }
        >
            {children}
        </Tooltip>
    );
};

export default MoveTooltip;
