# SplitTab

The content of the "Split" tab on a game's run page. Shows a sticky table of
contents listing every location in the run's current split, with a
semi-transparent badge icon behind it, and a collapsible card for each
location. Clicking a table of contents entry jumps to that location's card
via an in-page anchor link, and the entry for whichever location is
currently scrolled into view is highlighted automatically.

## Props

| Prop               | Type                     | Required | Default | Description                                                                                                                                             |
| ------------------ | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currentSplitName` | `string \| null`         | Yes      | -       | The name of the split currently being shown                                                                                                             |
| `game`             | `Game`                   | Yes      | -       | The game the run belongs to                                                                                                                             |
| `onSelectAbility`  | `(name: string) => void` | Yes      | -       | Called when an ability is clicked within a `SplitLocation`'s `BattleCard` or `PokedexTile`                                                              |
| `onSelectMove`     | `(name: string) => void` | Yes      | -       | Called when a move is clicked within a `SplitLocation`'s `BattleCard`                                                                                   |
| `run`              | `Run`                    | Yes      | -       | The run whose progress (caught Pokemon, missed locations) is shown within the current split                                                             |
| `stickyOffset`     | `number`                 | Yes      | -       | The pixel height of `RunPage`'s sticky tabs/split-header block, added to the table of contents' sticky offset so it doesn't stick underneath that block |

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

## Computations

- `currentSplit` — the split matching `currentSplitName`, whose locations
  are rendered as `SplitLocation` cards
- `badge` — the badge icon path for the current split, matching
  `/{variant}/badges/{slug}.png`, shown behind the table of contents

Each table of contents entry links to `#{slug}`, where `slug` is
`StringHelpers.toSlug(location.name)` — the same id `SplitLocation` sets on
its own root element. Each entry for a location with at least one encounter
is also preceded by a pokeball icon, with a `Tooltip` reporting the same
status on hover:

- Poké Ball — the location's encounter has been taken; the tooltip is
  suffixed with "– {name}" naming the Pokemon caught there
- Premier Ball — the location's encounter hasn't been taken or missed yet
- Premier Ball, red — the location's encounter was missed

Locations with no encounters at all (no `encountersKey` on the location or
any of its subareas) show no icon, but reserve the same space so entries
stay aligned.

- `getCaughtPokemonName` — the display name of the `run.caughtPokemon` entry
  caught at the given location name, if any, formatted via `PokemonHelpers`
  and `StringHelpers.toTitleCase` so forms like `wormadam-trash` render as
  "Wormadam Trash"
- `isLocationMissed` — whether `run.missedLocations` contains the given
  location name
- `hasEncounters` — whether a location (or, if it has subareas, any of its
  subareas) has an `encountersKey` resolving to a non-empty encounter list
  in `game.encounters`
