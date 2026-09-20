# Emerald onboarding

Vanilla, single-version game (per `onboard-new-game`). **Not** grouped
with `ruby-sapphire` — treat every fact (encounters, trainer rosters,
IVs, badge bits, save layout, map art) as independently sourced from
Emerald's own decomp/PokeAPI, never copied from `ruby-sapphire`. Splits
stop at the champion (Wallace) — Battle Frontier/Trainer Hill is out of
scope.

## Status

| Phase                                         | Status                                                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Enums, decomp clone, formula verification     | done                                                                                                                                |
| Badge bit table + `Gen3SplitParser.ts`        | done — see "Badge bits" below                                                                                                       |
| `encounters.ts`                               | done                                                                                                                                |
| `Gen3SaveBlocks.ts` checksum fix              | **not started** — don't trust save-import until resolved                                                                            |
| `Game` object + `games.ts`                    | done                                                                                                                                |
| Roxanne split (14 locations)                  | **done**                                                                                                                            |
| Brawly split (21 locations)                   | **done**                                                                                                                            |
| Wattson split                                 | **done** — matches R/S's Wattson list verbatim (user confirmed)                                                                     |
| Flannery split                                | **in progress** — 10/20 R/S locations wired; next new location: Fallarbor Town                                                      |
| Norman/Winona/Tate & Liza/Juan/Wallace splits | **not started** (Trick House/Route 111/Route 118 already gate battles into some of these — see their locations' own `split` fields) |
| `battles.ts`                                  | 181 wired (9 solo Route 113 entries + 1 merged Lawrence/Lung Double entry)                                                          |
| `met-locations.ts`                            | not started                                                                                                                         |
| New trainer classes needed                    | none so far                                                                                                                         |

## Per-location workflow

1. I prompt for the next location by name, in confirmed split order.
2. User captures the map into `~/pokeemerald` (check
   `find ~/pokeemerald -maxdepth 1 -iname "*.png"`); two files if gendered.
3. **Wire map + location + split immediately, before asking anything.**
   Copy PNG(s) to `src/lib/data/emerald/maps/`, `npm run gen:location`,
   set `mapAnchor`/`encountersKey`, add to the split's `locations` array.
4. Extract trainer roster/team data from decomp
   (`scripts.inc` → `trainers.h`/`trainer_parties.h` → personality-hash
   formula for IV/nature/gender/ability). Bulbapedia is only a pointer —
   decomp is authoritative, especially for Double/Tag battle structure
   (`trainerbattle_single` vs `_double` in scripts.inc; Bulbapedia's
   "may trigger a Double Battle" wording has been wrong more than once).
5. Compute x/y from decomp tile coords when capture pixel dims exactly
   match the layout size (see "Decomp-derived x/y" below); else ask.
   5a. **Order `battles: []` to match Bulbapedia's own table order**
   (fetch fresh, raw wikitext, correct game section) — not decomp tile
   order. Do this as its own explicit step even when the rest of the
   location felt "done" after the harder decomp work.
6. List trainers and ask for `BattleMetadata` — **every time, no
   default, never pre-filled as "confirm this," even when another
   version's data has the identical trainer set.** Hard rule, violated
   multiple times already — see memory.
7. Once metadata is confirmed, write `battles.ts`, run
   `tsc`/ESLint/Prettier, **then** delete the source screenshot(s) — not
   before, in case the crop/map needs revisiting.

## Roxanne split (done)

Location list/order copied from `ruby-sapphire/splits/roxanne.ts`; map
art/encounters/battles independently sourced. All 14 locations done —
see `roxanne.ts`.

## Brawly split (done)

Rustboro City, Route 116, Rusturf Tunnel, Route 104, Petalburg Woods,
Dewford Town, Route 107, Route 106, Granite Cave, Route 109, Slateport
City, Route 110, Trick House, Route 103, Mauville City, Route 118,
Route 111, Route 117, Verdanturf Town, Rusturf Tunnel (revisit), Dewford
Gym — all 21 done, see `brawly.ts`.

## Wattson split (done)

Dewford Town, Route 109, Slateport City, Route 110, Trick House, Route
103, Mauville City, Route 118, Route 111, Route 117, Verdanturf Town,
Rusturf Tunnel, Mauville Gym — matches R/S's Wattson list verbatim (user
confirmed), see `wattson.ts`.

## Flannery split (in progress)

Matching R/S's Flannery list verbatim (user confirmed): Mauville City,
Trick House, Route 117, Verdanturf Town, Rusturf Tunnel, Route 111,
Route 112 (South/North, South trainers all Optional), Fiery Path (no
battles), Route 112 (North/South, revisit), Route 111
(North/South/Desert, revisit), Route 113 (all Optional; Lawrence/Lung
merged into one `Double` battle entry with `secondTrainer` per user
instruction, despite both using `trainerbattle_single` in decomp —
marker uses `customHeight` to span both trainers' original tile
positions) — done. Fallarbor Town, Route 114, Meteor Falls, Route 115,
Route 112 (again), Mt Chimney, Jagged Pass, Lavaridge Town, Lavaridge
Gym — not started, none of these locations exist for Emerald yet
(Mt Chimney has captures already
sitting in `~/pokeemerald`, held back until this point in the order).
Next: Fallarbor Town.

## Per-case confirmed-facts table

