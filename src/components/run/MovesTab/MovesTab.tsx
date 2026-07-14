'use client';

import { useState } from 'react';
import { MOVES } from '@/lib/data/moves';
import MoveDetail from './MoveDetail/MoveDetail';
import MoveList from './MoveList/MoveList';
import styles from './MovesTab.module.scss';

interface MovesTabProps {
    generation: number;
}

const MovesTab: React.FC<MovesTabProps> = ({ generation }) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedMove, setSelectedMove] = useState<string | undefined>(
        undefined
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleMoveSelect = (name: string): void => {
        setSelectedMove(name);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const availableMoves = Object.values(MOVES).filter(
        (move) => move.introducedInGeneration <= generation
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['moves-tab']}>
            <MoveList
                moves={availableMoves}
                onSelectMove={handleMoveSelect}
                selectedMove={selectedMove}
            />
            <MoveDetail generation={generation} move={selectedMove} />
        </div>
    );
};

export default MovesTab;
