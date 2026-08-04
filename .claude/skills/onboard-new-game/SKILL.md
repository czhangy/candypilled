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
   writes a raw `src/lib/data/<slug>/encounters/encounters.json`, in a
   directory keyed by `GameVersion.id` (not the shared/nested folder —
   for a variant, move or delete this after conversion since it lands
   outside `src/lib/data/<shared-folder>/`). Despite the JSON
   file, this conversion is fully mechanical, not a manual/LLM
   transcription step: the JSON is already shaped exactly like
   `Record<string, Encounter[]>`, just with `method` as a raw string
   (e.g. `"old-rod"`) instead of an enum reference
   (`EncounterMethod.OldRod`) — the string values are literally the
   enum's underlying values (see `EncounterMethod` in
   `src/lib/static/enums.ts`). Write a throwaway Node script that
   `JSON.parse`s the file and re-serializes it with `method: value` swapped
   for `method: EncounterMethod.<PascalCase>`, wrap in the
   `import`/`export const ENCOUNTERS` boilerplate, then run
   `prettier --write` on the result. Don't hand-transcribe thousands of
   lines.
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
   table) rather than mechanical scaffolding. For `met-locations.ts`, don't
   transcribe Bulbapedia's full index table verbatim — cross-check against an
   already-onboarded same-region game's file first (e.g. `platinum/`) and
   match its _subset_ of included indices. Existing games intentionally omit
   indices for locations that never come up as a met-location for this app's
   purposes (event-only/static-encounter spots like Pal Park, Newmoon/
   Fullmoon Island, Turnback Cave); including the full academic list adds
   entries that don't reflect real usage.
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

- **Do encounters (steps 2-4) before scaffolding locations (step 5), even
  though this reads out of order.** `EncounterHelpers.getStarterLocationName`
  (used by the run-creation screen) assumes every registered `Game` has at
  least one wired location with a `Starter`-method encounter — with an
  empty `ENCOUNTERS` stub, `GAMES` already contains the new game (it's
  selectable in the UI as soon as it's registered), and clicking "New"
  crashes with a null-property error. Get real encounter data in before
  leaving the game in a state a user can click into, even if locations,
  battles, and splits are still incomplete.
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
- **After wholesale-reusing a sibling's `GameVersion` config (per the note
  below), audit it against PokeAPI directly rather than trusting it by
  inspection.** A script can check every `excludedLocations` entry in
  bulk: for each, fetch `location/<slug>/`, fetch each of its areas, and
  check whether any `pokemon_encounters[].version_details[]` is tagged
  with the new variant's version — this tells you definitively whether an
  exclusion represents a real "not modeled by this app" scope decision
  (the location has real data, just no `Location` object yet) versus dead
  weight copied from a sibling where the location doesn't exist in _any_
  Gen N game (zero encounter data for every version, e.g. facility
  buildings/pseudo-locations) — the latter is safe to prune since
  excluding something that already returns nothing is pure noise. Do the
  same targeted check for `methodOverrides` and `manualEncounters`
  (query the specific area directly and check the species' tagged
  versions) rather than assuming a sibling's override still points at the
  right location — the app's starter-handoff location genuinely differs
  between Diamond/Pearl (`lake-verity`) and Platinum (`sinnoh-route-201`),
  so "same generation" is not "same override target."
- **Don't assume a variant's shared data equals another already-existing
  game's data just because they're the same generation.** Diamond/Pearl
  and Platinum diverge in real ways (Platinum adds the Distortion World,
  the Battle Frontier facility, the Regigigas ruins, and different
  post-game trainer rematches). Note this is narrower than it sounds —
  e.g. Fight Area/Survival Area/Resort Area and the Great Marsh _are_
  shared with D/P despite superficially reading like Platinum additions.
  Verify each specific piece of "shared" data against a primary source
  (Bulbapedia, Serebii) rather than guessing from familiarity with one
  game in the family — don't trust an AI web-fetch summary at face value
  either, since it can misreport table contents; cross-check anything
  that looks surprising with a second source or the raw wikitext.
- **"Locations are unchanged from game X" means the location skeleton
  only** (name, subareas, `encountersKey`) — never take it to include
  `battles` placements/keys unless told so explicitly. Trainer rosters
  and even trainer _positions_ can differ between games sharing a map,
  so scaffold locations with no `battles` field and let that be filled
  in later, per-game, as its own step.
- `encountersKey` values (PokeAPI location-area slugs) are safe to copy
  verbatim from an already-onboarded same-region game's location files.
  A single PokeAPI location-area object holds `version_details` for
  every version in the generation, so the slug itself isn't per-version
  even though the encounter contents extracted from it are.
- **Don't assume where a given encounter (especially the starter handoff)
  happens is the same across games in a family — verify against PokeAPI
  directly, and don't fall back to `manualEncounters` just because the
  first location you guess comes up empty.** Platinum's config resolves
  the starter at `sinnoh-route-201` via a `methodOverride`, but querying
  `https://pokeapi.co/api/v2/location-area/<slug>/` directly for D/P
  showed the `gift` encounter tagged there only under `version: platinum`
  — while the _same query_ against `lake-verity-before-galactic-intervention`
  had it correctly tagged for both `diamond` and `pearl`. The in-game fact
  (Diamond/Pearl hand out the starter at Lake Verity, not Route 201) was
  real and PokeAPI had the data — the fix was pointing `methodOverride.location`
  at the right slug, not writing a manual encounter. Reach for
  `manualEncounters` only once you've confirmed PokeAPI has no data for
  that species at _any_ plausible location, e.g. via a direct
  `curl https://pokeapi.co/api/v2/location-area/<slug>/` check.
- **Fetching real map images for a variant** (e.g. Diamond/Pearl-specific
  art distinct from Platinum's): Bulbapedia's location pages have a
  `==Layout==` section with per-game `[[File:<Name> DP.png]]` /
  `[[File:<Name> Pt.png]]` links (or a single shared `<Name> DPPt.png`
  when the art is identical across D/P/Pt — verify this per-location, it
  varies). Don't rely on `WebFetch`'s summarization to enumerate these
  filenames — it has been observed to both miss real per-version files
  (reported Twinleaf Town as unversioned when `Twinleaf Town DP.png` /
  `Twinleaf Town Pt.png` both exist) and mislabel shared assets as
  version-exclusive. Instead pull the raw wikitext directly and grep it:
  `curl -s "https://bulbapedia.bulbagarden.net/w/index.php?title=<Page>&action=raw" | sed -n '/==Layout==/,/==[A-Z]/p'`
  (redirects resolve if you fetch the real page title, e.g. `Route_203`
  redirects to `Sinnoh_Route_203`). Once you have the exact filename,
  download it directly via Bulbapedia's file-path redirect — no archive
  hash lookup needed: `curl -sL "https://bulbapedia.bulbagarden.net/wiki/Special:FilePath/<Name>_DP.png" -o maps/<slug>.png`.
- If an existing game's app data splits one physical map into multiple
  subarea images (e.g. Platinum's `route-204-north.png` /
  `route-204-south.png`) but Bulbapedia only has a single combined image
  for the new game/variant, crop it yourself — the project already
  depends on `sharp`, so a small Node script (run from the project root,
  not a scratch dir, so `require('sharp')` resolves against
  `node_modules`) can `extract({ left, top, width, height })` the same
  regions. Match the existing split's pixel dimensions/overlap by
  inspecting the reference game's already-split files first.
