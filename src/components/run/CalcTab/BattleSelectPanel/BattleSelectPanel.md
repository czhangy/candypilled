# BattleSelectPanel

The damage calculator's trainer selector: a "Battle"-labeled dropdown
listing every trainer battle in the current game, in game order. Sits
between `PokemonPanel` and `TeamSelectPanel`, whose team dropdown only
appears once a battle is selected here. Padded with extra block (top and
bottom) space so its height, plus the column gap, plus `PokemonPanel`'s
height on the trainer side (which omits the Moves section) matches
`PokemonPanel`'s height on the player side (which includes it) — keeping
`BoxSelectPanel` and `TeamSelectPanel` aligned across the two columns.

## Props

| Prop             | Type                          | Required | Default | Description                                                             |
| ---------------- | ----------------------------- | -------- | ------- | ----------------------------------------------------------------------- |
| `game`           | `Game`                        | Yes      | -       | The current game; its `splits` enumerate every trainer battle, in order |
| `onSelectBattle` | `(battleKey: string) => void` | Yes      | -       | Called with the selected battle's `BattleHelpers.getBattleKey` value    |
| `selectedBattle` | `string`                      | No       | -       | The currently selected battle key, driven by the `battle` query param   |

## Computations

- `trainerOptions` — every battle in the game via `BattleHelpers.getAllBattles`,
  in game order, as dropdown options labeled by `BattleHelpers.getFullName`
