'use client';

import { useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import LocationSelectModal from '@/components/run/LocationSelectModal/LocationSelectModal';
import ChevronIcon from '@/lib/icons/ChevronIcon';
import { Nature, PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, Roamer, Run } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './RoamerTracker.module.scss';

type RoamerTrackerProps = {
    game: Game;
    run: Run;
};

const RoamerTracker: React.FC<RoamerTrackerProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [catchingSpecies, setCatchingSpecies] = useState<string | null>(null);

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getCaughtEntry = (roamer: Roamer): CaughtPokemon | undefined =>
        run.caughtPokemon.find((caught) =>
            EvolutionHelpers.isSameEvolutionLine(
                game.dataSource,
                roamer.species,
                caught.slug,
                game.generation
            )
        );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const showLegendaries = settings['show-legendaries'] ?? false;
    const roamers = (game.roamers ?? []).filter(
        (roamer) =>
            showLegendaries ||
            !PokemonHelpers.getPokemonData(game.dataSource, roamer.species)
                ?.isLegendary
    );
    const caughtCount = roamers.filter((roamer) =>
        getCaughtEntry(roamer)
    ).length;
    const catchingRoamer = roamers.find(
        (roamer) => roamer.species === catchingSpecies
    );
    const locationOptions = RunHelpers.getAvailableLocationOptions(game, run);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleToggleOpen = (): void => {
        setIsOpen(!isOpen);
    };

    const handleCatch = async (
        roamer: Roamer,
        location: string
    ): Promise<void> => {
        const updatedRun: Run = {
            ...run,
            caughtPokemon: [
                ...run.caughtPokemon,
                {
                    ability:
                        PokemonHelpers.getPokemonAbilities(
                            game.dataSource,
                            roamer.species,
                            game.generation
                        )?.slot1 ?? '',
                    evs: undefined,
                    gender: undefined,
                    heldItem: '',
                    ivs: 0,
                    level: roamer.level,
                    location,
                    moves: PokemonHelpers.getMovesAtLevel(
                        game.dataSource,
                        roamer.species,
                        game.version,
                        roamer.level
                    ),
                    nature: Nature.Unknown,
                    slug: roamer.species,
                    status: PokemonStatus.Alive,
                },
            ],
        };

        await RunHelpers.saveRun(game, updatedRun);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (roamers.length === 0) return null;

    return (
        <div className={styles['roamer-tracker']}>
            <button
                className={styles.toggle}
                onClick={handleToggleOpen}
                type="button"
            >
                <span>Roamers</span>
                <span className={styles.count}>
                    {caughtCount}/{roamers.length}
                </span>
                <span
                    className={[
                        styles.chevron,
                        isOpen && styles['chevron--open'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <ChevronIcon />
                </span>
            </button>
            {isOpen && (
                <ul className={styles.list}>
                    {roamers.map((roamer) => {
                        const caughtEntry = getCaughtEntry(roamer);
                        const pokemonName =
                            PokemonHelpers.getPokemonData(
                                game.dataSource,
                                roamer.species
                            )?.name ?? roamer.species;
                        const header = (
                            <div className={styles.header}>
                                <div className={styles.sprite}>
                                    <Image
                                        alt={pokemonName}
                                        fill
                                        sizes="1.75rem"
                                        src={PokemonHelpers.getBoxSprite(
                                            roamer.species
                                        )}
                                    />
                                </div>
                                <span className={styles.name}>
                                    {pokemonName}
                                </span>
                                <span className={styles.level}>
                                    Lv. {roamer.level}
                                </span>
                            </div>
                        );

                        return (
                            <li key={roamer.species}>
                                {caughtEntry ? (
                                    <div
                                        className={[
                                            styles.entry,
                                            styles['entry--caught'],
                                        ].join(' ')}
                                    >
                                        {header}
                                    </div>
                                ) : (
                                    <button
                                        className={styles['entry-button']}
                                        onClick={() =>
                                            setCatchingSpecies(roamer.species)
                                        }
                                        type="button"
                                    >
                                        {header}
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
            {catchingRoamer && (
                <LocationSelectModal
                    game={game}
                    onClose={() => setCatchingSpecies(null)}
                    onSelect={(location) =>
                        handleCatch(catchingRoamer, location)
                    }
                    options={locationOptions}
                />
            )}
        </div>
    );
};

export default RoamerTracker;
