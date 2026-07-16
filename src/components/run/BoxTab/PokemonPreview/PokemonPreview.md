# PokemonPreview

Displays every recorded attribute of the currently selected caught Pokemon:
a small sprite alongside its level, nature, ability, catch location, and
held item, followed by a 2x2 grid of its moves and its IVs/EVs when
present.

## Props

| Prop         | Type            | Required | Default | Description                                               |
| ------------ | --------------- | -------- | ------- | --------------------------------------------------------- |
| `generation` | `number`        | Yes      | -       | The game's generation, used to resolve each move's values |
| `pokemon`    | `CaughtPokemon` | No       | -       | The currently selected caught Pokemon, if any             |
| `variant`    | `string`        | Yes      | -       | The game slug used to resolve the Pokemon's sprite art    |

## Computations

- `moveSlots` — `pokemon.moves` padded to four entries so empty move slots
  render as placeholder cards
- `renderStatValues` — renders a Pokemon's IVs or EVs, either as a single
  flat number or as a per-stat grid, depending on which form
  `CaughtPokemon` stored them in
