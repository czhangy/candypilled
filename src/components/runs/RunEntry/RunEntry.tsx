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
import HallOfFameHelpers from '@/lib/utils/HallOfFameHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import DataModal from './DataModal/DataModal';
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
    const [isStarterSelectOpen, setIsStarterSelectOpen] = useState(false);

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

    const startNewRun = (starter: CaughtPokemon): void => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            completedSplits: [],
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starter.slug,
            caughtPokemon: [starter],
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
            setIsStarterSelectOpen(true);
        }
    };

    const handleConfirmClose = (): void => {
        setIsConfirmOpen(false);
    };

    const handleConfirmNewRun = (): void => {
        setIsStarterSelectOpen(true);
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

    const handleStarterSelectClose = (): void => {
        setIsStarterSelectOpen(false);
    };

    const handleStarterSelect = (starter: CaughtPokemon): void => {
        startNewRun(starter);
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
                    gameName={game.name}
                    hasExistingRun={!!run}
                    onClose={handleDataModalClose}
                    onReset={handleReset}
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
