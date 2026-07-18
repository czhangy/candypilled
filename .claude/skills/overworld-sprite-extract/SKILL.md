---
name: overworld-sprite-extract
description: Crop/regenerate a character's overworld sprites (down/up/left/right PNGs) from public/platinum/overworld/spritesheet.png. Use when adding a new overworld character folder, fixing a blurry/wrongly-scaled sprite, or regenerating one of these sprites for any reason.
---

# Overworld sprite extraction

Produces pixel-perfect 30x30 RGBA sprites for `public/platinum/overworld/<character>/{down,up,left,right}.png`
by cropping directly from `public/platinum/overworld/spritesheet.png`, instead
of resizing/rescaling an image (which produces the blurry, anti-aliased
result this skill exists to avoid).

## 0. Check the reference file first

Read `public/platinum/overworld/SPRITE_SOURCES.md` before searching the
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
- Don't bother trying to pixel-diff against other already-correct sprites
  in the repo to "verify" a location — in practice existing sprites
  weren't necessarily sourced from this exact sheet, so exact-match
  search comes back empty even when you've found the right character by
  eye. Trust the visual match instead.

## 2. Identify the pose rows within that character's column

Each character column has several stacked rows (idle + walk-cycle
frames) for down, up, and left — but **no right-facing frame exists
anywhere on the sheet**. Every `right.png` in this repo is `left.png`
mirrored horizontally (verified via pixel diff on `mars`: flipping
`left.png` produces byte-identical output to `right.png`).

To tell poses apart: down = facing the viewer (visible face, symmetric
idle stance). Up = back of the head only, no face. Left = side profile
(single eye, nose visible, facing left). Within each direction there are
multiple frames (idle + one or two mid-stride walk frames, with
asymmetric legs/arms) — use the **idle** frame (symmetric stance) for
each direction, not a walk frame.

Find row boundaries by scanning a vertical pixel line through the
character's hair with PIL, looking for transitions to/from the column's
flat background color — each contiguous non-background run is one pose
frame:

```python
from PIL import Image
im = Image.open('public/platinum/overworld/spritesheet.png').convert('RGB')
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

## 5. Update the reference file

Append (or add) a row to `public/platinum/overworld/SPRITE_SOURCES.md`
with the exact `(x, y)` crop origin used per pose, plus a one-line visual
description of the design. This is the whole point of the skill: the
next time this character needs regenerating, it's a lookup, not a
search.
