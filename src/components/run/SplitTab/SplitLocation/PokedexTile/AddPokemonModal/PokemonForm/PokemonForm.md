# PokemonForm

A form for recording the details of a Pokemon: its nature always, plus
species, level, ability, and moves when their respective `show*`/`lock*`
prop allows it. Species, ability, nature, and moves are chosen from a
`Dropdown` (species, ability, and moves are searchable). The ability
dropdown identifies an ability by its slot (1, 2, or hidden) rather than
its name, since a species can be re-selected across generations where
ability names at a given slot may differ. When `lockSpecies` is set, the
Pokemon field isn't rendered at all and `species` stays fixed at
`defaultSpecies`. None of the 4 move slots default to a value.
Submitting the form passes the selected values up. Used by
`AddPokemonModal` (all fields shown, species editable) when catching a
Pokemon and by `StarterSelectModal` (level, ability, and moves hidden,
defaulting to level 5 and the species' first ability slot; species field
omitted, fixed to the already-chosen starter) when configuring a chosen
starter.

## Props

| Prop             | Type                                                                                                     | Required | Default | Description                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------ |
| `allSpecies`     | `string[]`                                                                                               | Yes      | -       | Every species name offered in the Pokemon dropdown, ignored when `lockSpecies`       |
| `defaultLevel`   | `number`                                                                                                 | No       | -       | The level `level` defaults to, when `showLevel`; falls back to `1` if omitted        |
| `defaultSpecies` | `string`                                                                                                 | Yes      | -       | The species `species` defaults to (and stays fixed at, when `lockSpecies`)           |
| `generation`     | `number`                                                                                                 | Yes      | -       | The game's generation, used to resolve the selected species' abilities and learnset  |
| `lockSpecies`    | `boolean`                                                                                                | Yes      | -       | Whether to omit the Pokemon field, keeping `species` fixed at `defaultSpecies`       |
| `onSubmit`       | `(details: Pick<BattlePokemon, 'ability' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>) => void` | Yes      | -       | Called with the selected details when the form is submitted                          |
| `showAbility`    | `boolean`                                                                                                | Yes      | -       | Whether to show the Ability field; when hidden, `ability` stays at its default       |
| `showLevel`      | `boolean`                                                                                                | Yes      | -       | Whether to show the Level field; when hidden, `level` defaults to `5` instead of `1` |
| `showMoves`      | `boolean`                                                                                                | Yes      | -       | Whether to show the Moves field; when hidden, `moves` stays unselected               |
| `submitLabel`    | `string`                                                                                                 | Yes      | -       | The submit button's label                                                            |

## State

| State         | Type          | Initial value                                                     | Description                                                |
| ------------- | ------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| `species`     | `string`      | `defaultSpecies`'s canonical display name                         | The selected species                                       |
| `abilitySlot` | `AbilitySlot` | `1`                                                               | The selected ability's slot (1, 2, or hidden)              |
| `nature`      | `Nature`      | the first `Nature` value                                          | The selected nature                                        |
| `ivs`         | `StatValues`  | all stats at `31`                                                 | The selected IVs, per stat                                 |
| `level`       | `number`      | `defaultLevel` (or `1`) if `showLevel`, otherwise `5`             | The selected level                                         |
| `moves`       | `string[]`    | the moves `species` would know at `level`, per `getStartingMoves` | The selected moves, one per slot, empty meaning unselected |

## Computations

- `getStartingMoves` — the moves a given species would actually know at
  a given level, via `PokemonHelpers.getMovesAtLevel`, padded to fill
  every move slot; used to initialize `moves` and to repopulate it
  whenever species or level changes
- `speciesOptions` — `allSpecies` mapped into dropdown options, used
  only when `lockSpecies` is false
- `abilities` — the selected `species`' ability set at `generation`,
  resolved via `PokemonHelpers`
- `abilityOptions` — `abilities` flattened into dropdown options keyed by
  slot number, with each ability's slug deslugified into a title-cased
  label
- `natureOptions` — every `Nature` value mapped into dropdown options
- `learnset` — the selected `species`' learnset at `generation`,
  resolved via `PokemonHelpers`
- `moveOptions` — `learnset`'s move names deslugified via `MoveHelpers`,
  deduped, and sorted alphabetically, with a "None" option (empty value)
  prepended so a slot can be left or reset to unselected
- each move slot's options — `moveOptions` filtered to exclude moves
  selected in any other slot, so the same move can't be picked twice

## Handlers

- **On the Pokemon dropdown change** — sets `species`, resets
  `abilitySlot` to `1`, and resets `moves` to the new species' starting
  moves at the current `level` via `getStartingMoves` (only reachable
  when the field is rendered, i.e. `lockSpecies` is false)
- **On the ability dropdown change** — sets `abilitySlot`
- **On the nature dropdown change** — sets `nature`
- **On an IV input change** — sets that stat's value in `ivs`, clamped
  to `0`-`31`
- **On the level input change** — sets `level`, clamped to `1`-`100`,
  and resets `moves` to `species`' starting moves at the new level via
  `getStartingMoves`
- **On a move dropdown change** — sets that slot's value in `moves`
- **On form submit** — calls `onSubmit` with `ability` (`abilitySlot`),
  `ivs`, `level`, `moves` (empty slots filtered out), `name` (the
  selected `species`), and `nature`

## SCSS Variable Dependencies

- `--accent-color` — used to color the submit button, expected to be set
  by a parent `Modal`
