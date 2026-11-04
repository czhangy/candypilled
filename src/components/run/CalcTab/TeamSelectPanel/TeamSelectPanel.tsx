import Image from 'next/image';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import HeldItemIcon from '@/components/common/HeldItemIcon/HeldItemIcon';
import { DropdownOption, Game, Run } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './TeamSelectPanel.module.scss';

type TeamSelectPanelProps = {
    game: Game;
    onSelectBattle: (battleKey: string) => void;
    onSelectMember: (index: string) => void;
    run: Run;
    selectedBattle?: string;
    selectedMemberIndex?: string;
};

const TeamSelectPanel: React.FC<TeamSelectPanelProps> = ({
    game,
    onSelectBattle,
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

    const battleOptions: DropdownOption[] = BattleHelpers.getAllBattleOptions(
        game,
        run.gender
    ).map((entry) => ({ label: entry.label, value: entry.battleKey }));
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
            <div className={styles.field}>
                <span className={styles.label}>Battle</span>
                <Dropdown
                    dense
                    onChange={onSelectBattle}
                    options={battleOptions}
                    placeholder="Select a trainer…"
                    searchable
                    value={selectedBattle ?? ''}
                />
            </div>
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
                                {mon.heldItem && (
                                    <HeldItemIcon
                                        dataSource={game.dataSource}
                                        slug={mon.heldItem}
                                    />
                                )}
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
