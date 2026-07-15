# LearnsetList

A scrollable list of a Pokemon's learnset, showing each move alongside how
it's learned (level-up, TM, egg, or tutor) and, resolved from move data, its
type icon, category icon, and power. Shows a "No moves found" message when
the list is empty.

## Props

| Prop         | Type             | Required | Default | Description                                        |
| ------------ | ---------------- | -------- | ------- | -------------------------------------------------- |
| `generation` | `number`         | Yes      | -       | The game's generation, used to resolve move values |
| `moves`      | `LearnsetMove[]` | Yes      | -       | The moves to list, in the order to display them    |

## Computations

- `moveData` / `values` — each move's data and generation-specific values,
  resolved via `MoveHelpers`; when found, its type icon (`/types/{type}.png`),
  category icon (`/move_categories/{category}.png`), and power (formatted as
  `{power}BP`, or "—" for status moves) are rendered on the right of the row

## SCSS Variable Dependencies

- `--accent-color` — used to highlight the method label for level-up moves
