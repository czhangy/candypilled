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
with a Pokédex tile to its right showing whichever encounter's row was
most recently clicked in the table. Clicking a Pokémon within the
Pokédex tile's evolution line instead shows that Pokémon, without
changing which row is selected in the encounter table — the Pokédex
tile is also told which species was originally selected from the
table, so catching a Pokémon from its "Add Pokémon" modal defaults to
that original species even after navigating to an evolution. Clicking a move
within the Pokédex tile's learnset list behaves the same as clicking one
in the battle card's teams. Clicking a location within the Pokédex tile's
locations tab links to that location's own card in the Splits tab.
Submitting the Pokédex tile's "Add Pokémon"
modal records the catch (species, the submitted details, and a
location) in the run's storage; the location is this location's name,
except for an "egg" encounter, where the modal instead exposes its
Location field (with no default value) and the submitted value is
used instead, since an egg's eventual hatch location isn't the
location of the encounter itself. Clicking the Pokédex tile's catch
button while it reads "CAUGHT"/"HATCHED" instead removes that
location's catch from storage. Whichever species was already caught at this
location (if any) is passed to the Pokédex tile to enforce one catch
per location. Every species caught anywhere in the run is passed to
both the encounter table, which highlights a row green if its species
or any member of its evolution line has been caught, and the Pokédex
tile, which disables the catch button under the same condition (except
for the Pokémon already caught here), enforcing one catch per
evolution line. Below the encounter table's header, a "MISS"/"MISSED"
toggle button records this location's encounter as used up without a
catch, in the run's storage; while missed, the Pokédex tile's catch
button is disabled until the miss is toggled off again. Whenever the
Pokédex tile's selected Pokémon comes from a "starter" encounter, its
catch button is hidden entirely, whether or not that Pokémon is
already caught, since starters aren't caught or uncaught through the
Pokédex tile.

## Props

| Prop               | Type                          | Required | Default | Description                                                                                                                                     |
| ------------------ | ----------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `game`             | `Game`                        | Yes      | -       | The game the run belongs to, for saving defeat state                                                                                            |
| `index`            | `number`                      | Yes      | -       | This location's index within the current split's locations array, used to disambiguate its anchor id from other locations sharing the same name |
| `location`         | `Location`                    | Yes      | -       | The location this card displays                                                                                                                 |
| `onAdvanceSplit`   | `(splitName: string) => void` | Yes      | -       | Called with the name of the next split when the defeated battle is the last required battle of its split                                        |
| `onSelectAbility`  | `(name: string) => void`      | Yes      | -       | Called when an ability is clicked within the battle card's teams or the Pokédex tile's ability list                                             |
| `onSelectLocation` | `(location: string) => void`  | Yes      | -       | Called with a location's base name when it's clicked within the Pokédex tile's locations tab                                                    |
| `onSelectMove`     | `(name: string) => void`      | Yes      | -       | Called when a move is clicked within the battle card's teams or the Pokédex tile's learnset                                                     |
| `onSelectSpecies`  | `(species: string) => void`   | Yes      | -       | Called when a Pokémon's sprite or name is clicked within the battle card's teams                                                                |
| `run`              | `Run`                         | Yes      | -       | The run whose defeated battles are shown                                                                                                        |
| `variant`          | `string`                      | Yes      | -       | The sprite variant to prefer, matching the game's slug                                                                                          |

## State

| State                  | Type        | Initial value                                               | Description                                                                                                 |
| ---------------------- | ----------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `isOpen`               | `boolean`   | `true`                                                      | Whether the location's content is expanded                                                                  |
| `selectedBattle`       | `Battle`    | `undefined`                                                 | The battle currently selected on the map, if any                                                            |
| `selectedEncounter`    | `Encounter` | `undefined`                                                 | The encounter currently selected in the table, if any                                                       |
| `selectedSubareaIndex` | `number`    | Index of the first subarea that isn't fully cleared, or `0` | Which of the location's subareas is currently shown                                                         |
| `speciesOverride`      | `string`    | `undefined`                                                 | A species clicked within the Pokédex tile's evolution line, shown in place of `selectedEncounter`'s species |

## Computations

- `defeatedBattles` — the run's list of defeated battle keys (trainer class +
  name, since name alone is not unique)
- `nextPersonalBestBattleKey` — the key of the next required battle after the
  run's personal best, in split/location/battle order
