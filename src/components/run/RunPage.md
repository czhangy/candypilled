# RunPage

The dedicated page for a single game's run, reached from a game's entry on
the runs list. Displays a back link to the runs list, the game's title with
the current attempt number and a togglable Wipe/RESPAWN button, and a
subtitle showing the run's personal best battle as trainer class + name
followed by its split name (e.g. "Gym Leader Roark // Roark"), or "N/A" if
none yet. Below that, if the run hasn't been wiped, a row of tabs for
switching between the different views of the run and the content for the
currently active tab; if the run has been wiped, a "Run it back." message
instead.

## Props

| Prop   | Type     | Required | Default | Description                                  |
| ------ | -------- | -------- | ------- | -------------------------------------------- |
| `slug` | `string` | Yes      | -       | The slugified game name identifying the page |

## Computations

- `activeTab` — the `id` of the currently active tab, read from the `tab`
  query param, defaulting to `'split'` if absent
- `selectedMove` — the currently selected move's name, read from the `move`
  query param, shared between the Moves tab and move links elsewhere on the
  page
- `selectedAbility` — the currently selected ability's name, read from the
  `ability` query param
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
- `updateQueryParams` — merges the given key/value pairs into the current
  URL's query string (deleting keys whose value is `undefined`) and
  navigates to it with `router.replace`, so tab/move/ability selection is
  linkable and shareable

## Handlers

- **On move link click** (from `SplitTab`, e.g. a move within `BattleCard`)
  — opens the Moves tab for that move (`?tab=moves&move=<name>`) in a new
  browser tab, leaving the current page untouched
- **On move select** (from `MovesTab`) — sets the `move` query param
  without changing `tab`
- **On ability select** (from `AbilitiesTab`) — sets the `ability` query
  param without changing `tab`
- **On ability link click** (from `SplitTab`, e.g. an ability within
  `PokedexTile` or `BattleCard`) — opens the Abilities tab for that ability
  (`?tab=abilities&ability=<name>`) in a new browser tab, leaving the
  current page untouched
- **On Pokemon deselect** (from `BoxTab`, when switching between its box
  and graveyard views) — clears the `pokemon` query param
- **On Wipe toggle** — flips `run.wipe` and saves the run; the button reads
  "Wipe" when `run.wipe` is `false` and "RESPAWN" when `true`
