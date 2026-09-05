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
| Trainer/IV data source                                             | pret's public `pokeruby`/`pokeemerald` decomp — mirrors `gen4-trainer-data-extraction`. Not yet documented (see Status below).                                                                                                                                                                                                                                                                                                                                                                                                           |
| "Underwater" location structure                                    | Standalone `Location` named "Underwater" (not filed under Route 124/126's own `Location`), with two `Subarea`s — "Route 124" and "Route 126" — each keeping its own real encountersKey (`hoenn-route-124-underwater` / `hoenn-route-126-underwater`) rather than merging their genuinely different encounter tables into one pool. No scraper/config change needed — PokeAPI's multi-area splitting already produces these two distinct keys; this only affects which `Location` file references them when `locations/*.ts` is authored. |

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

## Status

- [x] `GameVersionGroup.RubySapphire`, `BadgeAssetFolder.Hoenn`,
      `TrainerAssetFolder.RubySapphire` enum members added.
- [x] `game-versions/ruby.ts` + `sapphire.ts` registered in
      `game-versions/index.ts`.
- [x] Encounters fetched and converted for both variants
      (`ruby-sapphire/ruby/encounters.ts`, `ruby-sapphire/sapphire/encounters.ts`).
- [ ] `ruby-sapphire/battles.ts` — empty stub, not populated.
- [ ] `ruby-sapphire/met-locations.ts` — empty stub; needs authoring from
      Bulbapedia's Gen 3 met-location index table.
- [ ] `ruby-sapphire/locations/*.ts` — not started. Map screenshots not
      yet captured.
- [ ] `ruby-sapphire/splits/*.ts` — not started; gym order needs
      confirming (Hoenn's 8 gyms + Elite Four).
- [ ] `saveCondition` badge-bit derivation — **blocked**: no Gen 3
      equivalent of Gen 4's `gen4-trainer-data-extraction` skill exists
      yet. Needs research against pret's `pokeruby`/`pokeemerald` decomp
      (badge bit order + per-gym badge-grant source, same two-step
      process documented in the onboard-new-game skill's "Deriving a
      split's saveCondition" section) before any split can get a real
      `saveCondition`.
- [ ] Trainer battle data (team/IV/AI) extraction mechanism — **blocked**
      on the same decomp research above. Nothing in `battles.ts` should
      be authored until this is documented, per the user's explicit
      choice to source trainer data from the pret decomp rather than
      asking per-battle.
- [ ] `public/logos/ruby.png`, `public/logos/sapphire.png` — not sourced.
- [ ] `public/badges/hoenn/`, `public/trainers/ruby-sapphire/` — not
      sourced.
- [ ] Registration in `GAMES` (`src/lib/data/games.ts`) — intentionally
      **not done yet**: per the onboard-new-game skill, a game must have
      real wired locations with a `Starter`-method encounter before it's
      safe to register (`EncounterHelpers.getStarterLocationName` would
      otherwise crash the New Run screen). Locations aren't scaffolded
      yet, so registration is next-blocked on that, not on this step.
