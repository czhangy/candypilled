import { AiFlag } from '@/lib/static/types';
import styles from './AiFlagSection.module.scss';

type AiFlagSectionProps = {
    groups: { flags: AiFlag[]; name: string }[];
    showNames: boolean;
};

const AiFlagSection: React.FC<AiFlagSectionProps> = ({ groups, showNames }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['ai-flag-section']}>
            {groups.map((group, index) => (
                <div className={styles.group} key={`${group.name}-${index}`}>
                    {showNames && (
                        <span className={styles.name}>{group.name}</span>
                    )}
                    {group.flags.map((flag) => (
                        <span className={styles.chip} key={flag}>
                            {flag}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AiFlagSection;
