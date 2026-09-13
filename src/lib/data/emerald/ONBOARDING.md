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

| Phase                                                           | Status                                       | Notes                                                                                                                                                         |
| --------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data folder scaffold (`src/lib/data/emerald/`)                  | not started                                  | dir created, empty except this doc                                                                                                                            |
| `GameVersionGroup.Emerald`, `GameName.Emerald` enum entries     | not started                                  |                                                                                                                                                               |
| `TrainerAssetFolder.Emerald` enum entry                         | not started                                  | `BadgeAssetFolder.Emerald` already exists                                                                                                                     |
| pokeemerald decomp clone + reference cache                      | **done** (2026-09-12)                        | `~/pokeemerald` (shallow clone) + `src/lib/data/references/gen3/pokeemerald/`                                                                                 |
| Personality/IV/nature/gender/ability formula verification       | **done** (2026-09-12)                        | confirmed identical to pokeruby's, independently re-derived from pokeemerald's own source — see cache's `personality_derivation.c`                            |
| Badge bit derivation                                            | **done** (2026-09-12)                        | see "Badge bits" section below — **values differ from Ruby/Sapphire's**, do not reuse `Gen3SplitParser`'s hardcoded constant as-is                            |
| `game-versions/emerald.ts` scraper config                       | **done** (2026-09-12)                        | bootstrapped from ruby.ts/sapphire.ts's exclusion list (same Hoenn location set); registered in `game-versions/index.ts`                                      |
| `encounters.ts` (via `pokeapi:encounters`)                      | **done** (2026-09-12)                        | 103 location keys, zero fetch warnings — see below                                                                                                            |
| Locations + maps scaffold                                       | not started                                  | map source confirmed: user-captured ProMap screenshots, saved to Desktop, location by location                                                                |
| Battles (`battles.ts` + placements)                             | not started                                  |                                                                                                                                                               |
| New trainer classes (if any)                                    | not started                                  | check `trainer-classes.ts` first                                                                                                                              |
| `splits/*.ts` + `saveCondition`s                                | **scaffolded** (2026-09-12), locations empty | 9 files created with `locations: []` — see below. Gym order: Roxanne → Brawly → Wattson → Flannery → Norman → Winona → Tate & Liza → Juan → champion Wallace. |
| `met-locations.ts`                                              | not started                                  |                                                                                                                                                               |
| `Gen3SplitParser.ts` fix for Emerald                            | **done** (2026-09-12)                        | `FLAG_SYS_GAME_CLEAR` now resolved per `game.version` via `FLAG_SYS_GAME_CLEAR_BY_VERSION`; `GameVersionGroup.Emerald` added to `enums.ts`                    |
| `Gen3SaveBlocks.ts` checksum-length re-verification for Emerald | not started                                  | still flagged as Ruby/Sapphire-specific, not yet fixed — see below                                                                                            |
| Assemble `Game` object + register in `games.ts`                 | not started                                  |                                                                                                                                                               |

## What's already pre-staged in the repo (found during kickoff, 2026-09-12)

Someone already prepped shared infrastructure for Emerald before this
onboarding started — confirmed still present, not yet wired to a `Game`:

- `public/badges/emerald/` — 9 badge icons (roxanne, brawly, wattson,
  flannery, norman, winona, tate-and-liza, juan, wallace). Note **both**
  juan.png and wallace.png exist, consistent with Emerald's real gym
  order (Juan is the Sootopolis gym leader, Wallace is champion).
  `BadgeAssetFolder.Emerald = 'emerald'` already exists in `enums.ts`.
- `public/trainers/emerald/` — a large trainer sprite set already
  populated (gym leaders, rivals, Team Aqua/Magma classes, generic
  classes). **`TrainerAssetFolder` has no `Emerald` member yet** — add one
  once we confirm (via content-hash diff) whether this folder's sprites
  are actually distinct from `ruby-sapphire`'s or happen to be identical
  and could just point at that folder instead. Don't assume from the
  folder's mere existence that it's already correct/complete — diff it
  before trusting it, same as any other asset-reuse decision.
- `public/pokemon/emerald/` + `pokemon.json` — every species already has
  an `"emerald"` sprite path populated, and moves data already carries
  `"versionGroup": "emerald"` entries. This looks like generic
  infrastructure (built once, covers every version group) rather than
  Emerald-specific work — verify a handful of paths actually resolve to
  real files before relying on it.
