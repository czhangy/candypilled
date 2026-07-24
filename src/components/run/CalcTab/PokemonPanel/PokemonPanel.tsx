import { useEffect, useReducer, useSyncExternalStore } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { STAT_FIELDS } from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import { DropdownOption, Game, Run, StatValues } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './PokemonPanel.module.scss';

type PokemonPanelProps = {
    game: Game;
    run: Run;
    selectedLocation?: string;
};

const PokemonPanel: React.FC<PokemonPanelProps> = ({
    game,
    run,
    selectedLocation,
}) => {
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

    type PanelState = {
        abilityName: string;
        boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
        evs: StatValues;
        ivs: StatValues;
        level: number;
        moves: string[];
        nature: Nature;
        status: string;
    };

    type PanelAction =
        | {
              type: 'LOAD';
              abilityName: string;
              evs: StatValues;
              ivs: StatValues;
              level: number;
              moves: string[];
              nature: Nature;
          }
        | { type: 'CLEAR' }
        | { type: 'SET_ABILITY'; abilityName: string }
        | { type: 'SET_NATURE'; nature: Nature }
        | { type: 'SET_LEVEL'; level: number }
        | { type: 'SET_IV'; stat: keyof StatValues; value: number }
        | { type: 'SET_EV'; stat: keyof StatValues; value: number }
        | {
              type: 'SET_BOOST';
              stat: Exclude<keyof StatValues, 'hp'>;
              value: number;
          }
        | { type: 'SET_STATUS'; status: string }
        | { type: 'SET_MOVE'; index: number; value: string };

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

    const getBlankPanelState = (): PanelState => ({
        abilityName: '',
        boosts: getBlankBoosts(),
        evs: StatHelpers.normalizeStats(undefined, 0),
        ivs: StatHelpers.normalizeStats(undefined, MAX_IV),
        level: MIN_LEVEL,
        moves: padMoves([]),
        nature: Object.values(Nature)[0],
        status: '',
    });

    const panelReducer = (
        state: PanelState,
        action: PanelAction
    ): PanelState => {
        switch (action.type) {
            case 'LOAD':
                return {
                    abilityName: action.abilityName,
                    boosts: getBlankBoosts(),
                    evs: action.evs,
                    ivs: action.ivs,
                    level: action.level,
                    moves: action.moves,
                    nature: action.nature,
                    status: '',
                };
            case 'CLEAR':
                return getBlankPanelState();
            case 'SET_ABILITY':
                return { ...state, abilityName: action.abilityName };
            case 'SET_NATURE':
                return { ...state, nature: action.nature };
            case 'SET_LEVEL':
                return { ...state, level: action.level };
            case 'SET_IV':
                return {
                    ...state,
                    ivs: { ...state.ivs, [action.stat]: action.value },
                };
            case 'SET_EV':
                return {
                    ...state,
                    evs: { ...state.evs, [action.stat]: action.value },
                };
            case 'SET_BOOST':
                return {
                    ...state,
                    boosts: { ...state.boosts, [action.stat]: action.value },
                };
            case 'SET_STATUS':
                return { ...state, status: action.status };
            case 'SET_MOVE':
                return {
                    ...state,
                    moves: state.moves.map((move, index) =>
                        index === action.index ? action.value : move
                    ),
                };
        }
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );
    const [
        { abilityName, boosts, evs, ivs, level, moves, nature, status },
        dispatch,
    ] = useReducer(panelReducer, undefined, getBlankPanelState);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const hideEvs = settings['hide-evs'] ?? false;

    const caught = run.caughtPokemon.find(
        (pokemon) => pokemon.location === selectedLocation
    );

    const baseStats = caught
        ? PokemonHelpers.getPokemonStats(caught.name, game.generation)
        : undefined;
    const totalStats = baseStats
        ? StatHelpers.calculateStats(baseStats, level, ivs, evs, nature)
        : undefined;

    const abilityOptions: DropdownOption[] = AbilityHelpers.getAllAbilities(
        game.generation
    ).map((name) => ({ label: name, value: name }));
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => ({ label: name, value: name })
    );
    const moveOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...MoveHelpers.getAllMoves(game.generation).map((name) => ({
            label: name,
            value: name,
        })),
    ];

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    // On caught changing — the previously loaded ability/nature/level/IVs/
    // EVs/moves belonged to a different (or no) Pokémon; caught is an
    // external prop-derived value this component doesn't control.
    useEffect(() => {
        if (!caught) {
            dispatch({ type: 'CLEAR' });
            return;
        }

        const abilitySlug = PokemonHelpers.getAbilityName(
            caught.name,
            game.generation,
            caught.ability
        );
        dispatch({
            type: 'LOAD',
            abilityName:
                (abilitySlug &&
                    AbilityHelpers.getAbilityData(abilitySlug)?.name) ??
                abilitySlug ??
                '',
            evs: StatHelpers.normalizeStats(caught.evs, 0),
            ivs: StatHelpers.normalizeStats(caught.ivs, MAX_IV),
            level: caught.level,
            moves: padMoves(caught.moves),
            nature: caught.nature ?? Object.values(Nature)[0],
        });
    }, [caught, game.generation]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityChange = (value: string): void => {
        dispatch({ type: 'SET_ABILITY', abilityName: value });
    };

    const handleNatureChange = (value: string): void => {
        dispatch({ type: 'SET_NATURE', nature: value as Nature });
    };

    const handleLevelChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_LEVEL,
            Math.max(MIN_LEVEL, Number(event.target.value))
        );
        dispatch({ type: 'SET_LEVEL', level: value });
    };

    const handleStatusChange = (value: string): void => {
        dispatch({ type: 'SET_STATUS', status: value });
    };

    const handleIvChange = (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_IV,
            Math.max(MIN_IV, Number(event.target.value))
        );
        dispatch({ type: 'SET_IV', stat, value });
    };

    const handleEvChange = (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_EV,
            Math.max(MIN_EV, Number(event.target.value))
        );
        dispatch({ type: 'SET_EV', stat, value });
    };

    const handleBoostChange = (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ): void => {
        dispatch({ type: 'SET_BOOST', stat, value: Number(value) });
    };

    const handleMoveChange = (index: number, value: string): void => {
        dispatch({ type: 'SET_MOVE', index, value });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-panel']}>
            <div className={styles.row}>
                <div className={styles.field}>
                    <span className={styles.label}>Pokémon</span>
                    <span className={styles.value}>
                        {caught?.name ?? 'None selected'}
                    </span>
                </div>
                <div className={styles.field}>
                    <label
                        className={styles.label}
                        htmlFor="pokemon-panel-level"
                    >
                        Level
                    </label>
                    <input
                        className={styles.input}
                        disabled={!caught}
                        id="pokemon-panel-level"
                        max={MAX_LEVEL}
                        min={MIN_LEVEL}
                        onChange={handleLevelChange}
                        type="number"
                        value={level}
                    />
                </div>
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
                                searchable
                                value={abilityName}
                            />
                        </div>
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
