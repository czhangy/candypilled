# Renegade Platinum onboarding — reference

Handoff doc for onboarding Renegade Platinum (a Gen 4 ROM hack of Pokémon
Platinum) into the tracker. Read before doing any work in this folder.
Keep this doc lean — a procedural reference, not a session log. When a
process rule changes, edit the rule in place; don't append a dated
narrative about how it changed.

**YOU CANNOT ASSUME ANYTHING, ABOUT ANYTHING, EVER. This is not a
guideline, it is an absolute rule, and breaking it has already caused
real, repeated damage to this project's data integrity.** This covers
every single piece of data collected for this game, of any
kind, in any file, forever: species, levels, natures, abilities, items,
moves, genders, IVs, encounter rates, map anchors, coordinates,
metadata, split placement, save conditions, everything. There is no
category of data this rule doesn't apply to, and no future addition to
this doc gets to carve out an exception for itself.

Every single value comes from exactly one of two sources: (1) something
explicitly, literally present on the sheet or other documented source,
or (2) something the user has explicitly told you, in this game, for
this exact case. Nothing else is a valid source. Not: "every other field
in this row follows a pattern, so this one probably does too." Not:
"this is the only value that would sensibly work here." Not: "no note
was given, so the field must not apply / must be intentionally blank."
Not: "a similar case elsewhere used this value." Not: "this is common
knowledge about the games." None of these are data — they are guesses,
and a guess written into this dataset is corruption, indistinguishable
later from a real, sourced value, and it silently poisons the project's
integrity for good.

A missing, unclear, or ambiguous value is a **hard stop**: stop and ask
the user before writing anything, every time, with no exceptions for
convenience, obviousness, "surely this is fine," or wanting to finish a
task in one pass. This applies even to values that are structurally
optional in TypeScript (e.g. `ivs`, `heldItem`, `gender`) —
optional-in-the-type is never the same thing as optional-in-the-data.
Omitting a field is only ever correct when the source of truth
explicitly establishes that the field doesn't apply (e.g. a genderless
species's `gender`) — never as a stand-in for "I couldn't find a value."
If a value cannot be found and confirmed, the task is not done. Ask.

**Do not connect, merge, or reference anything against another part of
this project unless explicitly instructed.** A task naming one specific
thing (e.g. "wire Valley Windworks Interior") is a request to do exactly
that thing — not license to restructure an existing, separate, working
`Location` into a subarea of it, rename its map files, or otherwise
combine it with something else, even if that seems like the "correct"
data model. If a task looks like it should connect to something else,
ask; don't just do it.

**The data model comes from the user, not from parsing the sheet.**
Never infer a battle's structure (pairing two trainers as a Tag, treating
a note as a Multi Battle, assuming an existing type shape is "the" model,
declaring something unmodelable) from sheet phrasing or from what the
current schema happens to support. That's the same guessing this doc
already forbids for data values, just applied to structure instead of a
field. When a battle's shape isn't already established by the user for
this exact case, report what the sheet says and ask how to model it.

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

| Sheet cell                                                                                                                    | `battles.ts` field                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Trainer-name row, e.g. `Leader Roark`, `Youngster Jonathon`                                                                   | Split on the last space: everything before is a `trainer-classes.ts` slug (`leader-roark`, `youngster`), everything after is `name` (`'Roark'`, `'Jonathon'`)                                                                                                          |
| Multiple Pokémon columns under one trainer-name row                                                                           | One team — every column is a party member of that SAME trainer, not alternate options (only an explicit "If you chose X" line means alternates)                                                                                                                        |
| `Level <n>`                                                                                                                   | `level: <n>`                                                                                                                                                                                                                                                           |
| `<Nature> \n(+Stat -Stat)`                                                                                                    | Strip the parenthetical, `Nature.<Name>`                                                                                                                                                                                                                               |
| Ability cell                                                                                                                  | kebab-case → `ability: '...'`                                                                                                                                                                                                                                          |
| `No Item`                                                                                                                     | omit `heldItem` entirely                                                                                                                                                                                                                                               |
| Any other item text                                                                                                           | kebab-case → `heldItem: '...'`                                                                                                                                                                                                                                         |
| Move cells                                                                                                                    | kebab-case → `moves: [...]`, column order (Move 1-4), omit empty cells                                                                                                                                                                                                 |
| `<n> IVs` in the trainer-name cell                                                                                            | `ivs: <n>` uniform across the team. If a trainer's own cell has no IV note but a paired trainer's does (e.g. "Bottommost"/"Topmost" pairs), the paired value applies to both                                                                                           |
| Per-mon IV split (e.g. `29 IVs on Onix and Geodude` / `30 IVs on the rest`)                                                   | apply per named mon, not one team-wide `ivs`                                                                                                                                                                                                                           |
| A mon with **no** IV note anywhere applicable to it (no team-wide note, no paired-trainer note, no per-mon split covering it) | **NEVER omit the `ivs` field and never guess a number.** Stop and ask the user for the real value, exactly like a blank `Level` cell in the encounter tables. Every single team member gets a real, sourced `ivs` value — there is no such thing as a mon with no IVs. |
| `x1 <Item>` lines in the trainer-name cell                                                                                    | `BattleData.items: [{ count: 1, name: 'Potion' }]` — real field, sheet's own display text (not a slug)                                                                                                                                                                 |
| `Gifts TM<n> - <Move>` in the trainer-name cell                                                                               | post-battle TM reward — not modeled anywhere, ignore                                                                                                                                                                                                                   |
| "Double Battle w/ <Trainer>" note, or any other structural note (Multi Battle, alternates, etc.)                              | **Not mechanical.** Sheet phrasing is never grouped/structured on its own — see "Data model comes from the user, not the sheet" above. Report what the note says and ask how to model it.                                                                              |
| Gender                                                                                                                        | not a sheet column — derive from species `genderRate` (below); ask for the trainer's own gender whenever the trainer class doesn't fix it                                                                                                                              |

