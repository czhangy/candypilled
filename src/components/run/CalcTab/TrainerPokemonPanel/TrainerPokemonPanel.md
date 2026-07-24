# TrainerPokemonPanel

The damage calculator's defender-side panel: selects one member of the
currently selected trainer's team (via `BattleSelectPanel`, above), and
displays/edits its battle-relevant details. Mirrors `PokemonPanel`, but
sourced from the game's trainers instead of the run's box, with nature,
level, and IVs/EVs locked to the selected team member's actual data (only
ability, status condition, and stat stage boosts are editable). Does not
show moves. Shows a placeholder message until a battle is selected above.

## Props

| Prop             | Type     | Required | Default | Description                                                                                        |
| ---------------- | -------- | -------- | ------- | -------------------------------------------------------------------------------------------------- |
| `game`           | `Game`   | Yes      | -       | The current game; its `splits` enumerate every trainer, `generation` resolves stats/abilities      |
| `run`            | `Run`    | Yes      | -       | The current run, whose `starter` resolves a starter-dependent trainer's team (e.g. the rival)      |
| `selectedBattle` | `string` | No       | -       | The currently selected battle key, driven by the `battle` query param (set by `BattleSelectPanel`) |

## State

State lives in a single `useReducer` (`PanelState`/`PanelAction`, declared
locally) since selecting a team member transitions `abilityName`, `boosts`,
and `status` together as one atomic reset.

| State                 | Type                                              | Initial value  | Description                                                          |
| --------------------- | ------------------------------------------------- | -------------- | -------------------------------------------------------------------- |
| `selectedMemberIndex` | `string`                                          | `''`           | The selected team member's index into the resolved team, as a string |
| `abilityName`         | `string`                                          | `''`           | Editable ability, seeded from the selected member's ability slot     |
| `boosts`              | `Record<Exclude<keyof StatValues, 'hp'>, number>` | all `0`        | Editable in-battle stat stage boosts (-6..6)                         |
| `status`              | `string`                                          | `''` (healthy) | Editable battle status condition                                     |

## Effects

- **On `selectedBattle` changing** — dispatches `RESET`, since the
  previously selected team member/ability/status/boosts no longer apply to
  the newly selected trainer (`selectedBattle` is an external prop driven by
  the URL, not state this component controls)

## Computations

- `hideEvs` — the global "Hide EVs" setting, read via `SettingsHelpers`
- `selectedBattleObj` — the `Battle` matching `selectedBattle`, resolved via
  `BattleHelpers.getAllBattles(game)`
- `team` / `teamOptions` — `selectedBattleObj`'s resolved team via
  `BattleHelpers.getTeamFromOptions(battle, run.starter)`, as dropdown
  options labeled by species name only
- `mon` — the selected team member (a `BattlePokemon`), or `undefined` until
  a team member is selected
- `ivs` / `evs` — `mon`'s IVs/EVs normalized for display, read-only (no
  corresponding state)
- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and `mon`'s fixed level/IVs/EVs/nature
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities`

## Handlers

- `handleSelectMember` — dispatches `SELECT_MEMBER` with the chosen index and
  an `abilityName` seeded from the team member's ability slot (resolved via
  `PokemonHelpers.getAbilityName` then `AbilityHelpers.getAbilityData`)
- `handleAbilityChange` / `handleStatusChange` / `handleBoostChange` —
  dispatch their respective `SET_*` actions