- `public/logos/emerald.png` (and, unrelated to this task,
  `emerald-kaizo.png` — a hack logo, out of scope here).
- `src/lib/scripts/pokeapi/pokemon.ts` already lists
  `{ id: 'emerald', label: 'Emerald', generation: 3 }` in its sprite/version
  config.

**Not yet present** (real work still to do): `game-versions/emerald.ts`
(encounter-scraper config — Ruby/Sapphire's is not reusable verbatim,
audit every field per the skill's variant-bootstrapping guidance even
though Emerald isn't a variant of R/S), the `src/lib/data/emerald/` data
folder itself, the pokeemerald decomp clone/reference cache, and
`GameVersionGroup.Emerald` / `GameName.Emerald` / `TrainerAssetFolder.Emerald`
enum members.

## Decomp reference

- Clone `https://github.com/pret/pokeemerald` locally (mirror of how
  `~/pokeruby` was cloned for the Ruby/Sapphire onboarding) — not yet
  present on this machine.
- Cache the same file set `gen3-trainer-data-extraction` used for pokeruby,
  under a new `src/lib/data/references/gen3/pokeemerald/` directory:
  `trainers_en.h`, `trainer_parties.h`, `battle_setup.h`, `base_stats.h`,
  `constants_trainers.h`, `constants_flags.h`, `charmap.txt`,
  `personality_derivation.c`.
- **Verify independently, don't assume parity with pokeruby**: struct
  shapes, the IV/personality-hash formula, and badge bit order/gym-features
  source file may differ — the skill explicitly flags this game pair as
  divergent enough to warrant re-verification.
- Badge bit order: pokeemerald's own generated constants (equivalent of
  `pokeruby`'s `include/constants/flags.h` `FLAG_BADGE0N_GET` list) and
  main-story-cleared flag (`FLAG_SYS_GAME_CLEAR` or equivalent) — don't
  assume identical bit indices to pokeruby without checking, especially
  since Emerald's Sootopolis gym leader differs from Ruby/Sapphire's.

## Decomp reference cache (done)

Cloned `https://github.com/pret/pokeemerald` (shallow) to `~/pokeemerald`.
Cached the following into `src/lib/data/references/gen3/pokeemerald/`
(filenames match the source repo's own, which differ from pokeruby's
cache naming in a few places — noted below):

- `trainers.h` (pokeemerald's name for what pokeruby's cache calls
  `trainers_en.h`) — every `struct Trainer` entry, from
  `src/data/trainers.h`.
- `trainer_parties.h` — every trainer's party array, from
  `src/data/trainer_parties.h`.
- `data.h` — **structural divergence from pokeruby**: the four
  `TrainerMon*` struct shapes, the `Trainer`/`TrainerMonPtr` union, and
  the `NO_ITEM_DEFAULT_MOVES`-style macros all live in `include/data.h`
  here, not in a separate `battle_setup.h` like pokeruby. Confirmed by
  reading the source, not assumed.
- `species_info.h` (pokeemerald's name for what pokeruby's cache calls
  `base_stats.h`) — `gSpeciesInfo[]`, from
  `src/data/pokemon/species_info.h`. Holds `genderRatio` and
  `abilities[2]` per species, same fields pokeruby's `gBaseStats` held,
  just renamed/restructured.
- `constants_trainers.h` — from `include/constants/trainers.h`
  (`F_TRAINER_PARTY_*`, `F_TRAINER_FEMALE`, `TRAINER_ENCOUNTER_MUSIC_*`).
- `constants_flags.h` — from `include/constants/flags.h` (badge flags,
  `FLAG_SYS_GAME_CLEAR`, etc. — see "Badge bits" below for why the actual
  numeric values differ from pokeruby's despite identical macro names).
- `charmap.txt` — from the repo root, for name-hash text encoding.
- `personality_derivation.c` — curated excerpts of
  `CreateNPCTrainerParty` (`src/battle_main.c`) and
  `GetNatureFromPersonality`/`GetGenderFromSpeciesAndPersonality`/
  `GetAbilityBySpecies`/the IV-assignment block of `CreateBoxMon`
  (`src/pokemon.c`). **Verified independently against pokeemerald's own
  source**: the nameHash/personality-value construction, the
  `iv * 31/255` fixedIV scale, nature (`personality % 25`), gender
  (compare `personality & 0xFF` against `genderRatio`), and ability
  (`personality & 1` when a second ability exists) formulas all turned
  out identical to pokeruby's — confirmed, not assumed.

## Badge bits (done, but a real divergence from Ruby/Sapphire — read before touching Gen3SplitParser)

**`SYSTEM_FLAGS` is NOT the same absolute value in pokeemerald as in
pokeruby**, because it's defined as `TRAINER_FLAGS_END + 1` and Emerald has
more trainers than Ruby/Sapphire, shifting every flag defined relative to
it:

- pokeruby: `SYSTEM_FLAGS = 0x800` (`NUMBER_OF_TRAINERS = 693`)
- pokeemerald: `SYSTEM_FLAGS = 0x860` (`TRAINER_FLAGS_START 0x500` +
  `MAX_TRAINERS_COUNT - 1` = `TRAINER_FLAGS_END = 0x85F`)

Gym-badge grant verified directly per-gym from each gym map's
`scripts.inc` (`setflag FLAG_BADGE0N_GET` line) — city order matches the
user-confirmed gym order exactly:

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

**Fixed (2026-09-12)**: `Gen3SplitParser.ts` no longer hardcodes a single
`FLAG_SYS_GAME_CLEAR` — it now resolves it per `game.version` via a
`FLAG_SYS_GAME_CLEAR_BY_VERSION: Partial<Record<GameVersionGroup, number>>`
map (`0x804` for `RubySapphire`, `0x864` for the newly-added
`GameVersionGroup.Emerald`), throwing if a game's version has no entry.
When Emerald's `splits/*.ts` are authored, each gym split's
`saveCondition` still just takes the absolute flag number directly (2151-
2158 from the table above), same as Ruby/Sapphire's splits do today.

**Still open, not yet fixed**: `Gen3SaveBlocks.ts`'s `CHECKSUM_LENGTHS`
table carries a comment flagging itself as "Ruby/Sapphire-specific;
re-verify for other Gen III games" — checked pokeemerald's `src/save.c`
(`sSaveSlotLayout`/`SAVEBLOCK_CHUNK`) enough to confirm per-sector sizes
are derived from `sizeof(struct SaveBlock1)`/`sizeof(struct SaveBlock2)`,
which can plausibly differ from Ruby/Sapphire's (Emerald's save structs
carry more data — e.g. Battle Frontier records), but did **not** pin down
the actual per-sector byte counts — that requires either computing
`sizeof` from the full struct definitions or an emulator/real save file
to inspect. Don't trust save-import for Emerald until this is resolved;
flag to the user before it's needed (i.e. before wiring up save-based
split detection for Emerald).

