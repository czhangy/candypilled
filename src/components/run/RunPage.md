# RunPage

The dedicated page for a single game's run, reached from a game's entry on
the runs list. Displays the game's title with the current attempt number and
a row of tabs for switching between the different views of the run.

## Props

| Prop   | Type     | Required | Default | Description                                  |
| ------ | -------- | -------- | ------- | -------------------------------------------- |
| `slug` | `string` | Yes      | -       | The slugified game name identifying the page |

## State

| State       | Type     | Initial value | Description                          |
| ----------- | -------- | ------------- | ------------------------------------ |
| `activeTab` | `string` | `'split'`     | The `id` of the currently active tab |

## Computations

- `game` — the `Game` matching `slug`, looked up from the static game list;
  triggers a 404 if no game matches
- `run` — the stored `Run` for `game`, looked up from the run store snapshot;
  `undefined` if no run has been started yet
