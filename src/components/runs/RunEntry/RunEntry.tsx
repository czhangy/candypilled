'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal/Modal';
import BoxIcon from '@/lib/icons/BoxIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import RunIcon from '@/lib/icons/RunIcon';
import SkullIcon from '@/lib/icons/SkullIcon';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Game, Run } from '@/lib/static/types';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import SplitHelpers from '@/lib/utils/SplitHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
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
    const [isStarterSelectOpen, setIsStarterSelectOpen] = useState(false);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const personalBestSplitName = run?.personalBest
        ? SplitHelpers.getSplitName(game, run.personalBest)
        : null;
    const currentSplitName = run
        ? SplitHelpers.getCurrentSplitName(game, run.defeatedBattles)
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

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getRunUrl = (defeatedBattles: string[]): string => {
        const splitName = SplitHelpers.getCurrentSplitName(
            game,
            defeatedBattles
        );
        const params = new URLSearchParams({ tab: 'split' });
        if (splitName) {
            params.set('split', splitName);
        }

        return `/runs/${StringHelpers.toSlug(game.name)}?${params.toString()}`;
    };

    const startNewRun = (starter: CaughtPokemon): void => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            defeatedBattles: [],
            personalBest: run?.personalBest ?? '',
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starter.name,
            caughtPokemon: [starter],
            missedLocations: [],
            wipe: false,
        };

        LocalStorageHelpers.saveRun(game, newRun);
        router.push(getRunUrl(newRun.defeatedBattles));
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleContinueClick = (): void => {
        router.push(getRunUrl(run?.defeatedBattles ?? []));
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
                        <span className={styles.name}>{game.name}</span>
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
                        {!run || run.hallOfFameCount === 0 ? (
                            <span className={styles['personal-best']}>
                                PB:{' '}
                                {personalBestSplitName
                                    ? `${personalBestSplitName} Split`
                                    : 'N/A'}
                            </span>
                        ) : (
                            <span className={styles['hall-of-fame']}>
                                <CrownIcon />
                                {run.hallOfFameCount}
                            </span>
                        )}
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
            </div>
            {isConfirmOpen && (
                <Modal onClose={handleConfirmClose} title="Start a new run?">
                    {(requestClose) => (
                        <>
                            <p className={styles['confirm-text']}>
                                Your current run in progress will be overwritten
                                and can&apos;t be recovered.
                            </p>
                            <div className={styles['confirm-actions']}>
                                <button
                                    className={styles.cancel}
                                    onClick={requestClose}
                                    type="button"
                                >
                                    Cancel
                                </button>
                                <button
                                    className={styles.confirm}
                                    onClick={() => {
                                        handleConfirmNewRun();
                                        requestClose();
                                    }}
                                    type="button"
                                >
                                    Start New Run
                                </button>
                            </div>
                        </>
                    )}
                </Modal>
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
