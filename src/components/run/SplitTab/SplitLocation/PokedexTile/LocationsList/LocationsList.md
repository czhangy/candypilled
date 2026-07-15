# LocationsList

A scrollable list of every location a Pokemon can be found in the wild,
sorted by minimum encounter level (lowest first). Each row shows the
encounter chance, location name, level range, and method (as plain text,
no icon). Shows a "No locations found" message when the list is empty.

## Props

| Prop        | Type                  | Required | Default | Description                     |
| ----------- | --------------------- | -------- | ------- | ------------------------------- |
| `locations` | `EncounterLocation[]` | Yes      | -       | The locations to list, unsorted |

## Computations

- `sortedLocations` — `locations` sorted by encounter minimum level,
  ascending
- `getLevelLabel` — an encounter's level range formatted as `Lv. N` for a
  single level, or `Lv. N-M` for a range
