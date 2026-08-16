# BoxSelectPanel

The damage calculator's attacker selection panel: a 6-wide grid of box
sprites for every living Pokémon in the run's box, in box order. Clicking a
sprite selects that Pokémon for `PokemonPanel`, above. Each sprite shows a
red rabbit or blue snail icon in its top-right corner when that Pokémon is
faster or slower than the currently selected enemy Pokémon, with a matching
`Tooltip` on hover.

## Props

| Prop               | Type                         | Required | Default | Description                                                            |
| ------------------ | ---------------------------- | -------- | ------- | ---------------------------------------------------------------------- |
| `dataSource`       | `GameDataSource`             | Yes      | -       | The game's Pokémon dataset, used to resolve sprites and base stats     |
| `enemySpeed`       | `number \| undefined`        | Yes      | -       | The currently selected enemy Pokémon's battle Speed, for comparison    |
| `generation`       | `number`                     | Yes      | -       | The current game's generation, for resolving each Pokémon's base stats |
| `onSelectPokemon`  | `(location: string) => void` | Yes      | -       | Called with the clicked Pokémon's location                             |
| `run`              | `Run`                        | Yes      | -       | The current run, whose living `caughtPokemon` populate the grid        |
| `selectedLocation` | `string`                     | No       | -       | The currently selected Pokémon's location, for highlighting            |

## Computations

- `livingPokemon` — `run.caughtPokemon` filtered to `PokemonStatus.Alive`, in
  box order; each rendered as a `PokemonHelpers.getBoxSprite` icon for its
  `PokemonHelpers.getDisplaySlug` (accounting for a held-item form change,
  e.g. Giratina holding the Griseous Orb)
- `getSpeed` — a caught Pokémon's own unboosted Speed stat at its stored
  level/IVs/EVs/nature, for comparison against `enemySpeed`
- `getSpeedComparison` — compares a caught Pokémon's `getSpeed` result
  against `enemySpeed`, or `undefined` if either Speed is unknown
