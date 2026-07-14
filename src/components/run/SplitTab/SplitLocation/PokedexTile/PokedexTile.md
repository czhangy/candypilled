# PokedexTile

Displays details for a single Pokemon, split into a left half
showing its sprite, name, and type badges, and a right half divided
into an upper section (two-thirds height) listing its abilities and
a lower section (one-third height) showing its catch rate. Below
that split, a full-width section shows the Pokemon's evolution line,
or a "No evolution line" message for species with no evolutions.
Used alongside an encounter table to show whichever Pokemon is
currently selected. If no Pokemon is selected, a placeholder message
is shown instead.

## Props

| Prop              | Type                        | Required | Default | Description                                                |
| ----------------- | --------------------------- | -------- | ------- | ---------------------------------------------------------- |
| `generation`      | `number`                    | Yes      | -       | The game's generation, used to resolve the Pokemon's types |
| `onSelectSpecies` | `(species: string) => void` | No       | -       | Called when a Pokemon is clicked within the evolution line |
| `species`         | `string`                    | No       | -       | The selected Pokemon's species, if any                     |
| `variant`         | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug     |

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
