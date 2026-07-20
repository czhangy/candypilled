# MoveCard

A compact, fixed-height card showing a single move's name and, on one
line, its category, base power, PP, and accuracy — each under a small
label — tinted with its type's color. The entire card links out to the
move's view in the Moves tab. Renders a placeholder of the same height
when no move is given, for an empty move slot.

## Props

| Prop           | Type                     | Required | Default | Description                                                   |
| -------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------- |
| `generation`   | `number`                 | Yes      | -       | The game's generation, used to resolve the move's values      |
| `ivs`          | `StatValues`             | Yes      | -       | The Pokémon's IVs, used to resolve Hidden Power's actual type |
| `move`         | `string`                 | No       | -       | The move's name, if this slot is occupied                     |
| `onSelectMove` | `(name: string) => void` | Yes      | -       | Called with the move's name when it's clicked                 |

## Computations

- `moveType` — the move's actual type at `generation`, resolved via
  `MoveHelpers.getMoveType` (accounting for `ivs` when the move is Hidden
  Power)
- `moveColor` — `moveType`'s color, resolved via `TypeHelpers.getTypeColor`,
  used to tint the card's background
