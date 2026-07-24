import { useEffect, useReducer, useState, useSyncExternalStore } from 'react';
import {
    MAX_EV,
    MAX_IV,
    MAX_LEVEL,
    MIN_EV,
    MIN_IV,
    MIN_LEVEL,
    MOVE_SLOT_COUNT,
} from '@/lib/static/constants';
import { Nature, PokemonStatus } from '@/lib/static/enums';
import {
    CalcField,
    CalcFieldState,
    CalcPokemonInput,
    CalcSideConditions,
    Game,
    Run,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import BattleSelectPanel from './BattleSelectPanel/BattleSelectPanel';
import BoxSelectPanel from './BoxSelectPanel/BoxSelectPanel';
import styles from './CalcTab.module.scss';
import DamageResultsPanel from './DamageResultsPanel/DamageResultsPanel';
import FieldEffectsPanel from './FieldEffectsPanel/FieldEffectsPanel';
import PokemonPanel from './PokemonPanel/PokemonPanel';
import TeamSelectPanel from './TeamSelectPanel/TeamSelectPanel';
import TrainerPokemonPanel from './TrainerPokemonPanel/TrainerPokemonPanel';

type CalcTabProps = {
    game: Game;
    onSelectBattle: (battleKey: string) => void;
    run: Run;
    selectedBattle?: string;
};

const CalcTab: React.FC<CalcTabProps> = ({
    game,
    onSelectBattle,
    run,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type AttackerState = {
        abilityName: string;
        boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
        evs: StatValues;
        ivs: StatValues;
        level: number;
        moves: string[];
        nature: Nature;
        status: string;
    };

    type AttackerAction =
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

    type DefenderState = {
        abilityName: string;
        boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
        status: string;
    };

    type DefenderAction =
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

    // The first trainer in game order, defaulted to whenever no battle has
    // been explicitly selected yet.
    const getFirstBattleKey = (): string | undefined => {
        const firstBattle = BattleHelpers.getAllBattles(game)[0];
        return firstBattle
            ? BattleHelpers.getBattleKey(firstBattle)
            : undefined;
    };

    // The first living Pokémon in box order, defaulted to on load.
    const getFirstLivingLocation = (): string => {
        const firstLiving = run.caughtPokemon.find(
            (pokemon) => pokemon.status === PokemonStatus.Alive
        );
        return firstLiving?.location ?? '';
    };

    const getBlankBoosts = (): Record<
        Exclude<keyof StatValues, 'hp'>,
        number
    > => ({ atk: 0, def: 0, spa: 0, spd: 0, spe: 0 });

    const getBlankSideConditions = (): CalcSideConditions => ({
        cannonade: false,
        isAuroraVeil: false,
        isBattery: false,
        isFlowerGift: false,
        isForesight: false,
        isFriendGuard: false,
        isHelpingHand: false,
        isLightScreen: false,
        isPowerSpot: false,
        isPowerTrick: false,
        isProtected: false,
        isReflect: false,
        isSaltCured: false,
        isSeeded: false,
        isSR: false,
        isSteelySpirit: false,
        isSwitching: false,
        isTailwind: false,
        spikes: 0,
        steelsurge: false,
        vinelash: false,
        volcalith: false,
        wildfire: false,
    });

    const getBlankFieldState = (): CalcFieldState => ({
        isAuraBreak: false,
        isBeadsOfRuin: false,
        isCrit: false,
        isDarkAura: false,
        isFairyAura: false,
        isGravity: false,
        isMagicRoom: false,
        isSwordOfRuin: false,
        isTabletsOfRuin: false,
        isVesselOfRuin: false,
        isWonderRoom: false,
        playerSide: getBlankSideConditions(),
        terrain: '',
        trainerSide: getBlankSideConditions(),
        weather: '',
    });

    const padMoves = (moves: string[]): string[] =>
        Array.from(
            { length: MOVE_SLOT_COUNT },
            (_, index) => moves[index] ?? ''
        );

    const getBlankAttackerState = (): AttackerState => ({
        abilityName: '',
        boosts: getBlankBoosts(),
        evs: StatHelpers.normalizeStats(undefined, 0),
        ivs: StatHelpers.normalizeStats(undefined, MAX_IV),
        level: MIN_LEVEL,
        moves: padMoves([]),
        nature: Object.values(Nature)[0],
        status: '',
    });

    const attackerReducer = (
        state: AttackerState,
        action: AttackerAction
    ): AttackerState => {
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
                return getBlankAttackerState();
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

    const getBlankDefenderState = (): DefenderState => ({
        abilityName: '',
        boosts: getBlankBoosts(),
        status: '',
    });

    const defenderReducer = (
        state: DefenderState,
        action: DefenderAction
    ): DefenderState => {
        switch (action.type) {
            case 'RESET':
                return getBlankDefenderState();
            case 'LOAD':
                return {
                    ...getBlankDefenderState(),
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
    const [attacker, dispatchAttacker] = useReducer(
        attackerReducer,
        undefined,
        getBlankAttackerState
    );
    const [defender, dispatchDefender] = useReducer(
        defenderReducer,
        undefined,
        getBlankDefenderState
    );

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedLocation, setSelectedLocation] = useState(
        getFirstLivingLocation
    );
    const [selectedMemberIndex, setSelectedMemberIndex] = useState('0');
    const [prevSelectedBattle, setPrevSelectedBattle] = useState(
        () => selectedBattle ?? getFirstBattleKey()
    );
    const [field, setField] = useState(getBlankFieldState);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const hideEvs = settings['hide-evs'] ?? false;

    // Falls back to the first trainer whenever the URL hasn't recorded an
    // explicit selection yet.
    const effectiveSelectedBattle = selectedBattle ?? getFirstBattleKey();

    // React docs' "adjusting state when a prop changes" pattern — resets the
    // team-member selection to the first team member during render (no
    // effect) whenever the selected trainer changes, since a member index
    // from the previous trainer's team doesn't apply to the newly selected
    // one.
    if (effectiveSelectedBattle !== prevSelectedBattle) {
        setPrevSelectedBattle(effectiveSelectedBattle);
        setSelectedMemberIndex('0');
    }

    const caught = run.caughtPokemon.find(
        (pokemon) => pokemon.location === selectedLocation
    );
    const team = BattleHelpers.getSelectedTeam(
        game,
        effectiveSelectedBattle,
        run.starter
    );
    const mon = team[Number(selectedMemberIndex)];
    const defenderMoves = mon
        ? (mon.moves ??
          PokemonHelpers.getMovesAtLevel(mon.name, game.version, mon.level))
        : [];

    const playerInput: CalcPokemonInput | null = caught
        ? {
              abilityName: attacker.abilityName,
              boosts: attacker.boosts,
              evs: attacker.evs,
              ivs: attacker.ivs,
              level: attacker.level,
              nature: attacker.nature,
              species: caught.name,
              status: attacker.status,
          }
        : null;
    const trainerInput: CalcPokemonInput | null = mon
        ? {
              abilityName: defender.abilityName,
              boosts: defender.boosts,
              evs: StatHelpers.normalizeStats(mon.evs, 0),
              ivs: StatHelpers.normalizeStats(mon.ivs, MAX_IV),
              level: mon.level,
              nature: mon.nature ?? Object.values(Nature)[0],
              species: mon.name,
              status: defender.status,
          }
        : null;

    const attackerField: CalcField = {
        ...field,
        attackerSide: field.playerSide,
        defenderSide: field.trainerSide,
    };
    const defenderField: CalcField = {
        ...field,
        attackerSide: field.trainerSide,
        defenderSide: field.playerSide,
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    // On caught changing — the previously loaded ability/nature/level/IVs/
    // EVs/moves belonged to a different (or no) Pokémon; caught is derived
    // from the selectedLocation state this effect doesn't itself own.
    useEffect(() => {
        if (!caught) {
            dispatchAttacker({ type: 'CLEAR' });
            return;
        }

        const abilitySlug = PokemonHelpers.getAbilityName(
            caught.name,
            game.generation,
            caught.ability
        );
        dispatchAttacker({
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

    // On mon changing — the previously loaded ability/status/stat stages
    // belonged to a different (or no) team member.
    useEffect(() => {
        if (!mon) {
            dispatchDefender({ type: 'RESET' });
            return;
        }

        const abilitySlug = PokemonHelpers.getAbilityName(
            mon.name,
            game.generation,
            mon.ability
        );
        dispatchDefender({
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

    const handleAttackerAbilityChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_ABILITY', abilityName: value });
    };

    const handleAttackerNatureChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_NATURE', nature: value as Nature });
    };

    const handleAttackerLevelChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_LEVEL,
            Math.max(MIN_LEVEL, Number(event.target.value))
        );
        dispatchAttacker({ type: 'SET_LEVEL', level: value });
    };

    const handleAttackerStatusChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_STATUS', status: value });
    };

    const handleAttackerIvChange = (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_IV,
            Math.max(MIN_IV, Number(event.target.value))
        );
        dispatchAttacker({ type: 'SET_IV', stat, value });
    };

    const handleAttackerEvChange = (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Math.min(
            MAX_EV,
            Math.max(MIN_EV, Number(event.target.value))
        );
        dispatchAttacker({ type: 'SET_EV', stat, value });
    };

    const handleAttackerBoostChange = (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ): void => {
        dispatchAttacker({ type: 'SET_BOOST', stat, value: Number(value) });
    };

    const handleAttackerMoveChange = (index: number, value: string): void => {
        dispatchAttacker({ type: 'SET_MOVE', index, value });
    };

    const handleDefenderAbilityChange = (value: string): void => {
        dispatchDefender({ type: 'SET_ABILITY', abilityName: value });
    };

    const handleDefenderStatusChange = (value: string): void => {
        dispatchDefender({ type: 'SET_STATUS', status: value });
    };

    const handleDefenderBoostChange = (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ): void => {
        dispatchDefender({ type: 'SET_BOOST', stat, value: Number(value) });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['calc-tab']}>
            <div className={styles.results}>
                <DamageResultsPanel
                    attackerField={attackerField}
                    attackerMoves={attacker.moves}
                    defenderField={defenderField}
                    defenderMoves={defenderMoves}
                    generation={game.generation}
                    playerInput={playerInput}
                    trainerInput={trainerInput}
                />
            </div>
            <div className={styles.attacker}>
                <PokemonPanel
                    abilityName={attacker.abilityName}
                    boosts={attacker.boosts}
                    caught={caught}
                    evs={attacker.evs}
                    game={game}
                    hideEvs={hideEvs}
                    isTailwind={field.playerSide.isTailwind}
                    ivs={attacker.ivs}
                    level={attacker.level}
                    moves={attacker.moves}
                    nature={attacker.nature}
                    onAbilityChange={handleAttackerAbilityChange}
                    onBoostChange={handleAttackerBoostChange}
                    onEvChange={handleAttackerEvChange}
                    onIvChange={handleAttackerIvChange}
                    onLevelChange={handleAttackerLevelChange}
                    onMoveChange={handleAttackerMoveChange}
                    onNatureChange={handleAttackerNatureChange}
                    onStatusChange={handleAttackerStatusChange}
                    status={attacker.status}
                />
                <BoxSelectPanel
                    onSelectPokemon={setSelectedLocation}
                    run={run}
                    selectedLocation={selectedLocation}
                />
            </div>
            <FieldEffectsPanel
                field={field}
                generation={game.generation}
                onChange={setField}
            />
            <div className={styles.defender}>
                <BattleSelectPanel
                    game={game}
                    onSelectBattle={onSelectBattle}
                    selectedBattle={effectiveSelectedBattle}
                />
                <TrainerPokemonPanel
                    abilityName={defender.abilityName}
                    boosts={defender.boosts}
                    game={game}
                    hideEvs={hideEvs}
                    isTailwind={field.trainerSide.isTailwind}
                    mon={mon}
                    onAbilityChange={handleDefenderAbilityChange}
                    onBoostChange={handleDefenderBoostChange}
                    onStatusChange={handleDefenderStatusChange}
                    selectedBattle={effectiveSelectedBattle}
                    status={defender.status}
                />
                <TeamSelectPanel
                    game={game}
                    onSelectMember={setSelectedMemberIndex}
                    run={run}
                    selectedBattle={effectiveSelectedBattle}
                    selectedMemberIndex={selectedMemberIndex}
                />
            </div>
        </div>
    );
};

export default CalcTab;
