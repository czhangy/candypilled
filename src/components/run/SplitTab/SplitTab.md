# SplitTab

The content of the "Split" tab on a game's run page. Shows a sticky table of
contents listing every location in the run's current split, with a
semi-transparent badge icon behind it, and a collapsible card for each
location. Clicking a table of contents entry jumps to that location's card
via an in-page anchor link.

## Props

| Prop              | Type                     | Required | Default | Description                                                                                                                                             |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `game`            | `Game`                   | Yes      | -       | The game the run belongs to                                                                                                                             |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Called when an ability is clicked within a `SplitLocation`'s `BattleCard` or `PokedexTile`                                                              |
| `onSelectMove`    | `(name: string) => void` | Yes      | -       | Called when a move is clicked within a `SplitLocation`'s `BattleCard`                                                                                   |
| `run`             | `Run`                    | Yes      | -       | The run whose current split is shown                                                                                                                    |
| `stickyOffset`    | `number`                 | Yes      | -       | The pixel height of `RunPage`'s sticky tabs/split-header block, added to the table of contents' sticky offset so it doesn't stick underneath that block |

## Computations

- `currentSplitName` — the name of the split containing the first
  not-yet-defeated required battle in the run's `defeatedBattles`, or the
  last split if every required battle has been defeated
- `currentSplit` — the split matching `currentSplitName`, whose locations
  are rendered as `SplitLocation` cards
- `badge` — the badge icon path for the current split, matching
  `/{variant}/badges/{slug}.png`, shown behind the table of contents

Each table of contents entry links to `#{slug}`, where `slug` is
`StringHelpers.toSlug(location.name)` — the same id `SplitLocation` sets on
its own root element.
