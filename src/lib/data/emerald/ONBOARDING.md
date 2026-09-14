# Emerald onboarding

Vanilla, single-version game (per `onboard-new-game`). **Not** grouped with
`ruby-sapphire` — the user explicitly confirmed when `ruby-sapphire` was
onboarded that Ruby/Sapphire and Emerald are "meaningfully different"
(different Sootopolis gym leader/champion — Juan gyms, Wallace becomes
champion instead of Steven — plus Battle Frontier, story/route changes).
Treat every fact (encounters, trainer rosters, IVs, badge bits, save
layout, map art) as independently sourced from Emerald's own decomp/PokeAPI
version, never copied from `ruby-sapphire`.

## Status

| Phase                                                                                   | Status                                                                                                                                                                                                                                               | Notes                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GameVersionGroup.Emerald`/`GameName.Emerald`/`TrainerAssetFolder.Emerald` enum entries | **done**                                                                                                                                                                                                                                             | `BadgeAssetFolder.Emerald` pre-existed; the other three were added during this onboarding.                                                                                                      |
| pokeemerald decomp clone + reference cache                                              | **done**                                                                                                                                                                                                                                             | `~/pokeemerald` (shallow clone) + `src/lib/data/references/gen3/pokeemerald/` — see "Decomp reference cache" below.                                                                             |
| Personality/IV/nature/gender/ability formula verification                               | **done**                                                                                                                                                                                                                                             | Confirmed identical to pokeruby's, independently re-derived from pokeemerald's own source.                                                                                                      |
| Badge bit derivation                                                                    | **done**                                                                                                                                                                                                                                             | See "Badge bits" below — values differ from Ruby/Sapphire's; `Gen3SplitParser.ts` fixed to resolve per-game.                                                                                    |
| `game-versions/emerald.ts` scraper config + `encounters.ts`                             | **done**                                                                                                                                                                                                                                             | 103 location keys, zero fetch warnings.                                                                                                                                                         |
| `Gen3SaveBlocks.ts` checksum-length re-verification for Emerald                         | **not started**                                                                                                                                                                                                                                      | Still flagged as Ruby/Sapphire-specific — see "Open items" below. Don't trust save-import for Emerald until resolved.                                                                           |
| `Game` object assembled + registered in `games.ts`                                      | **done**                                                                                                                                                                                                                                             | Registered early (before locations/battles were complete) once encounters were in, per user request.                                                                                            |
| Locations + maps (Roxanne split)                                                        | **14/14 done — Roxanne split fully wired.** Littleroot Town, Route 101, Oldale Town, Route 103, Route 102, Petalburg City, Route 104 (South+North), Petalburg Woods, Rustboro City, Route 115 (South+North), Route 116, Rusturf Tunnel, Rustboro Gym | Next: start the Brawly split's own location list (locations already placed early via `split` gating — Route 103/116/Rusturf Tunnel non-rival trainers — still need the rest of Brawly's route). |
| Battles (`battles.ts` + placements)                                                     | **52 wired** across Route 103, Route 102, Route 104, Petalburg Woods, Rustboro City, Route 115, Route 116, Rusturf Tunnel, Rustboro Gym                                                                                                              | —                                                                                                                                                                                               |
| Remaining splits (Brawly onward) + `met-locations.ts`                                   | **not started**                                                                                                                                                                                                                                      | `Game.battles`/`metLocationById` still have placeholder gaps outside what's listed above.                                                                                                       |
| New trainer classes                                                                     | **none needed so far**                                                                                                                                                                                                                               | Every class encountered has existed in the shared `trainer-classes.ts` already.                                                                                                                 |

## Per-location workflow (established, use this every time)

This is the loop for every remaining location, driven by the user's own
capture-as-you-go process:

1. **I prompt for the next location by name**, in the confirmed split
   order (see "Roxanne split location order" below).
2. **The user captures the map (Porymap/"ProMap" screenshot) and saves it
   to their Desktop.** For a gendered location (map art differs by
   player gender, e.g. showing the opposite-gender rival), they provide
   two files.
3. **I wire the map + location + split immediately — before asking
   anything else.** Copy the PNG(s) into `src/lib/data/emerald/maps/`,
   run `npm run gen:location`, set `mapAnchor` (see the per-case rule
   below) and `encountersKey`, and add the location to its split's
   `locations` array. The user answers position questions by looking at
   the location rendered in the actual app, so nothing can be asked
   before this step exists.
4. **I extract the trainer roster and battle data from the decomp** —
   `data/maps/<Map>/scripts.inc` for which `trainerbattle_*` calls exist
   and their trainer constants, then `trainers.h`/`trainer_parties.h` for
   team composition (species/level/raw IV), then the personality-hash
   formula (see `personality_derivation.c` in the reference cache) to
   independently compute each mon's fixed IV/nature/gender/ability.
   Bulbapedia is used only as a starting pointer (which trainers to look
   for, roughly what teams look like) — the decomp is authoritative and
   has caught real Bulbapedia mistakes (see "Per-location findings" case
   studies below). Never trust Bulbapedia's account of battle _structure_
   (Double/Tag pairings) without checking `trainerbattle_single` vs.
   `trainerbattle_double` in the actual scripts.
5. **I compute x/y from decomp tile coordinates** when the capture's
   pixel dimensions exactly match that map's decomp layout size (see
   "Decomp-derived x/y" below for the method and its current known
   correction factor) — otherwise I ask the user directly. Either way,
   the user gets a chance to correct the result after seeing it rendered.
   5a. **A location's `battles: []` array is ordered to match Bulbapedia's
   own trainer-table order for that location** (fetched fresh per
   location, top-to-bottom) — not decomp tile order, not by-eye map
   position. For a subarea-split location, keep the South/North (or
   equivalent) structural split as decomp-verified, but order _within_
   each subarea by where those trainers fall in Bulbapedia's overall
   list. If Bulbapedia's fetch looks unreliable for Emerald specifically
   (e.g. it just echoes Ruby/Sapphire's structure and contradicts
   already-confirmed decomp facts — happened once, see Route 104 in
   "Per-location findings" below), don't force a reorder from bad data;
   leave the existing order and note why.
6. **I list the trainers to the user and ask for `BattleMetadata` —
   every time, with no default, no pattern-matching from earlier
   answers, and never presented as "confirm this."** This has been
   gotten wrong twice already this onboarding; treat it as a hard rule.
7. Once `BattleMetadata` is confirmed, write `battles.ts` + the
   location's battle markers, run `tsc`/ESLint/Prettier. **Only delete
   the source screenshot(s) from the Desktop after this step — not
   sooner.** Got burned once (Route 115): deleted the source right after
   placing markers, before metadata was confirmed, then needed to
   re-crop the map and nearly had no source left (recovered only because
   a wider subarea crop still happened to contain the needed pixels).
   The location isn't "fully wired" — and the source isn't safe to
   delete — until metadata is in and nothing about the map/crop is still
   possibly in flux.

## Roxanne split location order (identical to Ruby/Sapphire's, confirmed by user)

Only the location _list and order_ is copied from
`ruby-sapphire/splits/roxanne.ts` — map art, encounters, and battle
placements are independently sourced from Emerald's own capture/decomp
every time, per the "games are independent" rule:

1. Littleroot Town — done
2. Route 101 — done
3. Oldale Town — done
4. Route 103 — done
5. Route 102 — done
6. Petalburg City — done
7. Route 104 (South subarea) — done
8. Petalburg Woods — done
9. Route 104 (North subarea, revisited) — done
10. Rustboro City — done
11. Route 115 — done
12. Route 116 — done
13. Rusturf Tunnel — done
14. Rustboro Gym — done

Battle Frontier (and Trainer Hill/Rank Hall) is confirmed **out of
scope** — splits stop at the champion, matching how deep Ruby/Sapphire's
own splits go.

## Per-case confirmed-facts table

- **`mapAnchor`**: for any Emerald location with a corresponding
  `ruby-sapphire` location, use that R/S location's own `mapAnchor` value
  verbatim (confirmed by user) — check the R/S file each time rather than
  guessing from memory. Only ask the user directly for a location with
  **no** R/S counterpart (Emerald-only content, e.g. anything inside Team
  Aqua/Magma's now-unconditional hideouts, or a location whose
  subarea/map structure diverges from R/S's).
- **Subarea order in a split location's `subareas: []` array**: always
  match R/S's own order for that location (e.g. South before North for
  Route 104 and Route 115) — check the R/S file's array order every time,
  don't default to alphabetical or capture order. Got this wrong once for
  Route 115 (wrote North first) after having gotten it right for Route
  104; user caught it and had to ask why the standard wasn't followed.
- **Subarea crop boundaries don't have to match R/S's pixel-for-pixel**,
  and subareas are allowed to overlap — when R/S's own North+South
  heights don't sum to Emerald's actual capture height (confirmed
  happening at least once already, Route 115), pick a clean boundary from
  the decomp's own trainer-free gap instead, and extend/overlap subareas
  as needed for good visual framing rather than forcing a strict split.

## Badge bits (real divergence from Ruby/Sapphire)

**`SYSTEM_FLAGS` is NOT the same absolute value in pokeemerald as in
pokeruby**, because it's defined as `TRAINER_FLAGS_END + 1` and Emerald
has more trainers than Ruby/Sapphire, shifting every flag defined
relative to it:

- pokeruby: `SYSTEM_FLAGS = 0x800` (`NUMBER_OF_TRAINERS = 693`)
- pokeemerald: `SYSTEM_FLAGS = 0x860` (`TRAINER_FLAGS_START 0x500` +
  `MAX_TRAINERS_COUNT - 1` = `TRAINER_FLAGS_END = 0x85F`)

Gym-badge grant verified directly per-gym from each gym map's
`scripts.inc` (`setflag FLAG_BADGE0N_GET` line):

| Gym (city) | Leader      | Flag macro         | Absolute flag # (hex) | Absolute flag # (dec) |
| ---------- | ----------- | ------------------ | --------------------- | --------------------- |
| Rustboro   | Roxanne     | `FLAG_BADGE01_GET` | 0x867                 | 2151                  |
| Dewford    | Brawly      | `FLAG_BADGE02_GET` | 0x868                 | 2152                  |
| Mauville   | Wattson     | `FLAG_BADGE03_GET` | 0x869                 | 2153                  |
| Lavaridge  | Flannery    | `FLAG_BADGE04_GET` | 0x86A                 | 2154                  |
| Petalburg  | Norman      | `FLAG_BADGE05_GET` | 0x86B                 | 2155                  |
| Fortree    | Winona      | `FLAG_BADGE06_GET` | 0x86C                 | 2156                  |
| Mossdeep   | Tate & Liza | `FLAG_BADGE07_GET` | 0x86D                 | 2157                  |
| Sootopolis | Juan        | `FLAG_BADGE08_GET` | 0x86E                 | 2158                  |

Champion split (Wallace) uses `FLAG_SYS_GAME_CLEAR` = `SYSTEM_FLAGS + 0x4`
= **0x864 (2148)** — different from pokeruby's 0x804 (2052).

`Gen3SplitParser.ts` no longer hardcodes a single `FLAG_SYS_GAME_CLEAR`
— it resolves it per `game.version` via a `FLAG_SYS_GAME_CLEAR_BY_VERSION`
map (`0x804` for `RubySapphire`, `0x864` for `Emerald`). Each gym split's
`saveCondition` just takes the absolute flag number directly from the
table above; the champion split (`wallace.ts`) correctly uses
`{ type: 'gameClear' }` (Ruby/Sapphire's own `steven.ts` uses a
`{ type: 'badge', bit: 2052 }` workaround instead — a pre-existing
inconsistency in that file that Emerald's `wallace.ts` does not copy).

## Decomp reference cache

Cloned `https://github.com/pret/pokeemerald` (shallow) to `~/pokeemerald`.
Cached into `src/lib/data/references/gen3/pokeemerald/` (filenames match
the source repo's own, which differ from pokeruby's cache naming in a
few places):

