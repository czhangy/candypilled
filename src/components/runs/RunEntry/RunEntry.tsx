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
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import NotesHelpers from '@/lib/utils/NotesHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import RunHelpers from '@/lib/utils/RunHelpers';
import RunImportHelpers from '@/lib/utils/RunImportHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
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

    const startNewRun = async (
        starter: CaughtPokemon,
        gender: 'male' | 'female'
    ): Promise<void> => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            completedSplits: [],
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starter.slug,
            gender,
            caughtPokemon: [starter],
            missedLocations: [],
            wipe: false,
        };

        await RunHelpers.saveRun(game, newRun);
        router.push(runUrl);
    };

    // The first step of starting a new run: gender selection, then
    // starter select.
    const beginRunCreation = (): void => {
        setIsGenderSelectOpen(true);
    };

    // Throws unless the import has a Pokémon at the game's starter
    // location whose evolution line's base species is one of
    // game.starters. The location alone isn't a reliable match (a wild
    // encounter can share it with the starter, e.g. Starly on Route 201),
    // and an evolved starter (e.g. Infernape) keeps its original catch
    // location but not its original species, so its species has to be
    // resolved back to the base slug game.battles' conditions are keyed by.
    const findImportedStarterSlug = (pokemon: CaughtPokemon[]): string => {
        const starterLocation = EncounterHelpers.getStarterLocationName(game);
        const caughtAtLocation = pokemon.find(
            (caught) => caught.location === starterLocation
        );
        const baseSlug =
            caughtAtLocation &&
            EvolutionHelpers.getFullEvolutionLine(
                game.dataSource,
                caughtAtLocation.slug,
                game.generation
            )?.slug;

        if (!baseSlug || !game.starters.includes(baseSlug)) {
            throw new Error(
                `No starter found at ${starterLocation}, where ${game.name} starters are received.`
            );
        }

        return baseSlug;
    };

    const createRunFromImport = async (
        pokemon: CaughtPokemon[],
        completedSplits: string[],
        starterSlug: string,
        gender: 'male' | 'female'
    ): Promise<void> => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            completedSplits,
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starterSlug,
            gender,
            caughtPokemon: pokemon,
            missedLocations: [],
            wipe: false,
        };

        await RunHelpers.saveRun(game, newRun);
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

    const handleReset = async (): Promise<void> => {
        await RunHelpers.deleteRun(game);
        await HallOfFameHelpers.deleteEntriesForGame(game);
        await NotesHelpers.deleteNotesForGame(game);
    };

    const handleImport = async (
        importedPokemon: CaughtPokemon[],
        importedCompletedSplits: string[],
        importedGender: 'male' | 'female'
    ): Promise<void> => {
        if (run) {
            await RunHelpers.saveRun(
                game,
                RunImportHelpers.mergeImport(
                    run,
                    importedPokemon,
                    importedCompletedSplits,
                    importedGender
                )
            );
            return;
        }

        await createRunFromImport(
            importedPokemon,
            importedCompletedSplits,
            findImportedStarterSlug(importedPokemon),
            importedGender
        );
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

    const handleStarterSelect = async (
        starter: CaughtPokemon
    ): Promise<void> => {
        // selectedGender is always set here: StarterSelectModal only opens
        // after handleGenderSelect runs.
        await startNewRun(starter, selectedGender as 'male' | 'female');
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
                        <span className={styles.attempt}>
                            {run && run.attempt > 0
                                ? `Attempt #${run.attempt}`
                                : game.name}
                        </span>
                        {run && (
                            <div className={styles.sprites}>
                                <Image
                                    alt={`${run.gender} protagonist`}
                                    className={styles.gender}
                                    height={32}
                                    src={TrainerHelpers.getOverworldSprite(
                                        game.genders[run.gender]
                                    )}
                                    width={32}
                                />
                                <Image
                                    alt={`${run.starter} starter`}
                                    className={styles.starter}
                                    height={30}
                                    src={PokemonHelpers.getBoxSprite(
                                        run.starter
                                    )}
                                    width={40}
                                />
                            </div>
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
            {isGenderSelectOpen && (
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
        </div>
    );
};

export default RunEntry;
