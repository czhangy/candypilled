import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import TypeBadge from '@/components/common/TypeBadge/TypeBadge';
import { BattlePokemon } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import MoveList from './MoveList/MoveList';
import styles from './PokemonSlot.module.scss';

type PokemonSlotProps = {
    generation: number;
    isReadOnly: boolean;
    onSelectAbility: (name: string) => void;
    onSelectMove: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    pokemon: BattlePokemon | null;
    variant: string;
    version: string;
};

const PokemonSlot: React.FC<PokemonSlotProps> = ({
    generation,
    isReadOnly,
    onSelectAbility,
    onSelectMove,
    onSelectSpecies,
    pokemon,
    variant,
    version,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

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
    const highlightDangerous = settings['highlight-dangerous'] ?? false;
    const moves =
        pokemon?.moves ??
        (pokemon
            ? PokemonHelpers.getMovesAtLevel(
                  pokemon.name,
                  version,
                  pokemon.level
              )
            : []);
    const speciesContent = pokemon && (
        <>
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
        </>
    );
    const natureContent = pokemon?.nature && (
        <>
            {pokemon.nature}
            {NatureHelpers.getNatureEffect(pokemon.nature) && (
                <span className={styles['pokemon-slot__nature-effect']}>
                    {' '}
                    {NatureHelpers.getNatureEffect(pokemon.nature)}
                </span>
            )}
        </>
    );

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
            {isReadOnly ? (
                <div
                    className={[
                        styles['pokemon-slot__link'],
                        styles['pokemon-slot__link--readonly'],
                    ].join(' ')}
                >
                    {speciesContent}
                </div>
            ) : (
                <button
                    className={styles['pokemon-slot__link']}
                    onClick={() => onSelectSpecies(pokemon.name)}
                    type="button"
                >
                    {speciesContent}
                </button>
            )}
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
                        isReadOnly ? (
                            <span
                                className={[
                                    styles['ability-button'],
                                    styles['ability-button--readonly'],
                                    highlightDangerous &&
                                        AbilityHelpers.isDangerousAbility(
                                            ability
                                        ) &&
                                        styles['ability-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {ability}
                            </span>
                        ) : (
                            <button
                                className={[
                                    styles['ability-button'],
                                    highlightDangerous &&
                                        AbilityHelpers.isDangerousAbility(
                                            ability
                                        ) &&
                                        styles['ability-button--dangerous'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() => onSelectAbility(ability)}
                                type="button"
                            >
                                {ability}
                            </button>
                        )
                    ) : (
                        '-'
                    )}
                </li>
                <li className={styles['pokemon-slot__metadata-item--nature']}>
                    {!pokemon.nature ? (
                        '-'
                    ) : isReadOnly ? (
                        <span
                            className={[
                                styles['ability-button'],
                                styles['ability-button--readonly'],
                            ].join(' ')}
                        >
                            {natureContent}
                        </span>
                    ) : (
                        <a
                            className={styles['ability-button']}
                            href={`/natures?nature=${pokemon.nature.toLowerCase()}`}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {natureContent}
                        </a>
                    )}
                </li>
                <MoveList
                    generation={generation}
                    highlightDangerous={highlightDangerous}
                    isReadOnly={isReadOnly}
                    ivs={StatHelpers.normalizeStats(pokemon.ivs, 31)}
                    moves={moves}
                    onSelectMove={onSelectMove}
                />
            </ul>
        </div>
    );
};

export default PokemonSlot;
