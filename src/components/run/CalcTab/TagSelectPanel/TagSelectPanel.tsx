import Dropdown from '@/components/common/Dropdown/Dropdown';
import { DropdownOption } from '@/lib/static/types';
import styles from './TagSelectPanel.module.scss';

type TagSelectPanelProps = {
    onSelectTagPartner: (battleKey: string) => void;
    options: DropdownOption[];
    selectedTagPartner?: string;
};

const TagSelectPanel: React.FC<TagSelectPanelProps> = ({
    onSelectTagPartner,
    options,
    selectedTagPartner,
}) => (
    <div className={styles['tag-select-panel']}>
        <div className={styles.field}>
            <span className={styles.label}>Tag Partner</span>
            <Dropdown
                dense
                onChange={onSelectTagPartner}
                options={options}
                placeholder="Select a tag partner…"
                searchable
                value={selectedTagPartner ?? ''}
            />
        </div>
    </div>
);

export default TagSelectPanel;
