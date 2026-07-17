import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { EvolutionStep } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './EvolutionLine.module.scss';

type EvolutionLineProps = {
    currentName?: string;
    hideTradeEvos: boolean;
    onSelectSpecies: (species: string) => void;
    step: EvolutionStep;
    variant: string;
};

const EvolutionLine: React.FC<EvolutionLineProps> = ({
    currentName,
    hideTradeEvos,
    onSelectSpecies,
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

    const sprite = PokemonHelpers.getPokemonSprite(step.name, variant);
    const isCurrent =
        !!currentName && StringHelpers.toSlug(currentName) === step.name;
    const visibleEvolutions = step.evolvesTo.filter(
        (child) =>
            !hideTradeEvos || !EvolutionHelpers.isTradeEvolution(child.methods)
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleNodeClick = (): void => {
        onSelectSpecies(step.name);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['evolution-line']}>
            <button
                className={[styles.node, isCurrent && styles['node--current']]
                    .filter(Boolean)
                    .join(' ')}
                onClick={handleNodeClick}
                type="button"
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
            </button>
            {visibleEvolutions.length > 0 && (
                <div className={styles.branches}>
                    {visibleEvolutions.flatMap((child) => {
                        const methodLabel = child.methods
                            ? EvolutionHelpers.getEvolutionMethodLabel(
                                  child.methods
                              )
                            : undefined;
                        // A child's name is ambiguous when it doesn't
                        // resolve to its own entry (e.g. "wormadam", whose
                        // actual form depends on Burmy's cloak, which the
                        // evolution chain doesn't track), so it's expanded
                        // into one branch per form instead of one branch
                        // per step.
                        const formNames = PokemonHelpers.getPokemonForms(
                            child.name
                        );

                        return formNames.map((formName) => (
                            <div className={styles.branch} key={formName}>
                                <div className={styles.arrow}>
                                    {methodLabel && (
                                        <span className={styles.method}>
                                            {methodLabel.icon ? (
                                                <Tooltip
                                                    position="center"
                                                    text={
                                                        methodLabel.condition
                                                            ? `${methodLabel.label} ${methodLabel.condition}`
                                                            : methodLabel.label
                                                    }
                                                >
                                                    <Image
                                                        alt={methodLabel.label}
                                                        className={
                                                            styles[
                                                                'method-icon'
                                                            ]
                                                        }
                                                        height={
                                                            METHOD_ICON_SIZE
                                                        }
                                                        src={`/evolution_methods/${methodLabel.icon}.png`}
                                                        width={METHOD_ICON_SIZE}
                                                    />
                                                </Tooltip>
                                            ) : (
                                                <span
                                                    className={
                                                        styles['method-label']
                                                    }
                                                >
                                                    {methodLabel.label}
                                                </span>
                                            )}
                                            {methodLabel.gender && (
                                                <span
                                                    className={[
                                                        styles['method-gender'],
                                                        styles[
                                                            `method-gender--${methodLabel.gender}`
                                                        ],
                                                    ].join(' ')}
                                                >
                                                    {methodLabel.gender ===
                                                    'male'
                                                        ? '♂'
                                                        : '♀'}
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
                                                    {methodLabel.condition}
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
                                    hideTradeEvos={hideTradeEvos}
                                    onSelectSpecies={onSelectSpecies}
                                    step={{ ...child, name: formName }}
                                    variant={variant}
                                />
                            </div>
                        ));
                    })}
                </div>
            )}
        </div>
    );
};

export default EvolutionLine;
