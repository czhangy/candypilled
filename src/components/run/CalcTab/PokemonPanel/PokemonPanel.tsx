import { useState, useSyncExternalStore } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { STAT_FIELDS } from '@/lib/static/constants';
import { Nature, PokemonStatus } from '@/lib/static/enums';
import {
    AbilitySlot,
    DropdownOption,
    Game,
    Run,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './PokemonPanel.module.scss';

type PokemonPanelProps = {
    game: Game;
    run: Run;
};

const PokemonPanel: React.FC<PokemonPanelProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_LEVEL = 1;
    const MAX_LEVEL = 100;
    const MIN_IV = 0;
    const MAX_IV = 31;
    const MIN_EV = 0;
    const MAX_EV = 252;
    const MIN_BOOST = -6;
    const MAX_BOOST = 6;
    const MOVE_SLOT_COUNT = 4;

    const STATUS_OPTIONS: DropdownOption[] = [
        { label: 'Healthy', value: '' },
        { label: 'Burn', value: 'brn' },
        { label: 'Freeze', value: 'frz' },
        { label: 'Paralysis', value: 'par' },
        { label: 'Poison', value: 'psn' },
        { label: 'Badly Poisoned', value: 'tox' },
        { label: 'Sleep', value: 'slp' },
    ];

    const BOOST_OPTIONS: DropdownOption[] = Array.from(
        { length: MAX_BOOST - MIN_BOOST + 1 },
        (_, index) => {
            const stage = MIN_BOOST + index;
            return {
                label: stage > 0 ? `+${stage}` : String(stage),
                value: String(stage),
            };
        }
    );

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getBlankBoosts = (): Record<
        Exclude<keyof StatValues, 'hp'>,
        number
    > => ({ atk: 0, def: 0, spa: 0, spd: 0, spe: 0 });

    const padMoves = (moves: string[]): string[] =>
        Array.from(
            { length: MOVE_SLOT_COUNT },
            (_, index) => moves[index] ?? ''
        );

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedLocation, setSelectedLocation] = useState('');
    const [abilitySlot, setAbilitySlot] = useState<AbilitySlot>(1);
    const [nature, setNature] = useState<Nature>(Object.values(Nature)[0]);
    const [level, setLevel] = useState(MIN_LEVEL);
    const [ivs, setIvs] = useState<StatValues>(
        StatHelpers.normalizeStats(undefined, 31)
    );
    const [evs, setEvs] = useState<StatValues>(
        StatHelpers.normalizeStats(undefined, 0)
    );
    const [boosts, setBoosts] = useState(getBlankBoosts);
    const [status, setStatus] = useState('');
    const [moves, setMoves] = useState<string[]>(() => padMoves([]));

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const hideEvs = settings['hide-evs'] ?? false;

    const livingPokemon = run.caughtPokemon.filter(
        (pokemon) => pokemon.status === PokemonStatus.Alive
    );
    const boxOptions: DropdownOption[] = livingPokemon.map((pokemon) => ({
        label: pokemon.name,
        value: pokemon.location,
    }));

    const caught = run.caughtPokemon.find(
        (pokemon) => pokemon.location === selectedLocation
    );

    const baseStats = caught
        ? PokemonHelpers.getPokemonStats(caught.name, game.generation)
        : undefined;
    const totalStats = baseStats
        ? StatHelpers.calculateStats(baseStats, level, ivs, evs, nature)
        : undefined;

    const abilities = caught
        ? PokemonHelpers.getPokemonAbilities(caught.name, game.generation)
        : undefined;
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
              label: AbilityHelpers.getAbilityData(name)?.name ?? name,
              value: String(slot),
          }))
        : [];
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => ({ label: name, value: name })
    );

    const learnset = caught
        ? (PokemonHelpers.getPokemonLearnset(caught.name, game.version) ?? [])
        : [];
    const learnsetMoveNames = new Set(
        learnset.map(
            (move) => MoveHelpers.getMoveData(move.name)?.name ?? move.name
        )
    );
    const moveOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...[...learnsetMoveNames]
            .sort((a, b) => a.localeCompare(b))
            .map((name) => ({ label: name, value: name })),
    ];

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSelectPokemon = (location: string): void => {
        setSelectedLocation(location);

        const nextCaught = run.caughtPokemon.find(
            (pokemon) => pokemon.location === location
        );
        if (!nextCaught) return;

        setAbilitySlot(nextCaught.ability);
        setNature(nextCaught.nature ?? Object.values(Nature)[0]);
        setLevel(nextCaught.level);
        setIvs(StatHelpers.normalizeStats(nextCaught.ivs, 31));
        setEvs(StatHelpers.normalizeStats(nextCaught.evs, 0));
        setBoosts(getBlankBoosts());
        setStatus('');
        setMoves(padMoves(nextCaught.moves));
    };

    const handleAbilityChange = (value: string): void => {
        setAbilitySlot(Number(value) as AbilitySlot);
    };

    const handleNatureChange = (value: string): void => {
        setNature(value as Nature);
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

    const handleStatusChange = (value: string): void => {
        setStatus(value);
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

    const handleBoostChange = (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ): void => {
        setBoosts((prev) => ({ ...prev, [stat]: Number(value) }));
    };

    const handleMoveChange = (index: number, value: string): void => {
        setMoves((prev) =>
            prev.map((move, moveIndex) => (moveIndex === index ? value : move))
        );
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-panel']}>
            <div className={styles.field}>
                <span className={styles.label}>Pokémon</span>
                <Dropdown
                    dense
                    onChange={handleSelectPokemon}
                    options={boxOptions}
                    placeholder="Select a Pokémon…"
                    searchable
                    value={selectedLocation}
                />
            </div>
            {caught && (
                <>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <span className={styles.label}>Nature</span>
                            <Dropdown
                                dense
                                onChange={handleNatureChange}
                                options={natureOptions}
                                value={nature}
                            />
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Ability</span>
                            <Dropdown
                                dense
                                onChange={handleAbilityChange}
                                options={abilityOptions}
                                value={String(abilitySlot)}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label
                                className={styles.label}
                                htmlFor="pokemon-panel-level"
                            >
                                Level
                            </label>
                            <input
                                className={styles.input}
                                id="pokemon-panel-level"
                                max={MAX_LEVEL}
                                min={MIN_LEVEL}
                                onChange={handleLevelChange}
                                type="number"
                                value={level}
                            />
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Status</span>
                            <Dropdown
                                dense
                                onChange={handleStatusChange}
                                options={STATUS_OPTIONS}
                                value={status}
                            />
                        </div>
                    </div>
                    <table className={styles.stats}>
                        <thead>
                            <tr>
                                <th />
                                <th>Base</th>
                                <th>IV</th>
                                {!hideEvs && <th>EV</th>}
                                <th>Stage</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {STAT_FIELDS.map(({ key, label }) => (
                                <tr key={key}>
                                    <th className={styles['stat-label']}>
                                        {label}
                                    </th>
                                    <td>{baseStats?.[key]}</td>
                                    <td>
                                        <input
                                            className={styles['iv-input']}
                                            max={MAX_IV}
                                            min={MIN_IV}
                                            onChange={(event) =>
                                                handleIvChange(key, event)
                                            }
                                            type="number"
                                            value={ivs[key]}
                                        />
                                    </td>
                                    {!hideEvs && (
                                        <td>
                                            <input
                                                className={styles['ev-input']}
                                                max={MAX_EV}
                                                min={MIN_EV}
                                                onChange={(event) =>
                                                    handleEvChange(key, event)
                                                }
                                                type="number"
                                                value={evs[key]}
                                            />
                                        </td>
                                    )}
                                    <td className={styles['boost-cell']}>
                                        {key !== 'hp' && (
                                            <Dropdown
                                                dense
                                                onChange={(value) =>
                                                    handleBoostChange(
                                                        key,
                                                        value
                                                    )
                                                }
                                                options={BOOST_OPTIONS}
                                                value={String(boosts[key])}
                                            />
                                        )}
                                    </td>
                                    <td className={styles.total}>
                                        {totalStats?.[key]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.field}>
                        <span className={styles.label}>Moves</span>
                        <div className={styles.moves}>
                            {moves.map((move, index) => (
                                <Dropdown
                                    dense
                                    key={index}
                                    onChange={(value) =>
                                        handleMoveChange(index, value)
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
        </div>
    );
};

export default PokemonPanel;
