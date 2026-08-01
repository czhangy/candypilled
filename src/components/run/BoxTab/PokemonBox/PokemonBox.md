# PokemonBox

A grid of the Pokémon caught during the current run, showing each one's
box sprite. The header toggles between two views: "Alive", showing every
living Pokémon, and "Dead", showing only those marked as dead; while
viewing the alive Pokémon, an "Import" button sits at the header's
right edge. Clicking a slot selects that Pokémon. Pokémon above the
current split's level cap are greyed out, but remain clickable. Slots can
be dragged and dropped onto one another to reorder the caught Pokémon. A
slot for a Pokémon holding an item shows that item's icon in
its bottom-right corner.

## Props

| Prop               | Type                                                 | Required | Default | Description                                                               |
| ------------------ | ---------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| `caughtPokemon`    | `CaughtPokemon[]`                                    | Yes      | -       | The Pokémon caught during the run, one per box slot                       |
| `levelCap`         | `number \| null`                                     | Yes      | -       | The current split's level cap, used to grey out over-leveled Pokémon      |
| `onImportClick`    | `() => void`                                         | Yes      | -       | Called when the "Import" button is clicked (only shown in the alive view) |
| `onReorderPokemon` | `(fromLocation: string, toLocation: string) => void` | Yes      | -       | Called with the dragged and drop-target locations when a slot is dropped  |
| `onSelectPokemon`  | `(location: string) => void`                         | Yes      | -       | Called with a Pokémon's location when its slot is clicked                 |
| `onViewChange`     | `(view: BoxView) => void`                            | Yes      | -       | Called with the clicked header button's view                              |
| `selectedPokemon`  | `string`                                             | No       | -       | The location of the currently selected caught Pokémon, if any             |
| `view`             | `BoxView`                                            | Yes      | -       | Which set of caught Pokémon is currently shown                            |

## State

| State             | Type     | Initial value | Description                                                             |
| ----------------- | -------- | ------------- | ----------------------------------------------------------------------- |
| `draggedLocation` | `string` | `''`          | The location of the caught Pokémon slot currently being dragged, if any |

## Computations

- `displayedPokemon` — `caughtPokemon` filtered to those with a `status`
  of `PokemonStatus.Dead` when `view` is `'dead'`, or to those
  without it when `view` is `'alive'`
- `emptyMessage` — the placeholder text shown when `displayedPokemon` is
  empty, worded for the current `view`
- `isOverCap` — whether a given Pokémon's `level` exceeds `levelCap`,
  computed per slot
- `heldItemData` — a given Pokémon's held item data (name and sprite),
  resolved via `ItemHelpers.getHeldItemData`, per slot; omitted (no icon
  shown) when the Pokémon has no held item or no data matches
- `displaySlug` — a given Pokémon's species slug for sprite/name purposes,
  resolved via `PokemonHelpers.getDisplaySlug`; differs from its stored
  `slug` for a species with a held-item form change (e.g. Giratina holding
  the Griseous Orb shows its Origin Forme box sprite), per slot

## Handlers

- **On header button click** — calls `onViewChange` with the clicked
  button's view
- **On slot drag start** — records the dragged slot's location in
  `draggedLocation`
- **On slot drop** — calls `onReorderPokemon` with `draggedLocation` and
  the drop target's location, then clears `draggedLocation`
- **On slot drag end** — clears `draggedLocation`
