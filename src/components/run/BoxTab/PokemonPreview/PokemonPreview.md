# PokemonPreview

Displays every recorded attribute of the currently selected caught Pokemon:
a small sprite alongside its level, nature, ability, catch location, held
item, and tags (as a row of pills, when any are set), followed by its
calculated stats and a 2x2 grid of its moves.
Its ability and moves link out to their corresponding views in the
Abilities and Moves tabs. A button (labeled "Dead" or "Revive" depending
on current status) lets the Pokemon's status be toggled between alive
and dead. While viewing the box (not the graveyard), an "Edit" button
opens a modal for editing the Pokemon's recorded details, including its
EVs and tags. If the Pokemon can still evolve, an "Evolve" button below Edit opens
a confirmation modal, letting the user pick between multiple possible
evolutions if more than one exists. If the Pokemon's level exceeds the
current split's level cap, its level is highlighted red. Each stat
boosted by the Pokemon's nature is highlighted red, and each stat
hindered by it is highlighted blue.

## Props

| Prop              | Type                                                                                                                                                | Required | Default | Description                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ---------------------------------------------------------------------------------------- |
| `accentColor`     | `string`                                                                                                                                            | Yes      | -       | The game's accent color, passed through to `EditPokemonModal` and `EvolveModal`          |
| `buttonTextColor` | `string`                                                                                                                                            | No       | -       | The game's button text contrast color, passed through to `EditPokemonModal`              |
| `generation`      | `number`                                                                                                                                            | Yes      | -       | The game's generation, used to resolve each move's values and the Pokemon's base stats   |
| `levelCap`        | `number \| null`                                                                                                                                    | Yes      | -       | The current split's level cap, used to highlight an over-leveled Pokemon's level         |
| `onEdit`          | `(pokemon: CaughtPokemon, details: Pick<CaughtPokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature' \| 'tags'>) => void` | Yes      | -       | Called with the previewed Pokemon and its edited details when the edit form is submitted |
| `onEvolve`        | `(pokemon: CaughtPokemon, newName: string) => void`                                                                                                 | Yes      | -       | Called with the previewed Pokemon and its confirmed evolution's species name             |
| `onSelectAbility` | `(name: string) => void`                                                                                                                            | Yes      | -       | Called with the Pokemon's ability name when it's clicked                                 |
| `onSelectMove`    | `(name: string) => void`                                                                                                                            | Yes      | -       | Called with a move's name when it's clicked                                              |
| `onToggleStatus`  | `(pokemon: CaughtPokemon) => void`                                                                                                                  | Yes      | -       | Called with the previewed Pokemon when the status button is clicked                      |
| `pokemon`         | `CaughtPokemon`                                                                                                                                     | No       | -       | The currently selected caught Pokemon, if any                                            |
| `variant`         | `string`                                                                                                                                            | Yes      | -       | The game slug used to resolve the Pokemon's sprite art                                   |
| `view`            | `BoxView`                                                                                                                                           | Yes      | -       | The box tab's current view, used to only show the Edit button while viewing the box      |

## State

| State          | Type      | Initial value | Description                                   |
| -------------- | --------- | ------------- | --------------------------------------------- |
| `isEditOpen`   | `boolean` | `false`       | Whether the edit modal is open                |
| `isEvolveOpen` | `boolean` | `false`       | Whether the evolve confirmation modal is open |

## Computations

- `ability` — the selected ability's name, resolved from `pokemon.ability`
  (a slot number) via `PokemonHelpers.getAbilityName` at `generation`
- `moveSlots` — `pokemon.moves` padded to four entries so empty move slots
  render as placeholder cards
- `hideTradeEvos` — the global "Disable Trade Evolutions" setting's
  current value, read from `localStorage` via `SettingsHelpers`
- `nextEvolutions` — the species the previewed Pokemon can evolve into
  right now, via `EvolutionHelpers.getNextEvolutions` (empty, and the Evolve
  button hidden, if the Pokemon is dead or doesn't evolve further), further
  filtered to exclude trade-only evolutions (via
  `EvolutionHelpers.isTradeEvolution`) when `hideTradeEvos` is enabled
- `isOverCap` — whether the previewed Pokemon's `level` exceeds `levelCap`
- `stats` — the Pokemon's actual stat values, derived from its base stats,
  level, IVs, EVs, and nature via `StatHelpers.calculateStats`, with IVs and EVs
  normalized into a full `StatValues` via `StatHelpers.normalizeStats`
- `renderStatValues` — renders a Pokemon's calculated stats as a per-stat
  grid, highlighting each stat red or blue if the Pokemon's nature boosts
  or hinders it, via `NatureHelpers.getNatureModifier`
