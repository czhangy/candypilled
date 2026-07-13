# TrainerMarker

A rectangular button overlaid on a location's map image, outlining where
a trainer stands. Positioned and sized as a percentage of the map's width
and height so it stays aligned with the artwork at any render size.
Renders in the game's accent color by default, orange for miniboss
battles, or red for boss battles. A single badge pokes out of the
top-right corner of the rectangle, showing whichever is highest priority:
a checkmark for a defeated trainer, a crown for the trainer that would
extend the run's personal best if defeated next, a double exclamation
mark for a boss, or a single exclamation mark for a miniboss.

## Props

| Prop                 | Type                        | Required | Default | Description                                             |
| -------------------- | --------------------------- | -------- | ------- | ------------------------------------------------------- |
| `trainer`            | `Battle`                    | Yes      | -       | The battle this marker represents and positions         |
| `mapWidth`           | `number`                    | Yes      | -       | Intrinsic width of the map image, in pixels             |
| `mapHeight`          | `number`                    | Yes      | -       | Intrinsic height of the map image, in pixels            |
| `isDefeated`         | `boolean`                   | No       | `false` | Whether this trainer has already been defeated          |
| `isNextPersonalBest` | `boolean`                   | No       | `false` | Whether defeating this trainer next would extend the PB |
| `isSelected`         | `boolean`                   | No       | `false` | Whether this trainer is the currently selected one      |
| `onClick`            | `(trainer: Battle) => void` | Yes      | -       | Called with this marker's battle when clicked           |

## Computations

- `width`, `height` — the marker's size as a percentage of the map,
  derived from a fixed trainer sprite size in pixels so the rectangle
  matches the trainer's on-screen footprint regardless of image resolution

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
