# Renegade Platinum onboarding — reference

Handoff doc for onboarding Renegade Platinum (a Gen 4 ROM hack of Pokémon
Platinum) into the tracker. Read before doing any work in this folder.
Keep this doc lean — a procedural reference, not a session log. When a
process rule changes, edit the rule in place; don't append a dated
narrative about how it changed.

**Do not connect, merge, or reference anything against another part of
this project unless explicitly instructed.** A task naming one specific
thing (e.g. "wire Valley Windworks Interior") is a request to do exactly
that thing — not license to restructure an existing, separate, working
`Location` into a subarea of it, rename its map files, or otherwise
combine it with something else, even if that seems like the "correct"
data model. If a task looks like it should connect to something else,
ask; don't just do it.

**A new location is always appended at the end of a split's `locations`
array, unless the user says otherwise.** Don't insert it earlier based on
guessed in-game/geographic order — that guess has been wrong every time
it's been tried. The array's order is the user's call, not something to
infer from the map layout.

## New-location checklist

Follow in this exact order, every time:

1. Stitch the map (`npm run stitch-map -- renegade-platinum <slug>`), add
   the barrel export in `maps/index.ts`.
2. Write `locations/<slug>.ts` (subareas, `mapAnchor`, `encountersKey`)
   and the corresponding `encounters.ts`/`battles.ts` entries. **Do not
   add x/y or a `battles` array yet if a battle needs placing.**
3. **Add the location to whatever `Split` it belongs in
   (`splits/*.ts`) — do this automatically, in the same pass, without
   stopping to ask first.** "Stitch and wire X" always means finish
   wiring, split included; don't treat this step as a checkpoint to
   pause at. Only ask first if which split it belongs to is genuinely
   ambiguous (more than one plausible split). This is also what makes
   the map visible in the running app — the user reads marker
   coordinates off the rendered map, not the raw PNG — so nothing past
   this point can be asked for before this step is done.
4. Only now ask for battle x/y and `BattleMetadata`, and add the
   `battles` array.

## Trainer battle data source

**100% sourced from the trainer-battles workbook below — never from
ROM/decomp extraction, and never via the `gen4-trainer-data-extraction`
skill.** That skill reads a vanilla, unpatched decomp's own trainer data;
it cannot reflect this hack's hand-edited rosters. Go straight to the
sheet.

## Source of truth

- **Encounters**: workbook `1UExH51A0xx2ktc0IkQY1x-vmfNb_Zjxm`, tab
  `Encounter Tables` (gid `729957394`) —
  `https://docs.google.com/spreadsheets/d/1UExH51A0xx2ktc0IkQY1x-vmfNb_Zjxm/export?format=csv&gid=729957394`.
  Fire Red Omega, Storm Silver, and Renegade Platinum are stacked
  vertically in this one tab. Find the Renegade Platinum section by
  searching for the literal string `Renegade Platinum` in column A (row
  number shifts as the sheet is edited), and stop at the `Ren Plat End`
  sentinel row — reading past it silently pulls in a different hack's
  data. Column layout is a 3-column stride per location (`Pokémon,
Level, Encounter Rate`), location name one row above the
  `Pokémon/Level/Encounter Rate` sub-header, rows grouped under a method
  label (`Walking (Morning)`, `Surfing`, `Poke Radar`, etc.) in column A.
  A blank `Level` cell is a genuine sheet gap — confirm the real value
  with the user rather than assuming a neighboring range carries over.
- **Trainer battles**: workbook `1uwR23b6kHRFYoav1Jzfx65qGfaxNQE8pI83Yr5mcVXQ`
  (`https://docs.google.com/spreadsheets/d/1uwR23b6kHRFYoav1Jzfx65qGfaxNQE8pI83Yr5mcVXQ`),
  one tab per gym split: Roark (`182366078`), Gardenia (`138786025`),
  Fantina (`446903300`), Maylene (`1305322844`), Wake (`1891935092`),
  Byron (`1236439805`), Candice (`527390430`), Volkner (`1865021164`),
  Champion (`1357697841`). Non-data tabs: `Raw Notes` (`810826549`),
  `Sprites` (`330078244`). Fetch a tab as CSV via
  `.../export?format=csv&gid=<gid>`.
