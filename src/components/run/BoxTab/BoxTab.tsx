import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './BoxTab.module.scss';
import PokemonBox from './PokemonBox/PokemonBox';
import PokemonPreview from './PokemonPreview/PokemonPreview';

interface BoxTabProps {
    game: Game;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onSelectPokemon: (location: string) => void;
    run: Run;
    selectedPokemon?: string;
}

const BoxTab: React.FC<BoxTabProps> = ({
    game,
    onSelectAbility,
    onSelectMove,
    onSelectPokemon,
    run,
    selectedPokemon,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const selectedCaughtPokemon = run.caughtPokemon.find(
        (caughtPokemon) => caughtPokemon.location === selectedPokemon
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggleStatus = (pokemon: CaughtPokemon): void => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: run.caughtPokemon.map((caughtPokemon) =>
                caughtPokemon.location === pokemon.location
                    ? {
                          ...caughtPokemon,
                          status:
                              caughtPokemon.status === PokemonStatus.Dead
                                  ? PokemonStatus.Alive
                                  : PokemonStatus.Dead,
                      }
                    : caughtPokemon
            ),
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
                onSelectPokemon={onSelectPokemon}
                selectedPokemon={selectedPokemon}
                variant={variant}
            />
            <PokemonPreview
                generation={game.generation}
                onSelectAbility={onSelectAbility}
                onSelectMove={onSelectMove}
                onToggleStatus={handleToggleStatus}
                pokemon={selectedCaughtPokemon}
                variant={variant}
            />
        </div>
    );
};

export default BoxTab;
