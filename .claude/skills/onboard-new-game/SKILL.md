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
3. **Fetch + author encounters** — run `npm run pokeapi:encounters <slug>`,
   where `<slug>` is the `GameVersion.id` registered in step 2 (e.g.
   `platinum`, or `diamond`/`pearl` for a variant). Every codegen/fetch
   script (`pokeapi:encounters`, `pokeapi:pokemon`, `gen:location`,
   `gen:battle`, `gen:trainer-class`, `compose`) takes the target game as
   its first CLI argument rather than reading a shared config constant, so
   pass it explicitly on each invocation. This writes a raw
   `src/lib/data/<slug>/encounters/encounters.json`, in a
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
4. **Scaffold locations** — for each map, place the PNG at
   `maps/<map-slug>.png` first, then run
   `npm run gen:location <slug> <map> [name] [subareaName]`. It wires the
   map into `maps/index.ts` and creates/updates `locations/<name>.ts`.
5. **Scaffold battles** — `npm run gen:battle <slug> <location> [subarea]
[flags]` adds placement + metadata to the location file; the actual
   trainer data (team, AI flags, save condition) is then hand-authored in
   `battles.ts`, keyed by the generated `battleKey`.
    - **When an external trainer data source is involved (e.g.
      `dp_trainers.json`, keyed by `rom_id`), battle population is a
      location-by-location, collaborative loop -- not something to run
      solo end-to-end.** The workflow: the user supplies, per location, the
      trainer names present there (in order), each one's IVs, and each
      one's `BattleMetadata`. You map those names to the matching entries
      in the external data source (team, ability, nature, moves, AI flags)
      and use that to populate `battles.ts` (merging in the user-supplied
      IVs/metadata), computing `trainerFlag` mechanically where the
      formula applies (see the `rom_id + 1360` derivation elsewhere in this
      doc). Then wire the resulting `battleKey`s into that location's
      `battles: []` array in the order the user gave the names, with `x: 0,
y: 0` placeholders.
    - **Never guess or derive the following -- always come from the user,
      even when a derivation looks technically achievable:**
        - **x/y placement.** A static map screenshot doesn't give
          pixel-accurate NPC position, and two same-class trainers (e.g. two
          "Youngster" sprites) can be visually indistinguishable. Always
          `x: 0, y: 0`.
        - **Which named trainer is at a given location, and in what order.**
          External sources' location fields are often sparse (e.g.
          `dp_trainers.json`'s `trainer_location` is populated on only
          ~14% of entries) -- don't infer identity/order from partial data.
        - **IVs.** Even though back-solving a trainer's exact IV from a data
          source's raw computed stats (via the standard stat formula) is
          possible and was done once to correct a wrong assumption (Platinum's
          `ivs: 1` convention doesn't hold for D/P -- verified empirically at
          `ivs: 0` for D/P's generic trainers), don't do this derivation by
          default. The user supplies IVs directly as part of the per-location
          workflow above.
6. **New trainer classes** — if a battle references a trainer class not
   already in `src/lib/data/trainer-classes.ts`, add it with
   `npm run gen:trainer-class <slug> <classSlug> <displayName> <male|female> [spriteSlug]`
   (requires a sprite already at `public/<slug>/trainers/<classSlug>.png`).
7. **Author `splits/*.ts` and `met-locations.ts`** by hand — these have no
   generator, since they encode judgment calls (gym order, exact met-index
   table) rather than mechanical scaffolding. For `met-locations.ts`, don't
   transcribe Bulbapedia's full index table verbatim — cross-check against an
   already-onboarded same-region game's file first (e.g. `platinum/`) and
   match its _subset_ of included indices. Existing games intentionally omit
   indices for locations that never come up as a met-location for this app's
   purposes (event-only/static-encounter spots like Pal Park, Newmoon/
   Fullmoon Island, Turnback Cave); including the full academic list adds
   entries that don't reflect real usage.
8. **Assemble the `Game`** in `<slug>.ts` (name, logo, generation, `version`
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

- **Do encounters (steps 2-3) before scaffolding locations (step 4), even
  though this reads out of order.** `EncounterHelpers.getStarterLocationName`
  (used by the run-creation screen) assumes every registered `Game` has at
  least one wired location with a `Starter`-method encounter — with an
  empty `ENCOUNTERS` stub, `GAMES` already contains the new game (it's
  selectable in the UI as soon as it's registered), and clicking "New"
  crashes with a null-property error. Get real encounter data in before
  leaving the game in a state a user can click into, even if locations,
  battles, and splits are still incomplete.
- Steps 1 and 4-7 (locations, battles, trainer classes, splits,
  met-locations, maps) happen **once**, in the shared parent folder, not
  per variant. Since `gen:location`/`gen:battle`/`gen:trainer-class` take
  the game as their first CLI argument (a plain data-folder slug, not
  validated against `GAME_VERSIONS`), pass the **shared folder's slug**
  (e.g. `diamond-pearl`) as that argument while running them for this
  shared content.
- Steps 2 and 3 (the `GameVersion` scraper config and `ENCOUNTERS`) happen
  **once per variant**, each with its own id (e.g. `diamond`/`pearl`)
  and its own exact PokeAPI version slug — wild encounter tables genuinely
  differ per individual version, not just per version-group, so this can't
  be shared even though everything else is. Pass the specific variant id
  as the `pokeapi:encounters` CLI argument for each variant's run.
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
- **Don't assume a sibling game's split boundaries (which locations belong
  to which gym's split, and their order) carry over.** Sinnoh's gym order
  itself differs between Diamond/Pearl and Platinum — Platinum moved
  Fantina (Hearthome) earlier and Maylene (Veilstone) later, so a straight
  "copy Platinum's split file" produces the wrong split grouping even
  though the underlying map/location data is shared. When told a split
  "diverges," don't guess the new location order from general game
  knowledge — reconstruct a proposal from the source game's split files
  (which locations exist, what their subarea/encountersKey structure is)
  and have the user confirm or correct the order before scaffolding maps,
  since fixing a wrong order after the fact means re-doing map fetches.
- `encountersKey` values (PokeAPI location-area slugs) are safe to copy
  verbatim from an already-onboarded same-region game's location files.
  A single PokeAPI location-area object holds `version_details` for
  every version in the generation, so the slug itself isn't per-version
  even though the encounter contents extracted from it are.
- **After authoring a batch of locations, audit every `encountersKey` in
  use against the actual fetched `ENCOUNTERS` for a "dead key"** — a key
  that resolves to zero encounters in one or both variants. This catches
  two distinct problems in one pass: (1) an `excludedSpecies` correction
  that hollowed out a location entirely (e.g. excluding Eevee left
  `hearthome-city-area` with nothing, since the gift was its only real
  entry), and (2) a location that was always going to be legitimately
  empty for this game family regardless of species exclusions (e.g.
  `veilstone-city`'s Porygon prize is Platinum-only per Bulbapedia, so
  the key was dead from the start). Script it: `grep` every
  `encountersKey: '...'` out of `locations/*.ts`, then for each key check
  `(ENCOUNTERS[key] ?? []).length` in both variants' `encounters.ts`. A
  key dead in a specific game isn't automatically a bug — confirm against
  Bulbapedia whether the content genuinely doesn't exist there before
  assuming it's a fetch/config error. Once confirmed genuinely empty,
  don't leave a pointless `encountersKey` in the `Location` object —
  match the app's existing convention of omitting the field entirely for
  locations with no real wild/gift encounters (see `Café Cabin`,
  `Jubilife City`, `Eterna Gym`).
- **Run the audit in both directions: every key in the fetched
  `ENCOUNTERS` must be used by some `encountersKey` in `locations/*.ts`,
  not just every used key must resolve to real data.** A key present in
  `ENCOUNTERS` but referenced by no location is not automatically safe to
  ignore — do not assume it's intentionally-excluded content without
  checking. It means one of two things: (1) a real location the app
  hasn't modeled yet (a genuine miss — go build it, verify its map art
  and split placement against Bulbapedia rather than guessing), or (2) content
  that's genuinely out of scope for this game (a different game's
  exclusive area, a story-state variant that was deliberately collapsed
  away), in which case it belongs in `excludedLocations`/`excludedAreas`
  so it stops being fetched at all, rather than sitting in `ENCOUNTERS`
  unused. Don't default to assuming case (2) — this was gotten wrong
  once: `sinnoh-route-221`, `sinnoh-sea-route-220`, and `fuego-ironworks`
  were assumed to be Platinum-exclusive without checking, when in fact
  they're real, unmodeled Diamond/Pearl content with their own DP-specific
  Bulbapedia art (`sinnoh-route-213` was a similar case, just deliberately
  parked instead of overlooked). Script it the same way as the dead-key
  audit but inverted: diff the full set of top-level keys in
  `ENCOUNTERS` against the set of `encountersKey` values actually in use.
  Also watch for keys that shift when an `excludedAreas` entry changes: if
  a location only has one PokeAPI area left after exclusion, the fetch
  script's single-area fallback renames the key to the bare location
  slug instead of the area slug (e.g. excluding
  `lake-verity-after-galactic-intervention` renamed the remaining key
  from `lake-verity-before-galactic-intervention` to plain
  `lake-verity`) — re-run this audit after any `excludedAreas` edit, not
  just after `excludedSpecies` edits.
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
- **PokeAPI doesn't model real per-version exclusivity for anything
  gated behind trading between cartridges** (most notably version-
  exclusive fossils). It tagged both Cranidos and Shieldon as available
  in both `diamond` and `pearl` at the Oreburgh Mining Museum — in the
  actual games each fossil is only revivable in its own version (Skull
  Fossil/Cranidos in Diamond, Armor Fossil/Shieldon in Pearl; the other
  requires trading with the sibling version), which the earlier
  location-level PokeAPI audit in this skill didn't catch since it only
  checks whether _a_ location has _any_ data for the version, not
  whether every species at that location is genuinely available without
  external trading. Cross-check each species at a fossil/gift/trade
  location against Bulbapedia's own availability table (search
  `<Species>_(Pokémon)` for `Availability/Entry1`) — an
  `Availability/Entry1/None` row for a version means trade-only, i.e.
  exclude that species from that version's `excludedSpecies`, with the
  mirror species excluded on the sibling variant.
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
  redirects to `Sinnoh_Route_203`). **This range often cuts off too
  early** — a `====Subsection====` immediately under `==Layout==` (e.g.
  a building's "Exterior"/"Interior" split, or multi-floor locations like
  Old Chateau, the Galactic Eterna Building, or Mining Museum) matches the
  `/==[A-Z]/` end pattern and truncates before reaching the file links
  under it. If the grep comes back suspiciously short, re-run without the
  range restriction (`grep -n "File:\|===="` over a wider line range from
  the `==Layout==` line number) to catch subsections. Once you have the
  exact filename, download it directly via Bulbapedia's file-path
  redirect — no archive hash lookup needed:
  `curl -sL "https://bulbapedia.bulbagarden.net/wiki/Special:FilePath/<Name>_DP.png" -o maps/<slug>.png`.
