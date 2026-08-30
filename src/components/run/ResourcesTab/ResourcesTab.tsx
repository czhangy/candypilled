import { Game } from '@/lib/static/types';
import styles from './ResourcesTab.module.scss';

type ResourcesTabProps = {
    game: Game;
};

const ResourcesTab: React.FC<ResourcesTabProps> = ({ game }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['resources-tab']}>
            {(game.resources ?? []).map((resource) => (
                <a
                    className={styles.resource}
                    href={resource.url}
                    key={resource.url}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <span className={styles.text}>{resource.text}</span>
                    <span className={styles.description}>
                        {resource.description}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default ResourcesTab;
