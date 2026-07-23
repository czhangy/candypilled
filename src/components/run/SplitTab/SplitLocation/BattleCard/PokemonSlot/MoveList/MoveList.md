# MoveList

A fixed 4-slot list of moves for a Pokémon slot within a battle card,
rendered as `<li>` items meant to sit inside a parent `<ul>`. Empty slots
show a dash. Each move's background is tinted to match its type. When
`highlightDangerous` is enabled, moves flagged as dangerous are shown in
red text. Unless `isReadOnly`, each move is clickable, linking to that
move's details, and darkens further on hover.

## Props

| Prop                 | Type                     | Required | Default | Description                                                             |
| -------------------- | ------------------------ | -------- | ------- | ----------------------------------------------------------------------- |
| `generation`         | `number`                 | Yes      | -       | The game's generation, used to resolve each move's type                 |
| `highlightDangerous` | `boolean`                | Yes      | -       | Whether moves flagged as dangerous are highlighted in red text          |
| `isReadOnly`         | `boolean`                | Yes      | -       | Renders moves as plain, non-interactive text when true                  |
| `ivs`                | `StatValues`             | Yes      | -       | The Pokémon's IVs, used to resolve Hidden Power's actual type           |
| `moves`              | `string[]`               | Yes      | -       | The Pokémon's moves, padded to 4 slots with dashes if fewer             |
| `onSelectMove`       | `(name: string) => void` | Yes      | -       | Called with a move's name when it's clicked (ignored when `isReadOnly`) |

## Computations

- `getMoveColor` — a move's type color at `generation`, resolved via
  `MoveHelpers.getMoveType` (accounting for `ivs` when the move is Hidden
  Power) and `TypeHelpers`, tinting that move's background via the
  `--move-color` custom property
- `MoveHelpers.isDangerousMove` — whether a move is flagged as
  dangerous, rendering its button's text in red
