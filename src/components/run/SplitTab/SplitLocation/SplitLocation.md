# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content, which animates open and
closed. A location is either a
single area or a set of subareas (e.g. separate floors of a building). When
a location has more than one subarea, a row of toggle buttons appears next
to the location name to switch which subarea's map, battles, and wild
encounter table are shown; only the selected subarea is rendered. The
content is only rendered when the active section has a map or wild
encounters; locations with neither show no expanded content. Unless the
"Show Dupes" setting is on, and every one of the active section's
encounters is either an evolution line already caught elsewhere or a
starter tracked separately, the encounter table and Pokédex tile are not
rendered at all (rather than rendering an empty table), and the section
is treated as mapless for the purpose of showing expanded content if it
also has no map. Selecting a
trainer marker on the map surfaces its battle details in a battle card
alongside the map. A location's wild
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

| Prop                   | Type                          | Required | Default | Description                                                                                                                                     |
| ---------------------- | ----------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `game`                 | `Game`                        | Yes      | -       | The game the run belongs to                                                                                                                     |
| `index`                | `number`                      | Yes      | -       | This location's index within the current split's locations array, used to disambiguate its anchor id from other locations sharing the same name |
| `location`             | `Location`                    | Yes      | -       | The location this card displays                                                                                                                 |
| `onSelectAbility`      | `(slug: string) => void`      | Yes      | -       | Called when an ability is clicked within the battle card's teams or the Pokédex tile's ability list                                             |
| `onSelectBattleMarker` | `(battleKey: string) => void` | Yes      | -       | Called with a battle's key when its trainer marker is clicked on the map, so the selection can be persisted (e.g. to the URL) beyond this card  |
| `onSelectItem`         | `(slug: string) => void`      | Yes      | -       | Called when a held item is clicked within the battle card's teams or the encounter table's trade rows                                           |
| `onSelectLocation`     | `(location: string) => void`  | Yes      | -       | Called with a location's base name when it's clicked within the Pokédex tile's locations tab                                                    |
| `onSelectMove`         | `(slug: string) => void`      | Yes      | -       | Called when a move is clicked within the battle card's teams or the Pokédex tile's learnset                                                     |
| `onSelectSpecies`      | `(slug: string) => void`      | Yes      | -       | Called when a Pokémon's sprite or name is clicked within the battle card's teams                                                                |
| `onSelectTrainer`      | `(battleKey: string) => void` | Yes      | -       | Called with the battle's key when the battle card's trainer name header is clicked                                                              |
| `run`                  | `Run`                         | Yes      | -       | The run whose caught Pokémon/missed locations are shown                                                                                         |
| `selectedBattleKey`    | `string`                      | No       | -       | A battle key (e.g. from the URL) that, when it matches a battle in this location, is preselected over the usual default                         |
| `variant`              | `string`                      | Yes      | -       | The sprite variant to prefer, matching the game's slug                                                                                          |

## State

| State                  | Type        | Initial value              | Description                                                                                                 |
| ---------------------- | ----------- | -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `isOpen`               | `boolean`   | `true`                     | Whether the location's content is expanded                                                                  |
| `selectedBattle`       | `Battle`    | `undefined`                | The battle currently selected on the map, if any                                                            |
| `selectedEncounter`    | `Encounter` | `undefined`                | The encounter currently selected in the table, if any                                                       |
| `selectedSubareaIndex` | `number`    | `getInitialSubareaIndex()` | Which of the location's subareas is currently shown                                                         |
| `speciesOverride`      | `string`    | `undefined`                | A species clicked within the Pokédex tile's evolution line, shown in place of `selectedEncounter`'s species |

## Computations

- `getAllBattles` — every battle across all of the location's subareas
  that matches `run.gender` (via `BattleHelpers.filterByGender` — a battle
  restricted to the other gender is excluded entirely), in subarea order,
  each paired with its subarea's index
- `getInitialSubareaIndex` — the subarea to open on: the subarea containing
  the battle matching `selectedBattleKey`, if set and present in this
  location; otherwise subarea `0`
