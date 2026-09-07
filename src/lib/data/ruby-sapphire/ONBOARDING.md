# Ruby/Sapphire onboarding reference

Variant-games onboard (like Diamond/Pearl): shared
`src/lib/data/ruby-sapphire/{battles.ts,met-locations.ts,locations/,splits/,maps/}`,
per-variant `ruby/` and `sapphire/` subfolders holding only `encounters.ts`,
`<variant>.ts`, and `index.ts`.

## Confirmed per-case decisions

These were explicitly confirmed with the user — don't re-ask.

| Case                                                               | Decision                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rock Smash encounters (Granite Cave, Victory Road, Routes 111/114) | New `EncounterMethod.RockSmash`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Devon Scope Kecleon (Routes 119/120)                               | New `EncounterMethod.DevonScope`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Diving/"seaweed" encounters (Routes 124/126 underwater)            | Folded into `EncounterMethod.Grass` (renamed in the shared `encounters.ts` scraper's `METHOD_RENAMES`), not a new method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Roaming Latios (Ruby) / Latias (Sapphire)                          | **Not modeled at all** — postgame, excluded from location encounters (`excludedMethods: ['roaming-grass', 'roaming-water']`) and the entire `roaming-hoenn` synthetic location is in `excludedLocations`. No Roamer entries.                                                                                                                                                                                                                                                                                                                                                                                           |
| Trainer/IV data source                                             | pret's public **`pokeruby`** decomp specifically (not `pokeemerald` — confirmed meaningfully different from Ruby/Sapphire, so it's the wrong source for this game). Mirrors `gen4-trainer-data-extraction`. Not yet documented (see Status below).                                                                                                                                                                                                                                                                                                                                                                     |
| Map-editing tool / decomp for Porymap                              | `pokeruby`, same repo as the trainer-data source above (not `pokeemerald`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| "Underwater" location structure                                    | **Superseded** (see below) — actually implemented as a standalone `Location` named "Underwater" with 4 generically-named `Subarea`s ("Area 1"-"Area 4"), matching 4 real Porymap captures rather than being split by route. Only Area 1 and Area 2 carry a real `encountersKey` (`hoenn-route-124-underwater` / `hoenn-route-126-underwater` respectively, per the user); Area 3 and Area 4 have no wild encounters modeled (omitted `encountersKey`, same convention as any other encounter-less location).                                                                                                           |
| Badge asset folders                                                | Split `Hoenn` into `BadgeAssetFolder.RubySapphire` (`public/badges/ruby-sapphire/`) and `BadgeAssetFolder.Emerald` (`public/badges/emerald/`) rather than one shared folder — Wallace is a gym leader (Rain Badge) in R/S but Emerald's Champion, so a shared folder would need two different images at the same `wallace.png` path. See "Badge asset folder is per-version-pair, not per-region" below.                                                                                                                                                                                                               |
| Met-location index 66 (0x42) — "Magma Hideout"/"Aqua Hideout"      | **Not** a combined label (explicitly rejected) — omitted from the shared `MET_LOCATIONS` table entirely; each variant's own `<variant>.ts` overrides it directly (`{ ...MET_LOCATIONS, 66: 'Magma Hideout' }` / `'Aqua Hideout'`) when assembling `metLocationById`, since that field is per-`Game`, not forced shared.                                                                                                                                                                                                                                                                                                |
| Petalburg Woods' per-version Magma/Aqua grunt                      | A real app-level mechanism, not a one-off hack — see "Version-variant map/battle mechanism" below.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Seafloor Cavern subarea shape                                      | 10 subareas: Entrance, Room 1-9 (confirmed the "Entrance" capture is its own subarea, not folded into Room 1). Rooms 1, 3, 4, 9 have real Ruby/Sapphire map differences (Magma vs. Aqua grunt control), using the same `{ Ruby, Sapphire }` map shape as Mt. Pyre's Summit; Rooms 2, 5-8 and Entrance are shared single images. PokeAPI only exposes one `seafloor-cavern` encounter key for the whole location (no per-room split) — confirmed with the user to apply it to Rooms 1-8 only, omitted from Entrance and Room 9. All 10 subareas have real anchors: `Center` on every one except Room 9, which is `Top`. |

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

## Resolved: Magma Hideout / Aqua Hideout are NOT a reskin

Earlier note (below, kept for history) assumed this would end up like
Petalburg Woods — one shared map, per-version NPC differences. Wrong:
once real Porymap captures came in, Magma Hideout (Ruby) and Aqua
Hideout (Sapphire) turned out to be **genuinely different physical
maps per floor**, not the same layout reskinned. That broke both the
existing version-variant map mechanism (same `Location`, `{Ruby,
Sapphire}` map per subarea) and the "irrelevant one just doesn't
render" idea, because the user was explicit: the wrong hideout must
not appear in the wrong game's split **at all**, and each must keep
its own real name (never a combined/generic label — this is the same
principle as the index-66 met-location decision above).

Resolution, confirmed with the user:

- Two fully separate `Location` objects:
  `locations/magma-hideout.ts` (1F/B1F/B2F, `encountersKey:
'team-magma-hideout'`) and `locations/aqua-hideout.ts` (1F/B1F/B2F,
  `encountersKey: 'team-aqua-hideout'`). Ruby's encounters.ts only has
  `team-magma-hideout`; Sapphire's has both `team-aqua-hideout` and (an
  apparent PokeAPI scraper duplicate) `team-magma-hideout` — irrelevant
  since each `Location` only ever gets wired into its own variant.
