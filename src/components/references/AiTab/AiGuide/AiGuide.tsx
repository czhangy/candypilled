import ChevronIcon from '@/lib/icons/ChevronIcon';
import { AiSection } from '@/lib/static/types';
import styles from './AiGuide.module.scss';

type AiGuideProps = {
    sections: AiSection[];
};

const AiGuide: React.FC<AiGuideProps> = ({ sections }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['ai-guide']}>
            {sections.map(({ entries, overview, title }) => (
                <details className={styles.section} key={title} open>
                    <summary className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                        <span className={styles.chevron}>
                            <ChevronIcon />
                        </span>
                    </summary>
                    <ul className={styles.overview}>
                        {overview.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                    <ul className={styles.entries}>
                        {entries.map((entry) => (
                            <li
                                className={[
                                    styles.entry,
                                    entry.isBreakpoint &&
                                        styles['entry--breakpoint'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={entry.title}
                            >
                                <h3 className={styles.name}>{entry.title}</h3>
                                <p className={styles.description}>
                                    {entry.summary}
                                </p>
                                {entry.details.length > 0 && (
                                    <ul className={styles.details}>
                                        {entry.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </details>
            ))}
        </div>
    );
};

export default AiGuide;
