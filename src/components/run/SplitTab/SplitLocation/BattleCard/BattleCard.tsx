'use client';

import { useState } from 'react';
import EditIcon from '@/lib/icons/EditIcon';
import { BattleMetadata } from '@/lib/static/enums';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './BattleCard.module.scss';
import BattleNotesModal from './BattleNotesModal/BattleNotesModal';
import PokemonSlot from './PokemonSlot/PokemonSlot';
import TrainerPanel from './TrainerPanel/TrainerPanel';
import TrainerSprite from './TrainerSprite/TrainerSprite';

type BattleCardProps = {
    battle: Battle;
    game: Game;
    generation: number;
    isTagPartner?: boolean;
    labelOverride?: string;
    onSelectAbility: (slug: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    onSelectTrainer: (battleKey: string) => void;
    starter: string;
    variant: string;
    version: string;
};

const BattleCard: React.FC<BattleCardProps> = ({
    battle,
    game,
    generation,
    isTagPartner,
    labelOverride,
    onSelectAbility,
    onSelectItem,
    onSelectMove,
    onSelectSpecies,
    onSelectTrainer,
    starter,
    variant,
    version,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TEAM_SLOT_COUNT = 6;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const metadata = game.battles[battle.battleKey].metadata;
    const teamGroups = BattleHelpers.getTeamGroups(battle, starter, game);
    // Flattened one row per (trainer, surviving team) pair, so a trainer
    // with multiple teams that all matched the current run's conditions
    // renders one row per team, same as a tag battle renders one row per
    // trainer — only the very last row carries the full TrainerPanel
    // (badges/metadata); every other row is a bare TrainerSprite.
    const rows = teamGroups.flatMap((group) =>
        group.teams.map((team) => ({
            items: group.items,
            name: group.name,
            team,
            trainerClass: group.trainerClass,
        }))
    );
    const isStacked = rows.length > 1;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleNotesButtonClick = (): void => {
        setIsNotesModalOpen(true);
    };

    const handleNotesModalClose = (): void => {
        setIsNotesModalOpen(false);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <span className={styles.label}>
                {labelOverride ??
                    (metadata.includes(BattleMetadata.Boss)
                        ? 'Boss'
                        : metadata.includes(BattleMetadata.Miniboss)
                          ? 'Miniboss'
                          : 'Battle')}
            </span>
            <div className={styles.content}>
                <div className={styles['trainer-header']}>
                    <button
                        className={styles['trainer-name']}
                        onClick={() =>
                            onSelectTrainer(BattleHelpers.getBattleKey(battle))
                        }
                        type="button"
                    >
                        {BattleHelpers.getFullName(battle, game)}
                    </button>
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
                <div className={styles.body}>
                    {rows.map((row, rowIndex) => {
                        const isLastRow = rowIndex === rows.length - 1;
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
                                        isStacked={isStacked}
                                        items={row.items}
                                        metadata={metadata}
                                        trainerAssetFolder={
                                            game.trainerAssetFolder
                                        }
                                        trainerClass={row.trainerClass}
                                        trainerName={row.name}
                                    />
                                ) : (
                                    <TrainerSprite
                                        alt={TrainerHelpers.getDisplayName(
                                            row.trainerClass,
                                            row.name
                                        )}
                                        position={
                                            rowIndex === 0 ? 'top' : 'middle'
                                        }
                                        trainerAssetFolder={
                                            game.trainerAssetFolder
                                        }
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
                                            isReadOnly={false}
                                            isTagPartner={!!isTagPartner}
                                            key={
                                                pokemon
                                                    ? `${rowIndex}-${pokemon.slug}-${index}`
                                                    : `${rowIndex}-empty-${index}`
                                            }
                                            onSelectAbility={onSelectAbility}
                                            onSelectItem={onSelectItem}
                                            onSelectMove={onSelectMove}
                                            onSelectSpecies={onSelectSpecies}
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
        </div>
    );
};

export default BattleCard;
