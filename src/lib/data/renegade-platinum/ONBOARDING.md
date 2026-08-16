# Renegade Platinum onboarding — status &amp; methodology

This is the handoff doc for onboarding Renegade Platinum (a Gen 4 ROM hack
of Pokémon Platinum) into the tracker. Read this in full before doing any
work in this folder — it captures decisions and source details that aren't
recoverable from the code alone. Assume zero prior context otherwise.

**Update this doc whenever a phase completes, a new decision is made, or a
new caveat about the source data is discovered.** This is a long-running,
multi-session effort — treat this file as the source of truth for "what's
done, what's next, what did we decide and why," not the conversation log.

## Source of truth

All data comes from a single Google Sheet the user maintains, documenting
every change Renegade Platinum makes from vanilla Platinum:

- Google Sheet ID: `1G3MNevhLmW1sKYluM4WT9TM1RqrTAi1c4lIdTfeU-Jg`
- Access via the `mcp__claude_ai_Google_Drive__read_file_content` tool using
  this file ID (works — it's the user's own Drive file).
- **The full sheet is too large to read in one call.** A `read_file_content`
  fetch on the whole doc truncates at ~850 lines / ~973KB with no error
  marker — it just silently cuts off mid-tab. Any read of this sheet must
  be scoped (per-tab, or in ranges) and the result checked for truncation
  (compare against expected row counts, e.g. species count for STATS)
  before trusting it as complete.
- Tabs in the sheet (from the hub/"DOCUMENTATION" page's own table of
  contents): **STATS, ENCOUNTERS, TRAiNERS, LEARNSETS,
  EVOLUTION/TYPE/MOVES, iTEM/TMs, GiFTS/EVENTS, NPC/TRADES,
  FAQ/AR/RANDOMiZER**, plus a per-species "...SPLIT" detail card page.
  FAQ/AR/RANDOMiZER is pure support content (update instructions, AR codes,
  randomizer help) — not gameplay data, never needed.
