---
name: onboard-new-game
description: Add a new playable game (or a set of same-generation variant games like Diamond & Pearl that share everything except wild encounters) to the tracker. Use when asked to add a new game, add a game variant, or scaffold game data.
---

# Onboarding a new game

A game is a `Game` object (`src/lib/static/types.ts`) registered in the
`GAMES` array in `src/lib/data/games.ts`. Nothing else in the UI
special-cases a game by name — `RunsPage`/`RunEntry`, `RunPage`, `HofPage`,
and `LocalStorageHelpers` all iterate `GAMES` generically and derive a
game's URL slug from `StringHelpers.toSlug(game.name)`. Adding a game is
purely a data-authoring + registration task, never a component change.

## Single-version game (e.g. Platinum)

Reference implementation: `src/lib/data/platinum/`.

1. **Data folder** — `src/lib/data/<slug>/`, containing:
    - `<slug>.ts` — assembles and default-exports the `Game` object.
    - `index.ts` — `export { default } from './<slug>';`
    - `encounters.ts` — `export const ENCOUNTERS: Record<string, Encounter[]>`.
    - `battles.ts` — `export const BATTLES: Record<string, BattleData>`.
    - `met-locations.ts` — the region's met-location index -> name table.
    - `locations/*.ts` — one `Location` (or `Subarea[]`-holding location)
      per file, each importing its map(s) from `./maps`.
    - `maps/*.png` + `maps/index.ts` — map images and their barrel export.
    - `splits/*.ts` — `Split[]` groupings of locations in gym-leader order,
      imported into `<slug>.ts`'s `splits` array.
2. **Encounter-scraper config** — add
   `src/lib/scripts/pokeapi/game-versions/<slug>.ts` exporting a
   `GameVersion` (id, label, PokeAPI version slug, region, generation, plus
   the exclusion/override/merge config — see `platinum.ts` for the full
   shape and inline rationale for each field), and register it in
   `src/lib/scripts/pokeapi/game-versions/index.ts`'s `GAME_VERSIONS` array.
3. **Point the generator scripts at this game** — set `GAME_ID` in
   `src/lib/scripts/pokeapi/config/game.ts` to the new slug. This is a
   single global switch consumed by every codegen/fetch script
   (`pokeapi:encounters`, `gen:location`, `gen:battle`,
   `gen:trainer-class`) — remember to flip it back (or forward to the next
   game) when you're done, it isn't a per-invocation flag.
4. **Fetch + author encounters** — run `npm run pokeapi:encounters`. This
   only writes a raw `src/lib/data/<slug>/encounters/encounters.json`; no
   script in this repo converts that JSON into the final
   `encounters.ts` literal. That conversion is a manual/LLM-assisted step —
   transform the JSON into the same `Record<string, Encounter[]>` literal
   shape already used by `platinum/encounters.ts` (methods resolved to
   `EncounterMethod` enum members, location keys matching each
   `Location.encountersKey`).
5. **Scaffold locations** — for each map, place the PNG at
   `maps/<map-slug>.png` first, then run
   `npm run gen:location <map> [name] [subareaName]`. It wires the map into
   `maps/index.ts` and creates/updates `locations/<name>.ts`.
6. **Scaffold battles** — `npm run gen:battle <location> [subarea] [flags]`
   adds placement + metadata to the location file; the actual trainer data
   (team, AI flags, save condition) is then hand-authored in `battles.ts`,
   keyed by the generated `battleKey`.
7. **New trainer classes** — if a battle references a trainer class not
   already in `src/lib/data/trainer-classes.ts`, add it with
   `npm run gen:trainer-class <slug> <displayName> <male|female> [spriteSlug]`
   (requires a sprite already at `public/<gameSlug>/trainers/<slug>.png`).
8. **Author `splits/*.ts` and `met-locations.ts`** by hand — these have no
   generator, since they encode judgment calls (gym order, exact met-index
   table) rather than mechanical scaffolding.
9. **Assemble the `Game`** in `<slug>.ts` (name, logo, generation, `version`
   = PokeAPI version-group slug, starters, accentColor, encounters,
   battles, metLocationById, wipeMessages, splits), add
   `public/logos/<slug>.png`, and add the game to the `GAMES` array in
   `src/lib/data/games.ts`.

## Variant games sharing one generation (e.g. Diamond & Pearl)

Some games differ from a sibling _only_ in wild encounters — everything
else (maps, locations, gym battles, met-locations) is identical. Don't
duplicate that shared data across two full `Game` folders. Reference
implementation: `src/lib/data/diamond-pearl/` (currently an empty skeleton
— real location/battle/split/map content still needs to be authored).

Structure:

```
src/lib/data/diamond-pearl/
  battles.ts            # shared BATTLES
  met-locations.ts       # shared met-location table
  locations/*.ts          # shared Location definitions
  splits/*.ts              # shared Split[] groupings
  maps/*.png + index.ts     # shared map images
  diamond/
    encounters.ts          # Diamond-only ENCOUNTERS
    diamond.ts               # assembles Game from shared data + own encounters
    index.ts
  pearl/
    encounters.ts           # Pearl-only ENCOUNTERS
    pearl.ts
    index.ts
```

Key differences from the single-version flow above:

- Steps 1 and 5-8 (locations, splits, battles, trainer classes,
  met-locations, maps) happen **once**, in the shared parent folder, not
  per variant. Because `gen:location`/`gen:battle`/`gen:trainer-class`
  assume a single flat `src/lib/data/<GAME_ID>/...` folder, set `GAME_ID`
  to the **shared folder's slug** (e.g. `'diamond-pearl'`) while running
  them for this shared content.
- Steps 2 and 4 (the `GameVersion` scraper config and `ENCOUNTERS`) happen
  **once per variant**, each with its own id (e.g. `'diamond'`/`'pearl'`)
  and its own exact PokeAPI version slug — wild encounter tables genuinely
  differ per individual version, not just per version-group, so this can't
  be shared even though everything else is. Switch `GAME_ID` to the
  specific variant id only for `pokeapi:encounters` runs.
- Each variant's assembled `Game.version` field (the PokeAPI _version-group_
  slug, e.g. `'diamond-pearl'`) must be identical across variants — it's
  used to resolve movesets, which are shared within a version group. Don't
  confuse this with the per-variant `GameVersion.version` in
  `game-versions/<id>.ts`, which is the narrower per-version slug and is
  intentionally different between variants.
- Each variant still needs its own `logo`, `accentColor`, and
  `public/logos/<slug>.png` — pick colors matching that version's real
  box-art theme.
- Each variant is registered as its own separate entry in `GAMES`
  (`src/lib/data/games.ts`), not as one combined entry — the UI has no
  "variant switcher" concept, each variant is just an ordinary selectable
  game that happens to import most of its data from the shared folder.
- **Don't assume a variant's shared data equals another already-existing
  game's data just because they're the same generation.** Diamond/Pearl
  and Platinum diverge in real ways (Platinum adds the Distortion World,
  Fight Area/Battle Frontier, and different post-game trainer rematches).
  Only share data between games that a specific check confirms are
  actually identical.
