# MethodGroup

A sub-header row for a single encounter method within an encounter
table (e.g. "Old Rod", "Rock Smash"), followed by that method's
encounter rows.

## Props

| Prop                       | Type                                       | Required | Default | Description                                                                                |
| -------------------------- | ------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------ |
| `encounters`               | `Encounter[]`                              | Yes      | -       | This method's encounters, already filtered and sorted by the parent                        |
| `getDisplayChance`         | `(encounter: Encounter) => number \| null` | Yes      | -       | Resolves an encounter's displayed chance                                                   |
| `isSpeciesCaughtElsewhere` | `(species: string) => boolean`             | Yes      | -       | Whether a species' evolution line is caught elsewhere in the run, highlighting its row red |
| `isSpeciesCaughtHere`      | `(species: string) => boolean`             | Yes      | -       | Whether a species is the one actually caught at this location, highlighting its row green  |
| `method`                   | `EncounterMethod`                          | Yes      | -       | The encounter method this group represents                                                 |
| `onSelectEncounter`        | `(encounter: Encounter) => void`           | Yes      | -       | Called when one of this method's rows is clicked                                           |
| `onSelectItem`             | `(slug: string) => void`                   | Yes      | -       | Called with a row's held item slug when its held item button is clicked                    |
| `selectedSpecies`          | `string`                                   | No       | -       | The species of the currently selected row, if any                                          |

## Computations

- `getMethodLabel` — `method`'s slug formatted as a title-cased label
  (e.g. `old-rod` becomes "Old Rod"), except `poke-radar`, which is
  spelled out as "Poké Radar" since its accent can't be derived from the
  slug