- If an existing game's app data splits one physical map into multiple
  subarea images (e.g. Platinum's `route-204-north.png` /
  `route-204-south.png`) but Bulbapedia only has a single combined image
  for the new game/variant, crop it yourself — the project already
  depends on `sharp`, so a small Node script (run from the project root,
  not a scratch dir, so `require('sharp')` resolves against
  `node_modules`) can `extract({ left, top, width, height })` the region.
  **Do not assume the combined image is a symmetric 50/50 top/bottom or
  left/right split** — several of these turned out to be asymmetric
  composites (an L-shape or a full-width band plus a narrower column,
  with the two subareas occupying unequal, non-mirrored regions and
  transparent padding filling the rest). Guessing half-dimensions produced
  a real bug once (Route 205's "South" crop started ~400px too low,
  silently dropping the top of that subarea) that looked plausible at a
  glance because cave/route tile art repeats heavily. Instead, measure the
  actual boundary: read the raw pixel buffer
  (`sharp(src).raw().ensureAlpha().toBuffer({resolveWithObject:true})`)
  and for each row/column count opaque pixels (alpha > ~200) split across
  the image's two halves; the point where one half's count drops to zero
  is the true edge, not the image's geometric midpoint. `sharp`'s built-in
  `.trim()` is unreliable for this — it references a single background
  color (by default the top-left pixel), so it silently no-ops whenever
  that corner happens to be part of the actual content rather than the
  padding, which is common in these L-shaped composites. Cross-check the
  crop's final dimensions against the reference game's already-split file
  dimensions (they won't match exactly since these are separately-sourced
  images, but should be close) before trusting the result, and always
  view the cropped output image directly rather than assuming a correct
  bounding-box computation produced a correct visual result.