- `isBattleDefeated` — whether a given battle's key is present in
  `defeatedBattles`
- `isChasingPersonalBest` — whether the run still has a personal best to
  catch up to: `true` if `run.personalBest` is set and hasn't yet been
  defeated in this run's own `defeatedBattles`; once the run reaches its
  personal best, every subsequent battle is trivially a new one, so this
  flips to `false`
- `isBattleNextPersonalBest` — whether a given battle's key matches
  `nextPersonalBestBattleKey`, and only while `isChasingPersonalBest` is
  `true`
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
  section's `encountersKey`, if set. A location or subarea with
  `hideBattles` set contributes no battles to the section, so no
  markers or battle card render for it, even though the same
  location/subarea data may render battles when reused (without the
  flag) by another split
- `dupes` — every species in `run.caughtPokemon`, regardless of
  location; passed to the encounter table and Pokédex tile to enforce
  one catch per evolution line
- `isMissed` — whether `location.name` is present in
  `run.missedLocations`; passed to the encounter table to style its
  toggle button red and disable the catch button
- `encounter` — the species in `run.caughtPokemon` whose recorded
  location matches `location.name`, if any; passed to the Pokédex tile
  to enforce one catch per location
- `usedLocations` — every location name in `run.caughtPokemon`, plus
  `run.missedLocations`; passed to the Pokédex tile to highlight
  already-used locations in its locations tab
- `starterCaughtSeparately` — whether `run.caughtPokemon` includes an
  entry located at `STARTER_LOCATION_NAME`; passed to the encounter
  table to hide "starter"-method rows once the starter is tracked as
  its own encounter
- `isStarterEncounter` — whether the Pokédex tile's selected Pokémon
  comes from a "starter" encounter: `selectedEncounter.method` when an
  encounter is selected, otherwise whether `encounter` is in the same
  evolution family (resolved via `EvolutionHelpers`) as one of the
  section's "starter"-method encounters; passed to the Pokédex tile to
  hide its catch button entirely
- `isEggEncounter` — whether the Pokédex tile's selected Pokémon comes
  from an "egg" encounter, computed the same way as `isStarterEncounter`;
  passed to the Pokédex tile to show "HATCH"/"HATCHED" instead of
  "CATCH"/"CAUGHT" and to expose `AddPokemonModal`'s Location field

The root element's `id` is `SplitHelpers.getLocationSlug(location.name,
index)`, so `SplitTab`'s table of contents can link directly to this card;
the index disambiguates locations that share a name within the split.

## Handlers

- **On header click** — toggles `isOpen`
- **On subarea button click** — selects that subarea's index
- **On trainer marker click** — selects that battle, or deselects it if
  already selected
- **On battle toggle defeated** — adds or removes the battle's key from
  the run's defeated battles in storage. Defeating a battle also marks
  every required battle before it (in split/location/battle order) as
  defeated, if not already. Defeating a required (non-optional)
  battle also updates the run's personal best if it is farther along than
  the current one. If the defeated battle is the last required battle of
  its split, calls `onAdvanceSplit` with the next split's name
- **On encounter table row click** — selects that encounter, showing its
  details in the Pokédex tile, and clears `speciesOverride` so the
  encounter's own species is shown
- **On subarea button click** — also clears `selectedEncounter` and
  `speciesOverride`, since a new subarea has its own encounter table
- **On Pokédex tile evolution line click** — sets `speciesOverride` to
  the clicked species, without changing `selectedEncounter`
- **On Pokédex tile "Add Pokémon" submit** — appends a record (the
  submitted details, an empty `heldItem`, and a `status` of
  `PokemonStatus.Alive`) to the run's `caughtPokemon` in storage, with
  the location set to the submitted location when `isEggEncounter`,
  otherwise `location.name`
- **On Pokédex tile catch button click while caught here** — removes
  this location's record from the run's `caughtPokemon` in storage
- **On "Add Pokémon" submit** — also removes `location.name` from the
  run's `missedLocations` in storage, if present, since catching and
  missing are mutually exclusive
- **On encounter table "MISS"/"MISSED" button click** — adds or
  removes `location.name` from the run's `missedLocations` in storage

## SCSS Variable Dependencies

- `--accent-color` — the game's accent color, expected to be set by a
  parent
