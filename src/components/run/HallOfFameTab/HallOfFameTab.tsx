import { useSyncExternalStore } from 'react';
import { CaughtPokemon, Game, Run } from '@/lib/static/types';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
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

    const handleSave = async (team: CaughtPokemon[]): Promise<void> => {
        await HallOfFameHelpers.addEntry({
            attempt: run.attempt,
            game: variant,
            team,
        });
        await RunHelpers.saveRun(game, {
            ...run,
            hallOfFameCount: run.hallOfFameCount + 1,
        });
    };

    const handleUpdateTeam = async (team: CaughtPokemon[]): Promise<void> => {
        await HallOfFameHelpers.updateEntryTeam(variant, run.attempt, team);
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
