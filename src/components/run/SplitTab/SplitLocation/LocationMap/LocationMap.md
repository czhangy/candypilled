# LocationMap

Renders a location's map image, at its native pixel dimensions, inside a
full-width, click-and-drag pannable viewport (capped at 420px tall, but
shorter for maps that aren't that tall) under a "Map" label, with a
`TrainerMarker` overlaid for each battle at that location. Every map
renders at the same pixel density regardless of its native size, so
navigating between a small and a large map does not change scale — larger
maps require panning to see in full, while maps smaller than the viewport
are centered with no panning available. An encounter table will be added
here in future work.

Also includes a dev-mode-only coordinate preview: outside production
builds, holding Alt while hovering the map shows a dashed preview
`TrainerMarker` that follows the cursor, with its x/y percentages shown as
a small comma-separated label above the marker, to help find x/y values
for new battle entries. Alt-clicking the map copies those coordinates to
the clipboard formatted as they appear in a location file's `battles`
array (e.g. `x: 88,\ny: 74.4,`), and the label briefly reads "Copied!" for
confirmation. Alt is required so that clicking and dragging to pan the map
does not conflict with placing coordinates.

## Props

| Prop                       | Type                          | Required | Default | Description                                                                 |
| -------------------------- | ----------------------------- | -------- | ------- | --------------------------------------------------------------------------- |
| `map`                      | `StaticImageData`             | Yes      | -       | Statically imported map image, with intrinsic dimensions                    |
| `alt`                      | `string`                      | Yes      | -       | Alt text for the map image                                                  |
| `battles`                  | `Battle[]`                    | No       | `[]`    | Battles to mark on the map                                                  |
| `game`                     | `Game`                        | Yes      | -       | The active game, forwarded to each `TrainerMarker` for its accessible label |
| `id`                       | `string`                      | No       | -       | DOM id for the outer panel, used as a scroll target for a selected battle   |
| `isBattleDefeated`         | `(battle: Battle) => boolean` | Yes      | -       | Whether a given battle has already been defeated                            |
| `isBattleNextPersonalBest` | `(battle: Battle) => boolean` | Yes      | -       | Whether defeating a given battle next would extend the run's PB             |
| `selectedBattle`           | `Battle`                      | No       | -       | The currently selected battle, if any                                       |
| `onBattleClick`            | `(battle: Battle) => void`    | Yes      | -       | Called with a battle when its marker is clicked                             |
| `priority`                 | `boolean`                     | Yes      | -       | Whether to eagerly load and preload this map as the LCP image               |

## State

| State                | Type                                | Initial value             | Description                                                                                                                                                |
| -------------------- | ----------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pan`                | `{ x: number; y: number }`          | `{ x: 0, y: 0 }`          | The map image's last dragged-to (or centered-to) offset, in pixels, from the top-left of the viewport                                                      |
| `prevMap`            | `StaticImageData`                   | `map`                     | Tracks the previous `map` prop so a map change can reset `pan` to the top-left corner                                                                      |
| `prevSelectedBattle` | `Battle \| undefined`               | `undefined`               | Tracks the previous `selectedBattle` prop so a selection change (including an initial one, e.g. from a battle query param) can center `pan` on that marker |
| `isDragging`         | `boolean`                           | `false`                   | Whether the map is currently being dragged, for cursor feedback and to gate pan updates                                                                    |
| `viewportSize`       | `{ width: number; height: number }` | `{ width: 0, height: 0 }` | The viewport's current rendered size, used to clamp/center `pan`                                                                                           |
| `previewPosition`    | `{ x: number; y: number } \| null`  | `null`                    | The cursor's current position on the map, as a percentage, while Alt is held                                                                               |
| `justCopied`         | `boolean`                           | `false`                   | Whether coordinates were just copied to the clipboard, for label feedback                                                                                  |

## Effects

- **On viewport resize** — a `ResizeObserver` on the viewport element keeps
  `viewportSize` in sync, since the panel is full-width and its pixel size
  depends on the parent layout

## Computations

- `EDIT_MODE_ON` — `true` outside production builds (`NODE_ENV !==
'production'`), enabling the Alt-hover x/y placement preview described
  above
- `clampPanAxis` — for one axis, centers the map if it's smaller than the
  viewport, otherwise clamps the given pan value so the map's edge never
  moves past the viewport's edge
- `displayPan` — `pan`, clamped/centered per axis via `clampPanAxis`
  against the current `viewportSize` and the map's native dimensions; used
  for rendering instead of raw `pan` so a viewport resize re-clamps the
  displayed position without needing an effect. When `map` changes, `pan`
  is reset to `{ x: 0, y: 0 }` during render (comparing against `prevMap`),
  which `displayPan` then resolves to the map's top-left corner, or its
  center if the map is smaller than the viewport. When `selectedBattle`
  changes instead (comparing against `prevSelectedBattle`), `pan` is set
  so that battle's marker is centered in the viewport, converting its
  percentage-based `x`/`y` to pixels against the map's native dimensions.
  Since `prevSelectedBattle` starts as `undefined` regardless of the
  initial `selectedBattle` value, an already-selected battle at mount
  (e.g. from a battle query param) is centered too — this only happens
  once `viewportSize` has a real measurement, so it isn't computed against
  a zeroed-out viewport before the first `ResizeObserver` callback fires
- `previewPosition` — derived on mouse move, while Alt is held, from the
  cursor's offset within the map's bounding box as a percentage of its
  rendered (native-pixel) width/height, rounded to one decimal place
- `formatCoordinate` — formats a coordinate to match location file
  conventions: one decimal place, with a trailing `.0` trimmed to a bare
  integer
