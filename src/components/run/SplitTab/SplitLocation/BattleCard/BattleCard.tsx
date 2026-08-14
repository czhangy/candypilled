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
    isDefeated: boolean;
    onSelectAbility: (slug: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    onSelectTrainer: (battleKey: string) => void;
    onToggleDefeated: () => void;
    starter: string;
    variant: string;
    version: string;
};

const BattleCard: React.FC<BattleCardProps> = ({
    battle,
    game,
    generation,
    isDefeated,
    onSelectAbility,
    onSelectItem,
    onSelectMove,
    onSelectSpecies,
    onSelectTrainer,
    onToggleDefeated,
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

    const teamGroups = BattleHelpers.getTeamGroups(battle, starter, game);
    const isStacked = teamGroups.length > 1;

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
                {battle.metadata.includes(BattleMetadata.Boss)
                    ? 'Boss'
                    : battle.metadata.includes(BattleMetadata.Miniboss)
                      ? 'Miniboss'
                      : 'Battle'}
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
                    {teamGroups.map((group, groupIndex) => {
                        const isLastGroup =
                            groupIndex === teamGroups.length - 1;
                        const position = !isStacked
                            ? 'single'
                            : isLastGroup
                              ? 'bottom'
                              : 'top';

                        return (
                            <div
                                className={styles.row}
                                key={`${group.trainerClass}-${group.name}-${groupIndex}`}
                            >
                                {isLastGroup ? (
                                    <TrainerPanel
                                        battle={battle}
                                        isDefeated={isDefeated}
                                        isStacked={isStacked}
                                        items={group.items}
                                        onToggleDefeated={onToggleDefeated}
                                        trainerClass={group.trainerClass}
                                        trainerName={group.name}
                                        variant={variant}
                                    />
                                ) : (
                                    <TrainerSprite
                                        alt={TrainerHelpers.getDisplayName(
                                            group.trainerClass,
                                            group.name
                                        )}
                                        trainerClass={group.trainerClass}
                                        variant={variant}
                                    />
                                )}
                                <div className={styles.team}>
                                    {Array.from(
                                        { length: TEAM_SLOT_COUNT },
                                        (_, index) => group.team[index] ?? null
                                    ).map((pokemon, index) => (
                                        <PokemonSlot
                                            generation={generation}
                                            hofDisplay={false}
                                            isReadOnly={false}
                                            key={
                                                pokemon
                                                    ? `${groupIndex}-${pokemon.slug}-${index}`
                                                    : `${groupIndex}-empty-${index}`
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
