import { Battle } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './BattleCard.module.scss';
import PokemonSlot from './PokemonSlot/PokemonSlot';
import TrainerPanel from './TrainerPanel/TrainerPanel';

type BattleCardProps = {
    battle: Battle;
    generation: number;
    isDefeated: boolean;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    onToggleDefeated: () => void;
    starter: string;
    variant: string;
    version: string;
};

const BattleCard: React.FC<BattleCardProps> = ({
    battle,
    generation,
    isDefeated,
    onSelectAbility,
    onSelectMove,
    onSelectSpecies,
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

    const team = BattleHelpers.getTeamFromOptions(battle, starter);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-card']}>
            <span className={styles.label}>
                {battle.isBoss
                    ? 'Boss'
                    : battle.isMiniboss
                      ? 'Miniboss'
                      : 'Battle'}
            </span>
            <div className={styles.content}>
                <div className={styles['trainer-header']}>
                    {BattleHelpers.getFullName(battle)}
                </div>
                <div className={styles.body}>
                    <TrainerPanel
                        battle={battle}
                        isDefeated={isDefeated}
                        onToggleDefeated={onToggleDefeated}
                        variant={variant}
                    />
                    <div className={styles.team}>
                        {Array.from(
                            { length: TEAM_SLOT_COUNT },
                            (_, index) => team[index] ?? null
                        ).map((pokemon, index) => (
                            <PokemonSlot
                                generation={generation}
                                key={
                                    pokemon
                                        ? `${pokemon.name}-${index}`
                                        : `empty-${index}`
                                }
                                onSelectAbility={onSelectAbility}
                                onSelectMove={onSelectMove}
                                onSelectSpecies={onSelectSpecies}
                                pokemon={pokemon}
                                variant={variant}
                                version={version}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleCard;
