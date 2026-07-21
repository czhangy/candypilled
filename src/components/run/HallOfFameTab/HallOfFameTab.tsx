import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, Run } from '@/lib/static/types';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import HallOfFameCard from './HallOfFameCard/HallOfFameCard';
import styles from './HallOfFameTab.module.scss';

type HallOfFameTabProps = {
    game: Game;
    run: Run;
};

const HallOfFameTab: React.FC<HallOfFameTabProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const availablePokemon = run.caughtPokemon.filter(
        (pokemon) => pokemon.status !== PokemonStatus.Dead
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSave = (team: CaughtPokemon[]): void => {
        HallOfFameHelpers.addEntry({
            attempt: run.attempt,
            game: variant,
            team,
        });
        LocalStorageHelpers.saveRun(game, {
            ...run,
            hallOfFameCount: run.hallOfFameCount + 1,
        });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['hall-of-fame-tab']}>
            <HallOfFameCard
                availablePokemon={availablePokemon}
                onSave={handleSave}
                variant={variant}
            />
        </div>
    );
};

export default HallOfFameTab;
