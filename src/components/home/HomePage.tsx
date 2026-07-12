import Image from 'next/image';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['home-page']}>
            <div className={styles.row}>
                <Image
                    alt=""
                    className={styles.candy}
                    height={72}
                    src="/candy.png"
                    width={72}
                />
                <div className={styles.text}>
                    <h1 className={styles.title}>Candypilled</h1>
                    <p className={styles.tagline}>A Nuzlocke tool.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
