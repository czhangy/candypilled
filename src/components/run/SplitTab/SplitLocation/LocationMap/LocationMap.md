# LocationMap

Renders a location's map image under a "Map" label, with a `TrainerMarker`
overlaid for each battle at that location. An encounter table will be
added here in future work.

Also includes a hardcoded `EDIT_MODE_ON` developer flag: when flipped to
`true` in code, hovering the map shows a dashed preview `TrainerMarker`
that follows the cursor, with its x/y percentages shown as a small
comma-separated label above the marker, to help find x/y values for new
battle entries.

## Props

| Prop                       | Type                          | Required | Default | Description                                                     |
| -------------------------- | ----------------------------- | -------- | ------- | --------------------------------------------------------------- |
| `map`                      | `StaticImageData`             | Yes      | -       | Statically imported map image, with intrinsic dimensions        |
| `alt`                      | `string`                      | Yes      | -       | Alt text for the map image                                      |
| `battles`                  | `Battle[]`                    | No       | `[]`    | Battles to mark on the map                                      |
| `isBattleDefeated`         | `(battle: Battle) => boolean` | Yes      | -       | Whether a given battle has already been defeated                |
| `isBattleNextPersonalBest` | `(battle: Battle) => boolean` | Yes      | -       | Whether defeating a given battle next would extend the run's PB |
| `selectedBattle`           | `Battle`                      | No       | -       | The currently selected battle, if any                           |
| `onBattleClick`            | `(battle: Battle) => void`    | Yes      | -       | Called with a battle when its marker is clicked                 |

## State

| State             | Type                               | Initial value | Description                                               |
| ----------------- | ---------------------------------- | ------------- | --------------------------------------------------------- |
| `previewPosition` | `{ x: number; y: number } \| null` | `null`        | The cursor's current position on the map, as a percentage |

## Computations

- `EDIT_MODE_ON` — hardcoded developer flag; when `true`, enables the
  cursor-following x/y placement preview described above
- `previewPosition` — derived on mouse move from the cursor's offset within
  the map's bounding box, as a percentage of its rendered width/height
  (equivalent to a percentage of the map's natural dimensions, since the
  image scales uniformly), rounded to one decimal place
