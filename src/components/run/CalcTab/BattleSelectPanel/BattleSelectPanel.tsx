import Dropdown from '@/components/common/Dropdown/Dropdown';
import { DropdownOption, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './BattleSelectPanel.module.scss';

type BattleSelectPanelProps = {
    game: Game;
    onSelectBattle: (battleKey: string) => void;
    selectedBattle?: string;
};

const BattleSelectPanel: React.FC<BattleSelectPanelProps> = ({
    game,
    onSelectBattle,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const trainerOptions: DropdownOption[] = BattleHelpers.getAllBattles(
        game
    ).map((battle) => ({
        label: BattleHelpers.getFullName(battle),
        value: BattleHelpers.getBattleKey(battle),
    }));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['battle-select-panel']}>
            <div className={styles.field}>
                <span className={styles.label}>Trainer</span>
                <Dropdown
                    dense
                    onChange={onSelectBattle}
                    options={trainerOptions}
                    placeholder="Select a trainer…"
                    searchable
                    value={selectedBattle ?? ''}
                />
            </div>
        </div>
    );
};

export default BattleSelectPanel;
