# BattleCard

Displays details for the battle currently selected on the location map,
under a "Battle", "Miniboss", or "Boss" label matching `LocationMap`'s
header style. Lays out a trainer name header above a portrait and a row
of Pokemon team slots, each showing that Pokemon's sprite (matching the
game's sprite variant) above its name (with type badges beneath it),
level, ability, nature, held item, and moveset. Non-neutral natures are
annotated with their stat
effects, shown in a smaller font on the same line (e.g.
"Adamant [+Atk -SpA]"). The portrait is split into a
field condition section above
the sprite (e.g. "Rain") and a held items section below it (e.g.
"2x Potion"), each hidden when not present on the battle. An "Optional"
section appears below that for battles that aren't required to progress,
followed by a double battle section reading "Double Battle" or, if the
player's whole party is forced into the fight, "True Double Battle".
A "Defeat" button below the portrait toggles the trainer's defeated
state in storage; once defeated it reads "Defeated" and turns green, and
can be clicked again to undo. Each Pokemon's moves are clickable, linking
to that move's details.

## Props

| Prop               | Type                     | Required | Default | Description                                                                  |
| ------------------ | ------------------------ | -------- | ------- | ---------------------------------------------------------------------------- |
| `battle`           | `Battle`                 | Yes      | -       | The currently selected battle                                                |
| `generation`       | `number`                 | Yes      | -       | The game's generation, used to resolve each Pokemon's types and abilities    |
| `isDefeated`       | `boolean`                | Yes      | -       | Whether this battle has already been marked defeated                         |
| `onSelectMove`     | `(name: string) => void` | Yes      | -       | Called with a move's name when it's clicked within a Pokemon's moveset       |
| `onToggleDefeated` | `() => void`             | Yes      | -       | Called when the defeat button is clicked                                     |
| `starter`          | `string \| null`         | Yes      | -       | The run's chosen starter, used to resolve a miniboss's starter-specific team |
| `variant`          | `string`                 | Yes      | -       | The sprite variant to prefer, matching the game's slug                       |

## Computations

- `team` — the Pokemon team to render, resolved via `BattleHelpers.getTeam`
  from `battle.teamsByStarter` (keyed by the run's starter) when present,
  falling back to `battle.team` otherwise
- `getTypes` — a Pokemon's types at `generation`, rendered as badges
  (`/types/{type}.png`) beneath its name
- `getAbility` — a Pokemon's ability, using its `ability` field as an
  override when set and otherwise falling back to its slot-1 ability at
  `generation`, resolved via `PokemonHelpers`

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
