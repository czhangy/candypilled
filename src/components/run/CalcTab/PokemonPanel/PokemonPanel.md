# PokemonPanel

A compact panel for the damage calculator that selects a living Pokémon from
the run's box and displays/edits its battle-relevant details: nature and
ability (immutable), level, status condition, stat spread (base/IV/EV/stage/
total), and moves (mutable).

## Props

| Prop   | Type   | Required | Default | Description                                                               |
| ------ | ------ | -------- | ------- | ------------------------------------------------------------------------- |
| `game` | `Game` | Yes      | -       | The current game; its `generation` resolves base stats/ability/move lists |
| `run`  | `Run`  | Yes      | -       | The current run, whose living `caughtPokemon` populate the box dropdown   |

## State

| State              | Type                                              | Initial value  | Description                                                                 |
| ------------------ | ------------------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| `selectedLocation` | `string`                                          | `''`           | The selected caught Pokémon's location, the box dropdown's controlled value |
| `level`            | `number`                                          | `1`            | Editable level, seeded from the selection's caught level                    |
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
- `baseStats` / `ivs` / `totalStats` — base stats and IVs resolved via
  `PokemonHelpers`/`StatHelpers` for `game.generation`; totals computed via
  `StatHelpers.calculateStats` from base stats, the editable `level`, `ivs`,
  editable `evs`, and the caught Pokémon's (immutable) nature
- `abilitySlug` / `abilityName` — the ability slot resolved to a slug via
  `PokemonHelpers.getAbilityName`, then looked up in `AbilityHelpers.getAbilityData`
  for its curated display name; immutable
- `learnset` / `learnsetMoveNames` / `moveOptions` — the selected Pokémon's
  full learnset for `game.version` (not just level-up moves, matching
  `PokemonForm`'s move dropdown), deduped and sorted; each move slot only
  offers moves the Pokémon can actually learn in this game

## Handlers

- `handleSelectPokemon` — sets `selectedLocation` and resets every mutable
  field (`level`, `evs`, `boosts`, `status`, `moves`) from the newly selected
  caught Pokémon's data
