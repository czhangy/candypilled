# Implementation plan: populate `ruby-sapphire/battles.ts`

**Audience for this document:** an agent with zero prior context on this
project or conversation. Read this file top to bottom before touching any
code — it is meant to be self-sufficient.

## What this task is

`src/lib/data/ruby-sapphire/battles.ts` currently contains only:

```ts
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {};
```

Every trainer/boss battle in Pokémon Ruby and Sapphire needs a
`BattleData` entry here, plus a corresponding `{ battleKey, x, y, ... }`
entry in the `battles: []` array of whichever `Location`/`Subarea` it
takes place in (`src/lib/data/ruby-sapphire/locations/*.ts`). Right now
every location file has map/encounter data only — **no location has a
`battles` array yet.** This is the single largest remaining gap in this
game's onboarding.

## This is NOT a solo, run-to-completion task

**This must be run as an interactive, collaborative, location-by-location
loop with the user present in the conversation.** Do not attempt to
generate all of `battles.ts` in one pass without stopping. Several pieces
of required information can only come from the user and must never be
guessed, defaulted, or scaffolded with placeholder values:

- **x/y pixel placement for every battle marker.** A static map image does
  not give pixel-accurate NPC position, and two trainers of the same class
  can look visually identical. Do not write `x: 0, y: 0` and move on —
  stop and ask.
- **Which named trainer is at a given location, and in what order.**
  External data sources are often sparse on location fields.
- **`BattleMetadata`** (Boss, Miniboss, Optional, Double, Tag, BackToBack,
  Gauntlet, Choice, TrueDouble — see `.claude/docs/battle-metadata.md` for
  the full definitions). Never infer this from sheet/wiki notation; only
  the user's literal answer counts.
- **A `BattlePokemon`'s `gender`**, whenever the source data doesn't state
  it. `gender?: 'male' | 'female'` being optional does NOT mean "omit when
  unknown" is safe — omitting it is read by the app as explicitly
  genderless. If a species has a real gender ratio and the source doesn't
  give gender, ask the user (species gender ratio can be cross-checked
  against this app's own species data / PokeAPI once the user answers, but
  the initial gender fact itself is not something to derive alone unless
  the species is single-gender or genderless by ratio).
- **Anything about roster/team variance** (starter-dependent teams,
  gender-dependent battles, a randomized team pool). See "Divergent teams
  and battles" in `.claude/skills/onboard-new-game/SKILL.md` before
  authoring — do not default to one `team`/one `Battle` entry and bolt on
  a workaround later.

What is **not** asked of the user, because it has a documented derivation:

- **IVs.** For Gen 3 vanilla games, IVs are read directly out of the
  decomp's trainer data and computed with a documented formula — see
  "Sourcing team data" below. Do not ask the user for IVs.
- **Species, level, moves, held item, ability, nature.** All derived from
  the decomp (see below).

## Read these before starting

1. `.claude/skills/onboard-new-game/SKILL.md` — read in full, but
   especially:
    - "Ask, never assume" (top of file)
    - Step 5, "Scaffold battles" (battle authoring workflow, `battleKey`
      naming convention, the never-guess list above)
    - "Divergent teams and battles" (multi-team trainers, gender-dependent
      content)
2. `.claude/skills/gen3-trainer-data-extraction/SKILL.md` — read in full.
   This is the mechanism for sourcing a trainer's actual team data (see
   below).
3. `.claude/docs/battle-metadata.md` — the meaning of every
   `BattleMetadata` value.
4. `.claude/docs/split-location-wiring.md` — when a location belongs in a
   split, and the `hideBattles` convention for battles that are
   inaccessible on a given pass through a location.
5. `src/lib/static/types.ts` — read the `Battle`, `BattleData`,
   `BattleTrainer`, `BattleTeam`, `BattlePokemon`, `TagPartner` type
   definitions to understand the exact shape you're filling in.

## Sourcing team data (species/level/moves/item/ability/nature/gender/IV)

Every trainer's real team data lives in two cached decomp files:

```
src/lib/data/references/gen3/pokeruby/trainers_en.h        # struct Trainer entries
src/lib/data/references/gen3/pokeruby/trainer_parties.h    # party arrays
src/lib/data/references/gen3/pokeruby/battle_setup.h       # the 4 TrainerMon struct shapes
src/lib/data/references/gen3/pokeruby/constants_trainers.h # F_TRAINER_*, encounter-music/gender flags
src/lib/data/references/gen3/pokeruby/charmap.txt          # in-game text encoding (for the nameHash)
src/lib/data/references/gen3/pokeruby/personality_derivation.c
```

The `gen3-trainer-data-extraction` skill documents the full workflow: find
the trainer's `TRAINER_<NAME>` struct in `trainers_en.h`, look up its party
array in `trainer_parties.h`, compute IV (`Math.floor(iv * 31 / 255)`),
compute each mon's `personality` value (a cumulative name-hash across the
whole party — order matters, re-read the skill's exact algorithm, do not
approximate it), then derive nature/ability/gender from that personality.
The skill includes a worked, Bulbapedia-verified example (Roxanne's
Geodude/Nosepass) — if your derivation disagrees with an independently
checkable source for any trainer, re-check the name/species text encoding
and the cumulative-hash bookkeeping before trusting your own output.

**Ruby and Sapphire share the same trainer data** (only wild encounters
differ between the two versions) — one `battles.ts` file, shared by both
`ruby.ts` and `sapphire.ts` (confirm this is still true by checking those
two files' `battles: BATTLES` wiring before assuming it).

## `battleKey` naming convention

Check any already-onboarded game's `battles.ts` (e.g.
`src/lib/data/diamond-pearl/battles.ts` or
`src/lib/data/renegade-platinum/battles.ts`) for the live convention
before inventing one. As of this writing:

