# EncounterTable

Displays the wild Pokemon encounters available at a location as a table.
If the encounters include time-of-day-specific slots (morning, day,
night), a tab toggle with an icon for each time of day is shown above
the table to switch between them; encounters that aren't tied to a time
of day are always shown regardless of the selected tab. Rows are
grouped under a sub-header for each
encounter method (e.g. "Old Rod", "Rock Smash"), shown alongside an
icon representing the method, in a fixed method order; within a group,
rows are sorted by encounter chance, highest first. Each row shows the
Pokemon's sprite (matching the game's sprite variant) and name, its
level range prefixed with "Lv." (e.g. "Lv. 20-30"), and its encounter
chance as a percentage.

## Props

| Prop         | Type          | Required | Default | Description                                            |
| ------------ | ------------- | -------- | ------- | ------------------------------------------------------ |
| `encounters` | `Encounter[]` | Yes      | -       | The encounter slots to display                         |
| `variant`    | `string`      | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## State

| State               | Type                  | Initial value               | Description                                  |
| ------------------- | --------------------- | --------------------------- | -------------------------------------------- |
| `selectedTimeOfDay` | `string \| undefined` | first available time of day | The time-of-day condition currently selected |

## Computations

- `timesOfDay` — the distinct time-of-day conditions (`time-morning`,
  `time-day`, `time-night`) present in `encounters`, in that fixed order
- `visibleEncounters` — `encounters` filtered down to those with no
  time-of-day condition, plus those matching `selectedTimeOfDay`
- `methods` — the distinct encounter methods present in
  `visibleEncounters`, ordered by a fixed `METHOD_ORDER` list (methods
  not in that list are sorted last)
- `getEncountersForMethod` — the `visibleEncounters` for a given method,
  sorted by `chance` descending
- `getMethodIcon` — the icon image path for a given encounter method,
  shared across all game variants (e.g. `/methods/grass.png`)