**Gender**: if `genderRate === 4` (50/50), the mon matches the trainer's
own gender. Otherwise the mon is always the species' majority gender
regardless of trainer, including every starter species. Genderless
species (`genderRate === -1`) get no `gender` field at all — that's the
one case omitting it is correct. Never omit `gender` for any other
species just because the sheet has no gender column; the app reads a
missing `gender` as "explicitly genderless."

**A mon's own gender and its trainer's gender are two completely
independent facts — never infer one from the other, in either
direction.** A mon's gender comes only from its own species' data
(`genderRate`) or, when `genderRate === 4`, from matching the trainer's
gender (a fact sourced the normal way, below — not derived backwards
from the mon). It is never valid to go the other direction and use a
mon's resolved gender to decide what the trainer's gender or
`trainerClass` slug is — e.g. a solo Galactic Grunt fielding a
majority-female species does **not** make that grunt `galactic-grunt-f`.

**Trainer gender rule — no exceptions, no judgment calls:** a trainer's
own gender is known without asking in exactly one case — the class is
listed in the "Trainer classes with a fixed gender" table below, added
there only after the user explicitly confirmed it for this game. **If
the trainer class is not in that table, you must ask the user for their
gender. Every time. Full stop.** Not from the name. Not from real-game
canon. Not from the species on their team. Not from what a
similar-looking trainer elsewhere turned out to be. Not from "this is
probably fine." Not from anything else. Ask. When the user confirms a class is fixed, add it to
that list immediately so it isn't re-asked next time.

### Trainer classes with a fixed gender

User-confirmed only — never add a class here from outside knowledge or
assumption, only after the user explicitly says so for this game.

| Class slug     | Gender | Confirmed  |
| -------------- | ------ | ---------- |
| `ninja-boy`    | male   | 2026-08-27 |
| `dragon-tamer` | male   | 2026-08-27 |
| `black-belt`   | male   | 2026-08-27 |
| `rich-boy`     | male   | 2026-08-27 |
| `battle-girl`  | female | 2026-08-27 |
| `beauty`       | female | 2026-08-27 |
| `lady`         | female | 2026-08-27 |
| `gentleman`    | male   | 2026-08-27 |
| `youngster`    | male   | 2026-08-27 |
| `lass`         | female | 2026-08-27 |
| `double-team`  | male   | 2026-08-27 |
| `worker`       | male   | 2026-08-28 |
| `fisherman`    | male   | 2026-08-28 |
| `camper`       | male   | 2026-08-28 |
| `picnicker`    | female | 2026-08-28 |
| `hiker`        | male   | 2026-08-28 |
| `scientist`    | male   | 2026-08-29 |
| `policeman`    | male   | 2026-08-29 |
| `poke-kid`     | female | 2026-08-29 |
| `sailor`       | male   | 2026-08-29 |

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

- Trainer IVs are **not** uniformly 31 — read the sheet's per-trainer IV
  value every time.
- Time-of-day (`Walking` Morning/Day/Night) collapses to one entry only
  when the three groups are actually identical for that location; if
  they differ, write real `conditions: ['time-morning' | 'time-day' |
'time-night']` entries.
- Save-file layout itself is confirmed against a real RP save (DeSmuME
  `.dsv`, "Pokemon - Platinum Version (USA) (patched).dsv"): both save
  halves pass CRC validation under vanilla Platinum's general-block
  layout (`gen4-save-layouts.ts`'s `renegade-platinum` entry, copied
  from `platinum` — size, offsets, checksum scheme all unchanged), and
  decoded money matched the user's actual in-game value exactly. There
  is no public RP decomp/source (it's Drayano's binary patch over
  Platinum) — confirmation has to be empirical, via save files, not
  static analysis.

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
| `renegade-platinum.ts` final assembly                             | Not started — `saveCondition` bits 0-1 confirmed, bits 2-7 assumed (vanilla order, unverified)                          |
| "What changed" diff UI                                            | Not started, not yet scoped                                                                                             |
