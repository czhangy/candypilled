---
name: battle-marker-placement
description: Compute a battle marker's x/y on a location's map image from the game's event data (tile positions). Use when adding or recomputing Battle x/y while onboarding battles.
---

# Battle marker x/y

`Battle.x` and `Battle.y` are percentages of the map image's width and height. The marker box is centered on `(x, y)`. Its default size is 19×25 px for Gen 3 and 19×28 px for Gen 4, overridden by `customWidth` and `customHeight`.

A marker is arithmetic from a tile position, never a pixel guess. Get the tile from the game's event data (each map zone lists its object events with tile x/z, sprite id and script or trainer id). If a tile can't be found, find it on a tile-gridded crop of the image and compute from that, or ask the user.

## Formulas

Work in image pixels, divide by the image's width and height, round to two decimals, and round from the exact pixel value, never from an already-rounded percentage.

- **Gen 3:** `x = (tileX + 0.5) * 16`, `y = tileY * 16 + 5.5`, relative to the image's tile origin.
- **Gen 4:** `x = (tileX - originX) * 16 + 8.5`, `y = (tileZ - originZ) * 16 + 1`.
- **Doubles, tags and any multi-sprite marker:** the midpoint of the sprites' tiles.

## Finding the image origin

- **Chunk-stitched images** (outdoors, caves from a large matrix): the origin is a multiple of 32 tiles. Try every origin and keep the one where all markers land within about 3 px of an object. Events can sit in a neighbouring zone's file.
- **Interiors:** the origin is often an integer tile, so the same search works. If it doesn't fit, the image is a crop. Tile spacing is still exact (16 px per tile), so take relative positions from the tiles and one absolute offset from the sprites.
- **Sprite measurement:** `x` is the center of the sprite's vertical symmetry axis plus 0.25, and `y` is the bottom of its outline minus 12. This fails on black backgrounds, side-facing sprites, and sprites cut by the image edge, so check it on the image.

## When tile math doesn't apply

- **Tilted camera:** the vertical scale is about 12.26 px per tile, and a stacked pair is shorter than 16 px per tile.
- **Elevation, multi-level rooms and rooms stitched into one image:** rows aren't uniform, and each room is its own zone. Take x from the grid and keep the existing y.
- **Script-placed NPCs** have no static object, or one parked off-map. The image is the truth: snap to the nearest tile center only if the existing marker is already within about 3 px of it.
- **Sprites drawn off their tile** (some sprite classes sit above or below it): derive the offset from existing markers of that class, and apply it only when they agree.
- **Multi-floor zones** hold every floor's objects in one file. Split them by the object's height.
- **A stacked or side-by-side pair** needs a `customWidth` or `customHeight` that fits the pair, not the default box.

## Checks before applying

- Every marker matched an object, or was deliberately snapped or measured. Unmatched markers and large jumps (over about 3 px) mean a wrong match or a bad existing value, so investigate.
- A single marker has nothing to cross-check its origin against. Outdoors, require a chunk-aligned origin, and look at it on the image either way.
- Render crops with the new boxes over the sprites for every snapped, measured or largest-shift marker. Each box should sit centered on its sprite.

## Process

Work in the batches the user asks for. Apply a batch, then let the user check it visually. Adjust only from their feedback, and don't bulk-apply unprompted. Which trainer stands where, and how a battle is structured, comes from the user or the trainer data, never from tile data.
