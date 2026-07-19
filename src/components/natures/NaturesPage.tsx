'use client';

import { Fragment } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Nature } from '@/lib/static/enums';
import { NatureGridStat } from '@/lib/static/types';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import styles from './NaturesPage.module.scss';

const NaturesPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const STATS: { key: NatureGridStat; label: string }[] = [
        { key: 'atk', label: 'Attack' },
        { key: 'def', label: 'Defense' },
        { key: 'spa', label: 'Sp. Atk' },
        { key: 'spd', label: 'Sp. Def' },
        { key: 'spe', label: 'Speed' },
    ];

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const router = useRouter();
    const searchParams = useSearchParams();

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleCellClick = (nature: Nature): void => {
        const params = new URLSearchParams(searchParams.toString());
        if (selectedNature === nature) {
            params.delete('nature');
        } else {
            params.set('nature', nature.toLowerCase());
        }

        const query = params.toString();
        router.replace(`/natures${query ? `?${query}` : ''}`, {
            scroll: false,
        });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const grid = NatureHelpers.getNatureGrid();
    const selectedNature = NatureHelpers.parseNature(
        searchParams.get('nature')
    );
    const selectedStats = selectedNature
        ? NatureHelpers.getNatureStats(selectedNature)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['natures-page']}>
            <div className={styles.grid}>
                <div className={styles.corner} />
                <div className={styles['column-label']}>↑ Increased Stat</div>
                <div className={styles.filler} />
                {STATS.map((stat) => (
                    <div
                        className={`${styles['header-cell']} ${selectedStats?.increased === stat.key ? styles['header-cell--selected'] : ''}`}
                        key={stat.key}
                    >
                        ↑ {stat.label}
                    </div>
                ))}
                <div className={styles['row-label']}>↓ Decreased Stat</div>
                {STATS.map((rowStat, r) => (
                    <Fragment key={rowStat.key}>
                        <div
                            className={`${styles['row-header']} ${selectedStats?.decreased === rowStat.key ? styles['row-header--selected'] : ''}`}
                        >
                            ↓ {rowStat.label}
                        </div>
                        {STATS.map((colStat, c) => {
                            const cell = grid[c][r];
                            return (
                                <button
                                    className={`${styles.cell} ${cell.neutral ? styles['cell--neutral'] : ''} ${cell.nature === selectedNature ? styles['cell--selected'] : ''}`}
                                    key={colStat.key}
                                    onClick={() => handleCellClick(cell.nature)}
                                    type="button"
                                >
                                    {cell.nature}
                                </button>
                            );
                        })}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default NaturesPage;
