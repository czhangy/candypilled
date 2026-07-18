'use client';

import { useState, useSyncExternalStore } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokemonForm from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/PokemonForm/PokemonForm';
import PokedexTile from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokedexTile';
import { STARTER_LOCATION_NAME } from '@/lib/static/constants';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
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
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

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
        ? (PokemonHelpers.getPokemonData(chosenSpecies)?.name ?? chosenSpecies)
        : null;
    const defaultSpecies = activeStarter ?? speciesOverride ?? null;
    const separateStarterEncounter =
        settings['separate-starter-encounter'] ?? false;
    const starterLocation = separateStarterEncounter
        ? STARTER_LOCATION_NAME
        : EncounterHelpers.getStarterLocationName(game);

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
        setChosenSpecies(
            PokemonHelpers.getPokemonData(defaultSpecies)?.name ??
                defaultSpecies
        );
    };

    const handleBackClick = (): void => {
        setChosenSpecies(null);
    };

    const handleFormSubmit = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >
    ): void => {
        onSelect({
            ...details,
            location: starterLocation,
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
                        disabledReason=""
                        generation={game.generation}
                        lockSpecies
                        onSubmit={handleFormSubmit}
                        showAbility={false}
                        showEvs={false}
                        showLevel={false}
                        showMoves={false}
                        showTags={false}
                        submitLabel="CONFIRM"
                        version={game.version}
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
