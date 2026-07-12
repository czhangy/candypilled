'use client';

import Image from 'next/image';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './StarterSelect.module.scss';

interface StarterSelectProps {
    onSelect: (starter: string) => void;
    selected: string | null;
    starters: string[];
}

const StarterSelect: React.FC<StarterSelectProps> = ({
    onSelect,
    selected,
    starters,
}) => {
    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleStarterClick = (starter: string): void => {
        onSelect(starter);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['starter-select']}>
            <span className={styles.label}>Starter:</span>
            <div className={styles.starters}>
                {starters.map((starter) => {
                    const pokemon = PokemonHelpers.get(starter);

                    return (
                        <button
                            className={[
                                styles.starter,
                                starter === selected &&
                                    styles['starter--selected'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            key={starter}
                            onClick={() => handleStarterClick(starter)}
                            type="button"
                        >
                            {pokemon ? (
                                <Image
                                    alt={starter}
                                    height={96}
                                    src={pokemon.sprite}
                                    width={96}
                                />
                            ) : (
                                starter
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default StarterSelect;
