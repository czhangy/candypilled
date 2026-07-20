# BattleCard

Displays details for the battle currently selected on the location map,
under a "Battle", "Miniboss", or "Boss" label matching `LocationMap`'s
header style. Lays out a trainer name header above a portrait
(`TrainerPanel`) and a row of Pokemon team slots (`PokemonSlot`,
padded to six with empty slots when the team is smaller), toggling the
trainer's defeated state in storage via `onToggleDefeated` when its
"Defeat"/"Defeated" button is clicked. See `TrainerPanel.md` and
`PokemonSlot.md` for the portrait and team slot behavior in detail.

## Props

| Prop               | Type                     | Required | Default | Description                                                                         |
| ------------------ | ------------------------ | -------- | ------- | ----------------------------------------------------------------------------------- |
| `battle`           | `Battle`                 | Yes      | -       | The currently selected battle                                                       |
| `generation`       | `number`                 | Yes      | -       | The game's generation, used to resolve each Pokemon's types and abilities           |
| `isDefeated`       | `boolean`                | Yes      | -       | Whether this battle has already been marked defeated                                |
| `onSelectAbility`  | `(name: string) => void` | Yes      | -       | Called with a Pokemon's ability when it's clicked                                   |
| `onSelectMove`     | `(name: string) => void` | Yes      | -       | Called with a move's name when it's clicked within a Pokemon's moveset              |
| `onToggleDefeated` | `() => void`             | Yes      | -       | Called when the defeat button is clicked                                            |
| `starter`          | `string`                 | Yes      | -       | The run's chosen starter, used to resolve a miniboss's starter-specific team        |
| `variant`          | `string`                 | Yes      | -       | The sprite variant to prefer, matching the game's slug                              |
| `version`          | `string`                 | Yes      | -       | The game's version slug, used to derive a Pokemon's moveset when not explicitly set |

## Computations

- `team` — the Pokemon team to render, resolved via `BattleHelpers.getTeamFromOptions`
  from `battle.teamsByStarter` (keyed by the run's starter) when present,
  falling back to `battle.team` otherwise; padded to `TEAM_SLOT_COUNT`
  (6) with `null`s and rendered as one `PokemonSlot` per entry

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
