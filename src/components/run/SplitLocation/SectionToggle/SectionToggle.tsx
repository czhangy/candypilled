import ChevronIcon from '@/lib/icons/ChevronIcon';
import styles from './SectionToggle.module.scss';

type SectionToggleProps = {
    children: React.ReactNode;
    isCollapsed: boolean;
    onToggle: () => void;
};

const SectionToggle: React.FC<SectionToggleProps> = ({
    children,
    isCollapsed,
    onToggle,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            aria-expanded={!isCollapsed}
            className={styles.toggle}
            onClick={onToggle}
            type="button"
        >
            {children}
            <span
                className={[
                    styles.chevron,
                    !isCollapsed && styles['chevron--expanded'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                <ChevronIcon />
            </span>
        </button>
    );
};

export default SectionToggle;
