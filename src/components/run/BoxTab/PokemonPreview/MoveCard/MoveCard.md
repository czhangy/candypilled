# MoveCard

A compact, fixed-height card showing a single move's name and, on one
line, its category, base power, PP, and accuracy — each under a small
label — tinted with its type's color. Renders a placeholder of the same
height when no move is given, for an empty move slot.

## Props

| Prop         | Type     | Required | Default | Description                                              |
| ------------ | -------- | -------- | ------- | -------------------------------------------------------- |
| `generation` | `number` | Yes      | -       | The game's generation, used to resolve the move's values |
| `move`       | `string` | No       | -       | The move's name, if this slot is occupied                |

## Computations

- `moveColor` — the move's type color at `generation`, resolved via
  `TypeHelpers.getColor`, used to tint the card's background