## Confirmed by user (2026-09-12)

- Gym/split order: Roxanne → Brawly → Wattson → Flannery → Norman → Winona
  → Tate & Liza → Juan → champion Wallace (matches the badge-bit-verified
  order derived independently from the decomp above).
- Battle Frontier (and by extension Trainer Hill/Rank Hall) is **out of
  scope** — splits stop at the champion, matching how deep Ruby/Sapphire's
  own splits go.

## Encounters (done, 2026-09-12)

`game-versions/emerald.ts` bootstrapped from `ruby.ts`/`sapphire.ts`'s
exclusion list (Battle Frontier confirmed out of scope, matching the
user's decision above). Verified the starter handoff independently before
reusing it: queried `hoenn-route-101-area` directly against PokeAPI and
confirmed treecko/torchic/mudkip appear there for Emerald with raw method
`gift`, same shape as Ruby/Sapphire, so the same `methodOverrides` entries
apply unchanged.

Ran `npm run pokeapi:encounters emerald` — **zero "No encounters" warnings
against the inherited exclusion list**, meaning every location PokeAPI
serves for Emerald that isn't explicitly excluded returned real data on
the first pass. Wrote `src/lib/data/emerald/encounters.ts` (103 location
keys) via a throwaway conversion script (raw JSON → `EncounterMethod.*`
enum refs, matching the skill's mechanical-conversion step), then deleted
the script and the raw `encounters/encounters.json` output. `npx tsc
--noEmit` passes clean.

One structural note worth remembering for locations/battles authoring:
Emerald's fetch surfaced `team-aqua-hideout` and `team-magma-hideout` as
two distinct, real, non-excluded locations (both teams' full hideouts
exist unconditionally in Emerald), unlike Ruby/Sapphire where only one
team's hideout exists per cartridge under the single `magma-hideout` slug
(inherited into this config's exclusion list, but it's simply a dead/
irrelevant entry for Emerald now, not a bug — the real Emerald slugs
weren't excluded and came through fine).

**Not yet done**: the full bidirectional dead-key audit (every
`encountersKey` used by a location resolves to real data, and every
`ENCOUNTERS` key is actually used by some location) has to wait until
locations are scaffolded, since it depends on `locations/*.ts` existing.

## Splits (scaffolded, 2026-09-12 — locations still empty)

Created `src/lib/data/emerald/splits/*.ts`, one file per split, each a
plain `Split` with `locations: []` (to be filled in as locations get
scaffolded from map captures) and the correct `saveCondition` per the
badge-bit table above:

- `roxanne.ts`, `brawly.ts`, `wattson.ts`, `flannery.ts`, `norman.ts`,
  `winona.ts`, `tate-and-liza.ts` — same names/gym mapping as
  Ruby/Sapphire, `{ type: 'badge', bit: <emerald value> }`.
- `juan.ts` — **replaces** Ruby/Sapphire's `wallace.ts` (Sootopolis gym
  split); Juan is Emerald's Sootopolis gym leader. `{ type: 'badge', bit:
2158 }`.
- `wallace.ts` — **replaces** Ruby/Sapphire's `steven.ts` (champion
  split); Wallace is Emerald's champion. `{ type: 'gameClear' }`.

Note: Ruby/Sapphire's own `winona.ts`/`tate-and-liza.ts` are exported as
functions (`getWinona(hideout)`/`getTateAndLiza(hideout)`) taking the
version-specific team hideout `Location` as a parameter, since only one
team's hideout exists per R/S cartridge. That parameterization is **not**
needed for Emerald's `winona.ts`/`tate-and-liza.ts` — both team hideouts
(`team-aqua-hideout`, `team-magma-hideout`) exist unconditionally per the
encounters fetch above, so these are plain `Split` objects once their
`locations` arrays get filled in.

Also fixed a pre-existing inconsistency rather than copying it forward:
Ruby/Sapphire's `steven.ts` (champion split) uses
`{ type: 'badge', bit: 2052 }` instead of the `{ type: 'gameClear' }` the
`SplitSaveCondition` type and `Gen3SplitParser` actually intend for a
champion split (works by coincidence since `bit: 2052` happens to equal
that game's `FLAG_SYS_GAME_CLEAR`, but doesn't match Platinum's own
`cynthia.ts`, which correctly uses `{ type: 'gameClear' }`). Emerald's
`wallace.ts` uses the correct `{ type: 'gameClear' }` form instead of
replicating that quirk.

## Confirmed by user (2026-09-12, cont'd)

- **Map source**: the user is capturing ProMap screenshots themselves,
  location by location, saving each to their Desktop as they go — not a
  DSPRE stitch job. So the map-authoring loop per location is: user
  captures + drops a PNG on their Desktop → tell us the location → we
  move/crop it into `src/lib/data/emerald/maps/<map-slug>.png` and run
  `npm run gen:location` per the skill's normal flow. No stitching-skill
  invocation needed unless a location turns out to be a multi-chunk
  capture.

## Open questions / decisions still needed from the user

1. **Battle/trainer roster source**: same collaborative loop as any other
   game — user supplies, per location, trainer names + order + IVs (IVs
   can instead be pulled straight from the now-cached decomp per the
   extraction skill) + `BattleMetadata`; x/y always asked, never guessed.
2. **Confirm asset reuse only after diffing**: do NOT assume
   `public/trainers/emerald/` or `public/pokemon/emerald/` are correct or
   complete without spot-checking; flag any missing sprite (e.g. a new
   trainer class Emerald introduces that isn't in the pre-staged folder)
   back to the user with what sprite file is needed at what path.
3. **`Gen3SaveBlocks` checksum-length fix**: still open, see above —
   needs pinning down Emerald's actual per-sector save struct sizes
   before save-import can be trusted for this game.

## Per-case confirmed-facts table

(Empty — populate as recurring judgment calls, e.g. trainer-class fixed
genders, get confirmed during battle authoring.)
