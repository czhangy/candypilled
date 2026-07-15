'use client';

import Image from 'next/image';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './StarterSelect.module.scss';

interface StarterSelectProps {
    onSelect: (starter: string) => void;
    selected: string | null;
    starters: string[];
    variant: string;
}

const StarterSelect: React.FC<StarterSelectProps> = ({
    onSelect,
    selected,
    starters,
    variant,
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
            <div className={styles.starters}>
                {starters.map((starter) => {
                    const sprite = PokemonHelpers.getSprite(starter, variant);

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
                            {sprite ? (
                                <Image
                                    alt={starter}
                                    height={96}
                                    src={sprite}
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
