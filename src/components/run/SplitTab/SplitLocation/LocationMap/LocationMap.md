# LocationMap

Renders a location's map image under a "Map" label, with a `TrainerMarker`
overlaid for each battle at that location. An encounter table will be
added here in future work.

## Props

| Prop               | Type                          | Required | Default | Description                                              |
| ------------------ | ----------------------------- | -------- | ------- | -------------------------------------------------------- |
| `map`              | `StaticImageData`             | Yes      | -       | Statically imported map image, with intrinsic dimensions |
| `alt`              | `string`                      | Yes      | -       | Alt text for the map image                               |
| `battles`          | `Battle[]`                    | No       | `[]`    | Battles to mark on the map                               |
| `isBattleDefeated` | `(battle: Battle) => boolean` | Yes      | -       | Whether a given battle has already been defeated         |
| `selectedBattle`   | `Battle`                      | No       | -       | The currently selected battle, if any                    |
| `onBattleClick`    | `(battle: Battle) => void`    | Yes      | -       | Called with a battle when its marker is clicked          |

## SCSS Variable Dependencies

- `--base-color` — the active game's base color, set by `RunPage`
