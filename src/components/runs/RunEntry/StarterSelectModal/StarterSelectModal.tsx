'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokedexTile from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokedexTile';
import { Game } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import StarterSelect from './StarterSelect/StarterSelect';
import styles from './StarterSelectModal.module.scss';

interface StarterSelectModalProps {
    game: Game;
    onClose: () => void;
    onSelect: (starter: string) => void;
}

const StarterSelectModal: React.FC<StarterSelectModalProps> = ({
    game,
    onClose,
    onSelect,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeStarter, setActiveStarter] = useState<string | null>(null);
    const [speciesOverride, setSpeciesOverride] = useState<string | undefined>(
        undefined
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleStarterSelect = (starter: string): void => {
        setActiveStarter(starter);
        setSpeciesOverride(undefined);
    };

    const handleSelectSpecies = (species: string): void => {
        setSpeciesOverride(species);
    };

    const handleSelectMove = (): void => {};

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={game.accentColor}
            maxWidth="41rem"
            onClose={onClose}
            title="Choose your starter"
        >
            <div className={styles['starter-select-modal']}>
                <div className={styles['starter-column']}>
                    <StarterSelect
                        onSelect={handleStarterSelect}
                        selected={activeStarter}
                        starters={game.starters}
                        variant={variant}
                    />
                </div>
                <PokedexTile
                    game={game}
                    generation={game.generation}
                    mode="select"
                    onSelect={onSelect}
                    onSelectMove={handleSelectMove}
                    onSelectSpecies={handleSelectSpecies}
                    originalSpecies={activeStarter ?? undefined}
                    species={speciesOverride ?? activeStarter ?? undefined}
                    variant={variant}
                />
            </div>
        </Modal>
    );
};

export default StarterSelectModal;
