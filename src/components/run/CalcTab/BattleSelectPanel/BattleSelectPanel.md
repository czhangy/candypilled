# BattleSelectPanel

The damage calculator's trainer selector: a single dropdown listing every
trainer battle in the current game, in game order. Sits above
`TrainerPokemonPanel`, whose team dropdown only appears once a battle is
selected here.

## Props

| Prop             | Type                          | Required | Default | Description                                                             |
| ---------------- | ----------------------------- | -------- | ------- | ----------------------------------------------------------------------- |
| `game`           | `Game`                        | Yes      | -       | The current game; its `splits` enumerate every trainer battle, in order |
| `onSelectBattle` | `(battleKey: string) => void` | Yes      | -       | Called with the selected battle's `BattleHelpers.getBattleKey` value    |
| `selectedBattle` | `string`                      | No       | -       | The currently selected battle key, driven by the `battle` query param   |

## Computations

- `trainerOptions` — every battle in the game via `BattleHelpers.getAllBattles`,
  in game order, as dropdown options labeled by `BattleHelpers.getFullName`
