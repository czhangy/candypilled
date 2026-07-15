# PokedexTile

Displays details for a single Pokemon, split into a left half
showing its sprite, name, and type badges, and a right half divided
into an upper section (two-thirds height) listing its abilities and
a lower section (one-third height) showing its catch rate. Below
that split, a full-width button lets the selected Pokemon be marked
as caught. Below that, a full-width section shows the Pokemon's evolution line,
or a "No evolution line" message for species with no evolutions, and
below that, a full-width section shows its base stats as a horizontal
bar chart. A final full-width section holds two tabs, "Learnset" and
"Locations": clicking either tab's label switches the content below
between the species' learnset (each move's name clickable to view it
elsewhere) and every wild location it can be found in, sorted by minimum
encounter level. Used alongside an encounter table to show whichever
Pokemon is currently selected. If no Pokemon is selected, a placeholder
message is shown instead.

## Props

| Prop              | Type                        | Required | Default | Description                                                |
| ----------------- | --------------------------- | -------- | ------- | ---------------------------------------------------------- |
| `game`            | `Game`                      | Yes      | -       | The game the run belongs to, for looking up wild locations |
| `generation`      | `number`                    | Yes      | -       | The game's generation, used to resolve the Pokemon's types |
| `onSelectMove`    | `(name: string) => void`    | No       | -       | Called when a move is clicked within the learnset tab      |
| `onSelectSpecies` | `(species: string) => void` | No       | -       | Called when a Pokemon is clicked within the evolution line |
| `species`         | `string`                    | No       | -       | The selected Pokemon's species, if any                     |
| `variant`         | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug     |

## State

| State             | Type                        | Initial value | Description                                      |
| ----------------- | --------------------------- | ------------- | ------------------------------------------------ |
| `activeDetailTab` | `'learnset' \| 'locations'` | `'learnset'`  | Which tab is shown in the final section          |
| `isCaught`        | `boolean`                   | `false`       | Whether the selected Pokemon is marked as caught |

## Computations

- `pokemon` — the selected species' data, resolved via `PokemonHelpers`
- `sprite` — the selected species' sprite for the given `variant`
- `types` — the selected species' types at `generation`, rendered as
  badges (`/types/{type}.png`) beneath its name
- `abilities` — the selected species' ability set at `generation`,
  resolved via `PokemonHelpers`
- `abilityEntries` — `abilities` flattened into a list, with its
  hidden ability (if any) flagged so it renders dimmer and suffixed
  with "(Hidden)"
- `catchRate` — the selected species' catch rate, resolved via
  `PokemonHelpers`
- `evolutionLine` — the selected species' evolution line at
  `generation`, resolved via `PokemonHelpers` and rendered with
  `EvolutionLine`
- `hasEvolutionBranches` — whether `evolutionLine` has any evolutions
  branching from it; when false, "No evolution line" is shown instead
  of `EvolutionLine`
- `stats` — the selected species' base stats at `generation`, resolved
  via `PokemonHelpers` and rendered with `StatsChart`
- `learnset` — the selected species' learnset at `generation`, resolved
  via `PokemonHelpers` and rendered with `LearnsetList` when
  `activeDetailTab` is `'learnset'`
- `locations` — every wild encounter of the selected species across
  `game`'s splits and locations, resolved via `LocationHelpers` and
  rendered with `LocationsList` when `activeDetailTab` is `'locations'`

## Handlers

- **On a details tab click** — sets `activeDetailTab` to that tab
- **On the catch button click** — toggles `isCaught`
