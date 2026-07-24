# TeamSelectPanel

The damage calculator's defender selection panel: a 6-wide grid of box
sprites for the currently selected trainer's team. Clicking a sprite selects
that team member for `TrainerPokemonPanel`, above. Shows a placeholder
message until a battle is selected.

## Props

| Prop                  | Type                      | Required | Default | Description                                                                  |
| --------------------- | ------------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `game`                | `Game`                    | Yes      | -       | The current game, used to resolve the selected battle's team                 |
| `onSelectMember`      | `(index: string) => void` | Yes      | -       | Called with the clicked team member's index into the resolved team           |
| `run`                 | `Run`                     | Yes      | -       | The current run, whose `starter` resolves a starter-dependent trainer's team |
| `selectedBattle`      | `string`                  | No       | -       | The currently selected battle key, driven by the `battle` query param        |
| `selectedMemberIndex` | `string`                  | No       | -       | The currently selected team member's index, for highlighting                 |

## Computations

- `team` — the selected battle's team, resolved via
  `BattleHelpers.getSelectedTeam(game, selectedBattle, run.starter)`; each
  member rendered as a `PokemonHelpers.getBoxSprite` icon
