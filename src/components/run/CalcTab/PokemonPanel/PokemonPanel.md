# PokemonPanel

A compact panel for the damage calculator that selects a living Pokémon from
the run's box and displays/edits its battle-relevant details: nature,
ability, level, status condition, stat spread (base/IV/EV/stage/total), and
moves — all mutable, seeded from the selected Pokémon's caught data.

## Props

| Prop   | Type   | Required | Default | Description                                                               |
| ------ | ------ | -------- | ------- | ------------------------------------------------------------------------- |
| `game` | `Game` | Yes      | -       | The current game; its `generation` resolves base stats/ability/move lists |
| `run`  | `Run`  | Yes      | -       | The current run, whose living `caughtPokemon` populate the box dropdown   |

## State

| State              | Type                                              | Initial value  | Description                                                                 |
| ------------------ | ------------------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| `selectedLocation` | `string`                                          | `''`           | The selected caught Pokémon's location, the box dropdown's controlled value |
| `abilityName`      | `string`                                          | `''`           | Editable ability, seeded from the selection's caught ability slot           |
| `nature`           | `Nature`                                          | first `Nature` | Editable nature, seeded from the selection's caught nature                  |
| `level`            | `number`                                          | `1`            | Editable level, seeded from the selection's caught level                    |
| `ivs`              | `StatValues`                                      | all `31`       | Editable IVs, seeded from the selection's caught IVs                        |
| `evs`              | `StatValues`                                      | all `0`        | Editable EVs, seeded from the selection's caught EVs                        |
| `boosts`           | `Record<Exclude<keyof StatValues, 'hp'>, number>` | all `0`        | Editable in-battle stat stage boosts (-6..6), reset on selection change     |
| `status`           | `string`                                          | `''` (healthy) | Editable battle status condition                                            |
| `moves`            | `string[]`                                        | 4 empty slots  | Editable move names, seeded from the selection's caught moves               |

## Computations

- `hideEvs` — the global "Hide EVs" setting, read via `SettingsHelpers`; hides
  the EV column and inputs when enabled
- `livingPokemon` / `boxOptions` — `run.caughtPokemon` filtered to
  `PokemonStatus.Alive`, in box order, as dropdown options labeled by species
  name only
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

## Handlers

- `handleSelectPokemon` — sets `selectedLocation` and resets every mutable
  field (`abilityName`, `nature`, `level`, `ivs`, `evs`, `boosts`, `status`,
  `moves`) from the newly selected caught Pokémon's data; `abilityName` is
  seeded by resolving the caught ability slot to a slug via
  `PokemonHelpers.getAbilityName`, then to its display name via
  `AbilityHelpers.getAbilityData`
