'use client';

import { useState } from 'react';
import Image from 'next/image';
import ConfirmModal from '@/components/common/ConfirmModal/ConfirmModal';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import EditIcon from '@/lib/icons/EditIcon';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import AiFlagSection from './AiFlagSection/AiFlagSection';
import styles from './BattleCard.module.scss';
import BattleNotesModal from './BattleNotesModal/BattleNotesModal';
import PokemonSlot from './PokemonSlot/PokemonSlot';
import TrainerPanel from './TrainerPanel/TrainerPanel';
import TrainerSprite from './TrainerSprite/TrainerSprite';

// 'link' mode's species, move, ability and item buttons open their reference
// pages. 'select' mode has no links: it reports which team member (an index
// into the battle's combined team) or move slot was clicked.
type BattleCardProps = (
    | {
          mode: 'link';
          onSelectAbility: (slug: string) => void;
          onSelectItem: (slug: string) => void;
          onSelectMove: (slug: string) => void;
          onSelectSpecies: (species: string) => void;
          onSelectTrainer?: (battleKey: string) => void;
          onWipeBattle?: (battleKey: string) => void;
      }
    | {
          mode: 'select';
          onSelectMember: (memberIndex: number) => void;
          onSelectMove: (memberIndex: number, moveIndex: number) => void;
      }
) & {
    battle: Battle;
    game: Game;
    generation: number;
    isTagPartner?: boolean;
    starter: string;
    variant: string;
    version: string;
};

