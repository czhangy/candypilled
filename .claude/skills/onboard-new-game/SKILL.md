---
name: onboard-new-game
description: Add a new playable game (or a set of same-generation variant games like Diamond & Pearl that share everything except wild encounters) to the tracker. Use when asked to add a new game, add a game variant, or scaffold game data.
---

# Onboarding a new game

A game is a `Game` object (`src/lib/static/types.ts`) registered in `GAMES` (`src/lib/data/games.ts`). Nothing in the UI special-cases a game by name; its URL slug is `StringHelpers.toSlug(game.name)`. Onboarding is data authoring plus registration, never a component change.

## Rules

**Every game is an independent data source.** Never use one game to infer, template, or verify another's data, whether values (stats, moves, encounters, met indices) or structural assumptions (a flag's bit index, a save condition's shape). Derive everything from that game's own primary source (its decomp, its trainer/encounter data, PokeAPI scoped to its version), even when a value happens to match. Exceptions: games explicitly grouped as sharing data (see "Variant games"), and existing games' _code_ as a reference for this codebase's own conventions (file layout, type shapes).

**Ask, never assume.** A missing, unclear, or ambiguous value is a hard stop: ask before writing, every time. This covers every category (species/level/nature/ability/item/move/gender/IV values, map anchors, coordinates, battle metadata, split placement, save conditions) and structural calls. Never infer a battle's structure (pairing two trainers as a Tag, treating a note as a Multi Battle) from source phrasing or from what the schema supports; report what the source says and ask how to model it.

- Optional in TypeScript is never optional in the data (`ivs`, `heldItem`, `gender`). Omit a field only when the source explicitly says it doesn't apply (e.g. a genderless species' `gender`).
- A value comes only from (1) an explicit, documented source or (2) the user, for this exact case in this exact game. "The rest of the row follows a pattern", "it's the only sensible value", "a similar case used this", and "common knowledge" are guesses, and a guess in the dataset is indistinguishable from sourced data later.
- Ask a recurring per-case call (e.g. "does this trainer class imply a fixed gender?") every time it comes up, but record each confirmed answer in the game's `ONBOARDING.md` table so it's never asked twice. Add a row only after the user confirms it for this game.
- Append items in the order the user gives or the source lists them; never reorder by inferred geographic or canon order.

**Keep this skill free of game-specific facts.** It documents how to onboard, not what any one game's data turned out to be. A derived constant or specific location name belongs in a comment next to the code it produced. Test: would the sentence still make sense to someone onboarding a different game in a different generation?

## Vanilla game vs. ROM hack

A hack breaks most assumptions of the API-driven vanilla flow.

- **Data source.** Vanilla: PokeAPI (wild encounters, base data) plus, for Gen 3/4, the game's own pret-style decomp for trainer teams/IVs/AI (`gen3-trainer-data-extraction` for Gen 3; write the equivalent skill for another generation if it's missing). Hack: neither works. PokeAPI doesn't know about patches, and a hack's decomp reflects the unpatched base game, so vanilla tooling silently returns wrong data. Use the hack's community tracker (spreadsheet, wiki, changelog) that the user points to. If none exists, that's a blocker to raise.
- **Modeling.** A hack that changes only some entries of an otherwise-vanilla dataset is vanilla data plus a sparse override: `DataOverrides<T>` and `GameDataSource.overrides` in `types.ts`, `DataOverrideHelpers.applyOverrides` / `removeEntries`. The game's own `pokemon`/`moves` exports hold the merged result. Diff against vanilla as resolved for that generation (`GenerationHelpers.resolveGeneration`), not raw data. Encounters and trainer battles are always fully independent per game.
- **No decomp, no static verification.** Validate the save layout by checksum against the closest vanilla layout, then cross-check decoded values (money, badges, story flags) against what the user observed in a real playthrough. Never assume bit orders or offsets carried over. If one can't be pinned down, record it as unverified in the game's status tracking rather than writing a guess.
- **Assets.** Hacks often reuse base-game art. Still diff every file by content hash (see "Sharing `public/` assets").
- A hack still gets a real `Game.generation`/`version` from the base game it patches (a technical fact, not an in-universe one).

