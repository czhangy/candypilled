import Image from 'next/image';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './PokedexTile.module.scss';

interface PokedexTileProps {
    generation: number;
    species?: string;
    variant: string;
}

const PokedexTile: React.FC<PokedexTileProps> = ({
    generation,
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
                                            Abilities:
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
                            <div className={styles['right-bottom']} />
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokemon to view its details
                    </span>
                )}
            </div>
        </div>
    );
};

export default PokedexTile;
