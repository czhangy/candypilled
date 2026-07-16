'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokemonForm from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/PokemonForm/PokemonForm';
import PokedexTile from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokedexTile';
import { PokemonStatus } from '@/lib/static/enums';
import { BattlePokemon, CaughtPokemon, Game } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import StarterSelect from './StarterSelect/StarterSelect';
import styles from './StarterSelectModal.module.scss';

interface StarterSelectModalProps {
    game: Game;
    onClose: () => void;
    onSelect: (starter: CaughtPokemon) => void;
}

const StarterSelectModal: React.FC<StarterSelectModalProps> = ({
    game,
    onClose,
    onSelect,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const STARTER_LOCATION = 'Starter';

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeStarter, setActiveStarter] = useState<string | null>(null);
    const [speciesOverride, setSpeciesOverride] = useState<string | undefined>(
        undefined
    );
    const [chosenSpecies, setChosenSpecies] = useState<string | null>(null);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const chosenSpeciesName = chosenSpecies
        ? (PokemonHelpers.get(chosenSpecies)?.name ?? chosenSpecies)
        : null;
    const defaultSpecies = activeStarter ?? speciesOverride ?? null;

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

    const handleSelectAbility = (): void => {};

    const handleSelectMove = (): void => {};

    const handleSelectClick = (): void => {
        if (!defaultSpecies) return;
        setChosenSpecies(
            PokemonHelpers.get(defaultSpecies)?.name ?? defaultSpecies
        );
    };

    const handleBackClick = (): void => {
        setChosenSpecies(null);
    };

    const handleFormSubmit = (
        details: Pick<
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ): void => {
        onSelect({
            ...details,
            location: STARTER_LOCATION,
            status: PokemonStatus.Alive,
        });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={game.accentColor}
            maxWidth="41rem"
            onClose={onClose}
            title={chosenSpeciesName ?? 'Choose your starter'}
        >
            {chosenSpecies ? (
                <div className={styles['starter-form']}>
                    <button
                        className={styles.back}
                        onClick={handleBackClick}
                        type="button"
                    >
                        ← Back
                    </button>
                    <PokemonForm
                        allSpecies={[]}
                        defaultSpecies={chosenSpecies}
                        generation={game.generation}
                        lockSpecies
                        onSubmit={handleFormSubmit}
                        showAbility={false}
                        showEvs={false}
                        showLevel={false}
                        showMoves={false}
                        submitLabel="CONFIRM"
                    />
                </div>
            ) : (
                <div className={styles['starter-select-modal']}>
                    <div className={styles.columns}>
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
                            mode="choose"
                            onSelectAbility={handleSelectAbility}
                            onSelectMove={handleSelectMove}
                            onSelectSpecies={handleSelectSpecies}
                            originalSpecies={activeStarter ?? undefined}
                            species={
                                speciesOverride ?? activeStarter ?? undefined
                            }
                            usedLocations={[]}
                            variant={variant}
                        />
                    </div>
                    <div className={styles.footer}>
                        <button
                            className={styles.select}
                            disabled={!defaultSpecies}
                            onClick={handleSelectClick}
                            type="button"
                        >
                            SELECT
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default StarterSelectModal;
