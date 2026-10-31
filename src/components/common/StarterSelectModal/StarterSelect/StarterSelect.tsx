'use client';

import Image from 'next/image';
import { GameDataSource } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './StarterSelect.module.scss';

type StarterSelectProps = {
    dataSource: GameDataSource;
    onSelect: (starter: string) => void;
    selected: string | null;
    starters: string[];
    variant: string;
};

const StarterSelect: React.FC<StarterSelectProps> = ({
    dataSource,
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
                    const sprite = PokemonHelpers.getPokemonSprite(
                        dataSource,
                        starter,
                        variant
                    );
                    const name =
                        PokemonHelpers.getPokemonData(dataSource, starter)
                            ?.name ?? starter;

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
                                    alt={name}
                                    height={96}
                                    src={sprite}
                                    width={96}
                                />
                            ) : (
                                name
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default StarterSelect;
