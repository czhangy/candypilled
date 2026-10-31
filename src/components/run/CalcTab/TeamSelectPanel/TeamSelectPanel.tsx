import Image from 'next/image';
import { Game, Run } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './TeamSelectPanel.module.scss';

type TeamSelectPanelProps = {
    game: Game;
    onSelectMember: (index: string) => void;
    run: Run;
    selectedBattle?: string;
    selectedMemberIndex?: string;
};

const TeamSelectPanel: React.FC<TeamSelectPanelProps> = ({
    game,
    onSelectMember,
    run,
    selectedBattle,
    selectedMemberIndex,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const team = BattleHelpers.getSelectedTeam(
        game,
        selectedBattle,
        run.starter,
        run.gender
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['team-select-panel']}>
            {selectedBattle && (
                <div className={styles.grid}>
                    {team.map((mon, index) => {
                        const displaySlug = PokemonHelpers.getDisplaySlug(
                            game.dataSource,
                            mon
                        );

                        return (
                            <button
                                aria-pressed={
                                    String(index) === selectedMemberIndex
                                }
                                className={[
                                    styles.slot,
                                    String(index) === selectedMemberIndex &&
                                        styles['slot--selected'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={index}
                                onClick={() => onSelectMember(String(index))}
                                type="button"
                            >
                                <Image
                                    alt={
                                        PokemonHelpers.getPokemonData(
                                            game.dataSource,
                                            displaySlug
                                        )?.name ?? mon.slug
                                    }
                                    height={SPRITE_HEIGHT}
                                    src={PokemonHelpers.getBoxSprite(
                                        displaySlug
                                    )}
                                    width={SPRITE_WIDTH}
                                />
                                <span className={styles['exp-yield']}>
                                    +
                                    {PokemonHelpers.getTrainerExpYield(
                                        game.dataSource,
                                        mon.slug,
                                        mon.level,
                                        game.generation
                                    )}{' '}
                                    EXP
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TeamSelectPanel;
