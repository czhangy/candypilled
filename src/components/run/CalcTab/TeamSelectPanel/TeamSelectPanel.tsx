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
        run.starter
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['team-select-panel']}>
            {!selectedBattle && (
                <span className={styles.placeholder}>
                    Select a battle above
                </span>
            )}
            {selectedBattle && (
                <div className={styles.grid}>
                    {team.map((mon, index) => (
                        <button
                            aria-pressed={String(index) === selectedMemberIndex}
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
                                alt={mon.name}
                                height={SPRITE_HEIGHT}
                                src={PokemonHelpers.getBoxSprite(mon.name)}
                                width={SPRITE_WIDTH}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamSelectPanel;
