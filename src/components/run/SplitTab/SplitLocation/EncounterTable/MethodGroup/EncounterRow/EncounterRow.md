# EncounterRow

A single row within an encounter table's method group, showing a wild
Pokemon's sprite (matching the game's sprite variant), its name, its
level range prefixed with "Lv." (e.g. "Lv. 20-30"), and its encounter
chance as a percentage. Clicking the row notifies the parent. The row
is highlighted green if it's the one actually caught at this location,
red if its evolution line isn't caught here but has been caught
elsewhere in the run (used instead of caught taking priority), or
highlighted as selected if it's the currently selected row, with the
caught/used highlights taking priority over the selected highlight.

## Props

| Prop                | Type             | Required | Default | Description                                                                           |
| ------------------- | ---------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `displayChance`     | `number \| null` | Yes      | -       | The chance to display for this encounter, already rescaled by the parent if needed    |
| `encounter`         | `Encounter`      | Yes      | -       | The encounter this row represents                                                     |
| `isCaughtElsewhere` | `boolean`        | Yes      | -       | Whether this row's evolution line is caught elsewhere in the run, highlighting it red |
| `isCaughtHere`      | `boolean`        | Yes      | -       | Whether this row is the one actually caught at this location, highlighting it green   |
| `isSelected`        | `boolean`        | Yes      | -       | Whether this row is the currently selected encounter                                  |
| `onClick`           | `() => void`     | Yes      | -       | Called when the row is clicked                                                        |
| `variant`           | `string`         | Yes      | -       | The sprite variant to prefer, matching the game's slug                                |

## Computations

- `pokemon` — the encounter's species data, resolved via `PokemonHelpers`
- `sprite` — the encounter's species sprite for the given `variant`
- `getLevelLabel` — the encounter's level range, formatted as a single
  level or a range prefixed with "Lv."

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used for the selected row's highlight
