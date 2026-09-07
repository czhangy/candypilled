# Implementation plan: Gen 3 save-file parser (`Gen3SaveParser`/`Gen3SplitParser`/`Gen3TrainerParser`)

**Audience for this document:** an agent with zero prior context on this
project or conversation. Read this file top to bottom before touching any
code — it is meant to be self-sufficient.

## What this task is

This app lets a user upload a decrypted save file and have it
auto-populate a run's caught Pokémon, completed splits, and protagonist
gender. `src/lib/parsers/SaveFileParser.ts` is the single entry point that
dispatches to a generation-specific parser based on `game.version`:

```ts
static parse(game: Game, buffer: ArrayBuffer): {
    pokemon: CaughtPokemon[];
    completedSplits: string[];
    gender: 'male' | 'female';
} {
    switch (game.version) {
        case 'platinum':
        case 'diamond-pearl':
        case 'renegade-platinum':
            return {
                pokemon: Gen4SaveParser.parse(game, buffer),
                completedSplits: Gen4SplitParser.parse(game, buffer),
                gender: Gen4TrainerParser.parseGender(game, buffer),
            };
        default:
            throw new Error(`Save import isn't supported for ${game.name}.`);
    }
}
```

There is no Gen 3 case yet — `game.version` values `'ruby-sapphire'` (and
any other Gen 3 game added later) fall through to the `throw`. This task
is to write the Gen 3 equivalent of the three Gen 4 parser classes, wire
them into this `switch`, and verify against a real Ruby or Sapphire save
file.

**This is fundamentally an engineering task, not a data-collection task
from the user.** Unlike `battles.ts`, this does not require a
per-location collaborative loop — you should be able to research and
implement this independently, from documented save-format sources and the
existing Gen 4 parser as a structural template. Only stop and ask the user
if you hit a genuinely Ruby/Sapphire-specific ambiguity you cannot resolve
from a primary source (Bulbapedia's save-structure article, the pokeruby
decomp, or a real test save file), or if you need the user to actually
supply a real save file to test against.

## Read these before starting

1. `src/lib/parsers/SaveFileParser.ts` — the dispatch point you're wiring
   into.
2. `src/lib/parsers/gen4/Gen4SaveParser.ts`,
   `src/lib/parsers/gen4/Gen4SplitParser.ts`,
   `src/lib/parsers/gen4/Gen4TrainerParser.ts`,
   `src/lib/parsers/gen4/Gen4SaveBlocks.ts`,
   `src/lib/parsers/gen4/gen4-save-layouts.ts`,
   `src/lib/parsers/gen4/gen4-item-index.ts` — read all of these in full.
   This is the architectural template to mirror: a per-generation
   subdirectory, a `SaveBlocks`-style helper that locates the currently
   active save copy and validates its checksum, a `*SaveLayout`-style
   per-game offset table (only if offsets actually differ between Ruby
   and Sapphire — confirm this; they likely do not, since R/S share nearly
   everything but wild encounters), and separate `*SplitParser`/
   `*TrainerParser`/`*SaveParser` classes with narrow, single-purpose
   `parse()` static methods.
3. `src/lib/static/types.ts` — read `SplitSaveCondition`, `Split`,
   `CaughtPokemon`, `Game`, and any `Gen4SaveLayout`-equivalent type
   already defined, to understand the exact shapes you're producing/
   consuming.
4. `src/lib/data/ruby-sapphire/ONBOARDING.md` — the badge-bit derivation
   table (`saveCondition` on every Ruby/Sapphire split) is already
   resolved there; do not re-derive it, just consume it.
5. `src/lib/data/references/gen3/pokeruby/constants_flags.h` — already
   cached; confirms `SYSTEM_FLAGS = 0x800 = 2048` and
   `FLAG_BADGE01_GET` through `FLAG_BADGE08_GET` /
   `FLAG_SYS_GAME_CLEAR`, which is exactly what each Ruby/Sapphire
   split's `saveCondition.bit` already encodes (an absolute bit index
   into the game's flags bit-array, not a bit position within one byte —
   confirm this distinction against Gen 4's scheme below, they are NOT
   the same shape).

## Key structural difference from Gen 4 — read carefully

Gen 4's `SplitSaveCondition` for a badge split stores `bit` as a bit
position (0-7) within a single `badgeMask` byte — see
`Gen4SplitParser.ts`'s `(badgeMask & (1 << split.saveCondition.bit)) !== 0`.

**Ruby/Sapphire's splits do not use that shape.** Every Ruby/Sapphire
split's `saveCondition.bit` (see `src/lib/data/ruby-sapphire/splits/*.ts`)
is an **absolute bit index into Gen 3's flags bit-array** (e.g. `2055` for
`FLAG_BADGE01_GET`, since `SYSTEM_FLAGS (0x800 = 2048) + 0x07 = 2055`).
Gen 3's flags are a large contiguous bit-array (`u8 flags[NUM_FLAG_BYTES]`
in pokeruby's `SaveBlock1`), not a single mask byte. To check whether flag
number `n` is set: read byte `Math.floor(n / 8)` of the flags array, and
test bit `n % 8` of that byte. **Do not reuse Gen 4's `(mask & (1 <<
bit))` logic verbatim against a single byte — you need to first index into
the correct byte of the flags array using `bit >> 3`, then test `bit &
7`.**

This means `Gen3SplitParser` does NOT need a `badgeMaskOffset`-style
single-byte layout field the way Gen 4 does — it needs the **offset and
length of the entire flags array** within `SaveBlock1`, plus `SYSTEM_FLAGS`
as a base if you want to store split conditions as raw absolute flag
numbers (which the existing Ruby/Sapphire split files already do — don't
change them).

## Gen 3 (GBA) save file format — verified against Bulbapedia

Source: https://bulbapedia.bulbagarden.net/wiki/Save_data_structure_(Generation_III)
(fetch and re-verify this yourself before implementing — do not trust a
paraphrase, including this one, as the final word on exact offsets).

- Total save file size: 128 KB (131,072 bytes), split into two 57,344-byte
  "game save blocks" (informally Block A at file offset `0x0000` and
  Block B at `0xE000`). The game alternates which block it writes to on
  each save, for wear-leveling — this is conceptually the same idea as
  Gen 4's two-half scheme in `Gen4SaveBlocks.ts`, but the mechanics
  (section-based, not one contiguous general+storage block) are
  different, so don't copy Gen 4's arithmetic directly.
- Each game save block is divided into **14 sections of exactly 4096
  bytes each** (section IDs 0-13). A section's ID is NOT fixed to a
  memory position within the block — sections can appear in any order
  within a block and must be identified by reading each section's own
  footer.
- **Per-section footer** (last 16 bytes of every 4096-byte section, i.e.
  offset `0x0FF4` through `0x0FFF` within the section):
    - `0x0FF4` (2 bytes): section ID (0-13)
    - `0x0FF6` (2 bytes): 16-bit checksum
    - `0x0FF8` (4 bytes): signature/magic constant `0x08012025`
    - `0x0FFC` (4 bytes): save index counter (a monotonically increasing
      value across saves, shared by every section in the same game save
      block)
- **Checksum algorithm** (verify exact word-count against the primary
  source per section, since section 0's data region is smaller than the
  others — see the section-size table below): initialize a 32-bit
  accumulator to 0; read the section's data region (everything before the
  footer) 4 bytes at a time as little-endian 32-bit words, adding each to
  the accumulator (wrapping); then fold the result by adding its upper 16
  bits to its lower 16 bits. Compare against the footer's stored 16-bit
  checksum.
- **Determining the active game save block**: compare the save index
  counter (read from section 13's footer, per Bulbapedia — confirm this
  is read from a specific section, not just "the first section found")
  of Block A vs. Block B. The block with the higher counter is the
  active/most-recent one; ties resolve to Block B per Bulbapedia. Only
  use a block if enough of its sections validate their checksums (mirror
  Gen 4's `selectActiveHalf` fallback-to-other-half pattern in
  `Gen4SaveBlocks.ts` if the "active" block fails validation).
- **Section sizes/purposes** (Ruby/Sapphire specifically — re-verify, do
  not assume these are identical to Emerald/FRLG, per this project's
  standing rule that different Gen 3 games are NOT assumed to share
  structure):

    | Section ID | Data size (bytes) | Purpose                |
    | ---------- | ----------------- | ---------------------- |
    | 0          | 3884              | Trainer info           |
    | 1          | 3968              | Team / items           |
    | 2          | 3968              | Game state             |
    | 3          | 3968              | Misc data              |
    | 4          | 3848              | Rival info             |
    | 5-12       | 3968 each         | PC storage buffers A-H |
    | 13         | 2000              | PC storage buffer I    |

- **Party/team location**: Section 1, offset `0x0234` (4 bytes: party
  count) then offset `0x0238` (6 × 100-byte Pokémon records = 600 bytes).
  Each 100-byte Pokémon record's internal structure (substructure
  ordering/encryption keyed by PID, same as Gen 3's `Pokémon data
structure` article) must be handled correctly — **this is the same
  100-byte format used by every Gen 3 game (R/S/E/FR/LG)**, so if this
  codebase or a future Gen 3 game's parser ever needs to decode a boxed/
  party Pokémon's species/level/moves/IVs from raw bytes, that decoder is
  reusable across all Gen 3 games — but confirm this shared-format claim
  against Bulbapedia's "Pokémon data structure (Generation III)" article
  before relying on it, and keep the substructure-order/encryption logic
  in a Gen-3-generic module (not one hardcoded to Ruby/Sapphire) if you
  end up writing it, so a later Gen 3 game can reuse it.
- **Event flags array location**: NOT confirmed in this plan — Bulbapedia's
  save-structure article did not clearly state which section/offset holds
  `SaveBlock1`'s `flags[]` array when this plan was written. **You must
  independently source this** — options, in order of reliability:
    1. pokeruby's decomp directly: find `struct SaveBlock1` in
       `include/global.h` (or wherever it's defined in a current pokeruby
       checkout) and locate the `flags` field's byte offset within that
       struct, plus which section(s) `SaveBlock1` spans (it's larger than
       one 4096-byte section, so it's likely split across multiple
       sections — sections 1-4 by size/purpose above are the likely
       candidates, but confirm rather than assume).
    2. Cross-check against a real save file: apply a known badge (e.g. get
       the Stone Badge in an emulator save), diff the save file before/after,
       and locate the single bit that flipped. This is the strongest
       possible verification — prefer it if you can get a test save file
       from the user.
    3. A save-editor tool's published offset table (e.g. a maintained GBA
       save-editing utility's source, if you can find one) — treat this as
       a starting hypothesis only, verify against (1) or (2) before trusting
       it.

## What to build

Mirror the Gen 4 file layout:

```
src/lib/parsers/gen3/Gen3SaveBlocks.ts      # active-block selection + checksum validation (mirrors Gen4SaveBlocks.ts)
src/lib/parsers/gen3/gen3-save-layouts.ts   # per-game offset table, IF Ruby/Sapphire ever need per-game values (may be unnecessary — R/S share one layout; only add this file if you find a real reason two Gen 3 games need different offsets)
src/lib/parsers/gen3/Gen3SaveParser.ts      # static parse(game, buffer): CaughtPokemon[]  (party + PC boxes -> CaughtPokemon)
src/lib/parsers/gen3/Gen3SplitParser.ts     # static parse(game, buffer): string[]  (evaluate every split's saveCondition against the flags array)
src/lib/parsers/gen3/Gen3TrainerParser.ts   # static parseGender(game, buffer): 'male' | 'female'
```

Then update `src/lib/parsers/SaveFileParser.ts`'s `switch` to add a case
for Ruby/Sapphire's `game.version` value (check
`src/lib/static/enums.ts`'s `GameVersionGroup` enum for the exact string —
likely `GameVersionGroup.RubySapphire`, but confirm) dispatching to the
three new Gen 3 classes, matching the existing Gen 4 case's shape exactly.

### `Gen3TrainerParser.parseGender`

Section 0 (trainer info) holds the protagonist's gender as a single byte
— locate its exact offset from the same pokeruby `SaveBlock2`/trainer-info
struct research as the flags array. (Note: in pokeruby, trainer info that
looks global across saves, like name/gender/trainer ID, typically lives in
`SaveBlock2`, which is a _different_ struct from `SaveBlock1` — don't
assume gender lives in the same section as the flags array just because
both were described loosely as "trainer info" above; verify which
struct/section each actually belongs to.)

### `Gen3SplitParser.parse`

```ts
static parse(game: Game, buffer: ArrayBuffer): string[] {
    const view = new DataView(buffer);
    const { flagsOffset } = Gen3SaveBlocks.locate(view); // or however you shape the return value
    const isFlagSet = (bit: number): boolean => {
        const byte = view.getUint8(flagsOffset + (bit >> 3));
        return ((byte >> (bit & 7)) & 1) === 1;
    };

    return game.splits
        .filter((split) =>
            split.saveCondition.type === 'badge'
                ? isFlagSet(split.saveCondition.bit)
                : isFlagSet(/* FLAG_SYS_GAME_CLEAR's absolute bit number, from constants_flags.h */)
        )
        .map((split) => split.name);
}
```

Confirm `FLAG_SYS_GAME_CLEAR`'s absolute bit number from
`src/lib/data/references/gen3/pokeruby/constants_flags.h` (already cached
— it's `SYSTEM_FLAGS + 0x04`) rather than hardcoding a guessed number.

### `Gen3SaveParser.parse`

Decode the party (Section 1, per the offsets above) and every PC box
(Sections 5-13) into `CaughtPokemon[]`. Each 100-byte Pokémon record needs
its encrypted substructure order/PID-based decryption handled — this is
shared Gen 3 logic (see the "Party/team location" note above about
factoring this out generically). Check `CaughtPokemon`'s exact shape in
`src/lib/static/types.ts` and `Gen4SaveParser.ts`'s equivalent logic for
what fields the app actually needs extracted (species, level, met
location via `metLocationById`, etc.) — don't extract more than the type
requires.

## Verification

1. `npx tsc --noEmit` and `npx eslint <every new/changed file>` after each
   class is written — must be clean throughout, not just at the end.
2. **Get a real Ruby or Sapphire save file from the user to test against**
   — this cannot be fully verified from decomp reading alone. If the user
   can provide one (or values from one — e.g. "I have the Stone Badge and
   my party is X, Y, Z"), use it to confirm: active-block selection,
   checksum validation, at least one badge flag reading correctly, and at
   least one party Pokémon decoding correctly (species + level match what
   the user reports).
3. Do not claim this parser works without that real-save verification —
   a save-format implementation that merely compiles and doesn't throw is
   not evidence it reads the right bytes.

## Do not

- Do not modify any `src/lib/data/ruby-sapphire/splits/*.ts` file's
  `saveCondition` values — they're already correct.
- Do not assume Emerald/FireRed/LeafGreen share Ruby/Sapphire's exact
  offsets if a later task extends this parser to those games — Gen 3
  games are independent data sources per this project's standing
  convention (see `.claude/skills/onboard-new-game/SKILL.md`'s "Every
  game is an independent data source" section) — verify independently.
- Do not stage or commit changes (`git add`) — leave everything unstaged
  per `CLAUDE.md`.
- Do not start a dev server for verification — rely on `tsc`/`eslint`
  plus the real-save-file check above.
