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
   the exclusion/override/merge config — see an existing game's file for
   the full shape and inline rationale for each field), and register it in
   `src/lib/scripts/pokeapi/game-versions/index.ts`'s `GAME_VERSIONS` array.
3. **Fetch + author encounters** — run `npm run pokeapi:encounters <slug>`,
   where `<slug>` is the `GameVersion.id` registered in step 2. Every
   codegen/fetch script (`pokeapi:encounters`, `pokeapi:pokemon`,
   `gen:location`, `gen:battle`, `gen:trainer-class`, `compose`) takes the
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
   trainer data (team, AI flags, save condition) is then hand-authored in
   `battles.ts`, keyed by the generated `battleKey`.
    - **Do this in two passes, not one. Pass 1: battle + marker data for
      every battle in the game. Pass 2 (only after pass 1 is fully done):
      derive every `saveCondition`.** Don't interleave them battle-by-
      battle, and don't put a real `saveCondition` value in during pass 1
      for _any_ battle — not even a generic trainer whose `saveCondition`
      follows an already-known, mechanical ID-to-flag formula. Pass 1 is
      about team/marker data only; computing and inserting a real flag
      value, even a trivial one-line formula application, is pass-2 work
      and stays out of pass 1 with no exceptions. Every battle gets the
      same obviously-fake placeholder in pass 1, e.g.
      `{ type: 'flag', flag: -1 }` — never a placeholder that could pass as
      a real, plausible-looking value. Track the pass-2 backlog in one
      place (e.g. a task) rather than a `// TODO` comment on every single
      battle — grepping the placeholder value itself finds them all when
      pass 2 starts, so a comment repeating that on every entry is just
      noise; reserve inline comments for substantive derivation notes (what
      external source a battle's data came from, what's already been ruled
      out, why it's hard), not a restatement of "this needs deriving." Once
      pass 1 is complete for the whole game (or the whole batch of
      locations being worked through), do pass 2 as its own dedicated
      effort: grep every placeholder and derive them one at a time — that's
      the point at which a mechanical formula gets applied too, same as any
      other derivation.
    - **When an external trainer data source is involved (keyed by some
      internal trainer ID), battle population is a location-by-location,
      collaborative loop — not something to run solo end-to-end.** The
      workflow: the user supplies, per location, the trainer names present
      there (in order), each one's IVs, and each one's `BattleMetadata`.
      Map those names to the matching entries in the external data source
      (team, ability, nature, moves, AI flags) and use that to populate
      `battles.ts` (merging in the user-supplied IVs/metadata), computing
      any mechanical ID-to-save-flag formula that applies (see "Deriving
      save-condition mechanics" below). Then wire the resulting
      `battleKey`s into that location's `battles: []` array in the order
      the user gave the names, with `x: 0, y: 0` placeholders.
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
    - **IVs must always be derived from that game's own primary source data
      (its decomp or equivalent reference), never asked of or guessed by
      the user by default.** Back-solving from a data source's raw computed
      stats (the standard stat formula) is unreliable on its own — it's
      often ambiguous at low levels, where multiple IVs round to the same
      displayed stat — so don't rely on that method alone; use it only as a
      cross-check against a direct source. For Gen 4 games, the direct
      source and derivation formula are documented in the
      `gen4-trainer-data-extraction` skill (which reads the real IV
      straight out of the decomp's trainer data, not back-solved). If a
      target game has no such derivation path documented yet, that's a gap
      to fill (research and document the mechanism, the same way Gen 4's
      was derived) rather than a reason to fall back to asking the user.
    - **Save-condition mechanics are equally subject to the
      "games are independent" rule above** — never template a save
      condition's shape or values off another already-implemented game,
      even one in the same generation, even when the concept (a badge, a
      rival battle) is identical. See "Deriving save-condition mechanics
      from a ROM decompilation" below.
6. **New trainer classes** — if a battle references a trainer class not
   already in `src/lib/data/trainer-classes.ts`, add it with
   `npm run gen:trainer-class <slug> <classSlug> <displayName> <male|female> [spriteSlug]`
   (requires a sprite already at `public/<slug>/trainers/<classSlug>.png`).
7. **Author `splits/*.ts` and `met-locations.ts`** by hand — these have no
   generator, since they encode judgment calls (gym order, exact met-index
   table) rather than mechanical scaffolding. For `met-locations.ts`, don't
   transcribe Bulbapedia's full index table verbatim — cross-check against
   an already-onboarded same-region game's file first and match its
   _subset_ of included indices. Existing games intentionally omit indices
   for locations that never come up as a met-location for this app's
   purposes (event-only/static-encounter spots); including the full
   academic list adds entries that don't reflect real usage.
8. **Assemble the `Game`** in `<slug>.ts` (name, logo, generation, `version`
   = PokeAPI version-group slug, starters, accentColor, encounters,
   battles, metLocationById, wipeMessages, splits), add
   `public/logos/<slug>.png`, and add the game to the `GAMES` array in
   `src/lib/data/games.ts`.

## Deriving save-condition mechanics from a ROM decompilation

When a `saveCondition` isn't a simple, already-established pattern (e.g. a
generic trainer's defeat flag computed from some ID via a known formula, or
a straightforward badge bitmask), and a real decompilation of that game's
ROM is available, derive the mechanism from the decomp rather than asking
the user to supply it, leaving a placeholder, or reusing another game's
value — even one from the same console generation, even when it turns out
to match after independent verification. Don't repeat the derivation
process below in your head as a template with someone else's game's numbers
already filled in; walk it fresh, from that game's own source, every time.

General method (worked out once, in full, against a real Gen 4 ROM decomp —
generalize the _technique_, not any specific opcode number, file path, or
derived constant, none of which are project-agnostic):

1. **Find the relevant map's compiled script file.** Decompiled games
   typically have a per-map header table (in a global map-data source file)
   listing, among other things, which compiled script asset belongs to that
   map. Locate the map by its symbolic constant/name and read that field.
2. **Build an opcode table from the decompiled script-command source.**
   These VMs typically dispatch a fixed-width opcode into a table of
   named command-handler functions; the source often documents each
   function's real opcode in a comment or encodes it directly in an
   "unknown" function's name. Don't trust a single comment in isolation —
   these have been observed to be wrong/inconsistent for some commands;
   corroborate against the command's actual behavior when the result looks
   implausible. Make sure you've captured _every_ source file containing
   command definitions, not just the most obviously-named one, and account
   for signature variations (e.g. a type name written two different ways)
   when pattern-matching function signatures — an incomplete file list or a
   too-strict pattern is the most common cause of disassembly desyncing
   partway through a script.
3. **Build an argument-size table** by parsing each command handler's body
   for its sequence of "read N bytes from the script stream" calls, in
   source order. Confirm from the VM's core dispatch loop how the opcode
   itself is read (width, and whether it precedes or follows any other
   fixed header) before trusting any per-command argument-size table built
   on top of it.
4. **Don't trust manual hex-dump transcription for byte offsets.** Read the
   binary programmatically and compute offsets in code; a value copied by
   eye from a rendered hex dump is an easy place to introduce an
   off-by-a-lot error (e.g. transposing a hex string with a decimal number)
   that can still coincidentally produce plausible-looking output. Prefer
   searching for unambiguous ground-truth anchors — e.g. a known ID
   constant (trainer ID, item ID, etc.) that must appear as a literal byte
   sequence near the command that uses it — over walking blind from the
   start of a file, since an anchor lets you verify you're looking at the
   right region before trusting anything decoded around it.
5. **Once positioned, do a full, gap-free sequential disassembly** from the
   real anchor through to wherever the save-condition write happens, rather
   than scanning the whole file for an opcode and picking whichever
   occurrence looks closest by proximity. Proximity-based matches can be
   wrong: a similar-looking write may belong to a _different_ outcome
   branch (e.g. a loss/blackout path instead of a win path) that happens to
   sit near the one you actually want. Trace the real conditional branch
   (typically a comparison against a "did this succeed" result, followed by
   a conditional jump) to determine which branch is the one you care about
   — dialogue/name-lookup calls immediately following a branch are often a
   good tell for which one is the "success" path — then follow that
   branch's own jumps through to convergence before trusting the write you
   find there.
6. **Don't assume the save-condition write uses the same underlying
   mechanism every time**, even across battles that look conceptually
   identical (e.g. two rival battles, or two gym battles) — one may write a
   save variable, another a save flag/bit, another a dedicated
   purpose-built command (e.g. one for granting a badge). Verify which
   mechanism is actually used for each one individually from its own
   disassembly, and convert any raw ID the command uses into whatever
   indexing scheme the app's save parser expects (check the decomp's own
   constants for the base offset such raw IDs are relative to, and
   sanity-check the conversion against the parser's own save-layout
   derivation rather than assuming a raw ID needs no adjustment).

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
  entry present with real team data, `saveCondition` deferred to pass 2 same
  as always) — "partial" describes skipping the marker-authoring
  conversation, not skipping `battles.ts` content. **Never commit the copied
  `battles: []` markers into a location file before that location's
  `battles.ts` entries exist for every copied `battleKey`** (minus
  `saveCondition`, per the normal pass-1/pass-2 split) — `TrainerMarker`
  unconditionally reads `game.battles[battle.battleKey].trainerClass` with
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
