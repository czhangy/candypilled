---
name: battle-marker-placement
description: Compute a battle marker's x/y on a location's map image from the game's decomp tile coordinates. Use when adding or recomputing Battle x/y while onboarding battles.
---

# Battle marker x/y

`Battle.x` and `Battle.y` are percentages of the map image's width and height. The marker box is centered on `(x, y)`. Its default size is 19×25 px for Gen 3 and 22×30 px for Gen 4, overridden by `customWidth` and `customHeight`.

Placement is pure arithmetic from the trainer's tile position. It never varies by sprite height, and it is never eyeballed or guessed. The tile positions come from the game's decomp (the map's object events). If you can't compute a marker, ask the user.

## Formulas

Work in image pixels, then divide by the image's width and height to get percentages.

- **Gen 3:** `x = (tileX + 0.5) * 16`, `y = tileY * 16 + 5.5`, relative to the image's tile origin.
- **Gen 4, outdoor images stitched from chunks:** the image origin is a multiple of 32 tiles. `x = (tileX - originX) * 16 + 8.5`, `y = (tileZ - originZ) * 16 + 1`.
- **Gen 4, interiors:** either the image origin sits on an integer tile and the outdoor formula applies, or measure the sprite in the image: `x` is the sprite's center plus 0.25, `y` is the sprite's boot line minus 12.
- **Tilted-camera interiors:** the vertical scale is about 12.26 px per tile (16 × cos 40°), so tile math is unreliable. Measure the sprites.
- **Double or tag battles:** the marker is the midpoint of the two trainers.

## Process

Work one location at a time and apply it. Then ask the user to check it visually before starting the next location. Adjust a location's offset only from the user's feedback, and never bulk-apply across locations. Which trainer stands where, and how a battle is structured, comes from the user or the trainer source, never from tile data.