- **`mapAnchor`**: match the R/S counterpart's value verbatim; only ask
  the user for Emerald-only content.
- **Subarea order** in `subareas: []` always matches R/S's own order for
  that location — check the R/S file every time.
- **If R/S has subareas, Emerald must too**, even from a single
  seamless-looking capture — check the R/S file's structure before
  wiring flat. This extends to **per-split subarea order**: check what
  order R/S's own same-named split uses
  (`LocationHelpers.withSubareaOrder` args, or default file order) —
  a location can need a different order in different splits.
- **Subarea crop boundaries don't have to match R/S pixel-for-pixel, and
  subareas may overlap.** When R/S's own subarea heights don't sum to
  Emerald's actual capture height, derive a boundary from decomp trainer
  clustering (or the user's own visual read of the map) instead of
  forcing R/S's proportions onto a differently-sized map.
- **Bulbapedia's "Potential Double Battle with X" wording is
  unreliable** — confirmed misleading more than once (Route 103, Route
  111). Always check `scripts.inc` for `trainerbattle_single` vs
  `_double` directly.
- **A route's trainers can be split across two differently-named
  Bulbapedia pages** (e.g. Route 110 / "Seaside Cycling Road") — if
  decomp-confirmed trainers are missing from the route's own page, check
  for a themed sub-page before concluding it's undocumented.
- **A generic "Grunt"/numbered trainer's `name` field is a sequential
  number (`'1'`, `'2'`, ...) by encounter order within its
  gender+team/class combo, not the literal class name** — R/S's own
  convention, e.g. Team Aqua Grunt (m) is `'1'` at Petalburg Woods, `'2'`
  at Rusturf Tunnel. The trainer class's `displayName` combines with it
  at render time. Only use `plainName: true` + a literal name (e.g.
  "Team Aqua Grunts") for a genuinely distinct case like a
  multi-trainer BackToBack fight. Caught and fixed once already
  (Petalburg Woods/Rusturf Tunnel grunts were both wrongly `'Grunt'`).

## Badge bits (divergence from Ruby/Sapphire)

`SYSTEM_FLAGS` differs (`TRAINER_FLAGS_END + 1`, and Emerald has more
trainers): pokeruby `0x800`, pokeemerald `0x860`. Verified per-gym from
each gym map's `scripts.inc`:

| Gym (city) | Leader      | Flag macro         | Absolute # (hex/dec) |
| ---------- | ----------- | ------------------ | -------------------- |
| Rustboro   | Roxanne     | `FLAG_BADGE01_GET` | 0x867 / 2151         |
| Dewford    | Brawly      | `FLAG_BADGE02_GET` | 0x868 / 2152         |
| Mauville   | Wattson     | `FLAG_BADGE03_GET` | 0x869 / 2153         |
| Lavaridge  | Flannery    | `FLAG_BADGE04_GET` | 0x86A / 2154         |
| Petalburg  | Norman      | `FLAG_BADGE05_GET` | 0x86B / 2155         |
| Fortree    | Winona      | `FLAG_BADGE06_GET` | 0x86C / 2156         |
| Mossdeep   | Tate & Liza | `FLAG_BADGE07_GET` | 0x86D / 2157         |
| Sootopolis | Juan        | `FLAG_BADGE08_GET` | 0x86E / 2158         |

Champion split (Wallace) uses `FLAG_SYS_GAME_CLEAR` = `0x864` (2148),
resolved per-game in `Gen3SplitParser.ts` via
`FLAG_SYS_GAME_CLEAR_BY_VERSION`. `wallace.ts` correctly uses
`{ type: 'gameClear' }` (unlike R/S's `steven.ts` badge-bit workaround).

## Decomp reference cache

`~/pokeemerald` (shallow clone) + `src/lib/data/references/gen3/pokeemerald/`:
`trainers.h`, `trainer_parties.h`, `data.h` (struct shapes — not
`battle_setup.h` like pokeruby), `species_info.h` (not `base_stats.h`),
`constants_trainers.h`, `constants_flags.h`, `charmap.txt`,
`personality_derivation.c`. Go straight to `~/pokeemerald`'s own source
for anything not cached — don't assume a pokeruby-cache fact carries
over.

## Decomp-derived x/y

When a capture's pixel dims exactly match `layouts.json`'s `width`/
`height` × 16 for that map's `LAYOUT_*`: `pixel = tile*16 + 8`, minus a
**~2-3px correction** (empirical, refine per user feedback — do not
reuse a flat percentage-point correction across differently-sized maps,
recompute from the pixel estimate each time), then
`percent = pixel / imageDimension * 100`. Subtract the crop's own pixel
offset first for a subarea. If markers land badly wrong (not just
slightly off), suspect a mis-identified object event (clustering NPCs)
before the correction factor. Verify pixel-exact match holds before
trusting this — fall back to asking the user otherwise.

## Open items

1. **`Gen3SaveBlocks.ts` checksum-length fix** — per-sector sizes likely
   differ from Ruby/Sapphire's (larger save structs) but exact byte
   counts aren't pinned down yet. Don't trust save-import until resolved.
2. **Asset spot-checks** — `public/trainers/emerald/`,
   `public/pokemon/emerald/` pre-staged and holding up; flag any missing
   sprite immediately rather than assuming coverage.
3. **`met-locations.ts`** not started.
