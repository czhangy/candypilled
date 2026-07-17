import Link from 'next/link';
import styles from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['not-found-page']}>
            <p className={styles.code}>404</p>
            <h1 className={styles.title}>Page not found</h1>
            <p className={styles.tagline}>
                The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link className={styles.home} href="/">
                BACK HOME
            </Link>
        </div>
    );
};

export default NotFoundPage;
