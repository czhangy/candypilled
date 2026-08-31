import Dropdown from '@/components/common/Dropdown/Dropdown';
import { DropdownOption, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './TagSelectPanel.module.scss';

type TagSelectPanelProps = {
    game: Game;
    onSelectTagPartner: (battleKey: string) => void;
    selectedTagPartner?: string;
};

const TagSelectPanel: React.FC<TagSelectPanelProps> = ({
    game,
    onSelectTagPartner,
    selectedTagPartner,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const tagPartnerOptions: DropdownOption[] = BattleHelpers.getAllTagPartners(
        game
    ).map((entry) => ({
        label: entry.label,
        value: entry.battleKey,
    }));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['tag-select-panel']}>
            <div className={styles.field}>
                <span className={styles.label}>Tag Partner</span>
                <Dropdown
                    dense
                    onChange={onSelectTagPartner}
                    options={tagPartnerOptions}
                    placeholder="Select a tag partner…"
                    searchable
                    value={selectedTagPartner ?? ''}
                />
            </div>
        </div>
    );
};

export default TagSelectPanel;
