---
name: dspre-map-stitch
description: Join DSPRE map-viewer screenshot chunks into a single map PNG for a game's src/lib/data/<game>/maps/ folder. Use when the user is capturing map images from DSPRE (DS Pokemon Randomizer Editor / map viewer) and needs them combined, cropped, or dropped into the repo — not game-specific.
---

# DSPRE map stitching

DSPRE's map view only shows a fixed-size viewport at a time, so a map
larger than that viewport has to be captured as multiple screenshots and
joined into one PNG before it can be used as a `Location`'s `map` image
(`src/lib/data/<game>/maps/<slug>.png`, barrel-exported from that folder's
`index.ts`).

This is a high-frequency operation (many maps, redone whenever a capture
mistake is found), so the stitching logic itself is **not** rewritten
per-run — it lives permanently in `src/lib/scripts/assets/stitch-map.ts`,
run via `npm run stitch-map -- <game> <map> [sourceDir]`. Don't write a
throwaway scratch script for this; extend the real script if it's
missing a case.

## Naming scheme (read this before asking the user anything)

The chunk file names encode the grid position, so the stitch order never
has to be re-confirmed by asking the user — it's derived mechanically
from the file names on disk:

- **Single-viewport map**: `<map-slug>.png` — the whole map fit in one
  DSPRE capture, no stitching needed (the script just copies it in).
- **Single row of chunks**: `<map-slug>-<col>.png`, 1-indexed, e.g.
  `route-201-1.png`, `route-201-2.png` for a left-to-right route that
  needed two captures.
- **2D grid of chunks**: `<map-slug>-<row>-<col>.png`, 1-indexed, e.g.
  `route-201-1-1.png`, `route-201-1-2.png`, `route-201-2-1.png`,
  `route-201-2-2.png` for a 2x2 grid. Row increases downward, column
  increases rightward — same orientation as the final image.
- `<map-slug>` matches the `Location`'s eventual file slug (kebab-case,
  same as the existing `src/lib/data/<game>/maps/*.png` file names).

**If the user hands you chunks named some other way**, rename them to
this scheme first (confirm the grid shape/direction with them once,
since an arbitrary naming doesn't encode it) rather than teaching the
script a second naming convention. Once renamed, every future re-run of
that map is self-describing and needs no confirmation.

## Workflow

1. Chunks are captured to `~/Desktop` by default (the script's default
   `sourceDir`) — a different `sourceDir` can be passed as the third
   arg if the user's captures land elsewhere.
2. Confirm with the user whether this is a **new** map or a **redo/
   replacement** of an existing `src/lib/data/<game>/maps/<slug>.png` —
   the script always overwrites `<slug>.png` outright, so this is about
   setting expectations, not a script parameter.
3. Run `npm run stitch-map -- <game> <map>`. The script:
    - Copies a lone `<map>.png` in directly, or
    - Globs `<map>-<col>.png` / `<map>-<row>-<col>.png`, infers the grid
      size from the max row/col seen, errors out listing any missing
      cell if the grid has gaps, errors out on mismatched chunk
      dimensions, and composites the grid in row-major order.
4. `Read` the resulting `src/lib/data/<game>/maps/<slug>.png` and check
   every internal seam: tile edges should align exactly, no offset row/
   column, no duplicated strip, no gap. A misaligned seam is usually an
   obvious half-tile jump in the grid pattern.
5. If it's a new map (not a redo), add its barrel export line to that
   folder's `index.ts` (`export { default as <camelCaseName> } from
'./<slug>.png';`) if one doesn't already exist — check whether a
   `Location` in `locations/*.ts` already references it before assuming
   the export is missing.
6. Leave the changes unstaged — per `CLAUDE.md`, staging/committing is
   the user's call, not this skill's.

## Window chrome

DSPRE screenshots are sometimes clean map-only crops (edge-to-edge tile
pixels) and sometimes include the app window's borders/menu bar, if the
user did a raw window screenshot instead of an in-app export. `Read`
each chunk before running the script — if chrome is present, crop it
off with `sharp().extract(...)` and re-save under the same chunk name
before stitching; the script assumes chunks are already map-only and
equally sized.
