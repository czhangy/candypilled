# PokemonForm

A form for recording the details of a Pokémon: its nature and IVs always,
plus species, level, ability, moves, EVs, and tags when their respective
`show*`/`lock*` prop allows it. Species, ability, nature, and moves are
chosen from a `Dropdown` (species, ability, and moves are searchable);
tags are edited via a `TagInput`. The ability dropdown identifies an
ability by its slot (1, 2, or hidden) rather than its name, since a
species can be re-selected across generations where ability names at a
given slot may differ. When `lockSpecies` is set, the Pokémon field
isn't rendered at all and `species` stays fixed at `defaultSpecies`.
Each `default*` prop seeds its corresponding field's initial state,
falling back to a blank/default value when omitted; none of the 4 move
slots default to a value unless `defaultMoves` is passed. Submitting the
form passes the selected values up. Changing the Level field only
recalculates the Moves field's values when `recalculateMovesOnLevelChange`
is set. Used by `AddPokemonModal` (all fields but EVs and tags shown,
species editable, moves recalculated on level change) when catching a
Pokémon, by `StarterSelectModal` (level, ability, moves, EVs, and tags
hidden, defaulting to level 5 and the species' first ability slot;
species field omitted, fixed to the already-chosen starter) when
configuring a chosen starter, and by `EditPokemonModal` (all fields
including EVs and tags shown, species locked, every field seeded from
the Pokémon being edited, moves left untouched on level change) when
editing a caught Pokémon.

## Props

| Prop                            | Type                                                                                                                        | Required | Default | Description                                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `allSpecies`                    | `string[]`                                                                                                                  | Yes      | -       | Every species name offered in the Pokémon dropdown, ignored when `lockSpecies`         |
| `defaultAbilitySlot`            | `AbilitySlot`                                                                                                               | No       | -       | The slot `abilitySlot` defaults to; falls back to `1` if omitted                       |
| `defaultEvs`                    | `StatValues`                                                                                                                | No       | -       | The values `evs` defaults to; falls back to all stats at `0` if omitted                |
| `defaultIvs`                    | `StatValues`                                                                                                                | No       | -       | The values `ivs` defaults to; falls back to all stats at `31` if omitted               |
| `defaultLevel`                  | `number`                                                                                                                    | No       | -       | The level `level` defaults to, when `showLevel`; falls back to `1` if omitted          |
| `defaultMoves`                  | `string[]`                                                                                                                  | No       | -       | The values `moves` defaults to; falls back to `species`' starting moves if omitted     |
| `defaultNature`                 | `Nature`                                                                                                                    | No       | -       | The value `nature` defaults to; falls back to the first `Nature` value if omitted      |
| `defaultSpecies`                | `string`                                                                                                                    | Yes      | -       | The species `species` defaults to (and stays fixed at, when `lockSpecies`)             |
| `defaultTags`                   | `string[]`                                                                                                                  | No       | -       | The values `tags` defaults to, when `showTags`; falls back to an empty list if omitted |
| `disabledReason`                | `string`                                                                                                                    | Yes      | -       | Disables the submit button and shows this as its tooltip while non-empty               |
| `generation`                    | `number`                                                                                                                    | Yes      | -       | The game's generation, used to resolve the selected species' abilities                 |
| `lockSpecies`                   | `boolean`                                                                                                                   | Yes      | -       | Whether to omit the Pokémon field, keeping `species` fixed at `defaultSpecies`         |
| `onSubmit`                      | `(details: Pick<CaughtPokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature' \| 'tags'>) => void` | Yes      | -       | Called with the selected details when the form is submitted                            |
| `recalculateMovesOnLevelChange` | `boolean`                                                                                                                   | Yes      | -       | Whether changing the Level field resets `moves` to the new level's starting moves      |
| `showAbility`                   | `boolean`                                                                                                                   | Yes      | -       | Whether to show the Ability field; when hidden, `ability` stays at its default         |
| `showEvs`                       | `boolean`                                                                                                                   | Yes      | -       | Whether to show the EVs field; when hidden, `evs` stays at its default                 |
| `showLevel`                     | `boolean`                                                                                                                   | Yes      | -       | Whether to show the Level field; when hidden, `level` defaults to `5` instead of `1`   |
| `showMoves`                     | `boolean`                                                                                                                   | Yes      | -       | Whether to show the Moves field; when hidden, `moves` stays unselected                 |
| `showTags`                      | `boolean`                                                                                                                   | Yes      | -       | Whether to show the Tags field; when hidden, `tags` stays at its default               |
| `submitLabel`                   | `string`                                                                                                                    | Yes      | -       | The submit button's label                                                              |
| `version`                       | `string`                                                                                                                    | Yes      | -       | The game's PokeAPI version group slug, used to resolve the selected species' learnset  |

