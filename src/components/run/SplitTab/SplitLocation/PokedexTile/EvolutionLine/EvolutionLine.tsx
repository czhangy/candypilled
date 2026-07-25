import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { EvolutionStep } from '@/lib/static/types';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EvolutionLine.module.scss';

type EvolutionLineProps = {
    currentSlug?: string;
    hideTradeEvos: boolean;
    onSelectSpecies: (slug: string) => void;
    step?: EvolutionStep;
    variant: string;
};

const EvolutionLine: React.FC<EvolutionLineProps> = ({
    currentSlug,
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
    const CONDITION_ICON_SIZE = 20;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const renderNode = (nodeStep: EvolutionStep): React.ReactNode => {
        const nodeName = PokemonHelpers.getPokemonData(nodeStep.slug)?.name;
        const sprite = PokemonHelpers.getPokemonSprite(nodeStep.slug, variant);
        const isCurrent = currentSlug === nodeStep.slug;
        const visibleEvolutions = nodeStep.evolvesTo.filter(
            (child) =>
                !hideTradeEvos ||
                !EvolutionHelpers.isTradeEvolution(child.methods)
        );

        return (
            <div className={styles['evolution-line']}>
                <button
                    className={[
                        styles.node,
                        isCurrent && styles['node--current'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    onClick={() => onSelectSpecies(nodeStep.slug)}
                    type="button"
                >
                    <div className={styles.sprite}>
                        {sprite && nodeName && (
                            <Image
                                alt={nodeName}
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
                            // A child's slug is ambiguous when it doesn't
                            // resolve to its own entry (e.g. "wormadam", whose
                            // actual form depends on Burmy's cloak, which the
                            // evolution chain doesn't track), so it's expanded
                            // into one branch per form instead of one branch
                            // per step.
                            const formSlugs = PokemonHelpers.getPokemonForms(
                                child.slug
                            );

                            return formSlugs.map((formSlug) => (
                                <div className={styles.branch} key={formSlug}>
                                    <div className={styles.arrow}>
                                        {methodLabel && (
                                            <span className={styles.method}>
                                                {methodLabel.icon ? (
                                                    <Tooltip
                                                        position="center"
                                                        text={methodLabel.label}
                                                    >
                                                        <Image
                                                            alt={
                                                                methodLabel.label
                                                            }
                                                            className={
                                                                styles[
                                                                    'method-icon'
                                                                ]
                                                            }
                                                            height={
                                                                METHOD_ICON_SIZE
                                                            }
                                                            src={`/evolution-methods/${methodLabel.icon}.png`}
                                                            width={
                                                                METHOD_ICON_SIZE
                                                            }
                                                        />
                                                    </Tooltip>
                                                ) : (
                                                    <span
                                                        className={
                                                            styles[
                                                                'method-label'
                                                            ]
                                                        }
                                                    >
                                                        {methodLabel.label}
                                                    </span>
                                                )}
                                                {methodLabel.gender && (
                                                    <span
                                                        className={[
                                                            styles[
                                                                'method-gender'
                                                            ],
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
                                                {methodLabel.condition &&
                                                    !methodLabel.conditionIcon && (
                                                        <span
                                                            className={
                                                                styles[
                                                                    'method-condition'
                                                                ]
                                                            }
                                                        >
                                                            {
                                                                methodLabel.condition
                                                            }
                                                        </span>
                                                    )}
                                                {methodLabel.conditionIcon && (
                                                    <Tooltip
                                                        position="center"
                                                        text={
                                                            methodLabel.condition ??
                                                            methodLabel.label
                                                        }
                                                    >
                                                        <Image
                                                            alt={
                                                                methodLabel.condition ??
                                                                methodLabel.label
                                                            }
                                                            className={
                                                                styles[
                                                                    'condition-icon'
                                                                ]
                                                            }
                                                            height={
                                                                CONDITION_ICON_SIZE
                                                            }
                                                            src={`/evolution-methods/${methodLabel.conditionIcon}.png`}
                                                            width={
                                                                CONDITION_ICON_SIZE
                                                            }
                                                        />
                                                    </Tooltip>
                                                )}
                                            </span>
                                        )}
                                        <span className={styles['arrow-icon']}>
                                            &rarr;
                                        </span>
                                    </div>
                                    {renderNode({ ...child, slug: formSlug })}
                                </div>
                            ));
                        })}
                    </div>
                )}
            </div>
        );
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!step || step.evolvesTo.length === 0) {
        return null;
    }

    return (
        <div className={styles.evolution}>
            <span className={styles['evolution-label']}>Evolution Line</span>
            <div className={styles['evolution-content']}>
                {renderNode(step)}
            </div>
        </div>
    );
};

export default EvolutionLine;