- `splits/winona.ts` is the **one split in this codebase that isn't a
  plain object** — it exports `getWinona(hideout: Location): Split`
  instead, since the shared split file otherwise has no way to include
  a location that exists in one variant's `Game` and not the other's.
  Every other split in every game (R/S included) stays a flat exported
  object; don't generalize this pattern preemptively elsewhere.
- `ruby/ruby.ts` calls `getWinona(MAGMA_HIDEOUT)`; `sapphire/sapphire.ts`
  calls `getWinona(AQUA_HIDEOUT)`. If Winona's split ever needs
  splitting into multiple files or renaming, both call sites must move
  together.

Original (superseded) note, kept for history: "PokeAPI's
`team-magma-hideout` location returns the same Electrode static
encounter for both Ruby and Sapphire, while a separate
`team-aqua-hideout` location only has data for Sapphire. In-universe,
Ruby has Team Magma's hideout and Sapphire has Team Aqua's (same
building, reskinned)." — the "same building, reskinned" assumption is
what turned out to be false.

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

## Brawly split scope (sequence-break reachability, confirmed with user)

Once Devon's letter is delivered to Steven in Granite Cave, Mr. Briney's
boat unlocks **Slateport City** as a third ferry destination (alongside
Petalburg City and Dewford Town) _before_ Brawly is ever fought. From
Slateport, Route 110 is walkable on foot straight to Mauville City with
no HM/badge gate (only the Cycling Road shortcut and New Mauville need a
Bike/Surf, and are side content, not the through-path). This is a known
Gen 3 sequence break: Mauville, and even Wattson himself, are reachable
before Brawly.

Confirmed scope with the user: include everything reachable via this
sequence break **except Wattson's own gym battle** (the Mauville Gym
location/battle stays deferred to Wattson's split). So the Brawly split's
final location list, once mapped, is:

Rustboro City, Route 116, Rusturf Tunnel, Route 104, Petalburg Woods,
Dewford Town, Route 107, Route 106, Granite Cave (all 4 subareas) —
already scaffolded — **plus**, still needing real Porymap maps:
Slateport City, Route 110, Route 109 (its walkable beach portion),
Mauville City (city itself only, not its Gym), Route 118 (walkable
portion west of the inlet — Surf blocks the rest), Route 111 (walkable
portion south of the Rock Smash blockade), Route 117 (fully walkable,
no HM gate), Verdanturf Town (reached via Route 117, not via Rusturf
Tunnel's far side which needs Rock Smash/Dynamo Badge and stays
inaccessible this way round).

Route 107/106 ordering was explicitly confirmed to stay as originally
scaffolded (Route 107 before Route 106) — do not reorder these.

## MapAnchor (new app-level capability, not R/S-specific)

Added during this game's onboarding, lives in `src/lib/static/enums.ts`
(`MapAnchor` enum: `Center`, `Top`, `Bottom`, `Left`, `Right`,
`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`, plus `Unaudited`)
and `src/lib/static/types.ts` (`Location`/`Subarea` both require a
`mapAnchor: MapAnchor` field alongside `map`). It controls where a
location's map image autoscrolls to on load (lower priority than a
selected battle marker) — see `LocationMap.tsx`'s `getAnchorPan`.

