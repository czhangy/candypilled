# MoveDetail

Displays details for a single move: its name, flavor text description, a
row of stats (type badge, category icon, power, accuracy, PP, and
priority), and its effect text (with its effect chance appended, if any).
The priority stat is omitted entirely for moves with priority 0, and
shown with a leading "+" for positive priority. If no move is selected,
a placeholder message is shown instead.

## Props

| Prop         | Type     | Required | Default | Description                                              |
| ------------ | -------- | -------- | ------- | -------------------------------------------------------- |
| `generation` | `number` | Yes      | -       | The game's generation, used to resolve the move's values |
| `move`       | `string` | No       | -       | The selected move's name, if any                         |

## Computations

- `moveData` — the selected move's data, resolved via `MoveHelpers`
- `values` — the selected move's values at `generation` (type, power,
  accuracy, PP, effect, effect chance, description), resolved via
  `MoveHelpers`
