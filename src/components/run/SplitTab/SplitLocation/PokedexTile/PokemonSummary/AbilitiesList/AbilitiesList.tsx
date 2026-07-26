import { AbilityEntry } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import styles from './AbilitiesList.module.scss';

type AbilitiesListProps = {
    entries: AbilityEntry[];
    interactive: boolean;
    onSelectAbility: (slug: string) => void;
};

const AbilitiesList: React.FC<AbilitiesListProps> = ({
    entries,
    interactive,
    onSelectAbility,
}) => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityClick = (slug: string): void => {
        onSelectAbility(slug);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['abilities-list']}>
            {entries.map((entry) => {
                const name =
                    AbilityHelpers.getAbilityData(entry.slug)?.name ??
                    entry.slug;

                return interactive ? (
                    <button
                        className={[
                            styles.ability,
                            entry.hidden && styles['ability--hidden'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={entry.slug}
                        onClick={() => handleAbilityClick(entry.slug)}
                        type="button"
                    >
                        {name}
                        {entry.hidden && ' (Hidden)'}
                    </button>
                ) : (
                    <span
                        className={[
                            styles.ability,
                            styles['ability--static'],
                            entry.hidden && styles['ability--hidden'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={entry.slug}
                    >
                        {name}
                        {entry.hidden && ' (Hidden)'}
                    </span>
                );
            })}
        </div>
    );
};

export default AbilitiesList;
