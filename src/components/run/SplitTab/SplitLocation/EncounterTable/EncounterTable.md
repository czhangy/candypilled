# EncounterTable

Displays the wild Pokemon encounters available at a location as a table,
under an "Encounters" header. If the encounters include time-of-day-
specific slots (morning, day, night), `TimeOfDayButtons` renders a row
of icon buttons on the right of the header to switch between them;
encounters that aren't tied to a time of day are always shown
regardless of the selected time of day. Rows are grouped by
`MethodGroup` under a sub-header for each encounter method (e.g. "Old
Rod", "Rock Smash"), shown alongside an icon representing the method,
in a fixed method order; within a group, rows are sorted by encounter
chance, highest first. If any visible encounter uses the "starter"
method, every other method is hidden entirely, showing only the
starter encounter(s), and the time-of-day buttons are hidden as well.
Each row (`EncounterRow`) shows the Pokemon's
sprite (matching the game's sprite variant), its name, its level range
prefixed with "Lv." (e.g. "Lv. 20-30"), and its encounter chance as a
percentage. Clicking a row selects that encounter, highlighting it and
notifying the parent via `onSelectEncounter`. A row is highlighted
green if its species, or any member of its evolution line, is the one
actually caught at this location (catching an evolution via the
Pokedex tile's evolution line records the evolved species, not the
row's original encounter species, so the comparison is
evolution-line-aware). A row is highlighted red if its evolution line
isn't caught here but has been caught elsewhere in the run, since
catching it here would violate the one-catch-per-evolution-line rule.
Either highlight takes priority over the selected highlight if both
apply. When the global "Hide Dupes" setting is enabled, rows whose
evolution line has already been caught elsewhere in the run are
omitted entirely instead of being highlighted red.

Below the header, a full-width "MISS"/"MISSED" toggle button (styled
like the Pokedex tile's catch button, red when active) records that
this location's one encounter was used up without catching anything.
It is disabled whenever a species is already caught at this location,
since the two outcomes are mutually exclusive. The button is hidden
entirely when every encounter at the location uses an unmissable
method (e.g. a gift or fossil), or when any encounter uses the
"starter" method, since a starter encounter can't be missed even
alongside other, otherwise-missable methods.

## Props

| Prop                      | Type                             | Required | Default | Description                                                                             |
| ------------------------- | -------------------------------- | -------- | ------- | --------------------------------------------------------------------------------------- |
| `caughtHere`              | `string`                         | No       | -       | The species already caught at this location, if any, highlighted green                  |
| `dupes`                   | `string[]`                       | Yes      | -       | Every species caught so far in the run, regardless of location                          |
| `encounters`              | `Encounter[]`                    | Yes      | -       | The encounter slots to display                                                          |
| `generation`              | `number`                         | Yes      | -       | The game's generation, used to resolve each Pokemon's types                             |
| `isMissed`                | `boolean`                        | Yes      | -       | Whether this location's encounter was marked missed, styling the toggle button red      |
| `onSelectEncounter`       | `(encounter: Encounter) => void` | No       | -       | Called with the clicked row's encounter                                                 |
| `onToggleMissed`          | `() => void`                     | Yes      | -       | Called when the "MISS"/"MISSED" button is clicked                                       |
| `selectedSpecies`         | `string`                         | No       | -       | The species of the currently selected row, if any, to highlight it                      |
| `starterCaughtSeparately` | `boolean`                        | Yes      | -       | Whether the run's starter was caught as its own encounter, hiding "starter"-method rows |
| `variant`                 | `string`                         | Yes      | -       | The sprite variant to prefer, matching the game's slug                                  |

## State

| State               | Type                  | Initial value               | Description                                  |
| ------------------- | --------------------- | --------------------------- | -------------------------------------------- |
| `selectedTimeOfDay` | `string \| undefined` | first available time of day | The time-of-day condition currently selected |

## Computations

- `timesOfDay` — the distinct time-of-day conditions (`time-morning`,
  `time-day`, `time-night`) present in `encounters`, in that fixed
  order; `TimeOfDayButtons` is only shown for these when there's more
  than one and `hasVisibleStarterEncounter` is false
- `hideDupes` — the global "Hide Dupes" setting's current value, read
  from `localStorage` via `SettingsHelpers`
- `visibleEncounters` — `encounters` filtered down to those with no
  time-of-day condition, plus those matching `selectedTimeOfDay`; when
  `hideDupes` is enabled, rows whose evolution line is caught elsewhere
  in the run (and not at this location) are also excluded; when
  `starterCaughtSeparately` is true, rows using the "starter" method are
  also excluded, since the starter is tracked as its own encounter
  instead
- `hasVisibleStarterEncounter` — whether `visibleEncounters` includes
  any "starter"-method encounter (after `starterCaughtSeparately`
  filtering), used to hide every other method and the time-of-day
  buttons when true
- `methods` — the distinct encounter methods present in
  `visibleEncounters`, restricted to just `starter` when
  `hasVisibleStarterEncounter` is true, ordered by a fixed
  `METHOD_ORDER` list (methods not in that list are sorted last); each
  is rendered as a `MethodGroup`, passed that method's encounters (via
  `getEncountersForMethod`)
- `getEncountersForMethod` — the `visibleEncounters` for a given method,
  sorted by `chance` descending, passed to that method's `MethodGroup`
- `getDisplayChance` — an encounter's displayed chance, passed down to
  `MethodGroup`/`EncounterRow`. When `hideDupes` is disabled, this is
  just the encounter's own `chance`. When enabled, it's rescaled
  against the other encounters remaining in the same method group (via
  `getEncountersForMethod`) so the group's chances still sum to 100%,
  truncated to a whole number (e.g. a 50/50 split becomes 100% once one
  side is hidden as a dupe)
- `isEvolutionLineCaught` — whether a species' evolution family
  (resolved via `EvolutionHelpers`) includes any name in `dupes`
- `isCaughtHere` — whether a species is in the same evolution family
  (resolved via `EvolutionHelpers`) as `caughtHere`; passed to
  `MethodGroup` as `isSpeciesCaughtHere` to highlight its row green
- `isCaughtElsewhere` — whether a species isn't `isCaughtHere` but
  `isEvolutionLineCaught`; passed to `MethodGroup` as
  `isSpeciesCaughtElsewhere` to highlight its row red
- `hasStarterEncounter` — whether `encounters` includes any "starter"-
  method encounter
- `isMissable` — whether `encounters` includes any method not in the
  fixed `UNMISSABLE_ENCOUNTER_METHODS` list, and `hasStarterEncounter`
  is false, controlling whether the "MISS"/"MISSED" button is shown;
  a "starter"-method encounter makes the location fully unmissable
  even when other, otherwise-missable methods are also present
