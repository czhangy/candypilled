# BoxTab

The "Box" tab of a run page. Displays every Pokémon caught during the current
run on the left, and a preview of the currently selected Pokémon on the
right, each taking up half of the row's width.

## Props

| Prop                | Type                         | Required | Default | Description                                                                          |
| ------------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------------------ |
| `game`              | `Game`                       | Yes      | -       | The current game, used to resolve the caught Pokémon's sprites and moves             |
| `onDeselectPokemon` | `() => void`                 | Yes      | -       | Called to clear the currently selected caught Pokémon                                |
| `onSelectAbility`   | `(slug: string) => void`     | Yes      | -       | Called with an ability's slug when it's clicked in the preview                       |
| `onSelectItem`      | `(slug: string) => void`     | Yes      | -       | Called with a held item's slug when it's clicked in the preview                      |
| `onSelectLocation`  | `(location: string) => void` | Yes      | -       | Called with a caught Pokémon's location when it's clicked in the preview             |
| `onSelectMove`      | `(slug: string) => void`     | Yes      | -       | Called with a move's slug when it's clicked in the preview                           |
| `onSelectPokemon`   | `(location: string) => void` | Yes      | -       | Called with a caught Pokémon's location when it's clicked in the box                 |
| `onSelectSpecies`   | `(slug: string) => void`     | Yes      | -       | Called with a species slug when a Pokémon in the preview's evolution line is clicked |
| `run`               | `Run`                        | Yes      | -       | The current run, whose `caughtPokemon` populates the box                             |
| `selectedPokemon`   | `string`                     | No       | -       | The location of the currently selected caught Pokémon, if any                        |

## State

| State               | Type      | Initial value | Description                                                |
| ------------------- | --------- | ------------- | ---------------------------------------------------------- |
| `isImportModalOpen` | `boolean` | `false`       | Whether `ImportSaveModal` is shown                         |
| `view`              | `BoxView` | `'alive'`     | Which of `PokemonBox`'s views ("alive" or "dead") is shown |

## Computations

- `variant` — the game's slug, used to resolve sprite art for the correct
  game generation
- `selectedCaughtPokemon` — the caught Pokémon whose location matches
  `selectedPokemon`, passed to `PokemonPreview`
- `canSelectLocation` — whether `selectedCaughtPokemon`'s location matches
  a location in `game.splits`, via `SplitHelpers.getEarliestSplitName`;
  passed to `PokemonPreview` so it only renders the location as a clickable
  link when it resolves to an actual split
- `currentSplitName` / `currentSplit` — the run's current split, resolved
  via `SplitHelpers.getCurrentSplitName`
- `levelCap` — the current split's level cap via
  `SplitHelpers.getLevelCap`, passed to `PokemonBox` and
  `PokemonPreview` so over-leveled Pokémon can be flagged

## Handlers

- `handleToggleStatus` — flips a caught Pokémon's `status` between
  `PokemonStatus.Alive` and `PokemonStatus.Dead`, clearing its `heldItem`
  when the new status is `Dead` (a dead Pokémon can't hold onto its
  item), saves the updated run, and switches `view` to the view the
  Pokémon now belongs in (`'dead'` if it was just killed, `'alive'` if
  it was just revived)
- `handleViewChange` — sets `view` to the view clicked in `PokemonBox`'s
  header and calls `onDeselectPokemon`, since the previously selected
  Pokémon may not belong to the newly shown view
- `handleReorderPokemon` — moves the caught Pokémon at the dragged
  location to the drop target's index within `run.caughtPokemon` and
  saves the updated run
- `handleImportClick` — opens `ImportSaveModal`
- `handleCloseImportModal` — closes `ImportSaveModal`
- `handleImportSave` — merges the Pokémon and defeated battles parsed by
  `ImportSaveModal`. Pokémon merge into `run.caughtPokemon` by catch
  location: an imported Pokémon replaces the existing entry at the same
  location, or is appended if its location isn't already in the box
  (imported Pokémon sharing a location with each other collapse to the
  last one). `run.defeatedBattles` is replaced outright with the imported
  set (the save is authoritative for every battle it can resolve), and
  `run.personalBest` is recomputed as the farthest required battle key
  within that set, via `BattleHelpers.getRequiredBattleKeys`. Saves the
  updated run, deselects the currently selected Pokémon (since it may no
  longer exist), and switches `view` back to `'alive'`
