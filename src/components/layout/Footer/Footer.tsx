import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <footer className={styles.footer}>
            <span className={styles.credit}>
                Built by <span className={styles.author}>czhangy</span>
            </span>
        </footer>
    );
};

export default Footer;
