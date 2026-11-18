---
name: battle-ai-flags
description: Derive each trainer team's AI flags (BattleTeam.aiFlags) from the game's own decomp or ROM data. Use when authoring battles.ts while onboarding battles.
---

# Trainer AI flags

Every `BattleTeam` carries a required `aiFlags: AiFlag[]`: the AI scripts that team's trainer **actually runs with in that battle**. Flags belong to a team, not a battle (a rival's starter variants can differ). Store flags by enum member name, never as raw numbers: bit order differs between games. The enum follows the game's generation: `Gen3AiFlag` (Ruby, Sapphire, Emerald) or `Gen4AiFlag` (Diamond, Pearl, Platinum and Platinum hacks). A new generation needs a new enum, `AiFlag` union member, `getValidAiFlags` / `getImpliedDoubleFlag` cases in `check-game-data.ts`, and a `Gen<N>Ai` references tab: ask the user before adding one.

## Sources and bit order

Flags come from the game's own trainer data, never from the user for a vanilla game. Specials (roaming, safari, first-battle, catch tutorial) are battle modes, not trainer flags: never store them.

| Game               | Source                                                                                                                                           | Flag field                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| Emerald            | pokeemerald `src/data/trainers.h` (+ `trainer_parties.h`)                                                                                        | `.aiFlags`, `AI_SCRIPT_*` names    |
| Ruby, Sapphire     | pokeruby `src/data/trainers_en.h` (+ `trainer_parties.h`)                                                                                        | `.aiFlags`, raw hex                |
| Platinum           | pokeplatinum `res/trainers/data/<trainer>.json` (blobless clone: read with `git show`)                                                           | `ai_flags`, `AI_FLAG_*` names      |
| Diamond, Pearl     | pret/pokediamond `files/poketool/trainer/trdata.json`                                                                                            | `unkC` (it is the AI flag bitmask) |
| Platinum ROM hacks | `trdata.narc` (20-byte header, u32 at 0x0C) and `trpoke.narc` (parties) from the DSPRE dump, unless the hack's tracker says otherwise. Ask first | bitmask in Platinum bit order      |

Bit order (script run order). Names are the enum members:

- **Emerald:** 0 CheckBadMove, 1 TryToFaint, 2 CheckViability, 3 SetupFirstTurn, 4 Risky, 5 PreferPowerExtremes, 6 PreferBatonPass, 7 DoubleBattle, 8 HpAware, 9 TrySunnyDayStart.
- **Ruby/Sapphire:** 0 CheckBadMove, **1 CheckViability, 2 TryToFaint** (swapped from Emerald), 3 SetupFirstTurn, 4 Risky, 5 PreferPowerExtremes (called Prefer Strongest Move in the code), 6 PreferBatonPass, 7 unused, 8 HpAware, 9 TrySunnyDayStart. The same raw `0x3` means different flags in Ruby and Emerald.
- **Gen 4:** 0 Basic, 1 EvalAttack, 2 Expert, 3 SetupFirstTurn, 4 Risky, 5 PrioritizeExtremes, 6 BatonPass, 7 TagStrategy, 8 CheckHp, 9 Weather, 10 Harassment.

Write each team's flags in bit order.

## Matching a decomp trainer to a team

Match **per team** (not per battle), so starter-conditional rival variants each resolve to their own trainer.

1. Normalize names (lowercase, strip non-alphanumerics) and compare the trainer name plus the party as an ordered list of (species, level). A `secondTrainer`'s teams match against `secondTrainer.name`.
2. If no trainer matches by name, fall back to the party alone, but only when every trainer with that party has the same flags. Anonymous grunts (numbered names) always take this path.
3. If candidates differ, disambiguate with the trainer class (a hack's `trdata` class byte; learn the class-slug to class-byte mapping from unambiguous matches). Otherwise ask the user.
4. Form slugs (`wormadam-plant`) may not match the decomp's species: match those by hand against the trainer's name.
5. Report every unmatched or ambiguous team and every team whose party differs from the decomp's (a tracker that lists fewer Pokémon than the ROM is a data error to flag). Never guess or leave a placeholder.

## What to write (effective flags)

1. Start from the trainer's own data flags.
2. **Gen 3 two-opponent battles** (a battle with a `secondTrainer`): the game ORs both trainers' flags, so write the union on every team of both trainers.
3. **Double battles:** add the flag the game adds at runtime for any battle whose metadata the user gave as `Double`, `TrueDouble` or `Tag`: Emerald `DoubleBattle`, Gen 4 `TagStrategy`. Ruby and Sapphire have none. Derive it from the user's metadata, never from source text.
4. **A Gen 3 tag partner** (Steven in Emerald) has no flags in its data and runs with the opposing trainers' flags: write `aiFlags: []`. Gen 4 partners have their own data: use it.

## Validation

`npm run check:data` rejects flags from the wrong generation, a `DoubleBattle` in Ruby/Sapphire, and a missing or surplus implied double flag (tag partners are exempt). The flags appear as a section on the battle card and in the calc's AI routine modal.
