# Ruby/Sapphire onboarding reference

Variant-games onboard (like Diamond/Pearl): shared
`src/lib/data/ruby-sapphire/{battles.ts,met-locations.ts,locations/,splits/,maps/}`,
per-variant `ruby/` and `sapphire/` subfolders holding only `encounters.ts`,
`<variant>.ts`, and `index.ts`.

## Confirmed per-case decisions

These were explicitly confirmed with the user — don't re-ask.

| Case                                                               | Decision                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rock Smash encounters (Granite Cave, Victory Road, Routes 111/114) | New `EncounterMethod.RockSmash`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Devon Scope Kecleon (Routes 119/120)                               | New `EncounterMethod.DevonScope`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Diving/"seaweed" encounters (Routes 124/126 underwater)            | Folded into `EncounterMethod.Grass` (renamed in the shared `encounters.ts` scraper's `METHOD_RENAMES`), not a new method.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Roaming Latios (Ruby) / Latias (Sapphire)                          | **Not modeled at all** — postgame, excluded from location encounters (`excludedMethods: ['roaming-grass', 'roaming-water']`) and the entire `roaming-hoenn` synthetic location is in `excludedLocations`. No Roamer entries.                                                                                                                                                                                                                                                                                                             |
| Trainer/IV data source                                             | pret's public **`pokeruby`** decomp specifically (not `pokeemerald` — confirmed meaningfully different from Ruby/Sapphire, so it's the wrong source for this game). Mirrors `gen4-trainer-data-extraction`. Not yet documented (see Status below).                                                                                                                                                                                                                                                                                       |
| Map-editing tool / decomp for Porymap                              | `pokeruby`, same repo as the trainer-data source above (not `pokeemerald`).                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| "Underwater" location structure                                    | Standalone `Location` named "Underwater" (not filed under Route 124/126's own `Location`), with two `Subarea`s — "Route 124" and "Route 126" — each keeping its own real encountersKey (`hoenn-route-124-underwater` / `hoenn-route-126-underwater`) rather than merging their genuinely different encounter tables into one pool. No scraper/config change needed — PokeAPI's multi-area splitting already produces these two distinct keys; this only affects which `Location` file references them when `locations/*.ts` is authored. |
| Badge asset folders                                                | Split `Hoenn` into `BadgeAssetFolder.RubySapphire` (`public/badges/ruby-sapphire/`) and `BadgeAssetFolder.Emerald` (`public/badges/emerald/`) rather than one shared folder — Wallace is a gym leader (Rain Badge) in R/S but Emerald's Champion, so a shared folder would need two different images at the same `wallace.png` path. See "Badge asset folder is per-version-pair, not per-region" below.                                                                                                                                 |
| Met-location index 66 (0x42) — "Magma Hideout"/"Aqua Hideout"      | **Not** a combined label (explicitly rejected) — omitted from the shared `MET_LOCATIONS` table entirely; each variant's own `<variant>.ts` overrides it directly (`{ ...MET_LOCATIONS, 66: 'Magma Hideout' }` / `'Aqua Hideout'`) when assembling `metLocationById`, since that field is per-`Game`, not forced shared.                                                                                                                                                                                                                  |
| Petalburg Woods' per-version Magma/Aqua grunt                      | A real app-level mechanism, not a one-off hack — see "Version-variant map/battle mechanism" below.                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Version-variant map/battle mechanism (new app-level capability, not R/S-specific)

Petalburg Woods has a real Ruby-vs-Sapphire difference (a Team Magma grunt
in Ruby, Team Aqua in Sapphire, harassing the old man near the entrance) —
same map layout, different NPC. The existing gender-variant mechanism
(`map: { male, female }`, `Battle.gender`) only discriminates by
`run.gender`, which doesn't help here since both versions can be played by
either gender. Added a parallel, generic mechanism instead of a one-off
hack, since this is exactly the kind of divergence any variant-game group
could hit again (e.g. the Magma/Aqua Hideout later in this same game):

- `LocationMapImage` (`src/lib/static/types.ts`) is the new shared type
  for `Location.map`/`Subarea.map`: `StaticImageData | { male; female } |
Record<string, StaticImageData>`, the last variant keyed by `Game.name`
  (e.g. `{ Ruby: ..., Sapphire: ... }`), resolved in
  `SplitLocation.tsx`'s `resolveMap` by checking `game.name in map`.
- `Battle.game?: string` mirrors `Battle.gender` — restricts a marker to
  the matching `Game.name`. `BattleHelpers.filterByGame` mirrors
  `filterByGender` and is threaded in next to every existing
  `filterByGender` call (`getBattlesInLocation`, plus the three raw
  filtering spots inside `SplitLocation.tsx` that don't go through it) —
  verified via grep that no `filterByGender` call site was missed.
- Not extended to `TagPartner` — no version-exclusive tag-partner case has
  come up yet; add it the same way if one does, rather than
  pre-emptively mirroring every gender field.

## Scraper-mechanism additions made for this game

Not game-specific facts — general scraper capability gaps Gen 3 exposed,
fixed in the shared `src/lib/scripts/pokeapi/encounters.ts`:

- `METHOD_RENAMES` gained `npc-trade` → `EncounterMethod.Trade` and
  `seaweed` → `EncounterMethod.Grass`.
- New `resolveTradeFor` step: PokeAPI encodes an NPC trade's required
  species as a `trade-<species>` condition value rather than a dedicated
  field. This mechanically lifts it into `Encounter.tradeFor` and strips
  the condition, for any game's trade encounters (not R/S-specific).
- New `EncounterMethod` enum members: `RockSmash`, `DevonScope`.

## Badge asset folder is per-version-pair, not per-region

`BadgeAssetFolder` started as `Hoenn` (shared across every Hoenn game) but
was split into `RubySapphire` and `Emerald` instead
(`public/badges/ruby-sapphire/`, `public/badges/emerald/`). Reason: this
app's badge files are named after the split (the gym leader), not the
badge itself (`SplitTab.tsx` looks up
`/badges/<folder>/<slug(Split.name)>.png` directly) — and Ruby/Sapphire's
8th gym leader is Wallace (Sootopolis, Rain Badge), while in Emerald that
gym is led by Juan instead and Wallace becomes the Champion. A single
shared Hoenn folder would need two different images at the same
`wallace.png` path (R/S's Rain Badge vs. Emerald's Champion icon) — a real
collision, not just a naming nitpick. The 7 unchanged gym leaders
(Roxanne, Brawly, Wattson, Flannery, Norman, Winona, Tate & Liza) are
duplicated verbatim into both folders on the assumption their badge
artwork doesn't differ between R/S and Emerald — a reasonable but
**unverified** assumption (no independent Emerald source image was
diffed against these, unlike the content-hash verification this app's
convention normally calls for).

`ruby-sapphire/steven.png` (R/S's Champion split) and
`emerald/wallace.png` (Emerald's Champion split) are both **placeholder
duplicates of Sinnoh's `cynthia.png`** — a generic stand-in so the
Champion split has some badge image rather than a broken path, not real
Hoenn Champion artwork. Replace both with actual Steven/Wallace Champion
icons once sourced; don't mistake them for verified assets the way the
7 shared gym-leader badges above are (at least those are real Hoenn
badge art, just unverified as byte-identical between versions).

## GameVersion config notes (`game-versions/ruby.ts` / `sapphire.ts`)

- `excludedLocations` was built mechanically: every Hoenn location
  (`https://pokeapi.co/api/v2/region/hoenn/`) whose areas return zero
  `ruby`/`sapphire`-tagged encounters. Re-run this audit if PokeAPI's data
  changes. Includes real non-wild locations (towns, marts, story-only
  interiors) and ORAS-exclusive content PokeAPI still lists under Hoenn
  (Mirage Spots, Battle Resort, Soaring, etc.).
- `hoenn-pokecenter` is excluded because its only tagged encounters are
  GameCube bonus-disc/Pokémon Channel distribution "encounters", not
  obtainable through normal R/S gameplay.
- `caveLocations` (Cave vs Grass for `walk`-method encounters) was
  classified by which locations are true underground
  caves/tunnels/ruins vs. outdoor or tall-grass terrain: Meteor Falls,
  Rusturf Tunnel, Granite Cave, Fiery Path, Jagged Pass, Seafloor Cavern,
  Cave of Origin, Victory Road, Shoal Cave, New Mauville, Sky Pillar.
  **This list is my own terrain judgment call, not sourced from the
  user or a document — Jagged Pass in particular is borderline (ashy
  outdoor slope, not a literal cave). Flag for review if it looks wrong
  once the location is actually played through.** Petalburg Woods and
  Mt. Pyre default to Grass since both have real tall-grass encounters
  despite being indoor/wooded.
- Starter handoff is `hoenn-route-101` (PokeAPI tags Treecko/Torchic/
  Mudkip there as `gift`, overridden to `EncounterMethod.Starter`), not
  Littleroot Town — same pattern as Platinum's Route 201 override.

## Known data-source discrepancy to resolve during location authoring

PokeAPI's `team-magma-hideout` location returns the same Electrode
static encounter for **both** Ruby and Sapphire, while a separate
`team-aqua-hideout` location only has data for Sapphire. In-universe,
Ruby has Team Magma's hideout and Sapphire has Team Aqua's (same
building, reskinned) — so when authoring `locations/*.ts`, the two
variants' `battles.ts`/location content need distinct trainer rosters
matching their own team, and the encountersKey for this location should
resolve correctly per variant despite the shared PokeAPI slug for the
Ruby side. Verify against Bulbapedia before wiring.

## Correction: Scorched Slab is a real Ruby/Sapphire location

Earlier assumed Emerald-only (it had zero PokeAPI-tagged wild encounters
for any version, which is genuinely true) and left out of
`excludedLocations` reasoning as such — but Bulbapedia's met-location
index table lists it at index 80 (0x50), inside the 0x00-0x57 range Ruby
and Sapphire actually recognize. It's real in R/S: the site Groudon/Kyogre
relocate to via the e-Reader event. Correctly has no wild encounters (so
no `encountersKey` needed), but it still needs its own `Location` entry
in `locations/*.ts` once that stage starts — don't skip it as
Emerald-only.

## Status

- [x] `GameVersionGroup.RubySapphire`, `BadgeAssetFolder.RubySapphire`,
      `TrainerAssetFolder.RubySapphire` enum members added.
- [x] `game-versions/ruby.ts` + `sapphire.ts` registered in
      `game-versions/index.ts`.
- [x] Encounters fetched and converted for both variants
      (`ruby-sapphire/ruby/encounters.ts`, `ruby-sapphire/sapphire/encounters.ts`).
- [ ] `ruby-sapphire/battles.ts` — empty stub, not populated.
- [x] `ruby-sapphire/met-locations.ts` — authored from Bulbapedia's raw
      wikitext for indices 0x00-0x57 (the Ruby/Sapphire-recognized range).
      Index 66 intentionally omitted (see per-case decisions above) —
      each variant's `<variant>.ts` must remember to override it when
      that file gets assembled.
- [~] `ruby-sapphire/locations/*.ts` — started. `littleroot-town.ts`
  (no `encountersKey`/`battles` — no wild encounters or trainer
  battles there) and `route-101.ts` (`encountersKey: 'hoenn-route-101'`,
  no battles — R/S's first route has none) scaffolded from real
  Porymap exports. **Location slug/file naming convention note**: use
  the bare name (`route-101`, matching Sinnoh's `route-201`), never
  the PokeAPI-prefixed form (`hoenn-route-101`) — that prefixed form
  only belongs in the `encountersKey` field value, not the slug. Got
  this wrong once already for `route-101` and had to redo it; watch
  for the same mistake on every other Hoenn route.
  Also scaffolded: `oldale-town.ts` (no encounters/battles),
  `route-103.ts` (gender-variant map, `{ male: route103May, female:
route103Brendan }`, encountersKey set, rival battle still pending
  real x/y + trainer data), `route-102.ts` (encountersKey set, has
  visible NPC sprites on its map not yet confirmed as trainers),
  `petalburg-city.ts` (encountersKey set), `route-104.ts` (two
  subareas, North and South, sharing one encountersKey since PokeAPI
  has no real per-half split for R/S — only for ORAS; subarea order
  is North-then-South, matching its second appearance in the split),
  and `petalburg-woods.ts` (version-variant map via the new
  mechanism above, `encountersKey: 'petalburg-woods'`, Magma/Aqua
  grunt battle markers **not yet added** — needs real x/y placement
  and decomp-derived trainer data via `gen3-trainer-data-extraction`
  first). Also scaffolded: `rustboro-city.ts` (encountersKey set),
  `route-115.ts`, `route-116.ts` (both encountersKey set),
  `rusturf-tunnel.ts` (version-variant map, same mechanism as
  Petalburg Woods — `{ Ruby: ..., Sapphire: ... }` — encountersKey
  set, its own version-exclusive grunt battle also not yet added),
  and `rustboro-gym.ts` (no encounters — Roxanne's own battle and the
  two gym trainers visible on its map are not yet added, same
  pending-battle-data caveat as everywhere else). **Note**: Route
  115/116 and Rusturf Tunnel are geographically nowhere near
  Rustboro in the real game (normally reached much later, near
  Mauville/Verdanturf) — explicitly confirmed with the user that
  they still belong in the Roxanne split anyway, not misplaced.
  Every other Hoenn location still needs its own map before it can
  be scaffolded.
- [~] `ruby-sapphire/splits/*.ts` — started. `splits/roxanne.ts` now has,
  in order: Littleroot Town, Route 101, Oldale Town, Route 103,
  Route 102, Petalburg City, Route 104, Petalburg Woods, Route 104
  again, Rustboro City, Route 115, Route 116, Rusturf Tunnel,
  Rustboro Gym (Route 104 is the same shared `Location` object both
  times it appears — reordering its subareas affects both
  appearances, which was a deliberate, confirmed tradeoff, not an
  oversight). Real derived `saveCondition` (`{ type: 'badge', bit:
2055 }`, i.e. `FLAG_BADGE01_GET`). This is everything up through
  Roxanne's gym now — what's still missing is battle data (Roxanne's
  own fight, the two gym trainers, the Petalburg Woods and Rusturf
  Tunnel grunts, Route 102/103's visible NPCs), not more locations.
  Full gym order for the remaining splits still needs confirming
  (Hoenn's 8 gyms + Elite Four) once battles are done here.
- [x] `saveCondition` badge-bit derivation — resolved directly from
      `pokeruby` (`include/constants/flags.h` + each gym's
      `data/maps/<City>_Gym/scripts.inc`). Badges are event flags, not a
      separate bitmask, base `SYSTEM_FLAGS = 0x800`:

      | Split (gym) | Badge | Flag |
          |---|---|---|
          | Rustboro | Stone | `0x807` |
          | Dewford | Knuckle | `0x808` |
          | Mauville | Dynamo | `0x809` |
          | Lavaridge | Heat | `0x80A` |
          | Petalburg | Balance | `0x80B` |
          | Fortree | Feather | `0x80C` |
          | Mossdeep | Mind | `0x80D` |
          | Sootopolis | Rain | `0x80E` |

          Game-clear flag: `FLAG_SYS_GAME_CLEAR = 0x804`. No Gen 3
          `SplitParser` exists yet in `src/lib/parsers/` — these flag numbers
          are ready, but the parser to evaluate them against a decrypted save
          still needs writing when splits are actually authored.

- [x] Trainer battle data extraction mechanism — documented and verified
      as a new skill, `gen3-trainer-data-extraction` (mirrors
      `gen4-trainer-data-extraction`). Key finding: Gen 3 does **not**
      store nature/ability/gender per trainer mon the way Gen 4 does —
      they're derived from a deterministic personality hash at battle
      start. Verified end-to-end against Roxanne's real party (ability
      matches Bulbapedia exactly). `battles.ts` authoring can now proceed
      using that skill. Reference files cached at
      `src/lib/data/references/gen3/pokeruby/`.
- [x] `public/logos/ruby.png`, `public/logos/sapphire.png` — sourced.
- [x] `public/badges/ruby-sapphire/`, `public/badges/emerald/`,
      `public/trainers/ruby-sapphire/` — sourced (see "Badge asset folder
      is per-version-pair" above for the folder split and the two
      placeholder Champion icons still needing real art).
- [x] Registration in `GAMES` (`src/lib/data/games.ts`) — done, ordered
      before the Gen 4 games (Ruby, Sapphire, then Diamond, Pearl,
      Platinum, Renegade Platinum) to keep `GAMES` in generation order.
      `route-101` (which has a real `Starter`-method encounter) is wired
      into `splits/roxanne.ts`, so `EncounterHelpers.getStarterLocationName`
      resolves correctly and the New Run screen is safe to use. Both
      `ruby.ts`/`sapphire.ts` `Game` objects currently only have the
      Roxanne split — everything past Rustboro is still pending more maps.
      **Unverified/self-authored, flag for review:** `accentColor` (picked
      to roughly match each version's box-art theme, not
      independently confirmed) and `wipeMessages` (original flavor text
      written for this task, not sourced from anywhere) on both `Game`
      objects — low-stakes UI content, but neither was asked about or
      verified the way in-universe data was.
