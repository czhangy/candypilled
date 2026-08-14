# SplitTab

The content of the "Split" tab on a game's run page. Shows a sticky table of
contents listing every location in the run's current split, with a
semi-transparent badge icon behind it, and a collapsible card for each
location. Clicking a table of contents entry jumps to that location's card
via an in-page anchor link, and the entry for whichever location is
currently scrolled into view is highlighted automatically.

## Props

| Prop                   | Type                          | Required | Default | Description                                                                                                                                             |
| ---------------------- | ----------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currentSplitName`     | `string \| null`              | Yes      | -       | The name of the split currently being shown                                                                                                             |
| `game`                 | `Game`                        | Yes      | -       | The game the run belongs to                                                                                                                             |
| `onAdvanceSplit`       | `(splitName: string) => void` | Yes      | -       | Forwarded to each `SplitLocation`; called with the next split's name when its boss/last required battle is defeated                                     |
| `onClearBattleMarker`  | `() => void`                  | Yes      | -       | Forwarded to each `SplitLocation`; called to clear the `battle` URL query param whenever a `BattleCard`'s defeat button is clicked                      |
| `onGameComplete`       | `() => void`                  | Yes      | -       | Forwarded to each `SplitLocation`; called when the game's last required battle is defeated                                                              |
| `onSelectAbility`      | `(slug: string) => void`      | Yes      | -       | Called when an ability is clicked within a `SplitLocation`'s `BattleCard` or `PokedexTile`                                                              |
| `onSelectBattleMarker` | `(battleKey: string) => void` | Yes      | -       | Forwarded to each `SplitLocation`; called with a battle's key when its trainer marker is clicked on the map                                             |
| `onSelectItem`         | `(slug: string) => void`      | Yes      | -       | Called when a held item is clicked within a `SplitLocation`'s `BattleCard`                                                                              |
| `onSelectLocation`     | `(location: string) => void`  | Yes      | -       | Called with a location's base name when it's clicked within a `SplitLocation`'s `PokedexTile`                                                           |
| `onSelectMove`         | `(slug: string) => void`      | Yes      | -       | Called when a move is clicked within a `SplitLocation`'s `BattleCard`                                                                                   |
| `onSelectSpecies`      | `(slug: string) => void`      | Yes      | -       | Called when a Pokémon's sprite or name is clicked within a `SplitLocation`'s `BattleCard`                                                               |
| `onSelectTrainer`      | `(battleKey: string) => void` | Yes      | -       | Called with the battle's key when a `SplitLocation`'s `BattleCard` trainer name header is clicked                                                       |
| `run`                  | `Run`                         | Yes      | -       | The run whose progress (caught Pokémon, missed locations) is shown within the current split                                                             |
| `selectedBattleKey`    | `string`                      | No       | -       | Forwarded to each `SplitLocation`; a battle key (e.g. from the URL) preselected over the usual default when it matches one of that location's battles   |
| `stickyOffset`         | `number`                      | Yes      | -       | The pixel height of `RunPage`'s sticky tabs/split-header block, added to the table of contents' sticky offset so it doesn't stick underneath that block |

## State

| State                | Type             | Initial value | Description                                                                                 |
| -------------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `activeLocationSlug` | `string \| null` | `null`        | The slug of the location currently scrolled into view, highlighted in the table of contents |

## Effects

- **On mount, and when the current split or `stickyOffset` changes** —
  observes each location's root element (matched by id) with an
  `IntersectionObserver` restricted to a thin band just below the sticky
  header, and sets `activeLocationSlug` to the first location (in split
  order) currently within that band
- **On mount** — if `selectedBattleKey` is set, scrolls its `LocationMap`
  panel (matched by `StringHelpers.toSlug(selectedBattleKey)`, the same
  slug `SplitLocation` gives that panel when the battle is selected) into
  view, landing its top `stickyOffset` plus 16px below the top of the
  viewport so it clears the sticky tabs/split-header block. Computed
  manually via `getBoundingClientRect`/`window.scrollTo` rather than
  `scrollIntoView`, since `stickyOffset` is already known as a prop. Since
  this tab is unmounted while another tab is active, this re-runs (and
  re-scrolls) every time the Split tab is switched into, not just on the
  run page's initial load

## Computations

- `currentSplit` — the split matching `currentSplitName`, whose locations
  are rendered as `SplitLocation` cards
- `badge` — the badge icon path for the current split, matching
  `/{variant}/badges/{slug}.png`, shown behind the table of contents

Each table of contents entry links to `#{slug}`, where `slug` is
`SplitHelpers.getLocationSlug(location.name, index)` — the same id
`SplitLocation` sets on its own root element. The location's index within
the split's locations array disambiguates locations that share a name, so
each gets a unique anchor. Each entry for a location with at least one encounter
is also preceded by a pokeball icon, with a `Tooltip` reporting the same
status on hover:

- Poké Ball — the location's encounter has been taken; the tooltip is
  suffixed with "– {name}" naming the Pokémon caught there
- Premier Ball — the location's encounter hasn't been taken or missed yet
- Premier Ball, red — the location's encounter was missed, or every one of
  the location's encounters is already a dupe (an evolution line caught
  elsewhere, or a starter tracked separately) — the tooltip reads
  accordingly

Locations with no encounters at all (no `encountersKey` on the location or
any of its subareas) show no icon, but reserve the same space so entries
stay aligned.

- `getCaughtPokemonName` — the display name of the `run.caughtPokemon` entry
  caught at the given location name, if any, formatted via `PokemonHelpers`
  and `StringHelpers.toTitleCase` so forms like `wormadam-trash` render as
  "Wormadam Trash"
- `isLocationMissed` — whether `run.missedLocations` contains the given
  location name
- `getLocationEncounters` — every encounter across a location's subareas
  (or its own `encountersKey`, if it has none), resolved from
  `game.encounters`
- `hasEncounters` — whether `getLocationEncounters` returns a non-empty list
- `isAllEncountersDupes` — the result of
  `EncounterHelpers.areAllEncountersDupes` for the location's encounters,
  `run.caughtPokemon`'s slugs, and the species caught at this location
  (if any)
