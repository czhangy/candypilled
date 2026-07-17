# EncounterTable

Displays the wild Pokemon encounters available at a location as a table,
under an "Encounters" header. If the encounters include time-of-day-
specific slots (morning, day, night), a row of icon buttons for each
time of day is shown on the right of the header to switch between them,
each with a `Tooltip` naming its time of day ("Morning", "Day", "Night")
on hover; encounters that aren't tied to a time of day are always shown
regardless of the selected time of day. Rows are grouped under a sub-header for each
encounter method (e.g. "Old Rod", "Rock Smash"), shown alongside an
icon representing the method, in a fixed method order; within a group,
rows are sorted by encounter chance, highest first. Each row shows the
Pokemon's sprite (matching the game's sprite variant), its name, its
level range prefixed with "Lv." (e.g.
"Lv. 20-30"), and its encounter chance as a percentage. Clicking a row
selects that encounter, highlighting it and notifying the parent via
`onSelectEncounter`. A row is highlighted green if its species, or any
member of its evolution line, is the one actually caught at this
location (catching an evolution via the Pokedex tile's evolution line
records the evolved species, not the row's original encounter species,
so the comparison is evolution-line-aware). A row is highlighted red if
its evolution line isn't caught here but has been caught elsewhere in
the run, since catching it here would violate the
one-catch-per-evolution-line rule. Either highlight takes priority
over the selected highlight if both apply. When the global "Hide Dupes" setting
is enabled, rows whose evolution line has already been caught elsewhere
in the run are omitted entirely instead of being highlighted red.

Below the header, a full-width "MISS"/"MISSED" toggle button (styled
like the Pokedex tile's catch button, red when active) records that
this location's one encounter was used up without catching anything.
It is disabled whenever a species is already caught at this location,
since the two outcomes are mutually exclusive. The button is hidden
entirely when every encounter at the location uses an unmissable
method (e.g. a gift or fossil), since those encounters can't be
missed.

## Props

| Prop                | Type                             | Required | Default | Description                                                                        |
| ------------------- | -------------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `caughtHere`        | `string`                         | No       | -       | The species already caught at this location, if any, highlighted green             |
| `dupes`             | `string[]`                       | Yes      | -       | Every species caught so far in the run, regardless of location                     |
| `encounters`        | `Encounter[]`                    | Yes      | -       | The encounter slots to display                                                     |
| `generation`        | `number`                         | Yes      | -       | The game's generation, used to resolve each Pokemon's types                        |
| `isMissed`          | `boolean`                        | Yes      | -       | Whether this location's encounter was marked missed, styling the toggle button red |
| `onSelectEncounter` | `(encounter: Encounter) => void` | No       | -       | Called with the clicked row's encounter                                            |
| `onToggleMissed`    | `() => void`                     | Yes      | -       | Called when the "MISS"/"MISSED" button is clicked                                  |
| `selectedSpecies`   | `string`                         | No       | -       | The species of the currently selected row, if any, to highlight it                 |
| `variant`           | `string`                         | Yes      | -       | The sprite variant to prefer, matching the game's slug                             |

## State

| State               | Type                  | Initial value               | Description                                  |
| ------------------- | --------------------- | --------------------------- | -------------------------------------------- |
| `selectedTimeOfDay` | `string \| undefined` | first available time of day | The time-of-day condition currently selected |

## Computations

- `timesOfDay` — the distinct time-of-day conditions (`time-morning`,
  `time-day`, `time-night`) present in `encounters`, in that fixed order
- `hideDupes` — the global "Hide Dupes" setting's current value, read
  from `localStorage` via `SettingsHelpers`
- `visibleEncounters` — `encounters` filtered down to those with no
  time-of-day condition, plus those matching `selectedTimeOfDay`; when
  `hideDupes` is enabled, rows whose evolution line is caught elsewhere
  in the run (and not at this location) are also excluded
- `methods` — the distinct encounter methods present in
  `visibleEncounters`, ordered by a fixed `METHOD_ORDER` list (methods
  not in that list are sorted last)
- `getEncountersForMethod` — the `visibleEncounters` for a given method,
  sorted by `chance` descending
- `getMethodIcon` — the icon image path for a given encounter method,
  shared across all game variants (e.g. `/encounter_methods/grass.png`)
- `getDisplayChance` — an encounter's displayed chance. When `hideDupes`
  is disabled, this is just the encounter's own `chance`. When enabled,
  it's rescaled against the other encounters remaining in the same
  method group (via `getEncountersForMethod`) so the group's chances
  still sum to 100%, truncated to a whole number (e.g. a 50/50 split
  becomes 100% once one side is hidden as a dupe)
- `isEvolutionLineCaught` — whether a species' evolution family
  (resolved via `PokemonHelpers`) includes any name in `dupes`
- `isCaughtHere` — whether a row's species is in the same evolution
  family (resolved via `PokemonHelpers`) as `caughtHere`, highlighting
  the row green
- `isCaughtElsewhere` — whether a row's species isn't `isCaughtHere` but
  `isEvolutionLineCaught`, highlighting the row red
- `isMissable` — whether `encounters` includes any method not in the
  fixed `UNMISSABLE_ENCOUNTER_METHODS` list, controlling whether the
  "MISS"/"MISSED" button is shown
