# HallOfFameTab

The run page's Hall of Fame tab: lets the player build a team from the
run's living box Pokémon and save it as a Hall of Fame entry.

## Props

| Prop   | Type   | Required | Default | Description      |
| ------ | ------ | -------- | ------- | ---------------- |
| `game` | `Game` | Yes      | -       | The current game |
| `run`  | `Run`  | Yes      | -       | The current run  |

## Computations

- `availablePokemon` — the run's caught Pokémon excluding dead ones, the
  pool a team can be built from
