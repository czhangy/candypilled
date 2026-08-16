# TrainerMarker

A rectangular button overlaid on a location's map image, outlining where
a trainer stands. Positioned and sized as a percentage of the map's width
and height so it stays aligned with the artwork at any render size.
Renders in the game's accent color by default, orange for miniboss
battles, or red for boss battles. A badge pokes out of the
top-right corner of the rectangle for a boss (double exclamation mark) or
miniboss (single exclamation mark) battle. Can also
render as a non-interactive, dashed preview marker for tools that need
to show a prospective position before it is saved.

## Props

| Prop         | Type                        | Required | Default | Description                                                                        |
| ------------ | --------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `trainer`    | `Battle`                    | Yes      | -       | The battle this marker represents and positions                                    |
| `game`       | `Game`                      | Yes      | -       | The active game, used to resolve the trainer's accessible label via `game.battles` |
| `mapWidth`   | `number`                    | Yes      | -       | Intrinsic width of the map image, in pixels                                        |
| `mapHeight`  | `number`                    | Yes      | -       | Intrinsic height of the map image, in pixels                                       |
| `isPreview`  | `boolean`                   | Yes      | -       | Renders as a non-interactive, dashed ghost marker when true                        |
| `isSelected` | `boolean`                   | Yes      | -       | Whether this trainer is the currently selected one                                 |
| `onClick`    | `(trainer: Battle) => void` | Yes      | -       | Called with this marker's battle when clicked (ignored when `isPreview`)           |

## Computations

- `width`, `height` — the marker's size as a percentage of the map,
  derived from a fixed trainer sprite size in pixels so the rectangle
  matches the trainer's on-screen footprint regardless of image
  resolution. Overridden by `trainer.customWidth` or
  `trainer.customHeight`, in pixels, when set, for trainers whose
  footprint doesn't fit the fixed size
- `isBoss`, `isMiniboss` — whether `trainer.metadata` includes the
  corresponding `BattleMetadata` value, driving the marker's color and
  corner badge

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
