# SplitHeader

Shows the run's current split name and level cap on a single line. Rendered
by `RunPage` in the top-left corner of the sticky tabs/split-header block, so
it stays pinned to the top of the viewport alongside the tab bar while the
split's locations scroll beneath it.

## Props

| Prop   | Type   | Required | Default | Description                          |
| ------ | ------ | -------- | ------- | ------------------------------------ |
| `game` | `Game` | Yes      | -       | The game the run belongs to          |
| `run`  | `Run`  | Yes      | -       | The run whose current split is shown |

## Computations

- `currentSplitName` — the name of the split containing the first
  not-yet-defeated required battle in the run's `defeatedBattles`, or the
  last split if every required battle has been defeated
- `currentSplit` — the split matching `currentSplitName`, used to compute
  `levelCap`
- `levelCap` — the highest level Pokemon on the team of the current split's
  last battle (resolved for the run's chosen starter), shown next to the
  split title
