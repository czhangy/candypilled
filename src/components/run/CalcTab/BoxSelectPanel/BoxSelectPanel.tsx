import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import RabbitIcon from '@/lib/icons/RabbitIcon';
import SnailIcon from '@/lib/icons/SnailIcon';
import { MAX_IV } from '@/lib/static/constants';
import { PokemonStatus } from '@/lib/static/enums';
import { CaughtPokemon, Run, SpeedComparison } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './BoxSelectPanel.module.scss';

type BoxSelectPanelProps = {
    enemySpeed: number | undefined;
    generation: number;
    onSelectPokemon: (location: string) => void;
    run: Run;
    selectedLocation?: string;
};

const BoxSelectPanel: React.FC<BoxSelectPanelProps> = ({
    enemySpeed,
    generation,
    onSelectPokemon,
    run,
    selectedLocation,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    const SPEED_TOOLTIPS: Record<SpeedComparison, string> = {
        faster: 'Higher Speed',
        slower: 'Lower Speed',
        tie: 'Speed Tie',
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The Pokémon's own (unboosted) Speed stat, for comparison against the
    // currently selected enemy's Speed.
    const getSpeed = (pokemon: CaughtPokemon): number | undefined => {
        const displaySlug = PokemonHelpers.getDisplaySlug(pokemon);
        const baseStats = PokemonHelpers.getPokemonStats(
            displaySlug,
            generation
        );
        if (!baseStats) return undefined;

        return StatHelpers.calculateStats(
            baseStats,
            pokemon.level,
            StatHelpers.normalizeStats(pokemon.ivs, MAX_IV),
            StatHelpers.normalizeStats(pokemon.evs, 0),
            pokemon.nature
        ).spe;
    };

    const getSpeedComparison = (
        pokemon: CaughtPokemon
    ): SpeedComparison | undefined => {
        if (enemySpeed === undefined) return undefined;

        const speed = getSpeed(pokemon);
        if (speed === undefined) return undefined;

        return speed === enemySpeed
            ? 'tie'
            : speed > enemySpeed
              ? 'faster'
              : 'slower';
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const livingPokemon = run.caughtPokemon.filter(
        (pokemon) => pokemon.status === PokemonStatus.Alive
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['box-select-panel']}>
            {livingPokemon.length > 0 ? (
                <div className={styles.grid}>
                    {livingPokemon.map((pokemon) => {
                        const displaySlug =
                            PokemonHelpers.getDisplaySlug(pokemon);
                        const speedComparison = getSpeedComparison(pokemon);

                        return (
                            <button
                                aria-pressed={
                                    pokemon.location === selectedLocation
                                }
                                className={[
                                    styles.slot,
                                    pokemon.location === selectedLocation &&
                                        styles['slot--selected'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={pokemon.location}
                                onClick={() =>
                                    onSelectPokemon(pokemon.location)
                                }
                                type="button"
                            >
                                <Image
                                    alt={
                                        PokemonHelpers.getPokemonData(
                                            displaySlug
                                        )?.name ?? pokemon.slug
                                    }
                                    height={SPRITE_HEIGHT}
                                    src={PokemonHelpers.getBoxSprite(
                                        displaySlug
                                    )}
                                    width={SPRITE_WIDTH}
                                />
                                {speedComparison === 'faster' && (
                                    <span className={styles['faster-icon']}>
                                        <Tooltip
                                            position="right"
                                            text={
                                                SPEED_TOOLTIPS[speedComparison]
                                            }
                                        >
                                            <RabbitIcon />
                                        </Tooltip>
                                    </span>
                                )}
                                {speedComparison === 'slower' && (
                                    <span className={styles['slower-icon']}>
                                        <Tooltip
                                            position="right"
                                            text={
                                                SPEED_TOOLTIPS[speedComparison]
                                            }
                                        >
                                            <SnailIcon />
                                        </Tooltip>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            ) : (
                <span className={styles.placeholder}>Box is empty</span>
            )}
        </div>
    );
};

export default BoxSelectPanel;