## State

| State         | Type          | Initial value                                                                       | Description                                                |
| ------------- | ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `species`     | `string`      | `defaultSpecies`'s canonical display name                                           | The selected species                                       |
| `abilitySlot` | `AbilitySlot` | `defaultAbilitySlot`, or `1`                                                        | The selected ability's slot (1, 2, or hidden)              |
| `nature`      | `Nature`      | `defaultNature`, or the first `Nature` value                                        | The selected nature                                        |
| `ivs`         | `StatValues`  | `defaultIvs`, or all stats at `31`                                                  | The selected IVs, per stat                                 |
| `evs`         | `StatValues`  | `defaultEvs`, or all stats at `0`                                                   | The selected EVs, per stat                                 |
| `level`       | `number`      | `defaultLevel` (or `1`) if `showLevel`, otherwise `5`                               | The selected level                                         |
| `moves`       | `string[]`    | `defaultMoves`, or the moves `species` would know at `level` via `getStartingMoves` | The selected moves, one per slot, empty meaning unselected |
| `tags`        | `string[]`    | `defaultTags`, or `[]`                                                              | The selected tags                                          |

## Computations

- `getStartingMoves` — the moves a given species would actually know at
  a given level, via `PokemonHelpers.getMovesAtLevel`, padded to fill
  every move slot; used to initialize `moves` (when `defaultMoves` isn't
  passed) and to repopulate it whenever species or level changes
- `speciesOptions` — `allSpecies` mapped into dropdown options, used
  only when `lockSpecies` is false
- `abilities` — the selected `species`' ability set at `generation`,
  resolved via `PokemonHelpers`
- `abilityOptions` — `abilities` flattened into dropdown options keyed by
  slot number, with each ability's slug deslugified into a title-cased
  label
- `natureOptions` — every `Nature` value mapped into dropdown options
- `learnset` — the selected `species`' learnset in `version`, resolved
  via `PokemonHelpers`
- `moveOptions` — `learnset`'s move names deslugified via `MoveHelpers`,
  deduped, and sorted alphabetically, with a "None" option (empty value)
  prepended so a slot can be left or reset to unselected
- each move slot's options — `moveOptions` filtered to exclude moves
  selected in any other slot, so the same move can't be picked twice

## Handlers

- **On the Pokémon dropdown change** — sets `species`, resets
  `abilitySlot` to `1`, and resets `moves` to the new species' starting
  moves at the current `level` via `getStartingMoves` (only reachable
  when the field is rendered, i.e. `lockSpecies` is false)
- **On the ability dropdown change** — sets `abilitySlot`
- **On the nature dropdown change** — sets `nature`
- **On an IV input change** — sets that stat's value in `ivs`, clamped
  to `0`-`31`
- **On an EV input change** — sets that stat's value in `evs`, clamped
  to `0`-`252`
- **On the level input change** — sets `level`, clamped to `1`-`100`,
  and, when `recalculateMovesOnLevelChange`, resets `moves` to `species`'
  starting moves at the new level via `getStartingMoves`
- **On a move dropdown change** — sets that slot's value in `moves`
- **On the `TagInput` change** — sets `tags`
- **On form submit** — calls `onSubmit` with `ability` (`abilitySlot`),
  `evs`, `ivs`, `level`, `moves` (empty slots filtered out), `name` (the
  selected `species`), `nature`, and `tags`

## SCSS Variable Dependencies

- `--accent-color` — used to color the submit button, expected to be set
  by a parent `Modal`
- `--button-text-color` — used to color the submit button's text, falling
  back to the default background color if not set by a parent `Modal`
