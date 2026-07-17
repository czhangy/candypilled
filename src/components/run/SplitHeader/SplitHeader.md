# SplitHeader

Shows the run's displayed split name and level cap on a single line.
Rendered by `RunPage` in the top-left corner of the sticky tabs/split-header
block, so it stays pinned to the top of the viewport alongside the tab bar
while the split's locations scroll beneath it.

## Props

| Prop               | Type             | Required | Default | Description                                 |
| ------------------ | ---------------- | -------- | ------- | ------------------------------------------- |
| `currentSplitName` | `string \| null` | Yes      | -       | The name of the split currently being shown |
| `game`             | `Game`           | Yes      | -       | The game the run belongs to                 |

## Computations

- `currentSplit` — the split matching `currentSplitName`, used to compute
  `levelCap`
- `levelCap` — the highest level Pokemon on the team of the current split's
  last battle (resolved for the run's chosen starter), shown next to the
  split title
