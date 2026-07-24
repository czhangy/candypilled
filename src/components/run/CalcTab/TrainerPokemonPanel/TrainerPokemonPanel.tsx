import { useEffect, useReducer, useSyncExternalStore } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { STAT_FIELDS } from '@/lib/static/constants';
import { DropdownOption, Game, Run, StatValues } from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './TrainerPokemonPanel.module.scss';

type TrainerPokemonPanelProps = {
    game: Game;
    run: Run;
    selectedBattle?: string;
    selectedMemberIndex?: string;
};

const TrainerPokemonPanel: React.FC<TrainerPokemonPanelProps> = ({
    game,
    run,
    selectedBattle,
    selectedMemberIndex,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MIN_BOOST = -6;
    const MAX_BOOST = 6;

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
        status: string;
    };

    type PanelAction =
        | { type: 'RESET' }
        | { type: 'LOAD'; abilityName: string }
        | { type: 'SET_ABILITY'; abilityName: string }
        | {
              type: 'SET_BOOST';
              stat: Exclude<keyof StatValues, 'hp'>;
              value: number;
          }
        | { type: 'SET_STATUS'; status: string };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getBlankBoosts = (): Record<
        Exclude<keyof StatValues, 'hp'>,
        number
    > => ({ atk: 0, def: 0, spa: 0, spd: 0, spe: 0 });

    const getBlankPanelState = (): PanelState => ({
        abilityName: '',
        boosts: getBlankBoosts(),
        status: '',
    });

    const panelReducer = (
        state: PanelState,
        action: PanelAction
    ): PanelState => {
        switch (action.type) {
            case 'RESET':
                return getBlankPanelState();
            case 'LOAD':
                return {
                    ...getBlankPanelState(),
                    abilityName: action.abilityName,
                };
            case 'SET_ABILITY':
                return { ...state, abilityName: action.abilityName };
            case 'SET_BOOST':
                return {
                    ...state,
                    boosts: { ...state.boosts, [action.stat]: action.value },
                };
            case 'SET_STATUS':
                return { ...state, status: action.status };
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
    const [{ abilityName, boosts, status }, dispatch] = useReducer(
        panelReducer,
        undefined,
        getBlankPanelState
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const hideEvs = settings['hide-evs'] ?? false;

    const team = BattleHelpers.getSelectedTeam(
        game,
        selectedBattle,
        run.starter
    );
    const mon = team[Number(selectedMemberIndex)];
    const ivs = mon ? StatHelpers.normalizeStats(mon.ivs, 31) : undefined;
    const evs = mon ? StatHelpers.normalizeStats(mon.evs, 0) : undefined;

    const baseStats = mon
        ? PokemonHelpers.getPokemonStats(mon.name, game.generation)
        : undefined;
    const totalStats =
        mon && baseStats && ivs && evs
            ? StatHelpers.calculateStats(
                  baseStats,
                  mon.level,
                  ivs,
                  evs,
                  mon.nature
              )
            : undefined;

    const abilityOptions: DropdownOption[] = AbilityHelpers.getAllAbilities(
        game.generation
    ).map((name) => ({ label: name, value: name }));

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    // On mon changing — the previously loaded ability/status/stat stages
    // belonged to a different (or no) team member; mon is derived from
    // props this component doesn't control (selectedBattle/selectedMemberIndex).
    useEffect(() => {
        if (!mon) {
            dispatch({ type: 'RESET' });
            return;
        }

        const abilitySlug = PokemonHelpers.getAbilityName(
            mon.name,
            game.generation,
            mon.ability
        );
        dispatch({
            type: 'LOAD',
            abilityName:
                (abilitySlug &&
                    AbilityHelpers.getAbilityData(abilitySlug)?.name) ??
                abilitySlug ??
                '',
        });
    }, [mon, game.generation]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAbilityChange = (value: string): void => {
        dispatch({ type: 'SET_ABILITY', abilityName: value });
    };

    const handleStatusChange = (value: string): void => {
        dispatch({ type: 'SET_STATUS', status: value });
    };

    const handleBoostChange = (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ): void => {
        dispatch({ type: 'SET_BOOST', stat, value: Number(value) });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['trainer-pokemon-panel']}>
            {!selectedBattle && (
                <p className={styles.placeholder}>Select a battle above</p>
            )}
            {selectedBattle && (
                <>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <span className={styles.label}>Pokémon</span>
                            <span className={styles.value}>
                                {mon?.name ?? 'None selected'}
                            </span>
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Level</span>
                            <span className={styles.value}>
                                {mon?.level ?? '-'}
                            </span>
                        </div>
                    </div>
                    {mon && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <span className={styles.label}>Nature</span>
                                    <span className={styles.value}>
                                        {mon.nature ?? 'None'}
                                    </span>
                                </div>
                                <div className={styles.field}>
                                    <span className={styles.label}>
                                        Ability
                                    </span>
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
                                            <th
                                                className={styles['stat-label']}
                                            >
                                                {label}
                                            </th>
                                            <td>{baseStats?.[key]}</td>
                                            <td>{ivs?.[key]}</td>
                                            {!hideEvs && <td>{evs?.[key]}</td>}
                                            <td
                                                className={styles['boost-cell']}
                                            >
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
                                                        value={String(
                                                            boosts[key]
                                                        )}
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
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default TrainerPokemonPanel;
