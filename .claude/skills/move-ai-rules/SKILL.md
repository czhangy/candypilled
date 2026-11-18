---
name: move-ai-rules
description: Author a game's per-move AI notes (Game.moveAi) from the decomp or ROM, including a hack's AI changes. Use when onboarding a game, or when a hack changes moves or the AI script.
---

# Move AI notes

`Game.moveAi` is `MoveAiData` (`src/lib/static/types.ts`): `rules` (rule key to `{ flag, details }`) and `moves` (move slug to the rule keys that apply, in flag run order). Each rule is written once and shared by every move it applies to. The Data tab's Moves subtab and the calc's AI routine modal read it through `MoveHelpers.getMoveAi`, which merges a move's rules by flag. Data lives in `src/lib/data/move-ai/<name>.ts`; `rules` holds only keys some move uses.

Rule keys are the decomp script's own labels (Gen 3 `AI_CBM_AttackUp`, `AI_CV_Heal`; Gen 4 `Basic_*`, `Expert_*`, `TagStrategy_*`) plus a few flag-wide keys (below), so every rule traces to its source.

## 1. Reuse first

Games that share an AI script share a rules object: Diamond, Pearl, Platinum and Renegade Platinum use the Gen 4 rules; Ruby and Sapphire share one set. Only author rules for a script that is new. Confirm sharing by comparing the AI `narc` bytes with the existing game's; never trust "nearly identical" claims. A hack that differs gets the shared rules plus overrides (Renegade Platinum overrides only `Expert_Trick`).

## 2. Moves to effects

Key everything by numeric move ID (PokeAPI IDs match the games'), never by slug spelling.

- **Gen 3:** `include/constants/moves.h` for IDs and `src/data/battle_moves.h` (Ruby: `battle_moves.c`) for `.effect`, `.power`, `.type`.
- **Gen 4 vanilla:** pokeplatinum `res/moves/<name>/data.json` (`effect.type`, `power`, `type`) with `generated/moves.txt` for IDs.
- **ROM hack:** parse its move table (`pl_waza_tbl.narc`: 16-byte records, u16 effect, u8 class, u8 power, u8 type, u8 accuracy, u8 pp, u8 effect chance, u16 range) and name effects with `generated/move_battle_effects.txt`. Use the hack's own effects, power and type: Renegade Platinum differs from Platinum on 16 moves' effects and 87 moves' power or type.
- **Retired moves:** a hack that removes moves and reuses their slots (Renegade Platinum) holds the replacement's data in the old slot. Match each retired slot to its replacement by effect, power, type, accuracy, PP and effect chance, and key the replacement's slug. Drop any slot whose move is not in the game's `dataSource.moves`.

## 3. Script differences in a hack

Compute each label's byte offset from the macro sizes (`asm/macros/aicmd.inc`: count the `.long` lines per macro and sum through `script.s`). The compiled blob offset is the label offset minus 40 (validate that against a known table first). Diff the hack's AI `narc` with vanilla and map every differing byte to its label. Renegade Platinum differs only in three `Expert_Trick_*` item lists: Power Anklet (`HOLD_EFFECT_LVLUP_SPEED_EV_UP`) is removed from each.

## 4. Which rules a move gets

For each move, add keys in flag order:

- **Dispatch rules:** the label its effect jumps to in each flag's main dispatch (Gen 3 `if_effect X, label` in `AI_CheckBadMove_CheckEffect` and `AI_CheckViability`; Gen 4 `IfCurrentMoveEffectEqualTo` in `Basic_ScoreMoveEffect` and `Expert_Main`). One label, one rule.
- **Effect-list flags (templated):** a move gets the flag's rule when its effect is in the flag's table: Setup First Turn, Risky, Harassment, Weather moves, HP Aware / Check HP (five rules: user above 70%, user 31-70%, user 30% or below, target 31-70%, target 30% or below). Read each game's own tables.
- **Ranked moves.** The AI compares ranked moves by damage. Gen 3: power above 1 and effect not in the ignored list (`sIgnoredPowerfulMoveEffects`; Ruby `sDiscouragedPowerfulMoveEffects`). Gen 4: effect in `sAltPowerMoveEffects`, or power above 1 and not in `sNoDamageCalcMoveEffects`. Ranked moves get the immunity rule and the "not its strongest" rule. **Unranked** moves (status moves, and damaging moves with special handling) get Prefer Power Extremes / Prioritize Extremes and a Baton Pass rule.
- **Flag-wide rules:** immunity checks (Check Bad Move / Basic), Soundproof for the sound moves, KO and strongest-move rules (Try To Faint, Eval Attack), the four Baton Pass variants (setup moves, Protect, Baton Pass itself, others), Double Battle / Tag Strategy specifics including rules for a move used on the AI's own partner, and the generic Tag Strategy damage adjustments.
- **Per-game differences:** Ruby/Sapphire apply the immunity rule to ranked moves only (Emerald also to Fissure and Horn Drill), have no 4x rule in Try To Faint, no Double Battle flag, and a simpler Baton Pass. Diamond and Pearl do not run `Expert_SpeedDownOnHit` for Icy Wind, Mud Shot and Rock Tomb. Don't attach a rule to every move when it does nothing for most (Gen 4's Weather bonus on non-weather moves was dropped for that reason).

## 5. Writing rule prose

Gameplay only. Never mention bugs, glitches, code or labels in `details`; put suspected oddities in a maintainer note and describe exactly what the code does. Lead with the score change (`-10 if ...`, `61% chance of -1 if ...`). One sentence per bullet, 1-5 bullets. "Its" is the AI Pokémon, "the target" the Pokémon the move is aimed at.

Conversions:

- A random check `if_random_less_than N, skip` applies the fall-through path with probability (256 - N) / 256 (50 -> 80%, 70 -> 73%, 80 -> 69%, 100 -> 61%, 128 -> 50%). Multiply stacked checks.
- Stat stage 6 is +0: `less_than 9` is below +3, `more_than 8` is +3 or higher, `more_than 3` is -2 or higher, `equal 12` is +6.
- HP checks are exclusive percentages (`more_than 70` is above 70%).
- Follow fall-through into the next label and shared tail labels. In Gen 4 only `COMPARE_SPEED_SLOWER` takes the "moves second" branch, so a speed tie counts as moving first.
- Gen 3 `is_first_turn_for` is nonzero on the first turn out, so a routine that exits on nonzero applies only after the first turn.

Verify command semantics in the decomp C source, not the comments: Gen 4 comments are often wrong or inverted. Known cases: `IfBattlerDealsMoreDamage(DEFENDER)` jumps when the **target** deals more; `DiffStatStages` is target minus AI; `FlagMoveDamageScore` defines ranking. Scan every `IfLoadedInTable` for a load command that doesn't match the table's value kind (Assurance loads a hold effect but its table lists item IDs, so the berry case never triggers).

Do this at scale as a write-then-verify workflow: batches of about 300 lines of routines, one writer per batch, then an independent verifier that re-traces every number and fixes errors in place. Verifiers corrected real mistakes (inverted first-turn conditions, wrong speed order, thresholds) in most batches, so never skip that pass. Only start a workflow when the user asks for one.

## 6. Assemble and check

Emit the TypeScript (`rules` pruned to used keys, `moves` keyed by slug), run Prettier, register the file as the game's `moveAi`, then run `npm run check:data`: it rejects unknown moves, unknown rule keys, flags from the wrong generation and unused rules. Spot-check a few moves through `MoveHelpers.getMoveAi` in each game (a setup move, a damaging move, a status move).
