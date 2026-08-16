import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import styles from './AbilityDetail.module.scss';

type AbilityDetailProps = {
    abilitySlug: string;
    generation: number;
};

const AbilityDetail: React.FC<AbilityDetailProps> = ({
    abilitySlug,
    generation,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const OVERWORLD_LABEL = 'Overworld:';

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const renderEffect = (text: string): React.ReactNode => {
        const parts = text.split(OVERWORLD_LABEL);
        if (parts.length === 1) return text;

        return parts.reduce<React.ReactNode[]>((nodes, part, index) => {
            if (index > 0) {
                nodes.push(
                    <span className={styles.overworld} key={`label-${index}`}>
                        {OVERWORLD_LABEL}
                    </span>
                );
            }
            nodes.push(part);
            return nodes;
        }, []);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const abilityData = AbilityHelpers.getAbilityData(abilitySlug);
    const values = AbilityHelpers.getAbilityForGeneration(
        abilitySlug,
        generation
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['ability-detail']}>
            <div className={styles.header}>Details</div>
            <div className={styles.content}>
                {abilityData && values && (
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
                                {renderEffect(values.effect)}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AbilityDetail;