- **Everything else** (STATS, LEARNSETS, EVOLUTiON/TYPE/MOVES, iTEMS/TMs,
  GiFTS/EVENTS, NPC/TRADES) comes from Google Sheet
  `1G3MNevhLmW1sKYluM4WT9TM1RqrTAi1c4lIdTfeU-Jg`. Fetch tabs individually
  as CSV via `.../export?format=csv&gid=<gid>` — the Drive
  `read_file_content` tool truncates this doc at ~972KB regardless of
  scope, don't use it here. Known gids:
    ```
    647134330  HOMEPAGE (hub/TOC)
    1585554208 STATS
    218384597  LEARNSETS
    2098433376 EVOLUTiON/TYPE/MOVES
    1939055360 iTEMS/TMs
    1306355674 GiFTS/EVENTS
    1801496803 NPC/TRADES
    721785423  FAQ/AR/RANDOMiZER (support content, never needed)
    1945634483 WIP Pokedex
    ```
    If tabs are added/renamed, re-derive by fetching the sheet's `/edit`
    URL HTML and regexing
    `\d+,0,"(\d{6,})",\[\{"1":\[\[0,0,"([^"]*)"` (name/gid pairs in the
    page's bootstrap JS). Same technique works via `/htmlview` +
    `name: "([^"]+)", pageUrl:[^,]+,\s*gid: "(\d+)"` for the trainer-battle
    workbook's tab list.

## Sheet cell → `battles.ts` field mapping

Mechanical — apply directly, never re-derive or grep an existing entry
to "check the convention":

| Sheet cell                                                                  | `battles.ts` field                                                                                                                                                           |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Trainer-name row, e.g. `Leader Roark`, `Youngster Jonathon`                 | Split on the last space: everything before is a `trainer-classes.ts` slug (`leader-roark`, `youngster`), everything after is `name` (`'Roark'`, `'Jonathon'`)                |
| Multiple Pokémon columns under one trainer-name row                         | One team — every column is a party member of that SAME trainer, not alternate options (only an explicit "If you chose X" line means alternates)                              |
| `Level <n>`                                                                 | `level: <n>`                                                                                                                                                                 |
| `<Nature> \n(+Stat -Stat)`                                                  | Strip the parenthetical, `Nature.<Name>`                                                                                                                                     |
| Ability cell                                                                | kebab-case → `ability: '...'`                                                                                                                                                |
| `No Item`                                                                   | omit `heldItem` entirely                                                                                                                                                     |
| Any other item text                                                         | kebab-case → `heldItem: '...'`                                                                                                                                               |
| Move cells                                                                  | kebab-case → `moves: [...]`, column order (Move 1-4), omit empty cells                                                                                                       |
| `<n> IVs` in the trainer-name cell                                          | `ivs: <n>` uniform across the team. If a trainer's own cell has no IV note but a paired trainer's does (e.g. "Bottommost"/"Topmost" pairs), the paired value applies to both |
| Per-mon IV split (e.g. `29 IVs on Onix and Geodude` / `30 IVs on the rest`) | apply per named mon, not one team-wide `ivs`                                                                                                                                 |
| `x1 <Item>` lines in the trainer-name cell                                  | `BattleData.items: [{ count: 1, name: 'Potion' }]` — real field, sheet's own display text (not a slug)                                                                       |
| `Gifts TM<n> - <Move>` in the trainer-name cell                             | post-battle TM reward — not modeled anywhere, ignore                                                                                                                         |
| "Double Battle w/ <Trainer>" note on two trainer blocks                     | one `battleKey`, `trainerClass`+`secondTrainer` (Tag structure), `BattleMetadata.Double`                                                                                     |
| Gender                                                                      | not a sheet column — derive from species `genderRate` (below); ask for the trainer's own gender whenever the trainer class doesn't fix it                                    |

**Gender**: if `genderRate === 4` (50/50), the mon matches the trainer's
own gender. Otherwise the mon is always the species' majority gender
regardless of trainer, including every starter species. Genderless
species (`genderRate === -1`) get no `gender` field at all — that's the
one case omitting it is correct. Never omit `gender` for any other
species just because the sheet has no gender column; the app reads a
missing `gender` as "explicitly genderless."

**Never guess a trainer's own gender from their first name.** This
applies even when a name is given and even when it looks unambiguous
(e.g. "Carlos", "Brady") — names are not a data source. A trainer's own
gender is only known without asking when the `trainer-classes.ts` slug
itself fixes it: a `-f`/`-m` suffixed class (e.g. `psychic-f`,
`pokefan-m`), or a class that's canonically single-gender by convention
(e.g. `beauty`, `lady`, `gentleman`, `rich-boy`). For every other class
(`collector`, `pi`, `veteran`, `artist`, `scientist`, `fisherman`,
`sailor`, `ninja-boy`, etc.) — including when the trainer needs a
`gender` because their mon's `genderRate === 4` — always ask the user
for the trainer's gender, every time, no exceptions.

**`BattleMetadata` is never on the sheet and never inferred** from
trainer class, species, or precedent from another battle. Every value in
`metadata: []` (`Boss`, `Miniboss`, `Optional`, `Double`, etc., including
the empty-array case) is supplied by the user. Always ask; never assume,
even when a similar-looking battle elsewhere got a specific value before.

## Per-location authoring loop

Every location goes through this three-part loop, with a confirmation
gate at every stage — even when parsed data looks unambiguous, state what
was parsed and what's about to be written before writing it:

1. **Map** — stitch (`dspre-map-stitch` skill), verify seams, ask the
   user for `mapAnchor` (no derivable source — it's a UI framing choice).
2. **Encounters** — fetch the location's block, state exactly what was
   parsed (species/level/method/rate per row), get explicit confirmation,
   then write to `encounters.ts`.
3. **Battles** — fetch the location's trainers, parse team data per the
   mapping table above, derive gender, ask for whatever the sheet can't
   supply (x/y, `BattleMetadata`), confirm the assembled entry, then
   write to `battles.ts`.

## Standing conventions

- Use the **COMPLETE** version column wherever the sheet has
  ORIGINAL/CLASSIC/COMPLETE variants (stats, typing, abilities).
- Trainer IVs are **not** uniformly 31 — read the sheet's per-trainer IV
  value every time.
- Pokémon sprites reuse vanilla Platinum's directly
  (`Game.pokemonAssetFolder`), no per-entity `sprites` data needed.
- `aiFlags` was removed from the app entirely — don't add it to new
  battle entries.
- Time-of-day (`Walking` Morning/Day/Night) collapses to one entry only
  when the three groups are actually identical for that location; if
  they differ, write real `conditions: ['time-morning' | 'time-day' |
'time-night']` entries.
- Gym order is unconfirmed against vanilla Platinum's — the TRAiNERS
  tab's section order suggested Fantina 3rd (vs. 5th in vanilla), but
  this was never verified against a complete tab read. Re-confirm before
  finalizing split order past Gardenia.
- Split `saveCondition` is a deliberate placeholder (`{ type: 'badge',
bit: -1 }`) on every split so far — RP's save-file badge-bit layout
  isn't confirmed against vanilla's. Don't fill in a real bit index
  without independently deriving/confirming it.

### Kalaay QoL patch deltas (layered on top of base RP)

The user plays with a community QoL patch stacked on base RP. Most of it
has no data to model (menus, repels, instant friendship evos, etc.). The
parts that changed already-authored data:

- Onix's evolution: `level-up` 32 (not `use-item`/Metal Coat).
- Substitute TM removed from all species that learn it via TM (488
  species) — species that learn it via level-up/tutor/egg are unaffected.
- Frustration and Return are fixed `power: 102` (not friendship-scaled).
- Static Beldum gift (Oreburgh City) and static Lapras gift (Pastoria
  City, Lv35) both removed from `encounters.ts`.
- Happiny and Togepi removed from the Jubilife Trainer School egg's
  possible hatches.
- Manaphy egg gift (Mr. Backlot) removed entirely.

### Known sheet inaccuracies (don't silently re-trust if re-verifying)

- `Encounter Tables`' `Floaroma Town` block lists 6 Fossil-method
  entries — wrong. Real encounter is Chikorita/Cyndaquil/Totodile, Gift,
  Lv5, 33% each (user-confirmed correction already applied).
- Gardenia Split tab has **two separate "Valley Windworks" header
  blocks** (one solo Grunt already wired; a second block later in the
  tab has 2 more solo Grunts plus a Commander Mars battle, not yet
  pulled in).

## Architecture: override/patch layer

RP's Pokémon/move data is modeled as **vanilla data + a sparse override
table**, not an independent dataset (encounters/battles remain fully
independent — this mechanism doesn't apply to them). Shared, reusable
mechanism for any ROM-hack game, not RP-specific:

- `DataOverrides<T> = Record<string, Partial<T>>` (`types.ts`) — sparse,
  field-level patch keyed by slug.
- `GameDataSource.overrides?: { pokemon?: DataOverrides<PokemonData>;
moves?: DataOverrides<MoveData> }` — kept unmerged for a future "what
  changed" UI; `pokemon`/`moves` on `GameDataSource` hold the merged
  result.
- `DataOverrideHelpers.applyOverrides<T>(base, overrides)` — shallow
  per-field replace, matched by slug.
- `DataOverrideHelpers.removeEntries` — for content a hack retires
  outright (used for RP's 11 removed moves).
- RP's `pokemon.ts`/`moves.ts` import vanilla data + a sparse overrides
  JSON (`raw/pokemon-overrides.json`, `raw/moves-overrides.json`) and
  export the merged result. Items are unchanged from vanilla — no
  override table, no per-RP items file.
- When diffing a field against vanilla to decide if it needs an
  override, diff against vanilla's value **as resolved for
  `generation: 4`** (the entry `GenerationHelpers.resolveGeneration`
  would actually pick), not just "does vanilla's array contain this
  value anywhere."
- A "what changed" diff UI is wanted future work, not yet built.

## Phase status

| Area                                                              | Status                                                                                                                  |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `pokemon.ts` overrides                                            | ✅ Done — full dex (505 species+forms)                                                                                  |
| `moves.ts` overrides                                              | ✅ Done — 129 overrides + 11 removals                                                                                   |
| `items.ts`                                                        | ✅ N/A — unchanged from vanilla, no override table                                                                      |
| `encounters.ts` / `locations/*.ts` / `battles.ts` / `splits/*.ts` | 🔶 In progress, authored incrementally per-location via the loop above. 20 locations wired, 2 splits (Roark, Gardenia). |
| `renegade-platinum.ts` final assembly                             | Not started — still carries a placeholder `saveCondition` TODO                                                          |
| "What changed" diff UI                                            | Not started, not yet scoped                                                                                             |

## Open items

- Gym order vs. vanilla — unconfirmed (see Standing conventions above).
- Split `saveCondition` badge-bit indices — unconfirmed for every split.
- Diff UI (Phase 10) — no design decided (badge? panel? both?).
