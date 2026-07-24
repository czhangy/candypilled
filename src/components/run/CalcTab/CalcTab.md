# CalcTab

The "Calc" tab of a run page. A damage calculator with two columns: the
attacker column (`PokemonPanel` above `BoxSelectPanel`, sourced from the
run's box) and the defender column (`BattleSelectPanel` above
`TrainerPokemonPanel` above `TeamSelectPanel`, sourced from the game's
trainers). Owns the attacker/defender selection state that flows down to
each column's panels.

## Props

| Prop             | Type                          | Required | Default | Description                                                               |
| ---------------- | ----------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| `game`           | `Game`                        | Yes      | -       | The current game, passed through to every panel                           |
| `onSelectBattle` | `(battleKey: string) => void` | Yes      | -       | Called with the selected battle's key, forwarded from `BattleSelectPanel` |
| `run`            | `Run`                         | Yes      | -       | The current run, passed through to every panel except `BattleSelectPanel` |
| `selectedBattle` | `string`                      | No       | -       | The currently selected battle key, driven by the `battle` query param     |

## State

| State                 | Type                  | Initial value                         | Description                                                                      |
| --------------------- | --------------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| `selectedLocation`    | `string`              | `''`                                  | The selected box Pokémon's location, set by `BoxSelectPanel`                     |
| `selectedMemberIndex` | `string`              | `''`                                  | The selected trainer team member's index, set by `TeamSelectPanel`               |
| `prevSelectedBattle`  | `string \| undefined` | `selectedBattle` (initial prop value) | Tracks the last-seen `selectedBattle` prop, used to detect changes during render |

`selectedMemberIndex` is reset to `''` during render whenever `selectedBattle`
changes (React's "adjusting state when a prop changes" pattern — compares
against `prevSelectedBattle` and calls `setState` directly in the render
body rather than in a `useEffect`), since a team-member index from the
previous trainer's team doesn't apply to the newly selected one.
