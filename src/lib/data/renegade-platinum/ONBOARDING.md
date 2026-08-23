# Renegade Platinum onboarding — status &amp; methodology

This is the handoff doc for onboarding Renegade Platinum (a Gen 4 ROM hack
of Pokémon Platinum) into the tracker. Read this in full before doing any
work in this folder — it captures decisions and source details that aren't
recoverable from the code alone. Assume zero prior context otherwise.

**Update this doc whenever a phase completes, a new decision is made, or a
new caveat about the source data is discovered.** This is a long-running,
multi-session effort — treat this file as the source of truth for "what's
done, what's next, what did we decide and why," not the conversation log.

**Trainer battle data for this game is 100% sourced from the sheet below —
never from ROM/decomp extraction, and never via the
`gen4-trainer-data-extraction` skill.** That skill reads a vanilla,
unpatched Diamond/Pearl/Platinum decomp's own trainer data — it does not
and cannot reflect Renegade Platinum's hand-edited trainer rosters, which
only exist in the sheet documented under "Trainer battles" below. If a task
mentions trainer battles for this game, go straight to that sheet section
— don't open the DSPRE-unpacked ROM contents, don't fetch a pret decomp
repo, and don't invoke that skill. (2026-08-23: this was gotten wrong
once — see the Oreburgh Gym entry in the changelog below for what
happened.)

## Source of truth

**ENCOUNTERS and TRAiNERS/battle data superseded (2026-08-20).** The
original single-sheet `ENCOUNTERS` tab (gid `515626425`) and per-split
`*SPLiT` tabs (gids below) on the sheet documented in this section are
**no longer the source for those two data types** — user-confirmed
replacement, not a supplementary source. STATS/LEARNSETS/EVOLUTiON/
iTEMS/GiFTS/NPC-TRADES tabs on the original sheet are unaffected (still
current) unless told otherwise.

- **Encounters**: workbook `1UExH51A0xx2ktc0IkQY1x-vmfNb_Zjxm` has 5 tabs
  — `Encounter tracker` (gid `810393132`), `Smart encounters table` (gid
  `1219699553`), `Encounter Tables` (gid `729957394`), `DROPDOWNS` (gid
  `1456316644`), `Dupe groups` (gid `220370509`). **Use `Encounter
Tables` (gid `729957394`) as the source of truth — NOT `Smart encounters
table`, despite its name sounding more authoritative** (user correction,
  2026-08-21, after Route 202 turned out to need it). The two tabs' actual
  species/level/rate values matched exactly on every location spot-checked
  so far (Route 201), so nothing already-authored needs redoing solely
  because of this correction — it's a going-forward source pointer, not a
  sign the earlier data was wrong.
  `https://docs.google.com/spreadsheets/d/1UExH51A0xx2ktc0IkQY1x-vmfNb_Zjxm/export?format=csv&gid=729957394`.
  Fire Red Omega, Storm Silver, and Renegade Platinum are stacked as three
  vertically-stacked sections in this tab too. The Renegade Platinum
  section starts where column A reads exactly `Renegade Platinum` — find
  it by searching for that literal string, not a row number (shifts as
  the other two hacks' sections are edited). Column layout is a **3-column
  stride** per location (this tab has no Dupe?/Dupe-adjusted columns,
  unlike Smart encounters table): `Pokémon, Level, Encounter Rate`,
  repeating left-to-right once per location — location display name sits
  in the first (`Pokémon`) column of its block, one row above the
  `Pokémon/Level/Encounter Rate` sub-header row; data rows follow, grouped
  under a method label (e.g. `Walking (Morning)`, `Surfing`, `Poke Radar`)
  in column A (applies to every location-block in that row-range until the
  next method label). **A blank `Level` cell is possible and is a genuine
  sheet gap, not a parsing error** (seen at Route 202 — every Walking row
  had no level; the user supplied the real value directly) — confirm with
  the user rather than assuming a neighboring location's range carries
  over.
- **The Renegade Platinum section has a hard end: the `Ren Plat End`
  sentinel row in column A (row 203 as of this writing).** A per-location
  extraction script that fixes a column index from the `Renegade
Platinum` header row and then iterates rows without checking for this
  sentinel will silently read past it into the next stacked hack's data
  once a location's own row range is short — that column index means a
  completely different (that other hack's own) location once you're past
  `Ren Plat End`, not "no more entries for this location." **Real bug this
  caused**: Route 218 was authored with a bogus `Static` Cobalion
  encounter that was actually `Volt White 2 Redux`'s data, caught only
  because the user knew the RP sheet didn't say that. Always cap the row
  range at (or check for) `Ren Plat End`/the next hack's header before
  trusting a location's "Other"/tail section is genuinely empty vs. just
  not yet reached.
- **Trainer battles** (this is the ONLY source — see the warning at the top
  of this doc before reaching for `gen4-trainer-data-extraction` or any
  ROM/decomp lookup): workbook
  `1uwR23b6kHRFYoav1Jzfx65qGfaxNQE8pI83Yr5mcVXQ`
  (`https://docs.google.com/spreadsheets/d/1uwR23b6kHRFYoav1Jzfx65qGfaxNQE8pI83Yr5mcVXQ`),
  one tab per gym split (mirrors the old sheet's `*SPLiT` tabs, but is its
  own document now — don't confuse the two). Full tab gid list (from the
  `htmlview` endpoint's embedded `items.push({name: "...", ..., gid:
"..."})` bootstrap JS — fetch `.../htmlview` and regex
  `name: "([^"]+)", pageUrl:[^,]+,\s*gid: "(\d+)"`, more reliable than the
  `/edit` page's HTML for this workbook): Roark Split (`182366078`),
  Gardenia Split (`138786025`), Fantina Split (`446903300`), Maylene Split
  (`1305322844`), Wake Split (`1891935092`), Byron Split (`1236439805`),
  Candice Split (`527390430`), Volkner Split (`1865021164`), Champion
  Split (`1357697841`) — plus non-data tabs `Raw Notes` (`810826549`),
  `Sprites` (`330078244`). Row layout per trainer within a tab: trainer
  name row, then per-mon-column blocks of `Level / Nature (+Stat -Stat) /
Ability / Held Item / Move 1-4`, with a `<n> IVs` note appended to the
  trainer-name cell text (uniform IV across that trainer's whole team) —
  see the worked Barry-1 example already authored in `battles.ts` for the
  exact parse. **No gender column exists on this sheet** — never omit
  `gender` because of that (see the `gen4-trainer-data-extraction` skill's
  gender section); derive it from species `genderRate`, falling back to
  asking the user only for the 50/50-ratio case. **A trainer name written
  as two names joined by `/` (e.g. "PKMN Trainer Dawn/Lucas") can mean two
  entirely separate trainers/classes gated by `Battle.gender`, not one
  trainer with an ambiguous stat** — confirm with the user rather than
  assuming a slash always means "pick one." When it does split like this,
  slash-separated stat values (e.g. a nature written `Lax/Hasty`) map
  first-to-first (first name -> first value) unless told otherwise.

**Sheet cell → `battles.ts` field mapping — mechanical, apply directly,
never re-derive or grep an existing entry to "check the convention":**

| Sheet cell                                                                  | `battles.ts` field                                                                                                                                                         |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Trainer-name row, e.g. `Leader Roark`, `Youngster Jonathon`                 | Split on the last space: everything before is looked up as a `trainer-classes.ts` slug (`leader-roark`, `youngster`), everything after is `name` (`'Roark'`, `'Jonathon'`) |
| `Level <n>`                                                                 | `level: <n>`                                                                                                                                                               |
| `<Nature> \n(+Stat -Stat)`                                                  | Strip the parenthetical, `Nature.<Name>` (e.g. `Lax (+Def -SpD)` → `Nature.Lax`)                                                                                           |
| Ability cell (e.g. `Rock Head`)                                             | kebab-case → `ability: 'rock-head'`                                                                                                                                        |
| `No Item`                                                                   | omit `heldItem` entirely — do not write `heldItem: undefined` or `'none'`                                                                                                  |
| Any other item text (e.g. `Smooth Rock`)                                    | kebab-case → `heldItem: 'smooth-rock'`                                                                                                                                     |
| Move cells (e.g. `Stealth Rock`)                                            | kebab-case → `moves: [...]`, in column order (Move 1-4), omitting empty cells                                                                                              |
| `<n> IVs` in the trainer-name cell                                          | `ivs: <n>` uniform across the whole team                                                                                                                                   |
| Per-mon IV split (e.g. `29 IVs on Onix and Geodude` / `30 IVs on the rest`) | apply the stated number to each named mon individually — not a single team-wide `ivs`                                                                                      |
| `x1 <Item>` lines in the trainer-name cell (e.g. `x1 Potion`)               | `BattleData.items: [{ count: 1, name: 'Potion' }]` — real, populated field, one entry per line, `name` as the sheet's own display text (not a kebab slug)                  |
| `Gifts TM<n> - <Move>` in the trainer-name cell                             | post-battle TM reward — not modeled anywhere in `BattleData`/`BattlePokemon`, genuinely ignore this one                                                                    |
| Gender                                                                      | not a sheet column at all — derive from species `genderRate` per the rule below; only ask for the 50/50-ratio case                                                         |

`BattleMetadata` is **never on the sheet and never inferred from trainer
class, species, or any other field — full stop.** Every value in a
battle's `metadata: []` array (`Boss`, `Miniboss`, `Optional`, `Double`,
etc., including the empty-array case) is supplied by the user, the same as
x/y placement. Do not default a gym leader to `Boss` or a named rival to
`Miniboss` just because that pattern showed up once before (Route 202) —
that was the user's explicit instruction for that specific battle, not a
standing rule. Always ask; never assume.

