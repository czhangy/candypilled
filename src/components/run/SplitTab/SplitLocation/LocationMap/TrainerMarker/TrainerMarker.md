# TrainerMarker

A rectangular button overlaid on a location's map image, outlining where
a trainer stands. Positioned and sized as a percentage of the map's width
and height so it stays aligned with the artwork at any render size.

## Props

| Prop         | Type                        | Required | Default | Description                                        |
| ------------ | --------------------------- | -------- | ------- | -------------------------------------------------- |
| `trainer`    | `Battle`                    | Yes      | -       | The battle this marker represents and positions    |
| `mapWidth`   | `number`                    | Yes      | -       | Intrinsic width of the map image, in pixels        |
| `mapHeight`  | `number`                    | Yes      | -       | Intrinsic height of the map image, in pixels       |
| `isSelected` | `boolean`                   | No       | `false` | Whether this trainer is the currently selected one |
| `onClick`    | `(trainer: Battle) => void` | Yes      | -       | Called with this marker's battle when clicked      |

## Computations

- `width`, `height` — the marker's size as a percentage of the map,
  derived from a fixed trainer sprite size in pixels so the rectangle
  matches the trainer's on-screen footprint regardless of image resolution
