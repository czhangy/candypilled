# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content. A location is either a
single area or a set of subareas (e.g. separate floors of a building). When
a location has more than one subarea, a row of toggle buttons appears next
to the location name to switch which subarea's map, battles, and wild
encounter table are shown; only the selected subarea is rendered. The
content is only rendered when the active section has a map or wild
encounters; locations with neither show no expanded content. Selecting a
trainer marker on the map surfaces its battle details in a battle card
alongside the map. Defeated trainers are tracked in the run's storage and
reflected on both the map and the battle card. A location's wild
encounters, if any, are shown in a table below the map and battle card.

## Props

| Prop       | Type       | Required | Default | Description                                            |
| ---------- | ---------- | -------- | ------- | ------------------------------------------------------ |
| `game`     | `Game`     | Yes      | -       | The game the run belongs to, for saving defeat state   |
| `location` | `Location` | Yes      | -       | The location this card displays                        |
| `run`      | `Run`      | Yes      | -       | The run whose defeated battles are shown               |
| `variant`  | `string`   | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## State

| State                  | Type      | Initial value                                                       | Description                                         |
| ---------------------- | --------- | ------------------------------------------------------------------- | --------------------------------------------------- |
| `isOpen`               | `boolean` | `false`                                                             | Whether the location's content is expanded          |
| `selectedBattle`       | `Battle`  | `undefined`                                                         | The battle currently selected on the map, if any    |
| `selectedSubareaIndex` | `number`  | Index of the subarea containing the default selected battle, or `0` | Which of the location's subareas is currently shown |

## Computations

- `defeatedBattles` — the run's list of defeated battle (trainer) names
- `nextPersonalBestBattleName` — the next required battle after the run's
  personal best, in split/location/battle order
- `isBattleDefeated` — whether a given battle's name is present in
  `defeatedBattles`
- `isBattleNextPersonalBest` — whether a given battle's name matches
  `nextPersonalBestBattleName`
- `getDefaultSelectedBattle` — the battle to preselect: the first
  undefeated required battle across all of the location's subareas, or the
  last required (or any) battle if all are defeated
- `getDefaultSubareaIndex` — the index of the subarea containing the
  default selected battle, so the location opens on the subarea with the
  next fight
- `section` — the currently active map/battles/encounters group: the
  selected subarea when `location.subareas` is set, otherwise a section
  built from the location's own `map`/`battles`/`encountersKey`. Wild
  encounters are looked up from generated PokeAPI data via the section's
  `encountersKey`, if set

## Handlers

- **On header click** — toggles `isOpen`
- **On subarea button click** — selects that subarea's index
- **On trainer marker click** — selects that battle, or deselects it if
  already selected
- **On battle toggle defeated** — adds or removes the battle's name from
  the run's defeated battles in storage. Defeating a required (non-optional)
  battle also updates the run's personal best if it is farther along than
  the current one

## SCSS Variable Dependencies

- `--accent-color` — the game's accent color, expected to be set by a
  parent
