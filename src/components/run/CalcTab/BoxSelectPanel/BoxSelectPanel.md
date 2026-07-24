# BoxSelectPanel

The damage calculator's attacker selection panel: a 6-wide grid of box
sprites for every living Pokémon in the run's box, in box order. Clicking a
sprite selects that Pokémon for `PokemonPanel`, above.

## Props

| Prop               | Type                         | Required | Default | Description                                                     |
| ------------------ | ---------------------------- | -------- | ------- | --------------------------------------------------------------- |
| `onSelectPokemon`  | `(location: string) => void` | Yes      | -       | Called with the clicked Pokémon's location                      |
| `run`              | `Run`                        | Yes      | -       | The current run, whose living `caughtPokemon` populate the grid |
| `selectedLocation` | `string`                     | No       | -       | The currently selected Pokémon's location, for highlighting     |

## Computations

- `livingPokemon` — `run.caughtPokemon` filtered to `PokemonStatus.Alive`, in
  box order; each rendered as a `PokemonHelpers.getBoxSprite` icon
