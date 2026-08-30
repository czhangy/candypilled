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

**Every game is an independent data source.** Never use an already-
implemented game to infer, template, or verify another game's data — not
just values (stats, moves, natures, encounter tables, met-location indices),
but structural/mechanism assumptions too (e.g. assuming a save-condition's
shape or a flag/bit index carries over because the underlying game-design
concept is the same). The only exception is a set of games explicitly
grouped as sharing data (see the variant-games section below) — within such
a group, shared files are reused by design, not by inference. Outside of an
explicit grouping, or unless the user says otherwise, derive each game's
data from that game's own primary source (its own ROM decomp, its own
trainer/encounter data file, PokeAPI scoped to that game's version) every
time, even when a value happens to match another game's. Existing games'
_code_ is fine to reference for this codebase's own conventions (file
layout, type shapes) — that's structural to the app, not in-universe game
data.

**Don't accumulate game-specific facts in this skill.** This file documents
_how_ to onboard a game, not what any particular game's data turned out to
be — a derived constant, a specific location name, a specific trainer's
stats are true of one game and become dead weight here once that game is
done. If a derivation is worth writing down permanently, it belongs as a
comment next to the code it produced (e.g. at the top of that game's
`battles.ts`), not in this skill. When updating this skill after learning
something, ask: would this sentence still make sense to someone onboarding
a completely different game in a different generation? If not, it's a
project-memory or code-comment fact, not a skill instruction — generalize
it or leave it out.

## Ask, never assume

A missing, unclear, or ambiguous value is a **hard stop**: stop and ask
the user before writing anything, every time — no exceptions for
convenience, obviousness, "surely this is fine," or wanting to finish a
task in one pass. This applies to every category of data a game onboard
touches (species/level/nature/ability/item/move/gender/IV values, map
anchors, coordinates, battle metadata, split placement, save conditions)
and to structural/modeling calls, not just leaf values — never infer a
battle's structure (pairing two trainers as a Tag, treating a note as a
Multi Battle, assuming an existing type shape is "the" model) from source
phrasing or from what the current schema happens to support; report what
the source says and ask how to model it.

It applies even to fields that are structurally optional in TypeScript
(`ivs`, `heldItem`, `gender`) — optional-in-the-type is never the same
thing as optional-in-the-data. Omitting a field is only correct when the
source of truth explicitly establishes the field doesn't apply (e.g. a
genderless species's `gender`), never as a stand-in for "couldn't find a
value." A value only ever comes from (1) something explicit in a
documented source, or (2) something the user has explicitly said, for
this exact case, in this exact game. "Every other field in this row
follows a pattern," "this is the only value that would sensibly work
here," "a similar case elsewhere used this value," and "this is common
knowledge about the games" are all guesses, not data, no matter how
confident they feel — a guess written into the dataset is corruption
that's indistinguishable later from a real, sourced value.

**A recurring, per-case judgment call (e.g. "does this trainer class
imply a fixed gender?") should still be asked every time it comes up,
but the confirmed answers should accumulate in a small table in that
game's own reference doc (see "Document the source of truth" below) so
the same case is never re-asked twice.** Only add a row to that table
after the user has explicitly confirmed it for this game — never
pre-populate it from real-game canon or another game's table.

A new item (a location, a battle, a split entry) is appended in the order
the user gives it or the source of truth lists it — never reordered by
inferred in-game/geographic/canon order. That's a guess about structure,
covered by the same rule as any other guess.

## Vanilla games vs. ROM hacks

Onboarding branches hard on whether the target is an unmodified cartridge
version or a fan-made hack (a binary patch or a from-scratch fangame), because
a hack usually breaks every assumption the mechanical, API-driven vanilla
flow relies on:

- **Encounter/trainer data source.** A vanilla game's wild encounters and
  base data come from PokeAPI (see the encounter-scraper steps below) and,
  for Gen 3/4, trainer battle data (team, IVs, AI) can be extracted from
  that game's own pret-style decomp — the `gen4-trainer-data-extraction`
  skill does this for Gen 4. **Neither exists for a hack.** PokeAPI has no
  concept of a fan patch, and a hack's own decomp — if one is even
  public — reflects the _base_ game's unpatched data, not the hack's
  hand-edited changes. Running vanilla extraction tooling against a hack
  silently returns wrong data with no error, because the tool has no way
  to know the roster it's reading was overwritten by the patch. A hack's
  data has to come from whatever the hack's own community maintains
  instead — a tracker spreadsheet, a wiki, a hex-edit changelog — pointed
  at explicitly by the user. If no such source exists yet, that's a
  blocker to raise, not a reason to fall back to decomp/PokeAPI data that
  looks plausible.
- **Data modeling: full dataset vs. sparse override.** When a hack only
  changes _some_ fields of _some_ entries in an otherwise-vanilla dataset
  (e.g. a "difficulty hack" that rebalances some Pokémon's stats/movepools
  and retunes some moves but leaves the rest of the dex untouched), model
  it as **vanilla data + a sparse override table**, not as an independent
  copy of the full dataset — this is a shared, reusable mechanism, not
  specific to any one hack:
    - `DataOverrides<T> = Record<string, Partial<T>>` (`types.ts`) — a
      sparse, field-level patch keyed by slug.
    - `GameDataSource.overrides?: { pokemon?: DataOverrides<PokemonData>;
moves?: DataOverrides<MoveData> }` — kept unmerged (for a future
      "what changed" view); the game's own `pokemon`/`moves` exports hold
      the merged result.
    - `DataOverrideHelpers.applyOverrides<T>(base, overrides)` — shallow,
      per-field replace matched by slug.
    - `DataOverrideHelpers.removeEntries` — for content the hack retires
      outright (e.g. moves cut from the game).
    - When diffing a field against vanilla to decide whether it needs an
      override, diff against vanilla's value **as resolved for that
      generation** (what `GenerationHelpers.resolveGeneration` would
      actually pick), not "does vanilla's raw data contain this value
      anywhere" — those can differ.
    - Encounters and trainer battles are never modeled this way even for a
      hack that otherwise uses overrides — they're always fully
      independent per game, vanilla or not, since even a hack that reuses
      most of the base dex typically rewrites every encounter table and
      trainer roster.
- **No decomp means no static verification — verify empirically instead.**
  A hack that's a binary patch over a commercial ROM (rather than an
  open-source fangame) has no source repository to check anything against:
  no `constants/badge.h` to read a badge's bit index from, no
  `gym_features.c` to confirm which badge a gym leader grants, no trainer
  data table to extract IVs from. Anything the vanilla flow would derive
  from source has to be confirmed against a **real save file** instead
  (e.g. a `.sav`/`.dsv` from an emulator): validate the save's layout by
  checksum against the closest vanilla layout, then cross-check decoded
  values (money, badges earned, story-progress flags) against what the
  user actually observed in a real playthrough. Don't assume a hack kept
  the base game's bit order/offsets just because nothing _looks_ changed —
  confirm each one, the same way any other value would need confirming.
  If a specific bit/offset genuinely can't be pinned down this way yet,
  say so explicitly in the game's status tracking rather than writing an
  unverified guess into a `saveCondition` and moving on.
