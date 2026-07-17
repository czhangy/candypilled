import styles from './HighlightedText.module.scss';

type HighlightedTextProps = {
    query: string;
    text: string;
};

const HighlightedText: React.FC<HighlightedTextProps> = ({ query, text }) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const normalizedQuery = query.trim().toLowerCase();
    const index = normalizedQuery
        ? text.toLowerCase().indexOf(normalizedQuery)
        : -1;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (index === -1) return <>{text}</>;

    return (
        <>
            {text.slice(0, index)}
            <span className={styles.match}>
                {text.slice(index, index + normalizedQuery.length)}
            </span>
            {text.slice(index + normalizedQuery.length)}
        </>
    );
};

export default HighlightedText;