- Named individual trainer: `<trainer-class-slug>-<name>`
  (e.g. `youngster-calvin`).
- A trainer class fielded by many anonymous, repeated instances (e.g. a
  recurring antagonist-faction grunt): `<trainer-class-slug>-<number>`,
  with that `Battle`'s own `name` field set to that same number as a
  string. Do not invent a location-based key for these.
- Tag battle: the primary trainer's key/number is the top-level
  `battles.ts` key; `secondTrainer` reuses the same `name`.

## Trainer classes

If a battle references a trainer class not already in
`src/lib/data/trainer-classes.ts`, add it with:

```
npm run gen:trainer-class <folder> <classSlug> <displayName> [spriteSlug]
```

Check `public/trainers/ruby-sapphire/` first — most Hoenn trainer sprites
are already sourced (see the file listing in that directory), so this
should be rare.

## Scope: every split, in this order

Read each split file directly for its current, authoritative location
list — do not trust a hardcoded list in this plan, it will drift. As of
this writing the 9 splits exist at:

```
src/lib/data/ruby-sapphire/splits/roxanne.ts
src/lib/data/ruby-sapphire/splits/brawly.ts
src/lib/data/ruby-sapphire/splits/wattson.ts
src/lib/data/ruby-sapphire/splits/flannery.ts
src/lib/data/ruby-sapphire/splits/norman.ts
src/lib/data/ruby-sapphire/splits/winona.ts        (exports getWinona(hideout), not a flat object)
src/lib/data/ruby-sapphire/splits/tate-and-liza.ts (exports getTateAndLiza(hideout), not a flat object)
src/lib/data/ruby-sapphire/splits/wallace.ts
src/lib/data/ruby-sapphire/splits/steven.ts
```

Work through them in the order above (the actual in-game order, per
`ruby.ts`/`sapphire.ts`'s `splits: []` array — confirm this hasn't
changed before starting). Within a split, go location by location in the
order the split's `locations: []` array lists them.

Known must-cover content (non-exhaustive — the split files are the source
of truth, this is just a sanity list so you know roughly what's coming):
Roxanne's gym trainers + boss fight, both rival fights on Route 103, the
Petalburg Woods and Rusturf Tunnel version-exclusive Team grunts,
Wattson/Flannery/Norman/Winona's full trainer rosters, both Team hideouts
(Magma in Ruby, Aqua in Sapphire — same floors/rooms, different trainer
identities per version, confirm with the user how this should be
modeled — likely two independent `battles.ts` entries per hideout room,
gender/version is not the same mechanism as `Battle.gender`, so don't
reach for that field to model a version-exclusive difference; check
"Divergent teams and battles" for the actual mechanism, and ask the user
if genuinely unclear), every gym leader, Trick House puzzle trainers (note
that Puzzle 8 was removed from this game's Trick House location — 7
puzzles remain, confirm current state of
`src/lib/data/ruby-sapphire/locations/trick-house.ts` before assuming a
puzzle count), the Elite Four (Sidney/Phoebe/Glacia/Drake, each already
scaffolded as their own top-level `Location` —
`sidneys-room.ts`/`phoebes-room.ts`/`glacias-room.ts`/`drakes-room.ts`)
and Champion Wallace (`champions-room.ts`).

## Per-location workflow (repeat for every location with trainers)

1. State which location you're working on.
2. Ask the user (plain text, not `AskUserQuestion` — these are free-form
   answers, not multi-way decisions): the trainer names present at this
   location, in order.
3. For each trainer named: look them up in `trainers_en.h`/
   `trainer_parties.h`, derive their full team per the
   `gen3-trainer-data-extraction` skill, and **state exactly what you
   parsed before writing it to a file** — per "ask, never assume", a
   parse must be confirmed even when it looks unambiguous. Do not ask the
   user to manually re-verify every field of every mon by default (per
   this app's "no encounter/parse confirmation" convention where a
   documented source exists) — but do surface anything ambiguous
   (multiple trainers with the same name, a struct shape you're unsure
   about) rather than guessing past it.
4. Ask the user for each trainer's `BattleMetadata` and x/y (batched as
   one plain-text list per location: "Here's what I need for
   <location>: 1. <trainer> — metadata, x/y 2. ...").
   **List trainers in the exact order the source of truth lists them
   (e.g. Bulbapedia's own listed order for that location) — do not
   silently re-sort by the order you looked them up in the decomp, or by
   any other inferred order.** The user's answers come back positionally
   matched to this list, so a reorder here silently misassigns every
   answer after the first mismatch.
5. Write the `BattleData` entries into `battles.ts`, keyed by the derived
   `battleKey`s.
6. Wire those `battleKey`s into the location's `battles: []` array (in the
   `Location`/`Subarea` object in `locations/<slug>.ts`), using the
   x/y the user gave.
7. Run `npx tsc --noEmit` and `npx eslint <every file touched this step>`
   before moving to the next location. Both must be clean.
8. Do not move to the next location until the current one's `battles.ts`
   entries and location-file `battles: []` array are both fully
   consistent.

## Save conditions are already resolved — do not re-derive them

Each split's `saveCondition` (badge-bit) is already correct in every
`splits/*.ts` file, sourced from pokeruby's `include/constants/flags.h`.
This plan is scoped to `battles.ts` and location `battles: []` arrays
only — do not touch `saveCondition` values.

## Never stage or commit

Per this project's `CLAUDE.md`: never run `git add` or stage changes.
Leave everything unstaged for the user to review and commit themselves.
Also never start a dev server (`npm run dev`) — rely on `tsc`/`eslint` for
verification, per `CLAUDE.md`.
