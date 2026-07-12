# RunEntry

A clickable list entry summarizing a single game's active run, linking to
that game's dedicated run page. If the game has no stored run, placeholder
values are shown instead (attempt #0, dashes for split/box/death counts,
"N/A" for personal best).

## Props

| Prop   | Type          | Required | Default | Description                                       |
| ------ | ------------- | -------- | ------- | ------------------------------------------------- |
| `game` | `Game`        | Yes      | -       | The game the run belongs to                       |
| `run`  | `Run \| null` | Yes      | -       | The run data to display, or `null` if none exists |
