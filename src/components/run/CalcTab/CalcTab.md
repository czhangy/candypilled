# CalcTab

The "Calc" tab of a run page. A damage calculator: the attacker's
`PokemonPanel`, selected from the run's box, alongside a defender column
where `BattleSelectPanel` picks a trainer and `TrainerPokemonPanel` picks and
displays one of that trainer's Pokémon.

## Props

| Prop             | Type                          | Required | Default | Description                                                               |
| ---------------- | ----------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| `game`           | `Game`                        | Yes      | -       | The current game, passed through to all three panels                      |
| `onSelectBattle` | `(battleKey: string) => void` | Yes      | -       | Called with the selected battle's key, forwarded from `BattleSelectPanel` |
| `run`            | `Run`                         | Yes      | -       | The current run, passed through to `PokemonPanel`/`TrainerPokemonPanel`   |
| `selectedBattle` | `string`                      | No       | -       | The currently selected battle key, driven by the `battle` query param     |
