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

    const handleUpdateTeam = (team: CaughtPokemon[]): void => {
        HallOfFameHelpers.updateEntryTeam(variant, run.attempt, team);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['hall-of-fame-tab']}>
            <HallOfFameCard
                availablePokemon={run.caughtPokemon}
                dataSource={game.dataSource}
                generation={game.generation}
                onSave={handleSave}
                onUpdateTeam={handleUpdateTeam}
                savedTeam={savedEntry?.team ?? null}
                variant={game.pokemonAssetFolder ?? game.version}
                version={game.version}
            />
        </div>
    );
};

export default HallOfFameTab;
