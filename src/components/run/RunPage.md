# RunPage

The dedicated page for a single game's run, reached from a game's entry on
the runs list. Displays a back link to the runs list, the game's title with
the current attempt number alongside an Import button and a togglable
Wipe/RESPAWN button. Below that, if the run hasn't been
wiped, a sticky block pinned to the top of the viewport while the active
tab's content scrolls beneath it, with — on the Splits tab — the current
split's header in the top-left corner and a row of tabs for switching
between the different views of the run in the top-right corner; on other
tabs, just the row of tabs. If the run has been wiped, a message picked at
random from the game's wipe messages is shown instead. Clicking Import
opens `ImportSaveModal` regardless of the active tab or wipe state.

## Props

| Prop   | Type     | Required | Default | Description                                  |
| ------ | -------- | -------- | ------- | -------------------------------------------- |
| `slug` | `string` | Yes      | -       | The slugified game name identifying the page |

## State

| State                | Type      | Initial value | Description                                                                                             |
| -------------------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `isImportModalOpen`  | `boolean` | `false`       | Whether `ImportSaveModal` is shown                                                                      |
| `stickyHeaderHeight` | `number`  | `0`           | The measured pixel height of the sticky tabs/split-header block, passed to `SplitTab` as `stickyOffset` |

## Effects

- **On active tab or wipe state change** — re-measures the sticky
  tabs/split-header block's height into `stickyHeaderHeight`, and
  re-measures on window resize, so `SplitTab`'s table of contents can offset
  itself below the sticky block regardless of its content (e.g. whether the
  current split has a level cap)

## Computations

- `activeTab` — the `id` of the currently active tab, read from the `tab`
  query param, defaulting to `'hof'` if `isHallOfFameUnlocked` and
  `'split'` otherwise when absent
- `activeSubtab` — the `id` of the currently active Data subtab, read
  from the `subtab` query param, defaulting to `'pokedex'` if absent
- `selectedMove` — the currently selected move's slug, read from the `move`
  query param, shared between the Data tab's Moves subtab and move
  links elsewhere on the page
- `selectedAbility` — the currently selected ability's slug, read from the
  `ability` query param
- `selectedItem` — the currently selected item's slug, read from the
  `item` query param
- `selectedSpecies` — the currently selected Pokémon's species, read from
  the `species` query param, shared between the Data tab's Pokédex
  subtab and its own evolution line links
- `runSplitName` — the name of the first split (in game order) not yet
  present in `run.completedSplits`, or the last split if every split is
  completed; this is the split the run has actually progressed to,
  regardless of which split is being viewed
- `currentSplitName` — the split named by the `split` query param if it
  matches one of `game.splits`, otherwise `runSplitName`; `RunEntry` links
  to the page with no `split` param, so a freshly opened run automatically
  shows its current split
- `game` — the `Game` matching `slug`, looked up from the static game list;
  triggers a 404 if no game matches
- `run` — the stored `Run` for `game`, looked up from the run store snapshot
- `updateQueryParams` — merges the given key/value pairs into the current
  URL's query string (deleting keys whose value is `undefined`) and
  navigates to it with `router.replace`, so tab/move/ability/split
  selection is linkable and shareable
- `wipeMessage` — a message picked at random from `DEFAULT_WIPE_MESSAGES`
  combined with `game.wipeMessages`, shown when the run has been wiped
- `isHallOfFameUnlocked` — whether every split in `game.splits` is present
  in `run.completedSplits` (`SplitHelpers.isGameComplete`); gates both the
  Hall of Fame tab's visibility in `visibleTabs` and its content, in case
  its query param is set directly
- `visibleTabs` — `TABS` with the Hall of Fame tab filtered out unless
  `isHallOfFameUnlocked`

## Handlers

- **On tab change** (from `Tabs`) — sets the `tab` query param and clears
  whichever of `pokemon`/`subtab`/`species`/`move`/`ability`/`item` isn't
  relevant to the destination tab, so a tab's selection param doesn't
  linger in the URL after navigating away from it. `battle` is left
  untouched, since it's shared between the Splits tab's trainer markers and
  the Calc tab's battle selection and should persist across tab switches
- **On subtab change** (from `DataTab`) — sets the `subtab` query param
  and clears `species`/`move`/`ability`/`item`, so a subtab's selection
  param doesn't linger in the URL after switching to a different subtab
