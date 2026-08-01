import { BattleMetadata } from '@/lib/static/enums';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import TrainerHelpers from '@/lib/utils/TrainerHelpers';
import styles from './BattleCard.module.scss';
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
    // RENDERING
    // -------------------------------------------------------------------------

    const teamGroups = BattleHelpers.getTeamGroups(battle, starter, game);
    const isStacked = teamGroups.length > 1;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={styles['battle-card']}
            id={BattleHelpers.getBattleSlug(battle)}
        >
            <span className={styles.label}>
                {battle.metadata.includes(BattleMetadata.Boss)
                    ? 'Boss'
                    : battle.metadata.includes(BattleMetadata.Miniboss)
                      ? 'Miniboss'
                      : 'Battle'}
            </span>
            <div className={styles.content}>
                <button
                    className={styles['trainer-header']}
                    onClick={() =>
                        onSelectTrainer(BattleHelpers.getBattleKey(battle))
                    }
                    type="button"
                >
                    {BattleHelpers.getFullName(battle, game)}
                </button>
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