- **Asset reuse is common but still needs verification, never assumption.**
  Many hacks reuse the base game's sprites/badges/trainer art wholesale, or
  reuse _another_ same-generation game's assets (e.g. a Platinum hack
  reusing HeartGold/SoulSilver Pokémon sprites). This makes the
  "Sharing public/ assets across games" section below (content-hash diffing
  before pointing a shared-asset field at an existing folder) apply _more_
  often for hacks, not less — a patch changing gameplay data says nothing
  about whether it also changed art, so still diff every file rather than
  assuming reuse from "it's built on top of X."
- **A hack still gets a real `Game.generation`/`version`** matching
  whatever base game/version-group it's built on (needed to resolve
  shared movesets, etc.) even though its actual content diverges — this is
  a technical/schema fact, not an in-universe one, so it's fine to set
  from knowing what the hack patches.

## Necessary external references

What to pull from, and when, differs by game type — treat this as a
checklist to nail down before authoring anything, not something to
discover mid-task:

**Vanilla game:**

- **PokeAPI** — wild encounters (via the `pokeapi:encounters` scraper) and
  base species/move data, scoped to the specific version/version-group.
- **That generation's pret-style decomp** (e.g. pokediamond/pokeplatinum
  for Gen 4) — trainer battle data (team, IVs, AI flags) via
  `gen4-trainer-data-extraction` for Gen 4, plus generation-wide constants
  like badge bit order (`constants/badge.h` / `generated/badges.txt`) and
  per-gym badge-grant logic (an overlay's gym-features file).
- **Bulbapedia/Serebii** — met-location index tables, cross-checking
  version-exclusivity edge cases (especially anything gated behind
  cross-cartridge trading, which PokeAPI doesn't model correctly), and as
  a second source whenever a web-fetch summary of a wiki table looks
  surprising (pull raw wikitext instead of trusting a summarized fetch).

**ROM hack:**

- **The hack's own community-maintained tracker** — a spreadsheet, wiki,
  or changelog documenting what the hack actually changed (encounters,
  trainer rosters, stat/move rebalances, item changes). This is the
  _only_ valid source for anything the hack touched — never substitute
  PokeAPI or a base-game decomp for it. Get this from the user; if it
  doesn't exist, onboarding this hack is blocked until it does.
- **A real save file** for that hack, from an emulator — the only way to
  confirm save layout/badge-bit/story-flag facts when no decomp exists
  (see above).
- **Bulbapedia/Serebii for the base game** — still useful for facts a
  specific hack didn't change (e.g. which HM a badge unlocks in the base
  game), but never assumed unchanged; confirm against the tracker or the
  user before relying on base-game canon for anything the hack could
  plausibly have touched.

### Document the source of truth

Whenever a game's data comes from a hand-curated external document (a
tracker spreadsheet, a wiki, anything that isn't a mechanical API/decomp
fetch), write a `src/lib/data/<slug>/ONBOARDING.md` reference doc for that
game and keep it current as onboarding proceeds. It should capture,
concretely enough that a future session can act without re-deriving it:

