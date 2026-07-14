'use client';

import { useState } from 'react';
import { MoveData } from '@/lib/static/types';
import styles from './MoveList.module.scss';

interface MoveListProps {
    moves: MoveData[];
    onSelectMove?: (name: string) => void;
    selectedMove?: string;
}

const MoveList: React.FC<MoveListProps> = ({
    moves,
    onSelectMove,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [query, setQuery] = useState('');

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setQuery(event.target.value);
    };

    const handleMoveClick = (name: string): void => {
        onSelectMove?.(name);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const normalizedQuery = query.trim().toLowerCase();
    const visibleMoves = moves
        .filter((move) => move.name.toLowerCase().includes(normalizedQuery))
        .sort((a, b) => a.name.localeCompare(b.name));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['move-list']}>
            <div className={styles.search}>
                <input
                    aria-label="Search moves"
                    className={styles['search-input']}
                    onChange={handleQueryChange}
                    placeholder="Search moves..."
                    type="text"
                    value={query}
                />
            </div>
            <ul className={styles.list}>
                {visibleMoves.map((move) => (
                    <li key={move.name}>
                        <button
                            aria-pressed={move.name === selectedMove}
                            className={[
                                styles.item,
                                move.name === selectedMove &&
                                    styles['item--selected'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => handleMoveClick(move.name)}
                            type="button"
                        >
                            {move.name}
                        </button>
                    </li>
                ))}
                {visibleMoves.length === 0 && (
                    <li className={styles.empty}>No moves found</li>
                )}
            </ul>
        </div>
    );
};

export default MoveList;
