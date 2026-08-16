'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BoxIcon from '@/lib/icons/BoxIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import RunIcon from '@/lib/icons/RunIcon';
import SkullIcon from '@/lib/icons/SkullIcon';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, Run } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import RunImportHelpers from '@/lib/utils/RunImportHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import DataModal from './DataModal/DataModal';
import GenderSelectModal from './GenderSelectModal/GenderSelectModal';
import styles from './RunEntry.module.scss';
import StarterSelectModal from './StarterSelectModal/StarterSelectModal';

type RunEntryProps = {
    game: Game;
    run: Run | null;
};

const RunEntry: React.FC<RunEntryProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const router = useRouter();

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isDataModalOpen, setIsDataModalOpen] = useState(false);
    const [isGenderSelectOpen, setIsGenderSelectOpen] = useState(false);
    const [isStarterSelectOpen, setIsStarterSelectOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState<
        'male' | 'female' | undefined
    >(undefined);
    const [pendingImport, setPendingImport] = useState<{
        pokemon: CaughtPokemon[];
        completedSplits: string[];
        starter: CaughtPokemon;
    } | null>(null);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const currentSplitName = run
        ? SplitHelpers.getCurrentSplitName(game, run.completedSplits)
        : null;
    const boxCount = run
        ? run.caughtPokemon.filter(
              (caughtPokemon) => caughtPokemon.status !== PokemonStatus.Dead
          ).length
        : null;
    const deathCount = run
        ? run.caughtPokemon.filter(
              (caughtPokemon) => caughtPokemon.status === PokemonStatus.Dead
          ).length
        : null;
    const runUrl = `/runs/${StringHelpers.toSlug(game.name)}`;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const startNewRun = (
        starter: CaughtPokemon,
        gender: 'male' | 'female' | undefined
    ): void => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            completedSplits: [],
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starter.slug,
            ...(gender && { gender }),
            caughtPokemon: [starter],
            missedLocations: [],
            wipe: false,
        };

        LocalStorageHelpers.saveRun(game, newRun);
        router.push(runUrl);
    };

    // The first step of starting a new run: gender selection when this
    // game's content depends on it, otherwise straight to starter select.
    const beginRunCreation = (): void => {
        if (game.genders) {
            setIsGenderSelectOpen(true);
        } else {
            setIsStarterSelectOpen(true);
        }
    };

    // Throws if the import has no Pokémon at the game's starter location,
    // since that's the only reliable way to identify the starter (its
    // species alone isn't enough — trading can put another starter species
    // in the box).
    const findImportedStarter = (pokemon: CaughtPokemon[]): CaughtPokemon => {
        const starterLocation = EncounterHelpers.getStarterLocationName(game);
        const starter = pokemon.find(
            (caught) => caught.location === starterLocation
        );

        if (!starter) {
            throw new Error(
                `No Pokémon found at ${starterLocation}, where ${game.name} starters are received.`
            );
        }

        return starter;
    };

    const createRunFromImport = (
        pokemon: CaughtPokemon[],
        completedSplits: string[],
        starter: CaughtPokemon,
        gender: 'male' | 'female' | undefined
    ): void => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            completedSplits,
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starter.slug,
            ...(gender && { gender }),
            caughtPokemon: pokemon,
            missedLocations: [],
            wipe: false,
        };

        LocalStorageHelpers.saveRun(game, newRun);
        router.push(runUrl);
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleContinueClick = (): void => {
        router.push(runUrl);
    };

    const handleNewRunClick = (): void => {
        if (run) {
            setIsConfirmOpen(true);
        } else {
            beginRunCreation();
        }
    };

    const handleConfirmClose = (): void => {
        setIsConfirmOpen(false);
    };

    const handleConfirmNewRun = (): void => {
        beginRunCreation();
    };

    const handleDataClick = (): void => {
        setIsDataModalOpen(true);
    };

    const handleDataModalClose = (): void => {
        setIsDataModalOpen(false);
    };

    const handleReset = (): void => {
        LocalStorageHelpers.deleteRun(game);
        HallOfFameHelpers.deleteEntriesForGame(game);
    };

    const handleImport = (
        importedPokemon: CaughtPokemon[],
        importedCompletedSplits: string[]
    ): void => {
        if (run) {
            LocalStorageHelpers.saveRun(
                game,
                RunImportHelpers.mergeImport(
                    run,
                    importedPokemon,
                    importedCompletedSplits
                )
            );
            return;
        }

        const starter = findImportedStarter(importedPokemon);

        if (game.genders) {
            setPendingImport({
                pokemon: importedPokemon,
                completedSplits: importedCompletedSplits,
                starter,
            });
        } else {
            createRunFromImport(
                importedPokemon,
                importedCompletedSplits,
                starter,
                undefined
            );
        }
    };

    const handleImportGenderSelectClose = (): void => {
        setPendingImport(null);
    };

    const handleImportGenderSelect = (gender: 'male' | 'female'): void => {
        if (!pendingImport) return;

        createRunFromImport(
            pendingImport.pokemon,
            pendingImport.completedSplits,
            pendingImport.starter,
            gender
        );
        setPendingImport(null);
    };

    const handleGenderSelectClose = (): void => {
        setIsGenderSelectOpen(false);
    };

    const handleGenderSelect = (gender: 'male' | 'female'): void => {
        setSelectedGender(gender);
        setIsGenderSelectOpen(false);
        setIsStarterSelectOpen(true);
    };

    const handleStarterSelectClose = (): void => {
        setIsStarterSelectOpen(false);
    };

    const handleStarterSelect = (starter: CaughtPokemon): void => {
        startNewRun(starter, selectedGender);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['run-entry']}
            style={
                { '--accent-color': game.accentColor } as React.CSSProperties
            }
        >
            <div className={styles.details}>
                <Image
                    alt={`${game.name} logo`}
                    className={styles.logo}
                    height={56}
                    src={game.logo}
                    width={103}
                />
                <div className={styles.info}>
                    <div className={styles.line}>
                        <span className={styles.name}>Pokémon {game.name}</span>
                        {run && run.attempt > 0 && (
                            <span className={styles.attempt}>
                                Attempt #{run.attempt}
                            </span>
                        )}
                    </div>
                    <div className={styles.line}>
                        <span className={styles.split}>
                            <RunIcon />
                            {run?.wipe
                                ? 'Wiped'
                                : currentSplitName
                                  ? `${currentSplitName} Split`
                                  : '-'}
                        </span>
                        <span className={styles.boxes}>
                            <BoxIcon />
                            {boxCount ?? '-'}
                        </span>
                        <span className={styles.deaths}>
                            <SkullIcon />
                            {deathCount ?? '-'}
                        </span>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.line}>
                        <span className={styles['hall-of-fame']}>
                            <CrownIcon />
                            {run?.hallOfFameCount ?? 0}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                {run && (
                    <button
                        className={styles.action}
                        onClick={handleContinueClick}
                        type="button"
                    >
                        Continue
                    </button>
                )}
                <button
                    className={styles.action}
                    onClick={handleNewRunClick}
                    type="button"
                >
                    New
                </button>
                <button
                    className={styles.action}
                    onClick={handleDataClick}
                    type="button"
                >
                    Data
                </button>
            </div>
            {isConfirmOpen && (
                <ConfirmModal
                    confirmLabel="New Run"
                    description="Your current run in progress will be overwritten and can't be recovered."
                    onClose={handleConfirmClose}
                    onConfirm={handleConfirmNewRun}
                    title="Start a new run?"
                />
            )}
            {isDataModalOpen && (
                <DataModal
                    accentColor={game.accentColor}
                    buttonTextColor={game.textContrastColor}
                    game={game}
                    hasExistingRun={!!run}
                    onClose={handleDataModalClose}
                    onImport={handleImport}
                    onReset={handleReset}
                />
            )}
            {isGenderSelectOpen && game.genders && (
                <GenderSelectModal
                    game={game}
                    genders={game.genders}
                    onClose={handleGenderSelectClose}
                    onSelect={handleGenderSelect}
                />
            )}
            {isStarterSelectOpen && (
                <StarterSelectModal
                    game={game}
                    onClose={handleStarterSelectClose}
                    onSelect={handleStarterSelect}
                />
            )}
            {pendingImport && game.genders && (
                <GenderSelectModal
                    game={game}
                    genders={game.genders}
                    onClose={handleImportGenderSelectClose}
                    onSelect={handleImportGenderSelect}
                />
            )}
        </div>
    );
};

export default RunEntry;
