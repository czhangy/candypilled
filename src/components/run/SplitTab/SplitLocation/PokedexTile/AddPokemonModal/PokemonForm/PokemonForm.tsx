import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import TagInput from '@/components/common/TagInput/TagInput';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { ITEMS } from '@/lib/data/items';
import {
    MAX_EV,
    MAX_IV,
    MAX_LEVEL,
    MIN_EV,
    MIN_IV,
    MIN_LEVEL,
    MOVE_SLOT_COUNT,
    STAT_FIELDS,
} from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import {
    CaughtPokemon,
    DropdownOption,
    PokemonData,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import NatureHelpers from '@/lib/utils/NatureHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PokemonForm.module.scss';

type PokemonFormProps = {
    allSpecies: PokemonData[];
    defaultAbility?: string;
    defaultEvs?: StatValues;
    defaultGender?: 'male' | 'female';
    defaultHeldItem?: string;
    defaultIvs?: StatValues;
    defaultLevel?: number;
    defaultMoves?: string[];
    defaultNature?: Nature;
    defaultSpecies: string;
    defaultTags?: string[];
    disabledReason: string;
    generation: number;
    lockSpecies: boolean;
    onSubmit: (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'gender'
            | 'heldItem'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
            | 'tags'
        >
    ) => void;
    recalculateMovesOnLevelChange: boolean;
    showAbility: boolean;
    showEvs: boolean;
    showHeldItem: boolean;
    showLevel: boolean;
    showMoves: boolean;
    showTags: boolean;
    submitLabel: string;
    version: string;
};

const PokemonForm: React.FC<PokemonFormProps> = ({
    allSpecies,
    defaultAbility,
    defaultEvs,
    defaultGender,
    defaultHeldItem,
    defaultIvs,
    defaultLevel,
    defaultMoves,
    defaultNature,
    defaultSpecies,
    defaultTags,
    disabledReason,
    generation,
    lockSpecies,
    onSubmit,
    recalculateMovesOnLevelChange,
    showAbility,
    showEvs,
    showHeldItem,
    showLevel,
    showMoves,
    showTags,
    submitLabel,
    version,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Pokémon caught in the wild default to the encounter's minimum level
    // when known, otherwise level 1; starters (which don't show the level
    // field) start at level 5, matching the in-game starting level.
    const DEFAULT_LEVEL = showLevel ? (defaultLevel ?? 1) : 5;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The moves a Pokémon would actually know at atLevel, padded to fill
    // every move slot (empty slots left unselected).
    const getStartingMoves = (
        speciesName: string,
        atLevel: number
    ): string[] => {
        const knownMoves = PokemonHelpers.getMovesAtLevel(
            speciesName,
            version,
            atLevel
        );
        return Array.from(
            { length: MOVE_SLOT_COUNT },
            (_, index) => knownMoves[index] ?? ''
        );
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [species, setSpecies] = useState(defaultSpecies);
    const [ability, setAbility] = useState(
        defaultAbility ??
            PokemonHelpers.getPokemonAbilities(defaultSpecies, generation)
                ?.slot1 ??
            ''
    );
    const [gender, setGender] = useState<'male' | 'female'>(
        defaultGender ?? 'male'
    );
    const [heldItem, setHeldItem] = useState(defaultHeldItem ?? '');
    const [nature, setNature] = useState<Nature>(
        defaultNature ?? Object.values(Nature)[0]
    );
    const [ivs, setIvs] = useState<StatValues>(
        defaultIvs ?? {
            atk: MAX_IV,
            def: MAX_IV,
            hp: MAX_IV,
            spa: MAX_IV,
            spd: MAX_IV,
            spe: MAX_IV,
        }
    );
    const [evs, setEvs] = useState<StatValues>(
        defaultEvs ?? { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 }
    );
    const [level, setLevel] = useState(DEFAULT_LEVEL);
    const [moves, setMoves] = useState<string[]>(
        () => defaultMoves ?? getStartingMoves(defaultSpecies, DEFAULT_LEVEL)
    );
    const [tags, setTags] = useState<string[]>(defaultTags ?? []);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSpeciesChange = (value: string): void => {
        setSpecies(value);
        setAbility(
            PokemonHelpers.getPokemonAbilities(value, generation)?.slot1 ?? ''
        );
        setMoves(getStartingMoves(value, level));
    };

    const handleAbilityChange = (value: string): void => {
        setAbility(value);
    };

    const handleGenderChange = (value: string): void => {
        setGender(value as 'male' | 'female');
    };

    const handleHeldItemChange = (value: string): void => {
        setHeldItem(value);
    };

    const handleMoveChange = (index: number, value: string): void => {
        setMoves((prev) =>
            prev.map((move, moveIndex) => (moveIndex === index ? value : move))
        );
    };

    const handleNatureChange = (value: string): void => {
        setNature(value as Nature);
    };

    const handleTagsChange = (value: string[]): void => {
        setTags(value);
    };

    const handleIvChange = (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_IV,
            Math.max(MIN_IV, Number(event.target.value))
        );
        setIvs((prev) => ({ ...prev, [stat]: value }));
    };

    const handleEvChange = (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_EV,
            Math.max(MIN_EV, Number(event.target.value))
        );
        setEvs((prev) => ({ ...prev, [stat]: value }));
    };

    const handleLevelChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_LEVEL,
            Math.max(MIN_LEVEL, Number(event.target.value))
        );
        setLevel(value);
        if (recalculateMovesOnLevelChange) {
            setMoves(getStartingMoves(species, value));
        }
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit({
            ability,
            evs,
            gender: PokemonHelpers.isGenderless(species)
                ? undefined
                : (PokemonHelpers.getFixedGender(species) ?? gender),
            heldItem,
            ivs,
            level,
            moves: moves.filter(Boolean),
            nature,
            slug: species,
            tags,
        });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const speciesOptions: DropdownOption[] = allSpecies.map((pokemon) => ({
        label: pokemon.name,
        value: pokemon.slug,
    }));
    const abilities = PokemonHelpers.getPokemonAbilities(species, generation);
    const abilityOptions: DropdownOption[] = abilities
        ? [
              abilities.slot1,
              ...(abilities.slot2 ? [abilities.slot2] : []),
              ...(abilities.hidden ? [abilities.hidden] : []),
          ].map((slug) => ({
              label: AbilityHelpers.getAbilityData(slug)?.name ?? slug,
              value: slug,
          }))
        : [];
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => {
            const effect = NatureHelpers.getNatureEffect(name);
            return {
                label: effect ? `${name} ${effect}` : name,
                value: name,
            };
        }
    );
    const showGenderField =
        !PokemonHelpers.isGenderless(species) &&
        !PokemonHelpers.getFixedGender(species);
    const genderOptions: DropdownOption[] = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ];
    const availableItems = Object.values(ITEMS).filter(
        (item) =>
            item.introducedInGeneration <= generation &&
            (item.removedInGeneration === undefined ||
                generation < item.removedInGeneration)
    );
    const heldItemOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...availableItems
            .map((item) => ({ label: item.name, value: item.slug }))
            .sort((a, b) => a.label.localeCompare(b.label)),
    ];
    const learnset = PokemonHelpers.getPokemonLearnset(species, version) ?? [];
    const moveSlugs = new Set(learnset.map((move) => move.slug));
    const moveOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...[...moveSlugs]
            .map((slug) => ({
                label: MoveHelpers.getMoveData(slug)?.name ?? slug,
                value: slug,
            }))
            .sort((a, b) => a.label.localeCompare(b.label)),
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <form className={styles['pokemon-form']} onSubmit={handleSubmit}>
            {(!lockSpecies || showLevel) && (
                <div className={styles.row}>
                    {!lockSpecies && (
                        <div className={styles.field}>
                            <span className={styles.label}>Pokémon</span>
                            <Dropdown
                                onChange={handleSpeciesChange}
                                options={speciesOptions}
                                searchable
                                value={species}
                            />
                        </div>
                    )}
                    {showLevel && (
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="level">
                                Level
                            </label>
                            <input
                                className={styles.input}
                                id="level"
                                max={MAX_LEVEL}
                                min={MIN_LEVEL}
                                onChange={handleLevelChange}
                                type="number"
                                value={level}
                            />
                        </div>
                    )}
                </div>
            )}
            <div className={styles.row}>
                {showGenderField && (
                    <div className={styles.field}>
                        <span className={styles.label}>Gender</span>
                        <Dropdown
                            onChange={handleGenderChange}
                            options={genderOptions}
                            value={gender}
                        />
                    </div>
                )}
                <div className={styles.field}>
                    <span className={styles.label}>Nature</span>
                    <Dropdown
                        onChange={handleNatureChange}
                        options={natureOptions}
                        value={nature}
                    />
                </div>
            </div>
            {(showAbility || showHeldItem) && (
                <div className={styles.row}>
                    {showAbility && (
                        <div className={styles.field}>
                            <span className={styles.label}>Ability</span>
                            <Dropdown
                                onChange={handleAbilityChange}
                                options={abilityOptions}
                                value={ability}
                            />
                        </div>
                    )}
                    {showHeldItem && (
                        <div className={styles.field}>
                            <span className={styles.label}>Held Item</span>
                            <Dropdown
                                onChange={handleHeldItemChange}
                                options={heldItemOptions}
                                searchable
                                value={heldItem}
                            />
                        </div>
                    )}
                </div>
            )}
            {showMoves && (
                <div className={styles.field}>
                    <span className={styles.label}>Moves</span>
                    <div className={styles.moves}>
                        {moves.map((move, index) => {
                            const slotOptions = moveOptions.filter(
                                (option) =>
                                    option.value === '' ||
                                    !moves.some(
                                        (selected, selectedIndex) =>
                                            selectedIndex !== index &&
                                            selected === option.value
                                    )
                            );

                            return (
                                <Dropdown
                                    key={index}
                                    onChange={(value) =>
                                        handleMoveChange(index, value)
                                    }
                                    options={slotOptions}
                                    placeholder="None"
                                    searchable
                                    value={move}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            <div className={styles.field}>
                <span className={styles.label}>IVs</span>
                <div className={styles['stat-grid']}>
                    {STAT_FIELDS.map(({ key, label }) => (
                        <div className={styles['stat-field']} key={key}>
                            <label
                                className={styles['stat-field-label']}
                                htmlFor={`iv-${key}`}
                            >
                                {label}
                            </label>
                            <input
                                className={styles.input}
                                id={`iv-${key}`}
                                max={MAX_IV}
                                min={MIN_IV}
                                onChange={(event) => handleIvChange(key, event)}
                                type="number"
                                value={ivs[key]}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {showTags && (
                <div className={styles.field}>
                    <span className={styles.label}>Tags</span>
                    <TagInput onChange={handleTagsChange} tags={tags} />
                </div>
            )}
            {showEvs && (
                <div className={styles.field}>
                    <span className={styles.label}>EVs</span>
                    <div className={styles['stat-grid']}>
                        {STAT_FIELDS.map(({ key, label }) => (
                            <div className={styles['stat-field']} key={key}>
                                <label
                                    className={styles['stat-field-label']}
                                    htmlFor={`ev-${key}`}
                                >
                                    {label}
                                </label>
                                <input
                                    className={styles.input}
                                    id={`ev-${key}`}
                                    max={MAX_EV}
                                    min={MIN_EV}
                                    onChange={(event) =>
                                        handleEvChange(key, event)
                                    }
                                    type="number"
                                    value={evs[key]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className={styles.footer}>
                {disabledReason ? (
                    <Tooltip position="right" text={disabledReason}>
                        <button
                            className={styles['submit-button']}
                            disabled
                            type="submit"
                        >
                            {submitLabel}
                        </button>
                    </Tooltip>
                ) : (
                    <button className={styles['submit-button']} type="submit">
                        {submitLabel}
                    </button>
                )}
            </div>
        </form>
    );
};

export default PokemonForm;
