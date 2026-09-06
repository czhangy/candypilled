---
name: gen3-trainer-data-extraction
description: Extract real trainer battle data (species, level, moves, held item, ability, nature, gender, IV) for a Generation 3 game (Ruby, Sapphire, Emerald, FireRed, LeafGreen) from that game's ROM decompilation, for populating battles.ts. Gen 3 (GBA pret-style decomp) specific -- does not generalize to other console generations.
---

# Extracting Gen 3 trainer battle data

This skill is scoped to **Generation 3 GBA games decompiled by the pret
project** (`pokeruby`, `pokesapphire` mirrors, `pokeemerald`, `pokefirered`).
It does not generalize to other generations/consoles -- Gen 4's NDS decomps
store nature/ability/gender as literal fields already resolved in a
secondary cross-reference dataset, which is a completely different
extraction problem (see `gen4-trainer-data-extraction`). Gen 3 stores none
of those three fields at all; they're derived at battle-start from a
deterministic hash, which is what this skill documents.

**Games are independent, decomps included.** This skill was built and
verified against `pokeruby`. Confirmed for this project: Ruby/Sapphire and
Emerald are "meaningfully different" (the user's own words when this game
was onboarded), so do not assume `pokeemerald`'s trainer data, struct
shapes, or even this exact algorithm apply unchanged to Emerald -- verify
independently against that decomp before reusing anything here for a
different Gen 3 game.

Use this alongside `onboard-new-game`'s "Scaffold battles" step -- this
skill covers _how to source_ a trainer's team contents, not the app's
battleKey-naming or two-pass workflow conventions, which live there.

## Where the data lives

Two files hold everything: `src/data/trainers_en.h` (one `struct Trainer`
per trainer -- class, name, items, `doubleBattle`, `aiFlags`, `partyFlags`,
and a pointer to its party array) and `src/data/trainer_parties.h` (the
party arrays themselves, one `const struct TrainerMon...[]` per trainer,
named `gTrainerParty_<Name><N>`).

`partyFlags` selects which of four struct shapes
(`include/battle_setup.h`) that trainer's party array uses -- this decides
which optional fields are present, not the mon's identity:

| `partyFlags`                           | Struct                         | Fields                   |
| -------------------------------------- | ------------------------------ | ------------------------ |
| `0`                                    | `TrainerMonNoItemDefaultMoves` | `iv`, `level`, `species` |
| `F_TRAINER_PARTY_CUSTOM_MOVESET` (`1`) | `TrainerMonNoItemCustomMoves`  | + `moves[4]`             |
| `F_TRAINER_PARTY_HELD_ITEM` (`2`)      | `TrainerMonItemDefaultMoves`   | + `heldItem`             |
| both (`3`)                             | `TrainerMonItemCustomMoves`    | + `heldItem`, `moves[4]` |

"Default moves" means the game computes that mon's moveset from its
level-up learnset at battle time rather than storing one -- use this app's
own move data (learnset source) for those, the same fallback
`gen4-trainer-data-extraction` uses for its equivalent case, rather than
guessing.

`trainerClass` maps to this app's trainer-class slugs (check
`src/lib/data/trainer-classes.ts` -- the decomp's `TRAINER_CLASS_*` naming
doesn't always match this app's slug 1:1).

## IV: same one-line formula as Gen 4, different scale name

`iv` is a single `u16` (0-255), applied identically to all six stats --
`iv` here is the exact analog of Gen 4's misleadingly-named `difficulty`
field, just correctly named this time. Confirmed in
`personality_derivation.c`'s `CreateNPCTrainerParty` excerpt:

```c
fixedIV = partyData[i].iv * 31 / 255;
```

Compute exactly: `Math.floor(iv * 31 / 255)`. This is this app's
`ivs: number` field directly -- per mon, don't assume a shared value across
a trainer class without checking each entry's own `iv`.

## Nature, ability, and gender are NOT stored -- derive them from a hash

This is the load-bearing difference from Gen 4. There is no per-mon nature/
ability/gender field anywhere in the trainer data, and no secondary
cross-reference dataset exists for Gen 3 the way
`pkmn_gen_four_trainer_data` does for Diamond/Pearl. All three are
computed from one deterministic 32-bit `personality` value, generated at
battle start in `CreateNPCTrainerParty` (`src/battle_main.c`) and consumed
by `CreateBoxMon`/`GetNatureFromPersonality`/
`GetGenderFromSpeciesAndPersonality` (`src/pokemon_1.c`, `_2.c`, `_3.c`).
Full excerpts of every function below: `personality_derivation.c` in this
skill's reference cache.

**The personality formula, traced end to end:**

```
personality = baseOffset + (nameHash << 8)   // u32, wraps like C
```

- `baseOffset` = `0x80` if the trainer's `doubleBattle` is `TRUE`; else
  `0x78` if the trainer is female (`encounterMusic_gender & F_TRAINER_FEMALE`,
  i.e. `& 0x80`, per `include/constants/trainers.h`); else `0x88`.
