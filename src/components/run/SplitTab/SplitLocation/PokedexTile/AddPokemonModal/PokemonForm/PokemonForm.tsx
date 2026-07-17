import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import TagInput from '@/components/common/TagInput/TagInput';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { STAT_FIELDS } from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import {
    AbilitySlot,
    CaughtPokemon,
    DropdownOption,
    StatValues,
} from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './PokemonForm.module.scss';

type PokemonFormProps = {
    allSpecies: string[];
    defaultAbilitySlot?: AbilitySlot;
    defaultEvs?: StatValues;
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
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >
    ) => void;
    showAbility: boolean;
    showEvs: boolean;
    showLevel: boolean;
    showMoves: boolean;
    showTags: boolean;
    submitLabel: string;
};

const PokemonForm: React.FC<PokemonFormProps> = ({
    allSpecies,
    defaultAbilitySlot,
    defaultEvs,
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
    showAbility,
    showEvs,
    showLevel,
    showMoves,
    showTags,
    submitLabel,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_IV = 0;
    const MAX_IV = 31;
    const MIN_EV = 0;
    const MAX_EV = 252;
    const MIN_LEVEL = 1;
    const MAX_LEVEL = 100;
    // Pokemon caught in the wild default to the encounter's minimum level
    // when known, otherwise level 1; starters (which don't show the level
    // field) start at level 5, matching the in-game starting level.
    const DEFAULT_LEVEL = showLevel ? (defaultLevel ?? 1) : 5;
    const MOVE_SLOT_COUNT = 4;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The moves a Pokemon would actually know at atLevel, padded to fill
    // every move slot (empty slots left unselected).
    const getStartingMoves = (
        speciesName: string,
        atLevel: number
    ): string[] => {
        const knownMoves = PokemonHelpers.getMovesAtLevel(
            speciesName,
            generation,
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

    const [species, setSpecies] = useState(
        () =>
            PokemonHelpers.getPokemonData(defaultSpecies)?.name ??
            defaultSpecies
    );
    const [abilitySlot, setAbilitySlot] = useState<AbilitySlot>(
        defaultAbilitySlot ?? 1
    );
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
        setAbilitySlot(1);
        setMoves(getStartingMoves(value, level));
    };

    const handleAbilityChange = (value: string): void => {
        setAbilitySlot(Number(value) as AbilitySlot);
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
        setMoves(getStartingMoves(species, value));
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit({
            ability: abilitySlot,
            evs,
            ivs,
            level,
            moves: moves.filter(Boolean),
            name: species,
            nature,
            tags,
        });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const speciesOptions: DropdownOption[] = allSpecies.map((name) => ({
        label: name,
        value: name,
    }));
    const abilities = PokemonHelpers.getPokemonAbilities(species, generation);
    const abilityOptions: DropdownOption[] = abilities
        ? [
              { name: abilities.slot1, slot: 1 as AbilitySlot },
              ...(abilities.slot2
                  ? [{ name: abilities.slot2, slot: 2 as AbilitySlot }]
                  : []),
              ...(abilities.hidden
                  ? [{ name: abilities.hidden, slot: 3 as AbilitySlot }]
                  : []),
          ].map(({ name, slot }) => ({
              label: StringHelpers.toTitleCase(name),
              value: String(slot),
          }))
        : [];
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => ({ label: name, value: name })
    );
    const learnset =
        PokemonHelpers.getPokemonLearnset(species, generation) ?? [];
    const moveNames = new Set(
        learnset.map(
            (move) => MoveHelpers.getMoveData(move.name)?.name ?? move.name
        )
    );
    const moveOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...[...moveNames]
            .sort((a, b) => a.localeCompare(b))
            .map((name) => ({ label: name, value: name })),
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
                            <span className={styles.label}>Pokemon</span>
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
                {showAbility && (
                    <div className={styles.field}>
                        <span className={styles.label}>Ability</span>
                        <Dropdown
                            onChange={handleAbilityChange}
                            options={abilityOptions}
                            value={String(abilitySlot)}
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