- Document/workbook IDs and URLs, which tab (by name and gid) holds which
  kind of data, and how to re-derive the tab list if it changes (e.g. a
  regex against the sheet's exported bootstrap JS).
- The exact column layout/stride and any grouping convention (e.g. "one
  location per N columns, method labels in column A").
- Sentinel rows/markers that bound where a section starts and stops —
  getting this wrong silently pulls in a different section's/game's data.
- A mechanical cell → field mapping table for anything that translates
  1:1 (e.g. "`<n> IVs` in a trainer's name cell → `ivs: <n>`"), separated
  clearly from anything that is **not** mechanical and always needs asking
  (structural notes like "Double Battle w/ X", missing values, anything
  ambiguous).
- Any per-case confirmed-facts table accumulated per "Ask, never assume"
  above (e.g. which trainer classes have a user-confirmed fixed gender for
  this game), so those cases stop being re-asked.
- A running phase-status table (what's done, what's in progress, what's
  explicitly unverified/assumed and why) — keep this accurate as work
  progresses rather than letting it drift from the actual repo state.

This doc is a live procedural reference for that one game, not a session
log — when a rule changes, edit it in place rather than appending a dated
narrative about the change.

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
2. **Encounter-scraper config** (vanilla games only — a ROM hack has no
   PokeAPI coverage; skip straight to hand-authoring `encounters.ts` from
   the hack's own tracker per "Vanilla games vs. ROM hacks" above,
   following the mechanical cell → field mapping documented in that
   game's own `ONBOARDING.md`) — add
   `src/lib/scripts/pokeapi/game-versions/<slug>.ts` exporting a
   `GameVersion` (id, label, PokeAPI version slug, region, generation, plus
   the exclusion/override/merge config — see an existing game's file for
   the full shape and inline rationale for each field), and register it in
   `src/lib/scripts/pokeapi/game-versions/index.ts`'s `GAME_VERSIONS` array.
3. **Fetch + author encounters** — run `npm run pokeapi:encounters <slug>`,
   where `<slug>` is the `GameVersion.id` registered in step 2. Every
   codegen/fetch script (`pokeapi:encounters`, `pokeapi:pokemon`,
   `gen:location`, `gen:battle`, `gen:trainer-class`) takes the
   target game as its first CLI argument rather than reading a shared
   config constant, so pass it explicitly on each invocation. This writes a
   raw `src/lib/data/<slug>/encounters/encounters.json`, in a directory
   keyed by `GameVersion.id` (not the shared/nested folder — for a variant,
   move or delete this after conversion since it lands outside
   `src/lib/data/<shared-folder>/`). Despite the JSON file, this conversion
   is fully mechanical, not a manual/LLM transcription step: the JSON is
   already shaped exactly like `Record<string, Encounter[]>`, just with
   `method` as a raw string (e.g. `"old-rod"`) instead of an enum reference
   (`EncounterMethod.OldRod`) — the string values are literally the enum's
   underlying values (see `EncounterMethod` in `src/lib/static/enums.ts`).
   Write a throwaway Node script that `JSON.parse`s the file and
   re-serializes it with `method: value` swapped for
   `method: EncounterMethod.<PascalCase>`, wrap in the `import`/
   `export const ENCOUNTERS` boilerplate, then run `prettier --write` on
   the result. Don't hand-transcribe thousands of lines.
4. **Scaffold locations** — for each map, place the PNG at
   `maps/<map-slug>.png` first, then run
   `npm run gen:location <slug> <map> [name] [subareaName]`. It wires the
   map into `maps/index.ts` and creates/updates `locations/<name>.ts`.
5. **Scaffold battles** — `npm run gen:battle <slug> <location> [subarea]
[flags]` adds placement + metadata to the location file; the actual
   trainer data (team, AI flags) is then hand-authored in `battles.ts`,
   keyed by the generated `battleKey`.
    - **When an external trainer data source is involved (keyed by some
      internal trainer ID or by name on a tracker sheet — always the case
      for a ROM hack, per "Vanilla games vs. ROM hacks" above), battle
      population is a location-by-location, collaborative loop — not
      something to run solo end-to-end.** The
      workflow: the user supplies, per location, the trainer names present
      there (in order), each one's IVs, and each one's `BattleMetadata`.
      Map those names to the matching entries in the external data source
      (team, ability, nature, moves, AI flags) and use that to populate
      `battles.ts` (merging in the user-supplied IVs/metadata). Then wire
      the resulting `battleKey`s into that location's `battles: []` array
      in the order the user gave the names, with `x: 0, y: 0` placeholders.
      Every part of this loop (map first, then encounters, then battles,
      with a stated-and-confirmed parse at each stage before writing) is
      itself part of "ask, never assume" above — state exactly what was
      parsed and get it confirmed before it lands in a `.ts` file, even
      when the parse looks unambiguous.
    - **`battleKey` naming is an app convention, check an existing game's
      `battles.ts` for it rather than inventing one per-battle.** Most keys
      are `<trainer-class-slug>-<name>` for named individuals, but a
      trainer class fielded by many anonymous, repeated instances (e.g. a
      recurring antagonist-faction grunt) instead uses
      `<trainer-class-slug>-<number>`, with the battle's own `name` field
      set to that same number as a string — don't invent a location-based
      or otherwise descriptive key for these (a key like
      `<trainer-class-slug>-<location>` looks reasonable but doesn't match
      the convention and reads as wrong once more instances of the same
      class exist elsewhere). For a tag battle, the primary trainer's slug/
      number is what the top-level key uses; the `secondTrainer` reuses the
      same `name` value. This is a data-authoring convention of the app
      itself, not a fact about any one game, so it's fine to check any
      already-onboarded game's file for it regardless of the
      "don't cross-reference other games" rule above.
    - **Never guess the following — always come from the user, and never
      scaffold a placeholder for them:**
        - **x/y placement.** A static map screenshot doesn't give
          pixel-accurate NPC position, and two same-class trainers (e.g. two
          "Youngster" sprites) can be visually indistinguishable. Do not
          write a `0, 0` (or any other) placeholder and move on — a battle
          entry without real coordinates from the user is not scaffolded
          yet. Stop and ask for x/y rather than generating the entry with
          filler values.
        - **Which named trainer is at a given location, and in what order.**
          External sources' location fields are often sparse — don't infer
          identity/order from partial data.
        - **A `BattlePokemon`'s `gender`, whenever the source data doesn't
          state it.** `gender?: 'male' | 'female'` being optional in the
          type does NOT mean "omit when unknown" is a safe default —
          omitting it is read by the app as explicitly genderless (only a
          gender icon is conditionally rendered off its presence), which is
          simply wrong for any species with a real gender ratio (nearly all
          of them). Leaving it out is a data error, not a neutral
          placeholder, unlike genuinely optional fields such as `heldItem`
          or `evs`. If a source sheet has no gender column, ask the user.
    - **If a trainer's roster or the battle itself varies by run state
      (starter, gender, a randomized team pool, etc.), see "Divergent
      teams and battles" below before authoring `battles.ts`/the location's
      `battles: []` array** — don't default to a single `team`/one `Battle`
      entry and bolt on a workaround later.
    - **For a vanilla game, IVs must always be derived from that game's own
      primary source data (its decomp or equivalent reference), never
      asked of or guessed by the user by default.** Back-solving from a
      data source's raw computed stats (the standard stat formula) is
      unreliable on its own — it's often ambiguous at low levels, where
      multiple IVs round to the same displayed stat — so don't rely on
      that method alone; use it only as a cross-check against a direct
      source. For Gen 4 games, the direct source and derivation formula are
      documented in the `gen4-trainer-data-extraction` skill (which reads
      the real IV straight out of the decomp's trainer data, not
      back-solved). If a target vanilla game has no such derivation path
      documented yet, that's a gap to fill (research and document the
      mechanism, the same way Gen 4's was derived) rather than a reason to
      fall back to asking the user.
    - **For a ROM hack, IVs come from the hack's own tracker, never from
      `gen4-trainer-data-extraction` or any other vanilla-decomp
      extraction tool** — that tooling reads the unpatched base game and
      will silently return the wrong value for a hand-edited hack roster.
      If the tracker's IV note doesn't clearly cover a specific team
      member (no team-wide note, no paired-trainer note, no per-mon split
      naming it), that's a hard stop per "Ask, never assume" — there's no
      decomp to cross-check against as a fallback, so ask the user rather
      than guessing a plausible-looking number.
6. **New trainer classes** — if a battle references a trainer class not
   already in `src/lib/data/trainer-classes.ts`, add it with
   `npm run gen:trainer-class <folder> <classSlug> <displayName> [spriteSlug]`
   (requires a sprite already at `public/trainers/<folder>/<classSlug>.png`).
   `<folder>` is this game's `trainerAssetFolder` (see "Sharing public/
   assets across games" below), not necessarily the game's own slug — pass
   whichever folder that game's trainer sprites actually resolve to.
7. **Author `splits/*.ts` and `met-locations.ts`** by hand — these have no
   generator, since they encode judgment calls (gym order, exact met-index
   table) rather than mechanical scaffolding. For `met-locations.ts`, don't
   transcribe Bulbapedia's full index table verbatim — cross-check against
   an already-onboarded same-region game's file first and match its
   _subset_ of included indices. Existing games intentionally omit indices
   for locations that never come up as a met-location for this app's
   purposes (event-only/static-encounter spots); including the full
   academic list adds entries that don't reflect real usage. Every `Split`
   also needs a `saveCondition` (see "Deriving a split's `saveCondition`"
   below) — a split isn't fully authored without one.
8. **Assemble the `Game`** in `<slug>.ts` (name, logo, generation, `version`
   = PokeAPI version-group slug, `dataSource`, `badgeAssetFolder`,
   `trainerAssetFolder`, `genders` (if this game needs it), starters,
   accentColor, encounters, battles, metLocationById, wipeMessages,
   splits), add `public/logos/<slug>.png`, and add the game to the
   `GAMES` array in `src/lib/data/games.ts`. `version`, `badgeAssetFolder`,
   and `trainerAssetFolder` are typed as enums (`GameVersionGroup`,
   `BadgeAssetFolder`, `TrainerAssetFolder` in `src/lib/static/enums.ts`)
   rather than raw strings — add a new member for a genuinely new version
   group or asset folder, or reuse an existing member when this game
   shares one. See "Sharing public/ assets across games" below before
   deciding whether `badgeAssetFolder`/`trainerAssetFolder` point at a new
   folder or an existing one, and "Divergent teams and battles" below for
   `genders`.

## Sharing public/ assets across games

`public/` is organized by asset type first, game/variant second —
`public/pokemon/<variant>/`, `public/trainers/<folder>/`,
`public/badges/<folder>/` (and `public/box/`, `public/items/`, etc., which
are already global and never per-game) — never introduce a new top-level
`public/<game>/` folder. Badge and trainer sprites are looked up through
`Game.badgeAssetFolder` and `Game.trainerAssetFolder` rather than always
being derived from the game's own slug — two games whose in-game art is
actually identical (e.g. several games in the same region, or a ROM hack
that reuses its base game's assets) can point at the same physical folder
instead of each carrying a duplicate copy of the same PNGs.

**These two fields are independent — never assume sharing one implies
sharing the other.** A real observed case in this codebase: Diamond/Pearl
and Platinum share the exact same badge icons (`public/badges/sinnoh/`,
used by all three Sinnoh games), but their trainer sprites are _not_
identical — a handful of classes (School Kid M, Skier F, Socialite) use
different art in Platinum than in Diamond/Pearl, so Diamond/Pearl keep
their own `trainerAssetFolder` (`diamond-pearl`, i.e.
`public/trainers/diamond-pearl/`) rather than sharing Platinum's. Decide
each field on its own evidence.

**Never assume two games' assets are identical from franchise/region
knowledge alone — diff the actual files.** The instinct "same region, so
the badges must be the same" happened to be right for badges here but
wrong for trainers, and a naive file-name-based sameness check can also
lie: comparing files by content hash, not just by matching filenames or
counts, is what actually caught the Diamond/Pearl trainer divergence above
(a shallower per-name comparison missed it, since only 3 of 81 files
actually differed). Before pointing a new game's `badgeAssetFolder`/
`trainerAssetFolder` at an existing folder, diff every file individually
against a real content hash and confirm zero differences — a handful of
differing files is a real per-game divergence, not a fluke to average
over.

**Pokémon sprites don't use a shared-folder field at all** — each
species' `sprites` record in `pokemon.json` already stores a literal path
per sprite variant (e.g. `"platinum": "/pokemon/platinum/piplup.png"`), so
sharing is just a matter of reusing that same literal path string in the
new game's own dataset entry instead of downloading/copying a duplicate
PNG into a new folder. This only applies within an already-established
sharing relationship (e.g. a ROM hack confirmed to reuse its base game's
sprite art verbatim) — verify with a content-hash diff first, same as
above, rather than assuming reuse because the games are related.

## Divergent teams and battles (multi-team trainers, gender-dependent content)

Two independent mechanisms exist for battle content that varies by run
state — pick based on _what_ varies, not by analogy to whichever game
first needed one of them:

- **A trainer's roster varies, but it's still the same trainer/battle**
  (e.g. a rival's team depends on your starter; a trainer has several
  randomized possible teams with no way to know from a run alone which
  one a given playthrough actually has): use `BattleData`/
  `BattleTrainer`'s `teams: BattleTeam[]` field. Each `BattleTeam` is
  `{ condition?: BattleTeamCondition; team: BattlePokemon[] }` — a team
  with no condition always applies, and _every_ team that survives
  condition filtering renders (not just the first match), so several
  genuinely independent unconditioned teams (a randomized roster) all
  show up for the player to check against rather than picking one
  arbitrarily. `BattleTeamCondition` is a discriminated union (currently
  just `{ type: 'starter'; starter: string }`, in
  `src/lib/static/types.ts`) — add a new variant for a new kind of
  team-level divergence, matching `SplitSaveCondition`'s shape.
- **The battle itself is entirely different** (a different trainer, a
  different position, or a fight that only exists for one gender at
  all) — that's not a team variation, it's a different `Battle` marker.
  Give each variant its own `Battle` entry (own `battleKey` pointing at
  its own independent `BattleData`, own `x`/`y` if the position differs)
  in the location's `battles: []` array, and set that entry's `gender` to
  restrict it to the matching run. A marker with no `gender` always
  shows; a location can carry two markers (same or different position),
  each gated to one gender, and every `BattleHelpers` battle-listing
  function (`getBattlesInLocation`, `getAllBattles`, etc.) automatically
  excludes the non-matching one for the current run — no extra wiring
  needed at the call site.

**Never reach for `Battle.gender` to model a roster-only difference, or
`BattleTeamCondition` to model a wholesale-different trainer — they solve
different problems, and conflating them was a real mistake caught
mid-implementation.** Gender-dependent content in a Gen 4 ROM hack can
swap out the entire trainer fought at a location, not just their team,
which the team-condition mechanism has no way to express (it only ever
resolves to one shared trainer's info, never a different trainer
entirely).

If a game needs gender-dependent content at all (either mechanism, or
both), also set `Game.genders: { male: string; female: string }` — each
value is a sprite path, the protagonist artwork shown as a clickable
option in the gender-selection modal in the new-run flow (`RunEntry`'s
`GenderSelectModal`, shown before starter selection), and setting this
field at all is what makes `Run.gender` populated for that game's runs.
Omit the field entirely (the default for every game onboarded so far)
when gender doesn't affect anything in that game.

## Deriving a split's `saveCondition`

Every `Split` (`src/lib/static/types.ts`) needs a `saveCondition`, resolved
against a decrypted save file by a generation-specific parser (e.g.
`src/lib/parsers/gen4/Gen4SplitParser.ts`) to detect which splits an
imported save already reports as finished. This is deliberately coarse —
one condition per split (typically "this split's gym leader has been
beaten"), not one per battle — so it's a much smaller derivation task than
per-battle save data:

- **A split whose last location is a gym ends with `{ type: 'badge', bit:
N }`**, where `N` is that gym's badge bit in the save's badge bitmask.
- **The final split (the one ending in the champion) ends with `{ type:
'gameClear' }`**, resolved against the save's main-story-cleared flag —
  already wired up via `Gen4SaveLayout.mainStoryClearedOffset` for Gen 4
  games, so no extra derivation is needed there.

**Never assume a badge's bit index from split order, gym number, or another
game's value — derive it from that game's own decomp, per the "games are
independent" rule above, even when the badge identity (e.g. "Fantina gives
the Relic Badge") is stable franchise knowledge.** A sibling game can (and,
in Platinum's case, does) change the _order_ you're allowed to visit gyms
in without changing which bit each badge occupies, so split array order is
not a safe proxy for bit order. The derivation is two independent steps:

1. **Find the badge bit each named badge occupies**, from a generated
   constants file rather than any specific script: pret NDS decomps expose
   this as a plain enum-like list where line position is the bit index —
   e.g. pret/pokediamond's `include/constants/badge.h`
   (`BADGE_COAL 0`, `BADGE_FOREST 1`, ...) or pret/pokeplatinum's
   `generated/badges.txt` (one badge ID per line, in bit order, terminated
   by a `MAX_BADGES` sentinel). This step is generation/franchise-level,
   not per-game, so it only needs doing once per decomp project, not once
   per split.
2. **Find which named badge a specific gym leader gives**, from a decomp
   source that names that gym specifically — e.g. a gym's own dynamic-map-
   features file (pret/pokeplatinum's `overlay008/gym_features.c` has one
   function per gym, named after its city, e.g. `HearthomeGym_InitFog`,
   that reads the relevant `BADGE_ID_*`/`TestBadgeFlag` constant directly)
   or a field-move's badge-gated usage check whose surrounding code/comments
   identify which HM it gates (Bulbapedia documents which HM each badge
   unlocks, so a field-move check naming a badge constant can be cross-
   referenced that way too, though a gym-named source is more direct when
   available). Don't rely on badge _name_ alone to guess which gym it
   belongs to — verify from source, the same as any other per-game fact.

If no gym-specific source can be found in the target game's decomp, ask the
user rather than guessing — a wrong bit silently marks the wrong split
complete on import, which is easy to miss since nothing crashes.

**A ROM hack with no public decomp has no source to check either step
against.** Don't fall back to assuming the hack kept the base game's bit
order just because nothing else about the badge system looks changed —
that's exactly the kind of silent, hard-to-catch wrongness this section
warns about. Resolve it empirically instead, the same way the rest of that
hack's save layout should already have been confirmed (see "Vanilla games
vs. ROM hacks" above): decode real save files at different points of
badge progression and check which bits actually flip as each gym is
beaten. Until that confirmation exists for a given bit, record it in the
game's own status tracking as explicitly unverified/assumed rather than
committing it indistinguishably from a confirmed value — a `saveCondition`
written from an assumption is worse than one left pending, since nothing
signals the difference once it's in the file.

## Variant games sharing one generation (e.g. Diamond & Pearl)

Some games differ from a sibling _only_ in wild encounters — everything
else (maps, locations, gym battles, met-locations) is identical. Don't
duplicate that shared data across two full `Game` folders. Reference
implementation: `src/lib/data/diamond-pearl/`.

Structure:

```
src/lib/data/<shared-slug>/
  battles.ts            # shared BATTLES
  met-locations.ts       # shared met-location table
  locations/*.ts          # shared Location definitions
  splits/*.ts              # shared Split[] groupings
  maps/*.png + index.ts     # shared map images
  <variant-a>/
    encounters.ts          # variant-a-only ENCOUNTERS
    <variant-a>.ts           # assembles Game from shared data + own encounters
    index.ts
  <variant-b>/
    encounters.ts           # variant-b-only ENCOUNTERS
    <variant-b>.ts
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
  validated against `GAME_VERSIONS`), pass the **shared folder's slug** as
  that argument while running them for this shared content.
- Steps 2 and 3 (the `GameVersion` scraper config and `ENCOUNTERS`) happen
  **once per variant**, each with its own id and its own exact PokeAPI
  version slug — wild encounter tables genuinely differ per individual
  version, not just per version-group, so this can't be shared even though
  everything else is. Pass the specific variant id as the
  `pokeapi:encounters` CLI argument for each variant's run.
- Each variant's assembled `Game.version` field (the PokeAPI _version-group_
  slug) must be identical across variants — it's used to resolve movesets,
  which are shared within a version group. Don't confuse this with the
  per-variant `GameVersion.version` in `game-versions/<id>.ts`, which is
  the narrower per-version slug and is intentionally different between
  variants.
- Each variant still needs its own `logo`, `accentColor`, and
  `public/logos/<slug>.png` — pick colors matching that version's real
  box-art theme.
- Each variant is registered as its own separate entry in `GAMES`
  (`src/lib/data/games.ts`), not as one combined entry — the UI has no
  "variant switcher" concept, each variant is just an ordinary selectable
  game that happens to import most of its data from the shared folder.
- **When bootstrapping a new variant group's scraper config from an
  existing same-generation game's config as a starting point, audit every
  field against PokeAPI directly afterward rather than trusting it by
  inspection** — this is a one-time bootstrapping convenience, not
  license to assume the two games' actual content matches (see the
  "games are independent" rule above). A script can check every
  `excludedLocations` entry in bulk: for each, fetch the location and its
  areas from PokeAPI, and check whether any encounter there is tagged with
  the new variant's version — this tells you definitively whether an
  exclusion represents a real "not modeled by this app" scope decision
  versus dead weight copied from a game where the location doesn't exist
  in _any_ version of this generation (safe to prune, since excluding
  something that already returns nothing is pure noise). Do the same
  targeted check for `methodOverrides` and `manualEncounters` — query the
  specific area directly and check the species' tagged versions — rather
  than assuming a starting-point config's override still points at the
  right location for the new variant.
- **Don't assume a variant's shared data equals another already-existing
  same-generation game's data just because it's the same generation.**
  Sibling games in the same generation can diverge in real, non-obvious
  ways (added late-game areas, different post-game content, different gym
  order). Verify each specific piece of "shared" data against a primary
  source (Bulbapedia, Serebii) rather than guessing from familiarity with
  one game in the family — don't trust an AI web-fetch summary at face
  value either, since it can misreport table contents; cross-check
  anything that looks surprising with a second source or the raw wikitext.
- **"Locations are unchanged from game X" means the location skeleton
  only** (name, subareas, `encountersKey`) — never take it to include
  `battles` placements/keys unless told so explicitly. Trainer rosters and
  even trainer _positions_ can differ between games sharing a map, so
  scaffold locations with no `battles` field and let that be filled in
  later, per-game, as its own step.
- **Full population vs. partial population, as two named battle-authoring
  modes.** Full population is the default collaborative loop described
  above: the user supplies trainer names/metadata/x-y from scratch, and
  every part of the `Location`'s `battles: []` entries (placement) and
  `battles.ts` entries (content) is built fresh. Partial population is a
  narrower shortcut usable only when a same-map game (typically a same-
  generation game reusing this exact map image, e.g. Platinum for a D/P
  location) has _already_ had that location's placements authored: the
  `battleKey`s, `x`/`y`, `metadata`, `fieldCondition`, and
  `customWidth`/`customHeight` are pure UI/layout scaffolding tied to the
  map image and screen position, not in-universe game data, so they're
  safe to copy verbatim from that game's location file instead of asking
  the user to re-supply them. **The shortcut is scoped to _where the
  placement data comes from_, not to _how much of the location gets
  finished_.** Partial population is still a request to fully populate the
  location's battles, same end state as full population (every `battles.ts`
  entry present with real team data) — "partial" describes skipping the
  marker-authoring conversation, not skipping `battles.ts` content. **Never
  commit the copied `battles: []` markers into a location file before that
  location's `battles.ts` entries exist for every copied `battleKey`** —
  `TrainerMarker` unconditionally reads
  `game.battles[battle.battleKey].trainerClass` with
  no guard, so a marker referencing a nonexistent `battles.ts` entry is a
  runtime crash for any user who reaches that location, not a harmless TODO.
  Treat "copy the markers" and "derive the `battles.ts` content" as one
  atomic unit of work, not two separately-committable steps — **`battles.ts`
  content (team, ability, nature, moves, gender, IVs) still has to be
  independently derived from the target game's own primary sources
  (decomp/cross-reference/Bulbapedia)** — that's exactly the kind of
  in-universe data the "games are independent" rule covers, even when the
  trainer's name and marker position are identical to the source game's —
  do that derivation immediately as part of the same pass, before the
  location file's `battles: []` array is written/committed. When the user
  says something like "copy the mapping from Platinum, get the battle data
  from D/P's own data," that's an explicit request for partial population —
  don't infer it unprompted, since two sibling games can diverge in roster/
  position even on a shared map, and the safety of reuse here rests entirely
  on the user confirming the map is truly the same asset.
  **Roster identity itself can differ per marker slot even when the
  layout is otherwise identical** — a real observed case: Platinum's
  Route 214 has `ruin-maniac-ronald` at one marker, but that trainer
  doesn't exist in D/P at all; the same marker slot belongs to a
  different, D/P-only trainer (`ruin-maniac-hunter`) instead. Verify
  every copied `battleKey` actually resolves to a real trainer in the
  target game (cross-reference the trainer-ID source, or check
  Bulbapedia's raw wikitext for per-slot DP/Pt game tags) before wiring
  it — don't assume a 1:1 name match just because the position and
  surrounding trainers line up.
- **Don't assume a sibling game's split boundaries (which locations belong
  to which gym's split, and their order) carry over.** Even the underlying
  gym order itself can differ between sibling games sharing the same
  region. When told a split "diverges," don't guess the new location order
  from general game knowledge — reconstruct a proposal from the source
  game's split files (which locations exist, what their subarea/
  encountersKey structure is) and have the user confirm or correct the
  order before scaffolding maps, since fixing a wrong order after the fact
  means re-doing map fetches.
- `encountersKey` values (PokeAPI location-area slugs) are safe to copy
  verbatim from an already-onboarded same-region game's location files. A
  single PokeAPI location-area object holds `version_details` for every
  version in the generation, so the slug itself isn't per-version even
  though the encounter contents extracted from it are.
- **After authoring a batch of locations, audit every `encountersKey` in
  use against the actual fetched `ENCOUNTERS` for a "dead key"** — a key
  that resolves to zero encounters in one or both variants. This catches
  two distinct problems in one pass: (1) an exclusion-list correction that
  hollowed out a location entirely, and (2) a location that was always
  going to be legitimately empty for this game family regardless of
  species exclusions. Script it: `grep` every `encountersKey: '...'` out of
  `locations/*.ts`, then for each key check
  `(ENCOUNTERS[key] ?? []).length` in both variants' `encounters.ts`. A key
  dead in a specific game isn't automatically a bug — confirm against
  Bulbapedia whether the content genuinely doesn't exist there before
  assuming it's a fetch/config error. Once confirmed genuinely empty,
  don't leave a pointless `encountersKey` in the `Location` object — match
  the app's existing convention of omitting the field entirely for
  locations with no real wild/gift encounters.
- **Run the audit in both directions: every key in the fetched
  `ENCOUNTERS` must be used by some `encountersKey` in `locations/*.ts`,
  not just every used key must resolve to real data.** A key present in
  `ENCOUNTERS` but referenced by no location is not automatically safe to
  ignore — do not assume it's intentionally-excluded content without
  checking. It means one of two things: (1) a real location the app hasn't
  modeled yet (a genuine miss — go build it, verify its map art and split
  placement against Bulbapedia rather than guessing), or (2) content
  that's genuinely out of scope for this game (a different game's
  exclusive area, a story-state variant that was deliberately collapsed
  away), in which case it belongs in `excludedLocations`/`excludedAreas`
  so it stops being fetched at all, rather than sitting in `ENCOUNTERS`
  unused. Don't default to assuming case (2) without checking — verify
  each specific case against a primary source instead of assuming it's an
  intentional exclusion because that's the more comfortable conclusion.
  Script it the same way as the dead-key audit but inverted: diff the full
  set of top-level keys in `ENCOUNTERS` against the set of `encountersKey`
  values actually in use. Also watch for keys that shift when an
  `excludedAreas` entry changes: if a location only has one PokeAPI area
  left after exclusion, the fetch script's single-area fallback renames
  the key to the bare location slug instead of the area slug — re-run this
  audit after any `excludedAreas` edit, not just after `excludedSpecies`
  edits.
- **Don't assume where a given encounter (especially the starter handoff)
  happens is the same across games in a family — verify against PokeAPI
  directly, and don't fall back to `manualEncounters` just because the
  first location you guess comes up empty.** Query
  `https://pokeapi.co/api/v2/location-area/<slug>/` directly for the
  specific version and check whether the encounter is actually tagged
  there before assuming a `methodOverride` needs to point elsewhere — a
  real in-game location difference between sibling games is a legitimate
  reason for the correct handoff location to differ, and PokeAPI usually
  does have the data if you query the right slug. Reach for
  `manualEncounters` only once you've confirmed PokeAPI has no data for
  that species at _any_ plausible location.
- **PokeAPI doesn't model real per-version exclusivity for anything gated
  behind trading between cartridges** (most notably version-exclusive
  fossils/starters) — it will tag both sibling versions as having access
  even when in the actual games only one is directly obtainable per
  cartridge and the other requires trading. Cross-check each species at a
  fossil/gift/trade location against Bulbapedia's own availability table
  rather than trusting PokeAPI's location-level tagging alone, since a
  location having _any_ data for a version doesn't mean every species
  there is genuinely available without external trading.
- **Fetching real map images for a variant** (art that's specific to this
  variant group rather than shared with a different generation's game on
  the same map): check the source wiki's location page for a per-game
  layout/gallery section listing version-tagged image files versus a
  single shared file when the art is identical across the whole
  generation — verify this per-location, it varies. Don't rely on a
  webpage-summarization tool to enumerate these filenames — it has been
  observed to both miss real per-version files and mislabel shared assets
  as version-exclusive; pull the raw wikitext directly and grep it
  instead. Watch for a layout section that appears to end early because a
  subsection heading immediately underneath it matches the same end-of-
  section pattern your grep is using — if the extracted section looks
  suspiciously short, re-run without the range restriction to catch
  content past a subsection heading. Once you have the exact filename,
  most wikis support a direct file-path redirect for downloading without
  needing an archive/hash lookup.
- If an existing game's app data splits one physical map into multiple
  subarea images but the source art for the new game/variant only has a
  single combined image, crop it yourself (the project already depends on
  `sharp`, so a small Node script — run from the project root, not a
  scratch dir, so `require('sharp')` resolves against `node_modules` — can
  extract the region). **Do not assume the combined image is a symmetric
  50/50 top/bottom or left/right split** — composite map images are
  frequently asymmetric (an L-shape, or unequal, non-mirrored regions with
  transparent padding filling the rest), and guessing half-dimensions can
  silently crop out real content that happens to look plausible at a
  glance because tile art repeats heavily. Instead, measure the actual
  boundary: read the raw pixel buffer and, for each row/column, count
  opaque pixels split across the image's two halves; the point where one
  half's count drops to zero is the true edge, not the image's geometric
  midpoint. A library's built-in "trim to content" helper is often
  unreliable for this kind of composite, since it typically references a
  single background/corner color and silently no-ops whenever that corner
  happens to be part of the actual content rather than padding. Cross-check
  the crop's final dimensions against a reference game's already-split
  file dimensions (won't match exactly, since these are separately-sourced
  images, but should be close) before trusting the result, and always view
  the cropped output image directly rather than assuming a correct
  bounding-box computation produced a correct visual result.
- **Never rescale a map image to match another game's version of the same
  map — this is the "games are independent" rule applying to image
  resolution too, and getting it backwards causes a real, confusing bug.**
  Map markers are sized as a fixed pixel constant divided by the map
  image's own intrinsic width/height, so scaling a map down/up to match a
  _different game's_ asset resolution is exactly as wrong as copying that
  game's save-condition numbers: this codebase's own maps (for the game
  actually being worked on) are the only valid resolution reference. Before
  concluding a newly-cropped or newly-sourced image's resolution is "too
  high" or otherwise wrong, check its dimensions against _sibling maps in
  the same game's own map folder_ — large native resolutions (well into
  four figures on one axis) are normal in this codebase and not by
  themselves evidence of a problem. Only resize if there's actual evidence
  the specific source asset is anomalous (e.g. unusually different DPI
  metadata than every other file from the same source), not just because
  it looks big or because a differently-sourced reference image (from
  another game) happens to be smaller. When in doubt, don't rescale at
  all — crop only, at native resolution, and let the marker math work
  the same way it does for every other map in the folder.
