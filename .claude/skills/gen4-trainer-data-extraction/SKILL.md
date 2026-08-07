---
name: gen4-trainer-data-extraction
description: Extract real trainer battle data (species, level, moves, ability, nature, gender, IV) for a Generation 4 game (Diamond, Pearl, Platinum) from that game's ROM decompilation, for populating battles.ts. Gen 4 (NDS pret-style decomp) specific -- does not generalize to other console generations.
---

# Extracting Gen 4 trainer battle data

This skill is scoped to **Generation 4 NDS games decompiled by the pret
project** (`pokediamond`, `pokeplatinum`) and their `TrainerMon`-shaped
binary trainer data. It does not generalize to other generations/consoles --
a GBA-era pret decomp (`pokeemerald`, etc.) stores trainer parties as plain C
array literals with real IV/gender fields already resolved, which is a
fundamentally different (much simpler) extraction problem than the one
documented here. If this project ever onboards a non-Gen-4 game, this skill
is not the reference to reach for; write a new one.

Use this alongside `onboard-new-game`'s "Scaffold battles" step -- this
skill covers _how to source_ a trainer's team contents (pass 1's `team`
array), not the app's battleKey-naming or two-pass workflow conventions,
which live there.

## Where the data lives

Each Gen 4 pret decomp stores trainer data as a NARC-backed binary array,
exposed in the repo as a template-generated JSON at
`files/poketool/trainer/trdata.json` (pokediamond; verify the exact path
per-repo, don't assume pokeplatinum mirrors it exactly -- see "games are
independent" note below). This is the real, primary-source data -- fetch it,
don't transcribe it by hand.

**A neighboring `trpoke.json.txt` in the same directory is a Jinja/Nunjucks
_template_ file, not data** -- it's the code that generates the compiled
binary from `trdata.json` at build time. Don't try to extract trainer
contents from it; it contains no per-trainer values.

Each `trdata.json` entry has this shape (field names come from
`include/trainer_data.h`'s `TrainerMon` union):

```json
{
    "index": 295,
    "type": "TRTYPE_MON_ITEM_MOVES",
    "class": "TRAINER_CLASS_COMMANDER_MARS",
    "name": "{TRNAME}Mars",
    "items": [],
    "doubleBattle": 0,
    "party": [
        {
            "difficulty": 100,
            "level": 14,
            "species": "SPECIES_ZUBAT",
            "item": "ITEM_NONE",
            "moves": ["MOVE_BITE", "MOVE_LEECH_LIFE", "MOVE_TOXIC"]
        }
    ]
}
```

`index` is the trainer's global ID -- the same `rom_id`/`TRAINER_*` index
`battles.ts`'s top-of-file comment already documents as the input to the
generic `trainerFlag = rom_id + 1360` formula. `type` tells you which
optional fields are present (`TRTYPE_MON` has neither `item` nor `moves`;
`_MOVES`/`_ITEM`/`_ITEM_MOVES` add them). `class` maps to this app's
trainer-class slugs (check `src/lib/data/trainer-classes.ts`, not a
transcription -- the decomp's `TRAINER_CLASS_*` naming doesn't always match
this app's slug 1:1).

## The `difficulty` field is not human difficulty -- it's the raw IV seed

Despite the name, `difficulty` is the byte that determines the mon's IV
(uniform across all six stats, matching this app's `ivs: number`
convention). Confirmed directly from `arm9/src/trainer_data.c`,
`CreateNPCTrainerParty`:

```c
// Difficulty is a number between 0 and 250 which directly corresponds
iv = (u8)((monSpecies[i].difficulty * 31) / 255);
```

Compute this exactly (`Math.floor(difficulty * 31 / 255)`), per mon -- don't
assume a whole trainer class shares one difficulty tier without checking
each entry, and don't reuse a previously-derived difficulty-to-IV mapping
from a different `class`/location without re-checking that entry's own
`difficulty` value. (A real bug this caught: four already-committed
Diamond/Pearl `galactic-grunt-m-*` battles had been authored with `ivs: 0` --
actual decomp `difficulty` was 30 for all of them, i.e. real IV 3.)

The same `seed`/`CreateNPCTrainerParty` logic (a few lines above the `iv`
computation in `trainer_data.c`) is also gen 4's mechanism for
nature/ability/gender/shininess, all derived from one deterministic
personality value seeded by `difficulty + level + species + trainerId`. It's
possible to hand-derive nature/ability/gender the same way IV was derived
above, but in practice cross-referencing a secondary source (next section)
for those fields and reserving hand-derivation for IV (and for resolving a
contradiction) is faster and just as reliable, since the formula chain for
personality -> nature/ability/gender is longer and easier to get subtly
wrong than the one-line IV formula.

## Cross-referencing OttoTonsorialist/pkmn_gen_four_trainer_data

`github.com/OttoTonsorialist/pkmn_gen_four_trainer_data` publishes
`dp_trainers.json` (Diamond/Pearl) with nature/ability/moves/held-item
already resolved per trainer, keyed by the same `rom_id` as pret's `index`.
This is the fastest path to moves/ability/nature -- match on `rom_id` and
take those fields directly rather than re-deriving them.

**Do not trust this source's `personality` field for gender.** It looks like
a real 32-bit PID, but empirically its low byte is a near-constant value
(0x88 across most entries observed, occasionally 0x78) that does not vary
meaningfully with the actual in-game gender -- feeding it through the
standard gender-threshold formula produces wrong answers that contradict
already-verified data (e.g. it predicts female for a Pokémon already
confirmed male via decomp cross-check). Get gender from Bulbapedia's
location-specific trainer battle listing instead (that page lists each
trainer's team with gender symbols per game version) -- treat the OttoTonsorialist
source as covering moves/ability/nature/held-item only.

## Workflow

1. Get the trainer's global ID(s) for the location (from the map's compiled
   script disassembly, same anchor-and-trace method as save-condition
   derivation in `onboard-new-game`, or from a `battles.ts` comment left by
   a prior derivation pass referencing the same map).
2. Look up that index in the decomp's `trdata.json` for species/level/
   moves/item/`difficulty`.
3. Compute IV from `difficulty` directly (formula above).
4. Cross-reference the same `rom_id` in `dp_trainers.json` for
   nature/ability/held-item (Diamond/Pearl only -- there is currently no
   equivalent cached source for Platinum; derive Platinum natures/abilities
   from its own decomp's personality-seed formula, or ask the user, rather
   than assuming a shared-generation value carries over).
5. Get gender from Bulbapedia's trainer-listing for that location, filtered
   to the correct game version's column.
6. Assemble the `TeamMember` entry. Sanity-check the assembled moveset
   against the mon's level and level-up learnset if the decomp `moves` field
   was absent (`TRTYPE_MON`/`TRTYPE_MON_ITEM`) -- those types mean the game
   computes moves from the level-up table at battle time, so use this app's
   own move-data (`src/lib/data/raw/moves.json` / learnset source) rather
   than guessing.

## Cached reference files

Fetching the full pret decomp repo per-lookup is wasteful -- it's mostly
compiled ARM assembly and binary NARC assets unrelated to trainer data. Only
the handful of files this skill actually reads are cached locally at
`src/lib/data/references/gen4/`:

```
references/gen4/
  pokediamond/
    trainer_data.h              # TrainerMon struct shapes
    trainer_data.c               # CreateNPCTrainerParty, the IV formula
    trdata.json                   # every trainer's party data (shared Diamond/Pearl)
  pkmn_gen_four_trainer_data/
    dp_trainers.json              # Diamond/Pearl nature/ability/moves cross-reference
```

These are static reference data (a shipped, unpatched NDS game's trainer
data does not change), so there's no refresh cadence to maintain -- re-fetch
only if a lookup here turns up something that looks inconsistent with a
value already independently verified (e.g. against Bulbapedia), which would
suggest the cached file is stale or was truncated on download.

**Extend, don't duplicate, this cache.** If Platinum trainer-data work comes
up, add `references/gen4/pokeplatinum/` with the equivalent files from
that repo -- verify its `TrainerMon`-equivalent struct and IV formula
independently rather than assuming they're identical to pokediamond's (see
`onboard-new-game`'s "games are independent" rule -- it applies to sibling
Gen 4 games' decomps too, not just their in-game data).
