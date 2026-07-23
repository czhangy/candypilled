import { useSyncExternalStore } from 'react';
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
    // HOOKS
    // -------------------------------------------------------------------------

    const entries = useSyncExternalStore(
        HallOfFameHelpers.subscribe,
        HallOfFameHelpers.getSnapshot,
        HallOfFameHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const variant = StringHelpers.toSlug(game.name);
    const savedEntry = entries.find(
        (entry) => entry.game === variant && entry.attempt === run.attempt
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
                availablePokemon={run.caughtPokemon}
                generation={game.generation}
                onSave={handleSave}
                savedTeam={savedEntry?.team ?? null}
                variant={variant}
                version={game.version}
            />
        </div>
    );
};

export default HallOfFameTab;
