import { useState } from 'react';
import { PokemonStatus } from '@/lib/static/enums';
import {
    BattlePokemon,
    BoxView,
    CaughtPokemon,
    Game,
    Run,
} from '@/lib/static/types';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './BoxTab.module.scss';
import PokemonBox from './PokemonBox/PokemonBox';
import PokemonPreview from './PokemonPreview/PokemonPreview';

interface BoxTabProps {
    game: Game;
    onDeselectPokemon: () => void;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onSelectPokemon: (location: string) => void;
    run: Run;
    selectedPokemon?: string;
}

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

    const [view, setView] = useState<BoxView>('box');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const selectedCaughtPokemon = run.caughtPokemon.find(
        (caughtPokemon) => caughtPokemon.location === selectedPokemon
    );
    const currentSplitName = BattleProgressHelpers.getCurrentSplitName(
        game,
        run.defeatedBattles
    );
    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const levelCap = currentSplit
        ? BattleProgressHelpers.getLevelCap(currentSplit, run.starter)
        : null;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

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

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['box-tab']}>
            <PokemonBox
                caughtPokemon={run.caughtPokemon}
                levelCap={levelCap}
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
        </div>
    );
};

export default BoxTab;
