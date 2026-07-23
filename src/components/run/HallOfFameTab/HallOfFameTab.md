# HallOfFameTab

The run page's Hall of Fame tab: lets the player build a team from the
run's living box Pokémon and save it as a Hall of Fame entry. If the
current attempt already has a saved entry, its team is shown instead of
the builder.

## Props

| Prop   | Type   | Required | Default | Description      |
| ------ | ------ | -------- | ------- | ---------------- |
| `game` | `Game` | Yes      | -       | The current game |
| `run`  | `Run`  | Yes      | -       | The current run  |

## Computations

- `availablePokemon` — the run's caught Pokémon excluding dead ones, the
  pool a team can be built from
- `savedEntry` — the saved Hall of Fame entry, if any, matching both the
  current game and the run's current attempt number