`Unaudited` renders identically to `Center` but marks "not yet given a
real value" distinctly from a deliberate `Center` choice. Every
pre-existing location across the **entire codebase** (all games, not
just R/S) was backfilled to `Unaudited` via a one-time AST codemod
(490 fields across 276 files) when this field was added, so `tsc`
would fail loudly on any object literal the codemod missed rather than
silently defaulting. New R/S locations are scaffolded with
`MapAnchor.Unaudited` and only get a real value once the user
literally looks at the map and says so — **never guess/infer an
anchor value**, this is an explicit ask-every-time field like
`saveCondition`/battle x-y.

As of this writing, every R/S location has a real user-given anchor (no
`Unaudited` left). Check
`grep -rl "MapAnchor.Unaudited" src/lib/data/ruby-sapphire/locations/*.ts`
before assuming this is still true for newly-added locations.

## Map images sometimes arrive pre-captured on the Desktop

Not every location's map image comes from a live Porymap-capture session in
this conversation — the user sometimes already has the finished PNG sitting
on their Desktop (e.g. `~/Desktop/Route131.png`) from earlier work, ready to
drop straight into `maps/` and wire with `gen:location`. **Check
`~/Desktop` for a plausibly-named file before asking the user to capture
new screenshots** — routes 131-134 were onboarded this way (single combined
images already named `RouteNNN.png`, no stitching/cropping needed).

## Composite map images (Petalburg Gym; reusable pattern)

Some locations are captured by the user as several small Porymap
room/corridor screenshots rather than one big map, when the real
in-game layout is a branching graph of rooms rather than a single
walkable rectangle (gyms with room-mazes, multi-room hideout floors).
Two different resolutions have come up so far in this game — pick
based on what the user actually asks for, don't assume one:

