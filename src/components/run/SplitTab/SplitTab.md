# SplitTab

The content of the "Split" tab on a game's run page. Shows the run's current
split, and on the game's first split, a starter selector whose choice is
saved to the run.

## Props

| Prop   | Type   | Required | Default | Description                          |
| ------ | ------ | -------- | ------- | ------------------------------------ |
| `game` | `Game` | Yes      | -       | The game the run belongs to          |
| `run`  | `Run`  | Yes      | -       | The run whose current split is shown |

## Computations

- `isFirstSplit` — whether `run.split` matches the game's first split,
  controlling whether the starter selector is shown

## Handlers

- **On starter select** — saves the chosen starter to the run in storage
