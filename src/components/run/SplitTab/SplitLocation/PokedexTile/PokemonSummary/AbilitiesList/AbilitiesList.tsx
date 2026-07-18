import { AbilityEntry } from '@/lib/static/types';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './AbilitiesList.module.scss';

type AbilitiesListProps = {
    entries: AbilityEntry[];
    mode: 'catch' | 'choose';
    onSelectAbility: (name: string) => void;
};

const AbilitiesList: React.FC<AbilitiesListProps> = ({
    entries,
    mode,
    onSelectAbility,
}) => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityClick = (name: string): void => {
        onSelectAbility(StringHelpers.toTitleCase(name));
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['abilities-list']}>
            {entries.map((entry) =>
                mode === 'choose' ? (
                    <span
                        className={[
                            styles.ability,
                            styles['ability--static'],
                            entry.hidden && styles['ability--hidden'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={entry.name}
                    >
                        {StringHelpers.toTitleCase(entry.name)}
                        {entry.hidden && ' (Hidden)'}
                    </span>
                ) : (
                    <button
                        className={[
                            styles.ability,
                            entry.hidden && styles['ability--hidden'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={entry.name}
                        onClick={() => handleAbilityClick(entry.name)}
                        type="button"
                    >
                        {StringHelpers.toTitleCase(entry.name)}
                        {entry.hidden && ' (Hidden)'}
                    </button>
                )
            )}
        </div>
    );
};

export default AbilitiesList;
