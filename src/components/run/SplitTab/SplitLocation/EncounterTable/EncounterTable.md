# EncounterTable

Displays the wild Pokemon encounters available at a location as a table.
Rows are grouped under a sub-header for each encounter method (e.g.
"Old Rod", "Rock Smash"), in a fixed method order; within a group, rows
are sorted by encounter chance, highest first. Each row shows the
Pokemon's sprite (matching the game's sprite variant) and name, its
level range prefixed with "Lv." (e.g. "Lv. 20-30"), and its encounter
chance as a percentage.

## Props

| Prop         | Type          | Required | Default | Description                                            |
| ------------ | ------------- | -------- | ------- | ------------------------------------------------------ |
| `encounters` | `Encounter[]` | Yes      | -       | The encounter slots to display                         |
| `variant`    | `string`      | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## Computations

- `methods` — the distinct encounter methods present in `encounters`,
  ordered by a fixed `METHOD_ORDER` list (methods not in that list are
  sorted last)
- `getEncountersForMethod` — the encounters for a given method, sorted
  by `chance` descending
