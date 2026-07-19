# Overworld Sprite Sources

Tracks where each character folder's sprites were cropped from
`spritesheet.png`, so a sprite can be regenerated (re-cropped, fixed,
or have a missing direction added) without re-searching the sheet.

`spritesheet.png` is a "PKMN Platinum Spritesheet" rip (credited to
spacemotion within the image itself). It has no embedded labels —
characters are laid out in columns of flat-color background blocks (one
column per character, or one wider block shared by a male/female pair
using the same design), each column containing several rows: a down-facing
idle frame, one or two down walk frames, an up-facing idle frame, up walk
frame(s), and a left-facing idle + walk frames. There is no separate
right-facing frame anywhere on the sheet — every existing `right.png` in
this directory is `left.png` mirrored horizontally (confirmed via pixel
diff on `mars`).

Each output sprite is a 30x30 RGBA PNG: a direct pixel crop of the sheet
(no resizing) with the cell's flat background color chroma-keyed to
transparent (alpha 0).

## Known regions

| Folder             | Sheet region (top-left x,y of each 30x30 crop)                                                                                                                                                                                                        | Notes                                                                                                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `galactic-grunt-m` | `down`: (50, 1561) · `up`: (50, 1593) · `left`: (52, 1625) · `right`: mirrored from `left`                                                                                                                                                            | Teal/turquoise round-hair, grey blazer uniform. Male and female share the same design/colors — the sheet draws them as two adjacent columns with identical coloring, differing only by which column (male = left of the pair, female = right). |
| `galactic-grunt-f` | `down`: (82, 1561) · `up`: (82, 1593) · `left`: (82, 1625) · `right`: mirrored from `left`                                                                                                                                                            | See above.                                                                                                                                                                                                                                     |
| `mars`             | Not recorded — extracted before this file existed. Re-locate by eye if it ever needs regenerating (search for the red-haired, white-blouse Team Galactic Commander design near the "Other"/named-NPC section, roughly y > 1550 in the current sheet). |                                                                                                                                                                                                                                                |
| `barry`            | Not recorded — same caveat as `mars`.                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                |
| `scientist`        | `down`: (306, 674) · `up`: (306, 706) · `left`: (307, 738) · `right`: mirrored from `left`                                                                                                                                                            | Team Galactic-style scientist: dark grey hair, glasses, white lab coat over black pants. Column background (144, 136, 128) spans x 305-337, y 673-957 (9-frame block: down idle/walk/walk, up idle/walk/walk, left idle/walk/walk).            |
| `cyrus`            | `down`: (18, 1561) · `up`: (18, 1593) · `left`: (19, 1626) · `right`: mirrored from `left`                                                                                                                                                            | Team Galactic Boss Cyrus: blue slicked-back hair, grey blazer with yellow accent. Column background (232, 216, 216) spans x 17-49, in the "Other" named-NPC section starting ~y 1561, same 9-frame block layout as `scientist`.                |
| `saturn`           | `down`: (146, 1561) · `up`: (146, 1592) · `left`: (147, 1626) · `right`: mirrored from `left`                                                                                                                                                         | Team Galactic Commander Saturn: navy blue hair styled into tall cat-ear-like points, white/grey uniform. Column background (232, 192, 248) spans x 145-176, same row block as `cyrus` (~y 1561+).                                              |
| `jupiter`          | `down`: (178, 1562) · `up`: (178, 1594) · `left`: (179, 1624) · `right`: mirrored from `left`                                                                                                                                                         | Team Galactic Commander Jupiter: pink hair in a tall top bun, white/grey uniform. Column background (128, 192, 248) spans x 177-208, same row block as `cyrus`/`saturn` (~y 1561+).                                                            |

When adding a new character, append a row here with the exact `(x, y)`
crop origin used for each pose, even if a pose was derived (e.g. `right`
mirrored from `left`) — that's what makes the next regeneration a lookup
instead of a search.
