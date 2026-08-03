# TeamSelectPanel

The damage calculator's defender selection panel: a 6-wide grid of box
sprites for the currently selected trainer's team. Clicking a sprite selects
that team member for `TrainerPokemonPanel`, above. Shows a placeholder
message until a battle is selected. Every other team member is annotated
with a badge showing the predicted order the trainer AI would send it in if
the currently selected member fainted.

## Props

| Prop                  | Type                      | Required | Default | Description                                                                  |
| --------------------- | ------------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `game`                | `Game`                    | Yes      | -       | The current game, used to resolve the selected battle's team                 |
| `onSelectMember`      | `(index: string) => void` | Yes      | -       | Called with the clicked team member's index into the resolved team           |
| `run`                 | `Run`                     | Yes      | -       | The current run, whose `starter` resolves a starter-dependent trainer's team |
| `selectedBattle`      | `string`                  | No       | -       | The currently selected battle key, driven by the `battle` query param        |
| `selectedMemberIndex` | `string`                  | No       | -       | The currently selected team member's index, for highlighting                 |
| `target`              | `CaughtPokemon`           | No       | -       | The player's currently selected box Pokémon, the AI's evaluation target      |

## Computations

- `team` — the selected battle's team, resolved via
  `BattleHelpers.getSelectedTeam(game, selectedBattle, run.starter)`; each
  member rendered as a `PokemonHelpers.getBoxSprite` icon for its
  `PokemonHelpers.getDisplaySlug` (accounting for a held-item form change,
  e.g. Giratina holding the Griseous Orb)
- `switchInRanks` — team index -> 1-based predicted switch-in order for
  every team member other than the currently selected one, via
  `SwitchInHelpers.getSwitchInOrder`; empty whenever no member is selected
  or `target` isn't set
