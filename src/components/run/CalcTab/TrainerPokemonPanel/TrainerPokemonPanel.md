# TrainerPokemonPanel

The damage calculator's defender-side panel: displays/edits the currently
selected trainer team member's battle-relevant details, in a species name
and level row followed by nature, ability, status condition, and stat spread
(base/IV/EV/stage/total). The team member itself is selected via
`TeamSelectPanel`, below (which in turn depends on a trainer being selected
via `BattleSelectPanel`, above) — this panel only shows/edits whichever
Pokémon those selections currently point to. Nature, level, and IVs/EVs are
locked to the team member's actual data (only ability, status condition, and
stat stage boosts are editable). Does not show moves. Shows a placeholder
message until a battle is selected above.

## Props

| Prop                  | Type     | Required | Default | Description                                                                                         |
| --------------------- | -------- | -------- | ------- | --------------------------------------------------------------------------------------------------- |
| `game`                | `Game`   | Yes      | -       | The current game; `generation` resolves stats/abilities, used to resolve the selected battle's team |
| `run`                 | `Run`    | Yes      | -       | The current run, whose `starter` resolves a starter-dependent trainer's team (e.g. the rival)       |
| `selectedBattle`      | `string` | No       | -       | The currently selected battle key, driven by the `battle` query param (set by `BattleSelectPanel`)  |
| `selectedMemberIndex` | `string` | No       | -       | The selected team member's index into the resolved team, driven by `TeamSelectPanel`                |

## State

State lives in a single `useReducer` (`PanelState`/`PanelAction`, declared
locally) since selecting a team member transitions `abilityName`, `boosts`,
and `status` together as one atomic load.

| State         | Type                                              | Initial value  | Description                                                  |
| ------------- | ------------------------------------------------- | -------------- | ------------------------------------------------------------ |
| `abilityName` | `string`                                          | `''`           | Editable ability, seeded from the team member's ability slot |
| `boosts`      | `Record<Exclude<keyof StatValues, 'hp'>, number>` | all `0`        | Editable in-battle stat stage boosts (-6..6)                 |
| `status`      | `string`                                          | `''` (healthy) | Editable battle status condition                             |

## Effects

- **On `mon` changing** — dispatches `LOAD` (seeded from the newly selected
  team member's ability slot) or `RESET` if no team member is selected;
  `mon` is derived from the `selectedBattle`/`selectedMemberIndex` props,
  which this component doesn't control

## Computations

- `hideEvs` — the global "Hide EVs" setting, read via `SettingsHelpers`
- `team` — the selected battle's team, resolved via
  `BattleHelpers.getSelectedTeam(game, selectedBattle, run.starter)`
- `mon` — the selected team member (a `BattlePokemon`), or `undefined` until
  a team member is selected
- `ivs` / `evs` — `mon`'s IVs/EVs normalized for display, read-only (no
  corresponding state)
- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and `mon`'s fixed level/IVs/EVs/nature
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities`
