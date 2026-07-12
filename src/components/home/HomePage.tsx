import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['home-page']}>
            <h1 className={styles.title}>Candypilled</h1>
            <p className={styles.tagline}>A Nuzlocke tool.</p>
        </div>
    );
};

export default HomePage;
