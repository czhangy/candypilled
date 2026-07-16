# PokemonBox

A grid of the Pokemon caught during the current run, showing each one's
sprite. The header toggles between two views: "Box", showing every living
Pokemon, and "Graveyard", showing only those marked as dead. Clicking a
slot selects that Pokemon.

## Props

| Prop              | Type                         | Required | Default | Description                                                   |
| ----------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------- |
| `caughtPokemon`   | `CaughtPokemon[]`            | Yes      | -       | The Pokemon caught during the run, one per box slot           |
| `onSelectPokemon` | `(location: string) => void` | Yes      | -       | Called with a Pokemon's location when its slot is clicked     |
| `onViewChange`    | `(view: BoxView) => void`    | Yes      | -       | Called with the clicked header button's view                  |
| `selectedPokemon` | `string`                     | No       | -       | The location of the currently selected caught Pokemon, if any |
| `variant`         | `string`                     | Yes      | -       | The game slug used to resolve each Pokemon's sprite art       |
| `view`            | `BoxView`                    | Yes      | -       | Which set of caught Pokemon is currently shown                |

## Computations

- `displayedPokemon` — `caughtPokemon` filtered to those with a `status`
  of `PokemonStatus.Dead` when `view` is `'graveyard'`, or to those
  without it when `view` is `'box'`
- `emptyMessage` — the placeholder text shown when `displayedPokemon` is
  empty, worded for the current `view`

## Handlers

- **On header button click** — calls `onViewChange` with the clicked
  button's view
