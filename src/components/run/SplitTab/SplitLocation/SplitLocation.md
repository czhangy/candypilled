# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content, which animates open and
closed. A location is either a
single area or a set of subareas (e.g. separate floors of a building). When
a location has more than one subarea, a row of toggle buttons appears next
to the location name to switch which subarea's map, battles, and wild
encounter table are shown; only the selected subarea is rendered. The
content is only rendered when the active section has a map or wild
encounters; locations with neither show no expanded content. Selecting a
trainer marker on the map surfaces its battle details in a battle card
alongside the map. Defeated trainers are tracked in the run's storage and
reflected on both the map and the battle card. A location's wild
encounters, if any, are shown in a table below the map and battle card,
with a Pokedex tile to its right showing whichever encounter's row was
most recently clicked in the table. Clicking a Pokemon within the
Pokedex tile's evolution line instead shows that Pokemon, without
changing which row is selected in the encounter table — the Pokedex
tile is also told which species was originally selected from the
table, so catching a Pokemon from its "Add Pokemon" modal defaults to
that original species even after navigating to an evolution. Clicking a move
within the Pokedex tile's learnset list behaves the same as clicking one
in the battle card's teams. Submitting the Pokedex tile's "Add Pokemon"
modal records the catch (species, this location's name, and the
submitted details) in the run's storage, for later Nuzlocke rule
enforcement (one catch per location, no more than one catch per
evolution line).

## Props

| Prop           | Type                     | Required | Default | Description                                                                                 |
| -------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------- |
| `game`         | `Game`                   | Yes      | -       | The game the run belongs to, for saving defeat state                                        |
| `location`     | `Location`               | Yes      | -       | The location this card displays                                                             |
| `onSelectMove` | `(name: string) => void` | Yes      | -       | Called when a move is clicked within the battle card's teams or the Pokedex tile's learnset |
| `run`          | `Run`                    | Yes      | -       | The run whose defeated battles are shown                                                    |
| `variant`      | `string`                 | Yes      | -       | The sprite variant to prefer, matching the game's slug                                      |

## State

| State                  | Type        | Initial value                                               | Description                                                                                                 |
| ---------------------- | ----------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `isOpen`               | `boolean`   | `false`                                                     | Whether the location's content is expanded                                                                  |
| `selectedBattle`       | `Battle`    | `undefined`                                                 | The battle currently selected on the map, if any                                                            |
| `selectedEncounter`    | `Encounter` | `undefined`                                                 | The encounter currently selected in the table, if any                                                       |
| `selectedSubareaIndex` | `number`    | Index of the first subarea that isn't fully cleared, or `0` | Which of the location's subareas is currently shown                                                         |
| `speciesOverride`      | `string`    | `undefined`                                                 | A species clicked within the Pokedex tile's evolution line, shown in place of `selectedEncounter`'s species |

## Computations

- `defeatedBattles` — the run's list of defeated battle keys (trainer class +
  name, since name alone is not unique)
- `nextPersonalBestBattleKey` — the key of the next required battle after the
  run's personal best, in split/location/battle order
- `isBattleDefeated` — whether a given battle's key is present in
  `defeatedBattles`
- `isBattleNextPersonalBest` — whether a given battle's key matches
  `nextPersonalBestBattleKey`
- `isSubareaCleared` — whether every required (or, if none, every) battle
  in a subarea is defeated; a subarea with no battles is never considered
  cleared
- `getDefaultSubareaIndex` — the index of the first subarea, in list order,
  that isn't fully cleared, so the location opens on the earliest subarea
  with unfinished business rather than jumping ahead to wherever a battle
  happens to be
- `getDefaultSelectedBattle` — the battle to preselect for a given subarea
  index: the first undefeated required battle in that subarea, or the last
  required (or any) battle if all are defeated
- `section` — the currently active map/battles/encounters group: the
  selected subarea when `location.subareas` is set, otherwise a section
  built from the location's own `map`/`battles`/`encountersKey`. Wild
  encounters are looked up from the game's `encounters` data via the
  section's `encountersKey`, if set. A subarea with `hideBattles` set
  contributes no battles to the section, so no markers or battle card
  render for it, even though the same subarea data may render battles
  when reused (without the flag) by another split

## Handlers

- **On header click** — toggles `isOpen`
- **On subarea button click** — selects that subarea's index
- **On trainer marker click** — selects that battle, or deselects it if
  already selected
- **On battle toggle defeated** — adds or removes the battle's key from
  the run's defeated battles in storage. Defeating a required (non-optional)
  battle also updates the run's personal best if it is farther along than
  the current one
- **On encounter table row click** — selects that encounter, showing its
  details in the Pokedex tile, and clears `speciesOverride` so the
  encounter's own species is shown
- **On subarea button click** — also clears `selectedEncounter` and
  `speciesOverride`, since a new subarea has its own encounter table
- **On Pokedex tile evolution line click** — sets `speciesOverride` to
  the clicked species, without changing `selectedEncounter`
- **On Pokedex tile "Add Pokemon" submit** — appends a record (the
  submitted details plus this location's name) to the run's
  `caughtPokemon` in storage

## SCSS Variable Dependencies

- `--accent-color` — the game's accent color, expected to be set by a
  parent
