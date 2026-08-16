# SplitHeader

Shows the run's displayed split name and level cap on a single line, with the
split name rendered via `SplitSelect` so the user can jump to any other split
in the game. Rendered by `RunPage` in the top-left corner of the sticky
tabs/split-header block, so it stays pinned to the top of the viewport
alongside the tab bar while the split's locations scroll beneath it. The level
cap always reflects the split the run has actually progressed to, not
whichever split is being viewed. Once every split has been marked complete,
the game is treated as complete and no level cap is shown.

## Props

| Prop               | Type                              | Required | Default | Description                                                                                                 |
| ------------------ | --------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `completedSplits`  | `string[]`                        | Yes      | -       | The run's completed split names, used to detect game completion                                             |
| `currentSplitName` | `string \| null`                  | Yes      | -       | The name of the split currently being shown                                                                 |
| `game`             | `Game`                            | Yes      | -       | The game the run belongs to                                                                                 |
| `gender`           | `'male' \| 'female' \| undefined` | Yes      | -       | The run's chosen protagonist gender, used to resolve which battles exist when finding the split's level cap |
| `onSelectSplit`    | `(name: string) => void`          | Yes      | -       | Called with a split's name when chosen from `SplitSelect`                                                   |
| `runSplitName`     | `string \| null`                  | Yes      | -       | The name of the split the run has actually progressed to                                                    |

## Computations

- `runSplit` — the split matching `runSplitName`, used to compute `levelCap`
- `levelCap` — the highest level Pokémon on the team of the run's current
  split's last battle (resolved for the run's chosen starter and gender),
  shown next to the split title; `null` once every split in `game.splits`
  is present in `completedSplits`, since no cap applies after the game is
  complete
- `splitNames` — `game.splits` mapped to their names, in the game's split
  order, passed to `SplitSelect` as its options

## Handlers

- **On a `SplitSelect` option select** — calls `onSelectSplit` with the
  chosen split's name
