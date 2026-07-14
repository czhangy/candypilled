# MoveDetail

Displays details for a single move: its name and type badge, flavor text
description, a row of stats (category, power, accuracy, PP, and priority),
and its effect text (with its effect chance appended, if any). If no move
is selected, a placeholder message is shown instead.

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
