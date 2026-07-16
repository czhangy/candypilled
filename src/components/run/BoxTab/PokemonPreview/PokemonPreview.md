# PokemonPreview

Displays every recorded attribute of the currently selected caught Pokemon:
a small sprite alongside its level, nature, ability, catch location, and
held item, followed by a 2x2 grid of its moves and its IVs/EVs when
present. Its ability and moves link out to their corresponding views in the
Abilities and Moves tabs.

## Props

| Prop              | Type                     | Required | Default | Description                                               |
| ----------------- | ------------------------ | -------- | ------- | --------------------------------------------------------- |
| `generation`      | `number`                 | Yes      | -       | The game's generation, used to resolve each move's values |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Called with the Pokemon's ability name when it's clicked  |
| `onSelectMove`    | `(name: string) => void` | Yes      | -       | Called with a move's name when it's clicked               |
| `pokemon`         | `CaughtPokemon`          | No       | -       | The currently selected caught Pokemon, if any             |
| `variant`         | `string`                 | Yes      | -       | The game slug used to resolve the Pokemon's sprite art    |

## Computations

- `moveSlots` — `pokemon.moves` padded to four entries so empty move slots
  render as placeholder cards
- `renderStatValues` — renders a Pokemon's IVs or EVs, either as a single
  flat number or as a per-stat grid, depending on which form
  `CaughtPokemon` stored them in
