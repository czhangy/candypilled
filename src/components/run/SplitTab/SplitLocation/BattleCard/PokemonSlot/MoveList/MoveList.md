# MoveList

A fixed 4-slot list of move buttons for a Pokemon slot within a
battle card, rendered as `<li>` items meant to sit inside a parent
`<ul>`. Empty slots show a dash. Each move is clickable, linking to
that move's details; its background is tinted to match its type,
darkening further on hover. When `highlightDangerous` is enabled,
moves flagged as dangerous are shown in red text.

## Props

| Prop                 | Type                     | Required | Default | Description                                                    |
| -------------------- | ------------------------ | -------- | ------- | -------------------------------------------------------------- |
| `generation`         | `number`                 | Yes      | -       | The game's generation, used to resolve each move's type        |
| `highlightDangerous` | `boolean`                | Yes      | -       | Whether moves flagged as dangerous are highlighted in red text |
| `ivs`                | `StatValues`             | Yes      | -       | The Pokemon's IVs, used to resolve Hidden Power's actual type  |
| `moves`              | `string[]`               | Yes      | -       | The Pokemon's moves, padded to 4 slots with dashes if fewer    |
| `onSelectMove`       | `(name: string) => void` | Yes      | -       | Called with a move's name when it's clicked                    |

## Computations

- `getMoveColor` — a move's type color at `generation`, resolved via
  `MoveHelpers.getMoveType` (accounting for `ivs` when the move is Hidden
  Power) and `TypeHelpers`, tinting that move's background via the
  `--move-color` custom property
- `MoveHelpers.isDangerousMove` — whether a move is flagged as
  dangerous, rendering its button's text in red
