## Standing task: audit the remaining games

Two audits are owed for every game that isn't complete. **Start as soon as the user sends any message, even just "go".** The user never types commands or a special format: you run the tools, show each batch, take their answers in plain language, and translate them. Audit 1 runs in batches of 10 locations; audit 2 shows a whole split at a time. Don't recap or ask permission between batches; apply each answer as soon as it's given.

Order: Diamond/Pearl (they share one audit), Platinum, Renegade Platinum, then Emerald once its onboarding is finished (`src/lib/data/emerald/ONBOARDING.md`). For each game, finish audit 1 completely, then audit 2. Progress is stored in `src/lib/scripts/validation/game-configs.ts`: `auditedThrough` (audit 1) and `trimmedThrough` (audit 2). `null` means not started, and `complete` means done. Ruby and Sapphire are done. Read the file to see where each game stands.

**Never assume or recommend.** Every split, removal, and move is stated by the user. Unaudited data holds the game's first split as a placeholder, which looks identical to a real first-split answer, so only the pointers above say what's done.

### Audit 1: which split each battle and encounter method belongs to

Each battle (`BattleData.split`, tag partners included) and each encounter method (`methodSplits` on a `Location` or `Subarea`) records the split it first becomes available in. Locations go in Locations-tab order (alphabetical), after the pointer.

1. `npm run audit:sheet -- <Game> 10` prints the next 10 locations. Each section lists its battles, tag partners, and methods, read from the resolved data. Show it to the user.
2. The user answers in plain words ("all roark except surf, that's byron", "rest is winona"). Translate that into one line per section: `Label: split: items; split: items`. Items are `all`, `battles`, `tags`, `methods`, a method, or a battleKey. A specific item beats a group, which beats `all`. Splits match by name or unique prefix. If an item is left unassigned or the answer is ambiguous, ask about exactly that item.
3. Write the lines to a temp file with the sheet's `through:` line and run `npm run audit:apply -- <Game> <file>`. It validates everything first and writes nothing on any error. Otherwise it writes the splits, formats the files, and moves `auditedThrough` (Diamond and Pearl move together).
4. Run `npm run check:data`.

**Subarea model:** a subarea has one base split, and only a few battles or methods sit in a different one (write them as `Base: all; Other: item`).

**Platinum HM rule (applied without asking):** surf is only available from Byron and good-rod from Maylene. Whatever base split a user gives, a `surf` method is never earlier than Byron and a `good-rod` method never earlier than Maylene (a later base split stays as given). Apply it to every section, and mention it in one line. Old rod isn't covered.

To correct one section later, apply a single line without `through:`.

### Audit 2: trim each split's locations to the required ones

`Split.locations` lists only the locations the player must go through for that split. The user decides which to drop or reorder, split by split, in game order.

1. `npm run audit:trim-sheet -- <Game>` prints the next split's locations in order. Show the whole split at once, and ask which to remove or move. Do not suggest any.
2. Turn the answer into lines and run `npm run audit:trim-apply -- <Game> <file>` right away: `split: <Name>`, then `remove: A, B`, and `move: X after Y` (or `before Y`, or `first`). Add a `done` line, which moves `trimmedThrough`. It deletes imports nothing uses any more.
3. Run `npm run check:data` and `npx tsc --noEmit`.

### When every game is complete

Once every game in `GAME_CHECK_CONFIGS` has both pointers at `complete`:

- Remove the "Standing task" line and this doc's import from `CLAUDE.md`. The onboarding skill still points here for new games, so it loads on demand.
- Delete the `split-audit-terse-and-direct` memory.
- Keep the scripts, the `check:data` pre-commit hook, and the `never-assume-splits` memory.
