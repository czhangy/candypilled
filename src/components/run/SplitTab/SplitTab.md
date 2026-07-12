# SplitTab

The content of the "Split" tab on a game's run page. Shows the run's current
split, on the game's first split a starter selector whose choice is saved to
the run, and a collapsible card for each location in the current split.

## Props

| Prop   | Type   | Required | Default | Description                          |
| ------ | ------ | -------- | ------- | ------------------------------------ |
| `game` | `Game` | Yes      | -       | The game the run belongs to          |
| `run`  | `Run`  | Yes      | -       | The run whose current split is shown |

## Computations

- `isFirstSplit` — whether `run.split` matches the game's first split,
  controlling whether the starter selector is shown
- `currentSplit` — the split matching `run.split`, whose locations are
  rendered as `SplitLocation` cards

## Handlers

- **On starter select** — saves the chosen starter to the run in storage
