# SplitTab

The content of the "Split" tab on a game's run page. Shows the run's current
split, with a semi-transparent badge icon behind its name and level cap, and
a collapsible card for each location in the current split.

## Props

| Prop              | Type                     | Required | Default | Description                                                                                |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------ |
| `game`            | `Game`                   | Yes      | -       | The game the run belongs to                                                                |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Called when an ability is clicked within a `SplitLocation`'s `BattleCard` or `PokedexTile` |
| `onSelectMove`    | `(name: string) => void` | Yes      | -       | Called when a move is clicked within a `SplitLocation`'s `BattleCard`                      |
| `run`             | `Run`                    | Yes      | -       | The run whose current split is shown                                                       |

## Computations

- `currentSplit` — the split matching `run.split`, whose locations are
  rendered as `SplitLocation` cards
- `levelCap` — the highest level Pokemon on the team of the current split's
  last battle (resolved for the run's chosen starter), shown below the
  split title
- `badge` — the badge icon path for the current split, matching
  `/{variant}/badges/{slug}.png`
