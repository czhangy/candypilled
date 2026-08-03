import { useId } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import NumericInput from '@/components/common/NumericInput/NumericInput';
import { ITEMS } from '@/lib/data/items';
import { MAX_LEVEL, MIN_LEVEL } from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import {
    DropdownOption,
    Game,
    SpeedComparison,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './PokemonPanel.module.scss';
import StatsTable from './StatsTable/StatsTable';

type PokemonPanelProps = {
    abilityName: string;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    evs: StatValues;
    game: Game;
    gender?: 'male' | 'female';
    heldItem: string;
    isTailwind: boolean;
    ivs: StatValues;
    level: number;
    moves: string[];
    nature: Nature;
    onAbilityChange: (value: string) => void;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ) => void;
    onEvChange: (stat: keyof StatValues, value: number) => void;
    onGenderChange: (gender: 'male' | 'female') => void;
    onHeldItemChange: (value: string) => void;
    onIvChange: (stat: keyof StatValues, value: number) => void;
    onLevelChange: (value: number) => void;
    onMoveChange: (index: number, value: string) => void;
    onNatureChange: (value: string) => void;
    onSpeciesChange: (slug: string) => void;
    onStatusChange: (value: string) => void;
    placeholder?: string;
    pokemonSlug?: string;
    showEvs: boolean;
    speedComparison: SpeedComparison | undefined;
    status: string;
};

