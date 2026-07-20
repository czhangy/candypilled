---
name: overworld-sprite-extract
description: Crop/regenerate a character's overworld sprites (down/up/left/right PNGs) from src/lib/games/platinum/maps/overworld/spritesheet.png. Use when adding a new overworld character folder, fixing a blurry/wrongly-scaled sprite, or regenerating one of these sprites for any reason.
---

# Overworld sprite extraction

Produces pixel-perfect 30x30 RGBA sprites for `src/lib/games/platinum/maps/overworld/<character>/{down,up,left,right}.png`
by cropping directly from `src/lib/games/platinum/maps/overworld/spritesheet.png`, instead
of resizing/rescaling an image (which produces the blurry, anti-aliased
result this skill exists to avoid).

## 0. Check the reference file first

Read `src/lib/games/platinum/maps/overworld/SPRITE_SOURCES.md` before searching the
sheet. If the character (or one visually identical to it, e.g. an
already-extracted male/female pair) already has recorded coordinates,
skip straight to step 3.

## 1. Locate the character on the sheet

`spritesheet.png` has no labels. It's organized in columns of flat-color
background blocks — one block per character, or one wider block shared by
a male/female pair that use the same design (recolors are adjacent
columns sharing one background block).

To find a character:

- Crop the sheet into horizontal strips (~200-300px tall) and view them
  with `Read` to scan visually. Upscale with nearest-neighbor first
  (`Image.NEAREST`, e.g. 3-6x) — the sheet is small and hard to read at
  native size.
- If unsure the design matches (e.g. two similar-looking uniformed NPCs),
  **ask the user to confirm** before cropping/overwriting anything. Don't
  guess on a destructive-ish operation (overwriting an existing sprite
  folder) when the sheet gives no ground truth to self-verify against.
- **This applies to every step, not just character identification** —
  which row is idle vs. walk, which of two similar hat colors is the
  right one, whether a design match is close enough to count as the same
  character. A past run guessed through several of these judgment calls
  instead of stopping to check, and got most of them wrong (wrong
  character entirely in one case, walk frames instead of idle in five
  others). If a crop, a row, or a character match isn't something you
  can verify with certainty (bbox comparison, exact pixel match, an
  explicit reference image), **stop and ask the user** rather than
  picking the option that looks most plausible. A wrong guess here means
  redoing the work anyway, plus the cost of a bad file having been
  committed in the meantime — asking first is strictly cheaper.
- Don't bother trying to pixel-diff against other already-correct sprites
  in the repo to "verify" a location — in practice existing sprites
  weren't necessarily sourced from this exact sheet, so exact-match
  search comes back empty even when you've found the right character by
  eye. Trust the visual match instead.
- A column's background color is not a unique fingerprint — the same
  flat color can recur at a completely different x-range elsewhere on
  the sheet for an unrelated character (confirmed: (80, 136, 176) occurs
  at both x145-176 and x337-368, one bearded, one not). Matching
  background color alone is not enough to confirm you've found the same
  character — always visually confirm the actual design against a
  reference image before cropping.

## 2. Identify the pose rows within that character's column

Each character column has several stacked rows (idle + walk-cycle
frames) for down, up, and left — but **no right-facing frame exists
anywhere on the sheet**. Every `right.png` in this repo is `left.png`
mirrored horizontally (verified via pixel diff on `mars`: flipping
`left.png` produces byte-identical output to `right.png`).

**This sheet's row convention is fixed and must be used directly — do
not try to identify idle-vs-walk by eye.** Every character column is 9
rows tall (32px each). Rows 1-3, by position, are **always**: row1 =
down idle, row2 = up idle, row3 = left idle. Rows 4-9 are walk-cycle
frames (2 each for down/up/left) and are never idle, regardless of how
symmetric, compact, or "standing-still" one of them might look. **Do
not** decide a row is idle because its arms look like they're at its
sides, or because it looks more compact than a neighboring row, or any
other visual judgment about the pose — use row position only. This
sounds obvious but it's the single most common mistake with this sheet:
a past run repeatedly eyeballed "does this look like standing still"
instead of counting rows, and got it wrong multiple times in a row —
including picking a walk frame that visually looked idle, and (in the
opposite direction) rejecting a true idle frame as "too walk-like." The
row-position rule is ground truth here; your visual impression of a
single frame is not.

**Getting the true row 1 right is the entire game.** The failure mode
isn't misjudging a pose — it's finding the character's column _partway
through_ the 9-row block (e.g. spotting the character for the first
time at what is actually row 2 or row 5) and treating that row as row 1.
This has caused wrong sprites twice: once by starting a scan around row
5 of a block instead of row 1 (hiker/collector), and once by starting
at row 2 because that's where the character was first visually spotted,
never even looking further up for the true row 1 (youngster/camper/
picnicker). Before assigning row numbers:

