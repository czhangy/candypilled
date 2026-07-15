# RunEntry

A list entry summarizing a single game's active run. If the game has no
stored run, placeholder values are shown instead (attempt #0, dashes for
split/box/death counts, "N/A" for personal best). A "Continue" button
navigates to the game's dedicated run page (only shown if a run already
exists), and a "New" button starts a fresh attempt for the game, confirming
with the user first if a run is already in progress.

## Props

| Prop   | Type          | Required | Default | Description                                       |
| ------ | ------------- | -------- | ------- | ------------------------------------------------- |
| `game` | `Game`        | Yes      | -       | The game the run belongs to                       |
| `run`  | `Run \| null` | Yes      | -       | The run data to display, or `null` if none exists |

## State

| State           | Type      | Initial value | Description                                              |
| --------------- | --------- | ------------- | -------------------------------------------------------- |
| `isConfirmOpen` | `boolean` | `false`       | Whether the "start a new run" confirmation modal is open |

## Handlers

- **On "Continue" click** — navigates to the game's run page
- **On "New" click** — if a run already exists, opens a confirmation modal;
  otherwise starts a new run immediately
- **On confirmation modal close/cancel** — closes the modal without
  starting a new run
- **On confirmation modal confirm** — closes the modal and writes a fresh
  run to storage for the game (incrementing the attempt number, resetting
  box/death counts, and setting the split to the game's first split, while
  carrying over the existing personal best and hall of fame count), then
  navigates to the game's run page
