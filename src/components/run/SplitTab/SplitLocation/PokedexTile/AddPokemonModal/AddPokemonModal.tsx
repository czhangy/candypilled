import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import Modal from '@/components/common/Modal/Modal';
import { Nature } from '@/lib/static/enums';
import { BattlePokemon, DropdownOption, StatValues } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './AddPokemonModal.module.scss';

interface AddPokemonModalProps {
    accentColor?: string;
    allSpecies: string[];
    defaultSpecies: string;
    generation: number;
    onClose: () => void;
    onSubmit: (
        details: Pick<
            BattlePokemon,
            'ability' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ) => void;
}

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({
    accentColor,
    allSpecies,
    defaultSpecies,
    generation,
    onClose,
    onSubmit,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_IV = 0;
    const MAX_IV = 31;
    const MIN_LEVEL = 1;
    const MAX_LEVEL = 100;
    const DEFAULT_LEVEL = 1;
    const MOVE_SLOT_COUNT = 4;
    const EMPTY_MOVES = Array<string>(MOVE_SLOT_COUNT).fill('');

    const STAT_FIELDS: { key: keyof StatValues; label: string }[] = [
        { key: 'hp', label: 'HP' },
        { key: 'atk', label: 'Attack' },
        { key: 'def', label: 'Defense' },
        { key: 'spa', label: 'Sp. Atk' },
        { key: 'spd', label: 'Sp. Def' },
        { key: 'spe', label: 'Speed' },
    ];

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [species, setSpecies] = useState(
        () => PokemonHelpers.get(defaultSpecies)?.name ?? defaultSpecies
    );
    const [ability, setAbility] = useState(
        () =>
            PokemonHelpers.getAbilities(defaultSpecies, generation)?.slot1 ?? ''
    );
    const [nature, setNature] = useState<Nature>(Object.values(Nature)[0]);
    const [ivs, setIvs] = useState<StatValues>({
        atk: MAX_IV,
        def: MAX_IV,
        hp: MAX_IV,
        spa: MAX_IV,
        spd: MAX_IV,
        spe: MAX_IV,
    });
    const [level, setLevel] = useState(DEFAULT_LEVEL);
    const [moves, setMoves] = useState<string[]>(EMPTY_MOVES);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSpeciesChange = (value: string): void => {
        const abilities = PokemonHelpers.getAbilities(value, generation);
        setSpecies(value);
        setAbility(abilities?.slot1 ?? '');
        setMoves(EMPTY_MOVES);
    };

    const handleAbilityChange = (value: string): void => {
        setAbility(value);
    };

    const handleMoveChange = (index: number, value: string): void => {
        setMoves((prev) =>
            prev.map((move, moveIndex) => (moveIndex === index ? value : move))
        );
    };

    const handleNatureChange = (value: string): void => {
        setNature(value as Nature);
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

    const handleLevelChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_LEVEL,
            Math.max(MIN_LEVEL, Number(event.target.value))
        );
        setLevel(value);
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit({
            ability,
            ivs,
            level,
            moves: moves.filter(Boolean),
            name: species,
            nature,
        });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const speciesOptions: DropdownOption[] = allSpecies.map((name) => ({
        label: name,
        value: name,
    }));
    const abilities = PokemonHelpers.getAbilities(species, generation);
    const abilityOptions: DropdownOption[] = abilities
        ? [
              abilities.slot1,
              ...(abilities.slot2 ? [abilities.slot2] : []),
              ...(abilities.hidden ? [abilities.hidden] : []),
          ].map((name) => ({
              label: StringHelpers.toTitleCase(name),
              value: name,
          }))
        : [];
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => ({ label: name, value: name })
    );
    const learnset = PokemonHelpers.getLearnset(species, generation) ?? [];
    const moveNames = new Set(
        learnset.map((move) => MoveHelpers.get(move.name)?.name ?? move.name)
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
        <Modal accentColor={accentColor} onClose={onClose} title="Add Pokemon">
            <form
                className={styles['add-pokemon-modal']}
                onSubmit={handleSubmit}
            >
                <div className={styles.row}>
                    <div className={styles.field}>
                        <span className={styles.label}>Pokemon</span>
                        <Dropdown
                            onChange={handleSpeciesChange}
                            options={speciesOptions}
                            searchable
                            value={species}
                        />
                    </div>
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
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <span className={styles.label}>Ability</span>
                        <Dropdown
                            onChange={handleAbilityChange}
                            options={abilityOptions}
                            value={ability}
                        />
                    </div>
                    <div className={styles.field}>
                        <span className={styles.label}>Nature</span>
                        <Dropdown
                            onChange={handleNatureChange}
                            options={natureOptions}
                            value={nature}
                        />
                    </div>
                </div>
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
                <div className={styles.field}>
                    <span className={styles.label}>IVs</span>
                    <div className={styles.ivs}>
                        {STAT_FIELDS.map(({ key, label }) => (
                            <div className={styles['iv-field']} key={key}>
                                <label
                                    className={styles['iv-label']}
                                    htmlFor={`iv-${key}`}
                                >
                                    {label}
                                </label>
                                <input
                                    className={styles.input}
                                    id={`iv-${key}`}
                                    max={MAX_IV}
                                    min={MIN_IV}
                                    onChange={(event) =>
                                        handleIvChange(key, event)
                                    }
                                    type="number"
                                    value={ivs[key]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <button className={styles['submit-button']} type="submit">
                        Add
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddPokemonModal;
