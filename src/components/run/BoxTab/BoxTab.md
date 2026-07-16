# BoxTab

The "Box" tab of a run page. Displays every Pokemon caught during the current
run on the left, taking up two-thirds of the row's width, and a preview of
the currently selected Pokemon on the right, taking up the remaining third.

## Props

| Prop                | Type                         | Required | Default | Description                                                              |
| ------------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------ |
| `game`              | `Game`                       | Yes      | -       | The current game, used to resolve the caught Pokemon's sprites and moves |
| `onDeselectPokemon` | `() => void`                 | Yes      | -       | Called to clear the currently selected caught Pokemon                    |
| `onSelectAbility`   | `(name: string) => void`     | Yes      | -       | Called with an ability's name when it's clicked in the preview           |
| `onSelectMove`      | `(name: string) => void`     | Yes      | -       | Called with a move's name when it's clicked in the preview               |
| `onSelectPokemon`   | `(location: string) => void` | Yes      | -       | Called with a caught Pokemon's location when it's clicked in the box     |
| `run`               | `Run`                        | Yes      | -       | The current run, whose `caughtPokemon` populates the box                 |
| `selectedPokemon`   | `string`                     | No       | -       | The location of the currently selected caught Pokemon, if any            |

## State

| State  | Type      | Initial value | Description                                                   |
| ------ | --------- | ------------- | ------------------------------------------------------------- |
| `view` | `BoxView` | `'box'`       | Which of `PokemonBox`'s views ("box" or "graveyard") is shown |

## Computations

- `variant` — the game's slug, used to resolve sprite art for the correct
  game generation
- `selectedCaughtPokemon` — the caught Pokemon whose location matches
  `selectedPokemon`, passed to `PokemonPreview`

## Handlers

- `handleToggleStatus` — flips a caught Pokemon's `status` between
  `PokemonStatus.Alive` and `PokemonStatus.Dead`, saves the updated run,
  and switches `view` to the box the Pokemon now belongs in (`'graveyard'`
  if it was just killed, `'box'` if it was just revived)
- `handleViewChange` — sets `view` to the view clicked in `PokemonBox`'s
  header and calls `onDeselectPokemon`, since the previously selected
  Pokemon may not belong to the newly shown view
