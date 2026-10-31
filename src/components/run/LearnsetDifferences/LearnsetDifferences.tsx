import Image from 'next/image';
import LearnsetList from '@/components/run/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import { GameDataSource, LearnsetDifference } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './LearnsetDifferences.module.scss';

type LearnsetDifferencesProps = {
    dataSource: GameDataSource;
    differences: LearnsetDifference[];
    generation: number;
    onSelectMove: (slug: string) => void;
    scrollable: boolean;
};

const LearnsetDifferences: React.FC<LearnsetDifferencesProps> = ({
    dataSource,
    differences,
    generation,
    onSelectMove,
    scrollable,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 28;
    const SPRITE_HEIGHT = 21;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['learnset-differences']}>
            {differences.map((difference) => {
                const name =
                    PokemonHelpers.getPokemonData(dataSource, difference.slug)
                        ?.name ?? difference.slug;

                return (
                    <div className={styles.stage} key={difference.slug}>
                        <div className={styles['stage-header']}>
                            <Image
                                alt={name}
                                height={SPRITE_HEIGHT}
                                src={PokemonHelpers.getBoxSprite(
                                    difference.slug
                                )}
                                width={SPRITE_WIDTH}
                            />
                            <span className={styles['stage-name']}>{name}</span>
                        </div>
                        <LearnsetList
                            dataSource={dataSource}
                            generation={generation}
                            highlightedMoves={[]}
                            interactive
                            levelOffsets={difference.levelOffsets}
                            moves={difference.moves}
                            onSelectMove={onSelectMove}
                            scrollable={scrollable}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default LearnsetDifferences;
