# RunsPage

The page for `/runs`. Lists the user's active runs, one per game, with each
entry linking to that game's dedicated run page at `/runs/<slug>`.

## Computations

- `gameRuns` — the known games paired with their active run, read from
  `localStorage` (keyed by each game's slug) via `RunStoreHelpers`. Games
  without stored run data are omitted.
