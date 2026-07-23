'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';
import PokemonSlot from '@/components/run/SplitTab/SplitLocation/BattleCard/PokemonSlot/PokemonSlot';
import { GAMES } from '@/lib/games';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './HofPage.module.scss';

const HofPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TEAM_SLOT_COUNT = 6;

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
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleNoop = (): void => {};

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

                    const paddedTeam = Array.from(
                        { length: TEAM_SLOT_COUNT },
                        (_, index) => entry.team[index] ?? null
                    );

                    return (
                        <li
                            className={styles.entry}
                            key={`${entry.game}-${entry.attempt}`}
                        >
                            <span className={styles['entry__heading']}>
                                {game.name} — Attempt #{entry.attempt}
                            </span>
                            <div className={styles['entry__team']}>
                                {paddedTeam.map((pokemon, index) => (
                                    <PokemonSlot
                                        generation={game.generation}
                                        isReadOnly
                                        key={
                                            pokemon
                                                ? pokemon.location
                                                : `empty-${index}`
                                        }
                                        onSelectAbility={handleNoop}
                                        onSelectMove={handleNoop}
                                        onSelectSpecies={handleNoop}
                                        pokemon={pokemon}
                                        variant={entry.game}
                                        version={game.version}
                                    />
                                ))}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HofPage;