- **On move link click** (from `SplitTab` or `PokedexSubtab`, e.g. a move
  within `BattleCard` or `PokedexSubtab`'s learnset) — opens the Data
  tab's Moves subtab for that move
  (`?tab=data&subtab=moves&move=<slug>`) in a new browser tab, leaving
  the current page untouched
- **On move select** (from `DataTab`'s Moves subtab) — sets the `move`
  query param without changing `tab`/`subtab`
- **On ability select** (from `DataTab`'s Abilities subtab) — sets the
  `ability` query param without changing `tab`/`subtab`
- **On item select** (from `DataTab`'s Items subtab) — sets the `item`
  query param without changing `tab`/`subtab`
- **On ability link click** (from `SplitTab` or `PokedexSubtab`, e.g. an
  ability within `PokedexTile` or `BattleCard`) — opens the Data tab's
  Abilities subtab for that ability
  (`?tab=data&subtab=abilities&ability=<slug>`) in a new browser tab,
  leaving the current page untouched
- **On item link click** (from `SplitTab`, a Pokémon's held item within
  `BattleCard`, or from `BoxTab`'s `PokemonPreview`) — opens the Data
  tab's Items subtab for that item (`?tab=data&subtab=items&item=<slug>`)
  in a new browser tab, leaving the current page untouched
- **On species link click** (from `SplitTab`, a Pokémon's sprite or name
  within `BattleCard`) — opens the Data tab's Pokédex subtab for that
  species (`?tab=data&subtab=pokedex&species=<slug>`) in a new browser
  tab, leaving the current page untouched
- **On species select** (from `DataTab`'s Pokédex subtab, whether from
  its species list or its `PokedexDetail`'s evolution line) — sets the
  `species` query param without changing `tab`/`subtab`
- **On trainer link click** (from `SplitTab`, a `BattleCard`'s trainer name
  header) — opens the Calc tab for that battle (`?tab=calc&battle=<key>`)
  in a new browser tab, leaving the current page untouched
- **On battle marker select** (from `SplitTab`, a `LocationMap`'s trainer
  marker) — sets the `battle` query param to that battle's key, without
  changing `tab`. Every `SplitLocation` reads this same param, so if its
  location has a battle matching the key, that battle is preselected there
  too
- **On Pokémon deselect** (from `BoxTab`, when switching between its box
  and graveyard views) — clears the `pokemon` query param
- **On location select** (from `BoxTab`'s `PokemonPreview`, `SplitTab`'s
  `PokedexTile` locations tab, or `DataTab`'s Pokédex subtab) —
  resolves the location's earliest split and index within it via
  `SplitHelpers.getEarliestLocation`, then navigates to the Splits tab for
  that split (`?tab=split&split=<name>`, clearing
  `pokemon`/`subtab`/`move`/`ability`/`item`/`species`) with the location's
  disambiguated slug (via `SplitHelpers.getLocationSlug`) as a URL hash, so
  the browser scrolls to its card; no-ops if the location doesn't match
  any split
- **On split select** (from `SplitHeader`'s dropdown) — sets the `split`
  query param without changing `tab`, and scrolls the page to the top
- **On split complete toggle** (from `SplitTab`'s "Clear Split"/"Split
  Completed" button) — when completing, adds the given split name and
  every split before it (in game order) to `run.completedSplits`; when
  undoing, removes only the given split name. Saves the run either way; if
  completing newly completes every split in the game, sets the `tab` query
  param to `hof` and scrolls the page to the top
- **On Wipe toggle** — flips `run.wipe` and saves the run; the button reads
  "Wipe" when `run.wipe` is `false` and "RESPAWN" when `true`
- **On Import click** — opens `ImportSaveModal`
- **On import modal close** — closes `ImportSaveModal`
- **On import save** (from `ImportSaveModal`'s `onSubmit`) — merges the
  Pokémon parsed from the uploaded save into `run.caughtPokemon` by catch
  location: an imported Pokémon replaces the existing entry at the same
  location, or is appended if its location isn't already in the box
  (imported Pokémon sharing a location with each other collapse to the
  last one). `run.completedSplits` is replaced outright with the imported
  set (the save is authoritative for every split it can resolve). Saves
  the updated run and deselects the currently selected Pokémon (since it
  may no longer exist)
