# PokemonPanel

A compact panel for the damage calculator that displays/edits the currently
selected box Pokémon's battle-relevant details: species name and level in a
combined row, nature, ability, status condition, stat spread
(base/IV/EV/stage/total), and moves. The Pokémon itself is selected via
`BoxSelectPanel`, below — this panel only shows/edits whichever Pokémon that
selection currently points to.

## Props

| Prop               | Type     | Required | Default | Description                                                               |
| ------------------ | -------- | -------- | ------- | ------------------------------------------------------------------------- |
| `game`             | `Game`   | Yes      | -       | The current game; its `generation` resolves base stats/ability/move lists |
| `run`              | `Run`    | Yes      | -       | The current run, whose `caughtPokemon` resolves the selected Pokémon      |
| `selectedLocation` | `string` | No       | -       | The selected Pokémon's location, driven by `BoxSelectPanel`               |

## State

State lives in a single `useReducer` (`PanelState`/`PanelAction`, declared
locally) since selecting a different Pokémon transitions every mutable field
together as one atomic load.

| State         | Type                                              | Initial value  | Description                                  |
| ------------- | ------------------------------------------------- | -------------- | -------------------------------------------- |
| `abilityName` | `string`                                          | `''`           | Editable ability                             |
| `nature`      | `Nature`                                          | first `Nature` | Editable nature                              |
| `level`       | `number`                                          | `1`            | Editable level                               |
| `ivs`         | `StatValues`                                      | all `31`       | Editable IVs                                 |
| `evs`         | `StatValues`                                      | all `0`        | Editable EVs                                 |
| `boosts`      | `Record<Exclude<keyof StatValues, 'hp'>, number>` | all `0`        | Editable in-battle stat stage boosts (-6..6) |
| `status`      | `string`                                          | `''` (healthy) | Editable battle status condition             |
| `moves`       | `string[]`                                        | 4 empty slots  | Editable move names                          |

## Effects

- **On `caught` changing** — dispatches `LOAD` (seeded from the newly
  selected Pokémon's ability slot/nature/level/IVs/EVs/moves) or `CLEAR` if
  no Pokémon is selected; `caught` is derived from the `selectedLocation`
  prop, which this component doesn't control

## Computations

- `hideEvs` — the global "Hide EVs" setting, read via `SettingsHelpers`
- `caught` — the full caught Pokémon record matching `selectedLocation`
- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and the editable `level`/`ivs`/`evs`/`nature`
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities` (not restricted to the selected
  species, for freeform theorycrafting)
- `natureOptions` — every value of the `Nature` enum
- `moveOptions` — every move introduced at or before `game.generation`, via
  `MoveHelpers.getAllMoves` (not restricted to the selected species'
  learnset, for freeform theorycrafting)
