# AddPokemonModal

A modal form for recording the details of a Pokemon as it's caught: its
species, level, ability, nature, up to 4 moves, and IVs, each chosen
from a `Dropdown` (species, ability, nature, and moves are searchable).
None of the 4 move slots default to a value. Submitting the form passes
the selected values up and closes the modal.

## Props

| Prop             | Type                                                                                                     | Required | Default | Description                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| `accentColor`    | `string`                                                                                                 | No       | -       | The game's accent color, forwarded to `Modal`                                       |
| `allSpecies`     | `string[]`                                                                                               | Yes      | -       | Every catchable species name, offered in the Pokemon dropdown                       |
| `defaultSpecies` | `string`                                                                                                 | Yes      | -       | The species the Pokemon dropdown defaults to                                        |
| `generation`     | `number`                                                                                                 | Yes      | -       | The game's generation, used to resolve the selected species' abilities and learnset |
| `onClose`        | `() => void`                                                                                             | Yes      | -       | Called when the modal requests to close                                             |
| `onSubmit`       | `(details: Pick<BattlePokemon, 'ability' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>) => void` | Yes      | -       | Called with the selected details when the form is submitted                         |

## State

| State     | Type         | Initial value                                    | Description                                                |
| --------- | ------------ | ------------------------------------------------ | ---------------------------------------------------------- |
| `species` | `string`     | `defaultSpecies`'s canonical display name        | The selected species                                       |
| `ability` | `string`     | `defaultSpecies`'s first ability at `generation` | The selected ability                                       |
| `nature`  | `Nature`     | the first `Nature` value                         | The selected nature                                        |
| `ivs`     | `StatValues` | all stats at `31`                                | The selected IVs, per stat                                 |
| `level`   | `number`     | `1`                                              | The selected level                                         |
| `moves`   | `string[]`   | 4 empty strings                                  | The selected moves, one per slot, empty meaning unselected |

## Computations

- `speciesOptions` — `allSpecies` mapped into dropdown options
- `abilities` — the selected `species`' ability set at `generation`,
  resolved via `PokemonHelpers`
- `abilityOptions` — `abilities` flattened into dropdown options, with
  each ability's slug deslugified into a title-cased label
- `natureOptions` — every `Nature` value mapped into dropdown options
- `learnset` — the selected `species`' learnset at `generation`,
  resolved via `PokemonHelpers`
- `moveOptions` — `learnset`'s move names deslugified via `MoveHelpers`,
  deduped, and sorted alphabetically, with a "None" option (empty value)
  prepended so a slot can be left or reset to unselected
- each move slot's options — `moveOptions` filtered to exclude moves
  selected in any other slot, so the same move can't be picked twice

## Handlers

- **On the Pokemon dropdown change** — sets `species`, resets `ability`
  to the new species' first ability at `generation`, and clears all 4
  `moves` slots, since both options lists depend on `species`
- **On the ability dropdown change** — sets `ability`
- **On the nature dropdown change** — sets `nature`
- **On an IV input change** — sets that stat's value in `ivs`, clamped
  to `0`-`31`
- **On the level input change** — sets `level`, clamped to `1`-`100`
- **On a move dropdown change** — sets that slot's value in `moves`
- **On form submit** — calls `onSubmit` with `ability`, `ivs`, `level`,
  `moves` (empty slots filtered out), `name` (the selected `species`),
  and `nature`
