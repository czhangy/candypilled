import Image from 'next/image';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { AbilityEntry, PokemonData } from '@/lib/static/types';
import AbilitiesList from './AbilitiesList/AbilitiesList';
import styles from './PokemonSummary.module.scss';

type PokemonSummaryProps = {
    abilityEntries: AbilityEntry[];
    catchRate?: number;
    interactive: boolean;
    onSelectAbility: (name: string) => void;
    placeholder: string;
    pokemon?: PokemonData;
    sprite?: string;
    types: string[];
};

const PokemonSummary: React.FC<PokemonSummaryProps> = ({
    abilityEntries,
    catchRate,
    interactive,
    onSelectAbility,
    placeholder,
    pokemon,
    sprite,
    types,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 80;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 14;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div
            className={[styles.content, !pokemon && styles['content--empty']]
                .filter(Boolean)
                .join(' ')}
        >
            {pokemon ? (
                <>
                    <div className={styles.left}>
                        <div className={styles.sprite}>
                            {sprite && (
                                <Image
                                    alt={pokemon.name}
                                    height={SPRITE_SIZE}
                                    src={sprite}
                                    width={SPRITE_SIZE}
                                />
                            )}
                        </div>
                        <div className={styles.info}>
                            <span className={styles.name}>{pokemon.name}</span>
                            {types.length > 0 && (
                                <div className={styles.types}>
                                    {types.map((type) => (
                                        <TypeBadge
                                            height={TYPE_BADGE_HEIGHT}
                                            key={type}
                                            type={type}
                                            width={TYPE_BADGE_WIDTH}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles['right-top']}>
                            {abilityEntries.length > 0 && (
                                <div className={styles.abilities}>
                                    <span className={styles['abilities-label']}>
                                        Abilities
                                    </span>
                                    <AbilitiesList
                                        entries={abilityEntries}
                                        interactive={interactive}
                                        onSelectAbility={onSelectAbility}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles['right-bottom']}>
                            {catchRate !== undefined && (
                                <div className={styles['catch-rate']}>
                                    <span
                                        className={styles['catch-rate-label']}
                                    >
                                        Catch Rate
                                    </span>
                                    <span className={styles.rate}>
                                        {catchRate}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <span className={styles.placeholder}>{placeholder}</span>
            )}
        </div>
    );
};

export default PokemonSummary;