const BattleCard: React.FC<BattleCardProps> = ({
    battle,
    game,
    generation,
    isTagPartner,
    starter,
    variant,
    version,
    ...rest
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TEAM_SLOT_COUNT = 6;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
    const [isWipeConfirmOpen, setIsWipeConfirmOpen] = useState(false);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getSlotHandlers = (
        firstMemberIndex: number,
        slotIndex: number
    ): Pick<
        React.ComponentProps<typeof PokemonSlot>,
        'onSelectAbility' | 'onSelectItem' | 'onSelectMove' | 'onSelectSpecies'
    > => {
        if (rest.mode === 'link') {
            return {
                onSelectAbility: rest.onSelectAbility,
                onSelectItem: rest.onSelectItem,
                onSelectMove: rest.onSelectMove,
                onSelectSpecies: rest.onSelectSpecies,
            };
        }

        const memberIndex = firstMemberIndex + slotIndex;
        return {
            onSelectMove: (_slug: string, moveIndex: number) =>
                rest.onSelectMove(memberIndex, moveIndex),
            onSelectSpecies: () => rest.onSelectMember(memberIndex),
        };
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const metadata = game.battles[battle.battleKey].metadata;
    const splitName = game.battles[battle.battleKey].split;
    const badge = `/badges/${game.badgeAssetFolder}/${StringHelpers.toSlug(splitName)}.png`;
    const teamGroups = BattleHelpers.getTeamGroups(battle, starter, game);
    // Flattened one row per (trainer, surviving team) pair, so a trainer
    // with multiple teams that all matched the current run's conditions
    // renders one row per team, same as a tag battle renders one row per
    // trainer — only the very last row carries the full TrainerPanel
    // (badges/metadata); every other row is a bare TrainerSprite.
    const rows = teamGroups.flatMap((group) =>
        group.teams.map((row) => ({
            aiFlags: row.aiFlags,
            items: group.items,
            name: group.name,
            team: row.team,
            trainerClass: row.trainerClass,
        }))
    );
    const isStacked = rows.length > 1;
    // One AI flag list when every trainer runs the same flags, otherwise one
    // per trainer, each labeled with its trainer's name.
    const flagRows = rows.filter((row) => row.aiFlags.length > 0);
    const hasSharedFlags = flagRows.every(
        (row) => row.aiFlags.join() === flagRows[0].aiFlags.join()
    );
    const aiFlagGroups = (hasSharedFlags ? flagRows.slice(0, 1) : flagRows).map(
        (row) => ({ flags: row.aiFlags, name: row.name })
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleNotesButtonClick = (): void => {
        setIsNotesModalOpen(true);
    };

    const handleNotesModalClose = (): void => {
        setIsNotesModalOpen(false);
    };

    const handleWipeButtonClick = (): void => {
        setIsWipeConfirmOpen(true);
    };

    const handleWipeConfirmClose = (): void => {
        setIsWipeConfirmOpen(false);
    };

    const handleWipeConfirm = (): void => {
        if (rest.mode !== 'link') return;

        rest.onWipeBattle?.(BattleHelpers.getBattleKey(battle));
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <div className={styles['top-row']}>
                <Tooltip
                    className={styles.badge}
                    position="left"
                    text={`${splitName} Split`}
                >
                    <div className={styles['badge-image']}>
                        <Image alt="" fill sizes="1.5rem" src={badge} />
                    </div>
                </Tooltip>
                <div className={styles['trainer-header']}>
                    {rest.mode === 'link' && rest.onSelectTrainer ? (
                        <button
                            className={styles['trainer-name']}
                            onClick={() =>
                                rest.onSelectTrainer?.(
                                    BattleHelpers.getBattleKey(battle)
                                )
                            }
                            type="button"
                        >
                            {BattleHelpers.getFullName(battle, game)}
                        </button>
                    ) : (
                        <span className={styles['trainer-title']}>
                            {BattleHelpers.getFullName(battle, game)}
                        </span>
                    )}
                </div>
                <button
                    aria-label="Add notes"
                    className={styles['notes-button']}
                    onClick={handleNotesButtonClick}
                    type="button"
                >
                    <EditIcon />
                </button>
            </div>
            {isNotesModalOpen && (
                <BattleNotesModal
                    accentColor={game.accentColor}
                    battleKey={BattleHelpers.getBattleKey(battle)}
                    buttonTextColor={game.textContrastColor}
                    game={game}
                    onClose={handleNotesModalClose}
                />
            )}
            {isWipeConfirmOpen && (
                <ConfirmModal
                    confirmLabel="Wipe"
                    description="This will record a wipe to this trainer and end this attempt."
                    onClose={handleWipeConfirmClose}
                    onConfirm={handleWipeConfirm}
                    title="Wipe?"
                />
            )}
            {aiFlagGroups.length > 0 && (
                <AiFlagSection
                    groups={aiFlagGroups}
                    showNames={!hasSharedFlags}
                />
            )}
            <div className={styles.body}>
                {rows.map((row, rowIndex) => {
                    const isLastRow = rowIndex === rows.length - 1;
                    const handleRowWipeClick =
                        rowIndex === 0 &&
                        rest.mode === 'link' &&
                        rest.onWipeBattle
                            ? handleWipeButtonClick
                            : undefined;
                    const firstMemberIndex = rows
                        .slice(0, rowIndex)
                        .reduce(
                            (count, previous) => count + previous.team.length,
                            0
                        );
                    const position = !isStacked
                        ? 'single'
                        : isLastRow
                          ? 'bottom'
                          : rowIndex === 0
                            ? 'top'
                            : 'middle';

                    return (
                        <div
                            className={styles.row}
                            key={`${row.trainerClass}-${row.name}-${rowIndex}`}
                        >
                            {isLastRow ? (
                                <TrainerPanel
                                    battle={battle}
                                    dataSource={game.dataSource}
                                    isStacked={isStacked}
                                    items={row.items}
                                    metadata={metadata}
                                    onWipeClick={handleRowWipeClick}
                                    trainerAssetFolder={game.trainerAssetFolder}
                                    trainerClass={row.trainerClass}
                                    trainerName={row.name}
                                />
                            ) : (
                                <TrainerSprite
                                    alt={TrainerHelpers.getDisplayName(
                                        row.trainerClass,
                                        row.name
                                    )}
                                    onWipeClick={handleRowWipeClick}
                                    position={rowIndex === 0 ? 'top' : 'middle'}
                                    trainerAssetFolder={game.trainerAssetFolder}
                                    trainerClass={row.trainerClass}
                                />
                            )}
                            <div className={styles.team}>
                                {Array.from(
                                    { length: TEAM_SLOT_COUNT },
                                    (_, index) => row.team[index] ?? null
                                ).map((pokemon, index) => (
                                    <PokemonSlot
                                        dataSource={game.dataSource}
                                        generation={generation}
                                        hofDisplay={false}
                                        isMetadataReadOnly={
                                            rest.mode === 'select'
                                        }
                                        isReadOnly={false}
                                        isTagPartner={!!isTagPartner}
                                        key={
                                            pokemon
                                                ? `${rowIndex}-${pokemon.slug}-${index}`
                                                : `${rowIndex}-empty-${index}`
                                        }
                                        {...getSlotHandlers(
                                            firstMemberIndex,
                                            index
                                        )}
                                        pokemon={pokemon}
                                        position={position}
                                        variant={variant}
                                        version={version}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BattleCard;
