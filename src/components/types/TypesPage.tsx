'use client';

import { useState } from 'react';
import Toggle from '@/components/common/Toggle/Toggle';
import TypeChart from './TypeChart/TypeChart';
import styles from './TypesPage.module.scss';

const TypesPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isGen6Plus, setIsGen6Plus] = useState(true);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['types-page']}>
            <div className={styles.controls}>
                <span className={styles.label}>Gen 6+</span>
                <Toggle
                    checked={isGen6Plus}
                    label="Toggle Gen 6+ type chart"
                    onChange={setIsGen6Plus}
                />
            </div>
            <TypeChart isGen6Plus={isGen6Plus} />
        </div>
    );
};

export default TypesPage;
