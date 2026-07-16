# SpriteCarousel

A looping carousel of starter Pokemon sprites drawn from across the
mainline game generations, used as decoration on the homepage.

## State

| State     | Type      | Initial value | Description                                                       |
| --------- | --------- | ------------- | ----------------------------------------------------------------- |
| `animate` | `boolean` | `false`       | Whether the track transitions its position or snaps instantly     |
| `index`   | `number`  | `0`           | Index of the frame currently in view, including the appended dupe |

## Effects

- **On mount** — starts an interval that advances the carousel by one frame
  every cycle (pause + slide duration) until the component unmounts

## Computations

- `FRAMES` — the sprite list with the first sprite duplicated at the end, so
  the pan-out transition has somewhere to land before snapping back to the
  real first frame for a seamless loop
