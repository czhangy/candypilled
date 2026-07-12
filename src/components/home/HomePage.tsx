import Image from 'next/image';
import Link from 'next/link';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['home-page']}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Image
                        alt=""
                        className={styles.candy}
                        height={96}
                        src="/candy.png"
                        width={96}
                    />
                    <div className={styles.text}>
                        <h1 className={styles.title}>Candypilled</h1>
                        <p className={styles.tagline}>A Nuzlocke tool.</p>
                        <Link className={styles.load} href="/runs">
                            Load
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
