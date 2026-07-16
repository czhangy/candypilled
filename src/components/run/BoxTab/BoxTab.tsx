import { Game, Run } from '@/lib/static/types';
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
                pokemon={selectedCaughtPokemon}
                variant={variant}
            />
        </div>
    );
};

export default BoxTab;
