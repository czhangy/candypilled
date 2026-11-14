import { useState } from 'react';
import { PokemonStatus } from '@/lib/static/enums';
import {
    BoxView,
    CaughtPokemon,
    DropdownOption,
    Game,
    Run,
} from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import styles from './BoxTab.module.scss';
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

    const [view, setView] = useState<BoxView>('alive');

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = game.pokemonAssetFolder ?? game.version;
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
        run.completedSplits
    );
    const currentSplit = game.splits.find(
        (split) => split.name === currentSplitName
    );
    const battleOptions: DropdownOption[] = BattleHelpers.getAllBattleOptions(
        game,
        run.gender
    ).map((option) => ({ label: option.label, value: option.battleKey }));
    const deathBattle = selectedCaughtPokemon?.deathBattleKey
        ? BattleHelpers.getAllBattles(game, run.gender).find(
              (battle) =>
                  battle.battleKey === selectedCaughtPokemon.deathBattleKey
          )
        : undefined;
    const levelCap = currentSplit
        ? SplitHelpers.getLevelCap(
              game,
              currentSplit,
              run.completedSplits,
              run.gender
          )
        : null;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleStatusChange = async (
        pokemon: CaughtPokemon,
        status: PokemonStatus,
        deathBattleKey: string | undefined
    ): Promise<void> => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.map((caughtPokemon) =>
                caughtPokemon.location === pokemon.location
                    ? {
                          ...caughtPokemon,
                          deathBattleKey,
                          heldItem:
                              status === PokemonStatus.Dead
                                  ? undefined
                                  : caughtPokemon.heldItem,
                          status,
                      }
                    : caughtPokemon
            ),
        };

        await RunHelpers.saveRun(game, updatedRun);
        setView(status === PokemonStatus.Dead ? 'dead' : 'alive');
    };

    const handleKill = async (
        pokemon: CaughtPokemon,
        deathBattleKey: string | undefined
    ): Promise<void> => {
        await handleStatusChange(pokemon, PokemonStatus.Dead, deathBattleKey);
    };

    const handleRevive = async (pokemon: CaughtPokemon): Promise<void> => {
        await handleStatusChange(pokemon, PokemonStatus.Alive, undefined);
    };

    const handleSaveNote = async (
        pokemon: CaughtPokemon,
        note: string
    ): Promise<void> => {
        await RunHelpers.saveRun(game, {
            ...run,
            pokemonNotes: { ...run.pokemonNotes, [pokemon.location]: note },
        });
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
                dataSource={game.dataSource}
                generation={game.generation}
                levelCap={levelCap}
                onSelectPokemon={onSelectPokemon}
                onViewChange={handleViewChange}
                selectedPokemon={selectedPokemon}
                version={game.version}
                view={view}
            />
            <PokemonPreview
                accentColor={game.accentColor}
                battleOptions={battleOptions}
                buttonTextColor={game.textContrastColor}
                canSelectLocation={canSelectLocation}
                dataSource={game.dataSource}
                deathBattleName={
                    deathBattle
                        ? BattleHelpers.getFullName(deathBattle, game)
                        : undefined
                }
                generation={game.generation}
                levelCap={levelCap}
                onSelectAbility={onSelectAbility}
                onSelectItem={onSelectItem}
                onSelectLocation={onSelectLocation}
                onSelectMove={onSelectMove}
                onSaveNote={handleSaveNote}
                onSelectSpecies={onSelectSpecies}
                onKill={handleKill}
                onRevive={handleRevive}
                note={
                    selectedCaughtPokemon
                        ? (run.pokemonNotes[selectedCaughtPokemon.location] ??
                          '')
                        : ''
                }
                pokemon={selectedCaughtPokemon}
                variant={variant}
                version={game.version}
            />
        </div>
    );
};

export default BoxTab;
