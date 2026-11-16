import { useEffect, useMemo, useReducer } from 'react';
import { LINE_SIDES } from '@/lib/static/constants';
import {
    Game,
    LinePlan,
    LinePokemon,
    LineSide,
    LineSlotFlag,
    LineTurn,
    Run,
} from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
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
        // Only the player's picks; the opposing team is always the whole
        // selected battle team, so it isn't state.
        playerPokemon: LinePokemon[];
        // The first opposing Pokémon, which always leads turn 1.
        trainerLeadId: string | undefined;
        turns: LineTurn[];
    };

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
              type: 'SET_TURN_PLAYER_FIRST';
              turnIndex: number;
              isPlayerFirst: boolean;
          }
        | {
              type: 'TOGGLE_TURN_FLAG';
              turnIndex: number;
              side: LineSide;
              flag: LineSlotFlag;
          }
        | { type: 'SET_TURN_POKEMON'; turnIndex: number; pokemon: LinePokemon }
        | { type: 'CLEAR_TURN_POKEMON'; turnIndex: number; side: LineSide }
        | {
              type: 'SET_TURN_APPLIED_STATUS';
              turnIndex: number;
              side: LineSide;
              status: string;
          }
        | {
              type: 'SET_TURN_MOVE';
              turnIndex: number;
              side: LineSide;
              move: string | undefined;
          };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The plan saved in this battle's note, if there is one and it matches
    // the box and the opposing team exactly. Otherwise nothing is restored.
    const getSavedPlan = (trainerTeam: LinePokemon[]): LinePlan | undefined => {
        const plan = selectedBattle
            ? NotesHelpers.getPlan(game, selectedBattle)
            : undefined;
        if (!plan) return undefined;

        const saved = LineExportHelpers.parseExportText(
            game,
            plan,
            LineHelpers.getBoxPokemonList(game, run.caughtPokemon),
            trainerTeam
        );
        return saved && saved.playerPokemon.length <= MAX_PLAYER_POKEMON
            ? saved
            : undefined;
    };

    const getInitialState = (trainerTeam: LinePokemon[]): LineState => {
        const trainerLeadId = trainerTeam[0]?.id;
        const saved = getSavedPlan(trainerTeam);

        return {
            playerPokemon: saved?.playerPokemon ?? [],
            trainerLeadId,
            turns: saved?.turns ?? [
                LineHelpers.getFirstTurn(undefined, trainerLeadId),
            ],
        };
    };

    // Clears the line back to a fresh turn 1 with the new leads whenever the
    // player's first Pokémon differs from the one in `previous`, discarding
    // every later turn just like clearing turn 1.
    const resetFirstTurnOnLeadChange = (
        previous: LineState,
        next: LineState
    ): LineState => {
        const leadId = next.playerPokemon[0]?.id;
        if (previous.playerPokemon[0]?.id === leadId) return next;

        return {
            ...next,
            turns: [LineHelpers.getFirstTurn(leadId, next.trainerLeadId)],
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

    // Every Pokémon with `flag` set in a turn before turnIndex.
    const getFlaggedIds = (
        turns: LineTurn[],
        turnIndex: number,
        flag: LineSlotFlag
    ): string[] =>
        turns
            .slice(0, turnIndex)
            .flatMap((turn) => [turn.player, turn.trainer])
            .flatMap((slot) =>
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
            LINE_SIDES.forEach((side) => {
                const { isStatusCleared, pokemonId } = turn[side];
                if (isStatusCleared && pokemonId) statuses[pokemonId] = '';
            });
            LINE_SIDES.forEach((side) => {
                const { appliedStatus, pokemonId } = turn[side];
                if (appliedStatus && pokemonId) {
                    statuses[pokemonId] = appliedStatus;
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

    const lineReducer = (
        state: LineState,
        action: LineBuilderAction
    ): LineState => {
        switch (action.type) {
            case 'TOGGLE_POKEMON': {
                const { id } = action.pokemon;

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
                            player:
                                turn.player.pokemonId === id
                                    ? LineHelpers.getBlankSlot()
                                    : turn.player,
                            trainer:
                                turn.trainer.pokemonId === id
                                    ? LineHelpers.getBlankSlot()
                                    : turn.trainer,
                        })),
                    });
                }

                if (state.playerPokemon.length >= MAX_PLAYER_POKEMON) {
                    return state;
                }
                return resetFirstTurnOnLeadChange(state, {
                    ...state,
                    playerPokemon: [...state.playerPokemon, action.pokemon],
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
                        LineHelpers.getFirstTurn(
                            reordered[0].id,
                            state.trainerLeadId
                        ),
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
            // the field (unless it was KO'd), but with no moves chosen yet.
            case 'ADD_TURN': {
                const previous = state.turns[state.turns.length - 1];
                return {
                    ...state,
                    turns: [
                        ...state.turns,
                        {
                            ...LineHelpers.getBlankTurn(),
                            player: {
                                ...LineHelpers.getBlankSlot(),
                                pokemonId: previous.player.isKo
                                    ? undefined
                                    : previous.player.pokemonId,
                            },
                            trainer: {
                                ...LineHelpers.getBlankSlot(),
                                pokemonId: previous.trainer.isKo
                                    ? undefined
                                    : previous.trainer.pokemonId,
                            },
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
                                  LineHelpers.getFirstTurn(
                                      state.playerPokemon[0]?.id,
                                      state.trainerLeadId
                                  ),
                              ]
                            : state.turns.slice(0, action.turnIndex),
                };
            case 'SET_TURN_TEXT':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    text: action.text,
                }));
            case 'SET_TURN_PLAYER_FIRST':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    isPlayerFirst: action.isPlayerFirst,
                }));
            case 'TOGGLE_TURN_RISKY':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    isRisky: !turn.isRisky,
                }));
            // Swapping in a different Pokémon drops the move the previous
            // one was using, since it may not know it.
            case 'SET_TURN_POKEMON':
                return updateTurn(state, action.turnIndex, (turn) =>
                    turn[action.pokemon.side].pokemonId === action.pokemon.id
                        ? turn
                        : {
                              ...turn,
                              [action.pokemon.side]: {
                                  ...LineHelpers.getBlankSlot(),
                                  pokemonId: action.pokemon.id,
                              },
                          }
                );
            // A KO'd Pokémon can't be on the field in any later turn, so
            // KO-ing it also removes it from the ones it's already in.
            case 'TOGGLE_TURN_FLAG': {
                const slot = state.turns[action.turnIndex][action.side];
                if (!slot.pokemonId) return state;

                const isRemovedFromLaterTurns =
                    action.flag === 'isKo' && !slot.isKo;
                return {
                    ...state,
                    turns: state.turns.map((turn, index) => {
                        if (index === action.turnIndex) {
                            return {
                                ...turn,
                                [action.side]: {
                                    ...slot,
                                    [action.flag]: !slot[action.flag],
                                },
                            };
                        }
                        if (
                            isRemovedFromLaterTurns &&
                            index > action.turnIndex &&
                            turn[action.side].pokemonId === slot.pokemonId
                        ) {
                            return {
                                ...turn,
                                [action.side]: LineHelpers.getBlankSlot(),
                            };
                        }
                        return turn;
                    }),
                };
            }
            case 'CLEAR_TURN_POKEMON':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    [action.side]: LineHelpers.getBlankSlot(),
                }));
            case 'SET_TURN_MOVE':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    [action.side]: { ...turn[action.side], move: action.move },
                }));
            case 'SET_TURN_APPLIED_STATUS':
                return updateTurn(state, action.turnIndex, (turn) => ({
                    ...turn,
                    [action.side]: {
                        ...turn[action.side],
                        appliedStatus: action.status,
                    },
                }));
        }
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const trainerTeam = useMemo(
        () =>
            BattleHelpers.getSelectedTeam(
                game,
                selectedBattle,
                run.starter,
                run.gender
            ).map((mon, index) =>
                LineHelpers.getTrainerPokemon(game, mon, index)
            ),
        [game, run.starter, run.gender, selectedBattle]
    );
    const [line, dispatchLine] = useReducer(
        lineReducer,
        trainerTeam,
        getInitialState
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const roster = [...line.playerPokemon, ...trainerTeam];
    // Once every opposing Pokémon has been KO'd there's nothing left to plan.
    const koedIds = getFlaggedIds(line.turns, line.turns.length, 'isKo');
    const isEnemyDefeated = roster
        .filter((pokemon) => pokemon.side === 'trainer')
        .every((pokemon) => koedIds.includes(pokemon.id));

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    // On the line changing — keeps this battle's note in step with it. A
    // line with nothing planned removes the plan from the note instead, so
    // a plan that couldn't be restored on load is deleted right away.
    useEffect(() => {
        if (!selectedBattle) return;

        const plan = LineExportHelpers.getExportText(
            game,
            [...line.playerPokemon, ...trainerTeam],
            line.turns
        );
        const blankPlan = LineExportHelpers.getExportText(game, trainerTeam, [
            LineHelpers.getFirstTurn(undefined, line.trainerLeadId),
        ]);

        if (plan === blankPlan) {
            void NotesHelpers.deletePlan(game, selectedBattle);
        } else {
            void NotesHelpers.savePlan(game, selectedBattle, plan);
        }
    }, [game, line, selectedBattle, trainerTeam]);

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

    const handleTurnPlayerFirstChange = (
        turnIndex: number,
        isPlayerFirst: boolean
    ): void => {
        dispatchLine({
            type: 'SET_TURN_PLAYER_FIRST',
            turnIndex,
            isPlayerFirst,
        });
    };

    const handleTurnClear = (turnIndex: number): void => {
        dispatchLine({ type: 'CLEAR_TURN', turnIndex });
    };

    const handleTurnFlagToggle = (
        turnIndex: number,
        side: LineSide,
        flag: LineSlotFlag
    ): void => {
        dispatchLine({ type: 'TOGGLE_TURN_FLAG', turnIndex, side, flag });
    };

    const handleTurnTextChange = (turnIndex: number, text: string): void => {
        dispatchLine({ type: 'SET_TURN_TEXT', turnIndex, text });
    };

    const handleTurnRiskyToggle = (turnIndex: number): void => {
        dispatchLine({ type: 'TOGGLE_TURN_RISKY', turnIndex });
    };

    const handleTurnPokemonSelect = (
        turnIndex: number,
        pokemon: LinePokemon
    ): void => {
        dispatchLine({ type: 'SET_TURN_POKEMON', turnIndex, pokemon });
    };

    const handleTurnPokemonClear = (
        turnIndex: number,
        side: LineSide
    ): void => {
        dispatchLine({ type: 'CLEAR_TURN_POKEMON', turnIndex, side });
    };

    const handleTurnAppliedStatusChange = (
        turnIndex: number,
        side: LineSide,
        status: string
    ): void => {
        dispatchLine({
            type: 'SET_TURN_APPLIED_STATUS',
            turnIndex,
            side,
            status,
        });
    };

    const handleTurnMoveChange = (
        turnIndex: number,
        side: LineSide,
        move: string | undefined
    ): void => {
        dispatchLine({ type: 'SET_TURN_MOVE', turnIndex, side, move });
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
                    onAddTurn={handleAddTurn}
                    onAppliedStatusChange={(side: LineSide, status: string) =>
                        handleTurnAppliedStatusChange(index, side, status)
                    }
                    onClear={() => handleTurnClear(index)}
                    onFlagToggle={(side: LineSide, flag: LineSlotFlag) =>
                        handleTurnFlagToggle(index, side, flag)
                    }
                    onMoveChange={(side: LineSide, move: string | undefined) =>
                        handleTurnMoveChange(index, side, move)
                    }
                    onPlayerFirstChange={(isPlayerFirst: boolean) =>
                        handleTurnPlayerFirstChange(index, isPlayerFirst)
                    }
                    onPokemonClear={(side: LineSide) =>
                        handleTurnPokemonClear(index, side)
                    }
                    onPokemonSelect={(pokemon: LinePokemon) =>
                        handleTurnPokemonSelect(index, pokemon)
                    }
                    onRiskyToggle={() => handleTurnRiskyToggle(index)}
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
