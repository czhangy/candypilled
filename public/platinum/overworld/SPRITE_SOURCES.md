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

When adding a new character, append a row here with the exact `(x, y)`
crop origin used for each pose, even if a pose was derived (e.g. `right`
mirrored from `left`) — that's what makes the next regeneration a lookup
instead of a search.
