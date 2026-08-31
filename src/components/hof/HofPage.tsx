'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';
import HofTeam from '@/components/run/HallOfFameTab/HallOfFameCard/HofTeam/HofTeam';
import { GAMES } from '@/lib/data/games';
import { CaughtPokemon } from '@/lib/static/types';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './HofPage.module.scss';

const HofPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const router = useRouter();
    const entries = useSyncExternalStore(
        HallOfFameHelpers.subscribe,
        HallOfFameHelpers.getSnapshot,
        HallOfFameHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const sortedEntries = [...entries].sort((a, b) => b.attempt - a.attempt);

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        if (entries.length === 0) {
            router.replace('/');
        }
    }, [entries.length, router]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleUpdateTeam = async (
        game: string,
        attempt: number,
        team: CaughtPokemon[]
    ): Promise<void> => {
        await HallOfFameHelpers.updateEntryTeam(game, attempt, team);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (entries.length === 0) {
        return null;
    }

    return (
        <div className={styles['hof-page']}>
            <h1 className={styles.title}>Hall of Fame</h1>
            <ul className={styles.list}>
                {sortedEntries.map((entry) => {
                    const game = GAMES.find(
                        (candidate) =>
                            StringHelpers.toSlug(candidate.name) === entry.game
                    );
                    if (!game) return null;

                    return (
                        <li
                            className={styles.entry}
                            key={`${entry.game}-${entry.attempt}`}
                        >
                            <span className={styles['entry__heading']}>
                                {game.name} — Attempt #{entry.attempt}
                            </span>
                            <HofTeam
                                dataSource={game.dataSource}
                                generation={game.generation}
                                onChange={(team) =>
                                    handleUpdateTeam(
                                        entry.game,
                                        entry.attempt,
                                        team
                                    )
                                }
                                team={entry.team}
                                variant={
                                    game.pokemonAssetFolder ?? game.version
                                }
                                version={game.version}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HofPage;
