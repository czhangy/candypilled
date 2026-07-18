import Image from 'next/image';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { BattlePokemon } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import MoveList from './MoveList/MoveList';
import styles from './PokemonSlot.module.scss';

type PokemonSlotProps = {
    generation: number;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    pokemon: BattlePokemon | null;
    variant: string;
};

const PokemonSlot: React.FC<PokemonSlotProps> = ({
    generation,
    onSelectAbility,
    onSelectMove,
    pokemon,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 13;
    const ITEM_ICON_SIZE = 16;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getTypes = (name: string): string[] =>
        PokemonHelpers.getPokemonTypes(name, generation) ?? [];

    const getAbility = (): string | undefined => {
        if (!pokemon) return undefined;
        const ability = PokemonHelpers.getAbilityName(
            pokemon.name,
            generation,
            pokemon.ability
        );
        return ability && StringHelpers.toTitleCase(ability);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const sprite = pokemon
        ? PokemonHelpers.getPokemonSprite(pokemon.name, variant)
        : undefined;
    const types = pokemon ? getTypes(pokemon.name) : [];
    const ability = getAbility();

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    if (!pokemon) {
        return (
            <div
                className={[
                    styles['pokemon-slot'],
                    styles['pokemon-slot--empty'],
                ].join(' ')}
            />
        );
    }

    return (
        <div className={styles['pokemon-slot']}>
            <div className={styles['pokemon-slot__sprite']}>
                {sprite && (
                    <Image
                        alt={pokemon.name}
                        height={SPRITE_SIZE}
                        src={sprite}
                        width={SPRITE_SIZE}
                    />
                )}
            </div>
            <div className={styles['pokemon-slot__name']}>
                <span>
                    Lv.{pokemon.level} {pokemon.name}
                </span>
                {types.length > 0 && (
                    <div className={styles['pokemon-slot__types']}>
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
            <ul className={styles['pokemon-slot__metadata']}>
                <li className={styles['pokemon-slot__metadata-item--accent']}>
                    {pokemon.heldItem ? (
                        <span className={styles['held-item']}>
                            <Image
                                alt={pokemon.heldItem}
                                height={ITEM_ICON_SIZE}
                                src={ItemHelpers.getItemSprite(
                                    pokemon.heldItem
                                )}
                                width={ITEM_ICON_SIZE}
                            />
                            {pokemon.heldItem}
                        </span>
                    ) : (
                        '-'
                    )}
                </li>
                <li className={styles['pokemon-slot__metadata-item--ability']}>
                    {ability ? (
                        <button
                            className={styles['ability-button']}
                            onClick={() => onSelectAbility(ability)}
                            type="button"
                        >
                            {ability}
                        </button>
                    ) : (
                        '-'
                    )}
                </li>
                <li className={styles['pokemon-slot__metadata-item--nature']}>
                    {pokemon.nature ? (
                        <>
                            {pokemon.nature}
                            {NatureHelpers.getNatureEffect(pokemon.nature) && (
                                <span
                                    className={
                                        styles['pokemon-slot__nature-effect']
                                    }
                                >
                                    {' '}
                                    {NatureHelpers.getNatureEffect(
                                        pokemon.nature
                                    )}
                                </span>
                            )}
                        </>
                    ) : (
                        '-'
                    )}
                </li>
                <MoveList
                    generation={generation}
                    moves={pokemon.moves}
                    onSelectMove={onSelectMove}
                />
            </ul>
        </div>
    );
};

export default PokemonSlot;
