import { useState } from 'react';
import AddPokemonModal from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/AddPokemonModal';
import { PokemonStatus } from '@/lib/static/enums';
import {
    BattlePokemon,
    BoxView,
    CaughtPokemon,
    Game,
    Run,
} from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './BoxTab.module.scss';
import PokemonBox from './PokemonBox/PokemonBox';
import PokemonPreview from './PokemonPreview/PokemonPreview';

type BoxTabProps = {
    game: Game;
    onDeselectPokemon: () => void;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onSelectPokemon: (location: string) => void;
    run: Run;
    selectedPokemon?: string;
};

const BoxTab: React.FC<BoxTabProps> = ({
    game,
    onDeselectPokemon,
    onSelectAbility,
    onSelectMove,
    onSelectPokemon,
    run,
    selectedPokemon,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isAddPokemonModalOpen, setIsAddPokemonModalOpen] = useState(false);
    const [view, setView] = useState<BoxView>('box');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const allSpecies = PokemonHelpers.getAllSpecies(game.generation).filter(
        (species) =>
            !run.caughtPokemon.some((caughtPokemon) =>
                EvolutionHelpers.isSameEvolutionLine(
                    species,
                    caughtPokemon.name,
                    game.generation
                )
            )
    );
    const selectedCaughtPokemon = run.caughtPokemon.find(
        (caughtPokemon) => caughtPokemon.location === selectedPokemon
    );
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

    const handleAddPokemon = (
        details: Pick<
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
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
        setIsAddPokemonModalOpen(false);
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
                    ? { ...caughtPokemon, status: newStatus }
                    : caughtPokemon
            ),
        };

        LocalStorageHelpers.saveRun(game, updatedRun);
        setView(newStatus === PokemonStatus.Dead ? 'graveyard' : 'box');
    };

    const handleEditPokemon = (
        pokemon: CaughtPokemon,
        details: Pick<
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
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

    const handleEvolve = (pokemon: CaughtPokemon, newName: string): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.map((caughtPokemon) =>
                caughtPokemon.location === pokemon.location
                    ? { ...caughtPokemon, name: newName }
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
                onReorderPokemon={handleReorderPokemon}
                onSelectPokemon={onSelectPokemon}
                onViewChange={handleViewChange}
                selectedPokemon={selectedPokemon}
                variant={variant}
                view={view}
            />
            <PokemonPreview
                accentColor={game.accentColor}
                generation={game.generation}
                levelCap={levelCap}
                onEdit={handleEditPokemon}
                onEvolve={handleEvolve}
                onSelectAbility={onSelectAbility}
                onSelectMove={onSelectMove}
                onToggleStatus={handleToggleStatus}
                pokemon={selectedCaughtPokemon}
                variant={variant}
                view={view}
            />
            {isAddPokemonModalOpen && (
                <AddPokemonModal
                    accentColor={game.accentColor}
                    allSpecies={allSpecies}
                    defaultLocation=""
                    defaultSpecies={allSpecies[0] ?? ''}
                    existingLocations={run.caughtPokemon.map(
                        (caughtPokemon) => caughtPokemon.location
                    )}
                    generation={game.generation}
                    onClose={handleCloseAddPokemonModal}
                    onSubmit={handleAddPokemon}
                    showLocation
                />
            )}
        </div>
    );
};

export default BoxTab;
