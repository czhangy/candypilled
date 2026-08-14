'use client';

import { useState } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokedexTile from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokedexTile';
import { Nature, PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StarterSelect from './StarterSelect/StarterSelect';
import styles from './StarterSelectModal.module.scss';

type StarterSelectModalProps = {
    game: Game;
    onClose: () => void;
    onSelect: (starter: CaughtPokemon) => void;
};

const StarterSelectModal: React.FC<StarterSelectModalProps> = ({
    game,
    onClose,
    onSelect,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Matches the in-game starting level for starters.
    const STARTER_LEVEL = 5;

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

    const variant = game.version;
    const defaultSpecies = activeStarter ?? speciesOverride ?? null;
    const starterLocation = EncounterHelpers.getStarterLocationName(game);

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

    const handleSelectLocation = (): void => {};

    const handleSelectMove = (): void => {};

    const handleSelectClick = (): void => {
        if (!defaultSpecies) return;

        onSelect({
            ability:
                PokemonHelpers.getPokemonAbilities(
                    defaultSpecies,
                    game.generation
                )?.slot1 ?? '',
            evs: undefined,
            gender: undefined,
            ivs: 0,
            level: STARTER_LEVEL,
            location: starterLocation,
            moves: PokemonHelpers.getMovesAtLevel(
                defaultSpecies,
                game.version,
                STARTER_LEVEL
            ),
            nature: Nature.Unknown,
            slug: defaultSpecies,
            status: PokemonStatus.Alive,
        });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={game.accentColor}
            buttonTextColor={game.textContrastColor}
            maxWidth="41rem"
            onClose={onClose}
            title="Choose your starter"
        >
            {() => (
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
                            onSelectLocation={handleSelectLocation}
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
