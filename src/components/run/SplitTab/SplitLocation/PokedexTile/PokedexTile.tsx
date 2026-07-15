import Image from 'next/image';
import EvolutionLine from '@/components/run/SplitTab/SplitLocation/PokedexTile/EvolutionLine/EvolutionLine';
import LearnsetList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import StatsChart from '@/components/run/SplitTab/SplitLocation/PokedexTile/StatsChart/StatsChart';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './PokedexTile.module.scss';

interface PokedexTileProps {
    generation: number;
    onSelectSpecies?: (species: string) => void;
    species?: string;
    variant: string;
}

const PokedexTile: React.FC<PokedexTileProps> = ({
    generation,
    onSelectSpecies,
    species,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 80;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 14;

    interface AbilityEntry {
        hidden?: boolean;
        name: string;
    }

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = species ? PokemonHelpers.get(species) : undefined;
    const sprite = species
        ? PokemonHelpers.getSprite(species, variant)
        : undefined;
    const types = species
        ? (PokemonHelpers.getTypes(species, generation) ?? [])
        : [];
    const abilities = species
        ? PokemonHelpers.getAbilities(species, generation)
        : undefined;
    const abilityEntries: AbilityEntry[] = abilities
        ? [
              { name: abilities.slot1 },
              ...(abilities.slot2 ? [{ name: abilities.slot2 }] : []),
              ...(abilities.hidden
                  ? [{ hidden: true, name: abilities.hidden }]
                  : []),
          ]
        : [];
    const catchRate = species
        ? PokemonHelpers.getCatchRate(species)
        : undefined;
    const evolutionLine = species
        ? PokemonHelpers.getEvolutionLine(species, generation)
        : undefined;
    const hasEvolutionBranches =
        !!evolutionLine && evolutionLine.evolvesTo.length > 0;
    const stats = species
        ? PokemonHelpers.getStats(species, generation)
        : undefined;
    const learnset = species
        ? PokemonHelpers.getLearnset(species, generation)
        : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-tile']}>
            <div className={styles.header}>Pokedex</div>
            <div
                className={[
                    styles.content,
                    !pokemon && styles['content--empty'],
                ]
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
                                <span className={styles.name}>
                                    {pokemon.name}
                                </span>
                                {types.length > 0 && (
                                    <div className={styles.types}>
                                        {types.map((type) => (
                                            <Image
                                                alt={type}
                                                height={TYPE_BADGE_HEIGHT}
                                                key={type}
                                                src={`/types/${type}.png`}
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
                                        <span
                                            className={
                                                styles['abilities-label']
                                            }
                                        >
                                            Abilities
                                        </span>
                                        <div
                                            className={styles['abilities-list']}
                                        >
                                            {abilityEntries.map((entry) => (
                                                <span
                                                    className={[
                                                        styles.ability,
                                                        entry.hidden &&
                                                            styles[
                                                                'ability--hidden'
                                                            ],
                                                    ]
                                                        .filter(Boolean)
                                                        .join(' ')}
                                                    key={entry.name}
                                                >
                                                    {StringHelpers.toTitleCase(
                                                        entry.name
                                                    )}
                                                    {entry.hidden &&
                                                        ' (Hidden)'}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={styles['right-bottom']}>
                                {catchRate !== undefined && (
                                    <div className={styles['catch-rate']}>
                                        <span
                                            className={
                                                styles['catch-rate-label']
                                            }
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
                    <span className={styles.placeholder}>
                        Select a Pokemon to view its details
                    </span>
                )}
            </div>
            {pokemon && (
                <div className={styles.evolution}>
                    <span className={styles['evolution-label']}>
                        Evolution Line
                    </span>
                    <div className={styles['evolution-content']}>
                        {hasEvolutionBranches && evolutionLine ? (
                            <EvolutionLine
                                currentName={species}
                                onSelectSpecies={onSelectSpecies}
                                step={evolutionLine}
                                variant={variant}
                            />
                        ) : (
                            <span className={styles['evolution-empty']}>
                                No evolution line
                            </span>
                        )}
                    </div>
                </div>
            )}
            {pokemon && stats && (
                <div className={styles.stats}>
                    <span className={styles['stats-label']}>Base Stats</span>
                    <div className={styles['stats-content']}>
                        <StatsChart stats={stats} />
                    </div>
                </div>
            )}
            {pokemon && learnset && (
                <div className={styles.learnset}>
                    <span className={styles['learnset-label']}>Learnset</span>
                    <LearnsetList moves={learnset} />
                </div>
            )}
        </div>
    );
};

export default PokedexTile;
