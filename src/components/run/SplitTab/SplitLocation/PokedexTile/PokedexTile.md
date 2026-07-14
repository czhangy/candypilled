# PokedexTile

Displays details for a single Pokemon: its sprite, name, and type
badges. Used alongside an encounter table to show whichever Pokemon
is currently selected. If no Pokemon is selected, a placeholder
message is shown instead.

## Props

| Prop         | Type     | Required | Default | Description                                                |
| ------------ | -------- | -------- | ------- | ---------------------------------------------------------- |
| `generation` | `number` | Yes      | -       | The game's generation, used to resolve the Pokemon's types |
| `species`    | `string` | No       | -       | The selected Pokemon's species, if any                     |
| `variant`    | `string` | Yes      | -       | The sprite variant to prefer, matching the game's slug     |

## Computations

- `pokemon` — the selected species' data, resolved via `PokemonHelpers`
- `sprite` — the selected species' sprite for the given `variant`
- `types` — the selected species' types at `generation`, rendered as
  badges (`/types/{type}.png`) beneath its name
