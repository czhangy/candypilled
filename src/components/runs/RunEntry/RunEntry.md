# RunEntry

A list entry summarizing a single game's active run. If the game has no
stored run, placeholder values are shown instead (attempt #0, dashes for
split/box/death counts, "N/A" for personal best). A "Continue" button
navigates to the game's dedicated run page (only shown if a run already
exists), and a "New" button starts a fresh attempt for the game, confirming
with the user first if a run is already in progress, then prompting for a
starter before the run is created.

## Props

| Prop   | Type          | Required | Default | Description                                       |
| ------ | ------------- | -------- | ------- | ------------------------------------------------- |
| `game` | `Game`        | Yes      | -       | The game the run belongs to                       |
| `run`  | `Run \| null` | Yes      | -       | The run data to display, or `null` if none exists |

## State

| State                 | Type      | Initial value | Description                                              |
| --------------------- | --------- | ------------- | -------------------------------------------------------- |
| `isConfirmOpen`       | `boolean` | `false`       | Whether the "start a new run" confirmation modal is open |
| `isStarterSelectOpen` | `boolean` | `false`       | Whether the starter selection modal is open              |

## Handlers

- **On "Continue" click** — navigates to the game's run page, deep-linked to
  its current split via `getRunUrl`
- **On "New" click** — if a run already exists, opens a confirmation modal;
  otherwise opens the starter selection modal directly
- **On confirmation modal close/cancel** — closes the modal without
  starting a new run
- **On confirmation modal confirm** — closes the confirmation modal and
  opens the starter selection modal
- **On starter select modal close/cancel** — closes the modal without
  starting a new run
- **On starter select** — closes the modal and writes a fresh run to
  storage for the game with the chosen starter's species and full details
  (as the first entry in `caughtPokemon`), incrementing the attempt
  number, while carrying over the existing personal best and hall of fame
  count, then navigates to the game's run page, deep-linked to its current
  split via `getRunUrl`

## Computations

- `currentSplitName` — the name of the split containing the first
  not-yet-defeated required battle in the run's `defeatedBattles`, or the
  last split if every required battle has been defeated; `null` if there
  is no run
- `boxCount` — the number of Pokemon in the run's `caughtPokemon` that
  don't have a `status` of `PokemonStatus.Dead`; `null` if there is no run
- `deathCount` — the number of Pokemon in the run's `caughtPokemon` with a
  `status` of `PokemonStatus.Dead`; `null` if there is no run
- `getRunUrl` — builds the game's run page URL for a given
  `defeatedBattles` array, with `tab=split` and `split=<name>` (the split
  computed via `SplitHelpers.getCurrentSplitName`) query params, so
  navigating there always lands directly on the run's actual current split

## SCSS Variable Dependencies

- `--accent-color` — the game's theme color, set inline from `game.accentColor`
  and used to color the personal best/hall of fame text
