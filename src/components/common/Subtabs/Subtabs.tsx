import styles from './Subtabs.module.scss';

type SubtabsProps = {
    activeSubtab: string;
    onSubtabChange: (id: string) => void;
    subtabs: { id: string; label: string }[];
};

const Subtabs: React.FC<SubtabsProps> = ({
    activeSubtab,
    onSubtabChange,
    subtabs,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles.subtabs}>
            {subtabs.map((subtab) => (
                <button
                    className={[
                        styles.subtab,
                        subtab.id === activeSubtab && styles['subtab--active'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    key={subtab.id}
                    onClick={() => onSubtabChange(subtab.id)}
                    type="button"
                >
                    {subtab.label}
                </button>
            ))}
        </div>
    );
};

export default Subtabs;
