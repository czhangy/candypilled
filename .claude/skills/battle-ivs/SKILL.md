---
name: battle-ivs
description: Derive a trainer Pokémon's IVs for battles.ts from the game's own decomp or tracker. Use when authoring BattlePokemon.ivs while onboarding battles.
---

# Trainer IVs

IVs come only from the game's own primary source. Never take them from the user for a vanilla game, never back-solve them from stats (ambiguous at low levels), and never copy them from another game. Derive per Pokémon, never per trainer class: each party entry carries its own value.

**Vanilla Gen 3 (pret decomp):** each party entry has `iv`, a value from 0 to 255 applied to all six stats. The decomp computes `iv * 31 / 255`. Write `Math.floor(iv * 31 / 255)` as `ivs`.

**Vanilla Gen 4 (pret decomp, `src/trainer_data.c`):** each party entry has `ivScale`, which some data calls `difficulty`. The decomp computes `ivScale * MAX_IVS_SINGLE_STAT / MAX_IV_SCALE` with integer division, applied to all six stats. Read both constants from the decomp (`MAX_IVS_SINGLE_STAT` is 31) and apply the same arithmetic.

**ROM hack:** IVs come from its tracker. If the tracker doesn't clearly cover a team member, ask the user.

**Any other generation, or a decomp whose layout differs:** research the derivation in that game's decomp, add it to this skill, then use it. Never ask the user to supply IVs.

Decomps differ per game even within a generation. Check the actual struct and formula in the target game's decomp before reusing anything above.
