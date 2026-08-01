import { useState } from 'react';
import { PokemonStatus } from '@/lib/static/enums';
import { BoxView, CaughtPokemon, Game, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
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
    onSelectSpecies: (slug: string) => void;
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
    onSelectSpecies,
    run,
    selectedPokemon,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [view, setView] = useState<BoxView>('alive');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
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
        ? SplitHelpers.getLevelCap(game, currentSplit)
        : null;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

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
        const merged = run.caughtPokemon.map((pokemon) => {
            if (pokemon.status === PokemonStatus.Dead) {
                return pokemon;
            }

            const importedPokemon = importedByLocation.get(pokemon.location);
            return importedPokemon ?? pokemon;
        });
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
                onImportClick={handleImportClick}
                onReorderPokemon={handleReorderPokemon}
                onSelectPokemon={onSelectPokemon}
                onViewChange={handleViewChange}
                selectedPokemon={selectedPokemon}
                view={view}
            />
            <PokemonPreview
                canSelectLocation={canSelectLocation}
                generation={game.generation}
                levelCap={levelCap}
                onSelectAbility={onSelectAbility}
                onSelectItem={onSelectItem}
                onSelectLocation={onSelectLocation}
                onSelectMove={onSelectMove}
                onSelectSpecies={onSelectSpecies}
                onToggleStatus={handleToggleStatus}
                pokemon={selectedCaughtPokemon}
                variant={variant}
                version={game.version}
            />
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
