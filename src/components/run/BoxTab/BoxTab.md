# BoxTab

The "Box" tab of a run page. Displays every Pokémon caught during the current
run on the left, taking up two-thirds of the row's width, and a preview of
the currently selected Pokémon on the right, taking up the remaining third.

## Props

| Prop                | Type                         | Required | Default | Description                                                              |
| ------------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------ |
| `game`              | `Game`                       | Yes      | -       | The current game, used to resolve the caught Pokémon's sprites and moves |
| `onDeselectPokemon` | `() => void`                 | Yes      | -       | Called to clear the currently selected caught Pokémon                    |
| `onSelectAbility`   | `(name: string) => void`     | Yes      | -       | Called with an ability's name when it's clicked in the preview           |
| `onSelectLocation`  | `(location: string) => void` | Yes      | -       | Called with a caught Pokémon's location when it's clicked in the preview |
| `onSelectMove`      | `(name: string) => void`     | Yes      | -       | Called with a move's name when it's clicked in the preview               |
| `onSelectPokemon`   | `(location: string) => void` | Yes      | -       | Called with a caught Pokémon's location when it's clicked in the box     |
| `run`               | `Run`                        | Yes      | -       | The current run, whose `caughtPokemon` populates the box                 |
| `selectedPokemon`   | `string`                     | No       | -       | The location of the currently selected caught Pokémon, if any            |

## State

| State                   | Type      | Initial value | Description                                                |
| ----------------------- | --------- | ------------- | ---------------------------------------------------------- |
| `isAddPokemonModalOpen` | `boolean` | `false`       | Whether `AddPokemonModal` is shown                         |
| `view`                  | `BoxView` | `'alive'`     | Which of `PokemonBox`'s views ("alive" or "dead") is shown |

## Computations

- `variant` — the game's slug, used to resolve sprite art for the correct
  game generation
- `allSpecies` — every species introduced at or before `game.generation`
  (via `PokemonHelpers.getAllSpecies`) that isn't already caught or in a
  caught Pokémon's evolution line (via `EvolutionHelpers.isSameEvolutionLine`
  against every `run.caughtPokemon` entry), offered in `AddPokemonModal`'s
  Pokémon dropdown; also supplies its default species (the first entry)
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
- `run.caughtPokemon`'s locations are passed to `AddPokemonModal` as
  `existingLocations`, so it can disable submitting a duplicate location

## Handlers

- `handleAddPokemonClick` — opens `AddPokemonModal`
- `handleCloseAddPokemonModal` — closes `AddPokemonModal`
- `handleAddPokemon` — appends a new record (the submitted details, its
  freeform location, an empty `heldItem`, and a `status` of
  `PokemonStatus.Alive`) to `run.caughtPokemon` and saves the updated
  run; `AddPokemonModal` closes itself, with its own exit animation,
  once it requests the close
- `handleToggleStatus` — flips a caught Pokémon's `status` between
  `PokemonStatus.Alive` and `PokemonStatus.Dead`, saves the updated run,
  and switches `view` to the view the Pokémon now belongs in (`'dead'`
  if it was just killed, `'alive'` if it was just revived)
- `handleEditPokemon` — merges a caught Pokémon's edited details (ability,
  EVs, IVs, level, moves, nature, tags) into `run.caughtPokemon` and saves
  the updated run
- `handleEvolve` — updates a caught Pokémon's `name` to the confirmed
  evolution's species and saves the updated run
- `handleViewChange` — sets `view` to the view clicked in `PokemonBox`'s
  header and calls `onDeselectPokemon`, since the previously selected
  Pokémon may not belong to the newly shown view
- `handleReorderPokemon` — moves the caught Pokémon at the dragged
  location to the drop target's index within `run.caughtPokemon` and
  saves the updated run
