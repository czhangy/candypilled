import { useEffect, useMemo, useReducer } from 'react';
import {
    Game,
    LineBattle,
    LinePlan,
    LinePokemon,
    LinePosition,
    LineSide,
    LineSlot,
    LineSlotFlag,
    LineTarget,
    LineTurn,
    Run,
} from '@/lib/static/types';
import LineExportHelpers from '@/lib/utils/LineExportHelpers';
import LineHelpers from '@/lib/utils/LineHelpers';
import NotesHelpers from '@/lib/utils/NotesHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './LineBuilder.module.scss';
import PrepSection from './PrepSection/PrepSection';
import TurnCard from './TurnCard/TurnCard';

type LineBuilderProps = {
    game: Game;
    onSelectBattle: (battleKey: string) => void;
    run: Run;
    selectedBattle: string | undefined;
};

const LineBuilder: React.FC<LineBuilderProps> = ({
    game,
    onSelectBattle,
    run,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MAX_PLAYER_POKEMON = 6;

    type LineState = {
        // What the selected battle provides: the slot count and the fixed
        // Pokémon (the opposing team and any NPC ally), which aren't picked.
        battle: LineBattle;
        // Only the player's own picks.
        playerPokemon: LinePokemon[];
        turns: LineTurn[];
    };

    // Everything that targets one slot of one turn.
    type SlotAction = { turnIndex: number; side: LineSide; slot: number };

    type LineBuilderAction =
        | { type: 'TOGGLE_POKEMON'; pokemon: LinePokemon }
        | { type: 'MOVE_POKEMON'; id: string; offset: -1 | 1 }
        | { type: 'SET_POKEMON_HP'; id: string; currentHp: number }
        | {
              type: 'SET_POKEMON_ITEM';
              id: string;
              heldItem: string | undefined;
              slug: string;
          }
        | { type: 'SET_POKEMON_STATUS'; id: string; status: string }
        | { type: 'ADD_TURN' }
        | { type: 'CLEAR_TURN'; turnIndex: number }
        | { type: 'SET_TURN_TEXT'; turnIndex: number; text: string }
        | { type: 'TOGGLE_TURN_RISKY'; turnIndex: number }
        | {
              type: 'MOVE_TURN_ACTION';
              turnIndex: number;
              position: LinePosition;
              offset: -1 | 1;
          }
        | ({ type: 'TOGGLE_TURN_FLAG'; flag: LineSlotFlag } & SlotAction)
        | ({ type: 'SET_TURN_POKEMON'; pokemon: LinePokemon } & SlotAction)
        | ({ type: 'CLEAR_TURN_POKEMON' } & SlotAction)
        | ({ type: 'SET_TURN_APPLIED_STATUS'; status: string } & SlotAction)
        | ({ type: 'SET_TURN_MOVE'; move: string | undefined } & SlotAction)
        | ({
              type: 'SET_TURN_TARGET';
              target: LineTarget;
          } & SlotAction);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The plan saved in this battle's note, if there is one and it matches
    // the box and the battle exactly. Otherwise nothing is restored.
    const getSavedPlan = (battle: LineBattle): LinePlan | undefined => {
        const plan = selectedBattle
            ? NotesHelpers.getPlan(game, selectedBattle)
            : undefined;
        if (!plan) return undefined;

        const pickSlot = LineHelpers.getPickSlot(battle);
        const saved = LineExportHelpers.parseExportText(
            game,
            plan,
            LineHelpers.getBoxPokemonList(game, run.caughtPokemon).map(
                (pokemon) => ({ ...pokemon, boundSlot: pickSlot })
            ),
            battle
        );
        return saved && saved.playerPokemon.length <= MAX_PLAYER_POKEMON
            ? saved
            : undefined;
    };

    const getInitialState = (battle: LineBattle): LineState => {
        const saved = getSavedPlan(battle);

        return {
            battle,
            playerPokemon: saved?.playerPokemon ?? [],
            turns: saved?.turns ?? [LineHelpers.getOpeningTurn(battle, [])],
        };
    };

    // Clears the line back to a fresh turn 1 with the new leads whenever the
    // player's leads differ from the ones in `previous`, discarding every
    // later turn just like clearing turn 1.
    const resetFirstTurnOnLeadChange = (
        previous: LineState,
        next: LineState
    ): LineState => {
        const leadsOf = (state: LineState): string =>
            LineHelpers.getOpeningTurn(state.battle, state.playerPokemon)
                .player.map((slot) => slot.pokemonId)
                .join();
        if (leadsOf(previous) === leadsOf(next)) return next;

        return {
            ...next,
            turns: [
                LineHelpers.getOpeningTurn(next.battle, next.playerPokemon),
            ],
        };
    };

    const updatePlayerPokemon = (
        state: LineState,
        id: string,
        update: (pokemon: LinePokemon) => LinePokemon
    ): LineState => ({
        ...state,
        playerPokemon: state.playerPokemon.map((pokemon) =>
            pokemon.id === id ? update(pokemon) : pokemon
        ),
    });

    const updateTurn = (
        state: LineState,
        turnIndex: number,
        update: (turn: LineTurn) => LineTurn
    ): LineState => ({
        ...state,
        turns: state.turns.map((turn, index) =>
            index === turnIndex ? update(turn) : turn
        ),
    });

    // turn with each of side's slots replaced by update(slot, index).
    const mapSide = (
        turn: LineTurn,
        side: LineSide,
        update: (slot: LineSlot, index: number) => LineSlot
    ): LineTurn => ({ ...turn, [side]: turn[side].map(update) });

    const updateSlot = (
        state: LineState,
        { side, slot, turnIndex }: SlotAction,
        update: (slot: LineSlot) => LineSlot
    ): LineState =>
        updateTurn(state, turnIndex, (turn) =>
            mapSide(turn, side, (candidate, index) =>
                index === slot ? update(candidate) : candidate
            )
        );

    // Every Pokémon with `flag` set in a turn before turnIndex.
    const getFlaggedIds = (
        turns: LineTurn[],
        turnIndex: number,
        flag: LineSlotFlag
    ): string[] =>
        turns
            .slice(0, turnIndex)
            .flatMap(LineHelpers.getTurnSlots)
            .flatMap(({ slot }) =>
                slot[flag] && slot.pokemonId ? [slot.pokemonId] : []
            );

    // The roster as it stands going into turnIndex: any item cleared in an
    // earlier turn is gone, and each status follows what earlier turns
    // cleared or applied, in order. Within a turn, clears apply before
    // applications.
    const getTurnRoster = (turnIndex: number): LinePokemon[] => {
        const itemClearedIds = getFlaggedIds(
            line.turns,
            turnIndex,
            'isItemCleared'
        );
        const statuses: Record<string, string> = Object.fromEntries(
            roster.map((pokemon) => [pokemon.id, pokemon.status])
        );
        line.turns.slice(0, turnIndex).forEach((turn) => {
            const slots = LineHelpers.getTurnSlots(turn);
            slots.forEach(({ slot }) => {
                if (slot.isStatusCleared && slot.pokemonId) {
                    statuses[slot.pokemonId] = '';
                }
            });
            slots.forEach(({ slot }) => {
                if (slot.appliedStatus && slot.pokemonId) {
                    statuses[slot.pokemonId] = slot.appliedStatus;
                }
            });
        });

        return roster.map((pokemon) => ({
            ...pokemon,
            heldItem: itemClearedIds.includes(pokemon.id)
                ? undefined
                : pokemon.heldItem,
            status: statuses[pokemon.id],
        }));
    };

    const reduceLine = (
        state: LineState,
        action: LineBuilderAction
    ): LineState => {
        switch (action.type) {
            case 'TOGGLE_POKEMON': {
                const { id } = action.pokemon;
                const blankPokemon = (slots: LineSlot[]): LineSlot[] =>
                    slots.map((slot) =>
                        slot.pokemonId === id
                            ? LineHelpers.getBlankSlot()
                            : slot
                    );

                // Removing a Pokémon also takes it off the field in every
                // turn, along with the move it was using.
                if (
                    state.playerPokemon.some((candidate) => candidate.id === id)
                ) {
                    return resetFirstTurnOnLeadChange(state, {
                        ...state,
                        playerPokemon: state.playerPokemon.filter(
                            (candidate) => candidate.id !== id
                        ),
                        turns: state.turns.map((turn) => ({
                            ...turn,
                            player: blankPokemon(turn.player),
                            trainer: blankPokemon(turn.trainer),
                        })),
                    });
                }

                if (state.playerPokemon.length >= MAX_PLAYER_POKEMON) {
                    return state;
                }
                return resetFirstTurnOnLeadChange(state, {
                    ...state,
                    playerPokemon: [
                        ...state.playerPokemon,
                        {
                            ...action.pokemon,
                            boundSlot: LineHelpers.getPickSlot(state.battle),
                        },
                    ],
                });
            }
            // Reordering the team clears turn 1 (and so every later turn) back
            // to the new leads.
            case 'MOVE_POKEMON': {
                const from = state.playerPokemon.findIndex(
                    (pokemon) => pokemon.id === action.id
                );
                const to = from + action.offset;
                if (from === -1 || to < 0 || to >= state.playerPokemon.length) {
                    return state;
                }

                const reordered = [...state.playerPokemon];
                [reordered[from], reordered[to]] = [
                    reordered[to],
                    reordered[from],
                ];
                return {
                    ...state,
                    playerPokemon: reordered,
                    turns: [
                        LineHelpers.getOpeningTurn(state.battle, reordered),
                    ],
                };
            }
            case 'SET_POKEMON_HP':
                return updatePlayerPokemon(state, action.id, (pokemon) => ({
                    ...pokemon,
                    currentHp: action.currentHp,
                }));
            // The item can change which form the Pokémon displays as.
            case 'SET_POKEMON_ITEM':
                return updatePlayerPokemon(state, action.id, (pokemon) => ({
                    ...pokemon,
                    heldItem: action.heldItem,
                    slug: action.slug,
                }));
            case 'SET_POKEMON_STATUS':
                return updatePlayerPokemon(state, action.id, (pokemon) => ({
                    ...pokemon,
                    status: action.status,
                }));
            // A new turn starts with the previous turn's Pokémon still on
            // the field (unless they were KO'd), but with no moves chosen yet.
            case 'ADD_TURN': {
                const previous = state.turns[state.turns.length - 1];
                const carryOver = (slots: LineSlot[]): LineSlot[] =>
                    slots.map((slot) => ({
                        ...LineHelpers.getBlankSlot(),
                        pokemonId: slot.isKo ? undefined : slot.pokemonId,
                    }));

                return {
                    ...state,
                    turns: [
                        ...state.turns,
                        {
                            ...LineHelpers.getBlankTurn(state.battle.slotCount),
                            player: carryOver(previous.player),
                            trainer: carryOver(previous.trainer),
                        },
                    ],
                };
            }
            // Clearing a turn removes it and every turn after it, since later
            // turns plan from the state it leaves behind. Turn 1 can't be
            // removed, so it resets to the leads instead.
            case 'CLEAR_TURN':
                return {
                    ...state,
                    turns:
                        action.turnIndex === 0
                            ? [
                                  LineHelpers.getOpeningTurn(
                                      state.battle,
                                      state.playerPokemon
                                  ),
                              ]
                            : state.turns.slice(0, action.turnIndex),
                };
            case 'SET_TURN_TEXT':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    text: action.text,
                }));
            case 'TOGGLE_TURN_RISKY':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    isRisky: !turn.isRisky,
                }));
            // Swaps the action with the one before or after it in the order.
            case 'MOVE_TURN_ACTION':
                return updateTurn(state, action.turnIndex, (turn) => {
                    const from = turn.order.indexOf(action.position);
                    const to = from + action.offset;
                    if (from === -1 || to < 0 || to >= turn.order.length) {
                        return turn;
                    }

                    const order = [...turn.order];
                    [order[from], order[to]] = [order[to], order[from]];
                    return { ...turn, order };
                });
            // Swapping in a different Pokémon drops the move the previous
            // one was using, since it may not know it. A Pokémon can't fill
            // a slot it's bound away from, or be in two slots at once.
            case 'SET_TURN_POKEMON':
                return updateTurn(state, action.turnIndex, (turn) => {
                    const slots = turn[action.side];
                    if (
                        !LineHelpers.canOccupy(action.pokemon, action.slot) ||
                        slots.some(
                            (slot) => slot.pokemonId === action.pokemon.id
                        )
                    ) {
                        return turn;
                    }

                    return mapSide(turn, action.side, (slot, index) =>
                        index === action.slot
                            ? {
                                  ...LineHelpers.getBlankSlot(),
                                  pokemonId: action.pokemon.id,
                              }
                            : slot
                    );
                });
            // A KO'd Pokémon can't be on the field in any later turn, so
            // KO-ing it also removes it from the ones it's already in.
            case 'TOGGLE_TURN_FLAG': {
                const flagged =
                    state.turns[action.turnIndex][action.side][action.slot];
                if (!flagged.pokemonId) return state;

                const isRemovedFromLaterTurns =
                    action.flag === 'isKo' && !flagged.isKo;
                return {
                    ...state,
                    turns: state.turns.map((turn, index) => {
                        if (index === action.turnIndex) {
                            return mapSide(turn, action.side, (slot, i) =>
                                i === action.slot
                                    ? {
                                          ...slot,
                                          [action.flag]: !slot[action.flag],
                                      }
                                    : slot
                            );
                        }
                        if (
                            isRemovedFromLaterTurns &&
                            index > action.turnIndex
                        ) {
                            return mapSide(turn, action.side, (slot) =>
                                slot.pokemonId === flagged.pokemonId
                                    ? LineHelpers.getBlankSlot()
                                    : slot
                            );
                        }
                        return turn;
                    }),
                };
            }
            case 'CLEAR_TURN_POKEMON':
                return updateSlot(state, action, () =>
                    LineHelpers.getBlankSlot()
                );
            case 'SET_TURN_MOVE':
                return updateSlot(state, action, (slot) => ({
                    ...slot,
                    move: action.move,
                }));
            case 'SET_TURN_TARGET':
                return updateSlot(state, action, (slot) => ({
                    ...slot,
                    target: action.target,
                }));
            case 'SET_TURN_APPLIED_STATUS':
                return updateSlot(state, action, (slot) => ({
                    ...slot,
                    appliedStatus: action.status,
                }));
        }
    };

    // Every action leaves each turn's move order and targets consistent with
    // who's on the field.
    const lineReducer = (
        state: LineState,
        action: LineBuilderAction
    ): LineState => {
        const next = reduceLine(state, action);
        return { ...next, turns: next.turns.map(LineHelpers.normalizeTurn) };
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const battle = useMemo(
        () =>
            LineHelpers.getBattle(
                game,
                selectedBattle,
                run.starter,
                run.gender
            ),
        [game, run.gender, run.starter, selectedBattle]
    );
    const [line, dispatchLine] = useReducer(
        lineReducer,
        battle,
        getInitialState
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const roster = [
        ...line.playerPokemon,
        ...line.battle.allyPokemon,
        ...line.battle.trainerPokemon,
    ];
    // Once every opposing Pokémon has been KO'd there's nothing left to plan.
    const koedIds = getFlaggedIds(line.turns, line.turns.length, 'isKo');
    const isEnemyDefeated = line.battle.trainerPokemon.every((pokemon) =>
        koedIds.includes(pokemon.id)
    );

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    // On the line changing — keeps this battle's note in step with it. A
    // line with nothing planned removes the plan from the note instead, so
    // a plan that couldn't be restored on load is deleted right away.
    useEffect(() => {
        if (!selectedBattle) return;

        const everyone = [
            ...line.playerPokemon,
            ...line.battle.allyPokemon,
            ...line.battle.trainerPokemon,
        ];
        const plan = LineExportHelpers.getExportText(
            game,
            everyone,
            line.turns
        );
        const blankPlan = LineExportHelpers.getExportText(
            game,
            everyone.filter((pokemon) => pokemon.isFixed),
            [LineHelpers.getOpeningTurn(line.battle, [])]
        );

        if (plan === blankPlan) {
            void NotesHelpers.deletePlan(game, selectedBattle);
        } else {
            void NotesHelpers.savePlan(game, selectedBattle, plan);
        }
    }, [game, line, selectedBattle]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTogglePokemon = (pokemon: LinePokemon): void => {
        dispatchLine({ type: 'TOGGLE_POKEMON', pokemon });
    };

    const handlePokemonHpChange = (id: string, currentHp: number): void => {
        dispatchLine({ type: 'SET_POKEMON_HP', id, currentHp });
    };

    const handlePokemonItemChange = (
        id: string,
        heldItem: string | undefined
    ): void => {
        const pokemon = line.playerPokemon.find(
            (candidate) => candidate.id === id
        );
        if (!pokemon) return;

        dispatchLine({
            type: 'SET_POKEMON_ITEM',
            id,
            heldItem,
            slug: PokemonHelpers.getDisplaySlug(game.dataSource, {
                heldItem,
                slug: pokemon.speciesSlug,
            }),
        });
    };

    const handlePokemonMove = (id: string, offset: -1 | 1): void => {
        dispatchLine({ type: 'MOVE_POKEMON', id, offset });
    };

    const handlePokemonStatusChange = (id: string, status: string): void => {
        dispatchLine({ type: 'SET_POKEMON_STATUS', id, status });
    };

    const handleAddTurn = (): void => {
        if (isEnemyDefeated) return;

        dispatchLine({ type: 'ADD_TURN' });
    };

    const handleTurnClear = (turnIndex: number): void => {
        dispatchLine({ type: 'CLEAR_TURN', turnIndex });
    };

    const handleTurnTextChange = (turnIndex: number, text: string): void => {
        dispatchLine({ type: 'SET_TURN_TEXT', turnIndex, text });
    };

    const handleTurnRiskyToggle = (turnIndex: number): void => {
        dispatchLine({ type: 'TOGGLE_TURN_RISKY', turnIndex });
    };

    const handleTurnActionMove = (
        turnIndex: number,
        position: LinePosition,
        offset: -1 | 1
    ): void => {
        dispatchLine({ type: 'MOVE_TURN_ACTION', turnIndex, position, offset });
    };

    const handleTurnFlagToggle = (
        turnIndex: number,
        side: LineSide,
        slot: number,
        flag: LineSlotFlag
    ): void => {
        dispatchLine({
            type: 'TOGGLE_TURN_FLAG',
            turnIndex,
            side,
            slot,
            flag,
        });
    };

    const handleTurnPokemonSelect = (
        turnIndex: number,
        side: LineSide,
        slot: number,
        pokemon: LinePokemon
    ): void => {
        dispatchLine({
            type: 'SET_TURN_POKEMON',
            turnIndex,
            side,
            slot,
            pokemon,
        });
    };

    const handleTurnPokemonClear = (
        turnIndex: number,
        side: LineSide,
        slot: number
    ): void => {
        dispatchLine({ type: 'CLEAR_TURN_POKEMON', turnIndex, side, slot });
    };

    const handleTurnAppliedStatusChange = (
        turnIndex: number,
        side: LineSide,
        slot: number,
        status: string
    ): void => {
        dispatchLine({
            type: 'SET_TURN_APPLIED_STATUS',
            turnIndex,
            side,
            slot,
            status,
        });
    };

    const handleTurnMoveChange = (
        turnIndex: number,
        side: LineSide,
        slot: number,
        move: string | undefined
    ): void => {
        dispatchLine({ type: 'SET_TURN_MOVE', turnIndex, side, slot, move });
    };

    const handleTurnTargetChange = (
        turnIndex: number,
        side: LineSide,
        slot: number,
        target: LineTarget
    ): void => {
        dispatchLine({
            type: 'SET_TURN_TARGET',
            turnIndex,
            side,
            slot,
            target,
        });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['line-builder']}>
            <PrepSection
                game={game}
                maxPlayerPokemon={MAX_PLAYER_POKEMON}
                onCurrentHpChange={handlePokemonHpChange}
                onHeldItemChange={handlePokemonItemChange}
                onMovePokemon={handlePokemonMove}
                onSelectBattle={onSelectBattle}
                onStatusChange={handlePokemonStatusChange}
                onTogglePokemon={handleTogglePokemon}
                playerPokemon={line.playerPokemon}
                run={run}
                selectedBattle={selectedBattle}
            />
            {line.turns.map((turn, index) => (
                <TurnCard
                    canAddTurn={
                        index === line.turns.length - 1 && !isEnemyDefeated
                    }
                    dataSource={game.dataSource}
                    isFirstTurn={index === 0}
                    key={index}
                    koedIds={getFlaggedIds(line.turns, index, 'isKo')}
                    onActionMove={(position: LinePosition, offset: -1 | 1) =>
                        handleTurnActionMove(index, position, offset)
                    }
                    onAddTurn={handleAddTurn}
                    onAppliedStatusChange={(
                        side: LineSide,
                        slot: number,
                        status: string
                    ) =>
                        handleTurnAppliedStatusChange(index, side, slot, status)
                    }
                    onClear={() => handleTurnClear(index)}
                    onFlagToggle={(
                        side: LineSide,
                        slot: number,
                        flag: LineSlotFlag
                    ) => handleTurnFlagToggle(index, side, slot, flag)}
                    onMoveChange={(
                        side: LineSide,
                        slot: number,
                        move: string | undefined
                    ) => handleTurnMoveChange(index, side, slot, move)}
                    onPokemonClear={(side: LineSide, slot: number) =>
                        handleTurnPokemonClear(index, side, slot)
                    }
                    onPokemonSelect={(
                        side: LineSide,
                        slot: number,
                        pokemon: LinePokemon
                    ) => handleTurnPokemonSelect(index, side, slot, pokemon)}
                    onRiskyToggle={() => handleTurnRiskyToggle(index)}
                    onTargetChange={(
                        side: LineSide,
                        slot: number,
                        target: LineTarget
                    ) => handleTurnTargetChange(index, side, slot, target)}
                    onTextChange={(text: string) =>
                        handleTurnTextChange(index, text)
                    }
                    pokemon={getTurnRoster(index)}
                    turn={turn}
                    turnNumber={index + 1}
                    variant={game.pokemonAssetFolder ?? game.version}
                />
            ))}
        </div>
    );
};

export default LineBuilder;
