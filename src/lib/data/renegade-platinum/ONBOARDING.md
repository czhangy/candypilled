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

## Phase plan &amp; status

| Phase | Scope                                                                                                                   | Status                                                                                                                                                                                                                                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Spreadsheet recon (structure/tabs/shape only)                                                                           | ✅ Done — see above                                                                                                                                                                                                                                                                                        |
| 1     | `pokemon.ts` / raw `pokemon.json` — species stats/types/abilities/evolutions                                            | Not started                                                                                                                                                                                                                                                                                                |
| 2     | `moves.ts` — vanilla Platinum moves + sheet's changelog deltas                                                          | Not started                                                                                                                                                                                                                                                                                                |
| 3     | `items.ts` — item changes from iTEM/TMs tab                                                                             | Not started                                                                                                                                                                                                                                                                                                |
| 4     | `encounters.ts` — wild encounter tables (must land before locations exist — see onboard-new-game skill sequencing note) | Not started                                                                                                                                                                                                                                                                                                |
| 5     | `locations/*.ts` + `maps/*.png`                                                                                         | Not started — open question: does this hack reuse Platinum's map layouts, or change/add areas? Ask user before assuming reuse.                                                                                                                                                                             |
| 6     | `battles.ts` — trainer rosters from TRAiNERS tab, per-mon real IVs                                                      | Not started                                                                                                                                                                                                                                                                                                |
| 7     | New trainer classes (if any surface in TRAiNERS data not already in `trainer-classes.ts`)                               | Not started                                                                                                                                                                                                                                                                                                |
| 8     | `splits/*.ts` + save-condition derivation (badge bit indices)                                                           | Not started — gym order needs reconfirmation (see above); badge-bit source for save-condition detection is still unresolved (this hack isn't necessarily on a public decomp — the `gen4-trainer-data-extraction` skill's methodology may not directly apply; needs its own investigation once we get here) |
| 9     | Final assembly in `renegade-platinum.ts`, drop placeholder TODO comment                                                 | Not started                                                                                                                                                                                                                                                                                                |

Working piece-by-piece per the user's explicit request — do not batch
multiple phases into one pass without checking in between.

## Other open questions to resolve when their phase comes up

- Phase 5: map layout reuse vs. divergence from vanilla Platinum — ask, don't assume.
- Phase 8: how to derive badge-bit save conditions without a confirmed public decomp for this hack.