const PokemonPanel: React.FC<PokemonPanelProps> = ({
    abilityName,
    boosts,
    evs,
    game,
    gender,
    heldItem,
    isTailwind,
    ivs,
    level,
    moves,
    nature,
    onAbilityChange,
    onBoostChange,
    onEvChange,
    onGenderChange,
    onHeldItemChange,
    onIvChange,
    onLevelChange,
    onMoveChange,
    onNatureChange,
    onSpeciesChange,
    onStatusChange,
    placeholder,
    pokemonSlug,
    showEvs,
    speedComparison,
    status,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const STATUS_OPTIONS: DropdownOption[] = [
        { label: 'Healthy', value: '' },
        { label: 'Burn', value: 'brn' },
        { label: 'Freeze', value: 'frz' },
        { label: 'Paralysis', value: 'par' },
        { label: 'Poison', value: 'psn' },
        { label: 'Badly Poisoned', value: 'tox' },
        { label: 'Sleep', value: 'slp' },
    ];

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const levelInputId = useId();

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const baseStats = pokemonSlug
        ? PokemonHelpers.getPokemonStats(pokemonSlug, game.generation)
        : undefined;
    const rawTotalStats = baseStats
        ? StatHelpers.calculateStats(baseStats, level, ivs, evs, nature)
        : undefined;
    const totalStats = rawTotalStats
        ? {
              ...rawTotalStats,
              atk: StatHelpers.applyBoost(rawTotalStats.atk, boosts.atk),
              def: StatHelpers.applyBoost(rawTotalStats.def, boosts.def),
              spa: StatHelpers.applyBoost(rawTotalStats.spa, boosts.spa),
              spd: StatHelpers.applyBoost(rawTotalStats.spd, boosts.spd),
              spe:
                  StatHelpers.applyBoost(rawTotalStats.spe, boosts.spe) *
                  (isTailwind ? 2 : 1),
          }
        : undefined;

    const canToggleGender =
        !!pokemonSlug &&
        !PokemonHelpers.isGenderless(pokemonSlug) &&
        !PokemonHelpers.getFixedGender(pokemonSlug);
    const genderSymbol = gender === 'male' ? '♂' : '♀';
    const genderClassName = gender
        ? [styles.gender, styles[`gender--${gender}`]].join(' ')
        : undefined;

    const speciesOptions: DropdownOption[] = PokemonHelpers.getAllSpecies(
        game.generation
    ).map((pokemon) => ({ label: pokemon.name, value: pokemon.slug }));
    const abilityOptions: DropdownOption[] = AbilityHelpers.getAllAbilities(
        game.generation
    ).map((name) => ({ label: name, value: name }));
    const natureOptions: DropdownOption[] = Object.values(Nature)
        .filter((name) => name !== Nature.Unknown)
        .map((name) => {
            const effect = NatureHelpers.getNatureEffect(name);
            return {
                label: effect ? `${name} ${effect}` : name,
                value: name,
            };
        });
    const moveOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...MoveHelpers.getAllMoves(game.generation).map((name) => ({
            label: name,
            value: name,
        })),
    ];
    const availableItems = Object.values(ITEMS).filter(
        (item) =>
            item.introducedInGeneration <= game.generation &&
            (item.removedInGeneration === undefined ||
                game.generation < item.removedInGeneration)
    );
    const heldItemOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...availableItems
            .map((item) => ({ label: item.name, value: item.name }))
            .sort((a, b) => a.label.localeCompare(b.label)),
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-panel']}>
            {placeholder ? (
                <p className={styles.placeholder}>{placeholder}</p>
            ) : (
                <>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <span className={styles.label}>Pokémon</span>
                            {pokemonSlug ? (
                                <div className={styles.species}>
                                    <Dropdown
                                        dense
                                        onChange={onSpeciesChange}
                                        options={speciesOptions}
                                        searchable
                                        value={pokemonSlug}
                                    />
                                    {gender &&
                                        (canToggleGender ? (
                                            <button
                                                className={genderClassName}
                                                onClick={() =>
                                                    onGenderChange(
                                                        gender === 'male'
                                                            ? 'female'
                                                            : 'male'
                                                    )
                                                }
                                                type="button"
                                            >
                                                {genderSymbol}
                                            </button>
                                        ) : (
                                            <span className={genderClassName}>
                                                {genderSymbol}
                                            </span>
                                        ))}
                                </div>
                            ) : (
                                <span className={styles.value}>
                                    None selected
                                </span>
                            )}
                        </div>
                        <div className={styles.field}>
                            <label
                                className={styles.label}
                                htmlFor={levelInputId}
                            >
                                Level
                            </label>
                            <NumericInput
                                dense={false}
                                disabled={!pokemonSlug}
                                id={levelInputId}
                                max={MAX_LEVEL}
                                min={MIN_LEVEL}
                                onChange={onLevelChange}
                                value={level}
                            />
                        </div>
                    </div>
                    {pokemonSlug && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <span className={styles.label}>Nature</span>
                                    <Dropdown
                                        dense
                                        onChange={onNatureChange}
                                        options={natureOptions}
                                        value={nature}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <span className={styles.label}>Status</span>
                                    <Dropdown
                                        dense
                                        onChange={onStatusChange}
                                        options={STATUS_OPTIONS}
                                        value={status}
                                    />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <span className={styles.label}>
                                        Ability
                                    </span>
                                    <Dropdown
                                        dense
                                        onChange={onAbilityChange}
                                        options={abilityOptions}
                                        searchable
                                        value={abilityName}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <span className={styles.label}>
                                        Held Item
                                    </span>
                                    <Dropdown
                                        dense
                                        onChange={onHeldItemChange}
                                        options={heldItemOptions}
                                        searchable
                                        value={heldItem}
                                    />
                                </div>
                            </div>
                            <StatsTable
                                baseStats={baseStats}
                                boosts={boosts}
                                evs={evs}
                                ivs={ivs}
                                onBoostChange={onBoostChange}
                                onEvChange={onEvChange}
                                onIvChange={onIvChange}
                                showEvs={showEvs}
                                speedComparison={speedComparison}
                                totalStats={totalStats}
                            />
                            <div className={styles.field}>
                                <span className={styles.label}>Moves</span>
                                <div className={styles.moves}>
                                    {moves.map((move, index) => (
                                        <Dropdown
                                            dense
                                            key={index}
                                            onChange={(value) =>
                                                onMoveChange(index, value)
                                            }
                                            options={moveOptions}
                                            placeholder="None"
                                            searchable
                                            value={move}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default PokemonPanel;
