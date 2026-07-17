# PokemonBox

A grid of the Pokemon caught during the current run, showing each one's
sprite. The header toggles between two views: "Box", showing every living
Pokemon, and "Graveyard", showing only those marked as dead; while
viewing the box, an "Add Pokemon" button sits at the header's right edge.
Clicking a slot selects that Pokemon. Pokemon above the current split's
level cap are greyed out, but remain clickable. Slots can be dragged and
dropped onto one another to reorder the caught Pokemon.

## Props

| Prop                | Type                                                 | Required | Default | Description                                                                  |
| ------------------- | ---------------------------------------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `caughtPokemon`     | `CaughtPokemon[]`                                    | Yes      | -       | The Pokemon caught during the run, one per box slot                          |
| `levelCap`          | `number \| null`                                     | Yes      | -       | The current split's level cap, used to grey out over-leveled Pokemon         |
| `onAddPokemonClick` | `() => void`                                         | Yes      | -       | Called when the "Add Pokemon" button is clicked (only shown in the box view) |
| `onReorderPokemon`  | `(fromLocation: string, toLocation: string) => void` | Yes      | -       | Called with the dragged and drop-target locations when a slot is dropped     |
| `onSelectPokemon`   | `(location: string) => void`                         | Yes      | -       | Called with a Pokemon's location when its slot is clicked                    |
| `onViewChange`      | `(view: BoxView) => void`                            | Yes      | -       | Called with the clicked header button's view                                 |
| `selectedPokemon`   | `string`                                             | No       | -       | The location of the currently selected caught Pokemon, if any                |
| `variant`           | `string`                                             | Yes      | -       | The game slug used to resolve each Pokemon's sprite art                      |
| `view`              | `BoxView`                                            | Yes      | -       | Which set of caught Pokemon is currently shown                               |

## State

| State             | Type     | Initial value | Description                                                             |
| ----------------- | -------- | ------------- | ----------------------------------------------------------------------- |
| `draggedLocation` | `string` | `''`          | The location of the caught Pokemon slot currently being dragged, if any |

## Computations

- `displayedPokemon` — `caughtPokemon` filtered to those with a `status`
  of `PokemonStatus.Dead` when `view` is `'graveyard'`, or to those
  without it when `view` is `'box'`
- `emptyMessage` — the placeholder text shown when `displayedPokemon` is
  empty, worded for the current `view`
- `isOverCap` — whether a given Pokemon's `level` exceeds `levelCap`,
  computed per slot

## Handlers

- **On header button click** — calls `onViewChange` with the clicked
  button's view
- **On slot drag start** — records the dragged slot's location in
  `draggedLocation`
- **On slot drop** — calls `onReorderPokemon` with `draggedLocation` and
  the drop target's location, then clears `draggedLocation`
- **On slot drag end** — clears `draggedLocation`
