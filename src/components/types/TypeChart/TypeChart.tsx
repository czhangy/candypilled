'use client';

import { Fragment } from 'react';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { PokemonType } from '@/lib/static/enums';
import TypeHelpers from '@/lib/utils/TypeHelpers';
import styles from './TypeChart.module.scss';

type TypeChartProps = {
    isGen6Plus: boolean;
};

const TypeChart: React.FC<TypeChartProps> = ({ isGen6Plus }) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMultiplierLabel = (multiplier: number): string => {
        if (multiplier === 0) return '0×';
        if (multiplier === 0.5) return '½×';
        if (multiplier === 2) return '2×';
        return '';
    };

    const getMultiplierModifier = (multiplier: number): string => {
        if (multiplier === 0) return 'cell--immune';
        if (multiplier === 0.5) return 'cell--resisted';
        if (multiplier === 2) return 'cell--super-effective';
        return 'cell--neutral';
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const types = TypeHelpers.getTypes(isGen6Plus);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['type-chart']}
            style={{ '--column-count': types.length } as React.CSSProperties}
        >
            <div className={styles.corner} />
            <div className={styles['column-label']}>Defending Type</div>
            <div className={styles.filler} />
            {types.map((defender: PokemonType) => (
                <div className={styles['header-cell']} key={defender}>
                    <TypeBadge height={16} type={defender} width={37} />
                </div>
            ))}
            <div className={styles['row-label']}>Attacking Type</div>
            {types.map((attacker: PokemonType) => (
                <Fragment key={attacker}>
                    <div className={styles['row-header']}>
                        <TypeBadge height={16} type={attacker} width={37} />
                    </div>
                    {types.map((defender: PokemonType) => {
                        const multiplier = TypeHelpers.getMultiplier(
                            attacker,
                            defender,
                            isGen6Plus
                        );
                        return (
                            <div
                                className={`${styles.cell} ${styles[getMultiplierModifier(multiplier)]}`}
                                key={defender}
                            >
                                {getMultiplierLabel(multiplier)}
                            </div>
                        );
                    })}
                </Fragment>
            ))}
        </div>
    );
};

export default TypeChart;