## Sources

Pin these down before authoring anything.

- **Vanilla:** PokeAPI (wild encounters, base data, per version); that generation's decomp (trainer data, badge bit order, per-gym badge grants); Bulbapedia/Serebii (met-location index, version exclusivity, trade-gated content). When a fetched wiki table looks surprising, pull the raw wikitext instead of trusting a summary.
- **ROM hack:** the hack's own tracker (the only valid source for anything it changed); a real emulator save for layout/badge/flag facts; base-game Bulbapedia only for facts the hack didn't touch, confirmed with the tracker or the user.

**Document hand-curated sources** in `src/lib/data/<slug>/ONBOARDING.md`, kept current as a live procedural reference (edit rules in place; it isn't a session log). Include:

- document/workbook IDs, which tab holds which data, and how to re-derive the tab list
- the column layout and grouping convention, and the sentinel rows that bound each section
- a mechanical cell-to-field mapping table, kept separate from anything that always needs asking (structural notes, missing values, ambiguity)
- the per-case confirmed-facts table from "Ask, never assume"
- a phase-status table (done, in progress, unverified and why)

## Onboarding order

### 1. Data folder

`src/lib/data/<slug>/` (reference implementation: `platinum/`):

- `<slug>.ts` assembles and default-exports the `Game`; `index.ts` is `export { default } from './<slug>';`
- `met-locations.ts`: region met-location index to name table
- `encounters.ts`: `ENCOUNTERS: Record<string, Encounter[]>`
- `locations/*.ts`: one `Location` per file, importing its map(s) from `./maps`
- `locations.ts`: `LOCATIONS: Location[]`, every location in the game
- `battles.ts`: `BATTLES: Record<string, BattleData>`
- `splits/*.ts`: the `Split[]` groupings
- `maps/*.png` plus `maps/index.ts`

### 2. `met-locations.ts` first

Author the met-location table before any location file. It comes from a trusted static list (Bulbapedia's index list for the generation, as raw wikitext, or the decomp's location table for Gen 3), never from another game's table, and it is the source of truth for which places become Locations.

- Keep only indices this game can produce (drop indices that debuted in a later version) and drop places that won't be modeled as Locations (shops, interiors, event-only spots). A save that carries a dropped index imports as `Unknown Location`.
- Merge indices that are one place into a single name (e.g. several per-area indices of the same region).
- Every remaining name must equal a `Location.name` exactly. If the list's name differs from what the app calls the place, ask which name to use.

### 3. Encounter scraper config and encounters

Vanilla games only. A hack has no PokeAPI coverage, so hand-author `encounters.ts` from its tracker per that game's `ONBOARDING.md`.

1. Add `src/lib/scripts/pokeapi/game-versions/<slug>.ts` exporting a `GameVersion` (see an existing file for the shape and rationale of each field) and register it in that folder's `index.ts` `GAME_VERSIONS`.
2. Run `npm run pokeapi:encounters <slug>`. This writes a raw `encounters/encounters.json`, which is already shaped like `Record<string, Encounter[]>` with `method` as a raw string (the enum's underlying value). Convert it mechanically with a throwaway Node script that swaps in `EncounterMethod.<PascalCase>`, wraps the boilerplate, then `prettier --write`. Never hand-transcribe.

Every codegen/fetch script (`pokeapi:*`, `gen:*`) takes the target game as its first CLI argument.

### 4. Locations

Create one `Location` per met-table name, in the order the user gives. A place the met index doesn't cover (gyms, Elite Four and champion rooms, and similar) is added only when the user directs.

1. Put the PNG at `maps/<map-slug>.png`, then run `npm run gen:location <slug> <map> [name] [subareaName]`. It wires `maps/index.ts` and creates/updates `locations/<name>.ts`.
2. **Add the location to `locations.ts`.** `gen:location` doesn't, and `check:data` fails on an unlisted file. In a variant group, shared locations live in the shared folder's `locations.ts` and a version-exclusive location is appended in that variant's own `<variant>.ts` (`locations: [...LOCATIONS, VERSION_ONLY]`).
3. Add every met-less location to that game's `unmappedLocations` (step 10).

### 5. Battles

`npm run gen:battle <slug> <location> [subarea] [flags]` adds placement and metadata to the location file. Trainer data (team, AI flags) is hand-authored in `battles.ts` under the generated `battleKey`. Set every `BattleData.split` to the game's first split as a placeholder until step 8.

- **With an external trainer source** (always true for a hack), population is a collaborative location-by-location loop. The user supplies each location's trainer names in order, each one's IVs, and each one's `BattleMetadata`; map those to the source (team, ability, nature, moves, AI flags), state exactly what was parsed and get it confirmed before writing, then wire the `battleKey`s into the location's `battles: []` in the user's order.
- **`battleKey` convention:** `<trainer-class-slug>-<name>` for named individuals; `<trainer-class-slug>-<number>` (with `name` set to that number as a string) for anonymous repeated trainers such as faction grunts. Don't invent location-based keys. A tag battle's `secondTrainer` reuses the primary's `name`. Check any existing game's `battles.ts` for the convention; that's app structure, not game data.
- **Never guess, and never scaffold a placeholder for:** x/y placement (a `0, 0` entry isn't scaffolded yet, so stop and ask); which named trainer is at a location and in what order; a `BattlePokemon`'s `gender` when the source doesn't state it (omitting it renders as genderless, which is wrong for nearly every species).
- **IVs:** for a vanilla game, derive from that game's own primary source, never from the user or back-solved from stats (ambiguous at low levels; use only as a cross-check). If no derivation path is documented for that generation, research and document one rather than asking the user. For a hack, IVs come from its tracker; if the tracker doesn't clearly cover a team member, ask.
- **A roster or battle that varies by run state:** see "Divergent teams and battles" before authoring.

### 6. Trainer classes

If a battle references a class missing from `src/lib/data/trainer-classes.ts`, run `npm run gen:trainer-class <folder> <classSlug> <displayName> [spriteSlug]` (the sprite must already be at `public/trainers/<folder>/<classSlug>.png`; `<folder>` is the game's `trainerAssetFolder`). The file is shared across all games, so check it first and add only classes that are genuinely new. The battle-items dataset and `DANGEROUS_ITEMS`/`DANGEROUS_ABILITIES` are also global and need work only for a new item or ability the fetch scripts don't cover.

### 7. Splits and `saveCondition`

Author `splits/*.ts` by hand (no generator; they encode judgment). `Split.locations` lists only the locations the player is required to go through for that split, curated by the user (see `.claude/docs/split-location-wiring.md`). It need not list every location: the Locations tab shows all of `Game.locations`. Every split needs a `saveCondition`; see "Deriving a `saveCondition`".

### 8. Assign splits (per location, as it's onboarded)

Splits are decided while each location is wired, never in a later pass. Once a location's battles and encounters exist, ask the user for:

1. Whether the location belongs in a split's `locations` (required to pass through it) and, if so, which.
2. Each subarea's base split. A subarea has one split; only rare battles or encounter methods differ from it.
3. The exceptions: individual battles (`BattleData.split`, tag partners included) and methods that become available in a different split than the base (for example, surf in a later split than the area's base).

`BattleData.split` and `Location`/`Subarea` `methodSplits` (one `{ method, split }` per encounter method) record the split each first becomes available in. Write them from the user's answer. Never infer one from location membership, sheet text, or geography, and never leave a first-split placeholder to fix later. `npm run check:data` fails any encounter method without a split. A game-specific gating rule (for example, a move or item that unlocks surf or fishing in a later split) applies only once the user has stated it for that game, and then to every location without asking again.

### 9. Assemble and register

Assemble the `Game` in `<slug>.ts`: name, logo, generation, `version` (PokeAPI version-group slug), `dataSource`, `badgeAssetFolder`, `trainerAssetFolder`, `genders` (only if needed), `splits`, `locations`, starters, accentColor, encounters, battles, metLocationById, wipeMessages. Add `public/logos/<slug>.png` and the game to `GAMES`.

- `version`, `badgeAssetFolder`, `trainerAssetFolder` are enums in `src/lib/static/enums.ts`: add a member for a genuinely new value, reuse one when sharing.
- Registering makes the game selectable. `EncounterHelpers.getStarterLocationName` assumes every registered game has a wired location with a `Starter` encounter, so an empty `ENCOUNTERS` crashes "New". Land real encounter data first.

### 10. Validate

Run `npm run check:data`. It checks that every encounter method has a split, every split name is real, met-locations and locations correspond in both directions, and every file in `locations/` is listed in `locations.ts`. It runs in pre-commit for staged `src/lib/data/` files. For a new game, add an entry to `GAME_CHECK_CONFIGS` in `src/lib/scripts/validation/game-configs.ts`:

- `dataFolder`
- `unmappedLocations`, the locations with no met entry

## Sharing `public/` assets

`public/` is organized by asset type, then game/variant (`pokemon/<variant>/`, `trainers/<folder>/`, `badges/<folder>/`; `box/`, `items/` are global). Never add a top-level `public/<game>/`. Badge and trainer sprites resolve through `Game.badgeAssetFolder` / `trainerAssetFolder`, so games with identical art can share a folder.

- The two fields are independent. Sharing one says nothing about the other (a real case: sibling games shared badge icons while a handful of trainer classes differed).
- Never assume identical art from region or franchise knowledge. Diff every file by content hash and require zero differences before pointing at an existing folder (a name/count comparison once missed 3 of 81 differing files).
- Pokémon sprites use literal per-species paths in `pokemon.json`, so sharing means reusing the path string. Only do that inside an established sharing relationship, after the same hash diff.

## Divergent teams and battles

Two independent mechanisms; choose by what varies.

- **Same trainer and battle, different roster** (starter-dependent rival, randomized team pool): `BattleTeam[]` via `teams`, each `{ condition?: BattleTeamCondition; team }`. A team with no condition always applies, and every team that survives filtering renders. `BattleTeamCondition` is a discriminated union in `types.ts` (currently the `starter` variant); add a variant for a new kind of divergence, matching `SplitSaveCondition`'s shape.
- **A different battle entirely** (different trainer or position, or a fight for one gender only): a separate `Battle` entry in the location's `battles: []` with its own `battleKey`/`BattleData`, restricted with `gender`. `BattleHelpers` battle-listing functions exclude the non-matching one automatically.

Never use `Battle.gender` for a roster-only difference or `BattleTeamCondition` for a wholesale-different trainer. If a game has gender-dependent content, also set `Game.genders: { male, female }` (protagonist sprite paths for the gender-select modal); omit it otherwise.

## Deriving a `saveCondition`

One coarse condition per split, resolved against a decrypted save by the generation's split parser (e.g. `Gen4SplitParser.ts`).

- A split ending at a gym uses `{ type: 'badge', bit: N }`. The champion split uses `{ type: 'gameClear' }`, resolved against the save's story-cleared flag (already wired for Gen 4 via `Gen4SaveLayout.mainStoryClearedOffset`).
- **Never assume a bit from split order, gym number, or another game's value**, even when the badge's identity is stable franchise knowledge (sibling games can reorder gyms without moving bits). Derive it from the game's own decomp in two steps: (1) the badge's bit index from the generated constants file (line position is the bit, e.g. `include/constants/badge.h`, `generated/badges.txt`); (2) which badge a specific gym leader grants, from a source that names that gym (its gym-features file, or a badge-gated field-move check cross-referenced with Bulbapedia's HM table). Don't guess a gym from a badge name alone.
- If no gym-specific source exists, ask. A wrong bit silently marks the wrong split complete on import.
- **A hack with no decomp:** decode real saves at different badge counts and check which bits flip. Until confirmed, record the bit as unverified in the game's status tracking; a `saveCondition` written from an assumption is worse than one left pending.

## Variant games sharing a generation (e.g. Diamond & Pearl)

Games that differ only in wild encounters share one data folder (reference: `src/lib/data/diamond-pearl/`):

```
src/lib/data/<shared-slug>/
  battles.ts  met-locations.ts  locations.ts
  locations/*.ts  splits/*.ts  maps/*.png + index.ts
  <variant-a>/  encounters.ts  <variant-a>.ts  index.ts
  <variant-b>/  encounters.ts  <variant-b>.ts  index.ts
```

- **Shared steps happen once** in the shared folder (steps 2 and 4-8); pass the shared slug to `gen:*`. **Encounters happen per variant** (step 3), each with its own `GameVersion` id and exact PokeAPI version slug, since encounter tables differ per version, not just per version group.
- **Do encounters before scaffolding locations** (see the step 9 crash note).
- `Game.version` must be identical across variants (movesets resolve per version group). It differs from the per-variant `GameVersion.version`, which is intentionally narrower.
- Each variant has its own `logo`, `accentColor`, `public/logos/<slug>.png`, and its own `GAMES` entry. A version-exclusive location is appended by its variant (`locations: [...LOCATIONS, VERSION_ONLY]`).
- **Sibling data is never assumed equal.** Verify shared data against a primary source. Sibling games can diverge in late-game areas, post-game content, gym order, trainer rosters, and even trainer positions on a shared map. "Locations are unchanged from game X" means the skeleton only (name, subareas, `encountersKey`), never `battles`. Don't guess a diverging split's order from general knowledge: propose one from the source game's split files and have the user confirm before fetching maps.
- **Bootstrapping a scraper config from a sibling is a convenience, not verification.** Audit every `excludedLocations`, `methodOverrides`, and `manualEncounters` entry against PokeAPI directly. Script it: for each entry, fetch the location/areas and check whether any encounter is tagged with the new version. This separates real scope exclusions from dead weight.
- **Partial population** (only when the user says so, e.g. "copy the mapping from Platinum, get the battle data from D/P's own data"): `battleKey`, `x`/`y`, `metadata`, `fieldCondition`, and `customWidth`/`customHeight` are layout scaffolding tied to the map image, so they may be copied from a same-map game's location file. Team, ability, nature, moves, gender, and IVs must still be derived from the target game's own sources, and copied markers and their `battles.ts` entries land together (`TrainerMarker` reads `game.battles[key].trainerClass` unguarded, so a marker without an entry crashes). Verify every copied `battleKey` resolves to a real trainer in the target game; roster identity can differ per marker slot even when the layout is identical.
- **`encountersKey` values** (PokeAPI location-area slugs) are safe to copy verbatim from a same-region game; one area holds `version_details` for every version.
- **After authoring locations, audit `encountersKey`s in both directions.** Every used key must resolve to encounters in each variant, and every key in `ENCOUNTERS` must be used by some location. A dead key isn't automatically a bug: confirm against Bulbapedia whether the content truly doesn't exist there, then omit the `encountersKey` (locations with no encounters omit the field). An unused key is either a genuine unmodeled location (build it) or out-of-scope content (move it to `excludedLocations`/`excludedAreas`); check each rather than assuming the comfortable answer. Re-run after any `excludedAreas` edit: a location left with one area collapses its key to the bare location slug.
- **Verify where an encounter happens (especially the starter handoff)** by querying PokeAPI's `location-area/<slug>/` for the specific version before reaching for `manualEncounters`; a real location difference between siblings is legitimate.
- **PokeAPI doesn't model trade-gated exclusivity** (version-exclusive fossils, starters). It tags both versions. Cross-check each species at a fossil/gift/trade location against Bulbapedia's availability table.

## Map images

- **Fetching:** check the source wiki's location page for per-version image files versus one shared file, per location. Pull raw wikitext and grep it; summarization tools miss real per-version files and mislabel shared ones. If an extracted section looks too short, re-run without the range restriction (a subsection heading may match your end-of-section pattern).
- **Cropping a combined image into subareas** (the project has `sharp`; run from the project root): don't assume a 50/50 split. Composite maps are often asymmetric (L-shapes, transparent padding). Measure the real boundary by counting opaque pixels per row/column across the halves, where one side's count hits zero. Built-in trim helpers often silently no-op when the corner color is real content. Cross-check the result's dimensions against the same game's already-split maps, and always view the cropped output.
- **Never rescale a map to match another game's version.** Marker size is a fixed pixel constant divided by the map's own intrinsic size, so this game's own map folder is the only valid resolution reference (native widths well into four figures are normal). Crop only, at native resolution, unless the specific asset is demonstrably anomalous.