All other data (STATS, LEARNSETS, EVOLUTiON/TYPE/MOVES, iTEMS/TMs,
GiFTS/EVENTS, NPC/TRADES) still comes from the single Google Sheet the
user maintains, documenting every change Renegade Platinum makes from
vanilla Platinum:

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
    515626425  ENCOUNTERS       -- SUPERSEDED, see note above, don't use
    719434186  TRAiNERS         -- SUPERSEDED, see note above, don't use
    218384597  LEARNSETS
    2098433376 EVOLUTiON/TYPE/MOVES
    1939055360 iTEMS/TMs
    1306355674 GiFTS/EVENTS
    1801496803 NPC/TRADES
    494941063  ROARK SPLiT      -- SUPERSEDED, see note above, don't use
    2133932114 GARDENiA SPLiT   -- SUPERSEDED, see note above, don't use
    1478670349 FANTINA SPLiT    -- SUPERSEDED, see note above, don't use
    1876470000 MAYLENE SPLiT    -- SUPERSEDED, see note above, don't use
    923574271  WAKE SPLiT       -- SUPERSEDED, see note above, don't use
    1150638673 BYRON SPLiT      -- SUPERSEDED, see note above, don't use
    1156092808 CANDICE SPLiT    -- SUPERSEDED, see note above, don't use
    1919549891 VOLKNER SPLiT    -- SUPERSEDED, see note above, don't use
    1044796639 CHAMPiON SPLiT   -- SUPERSEDED, see note above, don't use
    1025278191 POST GAME        -- status vs. new workbook unconfirmed, ask before using
    2029759237 REMATCHES        -- status vs. new workbook unconfirmed, ask before using
    721785423  FAQ/AR/RANDOMiZER
    1945634483 WIP Pokedex
    ```
    If the sheet is ever reorganized (tabs added/renamed), re-derive by
    fetching the `/edit` URL's HTML and regexing for
    `\d+,0,"(\d{6,})",\[\{"1":\[\[0,0,"([^"]*)"` (name/gid pairs embedded in
    the page's bootstrap JS).

## Per-location authoring loop (process, adopted 2026-08-20)

Going forward, every location is onboarded through this same three-part
loop — don't batch multiple locations' worth of encounters/battles into
one uninterrupted pass, and don't run any of the three parts to
completion without stopping at its confirmation gate first:

1. **Maps** — user supplies DSPRE screenshot chunks (see the
   `dspre-map-stitch` skill for naming scheme and stitching). Stitch, then
   `Read` the result and visually verify seams before treating it as done.
   DSPRE's dead-space fill (area outside the actual map, e.g. `rgb(51, 51,
51)`) is auto-normalized to pure black (`rgb(0, 0, 0)`) and
   auto-trimmed where it forms a uniform border by `stitch-map.ts` — check
   every stitched map for leftover grey or an untrimmed black border
   anyway (irregular notches can't be auto-trimmed and are expected to
   stay black) before treating the map as final. **`mapAnchor` (per
   subarea) has no source-of-truth to derive it from — it's a UI framing
   choice ("which edge/corner/Center the map defaults to when no battle
   is selected", per `LocationMap.md`), not something inferable from the
   map image. Ask the user for it rather than guessing/pattern-matching
   off a sibling location** (2026-08-23 correction — every prior value
   had been guessed with no real derivation, confirmed wrong at least
   once for `oreburgh-mine`).
2. **Encounters** — fetch that location's block from the encounters
   workbook (see "Source of truth" above for URL/schema), parse it, then
   **state exactly what you parsed (species/level/method/rate per row) and
   get explicit confirmation before writing anything into
   `encounters.ts`.** Don't silently write parsed data and move on to the
   next location.
3. **Battles** — fetch that location's trainers from the battles workbook,
   parse team/nature/ability/moves/IVs, derive gender from `genderRate`
   (ask only for the 50/50 case), then **ask for whatever the sheet can't
   supply — x/y placement, mandatory/optional and any other
   `BattleMetadata`, AI flags (default `[Basic, Expert, EvaluateAttack]`
   per the decision below, unless told otherwise for that trainer) — and
   confirm the full assembled entry before writing to `battles.ts`.**

**The confirmation gate is mandatory at every stage, not just when
something is ambiguous.** Even when parsed data looks unambiguous, state
what was parsed and what's about to be written before writing it — this
was an explicit user correction (2026-08-20): a prior pass had written
gender as omitted-therefore-genderless without flagging it, which was
silently wrong data, not a reasonable default. Confirming first is cheap;
re-deriving and re-explaining after the fact, or shipping wrong data, is
not.

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
- **`BattlePokemon.gender` is NOT "unknown/unspecified" when omitted — it
  is read by the app as explicitly genderless.** `PokemonPreview.tsx` only
  renders a gender icon `{pokemon.gender && (...)}` — leaving the field out
  doesn't mean "don't know," it means "this Pokémon has no gender," which
  is wrong for any species that actually has a gender ratio (nearly all of
  them; true genderless species are a small, specific list — Magnemite,
  Voltorb, most Legendaries, etc.). **Never omit `gender` on a
  `BattlePokemon` just because the source sheet didn't list it** — that's
  a real data error, not a safe default, unlike other genuinely optional
  `BattlePokemon` fields (`heldItem`, `evs`). If the sheet has no gender
  column, treat gender the same as x/y placement or AI flags: ask the
  user rather than guessing or silently leaving it off.
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
- **`aiFlags` removed from the app entirely (2026-08-21)** — the
  `AiFlag` enum, `BattleData.aiFlags`, and every `aiFlags: [...]` entry
  across all three games' `battles.ts` files were deleted (user request,
  project-wide, not RP-scoped). No UI ever read this field. Don't
  reintroduce it on new battle entries.
- **Time-of-day conditions on `Walking` encounters: collapse to a single
  no-`conditions` entry only when the sheet's Morning/Day/Night row
  groups for that location are actually identical** (same species/level/
  rate) — this is a per-location check, not a blanket "RP never
  time-gates" rule (an earlier note here overclaimed that; corrected
  2026-08-21). When the three groups do differ for a location, write the
  real per-time-of-day entries with `conditions: ['time-morning']` /
  `['time-day']` / `['time-night']`, same as vanilla Platinum's own data
  does. Lake Verity happened to have identical Morning/Day/Night groups,
  which is why it was written as single collapsed entries — don't assume
  every other location will be the same without checking.
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

| Phase | Scope                                                                                                                                              | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Spreadsheet recon (structure/tabs/shape only)                                                                                                      | ✅ Done — see above                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5   | Override/patch architecture (shared type + helper + wiring)                                                                                        | ✅ Done — see "Architecture" section above                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1     | `pokemon.ts` overrides — sparse stats/types/abilities/evolution diffs + dense per-species learnset                                                 | ✅ **DONE — full national dex (505 species+form entries) complete as of 2026-08-16.** See notes below for methodology/gotchas if extending or auditing this data.                                                                                                                                                                                                                                                                                                                                    |
| 2     | `moves.ts` overrides — Gen4-vs-USUM value diffs + backported/removed moves                                                                         | ✅ **DONE** — 129 overrides + 11 removals, verified end-to-end. See notes below.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3     | ~~`items.ts`~~ — N/A, items unchanged, no override table                                                                                           | ✅ Done (nothing to author)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4     | `encounters.ts` — wild encounter tables, fully independent dataset (must land before locations exist — see onboard-new-game skill sequencing note) | ✅ **DONE through the credits** (2026-08-16) — 101 `encountersKey`s, every real location from Twinleaf Town through the Pokémon League. Turnback Cave / post-League content deliberately excluded (see "encounters-only pass" notes below). Great Marsh corrected to use `Binoculars`/`chance: null`, matching vanilla's own approach, rather than modeling odds the sheet's "Changing Pokémon" mechanic doesn't actually support.                                                                   |
| 5     | `locations/*.ts` + `maps/*.png`                                                                                                                    | 🔶 17 of ~95 real locations wired (Twinleaf Town, Route 201, Sandgem Town, Lake Verity, Route 202, Jubilife City, Trainer School, Route 218, Route 219, Route 204 [South+North subareas], Ravaged Path, Route 203, Oreburgh Gate [1F+B1F subareas], Oreburgh City, Route 207, Oreburgh Mine [1F+B1F subareas], Oreburgh Gym) — Roark's split now runs through the Oreburgh Gym door. All maps are placeholders. Real map layout reuse still an open question for whenever placeholders get replaced. |
| 6     | `battles.ts` — trainer rosters from TRAiNERS tab, per-mon real IVs, fully independent dataset                                                      | Not started — several already-wired locations (Route 218/219, Route 204 North, Oreburgh Gate B1F, Route 207) have `hideBattles: true` set ahead of time per user instruction, so their (not-yet-authored) battle markers stay hidden once Phase 6 lands real battle data there.                                                                                                                                                                                                                      |
| 7     | New trainer classes (if any surface in TRAiNERS data not already in `trainer-classes.ts`)                                                          | Not started                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8     | `splits/*.ts` + save-condition derivation (badge bit indices)                                                                                      | 🔶 `roark.ts` now has 17 locations (Twinleaf Town through Oreburgh Gym) — `bit: -1` placeholder saveCondition still unresolved; gym order still needs reconfirmation before later splits are finalized.                                                                                                                                                                                                                                                                                              |
| 9     | Final assembly in `renegade-platinum.ts`, drop placeholder TODO comment                                                                            | Not started                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 10    | "What changed" diff UI (reads `dataSource.overrides`) — new feature, not part of original onboarding scope                                         | Not started, not yet scoped in detail                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

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

## Phase 4 methodology (ENCOUNTERS tab)

- **Tab structure**: locations run as column blocks (same pattern as
  LEARNSETS' species-as-columns), each block **7 columns wide** — [0]
  group-header label (method+level text, or a context note), [1] species
  name, [2] level range, [3-5] three percentage columns whose _meaning
  depends on the method group_ (Morning/Day/Night for Grass/Poké Radar/
  gift-adjacent groups; Old-Rod/Good-Rod/Super-Rod tier for fishing), [6]
  spacer. ~46 top-level location column blocks, only 38 rows deep (rows
  are reused independently per column).
- **The level-range cell is stored as a Google Sheets `Date` value
  internally** (e.g. raw value `Date(2025,4,4)`) due to an auto-formatting
  quirk when someone types e.g. "4-5" into a cell Sheets decides looks
  date-like — **the correct text is in the cell's separate formatted
  value (gviz JSON's `f` field, not `v`)**. Always fetch this tab via the
  gviz endpoint, never plain CSV, and always read `f` over `v` for level
  cells specifically.
- **A sheet "location" column can bundle multiple real in-game
  met-locations together** for narrative/walkthrough convenience — the
  first location tackled (nominally "TWINLEAF TOWN") actually contained
  Route 201 (starters + wild Grass + Poké Radar + a static Mew),
  Twinleaf Town proper (Eevee gift + Surf + Rods), and Sandgem Town
  (picking up the two un-chosen starters), distinguished by embedded
  sub-header rows mid-block, not by the column's own top-level header.
  **User-confirmed rule: split by these real locations, not by the
  sheet's visual grouping** — each embedded sub-header becomes its own
  `encountersKey` entry.
  **A stricter follow-up rule, also user-confirmed: a named location's
  sub-block only contains what's genuinely native to it** — Route 201 is
  the starter-selection location specifically, so only the 3 Starter
  encounters belong under `sinnoh-route-201`; the Grass/Poké Radar/static
  Mew content that appeared directly below the "ROUTE 201" sub-header in
  the sheet still actually belongs to Twinleaf Town, not Route 201, once
  reasoned through properly. **Don't assume a sub-header's own rows all
  belong to that sub-header — cross-check against what the location
  actually is in the real game before assigning.** This was caught and
  corrected after an initial wrong split.
- **Real mistake made and corrected: fabricated fishing-rod level ranges
  by copying the Surf section's level range (20-40) onto the Rod
  entries, which had no level data of their own in the sheet** —a
  genuine "don't guess, ask" violation, caught when the user directly
  asked "where did you get the fishing encounters' level ranges from?"
  **The real answer was already present, just misread**: the Rod
  section's own header, `"Rods (O-10, G-25, S-50)"`, gives each rod
  tier's _fixed catch level directly_ (Old Rod → level 10, Good Rod →
  level 25, Super Rod → level 50), not a shared range — i.e. `minLevel
=== maxLevel` per tier, distinct per tier, not one range shared across
  all three. **Lesson: a method-group header's parenthetical numbers can
  encode per-species-row data directly (rod tier levels) rather than
  being purely descriptive** — read every header text carefully for
  embedded data before assuming a cell needs a value copied from
  elsewhere or left blank.
- **Two new `EncounterMethod` enum values added** (`src/lib/static/enums.ts`),
  wired into every consumer that enumerates methods exhaustively
  (`EncounterTable.tsx`'s `METHOD_ORDER`,
  `EncounterRow.tsx`'s `WILD_METHODS`):
    - `PokeRadar = 'poke-radar'` — Renegade Platinum has genuine Poké
      Radar encounters; this method didn't exist in the app before (no
      existing game modeled it). Rolls for wild-held items like
      Grass/Surf/etc.
    - `SuperRod = 'super-rod'` — **vanilla Platinum's own data in this
      app never modeled Super Rod at all** (confirmed by the user — only
      `OldRod`/`GoodRod` existed), a pre-existing gap unrelated to RP
      specifically. Also rolls for wild-held items.
      Both required zero other wiring — `MethodGroup.tsx`'s label derivation
      is a generic slug-to-title-case, no per-method label map to update.
- **Resolved: the static Mew encounter is intentionally excluded, not
  deferred.** It's tied to Route 201 (the starter-selection location),
  and per the standing rule established above ("Route 201 only ever
  contains the 3 starter encounters"), it will never actually be
  relevant/obtainable in this app's scope — confirmed directly by the
  user. Dropped entirely, no `TODO` comment left behind. Don't
  re-introduce this later without the user asking for it specifically.

## Pivot: wiring locations/splits incrementally alongside encounters (2026-08-16)

- **User decision: stop treating encounters (Phase 4), locations (Phase 5),
  and splits (Phase 8) as strictly sequential phases done in three later,
  separate passes — wire each area's Location + Split entry in as soon as
  its encounters are authored, area by area.** This doesn't change the
  underlying skill sequencing rule (encounters still have to exist before
  a location references them via `encountersKey`, so within one area the
  order is still encounters → location → split), it just means don't wait
  for the _entire_ dataset in each phase to be "done" before starting the
  next phase for that same area.
- **Maps are real, placeholder PNGs, not stubs to fill in later per se**:
  a small script using this project's existing `sharp` dependency
  generates a flat 400×300 gray PNG, written once per location slug (one
  physical file per location, even though the pixel content is identical
  across all of them) into `src/lib/data/renegade-platinum/maps/`, then
  `npm run gen:location renegade-platinum <slug>` scaffolds the location
  file + wires the maps barrel normally. Every generated location has a
  `// TODO: map is a placeholder` comment and uses `MapAnchor.Center` as
  an arbitrary default (meaningless until a real map/marker positions
  exist) — replace both once real map screenshots are sourced, same as
  any other game's onboarding.
- **`gen:location` requires the target `locations/` directory to already
  exist** (`writeToFile` doesn't `mkdir -p` it) — first-time setup for a
  brand new game's `locations/` folder needs a manual `mkdir` before the
  first `gen:location` call succeeds. Hit this literally, fixed by
  creating the dir once; won't recur for this game now that it exists.
- **Split `saveCondition`s are being written as explicit, deliberately
  invalid placeholders (`bit: -1`) rather than guessed real values.**
  Asked the user directly whether RP's save-file badge-bit layout is
  confirmed identical to vanilla Platinum's (a binary patch over Platinum
  could plausibly preserve it) — **confirmed unconfirmed**, so Roark's
  split uses `{ type: 'badge', bit: -1 }` with a loud `TODO` comment
  instead of silently reusing vanilla's `bit: 0`. **`-1` (not `0`) is the
  deliberate sentinel** so a forgotten placeholder can never accidentally
  read as a real, matching badge bit later — don't "fix" this by reusing
  a real game's bit index without independently deriving/confirming it
  first, per the existing "deriving a split's saveCondition" methodology
  above.
- **First split done**: `splits/roark.ts` contains Twinleaf Town, Route
  201, Sandgem Town (in that order) — wired into
  `RENEGADE_PLATINUM.splits`. More locations get appended to this same
  split (or a new one started) as further areas are authored.
- **The top-of-file placeholder comment in `renegade-platinum.ts`** (the
  one warning that clicking "New" crashes) is now stale and was updated
  — `EncounterHelpers.getStarterLocationName` has a real Route 201
  Starter encounter to resolve now, so the game is genuinely clickable,
  just still very incomplete past the first area.

### Second area batch: Lake Verity / Route 202 / Jubilife City (2026-08-16)

- This was the sheet's second ENCOUNTERS-tab column block, headed "LAKE
  VERITY" but — same bundling pattern as the first block — actually
  contains **three** real locations: Lake Verity, Route 202, and
  Jubilife City. All appended to `encounters.ts`, `locations/`, and
  `splits/roark.ts` (Roark's split now has 6 locations).
- **Lake Verity is story-gated**, same as vanilla Platinum's own Lake
  Verity: the sheet notes Surf/Rod access unlocks "after the events of
  the Distortion World [raise] the water[level]". Vanilla splits this
  via **two `encountersKey`s inside one `Location`'s `subareas` array**
  (`lake-verity-before-galactic-intervention` /
  `lake-verity-after-galactic-intervention`), not `conditions` — copied
  that structural pattern here (`Location.subareas`, two entries, each
  with its own placeholder map/mapAnchor), but used **RP-specific key
  text** (`lake-verity` / `lake-verity-after-distortion-world`) since
  RP's trigger event (Distortion World) is a different, later story
  beat than vanilla's Team Galactic intervention — don't assume the
  same key names transfer across games, only the subarea _mechanism_
  transfers.
- **`sinnoh-route-202` reused verbatim** from vanilla — safe because the
  key itself is just the app's naming convention and the route's identity
  (not its encounter content) is unchanged.
- **`jubilife-city` is a new key** (vanilla has no dedicated Jubilife City
  wild-encounter key). Its only content is the Interviewer NPC's Kanto-
  starter gift (Bulbasaur/Charmander/Squirtle). The sheet's level cell was
  blank and its "More details here" note pointed to a lost hyperlink (same
  class of issue as the earlier resolved Mew case) — **did not stop to
  ask**; used level 5 (the established early-gift convention from
  Twinleaf Town's Eevee) with an inline comment flagging it as an
  assumption rather than a confirmed sheet value. Flag if this needs
  correcting once the sheet's cell content/link is recoverable.
- Verified all new species slugs (wynaut, houndour, growlithe, burmy,
  sentret, poochyena, zigzagoon, shinx, feebas, masquerain) exist in
  vanilla `pokemon.json` before writing any encounter rows.

## Pivot: encounters-only pass through the credits (2026-08-16)

- **User decision: stop wiring locations/maps/splits per area for now —
  focus exclusively on populating `encounters.ts` for every real location
  from Twinleaf Town through the Pokémon League (i.e. everything before
  the credits roll).** Location/map/split scaffolding (the earlier
  incremental-wiring pivot) resumes as a separate later pass once
  encounters are fully logged. Locations already wired
  (route-201/twinleaf-town/sandgem-town/lake-verity/route-202/
  jubilife-city, in `splits/roark.ts`) are untouched but no new
  `gen:location` calls are being made during this pass.
- **The ENCOUNTERS tab is structured as column-blocks that visually align
  with 46 top-level headers** (fetched via the gviz endpoint's
  `data.table.cols[].label`, NOT as data rows — the sheet's actual
  location names live in the column headers, not row 0/1 of
  `data.table.rows`, which was a real parsing trap hit while starting
  this pass: naively reading `grid[1]` as a header row pulled in the
  wrong row entirely). Each 7-column block routinely bundles **several
  real locations** stacked by row (exactly like the original Twinleaf
  Town discovery) — always split by embedded sub-headers within a block,
  never trust the top-level column label alone.
- **A block can also overflow into a "stray" extra column beyond its
  own 7**, holding sub-location headers for the data that continues in
  the _next_ block over. Hit this with the Mt. Coronet (R216 Entry)
  block, whose 8th column held "ROUTE 206" / "Grass (20-22)" / "Poké
  Radar" / "Honey Tree (21)" labels — headers for content that actually
  appears in the following block's rows, offset by one row down from
  the label. Always check for a stray trailing column before assuming a
  block's data is unlabeled.
- **A block's real content sometimes reappears later in the sheet with
  more data filled in** (Route 218 and Route 219 both first appeared
  under the Trainer School block with Old-Rod-only fishing data — that's
  literally all you have access to at that point in the game — then
  reappeared later with their full Grass/Surf/Good Rod/Super Rod/Honey
  Tree tables). **These are merges, not duplicates**: the same
  `encountersKey` gets extended with the new tiers/methods rather than
  creating a second key. Caught this by checking for existing keys
  before generating new ones — always check `grep -n "'<key>':"` against
  the file before writing a block that reintroduces a familiar route
  name.
- **Broken/lost hyperlinks are extremely common** in this tab (every
  "More details here :" / "Details on how to encounter it here :" /
  "(details :" cell is a dead cross-reference lost in the sheet's
  export). Established handling: record what IS given (species, level
  if present), and where a required field is missing entirely (Trade's
  `tradeFor`), skip the entry rather than fabricate — noted inline with
  a comment naming the gap. Not treated as a stop-worthy anomaly since
  it's the sheet's own systemic export limitation, not a data
  inconsistency — happens dozens of times throughout the tab.
- **Static encounters** use `EncounterMethod.Static`, `chance: null`,
  `minLevel === maxLevel` (matches vanilla's own Old Chateau Rotom
  entry). Several RP statics unlock "after the Distortion World's story
  events" — same gate as Lake Verity's Surf/Rods — but unlike Lake
  Verity, the sheet does NOT give these their own separate
  `encountersKey`; they're left in the base location key with an inline
  comment rather than inventing a new split the sheet doesn't ask for.
  One static (Valley Windworks' Drifloon) is gated "on Fridays" — not
  representable via the app's time-of-day `conditions`, recorded
  without a conditions gate and flagged in a comment.
- **"Ground" in the sheet means indoor/`Walking` method**, confirmed by
  cross-referencing vanilla's own Old Chateau data (which uses
  `EncounterMethod.Walking` for the exact same room). The Old Chateau
  itself is recorded under one flat `old-chateau` key since the sheet
  doesn't split it into vanilla's 2F/dining-room/entrance subareas.
- **Honey Tree entries use vanilla Platinum's own level convention
  (5-15)** wherever the sheet gives percentages but no level range,
  since the mechanic (any level, honey-tree-RNG) is unchanged from
  vanilla and the sheet only ever needed to give species/odds.
- **Lost Tower and Great Marsh both get sheet-bundled pairs of floors/
  areas** ("1F, 2F" together, "3F, 4F" together, "1 and 2", "3 and 4",
  etc.) even though the app (and vanilla) model each floor/area as its
  own key. Handled by duplicating the same encounter array into both
  real keys in the pair rather than inventing a combined key — the
  underlying floors/areas already exist as distinct locations in the
  app's data model.
- **Great Marsh's "Changing Pokémon" daily-rotating-bonus mechanic is
  NOT recorded** — each area's table has one species get a +10%
  encounter-rate boost per day, drawn from another species in a way the
  sheet's own author says they don't know precisely. This isn't
  representable in the current `Encounter` schema (no time-varying
  odds) and recording it would mean guessing at a mechanic the sheet
  itself flags as uncertain. Only the base per-area Grass tables are
  recorded; this is a known, deliberate gap.
- **New RP-specific locations with no vanilla key** get a plain new
  slug: `trainer-school`, `floaroma-town`, `pokemon-mansion`,
  `maniac-tunnel`, `wayward-cave` (sheet bundles 1F/B1F, unlike
  vanilla's split), `iron-island-1f-b1f`/`iron-island-b2f-b3f`/
  `iron-island-outside` (sheet's 3-way grouping, coarser than vanilla's
  6-key split).
- **PASS COMPLETE (2026-08-16): 101 `encountersKey`s populated**,
  covering every real location from Twinleaf Town through the Pokémon
  League — all 46 of the ENCOUNTERS tab's top-level column blocks were
  read and processed. `tsc --noEmit`, `eslint`, and `prettier` are all
  clean on the final file.
- **Content explicitly excluded as out-of-scope** (post-credits per the
  sheet's own labeling, not overlooked): Turnback Cave (Sendoff Spring
  block — sheet says "after the credits, come back here"), Regigigas at
  Snowpoint Temple (labeled "Static Encounter (After Credits)"), and
  everything in the sheet's Route 224 / "After Credits Legendaries" /
  Post Game / Route 227 / Route 230 blocks (not read at all — out of
  scope by column, not by content).
- **Two pre-existing keys got fuller data merged in mid-pass**:
  `sinnoh-route-218` and `sinnoh-route-219` were first populated with
  Old-Rod-only data (that's all you have access to at that point in the
  game) under the Trainer School block, then re-appeared later in the
  sheet with their full Grass/Surf/Good Rod/Super Rod/Honey Tree
  tables — merged into the same key rather than duplicated. Caught by
  grepping for the key before writing new blocks; worth re-checking for
  any other same-location reappearances if resuming this kind of pass
  in the future.
- **One data-entry mistake caught and fixed mid-pass**: Moltres was
  initially recorded under a guessed `sinnoh-victory-road-1f` key
  (the sheet's index of "Post Distortion World Legendaries" just says
  "Victory Road" with no floor). Re-reading the actual Route 223 block
  later showed Moltres's static entry sits directly under "ROUTE 223",
  not Victory Road at all — corrected to `sinnoh-sea-route-223`.
- **Victory Road turned out far more granular in the sheet than
  vanilla's flat 1F/2F/B1F split**: RP distinguishes "1F", "1F Back (3
  sub-rooms sharing one table)", "2F", and "B1F" — recorded as
  `sinnoh-victory-road-1f` / `-back` (both new keys, renamed from an
  earlier `-1fa`/`-1fb` naming once a second cross-check confirmed the
  "back" rooms are a distinct area rather than a second 1F variant)
  plus vanilla's existing `-2f` / `-b1f`.
- **The Pokémon League's own approach water has two distinct, unlabeled
  Surf/Rod tables** (an outer one matching Route 223/Sunyshore's
  Tentacruel/Pelipper/Mantine + Luvdisc/Corsola rods, and an inner-lake
  one with Sealeo/Dewgong/Lapras + a simple Magikarp/Gyarados rod
  table) — both recorded together under `sinnoh-pokemon-league` since
  the sheet gives no sub-location text to split them by.
- **Next steps for this project**: resume the earlier location/map/
  split wiring pass (paused for this encounters-only push) now that the
  full pre-League encounter dataset exists to wire against; then tackle
  Phase 6 (battles/TRAiNERS tab) and the remaining phases per the
  phase-plan table further up this doc.

## Roark split wired through Oreburgh Gym (2026-08-16)

- **Resumed the location/map/split wiring pass** now that encounters are
  complete through the credits. Wired all 17 locations from Twinleaf
  Town through Oreburgh Gym into `splits/roark.ts`, using
  `npm run gen:location` + placeholder maps for every new one (same
  pattern as the earlier Lake Verity/Route 202/Jubilife City batch).
- **`gen:location`'s two-call subarea pattern**: call once with just
  `<game> <map>` to create the location, then again with
  `<game> <map> <locationSlug> <subareaName>` to add a second map as a
  subarea (it auto-converts the file from a flat `map` field to a
  `subareas` array). Used for Route 204 (South/North), Oreburgh Gate
  (1F/B1F), and Oreburgh Mine (1F/B1F) — three separate map PNGs
  generated per pair (`route-204-south.png` / `route-204-north.png`,
  etc.) since each subarea needs its own placeholder image.
- **`hideBattles: true` set ahead of Phase 6** on Route 219, Route 204's
  North subarea, Oreburgh Gate's B1F subarea, and Route 207, per
  explicit user instruction. No `battles` arrays exist anywhere yet
  (Phase 6/TRAiNERS data hasn't started), so this flag has no visible
  effect today — it's there so that whenever Phase 6 lands real battle
  data, these specific locations/subareas stay hidden by default rather
  than needing a follow-up edit.
- **Oreburgh Gym has no `encountersKey`** — it's a battle-only location
  (gym leader + trainers, no wild encounters), consistent with vanilla
  Platinum's own `oreburgh-gym.ts`. No `battles` array either, since
  Phase 6 hasn't started; the gym's Roark battle itself will be added
  once TRAiNERS data exists.
- **`oreburgh-city` here now holds the RP-specific Interviewer/Steven/
  fossil gifts** recorded during the encounters pass (not vanilla's
  `oreburgh-city-trade` content, which doesn't apply here since the
  RP sheet's Oreburgh City trade was one of the skipped/broken-link
  entries).

## Kalaay QoL patch applied on top of base RP (2026-08-17)

The user plays with an additional community QoL overlay patch (by "Kalaay",
for a Drayano-hacks gauntlet) stacked on top of base Renegade Platinum. Most
of it is emulator/UI QoL (PC menus, repels, instant friendship evos, IV
display shortcut, NPC shop items) with nothing for this app to model. The
parts that changed already-authored data:

- **Onix's evolution changed from `use-item`/Metal Coat to `level-up` 32**
  (`raw/pokemon-overrides.json`).
- **All Substitute TMs removed** — stripped the `{slug: 'substitute',
method: 'machine'}` learnset entry from all 488 species that had one
  (`raw/pokemon-overrides.json`). The 11 species that learn Substitute via
  level-up/tutor/egg instead were left untouched.
- **Frustration and Return are fixed 102 BP** instead of friendship-scaled —
  added overrides in `raw/moves-overrides.json` (`power: 102`, vanilla was
  `power: null`).
- **Static Beldum gift (Oreburgh City, from Steven) removed** from
  `encounters.ts`. Wild Cave-method Beldum encounters elsewhere are
  unaffected.
- **Static Lapras gift (Pastoria City, level 35) removed** from
  `encounters.ts`. Wild Surf-method Lapras encounters elsewhere are
  unaffected.
- **Happiny and Togepi removed from the Jubilife Trainer School egg's
  possible hatches** in `encounters.ts`. Their other wild/gift encounters
  elsewhere (e.g. Togepi's Eterna gift) are unaffected.
- **Manaphy egg gift (Mr. Backlot) removed entirely** from `encounters.ts`.

**Not changed, deliberately flagged as ambiguous rather than acted on**:
the patch also says starter distributors (Jubilife Interviewer, Rowan's
suitcase) now give one random starter instead of all three. The existing
`jubilife-city` Gift encounter list (Bulbasaur/Charmander/Squirtle, all
`chance: null`) already uses the same "here are the possible species, no
odds modeled" shape as a genuinely-random gift (see the Trainer School egg
gift, which is random and always used `chance: null` too) — there's no
clear signal the underlying data needs to change, since this app has no
mechanism to distinguish "certain, get-all" from "one random pick" in the
first place. Left as-is; revisit if the user wants this distinguished
somehow.

Everything else in the patch (Resist Berry NPC quantity, berry tree
yield/no-regrow, pokecenter shop NPCs, PC/repel/tutor QoL, instant
friendship evos, IV-checking shortcut, known crash bugs) has no
corresponding data in this app's model and was left alone.

## Encounters re-verified against a second, "completely correct" sheet source (2026-08-17)

The user supplied a second, independent spreadsheet
(`docs.google.com/spreadsheets/d/1UExH51A0xx2ktc0IkQY1x-vmfNb_Zjxm`,
gid `729957394`) and asked for `encounters.ts` to be cross-checked against
it end-to-end, treating it as ground truth. This tab stacks multiple ROM
hacks vertically in one sheet (not one tab per hack) — the Renegade
Platinum section runs from the `Renegade Platinum` header row to the
`Ren Plat End` sentinel row, with the same location-as-column-block /
method-as-row-block layout as the original sheet.

- **All 82 location blocks in this new sheet map onto locations we
  already have** — full coverage confirmed, nothing we track was found
  missing. The only sheet content with no home in our data is stuff
  already known to be out of scope (Route 224 — post-credits, deliberately
  excluded earlier) or not a wild-encounter table (Oreburgh Mining Museum
  fossils).
- **464 species+method level-range corrections applied** — the dominant
  finding, exactly as expected going in: we'd mostly recorded a single
  fixed level where the real game has a small range (e.g. `4-4` → `4-5`).
- **22 entries removed** that existed in our data with no corroboration
  anywhere in the new sheet (verified as genuine absences, not blank-cell
  parsing artifacts — see the gotcha below) — e.g. Roselia at Route 204
  North, Golduck/Psyduck at Route 209 Surf, Vespiquen at Fuego
  Ironworks/Route 218 Honey Tree, Dewgong/Lapras/Sealeo at the Pokémon
  League.
- **Great Marsh's Surf/Old Rod/Good Rod/Super Rod tables were added to all
  6 areas** (Wooper/Quagsire Surf, Magikarp/Barboach/Carvanha per rod
  tier, Gyarados/Whiscash/Sharpedo Super Rod) — previously only the
  Binoculars/grass table existed there (a known, flagged gap). Confirmed
  identical across all three area-pairs (1&2, 3&4, 5&6), same as their
  Binoculars tables are identical within a pair — but **the Binoculars
  species differ between pairs** (1&2: Bibarel/Quagsire/Tropius/Tangela/
  Carnivine; 3&4: Parasect/Exeggcute/Croagunk/Toxicroak/Kangaskhan/Yanma;
  5&6: Skorupi/Gulpin/Shroomish/Swalot/Breloom/Drapion) even though the
  new Surf/Rod table is the same across all six — don't assume a
  same-content assumption transfers from one method to another within the
  same location group.
- **Victory Road's two 1F-level keys were renamed and given real
  identities**: `sinnoh-victory-road-1fa` → `sinnoh-victory-road-1f`,
  `sinnoh-victory-road-1fb` → `sinnoh-victory-road-back` (matches the
  sheet's own "Victory Road 1F" vs. "Victory Road 1F (Back 1, 2, 3)"
  distinction — "back" is a separate connected area, not a second variant
  of the same 1F). `sinnoh-victory-road-back` was also missing its
  Surf/Rod table (Floatzel/Golbat Surf, Magikarp/Gyarados rods) — added.
  No location files reference either key yet (Victory Road hasn't reached
  the locations/splits phase), so the rename had no other call sites to
  update.
- **Route 219 Good Rod**: corrected Magikarp → Krabby (a genuine species
  swap, not a level issue).
- **Known extraction gotcha, cost real back-and-forth**: this sheet's
  Level column uses vertically-merged cells for many blocks, and **both
  the CSV export and the gviz JSON endpoint return a blank/`None` value
  for every row of a merge except silently — not just the anchor row full
  of real data like usual, the whole block can come back empty with no
  error.** This produced two distinct false positives that the user had
  to catch directly by eyeballing the live sheet UI:
    1. Species whose only sheet evidence was inside a blank-level block
       (e.g. Route 202's whole grass table, Lake Verity's Wynaut, Mt.
       Coronet B1F/R216 Entry) got misclassified as "genuinely absent from
       the sheet" by a first-pass diff, when they were actually present —
       just with no extractable level data. **Fix: before concluding a
       species is absent from this sheet, check for ANY entry (even
       blank-level) for that species/method/location, not just a
       level-bearing one.**
    2. Route 202 specifically: the sheet UI visually shows level 5 for its
       grass encounters, but this is not recoverable from any export
       (CSV or gviz) — the merge's underlying value cell genuinely returns
       empty via both APIs. Our existing data already had level 5 there
       and needed no change, but **this class of gap is invisible to
       automated diffing** — a location with a real level value in the UI
       that both export paths return as blank has to be caught by the
       user looking at the actual sheet, not assumed clean just because
       the diff script found nothing to flag.

## Other open questions to resolve when their phase comes up

- ~~Phase 5: map layout reuse vs. divergence from vanilla Platinum~~ —
  **resolved (2026-08-17): user confirmed real map reuse from vanilla
  Platinum.** All 17 of Roark's split locations that have a vanilla
  Platinum equivalent were swapped from placeholder gray PNGs to the
  real vanilla screenshot, matched **by `encountersKey`, not by
  filename/subarea name** — this caught a real mismatch at Oreburgh
  Mine, where RP's "1F"/"B1F" subarea names actually correspond to
  vanilla's "B1F"/"B2F" subareas once matched by key. Each location's
  `mapAnchor` was also updated to vanilla's real value (previously all
  `Center` as an arbitrary placeholder default).
    - **Sandgem Town** has no equivalent in this app's own vanilla
      Platinum dataset (a pre-existing gap in that game's data, not an
      RP-specific issue) — sourced directly from Bulbagarden Archives
      instead (`Sandgem_Town_Pt.png`, found via the archives wiki's
      `allimages` API with an `aiprefix` search, not the region-locator
      thumbnail that shows up on the main Bulbapedia article).
    - **Trainer School was wrongly assumed to be an RP-original location
      with no vanilla equivalent** — it's actually Jubilife City's real
      DPPt "Trainers' School" building interior, which this app's own
      vanilla Platinum dataset just never modeled as its own `Location`.
      Bulbapedia's own top-level "Trainers' School" image search only
      surfaces Alola's (SM/USUM) version — the real Sinnoh one lives at
      the disambiguated page `Trainers' School (Sinnoh)`, image
      `Trainers School interior DPPt.png`. **Lesson: before concluding a
      location has "no vanilla equivalent" and is ROM-hack-original,
      verify against Bulbapedia directly (including checking for a
      disambiguation page) rather than trusting an earlier session's
      unverified assumption** — this one was wrong and had been carried
      forward at face value for a while.
- Phase 8: how to derive badge-bit save conditions without a confirmed public decomp for this hack.
- Phase 10: no UI design decided yet for how the diff should actually be presented (badge? panel? both?) — needs its own discussion when we get there.

## ENCOUNTERS wiped and reset (2026-08-20)

`src/lib/data/renegade-platinum/encounters.ts` was fully cleared back to
`{}` — the user flagged the data a previous session had populated there as
unreliable. **Do not treat Phase 4 (see "Phase 4 methodology (ENCOUNTERS
tab)" above) as complete** — the methodology notes there are still valid
guidance for _how_ to re-derive the data, but the actual authored content
they describe no longer exists in the file and needs to be redone from
the sheet, verified more carefully this time before being treated as
trustworthy (e.g. cross-checked against a second source where one exists,
per the "Encounters re-verified against a second, 'completely correct'
sheet source" precedent below, rather than transcribed once and assumed
correct).

## Wrong tool reached for on Oreburgh Gym trainer battles (2026-08-23)

Asked to wire Oreburgh Gym's battles, the assistant invoked the
`gen4-trainer-data-extraction` skill and started pulling `pret/pokeplatinum`
decomp files (`map_headers.txt`, `trdata.json`-equivalent) and poking at
the DSPRE-unpacked ROM contents on the user's Desktop to find trainer IDs
— none of which applies here, because Renegade Platinum's trainer data is
a hand-edited hack roster that only exists in the sheet documented under
"Source of truth" → "Trainer battles" above, not in any ROM or decomp.
This had already been established and used correctly earlier in the same
session (Route 207, Oreburgh Mine). **User correction, forcefully**: for
this game, always go straight to the sheet; never touch ROM/decomp
extraction or that skill. Added a warning banner at the top of this doc
naming the wrong tool explicitly, plus a pointer at the "Trainer battles"
bullet itself, so this is checked before a skill is reached for, not after.
The correct source turned out to be the **Roark Split** tab (gid
`182366078`) of the trainer-battles workbook, which had Oreburgh City Gym's
full roster (2 Youngsters + Leader Roark) ready to transcribe directly.
