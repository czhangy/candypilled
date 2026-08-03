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
    SpeedComparison,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
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
        gender?: 'male' | 'female';
        heldItem: string;
        ivs: StatValues;
        level: number;
        moves: string[];
        nature: Nature;
        speciesSlug: string;
        status: string;
    };

    type AttackerAction =
        | {
              type: 'LOAD';
              abilityName: string;
              evs: StatValues;
              gender?: 'male' | 'female';
              heldItem: string;
              ivs: StatValues;
              level: number;
              moves: string[];
              nature: Nature;
              speciesSlug: string;
          }
        | { type: 'CLEAR' }
        | { type: 'SET_ABILITY'; abilityName: string }
        | { type: 'SET_GENDER'; gender: 'male' | 'female' }
        | { type: 'SET_HELD_ITEM'; heldItem: string }
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
        | { type: 'SET_MOVE'; index: number; value: string }
        | {
              type: 'SET_SPECIES';
              abilityName: string;
              gender?: 'male' | 'female';
              moves: string[];
              speciesSlug: string;
          };

    type DefenderState = {
        abilityName: string;
        boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
        evs: StatValues;
        gender?: 'male' | 'female';
        heldItem: string;
        ivs: StatValues;
        level: number;
        moves: string[];
        nature: Nature;
        speciesSlug: string;
        status: string;
    };

    type DefenderAction =
        | { type: 'RESET' }
        | {
              type: 'LOAD';
              abilityName: string;
              evs: StatValues;
              gender?: 'male' | 'female';
              heldItem: string;
              ivs: StatValues;
              level: number;
              moves: string[];
              nature: Nature;
              speciesSlug: string;
          }
        | { type: 'SET_ABILITY'; abilityName: string }
        | { type: 'SET_GENDER'; gender: 'male' | 'female' }
        | { type: 'SET_HELD_ITEM'; heldItem: string }
        | {
              type: 'SET_BOOST';
              stat: Exclude<keyof StatValues, 'hp'>;
              value: number;
          }
        | { type: 'SET_EV'; stat: keyof StatValues; value: number }
        | { type: 'SET_IV'; stat: keyof StatValues; value: number }
        | { type: 'SET_LEVEL'; level: number }
        | { type: 'SET_MOVE'; index: number; value: string }
        | { type: 'SET_NATURE'; nature: Nature }
        | { type: 'SET_STATUS'; status: string }
        | {
              type: 'SET_SPECIES';
              abilityName: string;
              gender?: 'male' | 'female';
              moves: string[];
              speciesSlug: string;
          };

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

    // The default gender to assign a newly-picked species: undefined for a
    // genderless species, its fixed gender if it only has one, or 'male'
    // (arbitrarily) for a species that can be either.
    const getSpeciesDefaultGender = (
        slug: string
    ): 'male' | 'female' | undefined => {
        if (PokemonHelpers.isGenderless(slug)) return undefined;
        return PokemonHelpers.getFixedGender(slug) ?? 'male';
    };

    const padMoves = (moves: string[]): string[] =>
        Array.from(
            { length: MOVE_SLOT_COUNT },
            (_, index) => moves[index] ?? ''
        );

    const getBlankAttackerState = (): AttackerState => ({
        abilityName: '',
        boosts: getBlankBoosts(),
        evs: StatHelpers.normalizeStats(undefined, 0),
        heldItem: '',
        ivs: StatHelpers.normalizeStats(undefined, MAX_IV),
        level: MIN_LEVEL,
        moves: padMoves([]),
        nature: Object.values(Nature)[0],
        speciesSlug: '',
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
                    gender: action.gender,
                    heldItem: action.heldItem,
                    ivs: action.ivs,
                    level: action.level,
                    moves: action.moves,
                    nature: action.nature,
                    speciesSlug: action.speciesSlug,
                    status: '',
                };
            case 'CLEAR':
                return getBlankAttackerState();
            case 'SET_ABILITY':
                return { ...state, abilityName: action.abilityName };
            case 'SET_GENDER':
                return { ...state, gender: action.gender };
            case 'SET_HELD_ITEM':
                return { ...state, heldItem: action.heldItem };
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
            case 'SET_SPECIES':
                return {
                    ...state,
                    abilityName: action.abilityName,
                    evs: StatHelpers.normalizeStats(undefined, 0),
                    gender: action.gender,
                    heldItem: '',
                    ivs: StatHelpers.normalizeStats(undefined, MAX_IV),
                    moves: action.moves,
                    nature: Nature.Adamant,
                    speciesSlug: action.speciesSlug,
                };
        }
    };

    const getBlankDefenderState = (): DefenderState => ({
        abilityName: '',
        boosts: getBlankBoosts(),
        evs: StatHelpers.normalizeStats(undefined, 0),
        heldItem: '',
        ivs: StatHelpers.normalizeStats(undefined, MAX_IV),
        level: MIN_LEVEL,
        moves: padMoves([]),
        nature: Object.values(Nature)[0],
        speciesSlug: '',
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
                    evs: action.evs,
                    gender: action.gender,
                    heldItem: action.heldItem,
                    ivs: action.ivs,
                    level: action.level,
                    moves: action.moves,
                    nature: action.nature,
                    speciesSlug: action.speciesSlug,
                };
            case 'SET_ABILITY':
                return { ...state, abilityName: action.abilityName };
            case 'SET_GENDER':
                return { ...state, gender: action.gender };
            case 'SET_HELD_ITEM':
                return { ...state, heldItem: action.heldItem };
            case 'SET_BOOST':
                return {
                    ...state,
                    boosts: { ...state.boosts, [action.stat]: action.value },
                };
            case 'SET_EV':
                return {
                    ...state,
                    evs: { ...state.evs, [action.stat]: action.value },
                };
            case 'SET_IV':
                return {
                    ...state,
                    ivs: { ...state.ivs, [action.stat]: action.value },
                };
            case 'SET_LEVEL':
                return { ...state, level: action.level };
            case 'SET_MOVE':
                return {
                    ...state,
                    moves: state.moves.map((move, index) =>
                        index === action.index ? action.value : move
                    ),
                };
            case 'SET_NATURE':
                return { ...state, nature: action.nature };
            case 'SET_STATUS':
                return { ...state, status: action.status };
            case 'SET_SPECIES':
                return {
                    ...state,
                    abilityName: action.abilityName,
                    evs: StatHelpers.normalizeStats(undefined, 0),
                    gender: action.gender,
                    heldItem: '',
                    ivs: StatHelpers.normalizeStats(undefined, MAX_IV),
                    moves: action.moves,
                    nature: Nature.Adamant,
                    speciesSlug: action.speciesSlug,
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

    const showEvs = settings['use-evs'] ?? false;

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

    // The calc's held item is edited independently of the caught/team
    // Pokémon's own held item (a "what if" sandbox), so a form change
    // reflects whichever item is currently selected here rather than the
    // item stored on the original Pokémon.
    const attackerDisplaySlug = attacker.speciesSlug
        ? PokemonHelpers.getDisplaySlug({
              slug: attacker.speciesSlug,
              heldItem: attacker.heldItem
                  ? ItemHelpers.getHeldItemSlugByName(attacker.heldItem)
                  : undefined,
          })
        : undefined;
    const defenderDisplaySlug = defender.speciesSlug
        ? PokemonHelpers.getDisplaySlug({
              slug: defender.speciesSlug,
              heldItem: defender.heldItem
                  ? ItemHelpers.getHeldItemSlugByName(defender.heldItem)
                  : undefined,
          })
        : undefined;

    const playerInput: CalcPokemonInput | null = caught
        ? {
              abilityName: attacker.abilityName,
              boosts: attacker.boosts,
              evs: attacker.evs,
              gender: attacker.gender,
              heldItem: attacker.heldItem,
              ivs: attacker.ivs,
              level: attacker.level,
              nature: attacker.nature,
              species:
                  PokemonHelpers.getPokemonData(attackerDisplaySlug ?? '')
                      ?.name ?? attacker.speciesSlug,
              status: attacker.status,
          }
        : null;
    const trainerInput: CalcPokemonInput | null = mon
        ? {
              abilityName: defender.abilityName,
              boosts: defender.boosts,
              evs: defender.evs,
              gender: defender.gender,
              heldItem: defender.heldItem,
              ivs: defender.ivs,
              level: defender.level,
              nature: defender.nature,
              species:
                  PokemonHelpers.getPokemonData(defenderDisplaySlug ?? '')
                      ?.name ?? defender.speciesSlug,
              status: defender.status,
          }
        : null;

    const playerBaseStats = attackerDisplaySlug
        ? PokemonHelpers.getPokemonStats(attackerDisplaySlug, game.generation)
        : undefined;
    const playerSpeed =
        playerBaseStats && playerInput
            ? StatHelpers.applyBoost(
                  StatHelpers.calculateStats(
                      playerBaseStats,
                      playerInput.level,
                      playerInput.ivs,
                      playerInput.evs,
                      playerInput.nature as Nature
                  ).spe,
                  attacker.boosts.spe
              ) * (field.playerSide.isTailwind ? 2 : 1)
            : undefined;

    const trainerBaseStats = defenderDisplaySlug
        ? PokemonHelpers.getPokemonStats(defenderDisplaySlug, game.generation)
        : undefined;
    const trainerSpeed =
        trainerBaseStats && trainerInput
            ? StatHelpers.applyBoost(
                  StatHelpers.calculateStats(
                      trainerBaseStats,
                      trainerInput.level,
                      trainerInput.ivs,
                      trainerInput.evs,
                      trainerInput.nature as Nature
                  ).spe,
                  defender.boosts.spe
              ) * (field.trainerSide.isTailwind ? 2 : 1)
            : undefined;

    const playerSpeedComparison: SpeedComparison | undefined =
        playerSpeed === undefined || trainerSpeed === undefined
            ? undefined
            : playerSpeed === trainerSpeed
              ? 'tie'
              : playerSpeed > trainerSpeed
                ? 'faster'
                : 'slower';
    const trainerSpeedComparison: SpeedComparison | undefined =
        playerSpeedComparison === 'faster'
            ? 'slower'
            : playerSpeedComparison === 'slower'
              ? 'faster'
              : playerSpeedComparison;

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

        dispatchAttacker({
            type: 'LOAD',
            abilityName:
                (caught.ability &&
                    AbilityHelpers.getAbilityData(caught.ability)?.name) ??
                caught.ability ??
                '',
            evs: StatHelpers.normalizeStats(caught.evs, 0),
            gender: caught.gender,
            heldItem:
                (caught.heldItem &&
                    ItemHelpers.getHeldItemData(caught.heldItem)?.name) ??
                caught.heldItem ??
                '',
            ivs: StatHelpers.normalizeStats(caught.ivs, MAX_IV),
            level: caught.level,
            moves: padMoves(
                caught.moves.map(
                    (slug) => MoveHelpers.getMoveData(slug)?.name ?? slug
                )
            ),
            nature: caught.nature ?? Object.values(Nature)[0],
            speciesSlug: caught.slug,
        });
    }, [caught, game.generation]);

    // On mon changing — the previously loaded ability/status/stat stages
    // belonged to a different (or no) team member.
    useEffect(() => {
        if (!mon) {
            dispatchDefender({ type: 'RESET' });
            return;
        }

        dispatchDefender({
            type: 'LOAD',
            abilityName:
                (mon.ability &&
                    AbilityHelpers.getAbilityData(mon.ability)?.name) ??
                mon.ability ??
                '',
            evs: StatHelpers.normalizeStats(mon.evs, 0),
            gender: mon.gender,
            heldItem:
                (mon.heldItem &&
                    ItemHelpers.getHeldItemData(mon.heldItem)?.name) ??
                mon.heldItem ??
                '',
            ivs: StatHelpers.normalizeStats(mon.ivs, MIN_IV),
            level: mon.level,
            moves: padMoves(
                (
                    mon.moves ??
                    PokemonHelpers.getMovesAtLevel(
                        mon.slug,
                        game.version,
                        mon.level
                    )
                ).map((slug) => MoveHelpers.getMoveData(slug)?.name ?? slug)
            ),
            nature: mon.nature ?? Object.values(Nature)[0],
            speciesSlug: mon.slug,
        });
    }, [mon, game.generation, game.version]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleAttackerAbilityChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_ABILITY', abilityName: value });
    };

    const handleAttackerGenderChange = (gender: 'male' | 'female'): void => {
        dispatchAttacker({ type: 'SET_GENDER', gender });
    };

    const handleAttackerNatureChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_NATURE', nature: value as Nature });
    };

    const handleAttackerLevelChange = (value: number): void => {
        const level = Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, value));
        dispatchAttacker({ type: 'SET_LEVEL', level });
    };

    const handleAttackerStatusChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_STATUS', status: value });
    };

    const handleAttackerIvChange = (
        stat: keyof StatValues,
        rawValue: number
    ): void => {
        const value = Math.min(MAX_IV, Math.max(MIN_IV, rawValue));
        dispatchAttacker({ type: 'SET_IV', stat, value });
    };

    const handleAttackerEvChange = (
        stat: keyof StatValues,
        rawValue: number
    ): void => {
        const value = Math.min(MAX_EV, Math.max(MIN_EV, rawValue));
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

    const handleAttackerHeldItemChange = (value: string): void => {
        dispatchAttacker({ type: 'SET_HELD_ITEM', heldItem: value });
    };

    const handleAttackerSpeciesChange = (slug: string): void => {
        const abilitySlug = PokemonHelpers.getPokemonAbilities(
            slug,
            game.generation
        )?.slot1;
        dispatchAttacker({
            type: 'SET_SPECIES',
            abilityName:
                (abilitySlug &&
                    AbilityHelpers.getAbilityData(abilitySlug)?.name) ??
                abilitySlug ??
                '',
            gender: getSpeciesDefaultGender(slug),
            moves: padMoves(
                PokemonHelpers.getMovesAtLevel(
                    slug,
                    game.version,
                    attacker.level
                ).map(
                    (moveSlug) =>
                        MoveHelpers.getMoveData(moveSlug)?.name ?? moveSlug
                )
            ),
            speciesSlug: slug,
        });
    };

    const handleDefenderAbilityChange = (value: string): void => {
        dispatchDefender({ type: 'SET_ABILITY', abilityName: value });
    };

    const handleDefenderGenderChange = (gender: 'male' | 'female'): void => {
        dispatchDefender({ type: 'SET_GENDER', gender });
    };

    const handleDefenderNatureChange = (value: string): void => {
        dispatchDefender({ type: 'SET_NATURE', nature: value as Nature });
    };

    const handleDefenderLevelChange = (value: number): void => {
        const level = Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, value));
        dispatchDefender({ type: 'SET_LEVEL', level });
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

    const handleDefenderHeldItemChange = (value: string): void => {
        dispatchDefender({ type: 'SET_HELD_ITEM', heldItem: value });
    };

    const handleDefenderEvChange = (
        stat: keyof StatValues,
        rawValue: number
    ): void => {
        const value = Math.min(MAX_EV, Math.max(MIN_EV, rawValue));
        dispatchDefender({ type: 'SET_EV', stat, value });
    };

    const handleDefenderIvChange = (
        stat: keyof StatValues,
        rawValue: number
    ): void => {
        const value = Math.min(MAX_IV, Math.max(MIN_IV, rawValue));
        dispatchDefender({ type: 'SET_IV', stat, value });
    };

    const handleDefenderMoveChange = (index: number, value: string): void => {
        dispatchDefender({ type: 'SET_MOVE', index, value });
    };

    const handleDefenderSpeciesChange = (slug: string): void => {
        const abilitySlug = PokemonHelpers.getPokemonAbilities(
            slug,
            game.generation
        )?.slot1;
        dispatchDefender({
            type: 'SET_SPECIES',
            abilityName:
                (abilitySlug &&
                    AbilityHelpers.getAbilityData(abilitySlug)?.name) ??
                abilitySlug ??
                '',
            gender: getSpeciesDefaultGender(slug),
            moves: padMoves(
                PokemonHelpers.getMovesAtLevel(
                    slug,
                    game.version,
                    defender.level
                ).map(
                    (moveSlug) =>
                        MoveHelpers.getMoveData(moveSlug)?.name ?? moveSlug
                )
            ),
            speciesSlug: slug,
        });
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
                    defenderMoves={defender.moves}
                    generation={game.generation}
                    playerInput={playerInput}
                    trainerInput={trainerInput}
                />
            </div>
            <div className={styles.attacker}>
                <PokemonPanel
                    abilityName={attacker.abilityName}
                    boosts={attacker.boosts}
                    evs={attacker.evs}
                    game={game}
                    gender={attacker.gender}
                    heldItem={attacker.heldItem}
                    isTailwind={field.playerSide.isTailwind}
                    ivs={attacker.ivs}
                    level={attacker.level}
                    moves={attacker.moves}
                    nature={attacker.nature}
                    onAbilityChange={handleAttackerAbilityChange}
                    onBoostChange={handleAttackerBoostChange}
                    onEvChange={handleAttackerEvChange}
                    onGenderChange={handleAttackerGenderChange}
                    onHeldItemChange={handleAttackerHeldItemChange}
                    onIvChange={handleAttackerIvChange}
                    onLevelChange={handleAttackerLevelChange}
                    onMoveChange={handleAttackerMoveChange}
                    onNatureChange={handleAttackerNatureChange}
                    onSpeciesChange={handleAttackerSpeciesChange}
                    onStatusChange={handleAttackerStatusChange}
                    pokemonSlug={attackerDisplaySlug}
                    showEvs={showEvs}
                    speedComparison={playerSpeedComparison}
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
                <PokemonPanel
                    abilityName={defender.abilityName}
                    boosts={defender.boosts}
                    evs={defender.evs}
                    game={game}
                    gender={defender.gender}
                    heldItem={defender.heldItem}
                    isTailwind={field.trainerSide.isTailwind}
                    ivs={defender.ivs}
                    level={defender.level}
                    moves={defender.moves}
                    nature={defender.nature}
                    onAbilityChange={handleDefenderAbilityChange}
                    onBoostChange={handleDefenderBoostChange}
                    onEvChange={handleDefenderEvChange}
                    onGenderChange={handleDefenderGenderChange}
                    onHeldItemChange={handleDefenderHeldItemChange}
                    onIvChange={handleDefenderIvChange}
                    onLevelChange={handleDefenderLevelChange}
                    onMoveChange={handleDefenderMoveChange}
                    onNatureChange={handleDefenderNatureChange}
                    onSpeciesChange={handleDefenderSpeciesChange}
                    onStatusChange={handleDefenderStatusChange}
                    placeholder={
                        effectiveSelectedBattle
                            ? undefined
                            : 'Select a battle above'
                    }
                    pokemonSlug={defenderDisplaySlug}
                    showEvs={showEvs}
                    speedComparison={trainerSpeedComparison}
                    status={defender.status}
                />
                <TeamSelectPanel
                    game={game}
                    onSelectMember={setSelectedMemberIndex}
                    run={run}
                    selectedBattle={effectiveSelectedBattle}
                    selectedMemberIndex={selectedMemberIndex}
                />
                <BattleSelectPanel
                    game={game}
                    onSelectBattle={onSelectBattle}
                    selectedBattle={effectiveSelectedBattle}
                />
            </div>
        </div>
    );
};

export default CalcTab;