- `nameHash` is a running `u32` sum of character bytes, **not reset between
  party members** -- this is a real quirk in the source, not a
  simplification: for party slot `i`, the loop re-adds the trainer's full
  name's bytes again (on top of whatever `nameHash` already held from
  previous slots), then adds that slot's species name's bytes, then shifts
  left 8 and adds to `baseOffset`. Concretely, for a 2-mon party:
  `nameHash` after slot 0 = `trainerName + species0`; after slot 1 =
  `(trainerName + species0) + trainerName + species1` =
  `2×trainerName + species0 + species1`. Get this compounding right or
  every mon past the first in a party will have the wrong personality.
- Character bytes are **not ASCII** -- Gen 3 uses its own in-game text
  encoding. The mapping is `charmap.txt` in this skill's reference cache
  (copied verbatim from the decomp root). Encode both the trainer's name
  (uppercase, as stored in `trainerName`) and the species' display name
  (uppercase) through this table, not `String.charCodeAt`.

**From `personality`, each field is a one-line lookup:**

- **Nature** = `personality % 25`, indexed into the standard 25-nature
  list (Hardy=0 ... Quirky=24, this app's own `Nature` enum ordering).
- **Ability** = `personality & 1` selects ability slot 2 (0-indexed: bit
  set → the species' second ability), but **only if the species actually
  has a second ability** (`gBaseStats[species].ability2` nonzero) --
  otherwise the mon always has ability 1 regardless of personality. There
  is no hidden-ability slot in Gen 3.
- **Gender**: if the species has a fixed gender ratio (always-male,
  always-female, or genderless), that's the answer regardless of
  personality -- for the genderless case, omit `gender` on the
  `BattlePokemon` entirely (this is the one case where omitting it is
  correct, same rule as Gen 4). Otherwise, compare the species' gender
  ratio threshold against `personality & 0xFF` (this app's own species
  data / PokeAPI has the equivalent ratio field) -- higher threshold value
  → female, else male.

## Verifying this against real data

Cross-checked the full chain (charmap encoding, the cumulative-hash quirk,
and the ability-bit extraction) against Roxanne's party
(`gTrainerParty_Roxanne`, `TRAINER_ROXANNE` in `trainers_en.h`) and
Bulbapedia's Ruby/Sapphire trainer info for her: computed personality for
her Geodude has its low bit `0`, i.e. ability slot 1 -- Rock Head, which
is exactly what Bulbapedia lists (Geodude's other possible ability,
Sturdy, is slot 2). Her Nosepass has no second ability in Gen 3 at all
(Magnet Pull came later), so it's forced to Sturdy independent of
personality -- also matches. This confirms the derivation end-to-end,
since ability, nature, and gender all read from the same `personality`
integer -- getting the integer right and reading the right bit out of it
validates the mechanism a wrong encoding or an unreset hash would have
broken.

If a future lookup produces an ability/nature/gender that contradicts an
independently-checkable source (Bulbapedia, a franchise wiki's trainer
table), don't trust the derivation blindly -- re-check the name/species
encoding and the cumulative-hash bookkeeping first; those are the two
places a transcription slip is most likely.

## Workflow

1. Find the trainer's `TRAINER_<NAME>` constant and its `struct Trainer`
   entry in `trainers_en.h` for class, name, `doubleBattle`,
   `encounterMusic_gender`, `items`, and the party pointer name.
2. Look up that same name's array in `trainer_parties.h` for
   species/level/moves/heldItem per the `partyFlags`-selected struct shape.
3. Compute IV per mon (formula above).
4. Compute `personality` per mon, in party order, replicating the
   cumulative name-hash exactly (formula above) -- this requires processing
   the whole party in order, not one mon in isolation, since each mon's
   hash depends on every prior mon's species name too.
5. Derive nature/ability/gender from each mon's `personality` (formulas
   above), using this app's own species data for gender ratio and
   ability-slot names.
6. Assemble the `BattlePokemon` entry per mon.

## Cached reference files

`src/lib/data/references/gen3/pokeruby/`:

```
trainers_en.h              # every trainer's struct Trainer entry
trainer_parties.h           # every trainer's party array
battle_setup.h               # the four TrainerMon struct shapes
constants_trainers.h          # F_TRAINER_*, TRAINER_ENCOUNTER_MUSIC_* constants
constants_flags.h              # FLAG_BADGE0N_GET / FLAG_SYS_GAME_CLEAR (for saveCondition, not battles.ts, but same repo/cache)
charmap.txt                     # in-game text encoding, needed for nameHash
personality_derivation.c         # curated excerpts: CreateNPCTrainerParty,
                                   GetNatureFromPersonality,
                                   GetGenderFromSpeciesAndPersonality, and
                                   CreateBoxMon's IV/ability-assignment block
```

These are static reference data (a shipped, unpatched GBA game's trainer
data does not change), so there's no refresh cadence -- re-fetch only if a
lookup here turns up something inconsistent with an independently-verified
value, which would suggest a stale or truncated cache.

**Extend, don't duplicate, this cache.** If Emerald (or another Gen 3 game)
onboarding comes up, add `references/gen3/pokeemerald/` with that repo's
own equivalent files -- verify its struct shapes and personality formula
independently rather than assuming they're identical to `pokeruby`'s (the
user explicitly flagged Ruby/Sapphire vs. Emerald as meaningfully
different when this game was onboarded).