- `trainers.h` — every `struct Trainer` entry (pokeruby's cache calls the
  equivalent file `trainers_en.h`).
- `trainer_parties.h` — every trainer's party array.
- `data.h` — **structural divergence from pokeruby**: the four
  `TrainerMon*` struct shapes and the `Trainer`/`TrainerMonPtr` union
  live in `include/data.h` here, not a separate `battle_setup.h`.
- `species_info.h` — `gSpeciesInfo[]` (pokeruby's cache calls the
  equivalent `base_stats.h`), holding `genderRatio`/`abilities[2]` per
  species.
- `constants_trainers.h`, `constants_flags.h`, `charmap.txt` — from the
  matching `include/constants/*.h` files and the repo-root charmap.
- `personality_derivation.c` — curated excerpts of `CreateNPCTrainerParty`
  (`src/battle_main.c`) and `GetNatureFromPersonality`/
  `GetGenderFromSpeciesAndPersonality`/`GetAbilityBySpecies`/the
  IV-assignment block of `CreateBoxMon` (`src/pokemon.c`). Verified
  independently against pokeemerald's own source: nameHash/personality
  construction, `iv * 31/255` fixedIV scale, nature (`personality % 25`),
  gender, and ability formulas all turned out identical to pokeruby's.

To extend this cache for a new lookup (badge grants, a new trainer,
another map's layout), go straight to `~/pokeemerald`'s own source —
don't assume a fact from pokeruby's cache carries over.

## Decomp-derived x/y (technique + current correction estimate)

For a location whose capture image's pixel dimensions exactly match its
decomp layout's `width`/`height` (metatiles) × 16px — check
`data/layouts/layouts.json`'s entry for that `LAYOUT_*` id against the
capture's actual pixel size — each trainer's object-event tile coordinate
(`data/maps/<Map>/map.json`'s `object_events[].x`/`.y`) converts to a
marker position: `pixel = tile * 16 + 8` (tile center) minus a small
correction, then `percent = pixel / imageDimension * 100`. For a subarea
crop, subtract the crop's own pixel offset first.

**Correction factor, still being refined**: the raw `tile*16+8` formula
renders slightly too high. The true cause is almost certainly a fixed
_pixel_ offset (plausibly the NPC sprite's 32px-tall anchor vs. the 16px
tile-center the formula assumes) — which means the right percentage
correction is `-pixels / thatMap'sHeightPx * 100`, different for every
map depending on its height. **Current best pixel estimate: ~2-3px.**
Do not reuse a past location's flat percentage-point correction on a
map of a different height — recompute from the pixel estimate each time,
and keep refining that estimate as more locations get corrected by the
user.

**When markers land badly wrong (not just slightly high/low), suspect
tile mis-identification before the correction factor.** Object events
can cluster at similar coordinates (an ambush/ally NPC sitting right next
to the actual trainerbattle trigger) — picking the one whose
`graphics_id` superficially matches the trainer's faction/sprite isn't
enough. Trace the actual triggering event/script when candidates
cluster.

**Verify per location, every time** — don't assume the pixel-exact match
holds universally. If the capture's pixel size doesn't exactly match the
layout dimensions (extra border, an off-map buffer), fall back to asking
the user for x/y directly rather than computing from a mismatched scale.

## Per-location findings (case studies worth remembering)

- **Route 103**: Bulbapedia's wording ("may trigger a Double Battle
  together") for Swimmer Isabelle/Pete and Black Belt Rhett/Guitarist
  Marcos was misleading — the decomp's `scripts.inc` wires all four as
  independent `trainerbattle_single` calls, not a Tag/TrueDouble pairing.
  Twins Amy & Liv, by contrast, is a genuine `trainerbattle_double`.
  Also: Daisy's Emerald team is Shroomish + Roselia (two mons), not just
  Roselia like her R/S counterpart. `BattleData.split` is used to gate a
  battle's marker to when it's actually reachable (`'Brawly'` for most of
  Route 103's non-rival trainers, `'Winona'` for the two Swimmers, since
  Surf isn't available until around then) — the location itself is
  listed in all three splits' `locations` arrays so it's navigable from
  each.
- **Route 104**: single continuous map in the source game (not a
  North/South pair) — the app-level subarea split is a UI/staging
  decision, kept because the same Cut-tree gate still exists. Trainer
  North/South placement genuinely differs from Ruby/Sapphire (Winston
  and Cindy are swapped — confirmed both from decomp tile coordinates
  and independently from Bulbapedia's own wikitext). Fisherman Darian
  (South, Magikarp Lv.9) is new, no R/S counterpart. This is also where
  the "second rival battle" lead below was first spotted.
- **Rustboro City**: Emerald's second rival battle happens here, not at
  Lilycove like Ruby/Sapphire — confirmed via
  `RustboroCity/scripts.inc`'s `TRAINER_BRENDAN_RUSTBORO_*`/
  `TRAINER_MAY_RUSTBORO_*` battles. Wired as
  `pkmn-trainer-brendan-rustboro`/`pkmn-trainer-may-rustboro`.
- **Petalburg Woods**: the x/y "landed wrong" case that turned out to be
  a mis-identified object event, not the pixel-correction estimate —
  see "Decomp-derived x/y" above.
- **Trainer-order audit (2026-09, all locations wired so far)**: retroactively
  reordered every location's `battles: []` array to match Bulbapedia's own
  trainer-table order (previously ordered by decomp tile position or
  by-eye map placement, which don't necessarily match). Route 103, Route
  102, Petalburg Woods, Route 116, Route 115 (within each subarea), and
  Rustboro Gym were all reordered. **Route 104 was deliberately left
  unchanged** — its Bulbapedia fetch just echoed Ruby/Sapphire's own
  South/North trainer split (2 South, 4 North) and didn't even mention
  Darian, contradicting the decomp-verified facts already confirmed for
  that location (Winston/Cindy swapped, Darian exists) — a clear case of
  the "don't trust a summarization fetch over confirmed primary-source
  facts" rule. Rustboro City wasn't affected (rival-only, nothing to
  order).

## Open items

1. **`Gen3SaveBlocks.ts` checksum-length fix** — its `CHECKSUM_LENGTHS`
   table is flagged as Ruby/Sapphire-specific. Confirmed (via
   `src/save.c`'s `sSaveSlotLayout`/`SAVEBLOCK_CHUNK`) that per-sector
   sizes derive from `sizeof(struct SaveBlock1)`/`sizeof(struct SaveBlock2)`,
   which can plausibly differ from Ruby/Sapphire's (Emerald's save
   structs carry more data, e.g. Battle Frontier records) — but the
   actual per-sector byte counts haven't been pinned down. Don't trust
   save-import for Emerald until this is resolved.
2. **Asset reuse spot-checks**: `public/trainers/emerald/` and
   `public/pokemon/emerald/` were pre-staged before this onboarding
   started and have held up well so far (content-hash diffing confirmed
   `TrainerAssetFolder.Emerald` needs its own folder, distinct from
   Ruby/Sapphire's). Still flag any missing sprite immediately (e.g. a
   new trainer class Emerald introduces that isn't in the pre-staged
   folder) rather than assuming coverage is complete.
3. **`met-locations.ts`** not yet started — needs the normal
   cross-reference-against-an-already-onboarded-game's-subset approach
   once enough locations exist to make that meaningful.