- Find the column's true block start by scanning **upward** from any
  row you've found, past where the background color stays the same,
  until the actual character design changes (different hair/hat/colors)
  — that transition is the top of the previous character's block, and
  the row immediately after it is this character's row 1. Background
  color alone does not mark block boundaries — the same flat color often
  continues unbroken across many consecutive characters' blocks, so
  "scan until the bg color starts" is not sufficient; you must watch for
  the _design_ to change.
- Count rows from that true row 1: row1/2/3 = down/up/left idle,
  row4-9 = walk. Verify your count by checking that exactly 9 rows exist
  before the design changes again.
- A block can be a nonstandard length (rare) — if you count and get
  something other than 9, or rows 1-3 clearly don't read as down/up/left
  at all (e.g. row1 doesn't show a front-facing view), stop and ask the
  user rather than improvising a different rule.

Find row boundaries by scanning a vertical pixel line through the
character's hair with PIL, looking for transitions to/from the column's
flat background color — each contiguous non-background run is one pose
frame:

```python
from PIL import Image
im = Image.open('src/lib/games/platinum/maps/overworld/spritesheet.png').convert('RGB')
px = im.load()
x = 65  # any x known to pass through the character's hair
bg = (152, 112, 104)  # this column's background color, sampled separately
prev_is_bg = None
for y in range(y_search_start, y_search_end):
    is_bg = px[x, y] == bg
    if is_bg != prev_is_bg:
        print(y, px[x, y], 'bg' if is_bg else 'char')
    prev_is_bg = is_bg
```

## 3. Crop and chroma-key each pose

Once you have a rough `(x, y)` top-left for a pose, find the tight
content bounding box within that character's column **only** (restrict
the x-range to that character's cell — background colors are often
shared across an adjacent recolor column, so scanning too wide silently
picks up the neighboring character's pixels):

```python
def bbox_for(x0, x1, y0, y1):
    minx = miny = maxx = maxy = None
    for y in range(y0, y1):
        for x in range(x0, x1):
            if px[x, y] != bg:
                minx = x if minx is None else min(minx, x)
                maxx = x if maxx is None else max(maxx, x)
                miny = y if miny is None else min(miny, y)
                maxy = y if maxy is None else max(maxy, y)
    return minx, miny, maxx, maxy
```

Compare the content width/height against an existing correct sprite
(e.g. `mars/down.png`'s opaque bbox via `Image.getbbox()`) — they should
be close (this sheet is a consistent scale throughout), which confirms
no additional resizing is needed, only cropping.

Pick a 30x30 crop origin so the content sits the same way existing
sprites do: bottom-aligned (little to no bottom margin) and roughly
centered horizontally. Then crop and key out the background color:

```python
def make_sprite(x0, y0):
    crop = im.crop((x0, y0, x0 + 30, y0 + 30)).convert('RGBA')
    px2 = crop.load()
    for yy in range(30):
        for xx in range(30):
            if px2[xx, yy][:3] == bg:
                px2[xx, yy] = (0, 0, 0, 0)
    return crop
```

**Check every crop for edge bleed**: if the 30x30 box extends past the
character's own cell, it can clip into the _next_ column's background
color (which differs from this column's `bg` and won't get keyed out,
leaving a visible solid-color stripe). If you see that, shift the crop
origin inward by a few px rather than widening the chroma-key to match
multiple colors.

Generate `right.png` by mirroring `left.png`:

```python
Image.open(f'{folder}/left.png').transpose(Image.FLIP_LEFT_RIGHT).save(f'{folder}/right.png')
```

## 4. Verify before finishing

Composite all four poses into one row (nearest-neighbor upscaled, e.g.
6-8x) and view with `Read` — check for blur (shouldn't be any, since
this is a direct crop), clipping, and stray background-color slivers at
the edges.

**Also check every crop programmatically, not just by eye** — a 1px
bleed line is easy to miss at a glance, especially upscaled with
nearest-neighbor (it just looks like a slightly odd edge, not an obvious
error). For each of the 4 output PNGs, check the alpha channel on all
four border rows/columns:

```python
im = Image.open(f'{folder}/down.png')
px = im.load()
for x in range(30):
    assert px[x, 0][3] == 0 or <this is expected content>, f"top row bleed at x={x}"
```

A non-transparent top/left/right edge pixel is virtually always a bug
(the crop origin is 1+ px into a neighboring color you didn't chroma-key,
often a 1px transition/shadow row between blocks that has a _slightly
different_ shade than the block's main bg color — sample the exact
pixel at your chosen crop origin before trusting a bbox-derived origin,
don't assume the bg is uniform all the way to the block boundary).
Bottom-edge opacity is usually fine (feet/hands legitimately touch the
bottom-aligned edge) — cross-check against an existing correct sprite
(e.g. `mars/down.png`) which will show the same pattern.

## 5. Update the reference file

Append (or add) a row to `src/lib/games/platinum/maps/overworld/SPRITE_SOURCES.md`
with the exact `(x, y)` crop origin used per pose, plus a one-line visual
description of the design. This is the whole point of the skill: the
next time this character needs regenerating, it's a lookup, not a
search.
