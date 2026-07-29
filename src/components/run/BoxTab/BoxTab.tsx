import { useState } from 'react';
import AddPokemonModal from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/AddPokemonModal';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon, Game, Run } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './BoxTab.module.scss';
import ImportBoxModal from './ImportBoxModal/ImportBoxModal';
import PokemonBox from './PokemonBox/PokemonBox';
import PokemonPreview from './PokemonPreview/PokemonPreview';

type BoxTabProps = {
    game: Game;
    onDeselectPokemon: () => void;
    onSelectAbility: (slug: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectPokemon: (location: string) => void;
    run: Run;
    selectedPokemon?: string;
};

const BoxTab: React.FC<BoxTabProps> = ({
    game,
    onDeselectPokemon,
    onSelectAbility,
    onSelectItem,
    onSelectLocation,
    onSelectMove,
    onSelectPokemon,
    run,
    selectedPokemon,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isAddPokemonModalOpen, setIsAddPokemonModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [view, setView] = useState<BoxView>('alive');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const allSpecies = PokemonHelpers.getAllSpecies(game.generation).filter(
        (species) =>
            !run.caughtPokemon.some((caughtPokemon) =>
                EvolutionHelpers.isSameEvolutionLine(
                    species.slug,
                    caughtPokemon.slug,
                    game.generation
                )
            )
    );
    const selectedCaughtPokemon = run.caughtPokemon.find(
        (caughtPokemon) => caughtPokemon.location === selectedPokemon
    );
    const canSelectLocation = selectedCaughtPokemon
        ? !!SplitHelpers.getEarliestSplitName(
              game,
              selectedCaughtPokemon.location
          )
        : false;
    const currentSplitName = SplitHelpers.getCurrentSplitName(
        game,
        run.defeatedBattles
    );
    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const levelCap = currentSplit
        ? SplitHelpers.getLevelCap(currentSplit)
        : null;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAddPokemonClick = (): void => {
        setIsAddPokemonModalOpen(true);
    };

    const handleCloseAddPokemonModal = (): void => {
        setIsAddPokemonModalOpen(false);
    };

    const handleImportClick = (): void => {
        setIsImportModalOpen(true);
    };

    const handleCloseImportModal = (): void => {
        setIsImportModalOpen(false);
    };

    const handleImportBox = (importedPokemon: CaughtPokemon[]): void => {
        // Multiple imported Pokémon sharing a location collapse to the
        // last one, matching how a Map overwrites on repeated keys.
        const importedByLocation = new Map(
            importedPokemon.map((pokemon) => [pokemon.location, pokemon])
        );
        const existingLocations = new Set(
            run.caughtPokemon.map((pokemon) => pokemon.location)
        );
        const merged = run.caughtPokemon.map(
            (pokemon) => importedByLocation.get(pokemon.location) ?? pokemon
        );
        const newPokemon = [...importedByLocation.values()].filter(
            (pokemon) => !existingLocations.has(pokemon.location)
        );

        const updatedRun: Run = {
            ...run,
            caughtPokemon: [...merged, ...newPokemon],
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
        onDeselectPokemon();
        setView('alive');
    };

    const handleAddPokemon = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
            | 'tags'
        >,
        location: string
    ): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: [
                ...run.caughtPokemon,
                {
                    ...details,
                    heldItem: '',
                    location,
                    status: PokemonStatus.Alive,
                },
            ],
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    const handleToggleStatus = (pokemon: CaughtPokemon): void => {
        const newStatus =
            pokemon.status === PokemonStatus.Dead
                ? PokemonStatus.Alive
                : PokemonStatus.Dead;

        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.map((caughtPokemon) =>
                caughtPokemon.location === pokemon.location
                    ? {
                          ...caughtPokemon,
                          heldItem:
                              newStatus === PokemonStatus.Dead
                                  ? ''
                                  : caughtPokemon.heldItem,
                          status: newStatus,
                      }
                    : caughtPokemon
            ),
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
        setView(newStatus === PokemonStatus.Dead ? 'dead' : 'alive');
    };

    const handleEditPokemon = (
        pokemon: CaughtPokemon,
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'heldItem'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
            | 'tags'
        >
    ): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.map((caughtPokemon) =>
                caughtPokemon.location === pokemon.location
                    ? { ...caughtPokemon, ...details }
                    : caughtPokemon
            ),
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    const handleEvolve = (pokemon: CaughtPokemon, newSlug: string): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.map((caughtPokemon) =>
                caughtPokemon.location === pokemon.location
                    ? { ...caughtPokemon, slug: newSlug }
                    : caughtPokemon
            ),
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    const handleViewChange = (nextView: BoxView): void => {
        setView(nextView);
        onDeselectPokemon();
    };

    const handleReorderPokemon = (
        fromLocation: string,
        toLocation: string
    ): void => {
        const fromIndex = run.caughtPokemon.findIndex(
            (pokemon) => pokemon.location === fromLocation
        );
        const toIndex = run.caughtPokemon.findIndex(
            (pokemon) => pokemon.location === toLocation
        );

        if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
            return;
        }

        const reorderedPokemon = [...run.caughtPokemon];
        const [movedPokemon] = reorderedPokemon.splice(fromIndex, 1);
        reorderedPokemon.splice(toIndex, 0, movedPokemon);

        const updatedRun: Run = {
            ...run,
            caughtPokemon: reorderedPokemon,
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['box-tab']}>
            <PokemonBox
                caughtPokemon={run.caughtPokemon}
                levelCap={levelCap}
                onAddPokemonClick={handleAddPokemonClick}
                onImportClick={handleImportClick}
                onReorderPokemon={handleReorderPokemon}
                onSelectPokemon={onSelectPokemon}
                onViewChange={handleViewChange}
                selectedPokemon={selectedPokemon}
                view={view}
            />
            <PokemonPreview
                accentColor={game.accentColor}
                buttonTextColor={game.textContrastColor}
                canSelectLocation={canSelectLocation}
                generation={game.generation}
                levelCap={levelCap}
                onEdit={handleEditPokemon}
                onEvolve={handleEvolve}
                onSelectAbility={onSelectAbility}
                onSelectItem={onSelectItem}
                onSelectLocation={onSelectLocation}
                onSelectMove={onSelectMove}
                onToggleStatus={handleToggleStatus}
                pokemon={selectedCaughtPokemon}
                variant={variant}
                version={game.version}
                view={view}
            />
            {isAddPokemonModalOpen && (
                <AddPokemonModal
                    accentColor={game.accentColor}
                    allSpecies={allSpecies}
                    buttonTextColor={game.textContrastColor}
                    defaultLocation=""
                    defaultSpecies={allSpecies[0]?.slug ?? ''}
                    existingLocations={run.caughtPokemon.map(
                        (caughtPokemon) => caughtPokemon.location
                    )}
                    generation={game.generation}
                    onClose={handleCloseAddPokemonModal}
                    onSubmit={handleAddPokemon}
                    showLocation
                    version={game.version}
                />
            )}
            {isImportModalOpen && (
                <ImportBoxModal
                    accentColor={game.accentColor}
                    buttonTextColor={game.textContrastColor}
                    game={game}
                    onClose={handleCloseImportModal}
                    onSubmit={handleImportBox}
                />
            )}
        </div>
    );
};

export default BoxTab;