- **Multiple subareas, one image each** (Abandoned Ship's Deck/1F/
  B1F/Hidden Floor, Meteor Falls' 1F/1F Back/B1F/B1F Back, Mt. Pyre's
  8 floors) — each captured room/cluster becomes its own `Subarea`,
  optionally with several raw captures stacked/arranged into one
  composite PNG per subarea when a single subarea itself has multiple
  disconnected room images (Abandoned Ship's per-floor composites are
  built this way, corridors above a left/right or stacked room
  arrangement — exact arrangement was iteratively corrected by the
  user, e.g. "the 2-room section should be right of the single-room
  section" — never assume a default stacking order for these).
- **One location, one composite image, real graph layout** — Petalburg
  Gym. The user explicitly wanted the real Bulbapedia diamond-shaped
  room-connection graph (1 room → 2 → 3 → 2 → 1) reproduced as pixel
  positions in a single composited PNG, with one deliberate deviation
  from the reference (Norman's room at the **top** of the diamond
  instead of the reference's empty top room, since that's what the
  user's own capture actually showed there). Built by measuring the
  reference image's exact per-room pixel cells (`(x,y)` top-left corner
  per room, all rooms a uniform 144×128) and pasting each of the 9
  captured room images into the matching slot on a blank canvas. The
  resulting `Location` has a flat `map` (not `subareas` at all) — the
  "rooms" only exist as pixel content, not as separate `Subarea`
  entries, so there's no per-room encounter/battle placement here
  beyond the one location-level `mapAnchor`.

When a "which structure do you want" question like this comes up for a
new multi-room capture, ask — don't default to whichever of the two
patterns you used most recently.

## generate-location.ts apostrophe-quoting bug (fixed)

`src/lib/scripts/generators/generate-location.ts` always wrapped a
subarea/location display name in single quotes when writing generated
source. A name containing an apostrophe (`Norman's Room`, hit while
scaffolding the now-abandoned 9-subarea Petalburg Gym attempt) produced
invalid TypeScript. Fixed with a `quoteName` helper that switches to
double quotes when the name contains `'`; applied in both
`insertSubarea` and `createLocation`. General script fix, not
R/S-specific — will matter again for any future apostrophe'd name in
any game.

## Trade encounters need `heldItem`, not a fixed level (general fix)

R/S's 3 in-game trades (Makuhita↔Slakoth at Rustboro, Skitty↔Pikachu at
Fortree, Corsola↔Bellossom at Pacifidlog) were originally scaffolded
from the raw scraper output with a fixed `minLevel`/`maxLevel` range
and `chance: 100` — wrong, since a traded Pokémon's level is whatever
the player traded in, not fixed, and PokeAPI doesn't surface the held
item at all. Checked Platinum's existing trade encounters
(`eterna-forest-exterior`'s Buizel↔Chatot, etc.) for the real
convention: `minLevel: null, maxLevel: null, chance: null, heldItem:
'<slug>'`. Applied the same shape to all 3 R/S trades in both
`ruby/encounters.ts` and `sapphire/encounters.ts` (`x-attack`,
`glitter-mail`, `tropic-mail` respectively, sourced from Bulbapedia's
in-game trade page).

None of those 3 items existed yet in the curated
`src/lib/data/raw/items.json` (`HELD_ITEM_CATEGORIES` in
`src/lib/scripts/pokeapi/items.ts` didn't fetch PokeAPI's `stat-boosts`
or `all-mail` categories, since normal held-battle-item curation
doesn't include bag-only items like X Attack or Mail). Extended that
allowlist with both categories and re-ran `npm run pokeapi:items` —
purely additive (44 new items + sprites, nothing existing touched).
General app capability gain, not R/S-specific; every other game's trade
encounters that reference a Mail or X-item will now resolve correctly
too.

## Move category is generation-dependent (general bug fix, found via R/S)

Asked "what category is Knock Off in Ruby" surfaced a real bug: `MoveData.category`
(`src/lib/static/types.ts`) is documented as not split by generation,
which is wrong for the Physical/Special-by-**type** split that applied
before Generation IV (Dark-type Knock Off is Special in Gen 3, Physical
from Gen 4 on). `DamageCalcHelpers.getMoveOverrides` was unconditionally
passing the modern category to `@smogon/calc`, silently overriding that
library's own correct pre-Gen4 type-based fallback
(`node_modules/@smogon/calc/dist/move.js`'s `Move` constructor already
has this logic — it just never triggered). Fixed with a new
`MoveHelpers.getMoveCategory(dataSource, slug, generation)`, used by
`DamageCalcHelpers` and all four category-displaying UI components
(`MoveCard`, `MoveList`, `LearnsetList`, `MoveDetail`) instead of
reading `.category` directly. General fix — matters for any Gen 1-3
game's Dark/Dragon-type moves, not just R/S (the other 6 special-split
types didn't change category across the split).

## Status

- [x] `GameVersionGroup.RubySapphire`, `BadgeAssetFolder.RubySapphire`,
      `TrainerAssetFolder.RubySapphire` enum members added.
- [x] `game-versions/ruby.ts` + `sapphire.ts` registered in
      `game-versions/index.ts`.
- [x] Encounters fetched and converted for both variants
      (`ruby-sapphire/ruby/encounters.ts`, `ruby-sapphire/sapphire/encounters.ts`).
- [x] `ruby-sapphire/met-locations.ts` — authored from Bulbapedia's raw
      wikitext for indices 0x00-0x57 (the Ruby/Sapphire-recognized range).
      Index 66 intentionally omitted (see per-case decisions above) —
      each variant's `<variant>.ts` must remember to override it when
      that file gets assembled.
- [~] `ruby-sapphire/locations/*.ts` — 60+ locations scaffolded (run
  `ls src/lib/data/ruby-sapphire/locations/` for the exact current
  list — it grows every session, don't trust a hardcoded list here).
  Covers everything reachable through the Roxanne, Brawly, Wattson,
  Flannery, Norman, and Winona splits. **Location slug/file naming
  convention**: bare name (`route-101`, matching Sinnoh's
  `route-201`), never the PokeAPI-prefixed form (`hoenn-route-101`) —
  that prefixed form only belongs in `encountersKey`, not the slug.
  Recurring per-location patterns actually used (see the mechanism
  sections above/below for full writeups): version-variant `{ Ruby,
Sapphire }` maps (Petalburg Woods, Rusturf Tunnel, Mt Chimney's
  Pre-Evil, Route 119's Weather Institute floors, Slateport's Oceanic
  Museum, Mt. Pyre's Summit); gender-variant `{ male, female }` maps
  (Route 103, Route 110, Lilycove City); multi-subarea locations with
  a default order overridden per split-occurrence via
  `LocationHelpers.withSubareaOrder` (Route 104, Route 111, Route 112,
  Route 115, Route 118, Route 123 all get revisited with a different
  subarea order at least once); one composite-image location built to
  match a real Bulbapedia room-graph reference (Petalburg Gym — see
  "Composite map images" above). Battle markers are **not populated
  anywhere yet** — every single trainer/boss battle across every split
  is still pending real x/y placement + `gen3-trainer-data-extraction`
  data; this is the single largest remaining piece of work, not more
  locations or maps.
- [~] `ruby-sapphire/splits/*.ts` — all 9 Hoenn splits exist
  (`roxanne`, `brawly`, `wattson`, `flannery`, `norman`, `winona`,
  `tate-and-liza`, `wallace`, `steven`), wired into both
  `ruby.ts`/`sapphire.ts` in that order. Real derived `saveCondition`
  badge-bit on every one (table below). Status per split:
    - **Roxanne, Brawly, Wattson, Flannery, Norman**: locations fully
      populated and anchored (no `Unaudited` left in any of these).
    - **Winona**: the biggest split by far — Petalburg City through
      Route 130, including Abandoned Ship, Mt. Pyre, Safari Zone, Shoal
      Cave, the version-exclusive Team hideout, etc. Exported as
      `getWinona(hideout: Location): Split` rather than a plain object
      (see "Resolved: Magma Hideout / Aqua Hideout" above) — **the one
      split that isn't a flat exported const**, don't forget this when
      importing it. Now ends with Route 131, Route 132, Route 133,
      Fortree Gym, with Pacifidlog Town inserted between Route 131 and
      Route 132 (maps sourced from pre-captured Desktop PNGs, see "Map
      images sometimes arrive pre-captured" above). All locations in this
      split now have real, user-given anchors (no `Unaudited` left).
    - **Tate & Liza**: no longer a stub — the user had it start by
      re-covering Winona's Fortree City→Shoal Cave range verbatim (Fortree
      City, Route 120, Route 121, Lilycove City, Safari Zone, Route 122,
      Mt. Pyre, Route 123 (East/West order), the version's Team hideout,
      Route 124, Mossdeep City, Route 125, Shoal Cave) — a genuine copy,
      not a move, so these locations still also appear in `winona.ts`.
      Mossdeep Gym was then added after Shoal Cave, Tate & Liza-only (not
      copied from Winona, whose own list ends at Fortree Gym).
      Because the copied range includes the version-exclusive Team
      hideout, `splits/tate-and-liza.ts` was converted from a flat
      exported `Split` to `getTateAndLiza(hideout: Location): Split`,
      mirroring `getWinona` (see "Resolved: Magma Hideout / Aqua Hideout"
      above) — **now two splits in this codebase aren't flat exported
      objects**, both `ruby.ts`/`sapphire.ts` call sites updated
      accordingly. Anything past Shoal Cave in Tate & Liza's own location
      list hasn't been discussed with the user yet.
    - **Wallace**: Mossdeep City, Abandoned Ship, Underwater, Route 127,
      Route 128, Seafloor Cavern, Route 126, Sootopolis City so far
      (Mossdeep/Ship/127/128/126 reused as-is; Underwater and Seafloor
      Cavern are new — see "Underwater location structure" and "Seafloor
      Cavern subarea shape" per-case decisions above; Sootopolis City is
      also new, `mapAnchor: Bottom`). Nothing past Sootopolis City has
      been discussed with the user yet.
    - **Steven**: still a stub split with `locations: []` plus one
      `LocationHelpers.withSubareaOrder` Meteor Falls entry — everything
      else in it is genuinely empty. No maps have been requested for it
      yet.
    - Full gym/location order within Tate & Liza (past the copied range)
      and Wallace (past Mossdeep City) hasn't been discussed with the
      user at all yet — don't assume a real-game-order default when that
      starts.
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
      `ruby.ts`/`sapphire.ts` `Game` objects now register all 9 splits
      (`ROXANNE` through `STEVEN`) — see the splits status above for
      which ones actually have real location content yet.
      **Unverified/self-authored, flag for review:** `accentColor`
      (picked to roughly match each version's box-art theme, not
      independently confirmed) — low-stakes UI content, not asked about
      or verified the way in-universe data was. `wipeMessages` was
      originally self-authored flavor text but the user has since
      edited it directly to `['Truck.']` on both `Game` objects — that
      edit is real user intent, not a leftover placeholder; don't
      "restore" the longer flavor-text list.
- [ ] `ruby-sapphire/battles.ts` — still the single biggest gap. Every
      trainer/boss battle in every split (Roxanne's gym trainers and
      boss fight, both rival fights on Route 103, the Petalburg Woods
      and Rusturf Tunnel version-exclusive grunts, Wattson/Flannery/
      Norman/Winona's entire trainer rosters, both team hideouts, every
      gym) needs real x/y placement from the user plus decomp-derived
      team data via the `gen3-trainer-data-extraction` skill. Nothing
      in this file has been populated yet — every location scaffolded
      so far has map/encounter data only.