- **The `read_file_content` Drive tool truncates this doc at ~972KB
  regardless of scope — don't use it for this sheet.** Instead, the sheet
  is publicly link-shared, so each tab is fetchable individually and in
  full as CSV via
  `https://docs.google.com/spreadsheets/d/1G3MNevhLmW1sKYluM4WT9TM1RqrTAi1c4lIdTfeU-Jg/export?format=csv&gid=<gid>`
  (plain `curl`/`WebFetch` — no auth needed). This avoids the truncation
  problem entirely since each tab exports on its own. Known tab gids
  (extracted once from the sheet's edit-page HTML, don't need
  re-deriving):
    ```
    647134330  HOMEPAGE (hub/TOC)
    1585554208 STATS
    515626425  ENCOUNTERS
    719434186  TRAiNERS
    218384597  LEARNSETS
    2098433376 EVOLUTiON/TYPE/MOVES
    1939055360 iTEMS/TMs
    1306355674 GiFTS/EVENTS
    1801496803 NPC/TRADES
    494941063  ROARK SPLiT
    2133932114 GARDENiA SPLiT
    1478670349 FANTINA SPLiT
    1876470000 MAYLENE SPLiT
    923574271  WAKE SPLiT
    1150638673 BYRON SPLiT
    1156092808 CANDICE SPLiT
    1919549891 VOLKNER SPLiT
    1044796639 CHAMPiON SPLiT
    1025278191 POST GAME
    2029759237 REMATCHES
    721785423  FAQ/AR/RANDOMiZER
    1945634483 WIP Pokedex
    ```
    If the sheet is ever reorganized (tabs added/renamed), re-derive by
    fetching the `/edit` URL's HTML and regexing for
    `\d+,0,"(\d{6,})",\[\{"1":\[\[0,0,"([^"]*)"` (name/gid pairs embedded in
    the page's bootstrap JS).

## Decisions made (don't re-litigate these)

- **This hack ships three parallel stat/typing/ability "versions" per
  species — ORIGINAL / CLASSIC / COMPLETE.** The user has confirmed: **use
  the COMPLETE version** for everything (stats, typing, abilities/hidden
  ability). Ignore ORIGINAL and CLASSIC columns entirely once this is
  confirmed reachable per-tab.
- **Enemy trainer IVs are NOT uniformly 31.** The user's original claim
  ("all IVs are 31") was contradicted by a real sample row (Rival Barry's
  Turtwig showed 30 IV) and the user has since corrected this: **trust the
  sheet's per-trainer IV cell, not a fixed assumption.** Read the IV value
  for every mon individually from the TRAiNERS tab; never hardcode 31.
- **Pokémon sprites are confirmed identical to vanilla Platinum (per
  explicit user direction, not independently diffed — no new
  `public/pokemon/renegade-platinum/` folder needed), and are now resolved
  the same zero-duplication way badge/trainer sprites are** (a shared-folder
  `Game` field, not per-entity stored data). This required a small,
  deliberate app-level change (not RP-scoped) — done and merged into the
  working tree already:
    - Added `Game.pokemonAssetFolder?: GameVersionGroup`
      (`src/lib/static/types.ts`, alongside `badgeAssetFolder`/
      `trainerAssetFolder`) — optional, only set by a game whose own
      dataset carries no real per-species sprite paths.
    - `PokemonHelpers.getPokemonSprite` (`src/lib/utils/PokemonHelpers.ts`)
      now checks whether the species' `sprites` record is entirely empty;
      if so it computes `/pokemon/${variant}/${slug}.png` formulaically
      instead of doing a `Record` lookup. Existing games are unaffected —
      their `sprites` records are always non-empty (real PokeAPI-fetched
      data), so they still hit the original per-key/first-value lookup
      path.
    - The 6 root call sites that build the sprite `variant` value from
      `game.version` (`StarterSelectModal.tsx`, `PokedexSubtab.tsx`,
      `BoxTab.tsx`, `SplitTab.tsx`, `HallOfFameTab.tsx`, `HofPage.tsx`) now
      use `game.pokemonAssetFolder ?? game.version` instead — every other
      `game.version` reference in the app (learnset/moveset lookups) was
      deliberately left untouched, since those must keep resolving RP's
      own dataset, not Platinum's.
    - `RENEGADE_PLATINUM.pokemonAssetFolder` is set to
      `GameVersionGroup.Platinum` in `renegade-platinum.ts`.
      **Net effect: Phase 1 never needs to write a `sprites` field into any
      `RENEGADE_PLATINUM_POKEMON` entry at all** — leave it `{}` (or omit
      populating it) and sprite resolution just works, same as badges/trainers
      needing zero per-entity asset data.
- **No standalone full moves or abilities database exists in the sheet.**
  EVOLUTION/TYPE/MOVES only lists a changelog of moves that changed
  (power/PP deltas, old→new), not a complete move table. This means
  `RENEGADE_PLATINUM_MOVES` (and likely ability data) has to be assembled
  as **vanilla Platinum's own data + this changelog's deltas layered on
  top** — not pulled wholesale from one sheet tab. Same logic likely
  applies to any Pokémon/move/item not explicitly mentioned as changed:
  assume unchanged-from-vanilla unless the sheet says otherwise, but this
  assumption should be spot-checked once real tab data is in hand, not
  treated as certain yet.
- **Gym order appears changed from vanilla Platinum, but is NOT yet
  confirmed** — the TRAiNERS tab's SPLIT section order (by level cap) reads
  as: ROARK (16) → GARDENIA (26) → FANTINA (33) → MAYLENE (39) → WAKE (44)
  → BYRON (53) → CANDICE (56) → VOLKNER (62) → CHAMPION (78) → POST GAME
  (89) → REMATCHES. Notably Fantina is 3rd here vs. 5th in vanilla
  Platinum. **Do not treat this as confirmed** — it was inferred from a
  truncated read of the TRAiNERS tab's section headers only, not verified
  against a complete tab read. Re-confirm with a full TRAiNERS tab pull
  before authoring `splits/*.ts` order.

## Architecture: override/patch layer (not an independent dataset)

**Pivoted away from "RP is a fully independent Pokémon/move dataset."**
The user wants the app to be able to show _what Renegade Platinum changed
from vanilla_, and confirmed most species/moves are untouched — so the
right model is vanilla data patched by a sparse diff, not a full copy.
**This is explicitly meant to be reused by future ROM-hack games, not a
one-off for RP** — the mechanism lives in shared code
(`src/lib/static/types.ts`, `src/lib/utils/DataOverrideHelpers.ts`), not
anything RP-specific.

- **New shared type**: `DataOverrides<T> = Record<string, Partial<T>>`
  (`types.ts`) — a sparse, field-level patch keyed by slug. A slug absent
  from the table is unchanged from base; a slug present only carries the
  fields that actually differ.
- **`GameDataSource` gained an optional `overrides?: { pokemon?:
DataOverrides<PokemonData>; moves?: DataOverrides<MoveData> }` field.**
  `pokemon`/`moves` on `GameDataSource` still hold the fully _merged_
  result (every existing helper/component keeps working unchanged);
  `overrides` is the same patch data kept around unmerged, purely so a
  future "what did this game change" UI feature can read it directly — the
  override's own presence/keys are the diff, no separate diff-computation
  needed.
- **`DataOverrideHelpers.applyOverrides<T>(base, overrides)`**
  (`src/lib/utils/DataOverrideHelpers.ts`) does the merge: shallow
  per-field replacement (a field present in an override entry fully
  replaces base's value — no deep-merging nested arrays), matching entries
  by slug, unmatched base entries pass through untouched.
- **Renegade Platinum's `pokemon.ts`/`moves.ts`** now import vanilla
  Platinum's `POKEMON`/`MOVES`, import a sparse overrides JSON
  (`raw/pokemon-overrides.json`, `raw/moves-overrides.json` — currently
  both `{}`, not yet authored), and export the merged result via
  `DataOverrideHelpers.applyOverrides`. They also export the raw
  `POKEMON_OVERRIDES`/`MOVE_OVERRIDES` tables themselves, which
  `data-sources.ts` wires into `RENEGADE_PLATINUM_DATA_SOURCE.overrides`.
- **Items are NOT overridden** — confirmed unchanged from vanilla
  Platinum, so `RENEGADE_PLATINUM_DATA_SOURCE.items` just reuses vanilla
  `ITEMS` directly. `renegade-platinum/items.ts` and
  `raw/items.json` were deleted — no per-RP items file at all anymore.
- **Encounters and battles are explicitly OUT of scope for this
  mechanism** — per the user, these are "completely different," not a
  sparse diff, so `encounters.ts`/`battles.ts` stay fully independent
  datasets authored from scratch (unchanged from the original plan).
- **Scope of what actually gets overridden, per the user's exact
  breakdown** (guides how sparse each override table ends up):
    - Pokémon **stats**: many species changed (sparse)
    - Pokémon **types**: some species changed (sparse)
    - Pokémon **learnset**: **every** species changed — every species gets
      an override entry for this field specifically, even ones with no
      other changes (so the overrides table won't be sparse _across
      species_, only sparse _across fields within_ each species' entry)
    - Pokémon **abilities**: many species changed (sparse)
    - Pokémon **evolution method**: some species changed (sparse)
    - **Moves**: some changed (sparse)
    - **Items**: unchanged, no override table at all
- Once Phase 1/2 data entry actually starts: only include a field in a
  species'/move's override entry when it's genuinely different from
  vanilla — for learnset specifically, that means diffing the sheet's
  transcribed moveset against vanilla Platinum's own learnset and omitting
  the field on the rare case they happen to match, so the table stays an
  honest diff signal rather than being populated unconditionally.
- **A "what changed" UI feature (diff badge/panel) is real, wanted future
  work, not yet built** — the data layer above makes it possible (read via
  `dataSource.overrides`), but no component reads that field yet. Treat as
  its own phase once enough override data exists to make it worth
  building.
- **Once this pattern has been validated end-to-end on Renegade Platinum,
  it should be written up in the `onboard-new-game` skill** as a
  documented alternative to the "fully independent dataset" flow for
  ROM-hack games — per that skill's own rule, don't add game-specific
  facts to it, only the generalizable mechanism (the `DataOverrides<T>` /
  `applyOverrides` / `GameDataSource.overrides` pattern itself, and when to
  reach for it vs. a fully independent dataset vs. encounters/battles-style
  full replacement).

## Phase plan &amp; status

| Phase | Scope                                                                                                                                              | Status                                                                                                                                                                                                                                                                                                     |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Spreadsheet recon (structure/tabs/shape only)                                                                                                      | ✅ Done — see above                                                                                                                                                                                                                                                                                        |
| 0.5   | Override/patch architecture (shared type + helper + wiring)                                                                                        | ✅ Done — see "Architecture" section above                                                                                                                                                                                                                                                                 |
| 1     | `pokemon.ts` overrides — sparse stats/types/abilities/evolution diffs + dense per-species learnset                                                 | ✅ **DONE — full national dex (505 species+form entries) complete as of 2026-08-16.** See notes below for methodology/gotchas if extending or auditing this data.                                                                                                                                          |
| 2     | `moves.ts` overrides — Gen4-vs-USUM value diffs + backported/removed moves                                                                         | ✅ **DONE** — 129 overrides + 11 removals, verified end-to-end. See notes below.                                                                                                                                                                                                                           |
| 3     | ~~`items.ts`~~ — N/A, items unchanged, no override table                                                                                           | ✅ Done (nothing to author)                                                                                                                                                                                                                                                                                |
| 4     | `encounters.ts` — wild encounter tables, fully independent dataset (must land before locations exist — see onboard-new-game skill sequencing note) | Not started                                                                                                                                                                                                                                                                                                |
| 5     | `locations/*.ts` + `maps/*.png`                                                                                                                    | Not started — open question: does this hack reuse Platinum's map layouts, or change/add areas? Ask user before assuming reuse.                                                                                                                                                                             |
| 6     | `battles.ts` — trainer rosters from TRAiNERS tab, per-mon real IVs, fully independent dataset                                                      | Not started                                                                                                                                                                                                                                                                                                |
| 7     | New trainer classes (if any surface in TRAiNERS data not already in `trainer-classes.ts`)                                                          | Not started                                                                                                                                                                                                                                                                                                |
| 8     | `splits/*.ts` + save-condition derivation (badge bit indices)                                                                                      | Not started — gym order needs reconfirmation (see above); badge-bit source for save-condition detection is still unresolved (this hack isn't necessarily on a public decomp — the `gen4-trainer-data-extraction` skill's methodology may not directly apply; needs its own investigation once we get here) |
| 9     | Final assembly in `renegade-platinum.ts`, drop placeholder TODO comment                                                                            | Not started                                                                                                                                                                                                                                                                                                |
| 10    | "What changed" diff UI (reads `dataSource.overrides`) — new feature, not part of original onboarding scope                                         | Not started, not yet scoped in detail                                                                                                                                                                                                                                                                      |

Working piece-by-piece per the user's explicit request — do not batch
multiple phases into one pass without checking in between.

## Phase 1 notes: STATS/LEARNSETS extraction methodology (from bulbasaur/ivysaur/venusaur)

- **The STATS tab's CSV export has ambiguous column boundaries around the
  ABILITIES section — don't trust naive CSV column-counting there.**
  Merged header cells collapse in a way that makes it look like there are
  3 sub-columns per version (Ability I / Ability II / Hidden) when the
  real layout is 2 per version (Ability I / Ability II), and the visual
  merge shifts which raw CSV cell holds which value. **Use the gviz JSON
  endpoint instead of CSV when a tab's column mapping is unclear**:
  `https://docs.google.com/spreadsheets/d/<id>/gviz/tq?gid=<gid>&tqx=out:json`
  — its `table.cols[].label` field concatenates every merged header row
  for that column into one string, which disambiguates instantly (confirmed
  Complete-version Ability I = column index 43 (0-based), Ability II = 44,
  by reading concatenated labels like `"ABILITIES ORIGINAL VERSION Ability
I"`). The CSV endpoint stays useful for bulk data rows once you know the
  real column indices; reach for gviz specifically to resolve a header
  ambiguity, not as a full replacement.
- **Renegade Platinum has NO hidden-ability mechanic at all — this is a
  Gen 4 game, and Hidden Abilities weren't introduced until Gen 5.** An
  earlier pass got this wrong: it read the STATS tab's "Ability I / Ability
  II" pair as slot1+hidden and diffed it against vanilla's _Gen 5+_
  `hidden` entry in `src/lib/data/raw/pokemon.json`, concluding
  Bulbasaur/Ivysaur were unchanged (since that Gen 5+ entry already listed
  Chlorophyll as their hidden ability) and only Venusaur needed an
  override. **That comparison was against the wrong vanilla baseline.**
  Vanilla Gen 4 Platinum only ever gives these three species ONE ability
  (`slot1: overgrow`, no `slot2`) — the correct comparison baseline is
  vanilla's Gen 1-4-appropriate entry, not its Gen 5+ hidden-ability
  entry, since this hack never adds a hidden ability, it adds a real
  second selectable ability slot. **Corrected:** all three species get a
  real `abilities` override — `{ slot1: 'chlorophyll', slot2: 'overgrow'
}` for Bulbasaur/Ivysaur, `{ slot1: 'thick-fat', slot2: 'overgrow' }`
  for Venusaur. **Never write a `hidden` field into an RP abilities
  override — always `slot1`/`slot2`, and always diff against vanilla's
  Gen ≤4 entry, never its Gen 5+ one.** More generally: when diffing any
  field against vanilla to decide whether it needs an override, diff
  against the vanilla value _as of this game's own generation_ (use
  `GenerationHelpers.resolveGeneration`-equivalent reasoning — the entry
  that would actually resolve for `generation: 4`), not just "does any
  entry in vanilla's array already contain this value somewhere."
- **Learnset is the one field that does NOT get this diff treatment** —
  per the user's explicit "all Pokémon have learnset changes," every
  species gets a `learnset` override entry unconditionally, sourced
  directly from the LEARNSETS tab (level-up + TMs/HMs + tutor sections,
  see the tab's row layout: rows 2-23 level-up, 24-88 TMs/HMs, 89-110
  tutor, 0-indexed within the parsed CSV). No vanilla-equality check is
  done for this field. Move names from the sheet map to this app's move
  slugs by simple kebab-casing (verified against
  `src/lib/data/raw/moves.json` for every move used in the first 3
  species — direct lowercase-and-hyphenate, no aliasing/renaming needed
  so far; keep verifying per-move as new ones show up rather than
  assuming this always holds).
- **The override's `learnset`/`stats`/`abilities`/`types` arrays are
  always written as a single-entry array with `fromGeneration: 4` (or
  `versionGroup: 'renegade-platinum'` for learnset)** — RP doesn't carry
  its own multi-generation history, so there's no reason to preserve
  vanilla's older `fromGeneration` entries for an overridden field; the
  override fully replaces the array (`DataOverrideHelpers.applyOverrides`
  does a shallow top-level-field replace, not a deep/append merge), and
  `GenerationHelpers.resolveGeneration`/the `versionGroup` exact-match in
  `PokemonHelpers.getPokemonLearnset` both resolve a single
  gen-4/renegade-platinum entry correctly since every RP lookup passes
  `game.generation = 4` / `game.version = 'renegade-platinum'`.
- Verified end-to-end (after the abilities correction above): ran the real
  `applyOverrides` logic against the actual vanilla `pokemon.json` + the
  authored `pokemon-overrides.json` and confirmed final merged abilities
  are `{slot1: chlorophyll, slot2: overgrow}` for bulbasaur/ivysaur and
  `{slot1: thick-fat, slot2: overgrow}` for venusaur (no `hidden` field
  anywhere), stats/types inherited from vanilla untouched for
  bulbasaur/ivysaur, venusaur's stats overridden, and all three carry
  their own 50/51/61-move RP learnset. `tsc --noEmit` and `eslint` both
  clean after authoring.
- **Species #4-6 (charmander/charmeleon/charizard) confirmed the same
  "vanilla Gen 4 only ever has one ability slot" pattern holds broadly, not
  just for the Gen 1 starters** — Charmander/Charmeleon both get a real
  `abilities` override (`{slot1: 'solar-power', slot2: 'blaze'}`), same
  shape as Bulbasaur/Ivysaur's fix.
- **Charizard is the first species so far with a genuine stat AND type
  change on top of the ability change** — Complete-version SpA is 110 vs
  vanilla's Gen-4-resolved 109 (vanilla's `fromGeneration: 2` stats entry,
  not its `fromGeneration: 1` entry — **always resolve vanilla's baseline
  the same way `GenerationHelpers.resolveGeneration` would for
  `generation: 4`, i.e. the latest entry with `fromGeneration <= 4`, not
  just the first entry in the array**, or a stat that was already revised
  between Gen 1 and Gen 2 will look like a false-positive RP change).
  Charizard's Complete-version secondary type is also swapped from Flying
  to Dragon (`types: [{fromGeneration: 4, types: ['fire', 'dragon']}]`) and
  ability is Levitate/Blaze instead of the Solar Power/Blaze pattern its
  pre-evolutions get — every field genuinely diverges per species, don't
  assume a whole evolution line shares the same override shape.
- **The STATS tab's raw text can contain literal stray Unicode artifacts**
  (Charizard's Complete Type II cell was `"DRAGON ឵"` — a combining
  character glued onto the real value) — always sanity-check an unusual-
  looking cell value before writing it verbatim into an override; strip to
  the real value (`dragon`).
- **The gviz JSON endpoint's `cols[].label` header text can be off by one
  column from where the actual row data lives, for some sections but not
  others** (confirmed: TYPE section data is one column to the right of
  where its own header labels claim; ABILITIES section data lines up
  exactly with its labels). Cross-checking a header-labeled column against
  a row already known to have a distinctive value (e.g. Bulbasaur's known
  Grass/Poison typing) before trusting a new column mapping is worth doing
  every time a new section is read for the first time, not just once.
- **A double annotation `(!!)` (vs. the single `(!)` seen so far) shows up
  on some learnset entries** (e.g. Charmander/Charmeleon's `TM59 Dragon
Pulse (!!)` appended after the normal numeric TM order, Charizard's
  `TM88 Hurricane (!!)` and tutor `Draco Meteor (!!) COM`) — treated the
  same as any other learnset entry (just strip the annotation and any
  trailing version tag like `COM`), no special handling needed since
  learnset is unconditionally overridden regardless of annotation anyway.
  Kept for awareness in case `(!!)` turns out to matter for a
  non-learnset field later.

## Phase 1 workflow calibration (user-confirmed, 2026-08-16)

- **No shortcut rule exists for stats/types — keep diffing every species
  individually against vanilla's Gen-4-resolved baseline.** Explicitly
  asked and confirmed: unlike abilities/learnset, there's no "usually
  changed" or "usually unchanged" heuristic to lean on for these two
  fields. Don't skip the vanilla cross-check for stats/types even after
  seeing a run of unchanged species.
- **`catchRate` is also in scope for diffing, starting with the batch
  after dex #51 (added 2026-08-16, per user request) — do NOT backfill
  dex #1-51, they were confirmed done before this field was added.**
  Confirmed rarer than stats/abilities changes, but real when it happens —
  diff the sheet's `CATCH RATE` column (Complete version) against
  vanilla's `catchRate` the same way as any other field, and include it in
  the per-batch diff summary when it differs.
- **`wildHeldItems` is also in scope for diffing, starting with the batch
  after dex #151 (added 2026-08-16, per user request) — do NOT backfill
  dex #1-151, they were confirmed done before this field was added.**
  Diff the sheet's STATS-tab `ITEM HELDS` / `Item Helds 1` / `Item Helds
2` columns (Complete version) against vanilla's `PokemonData.wildHeldItems`
  (an item-slug array, absent for most species). Was blank for every
  species checked in dex #1-151 (no evidence yet either way on whether
  this hack changes it), so there's no established pattern for how
  common/rare a real change here is — treat it like stats/types, not like
  the "usually unchanged" abilities/learnset fields, until real data says
  otherwise. See `PokemonHelpers`/`EncounterRow.tsx` for how this field is
  actually consumed (only matters for Grass/Surf/Cave/Rod/Walking/Honey-
  Tree/Binoculars/Feebas-Tile encounter methods — eggs, gifts, starters,
  static encounters, fossils, and trades never roll for it) if it's ever
  useful to double-check a suspicious value against how/where it'd
  actually surface in-game.
- **Batch size is 20 species per pass** (bumped up from 3 once the
  process was verified end-to-end) — the per-batch round-trip overhead
  was the main cost once the sheet's column-mapping ambiguities were
  resolved, not correctness risk.
- **At the end of every batch, summarize the non-learnset diffs found**
  (stats/types/abilities/evolution changes) back to the user — learnset is
  excluded from this summary since it's unconditionally overridden for
  every species and isn't informative to call out per-batch.
- **STATS and LEARNSETS tabs are confirmed fully populated for the whole
  dex** (not just early species) — safe to pull full-tab data once and
  slice out whatever species range is needed per batch, rather than
  re-fetching per batch.
- **"Run a batch" means run it end-to-end in one pass — extraction, vanilla
  diffing, JSON authoring, merge into the real `pokemon-overrides.json`,
  `tsc`/merge verification, AND the diff summary — not a step the user
  needs to separately say "continue" through.** The only reason to stop
  mid-batch is a genuine data anomaly (a value that looks wrong/
  inconsistent, like the Weedle case below) — never stop just to report
  routine progress. (Mid-batch pauses seen in this session's history were
  forced by an external usage-limit checkpoint system, not a workflow
  choice — that constraint is outside either party's control and isn't
  something to plan around or apologize for; just resume the batch the
  moment control returns.)
- **A real sheet data error was caught and corrected in batch 2**: Weedle's
  Complete-version Ability II showed "Shed Skin" instead of its own
  vanilla ability "Shield Dust" (Shed Skin belongs to its evolution
  Kakuna, not Weedle) — confirmed with the user as a genuine sheet
  mistake, not a real hack change. **This is exactly the kind of thing
  that justifies stopping a batch mid-way to ask** — an ability value that
  doesn't match the evolution line's own established "kept" ability
  (compare against the species' sibling/pre-evolution in the same batch,
  not just vanilla) is a red flag worth a second look before writing it in.
- **Batch 2 confirmed a second-slot ability value is NOT automatic
  evidence of a change** — Pidgey/Pidgeotto/Pidgeot and Ekans/Arbok both
  show two abilities in the sheet's Complete columns with **no `(!)`
  marker on either**, and both turned out to exactly match vanilla's own
  already-dual ability set (Pidgey line has had Keen Eye/Tangled Feet
  since Gen 4 itself, not just Gen 5+; Ekans line has had Intimidate/Shed
  Skin since Gen 1). **Always diff the sheet's slot1+slot2 pair against
  vanilla's own Gen-4-resolved abilities entry, field by field — a `(!)`
  marker is a decent hint but the only real signal is the actual value
  comparison.** **Correction (caught by the user after this note was first
  written):** the actual rule is "does vanilla already have a `slot2` at
  all," not "do the sheet's two values differ." Metapod/Kakuna both show
  the _same_ value in Ability I and Ability II (`Shed Skin`/`Shed Skin`),
  and an earlier pass wrongly treated that as "just visual duplication of
  a single ability, skip it." That was wrong — vanilla Metapod/Kakuna only
  ever have `slot1` (no `slot2` field at all, not even a Gen 5+ hidden
  entry), so the sheet showing a value in _both_ columns means Complete RP
  formally grants a second ability slot, even though it happens to resolve
  to the same move (Shed Skin is their only real ability either way). This
  is a real 1-slot→2-slot structural change and needs an override
  (`{slot1: 'shed-skin', slot2: 'shed-skin'}`), same as any other new
  slot2. **The correct check is always: does vanilla's Gen-4-resolved
  `abilities` entry have a `slot2` key at all? If not, and the sheet's
  Complete row has both Ability I and Ability II populated (regardless of
  whether they're equal), that's a change** — don't shortcut based on
  value equality.

## Batch 3 notes (dex #27-51)

- **A real, dex-wide Fairy-type retrofit is underway** — Clefairy/Clefable,
  Ninetales, and the Jigglypuff line all gain Fairy typing in Complete
  (either becoming pure Fairy or adding it as a second type). Expect this
  pattern to keep appearing for other Gen 1-5 Fairy-eligible species later
  in the dex — don't treat each occurrence as a one-off surprise.
- **Ability slot order can legitimately differ from vanilla's own
  slot1/slot2 assignment even when the same two abilities are involved** —
  Venonat/Venomoth have vanilla `{slot1: compound-eyes/shield-dust, slot2:
tinted-lens}`, but the sheet lists them in the opposite order for
  Complete. Write it exactly as the sheet presents it (don't "correct" the
  order to match vanilla's convention) — this is a case where matching the
  literal source, not the underlying ability _set_, is what the override
  should capture.
- **Correction: Oddish's evolution level does NOT change — an earlier pass
  in this doc wrongly claimed it did and shipped a bad `evolutionLine`
  override (since reverted).** The sheet's Gloom row literally reads
  `"#043 Lv. 22 - Can evolve into #045, #182"`, confirmed byte-identical
  on a fresh re-fetch (ruling out a stale-cache explanation) — but the
  user confirmed directly **this specific cell is simply wrong in the
  sheet itself** (a real authoring error in the user's source document,
  not a misread on this session's part). Resolved, closed, no further
  action — don't re-investigate this specific cell again. **The general
  lesson still stands though**: when a species-level claim about "the
  sheet says X" conflicts with what the user says, trust the user
  immediately and move on rather than re-arguing the cached reading — the
  sheet itself can simply be wrong sometimes (this is the second confirmed
  sheet error found so far, after Weedle's ability in batch 2). No
  `evolutionLine` override needed for Oddish/Gloom/Vileplume — they
  inherit vanilla's evolution methods
  unchanged, same as every other species checked so far this phase.
- **A raw sheet cell can be missing spaces entirely** (`TM85DazzlingGleam(!!)`
  for Ninetales, should read `TM85 Dazzling Gleam (!!)`) — another sheet
  formatting glitch, not a data anomaly worth stopping for; just sanitize
  and move on (matches the earlier Charizard stray-Unicode-character
  precedent — cross-checking odd-looking raw cells before trusting them
  verbatim keeps paying off).
- Used an automated stats/types/abilities diff script (compare sheet's
  Complete values against vanilla's Gen-4-resolved entry) rather than
  manual eyeballing for this batch — much faster and confirmed reliable;
  worth continuing this approach for future batches rather than reverting
  to manual comparison.

## Batch 4 notes (dex #52-76)

- **This hack removes trade-evolutions entirely, replacing them with
  level-up 36** — confirmed for Kadabra→Alakazam, Machoke→Machamp,
  Graveler→Golem (all previously `trigger: 'trade'` in vanilla, all marked
  with `(!)` in the sheet's evolution column and read as `"Lv. 36"`).
  **Expect this pattern for every other remaining trade-evolution species
  later in the dex** (Haunter→Gengar, Kadabra/Machoke/Graveler's family
  already done, Boldore→Gigalith-equivalents, etc., and any trade-with-item
  evolutions like Poliwhirl→Politoed) — check for a `(!)` on the evolution
  cell as the signal, but confirm the actual vanilla trigger was `trade`
  before writing the override (don't assume `(!)` always means "was a
  trade evolution," just that _something_ changed).
- **Ability slot order continuing to differ from vanilla's own convention
  is common, not a one-off** — Meowth/Persian (Technician/Pickup vs
  vanilla's Pickup/Technician) and Abra's whole line (Magic
  Guard/Synchronize replacing Synchronize/Inner Focus, reordered) both hit
  this. Keep writing exactly what the sheet presents, per the Venonat
  precedent in batch 3.
- **First batch with `catchRate` actually in scope — zero changes found.**
  Confirms the "rare" framing was accurate; don't let a clean batch make
  the check feel pointless, still worth keeping in the automated diff
  script going forward since it's now free (same script pass).

## Batch 5 notes (dex #77-151) — Gen 1 complete

- **This hack also lowers several vanilla evolution levels, not just
  removes trade evolutions** — confirmed for Ponyta→Rapidash (40→35),
  Slowpoke→Slowbro (37→33), Grimer→Muk (38→35), Rhyhorn→Rhydon (42→36),
  Omanyte→Omastar and Kabuto→Kabutops (both 40→30), on top of
  Gastly-line's trade→Lv36 (same pattern as batch 4's trade removals). All
  were marked `(!)` in the sheet's evolution cell — **that annotation is a
  reliable signal for evolution changes specifically** (unlike its mixed
  reliability for abilities), but always verify against vanilla's actual
  trigger/level before writing the override, same discipline as every
  other field.
- **Resolved: Mew's TM/HM column read `"ALL"` instead of listing moves**
  (a real in-game trait — Mew learns every TM/HM). Since this app's
  `LearnsetMove` type has no wildcard concept, the user supplied the full
  TM01-TM92 + HM01-HM08 name list directly (this game's real TM/HM
  roster/locations, from the iTEMS/TMs tab) and it's now fully written
  into Mew's `machine`-method moves (100 entries) — no remaining gap.
  **This TM/HM name list is the authoritative roster for the whole game,
  not just Mew** — worth reusing directly (rather than re-deriving TM
  names from each individual species' own learnset rows) whenever a
  species' TM column needs cross-checking, and it's exactly the source
  `iTEM/TMs` tab work (Phase 3 predecessor, item locations) would need
  too. TM/HM number-to-move-name mapping (Complete version, current as of
  2026-08-16):
    ```
    TM01 Focus Punch      TM24 Thunderbolt     TM47 Steel Wing      TM70 Flash
    TM02 Dragon Claw      TM25 Thunder         TM48 Skill Swap      TM71 Stone Edge
    TM03 Water Pulse      TM26 Earthquake      TM49 Snatch          TM72 Avalanche
    TM04 Calm Mind        TM27 Return          TM50 Overheat        TM73 Thunder Wave
    TM05 Roar             TM28 Dig             TM51 Roost           TM74 Gyro Ball
    TM06 Toxic            TM29 Psychic         TM52 Focus Blast     TM75 Swords Dance
    TM07 Hail             TM30 Shadow Ball     TM53 Energy Ball     TM76 Stealth Rock
    TM08 Bulk Up          TM31 Brick Break     TM54 False Swipe     TM77 Psych Up
    TM09 Bullet Seed      TM32 Double Team     TM55 Scald           TM78 Captivate
    TM10 Hidden Power     TM33 Reflect         TM56 Fling           TM79 Dark Pulse
    TM11 Sunny Day        TM34 Shock Wave      TM57 Wild Charge     TM80 Rock Slide
    TM12 Taunt            TM35 Flamethrower    TM58 Endure          TM81 X-Scissor
    TM13 Ice Beam         TM36 Sludge Bomb     TM59 Dragon Pulse    TM82 Sleep Talk
    TM14 Blizzard         TM37 Sandstorm       TM60 Drain Punch     TM83 Hyper Voice
    TM15 Hyper Beam       TM38 Fire Blast      TM61 Will-O-Wisp     TM84 Poison Jab
    TM16 Light Screen     TM39 Rock Tomb       TM62 Bug Buzz        TM85 Dazzling Gleam
    TM17 Protect          TM40 Aerial Ace      TM63 Embargo         TM86 Grass Knot
    TM18 Rain Dance       TM41 Torment         TM64 Explosion       TM87 Swagger
    TM19 Giga Drain       TM42 Facade          TM65 Shadow Claw     TM88 Hurricane
    TM20 Safeguard        TM43 Secret Power    TM66 Payback         TM89 U-turn
    TM21 Frustration      TM44 Rest            TM67 Recycle         TM90 Substitute
    TM22 Solar Beam       TM45 Attract         TM68 Giga Impact     TM91 Flash Cannon
    TM23 Iron Tail        TM46 Thief           TM69 Rock Polish     TM92 Trick Room

    HM01 Cut    HM02 Fly    HM03 Surf       HM04 Strength
    HM05 Defog  HM06 Rock Smash  HM07 Waterfall  HM08 Rock Climb
    ```
- **A batch-wide automated diff script (stats/types/abilities/catchRate
  vs. vanilla's Gen-4-resolved values, all four in one pass) is now the
  standard approach** — much faster than per-species manual comparison for
  a 75-species batch, and reliable as long as ability-name→slug conversion
  bugs are caught (see below). Recommend continuing this for all future
  batches rather than manual review.
- **A slug-conversion bug can produce a false-positive diff, not just a
  missing-slug error** — `"Lightningrod"` (sheet's one-word style, no
  hyphen) initially slugged to `lightningrod` instead of `lightning-rod`,
  which made Cubone/Marowak's abilities look changed when they actually
  matched vanilla exactly once fixed. **Whenever the automated diff script
  flags an ability/move as changed, sanity-check that the slug conversion
  itself isn't the actual source of the "difference"** before writing the
  override — this is the third one-word-sheet-name conversion bug found
  after `Compoundeyes` and `Ancientpower`; expect more like it and keep
  extending the `IRREGULAR` slug map rather than assuming each one is a
  one-off.

## Batch 6 notes (dex #152-251) — Gen 2 complete

- **The STATS tab's `ITEM HELDS`/`Item Helds 1`/`Item Helds 2` columns have
  the same +1 CSV/gviz column offset bug as the TYPE section** (see batch
  3's note on this general phenomenon) — the true data columns are 47 and
  49 (0-indexed), not 46/48 as the gviz header labels claim. Verified
  empirically against Chansey's known vanilla item (Lucky Punch) before
  trusting it. **Re-verify empirically like this any time a new STATS-tab
  section is read for the first time** — don't trust header-label column
  indices at face value.
- **Item-held cells include a probability suffix** (e.g. `"Lucky Punch -
50%"`, `"Moon Stone - 5%"`) that must be stripped before slugging — the
  percentage isn't represented in `PokemonData.wildHeldItems` (a plain
  slug array, no probability weighting in this app's model), so it's
  discarded, not stored anywhere.
- **A blank `ITEM HELDS` cell is being treated as "this hack removed the
  wild-held item," not "not yet documented"** — consistent with the
  established "STATS/LEARNSETS tabs are fully populated for the whole
  dex" finding. This surfaced a real, fairly common pattern this batch:
  several species (Sentret, Furret, Pichu, Sunkern, Girafarig, Phanpy,
  Donphan, Smoochum, and partial losses for Cleffa/Blissey/Sneasel) lost
  a vanilla wild-held item entirely. Skarmory is the inverse case — vanilla
  has no wild-held item at all, and Complete adds Metal Coat. This
  wasn't an explicit item in the original "what changes" scope discussion
  but follows directly from the same field now being in scope (see the
  `wildHeldItems` diffing note above) — flag to the user if this volume of
  change feels surprising, but the mechanism (diff sheet vs. vanilla,
  write only what differs) is the same as every other field.
- **This hack converts essentially every remaining trade-evolution into an
  item-use evolution** (extending the pattern first seen in batch 4/5) —
  confirmed this batch for Poliwhirl→Politoed, Slowpoke→Slowking,
  Onix→Steelix, Scyther→Scizor, Seadra→Kingdra, Porygon→Porygon2, plus
  Eevee→Espeon/Umbreon converting from vanilla's friendship+time-of-day
  trigger to a stone item-use trigger. **By this point, assume every
  remaining trade or friendship/time-gated evolution in the rest of the
  dex will follow the same conversion pattern** — it's no longer a
  surprising one-off, it's this hack's standing design choice for
  removing multiplayer-dependent and RTC-dependent evolution requirements.
- **Real, load-bearing discovery: several of these evolution chains reach
  BACK into already-committed species from earlier batches, and required
  cross-batch patches** — e.g. adding the Politoed branch meant updating
  Poliwag's and Poliwhirl's `evolutionLine` overrides (both from batch 2,
  which had no evolution override at all before now, since nothing was
  flagged as changed for them at the time). Same for Slowpoke/Slowbro
  (batch 5), Onix (batch 4), Scyther/Horsea/Seadra/Porygon/Eevee/Vaporeon/
  Jolteon/Flareon (batch 5). **This is a deliberate, necessary exception
  to the "no backfill" rule used for field-scope additions
  (catchRate/wildHeldItems)** — those were about a NEW FIELD not being
  checked retroactively; this is a data-correctness requirement of the
  species actually being touched in the current batch (the vanilla data
  model duplicates a whole evolution chain onto every member species, so
  every member's copy has to agree, regardless of which batch each member
  was originally authored in). **When a later batch adds a new branch to
  an evolution chain, always check whether earlier-batch chain members
  need the same patch — don't assume "already done" species are exempt.**
- **This app's own shared vanilla `pokemon.json` has real, pre-existing
  gaps for trade-evolution chains** — Onix, Scyther, Porygon all show a
  completely empty `evolvesTo` in vanilla (Steelix/Scizor/Porygon2 aren't
  modeled at all, not even with a `trade` trigger), and Eevee's vanilla
  entry is missing Espeon/Umbreon entirely (only Vaporeon/Jolteon/Flareon
  present). This isn't an RP bug to fix — vanilla's own dataset was
  seemingly never populated for trade-evolution branches project-wide.
  The RP override still had to be built from real, well-established
  Pokémon mechanics knowledge (not from a vanilla template that doesn't
  exist), which is fine — it's just worth knowing the vanilla gap exists
  in case it matters for a non-RP game later.
- **Two gaps found this batch, both resolved:**
    1. **Unown's catch rate** — blank in the sheet; user supplied the real
       value directly (255), written to `unown.catchRate` in the override.
    2. **`sketch` didn't exist anywhere in this app's shared
       `src/lib/data/raw/moves.json`** — added a real `MoveData` entry
       (PokeAPI move id 166, category `status`, PP 1, power/accuracy
       `null`, `introducedInGeneration: 2`) to the shared vanilla move
       dataset (864 moves now, affects every game, not just RP — this was
       a genuine pre-existing gap in shared data). Smeargle's learnset now
       has its real 20 level-up Sketch entries (levels 1, 6, 11, ... 96,
       every 5 levels) restored — it has no TMs or tutor moves at all,
       which matches real Smeargle's famously restricted movepool, not a
       missed extraction.

## Batch 7 notes (dex #252-386) — Gen 3 complete

- **This app's shared vanilla `pokemon.json` has a much broader
  "non-level-up evolution not modeled" gap than previously known** — every
  species checked this batch with a level-up-only, item-use, or
  friendship evolution beyond simple level-up (Aron, Meditite, Wailmer,
  Trapinch, Baltoy, Lileep, Anorith, Feebas, Shuppet, Duskull, Snorunt,
  Spheal, Clamperl, Roselia) showed a **completely empty `evolvesTo`** in
  vanilla, not just the trade-evolution cases found in Gen 2. **This
  confirms the vanilla dataset's evolution modeling is broadly incomplete
  project-wide, not a trade-evolution-specific gap** — when a species'
  vanilla `evolvesTo` is empty, that's a signal to build the RP override
  from real, well-established Pokémon mechanics knowledge, not necessarily
  evidence the evolution itself doesn't exist in vanilla Platinum.
- **Continuing the "lower a high vanilla evolution level" and "trade →
  item-use" patterns are now clearly this hack's standing design
  philosophy, not isolated cases** — hit ~13 more evolution changes this
  batch alone, all fitting one of the two patterns (see diff summary).
  Expect this to keep happening for the rest of the dex; verifying against
  real Pokémon evolution facts (widely stable, well-known info) remains
  necessary per species, but the _shape_ of the change is no longer a
  surprise.
- **A `(!)`-marked evolution cell can be missing its move/item name
  entirely** — Surskit's TM/HM list had a bare `"HM07 (!!)"` cell with no
  move name. Resolved by cross-referencing the already-documented TM/HM
  number→name table in this doc (HM07 = Waterfall) rather than guessing —
  **that reference table is exactly why it was worth saving in batch
  5/Mew's fix**, this is a second real payoff from having it. Flagged to
  the user for awareness (not asked to confirm, since the reference table
  made it unambiguous) — same category of sheet glitch as
  `Compoundeyes`/`Ancientpower`/`Lightningrod`/`TM85DazzlingGleam`, just
  missing the name outright instead of missing a space.
- **New pattern: a Bug-type addition wave hit the Trapinch family**
  (Ground→Bug/Ground, Ground/Dragon→Bug/Dragon) — the first non-Fairy
  type-addition wave seen so far. Don't assume every future type-addition
  pattern will be Fairy-flavored; keep checking each species' actual sheet
  value rather than pattern-matching to Fairy by habit.
- **Wild-held-item changes were unusually extensive and varied this
  batch** — beyond simple berry swaps/removals, some species gained
  unusual held items not typically seen as "wild held" in vanilla
  mechanics at all (Zigzagoon/Linoone gaining Potion/Revive/Max Revive).
  Trusted per the sheet since the "blank = removed, populated = real"
  interpretation has held up consistently across batches — no reason to
  second-guess an unusual-looking item value once the general mechanism
  is this well-established.
- **Resolved: Beldum, Metang, Metagross catch rates** — user supplied 45
  for all three (blank in the sheet, same situation as Unown in batch 6),
  written to their overrides.
- Surskit's HM07→Waterfall inference (see above) was not separately
  challenged by the user — treat as accepted, no further action needed.

## Batch 8 notes (dex #387-493 + all alternate forms) — Phase 1 COMPLETE

- **Critical bug caught mid-batch, worth internalizing for any future
  large-scale STATS-tab read: species with multiple forms (Deoxys,
  Wormadam, Rotom, Giratina, Shaymin) get EXTRA ROWS in the STATS tab and
  EXTRA COLUMNS in the LEARNSETS tab that don't correspond 1:1 with dex
  numbers.** A first pass assumed `row = 386 + (dexNumber - 387)` and got
  badly misaligned data as a result (e.g. Turtwig showing vanilla ability
  "blaze," which is Chimchar's) — a full 3-row shift caused by Deoxys's
  Attack/Defense/Speed forms sitting between Deoxys-Normal (already done
  in batch 7) and Turtwig. **The fix: never assume a fixed
  row-per-dex-number mapping once you're in a batch that might contain
  multi-form species — read the row/column LABEL text directly (e.g.
  `"#413 Wormadam (P)"`) and match by that, not by position.** This
  session caught it because the resulting diff was _implausible_
  (Turtwig having Chimchar's ability makes no sense on inspection) — that
  kind of sanity check is exactly what to watch for; don't just trust a
  diff script's output mechanically once it's produced without a plausibility
  pass, especially right after any batch-boundary or multi-form species.
- **Full species+form count is 505, not 493** — the 493 "national dex"
  figure only counts base species; Deoxys (+3 forms), Wormadam (+2 beyond
  its base), Rotom (+5 forms), Giratina (+1), Shaymin (+1) each add extra
  `PokemonData` entries in vanilla's own dataset (12 extra total,
  493+12=505). All are now covered — the earlier Deoxys-Normal-only
  coverage in batch 7 was incomplete; Deoxys-Attack/Defense/Speed were
  filled in this batch as a bonus (turned out to have zero overrides
  needed — Deoxys's forms are unchanged from vanilla in this hack).
- **Evolution-item slugs used this batch (Protector, Electirizer,
  Magmarizer, Dubious Disc, Reaper Cloth, Leaf Stone, Ice Stone) do NOT
  exist in this app's shared `raw/items.json`.** Confirmed this is safe at
  the type level — `EvolutionMethod.item` is a free-form slug string used
  only for a title-cased display label and an icon path lookup
  (`EvolutionHelpers`), never validated/joined against real `ItemData` — so
  nothing breaks. But the icon images for these specific items likely
  don't exist under `public/items/`, so their evolution-line UI may show a
  broken/missing icon until Phase 3 (items) or a dedicated icon-asset pass
  addresses it. Flagging as a known cosmetic gap, not a data-correctness
  problem.
- **Riolu→Lucario's friendship evolution has no explicit numeric threshold
  in the sheet** (just "Level up when friendship high," same as several
  earlier friendship evolutions) — used this app's existing convention of
  `minHappiness: 220` (matching Pichu's/other friendship evolutions
  already in the vanilla dataset) rather than inventing a different
  number. If a future species' sheet text ever gives an explicit
  friendship number, use that instead of defaulting to 220.
- **Arceus's TM/HM learnset used an "ALL except: [list]" sheet format**
  (different from Mew's flat "ALL") — computed by taking the full 92
  TM/HM roster already saved in this doc (from Mew's fix) and subtracting
  the 20 explicitly-listed exceptions, landing on 80 machine moves. This
  is a second real payoff from saving that reference table — expect it to
  keep being useful for any other species with a TM/HM shorthand notation.
- **This is the last species batch — Phase 1 (`pokemon.ts` overrides) is
  now fully complete for the entire dex.** Any future work on individual
  species' data (a correction, a newly-discovered sheet error, extending
  an evolution chain) should edit `raw/pokemon-overrides.json` directly
  rather than re-running a whole batch pass. The next phases in the plan
  table below (encounters, locations, battles, etc.) are unblocked to
  start whenever the user wants to move on to them.

## Post-Phase-1 evolution cross-check (2026-08-16)

- **After all 505 species were done, cross-checked every evolutionLine
  override against the EVOLUTiON/TYPE/MOVES tab's own dedicated evolution
  changelog** (gid `2098433376`, fetched as CSV — this tab is small, ~39
  rows total, not truncation-prone like STATS/LEARNSETS). This tab is the
  authoritative "here's every evolution change" list, as opposed to the
  per-species STATS-tab `(!)` annotations + real-Pokémon-knowledge
  approach used to derive them originally. **34 of 36 evolution chains
  matched exactly** — good confirmation the STATS-tab-driven approach was
  sound.
- **Two real gaps found and fixed**: **Budew→Roselia→Roserade** (Budew
  evolves via friendship, Roselia→Roserade via Shiny Stone unchanged from
  real vanilla mechanics) and **Chingling→Chimecho** (friendship) were
  never written at all — both species existed in already-completed
  batches (Roselia/Chimecho in batch 7, Budew/Roserade/Chingling in batch 8) but their evolution info was simply missed since neither showed a
  `(!)` marker distinctive enough to catch during those batches' scans
  (both use the generic "when happy anytime" phrasing without an
  explicit level number, which is easy to skim past). Fixed as cross-batch
  patches, same mechanism as every other multi-batch evolution chain.
- **Takeaway for any future audit pass**: species-by-species scanning for
  `(!)` markers is good but not airtight — **a dedicated changelog tab,
  when one exists, is worth cross-checking against even after a phase is
  "done."** This one only took a single fetch since the tab is compact.
  Consider doing the same cross-check for Phase 2 (moves) using this same
  tab's TYPE CHANGES and MOVE CHANGES sections once that phase is
  underway — and possibly re-scan the STATS tab's evolution column for
  any other "when happy anytime" species that might have been passed over
  the same way Budew/Chingling were.
- Confirmed via this tab: **all Fairy-type additions across every batch
  are accounted for** — the tab lists 13 explicit Pokémon Type Changes
  entries and 5 more in a second sub-list, matching what was already
  written across batches 3/5/6/7 (Clefairy/Clefable, Ninetales,
  Jigglypuff/Wigglytuff, Marill/Azumarill, Snubbull/Granbull,
  Togepi/Togetic, Mr. Mime, Ralts-line, Mawile, Feraligatr — wait,
  Feraligatr is Water/Dark not Fairy — cross-check didn't flag any
  mismatch, this general area looks solid). Also confirms a **blanket
  rule stated directly in the tab**: "All Pokémon that are Fairy-type in
  Gen VI onwards are also Fairy-type in Renegade Platinum" — useful as a
  standing heuristic for any species not yet reached, though per this
  doc's own established discipline, still diff each one against vanilla
  individually rather than relying on the rule alone to skip verification.

## Post-Phase-1 type-changes cross-check (2026-08-16)

- **Cross-checked every `types` override against the same
  EVOLUTiON/TYPE/MOVES tab's TYPE CHANGES section** (4 side-by-side
  blocks in the raw CSV, 29 explicit entries total) — all 29 matched
  exactly, including pair order (e.g. Swablu is written `[fairy,
flying]`, Altaria `[dragon, fairy]`, matching the sheet's own
  presentation order for each). The remaining ~27 `types` overrides not
  in this explicit list are accounted for by two confirmed, non-erroneous
  sources: the sheet's own stated blanket rule ("all Pokémon that are
  Fairy-type in Gen VI onwards are also Fairy-type in Renegade Platinum,"
  covering Clefairy/Jigglypuff/Togepi/Marill/Snubbull/Ralts lines +
  Azurill/Mawile/Mime Jr./Togekiss) and Rotom's 5 alt-form types
  (explicitly called out by its own separate note in the same tab).
- **Snover and Abomasnow's `types` override IS correct and load-bearing —
  do not remove it again.** A mid-session pass wrongly concluded this was
  a diffing artifact (same type _set_ as vanilla, `grass`/`ice`, just
  listed as `ICE` then `GRASS` on the STATS tab) and removed it, on the
  theory that type order is cosmetic. **The user corrected this
  directly: type order matters** (primary vs. secondary type is a real,
  meaningful distinction in this app/game, the same way ability slot
  order does) — so Complete RP genuinely does make Snover/Abomasnow
  primary-Ice instead of primary-Grass, even though vanilla Platinum
  already has both types on the species. Restored to
  `{fromGeneration: 4, types: ['ice', 'grass']}`, matching the sheet's
  literal column order (Type I=Ice, Type II=Grass).
  **This means the earlier "systematic sweep" that flagged/would flag any
  same-_set_-different-order case as a false positive was working from
  the wrong premise — don't use set-equality to dismiss a `types` diff.**
  If a future audit finds another species where the sheet's type set
  matches vanilla's but the order differs, treat that as a real,
  intentional primary/secondary swap and keep the override — order
  differences in `types` are exactly as meaningful as slot differences in
  `abilities`, not noise to normalize away.

## Phase 2 scope decisions (user-confirmed, 2026-08-16)

- **Move-change scope is NOT limited to the sheet's explicit MOVE
  CHANGES/MOVE MODIFICATIONS list** (~20-25 named moves) — the sheet's own
  blanket statement ("the numbers of all moves are updated to match
  Ultra Sun and Ultra Moon") is literal and authoritative. **The correct
  approach: diff every move's value as of Generation 7 (USUM) against its
  value as of Generation 4 (vanilla Platinum's own baseline), for all
  ~863 moves, and override every move where they differ** — not just the
  ones individually named in the sheet's changelog. This is a
  fundamentally bigger scope than every other phase so far (which only
  act on explicitly-sourced sheet content) — confirmed directly by the
  user, don't second-guess it back down to "only the named list."
- **This app's shared `src/lib/data/raw/moves.json` already tracks a
  move's value history across every generation where PokeAPI recorded a
  real change** (via the existing `npm run pokeapi:moves` script) — so
  "value as of Gen 7/USUM" is just
  `GenerationHelpers.resolveGeneration(move.valuesByGeneration, 7)`, no
  new per-move PokeAPI calls needed beyond what that script already
  fetches. Per the user's explicit request, re-ran `npm run pokeapi:moves`
  once to confirm the shared vanilla data was current before diffing —
  it was (zero real data changes from the re-fetch).
- **Gotcha confirmed the hard way: `npm run pokeapi:moves` is a full
  regeneration, not incremental, and wiped the hand-added `sketch` entry**
  (batch 6's fix — PokeAPI moves with `pp < 2`, i.e. Sketch's 1 PP, are
  deliberately excluded by the script's own `MIN_PP` filter, see
  `src/lib/scripts/pokeapi/moves.ts`). Re-added it immediately after the
  re-fetch; confirmed via `git diff --stat` that the file is otherwise
  byte-for-byte back to its pre-refetch state. **If `pokeapi:moves` is
  ever re-run again in the future, re-check `sketch` still exists
  afterward** — it will need to be re-added again since the script has no
  mechanism to preserve manually-added entries.
- **Replaced/"unavailable" moves (Barrage→Draining Kiss, Brine→Scald,
  etc. — ~11 pairs) must not appear in the Moves subtab for Renegade
  Platinum.** Confirmed with the user: no special "unavailable" concept
  needed in the data model — the old move slugs (Barrage, Brine,
  Constrict, Horn Drill, Lunar Dance, Luster Purge, Mist Ball, Sand Tomb,
  Submission, Twister, Volt Tackle) must be actively excluded from
  whatever `RENEGADE_PLATINUM_DATA_SOURCE.moves` resolves to, since the
  override-merge mechanism as built only ever adds/patches keys, never
  removes them. **Needs an actual mechanism decision** (a small
  RP-local excluded-moves filter vs. extending
  `DataOverrideHelpers`/`DataOverrides<T>` to support removal generally)
  before this phase's moves.ts work is complete — not yet implemented as
  of this note.
- **Real, sizable Phase-1 correction found and fixed while starting Phase
  2: "Twister" was used as a `tutor`-method learnset entry across ~75
  already-completed species** (Charizard, the whole Pidgey/Dragonite/
  Latios/Latias lines, Gyarados, Kingdra, Togekiss, etc. — extracted
  verbatim from the LEARNSETS tab's tutor-move text, which still used the
  old move's name even though it's one of the 11 retired "MOVE
  REPLACEMENTS" moves). **User's explicit instruction: remove these
  entries entirely — do NOT replace them with Hurricane.** All 75 `{slug:
'twister', method: 'tutor'}` entries were deleted (not swapped);
  verified zero `twister` references remain anywhere in
  `pokemon-overrides.json`, `tsc` clean, merge still resolves. **The
  other 10 replaced-move old-names (Barrage, Brine, Constrict, Horn
  Drill, Lunar Dance, Luster Purge, Mist Ball, Sand Tomb, Submission,
  Volt Tackle) were checked too and don't appear anywhere in
  already-written learnsets** — they're niche enough that they never
  came up, so no equivalent cleanup was needed for them. **If any future
  batch/correction pass surfaces one of these 10 old names in a
  learnset, remove it the same way (delete, don't replace)**, per this
  established precedent — don't assume they need the Hurricane-style
  swap treatment either, since the user was explicit about removal only.
- **A related, deeper finding: moves introduced after Generation 4 in
  real Pokémon history need special handling to work at all for RP.**
  `MoveHelpers.getAllMoves`/`getMoveForGeneration` filter by
  `move.introducedInGeneration <= game.generation` (4 for RP) and
  `GenerationHelpers.resolveGeneration(valuesByGeneration, generation)`
  — a move whose earliest `valuesByGeneration` entry is `fromGeneration:
5` or later has **no valid entry at all** for `generation: 4`, so it
  would silently fail to resolve/display for RP even if it's genuinely
  used in an RP Pokémon's learnset. **Exactly 11 moves already used in
  RP learnsets hit this** — Bulldoze, Dazzling Gleam, Disarming Voice,
  Draining Kiss, Drill Run, Hurricane, Icicle Crash, Moonblast, Play
  Rough, Scald, Wild Charge — which are precisely the 11 "new" moves from
  the MOVE REPLACEMENTS list (Hurricane specifically replaces Twister
  game-wide, e.g. as the new TM88, matching the reference TM/HM table
  saved earlier in this doc). **Each of these 11 needs a
  `RENEGADE_PLATINUM_MOVES` override with BOTH an `introducedInGeneration:
4` (or similar) override AND a `fromGeneration: 4` entry in
  `valuesByGeneration`** (using their real current/Gen7 stats) — not just
  a value-diff override like every other changed move, since without the
  `introducedInGeneration` override they'd never even appear in RP's move
  list regardless of what `valuesByGeneration` contains. **Done** — all 11
  written with both fields.

## Phase 2 COMPLETE (2026-08-16)

- **129 move overrides written to `raw/moves-overrides.json`**: 118 real
  Gen4-vs-Gen7(USUM) value diffs (computed across all 864 vanilla moves,
  per the user's explicit "diff against USUM for all moves" scope
  decision — not just the ~20-25 moves individually named in the sheet's
  own MOVE CHANGES list) + the 11 backported post-Gen4 moves described
  above (Hurricane counted once, in the backport set, not double-counted
  in the 119 originally found).
- **11 moves removed entirely** via the new
  `DataOverrideHelpers.removeEntries` (added generically, not RP-only,
  since "a ROM hack retires content outright" is a real recurring
  pattern worth having in the shared mechanism) — wired into
  `renegade-platinum/moves.ts` as a `REMOVED_MOVES` local constant,
  applied after `applyOverrides`.
- **End-to-end verified directly against the real merge/removal logic**
  (not just `tsc`): final `RENEGADE_PLATINUM_MOVES` has 853 entries
  (864 vanilla − 11 removed), Hurricane resolves with
  `introducedInGeneration: 4` and a valid Gen-4-context value, unmodified
  moves like Tackle pass through with vanilla's own Gen4 value untouched.
- **Known pre-existing data-quality issue, flagged not fixed**: shared
  vanilla `raw/moves.json` has text-encoding corruption in some
  descriptions/effects (curly apostrophes and "é" render as `�` — e.g.
  "Pokémon" → "Pok�mon") inherited from the existing
  `npm run pokeapi:moves` fetch pipeline, affecting many entries
  game-wide, not just the ones touched this phase. Cosmetic only (doesn't
  affect gameplay-relevant data), out of scope for RP specifically since
  it's a shared-file bug — flagged for the user to decide whether/when to
  fix at the source.

## Other open questions to resolve when their phase comes up

- Phase 5: map layout reuse vs. divergence from vanilla Platinum — ask, don't assume.
- Phase 8: how to derive badge-bit save conditions without a confirmed public decomp for this hack.
- Phase 10: no UI design decided yet for how the diff should actually be presented (badge? panel? both?) — needs its own discussion when we get there.
