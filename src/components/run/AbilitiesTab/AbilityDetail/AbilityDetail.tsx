import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import styles from './AbilityDetail.module.scss';

interface AbilityDetailProps {
    ability?: string;
    generation: number;
}

const AbilityDetail: React.FC<AbilityDetailProps> = ({
    ability,
    generation,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const abilityData = ability ? AbilityHelpers.get(ability) : undefined;
    const values = ability
        ? AbilityHelpers.getValues(ability, generation)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['ability-detail']}>
            <div className={styles.header}>Details</div>
            <div
                className={[
                    styles.content,
                    !(abilityData && values) && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {abilityData && values ? (
                    <>
                        <div className={styles.top}>
                            <span className={styles.name}>
                                {abilityData.name}
                            </span>
                        </div>
                        <div className={styles.effect}>
                            <span className={styles['effect-label']}>
                                Effect
                            </span>
                            <p className={styles['effect-text']}>
                                {values.effect}
                            </p>
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select an ability to view its details
                    </span>
                )}
            </div>
        </div>
    );
};

export default AbilityDetail;
