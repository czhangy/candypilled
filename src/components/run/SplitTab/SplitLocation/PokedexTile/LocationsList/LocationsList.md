# LocationsList

A scrollable list of every location a Pokemon can be found in the wild,
sorted by minimum encounter level (lowest first). Each row shows the
encounter chance, location name, level range, and method (as plain text,
no icon), and the entire row is a link (ignoring any subarea qualifier in
the location's name, since a split's location card exists per location,
not per subarea) to that location's card in the Splits tab. A row is
highlighted with a red background if its location's encounter has already
been used, whether by catching a Pokemon there or by marking it missed.
Shows a "No locations found" message when the list is empty.

## Props

| Prop               | Type                         | Required | Default | Description                                                                   |
| ------------------ | ---------------------------- | -------- | ------- | ----------------------------------------------------------------------------- |
| `locations`        | `EncounterLocation[]`        | Yes      | -       | The locations to list, unsorted                                               |
| `onSelectLocation` | `(location: string) => void` | Yes      | -       | Called with a location's base name (subarea stripped) when its row is clicked |
| `usedLocations`    | `string[]`                   | Yes      | -       | Names of locations whose encounter is already used (caught or missed)         |

## Computations

- `sortedLocations` — `locations` sorted by encounter minimum level,
  ascending
- `getLevelLabel` — an encounter's level range formatted as `Lv. N` for a
  single level, or `Lv. N-M` for a range
- `isUsed` — whether a location's name is in `usedLocations`, matching
  either exactly or on its base-name prefix (`"Location (Subarea)"`
  against a `usedLocations` entry of `"Location"`), since `usedLocations`
  always stores a location's base name even when the row being checked
  is subarea-qualified
- `getBaseName` — strips a subarea qualifier (`"Location (Subarea)"` →
  `"Location"`) from a row's name before passing it to `onSelectLocation`,
  since a split's location card exists per base location, not per
  subarea; every location here is assumed to have a corresponding split
