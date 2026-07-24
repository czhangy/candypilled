# CalcTab

The "Calc" tab of a run page. A damage calculator: a `DamageResultsPanel`
spanning the top showing both sides' move damage ranges, above three
columns — the attacker column (`PokemonPanel` above `BoxSelectPanel`,
sourced from the run's box), `FieldEffectsPanel` (weather/terrain/gravity
and each side's screens/hazards) in the middle, and the defender column
(`BattleSelectPanel` above `TrainerPokemonPanel` above `TeamSelectPanel`,
sourced from the game's trainers). Owns all editable calculator state — the
attacker's and defender's ability/nature/level/IVs/EVs/boosts/status/moves
via two reducers, the field effects state, plus the box/battle/team-member
selection state that flows down to every panel. `PokemonPanel` and
`TrainerPokemonPanel` are fully controlled by this state; they hold none of
it themselves.

## Props

| Prop             | Type                          | Required | Default | Description                                                               |
| ---------------- | ----------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| `game`           | `Game`                        | Yes      | -       | The current game, passed through to every panel                           |
| `onSelectBattle` | `(battleKey: string) => void` | Yes      | -       | Called with the selected battle's key, forwarded from `BattleSelectPanel` |
| `run`            | `Run`                         | Yes      | -       | The current run, passed through to every panel except `BattleSelectPanel` |
| `selectedBattle` | `string`                      | No       | -       | The currently selected battle key, driven by the `battle` query param     |

## State

State lives in two `useReducer`s (`AttackerState`/`AttackerAction` and
`DefenderState`/`DefenderAction`, declared locally) since selecting a new
Pokémon transitions every mutable field for that side together as one
atomic load, plus three `useState`s for selection.

| State                 | Type                  | Initial value                         | Description                                                                     |
| --------------------- | --------------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| `selectedLocation`    | `string`              | first living box Pokémon's location   | The selected box Pokémon's location, set by `BoxSelectPanel`                    |
| `selectedMemberIndex` | `string`              | `'0'`                                 | The selected trainer team member's index, set by `TeamSelectPanel`              |
| `prevSelectedBattle`  | `string \| undefined` | `selectedBattle` or the first trainer | Tracks the last-seen effective battle key, used to detect changes during render |
| `attacker`            | `AttackerState`       | blank                                 | The attacker's ability/nature/level/IVs/EVs/boosts/status/moves                 |
| `defender`            | `DefenderState`       | blank                                 | The defender's ability/boosts/status                                            |

`selectedMemberIndex` is reset to `'0'` during render whenever the effective
selected battle changes (React's "adjusting state when a prop changes"
pattern — compares against `prevSelectedBattle` and calls `setState`
directly in the render body rather than in a `useEffect`).

## Effects

- **On `caught` changing** — dispatches `LOAD` (seeded from the newly
  selected box Pokémon's ability slot/nature/level/IVs/EVs/moves) or `CLEAR`
  if no Pokémon is selected, on the attacker reducer
- **On `mon` changing** — dispatches `LOAD` (seeded from the newly selected
  team member's ability slot) or `RESET` if no team member is selected, on
  the defender reducer

## Computations

- `hideEvs` — the global "Hide EVs" setting, read via `SettingsHelpers`
- `effectiveSelectedBattle` — `selectedBattle`, falling back to the first
  trainer in game order whenever the URL hasn't recorded an explicit
  selection yet
- `caught` / `mon` — the selected box Pokémon and trainer team member,
  resolved once here and passed down to `PokemonPanel`/`TrainerPokemonPanel`
- `playerInput` / `trainerInput` — each side's `CalcPokemonInput` snapshot
  (species/level/nature/IVs/EVs/ability/boosts/status), passed to
  `DamageResultsPanel` for damage calculation; `null` when no Pokémon is
  selected on that side
- `playerSpeed` / `trainerSpeed` — each side's final Speed stat (adjusted
  by that side's Speed stage boost via `StatHelpers.applyBoost`, then
  doubled when that side's Tailwind is active), used only to derive
  `playerSpeedComparison`/`trainerSpeedComparison`
- `playerSpeedComparison` / `trainerSpeedComparison` — each side's
  `SpeedComparison` against the other (`'faster'`/`'slower'`/`'tie'`, or
  `undefined` if either side's speed can't be resolved), passed to
  `PokemonPanel`/`TrainerPokemonPanel` for their `StatsTable`'s Speed
  highlight
