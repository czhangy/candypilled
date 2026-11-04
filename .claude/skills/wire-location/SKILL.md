---
name: wire-location
description: Add one Location (map, anchor, registration) to an already-onboarded game. Use when asked to wire, add or create a location, or when onboarding a game's locations.
---

# Wire a location

Wire one `Location` fully before starting the next. `<slug>` is the game's data folder (e.g. `renegade-platinum`).

1. The user puts the location's screenshots on the Desktop, named `<map-slug>.png`, `<map-slug>-<col>.png` or `<map-slug>-<row>-<col>.png`. A location with several floors or areas uses one map slug each, e.g. `<location>-1f`.
2. Run `npm run stitch-map -- <slug> <map-slug>` for every map, never a manual copy. Read the result only to check for dead space. Never inspect seams.
3. Set the `mapAnchor`. A map that fits the map viewport without panning (height at most 420 px, the viewport's max height in `LocationMap.module.scss`, and no wider than the viewport) gets `MapAnchor.Center` without asking. Otherwise, or if unsure, ask the user. If the user states the anchor, use it.
4. Export each map from `maps/index.ts`, alphabetically, and create `locations/<name>.ts` with the map (or `subareas`, one per map slug) and the anchor. `Location.name` must equal the met-table name exactly.
5. Add the location to `locations.ts`, alphabetically; `check:data` fails on an unlisted file. In a variant group, shared locations go in the shared `locations.ts`, and a version-exclusive one is appended in that variant's file (`locations: [...LOCATIONS, VERSION_ONLY]`).
6. If the place has no met-table entry (gyms, Elite Four rooms, Rotom's Room and the like), add its name to `unmappedLocations` in the game's `GAME_CHECK_CONFIGS` entry in `src/lib/scripts/validation/game-configs.ts`. Prefer a game-specific list over a shared one when only that game has the place.
7. Delete the Desktop screenshots once the location is wired.
8. Run `npm run check:data`.

- Never add a location to a split's `locations` unless the user says to.
- A place with no met entry becomes a Location only when the user directs.
- Battles, encounters, method splits and items are separate steps; don't write them here.
