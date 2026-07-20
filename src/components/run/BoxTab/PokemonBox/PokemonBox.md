# PokemonBox

A grid of the Pokémon caught during the current run, showing each one's
sprite. The header toggles between two views: "Box", showing every living
Pokémon, and "Graveyard", showing only those marked as dead; while
viewing the box, an "Add Pokémon" button sits at the header's right edge.
Clicking a slot selects that Pokémon. Pokémon above the current split's
level cap are greyed out, but remain clickable. Slots can be dragged and
dropped onto one another to reorder the caught Pokémon. A slot for a
Pokémon with at least one tag shows a small accent-colored dot in its
top-right corner, revealing the full tag list in a tooltip on hover. When
any caught Pokémon has at least one tag, a `TagFilter` button sits to the
right of the Box/Graveyard toggle, letting the grid be narrowed down to
Pokémon carrying every checked tag; if none match, a placeholder says so
instead of the grid.

## Props

| Prop                | Type                                                 | Required | Default | Description                                                                  |
| ------------------- | ---------------------------------------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `caughtPokemon`     | `CaughtPokemon[]`                                    | Yes      | -       | The Pokémon caught during the run, one per box slot                          |
| `levelCap`          | `number \| null`                                     | Yes      | -       | The current split's level cap, used to grey out over-leveled Pokémon         |
| `onAddPokemonClick` | `() => void`                                         | Yes      | -       | Called when the "Add Pokémon" button is clicked (only shown in the box view) |
| `onReorderPokemon`  | `(fromLocation: string, toLocation: string) => void` | Yes      | -       | Called with the dragged and drop-target locations when a slot is dropped     |
| `onSelectPokemon`   | `(location: string) => void`                         | Yes      | -       | Called with a Pokémon's location when its slot is clicked                    |
| `onViewChange`      | `(view: BoxView) => void`                            | Yes      | -       | Called with the clicked header button's view                                 |
| `selectedPokemon`   | `string`                                             | No       | -       | The location of the currently selected caught Pokémon, if any                |
| `variant`           | `string`                                             | Yes      | -       | The game slug used to resolve each Pokémon's sprite art                      |
| `view`              | `BoxView`                                            | Yes      | -       | Which set of caught Pokémon is currently shown                               |

## State

| State             | Type       | Initial value | Description                                                             |
| ----------------- | ---------- | ------------- | ----------------------------------------------------------------------- |
| `draggedLocation` | `string`   | `''`          | The location of the caught Pokémon slot currently being dragged, if any |
| `selectedTags`    | `string[]` | `[]`          | The tags currently checked in `TagFilter`                               |

## Computations

- `allTags` — every distinct tag across `caughtPokemon`, sorted
  alphabetically, offered to `TagFilter`; when empty, `TagFilter` isn't
  rendered at all
- `displayedPokemon` — `caughtPokemon` filtered to those with a `status`
  of `PokemonStatus.Dead` when `view` is `'graveyard'`, or to those
  without it when `view` is `'box'`, further filtered to those carrying
  every tag in `selectedTags`
- `emptyMessage` — the placeholder text shown when `displayedPokemon` is
  empty: a "no matches" message when `selectedTags` is non-empty,
  otherwise worded for the current `view`
- `isOverCap` — whether a given Pokémon's `level` exceeds `levelCap`,
  computed per slot

## Handlers

- **On header button click** — calls `onViewChange` with the clicked
  button's view
- **On `TagFilter` change** — sets `selectedTags`
- **On slot drag start** — records the dragged slot's location in
  `draggedLocation`
- **On slot drop** — calls `onReorderPokemon` with `draggedLocation` and
  the drop target's location, then clears `draggedLocation`
- **On slot drag end** — clears `draggedLocation`
