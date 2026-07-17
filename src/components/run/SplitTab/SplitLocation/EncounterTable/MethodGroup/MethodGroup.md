# MethodGroup

A sub-header row for a single encounter method within an encounter
table (e.g. "Old Rod", "Rock Smash"), shown alongside an icon
representing the method, followed by that method's encounter rows.

## Props

| Prop                       | Type                                       | Required | Default | Description                                                                                |
| -------------------------- | ------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------ |
| `encounters`               | `Encounter[]`                              | Yes      | -       | This method's encounters, already filtered and sorted by the parent                        |
| `getDisplayChance`         | `(encounter: Encounter) => number \| null` | Yes      | -       | Resolves an encounter's displayed chance                                                   |
| `isSpeciesCaughtElsewhere` | `(species: string) => boolean`             | Yes      | -       | Whether a species' evolution line is caught elsewhere in the run, highlighting its row red |
| `isSpeciesCaughtHere`      | `(species: string) => boolean`             | Yes      | -       | Whether a species is the one actually caught at this location, highlighting its row green  |
| `method`                   | `string`                                   | Yes      | -       | The encounter method this group represents                                                 |
| `onSelectEncounter`        | `(encounter: Encounter) => void`           | Yes      | -       | Called when one of this method's rows is clicked                                           |
| `selectedSpecies`          | `string`                                   | No       | -       | The species of the currently selected row, if any                                          |
| `variant`                  | `string`                                   | Yes      | -       | The sprite variant to prefer, matching the game's slug                                     |

## Computations

- `getMethodLabel` — `method`'s slug formatted as a title-cased label
  (e.g. `old-rod` becomes "Old Rod")
- `getMethodIcon` — the icon image path for `method`, shared across
  all game variants (e.g. `/encounter_methods/grass.png`)
