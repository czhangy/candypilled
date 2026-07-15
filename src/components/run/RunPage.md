# RunPage

The dedicated page for a single game's run, reached from a game's entry on
the runs list. Displays a back link to the runs list, the game's title with
the current attempt number, a subtitle showing the run's personal best
battle as trainer class + name followed by its split name (e.g.
"Gym Leader Roark // Roark"), or "N/A" if none yet, a row of tabs for
switching between the different views of the run, and the content for the
currently active tab.

## Props

| Prop   | Type     | Required | Default | Description                                  |
| ------ | -------- | -------- | ------- | -------------------------------------------- |
| `slug` | `string` | Yes      | -       | The slugified game name identifying the page |

## State

| State          | Type                  | Initial value | Description                                                                                           |
| -------------- | --------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `activeTab`    | `string`              | `'split'`     | The `id` of the currently active tab                                                                  |
| `selectedMove` | `string \| undefined` | `undefined`   | The currently selected move's name, shared between the Moves tab and move links elsewhere on the page |

## Computations

- `game` — the `Game` matching `slug`, looked up from the static game list;
  triggers a 404 if no game matches
- `run` — the stored `Run` for `game`, looked up from the run store snapshot
- `personalBestBattle` — the `Battle` matching `run.personalBest`, looked up
  via `BattleProgressHelpers.getBattle`
- `personalBestSplitName` — the name of the split containing
  `personalBestBattle`
- `personalBestLabel` — the personal best subtitle text: the battle's
  trainer class and name followed by `// <split name>`, or `'N/A'` if the
  run has no personal best yet

## Handlers

- **On move link click** (from `SplitTab`, e.g. a move within `BattleCard`)
  — sets `selectedMove` and switches `activeTab` to `'moves'`
- **On move select** (from `MovesTab`) — sets `selectedMove` without
  changing `activeTab`
