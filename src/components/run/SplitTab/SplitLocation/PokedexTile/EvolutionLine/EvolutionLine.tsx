import Image from 'next/image';
import { EvolutionStep } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './EvolutionLine.module.scss';

interface EvolutionLineProps {
    currentName?: string;
    step: EvolutionStep;
    variant: string;
}

const EvolutionLine: React.FC<EvolutionLineProps> = ({
    currentName,
    step,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 72;
    const METHOD_ICON_SIZE = 32;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const sprite = PokemonHelpers.getSprite(step.name, variant);
    const isCurrent =
        !!currentName && StringHelpers.toSlug(currentName) === step.name;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['evolution-line']}>
            <div
                className={[styles.node, isCurrent && styles['node--current']]
                    .filter(Boolean)
                    .join(' ')}
            >
                <div className={styles.sprite}>
                    {sprite && (
                        <Image
                            alt={StringHelpers.toTitleCase(step.name)}
                            height={SPRITE_SIZE}
                            src={sprite}
                            width={SPRITE_SIZE}
                        />
                    )}
                </div>
            </div>
            {step.evolvesTo.length > 0 && (
                <div className={styles.branches}>
                    {step.evolvesTo.map((child) => {
                        const methodLabel = child.methods
                            ? EvolutionHelpers.getMethodLabel(child.methods)
                            : undefined;

                        return (
                            <div className={styles.branch} key={child.name}>
                                <div className={styles.arrow}>
                                    {methodLabel && (
                                        <span className={styles.method}>
                                            {methodLabel.icon ? (
                                                <Image
                                                    alt={methodLabel.label}
                                                    className={
                                                        styles['method-icon']
                                                    }
                                                    height={METHOD_ICON_SIZE}
                                                    src={`/evolution_methods/${methodLabel.icon}.png`}
                                                    title={
                                                        methodLabel.condition
                                                            ? `${methodLabel.label} (${methodLabel.condition})`
                                                            : methodLabel.label
                                                    }
                                                    width={METHOD_ICON_SIZE}
                                                />
                                            ) : (
                                                <span
                                                    className={
                                                        styles['method-label']
                                                    }
                                                >
                                                    {methodLabel.label}
                                                </span>
                                            )}
                                            {methodLabel.condition && (
                                                <span
                                                    className={
                                                        styles[
                                                            'method-condition'
                                                        ]
                                                    }
                                                >
                                                    ({methodLabel.condition})
                                                </span>
                                            )}
                                        </span>
                                    )}
                                    <span className={styles['arrow-icon']}>
                                        &rarr;
                                    </span>
                                </div>
                                <EvolutionLine
                                    currentName={currentName}
                                    step={child}
                                    variant={variant}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default EvolutionLine;