- `getDefaultSelectedBattle` — the battle to preselect for a given subarea
  index, from the same gender-filtered battle list as `getAllBattles`: the
  battle matching `selectedBattleKey`, if set and present in that subarea;
  otherwise the first battle in that subarea's array, regardless of
  `BattleMetadata.Optional`
- `section` — the currently active map/battles/encounters group: the
  selected subarea when `location.subareas` is set, otherwise a section
  built from the location's own `map`/`battles`/`encountersKey`. Wild
  encounters are looked up from the game's `encounters` data via the
  section's `encountersKey`, if set. A location or subarea with
  `hideBattles` set contributes no battles to the section, so no
  markers or battle card render for it, even though the same
  location/subarea data may render battles when reused (without the
  flag) by another split; a battle restricted to the other gender (via
  `BattleHelpers.filterByGender`) is excluded the same way
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
- `isStarterEncounter` — whether the Pokédex tile's selected Pokémon
  comes from a "starter" encounter: `selectedEncounter.method` when an
  encounter is selected, otherwise whether `encounter` is in the same
  evolution family (resolved via `EvolutionHelpers`) as one of the
  section's "starter"-method encounters; passed to the Pokédex tile to
  hide its catch button entirely
- `isEggEncounter` — whether the Pokédex tile's selected Pokémon comes
  from an "egg" encounter, computed the same way as `isStarterEncounter`;
  passed to the Pokédex tile to show "HATCH"/"HATCHED" instead of
  "CATCH"/"CAUGHT", and used to record the catch under a placeholder
  location instead of `location.name`
- `allEncountersHidden` — whether `EncounterHelpers.areAllEncountersHidden`
  returns `true` for the active section's encounters given the current
  global settings (e.g. "Show Dupes", "Show Legendaries") plus `dupes`
  and `encounter`; hides the encounter table and Pokédex tile when
  `true`. New settings that permanently hide encounters extend
  `ENCOUNTER_HIDE_RULES` in `EncounterHelpers` rather than adding logic
  here

The root element's `id` is `SplitHelpers.getLocationSlug(location.name,
index)`, so `SplitTab`'s table of contents can link directly to this card;
the index disambiguates locations that share a name within the split.
`LocationMap` is given its own `id` — `BattleHelpers.getBattleSlug(selectedBattle)`
— whenever `selectedBattle` belongs to the active section's battles, so
`SplitTab` can scroll directly to the map panel (rather than the battle
card) when entering with a matching battle selected.

## Handlers

- **On header click** — toggles `isOpen`
- **On subarea button click** — selects that subarea's index
- **On trainer marker click** — selects that battle and calls
  `onSelectBattleMarker` with its key
- **On encounter table row click** — selects that encounter, showing its
  details in the Pokédex tile, and clears `speciesOverride` so the
  encounter's own species is shown
- **On subarea button click** — also clears `selectedEncounter` and
  `speciesOverride`, since a new subarea has its own encounter table
- **On Pokédex tile evolution line click** — sets `speciesOverride` to
  the clicked species, without changing `selectedEncounter`
- **On Pokédex tile catch button click while not caught here** —
  appends a record (the details `PokedexTile` calls `onAddPokemon`
  with, an empty `heldItem`, and a `status` of `PokemonStatus.Alive`)
  to the run's `caughtPokemon` in storage, with the location set to
  `"Mystery Zone"` when `isEggEncounter` (since an egg's actual hatch
  location isn't tracked), otherwise `location.name`; also removes
  `location.name` from the run's `missedLocations` in storage, if
  present, since catching and missing are mutually exclusive
- **On Pokédex tile catch button click while caught here** — removes
  this location's record from the run's `caughtPokemon` in storage
- **On encounter table "MISS"/"MISSED" button click** — adds or
  removes `location.name` from the run's `missedLocations` in storage

## SCSS Variable Dependencies

- `--accent-color` — the game's accent color, expected to be set by a
  parent
