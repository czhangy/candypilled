import GithubIcon from '@/lib/icons/GithubIcon';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <footer className={styles.footer}>
            <span className={styles.credit}>Built by czhangy</span>
            <a
                aria-label="GitHub repository"
                className={styles.link}
                href="https://github.com/czhangy/candypilled"
                rel="noopener noreferrer"
                target="_blank"
            >
                <GithubIcon />
            </a>
        </footer>
    );
};

export default Footer;
