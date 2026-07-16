'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal/Modal';
import BoxIcon from '@/lib/icons/BoxIcon';
import CrownIcon from '@/lib/icons/CrownIcon';
import RunIcon from '@/lib/icons/RunIcon';
import SkullIcon from '@/lib/icons/SkullIcon';
import { CaughtPokemon, Game, Run } from '@/lib/static/types';
import BattleProgressHelpers from '@/lib/utils/BattleProgressHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './RunEntry.module.scss';
import StarterSelectModal from './StarterSelectModal/StarterSelectModal';

interface RunEntryProps {
    game: Game;
    run: Run | null;
}

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
        ? BattleProgressHelpers.getSplitName(game, run.personalBest)
        : null;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const startNewRun = (starter: CaughtPokemon): void => {
        const newRun: Run = {
            attempt: (run?.attempt ?? 0) + 1,
            deathCount: 0,
            defeatedBattles: [],
            split: game.splits[0].name,
            boxCount: 0,
            personalBest: run?.personalBest ?? '',
            hallOfFameCount: run?.hallOfFameCount ?? 0,
            starter: starter.name,
            caughtPokemon: [starter],
            missedLocations: [],
        };

        LocalStorageHelpers.saveRun(game, newRun);
        router.push(`/runs/${StringHelpers.toSlug(game.name)}`);
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleContinueClick = (): void => {
        router.push(`/runs/${StringHelpers.toSlug(game.name)}`);
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
        setIsConfirmOpen(false);
        setIsStarterSelectOpen(true);
    };

    const handleStarterSelectClose = (): void => {
        setIsStarterSelectOpen(false);
    };

    const handleStarterSelect = (starter: CaughtPokemon): void => {
        setIsStarterSelectOpen(false);
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
                        <span className={styles.attempt}>
                            Attempt #{run?.attempt ?? 0}
                        </span>
                    </div>
                    <div className={styles.line}>
                        <span className={styles.split}>
                            <RunIcon />
                            {run?.split ? `${run.split} Split` : '-'}
                        </span>
                        <span className={styles.boxes}>
                            <BoxIcon />
                            {run?.boxCount ?? '-'}
                        </span>
                        <span className={styles.deaths}>
                            <SkullIcon />
                            {run?.deathCount ?? '-'}
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
                        className={styles.continue}
                        onClick={handleContinueClick}
                        type="button"
                    >
                        Continue
                    </button>
                )}
                <button
                    className={styles['new-run']}
                    onClick={handleNewRunClick}
                    type="button"
                >
                    New
                </button>
            </div>
            {isConfirmOpen && (
                <Modal onClose={handleConfirmClose} title="Start a new run?">
                    <p className={styles['confirm-text']}>
                        Your current run in progress will be overwritten and
                        can&apos;t be recovered.
                    </p>
                    <div className={styles['confirm-actions']}>
                        <button
                            className={styles.cancel}
                            onClick={handleConfirmClose}
                            type="button"
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.confirm}
                            onClick={handleConfirmNewRun}
                            type="button"
                        >
                            Start New Run
                        </button>
                    </div>
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
