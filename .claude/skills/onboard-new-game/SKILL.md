---
name: onboard-new-game
description: Add a new playable game (or a set of same-generation variant games like Diamond & Pearl) to the tracker. Use when asked to add a new game, add a game variant, or scaffold game data.
---

# Onboarding a new game

A game is a `Game` object (`src/lib/static/types.ts`) registered in `GAMES` (`src/lib/data/games.ts`). Onboarding is data authoring plus registration, never a component change.

If onboarding requires something no step covers, do it, then add it to the matching step in this skill (or a new step) before finishing.

## 1. Game metadata

Ask these in one plain-text list before creating anything. Never answer one from the game's name or another game's data.

Then create `src/lib/data/<slug>/ONBOARDING.md` and record every answer in it. Later steps add to it; edit in place, never as a log.

| Question                                                                                                    | Decides                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Is it a ROM hack, or a vanilla game?                                                                        | Data sources for trainers and encounters. A hack's tracker is the source, since PokeAPI and the decomp reflect the unpatched base game. |
| Does it change Pokémon or moves from its base game?                                                         | Whether it needs `DataOverrides` (a sparse diff over vanilla) or an independent dataset, instead of `VANILLA_DATA_SOURCE`.              |
| Is there a trusted decomp of this exact game?                                                               | Trainer data, badge bits and flags come from the decomp. Without one, they come from a tracker or a real save.                          |
| Is it one of a set of variants that differ only in wild encounters (like Diamond and Pearl)?                | One shared data folder plus a subfolder per variant.                                                                                    |
| What generation and PokeAPI version-group slug does it use? (For a hack, that of the base game it patches.) | `Game.generation`, `Game.version`, and the encounter scraper config.                                                                    |
| Which sprite and badge art does it use?                                                                     | Whether `badgeAssetFolder`, `trainerAssetFolder` and `pokemonAssetFolder` reuse an existing folder, or need new art.                    |
| What is its accent color?                                                                                   | `Game.accentColor`.                                                                                                                     |
| Does it need a text contrast color? (Optional.)                                                             | `Game.textContrastColor`, omitted when not needed.                                                                                      |

## 2. Data folder scaffold

Create `src/lib/data/<slug>/` (reference: `platinum/`). For a variant group, create the shared folder with one subfolder per variant (reference: `diamond-pearl/`). Every game gets:

- `ONBOARDING.md`: created in step 1.
- `<slug>.ts`: assembles and default-exports the `Game`.
- `index.ts`: `export { default } from './<slug>';`
- `met-locations.ts`: `MET_LOCATIONS: Record<number, string>`, met index to location name.
- `encounters.ts`: `ENCOUNTERS: Record<string, Encounter[]>`.
- `battles.ts`: `BATTLES: Record<string, BattleData>`.
- `locations.ts`: `LOCATIONS: Location[]`, every location in the game.
- `locations/`: one `Location` per file.
- `maps/`: map PNGs plus `index.ts`, one alphabetical export per image.
- `splits/`: one `Split` per file.

In a variant group, `encounters.ts` and `<slug>.ts` live in each variant's subfolder, and everything else is shared.

Start each data file as an empty typed export. Don't register the game yet. Add an entry to `GAME_CHECK_CONFIGS` in `src/lib/scripts/validation/game-configs.ts` for each game, with `dataFolder`, `unmappedLocations: []` and `isEnabled: false`, so `check:data` skips the game until onboarding is done.

## 3. Gather assets

Tell the user which assets are needed and where to place them, then wait for confirmation. Skip any folder that step 1 said is shared with an existing game.

- `public/logos/<slug>.png`: the game logo.
- `public/trainers/<trainerAssetFolder>/`: the male and female protagonist sprites, e.g. `lucas.png` and `dawn.png`.

Badges and trainer class sprites are requested later, once the splits and trainer classes are known.

## 4. Data source

- **Vanilla, or no Pokémon/move changes:** `dataSource: VANILLA_DATA_SOURCE` (`data-sources.ts`). Nothing to build.
- **A hack with changes (overrides):**
    - Ask the user for the source of the changes.
    - Write sparse `DataOverrides` JSON to `<slug>/raw/pokemon-overrides.json` and `moves-overrides.json`, diffed against vanilla as resolved for the hack's generation.
    - Create `<slug>/pokemon.ts` and `<slug>/moves.ts` in the shape of `renegade-platinum/`. They export `POKEMON_OVERRIDES` and `POKEMON`, and `MOVE_OVERRIDES` and `MOVES`, built with `DataOverrideHelpers.applyOverrides` (plus `removeEntries` for retired moves).
    - Add a `<SLUG>_DATA_SOURCE` to `data-sources.ts` with `overrides` set, reusing `ITEMS` unless items changed.
    - Set `Game.pokemonAssetFolder` to the version group whose Pokémon sprites the hack uses.
- **A hack with a wholly independent dataset:** ask the user.

Then decide whether Pokémon sprites need fetching. The sprite folder is `Game.pokemonAssetFolder ?? Game.version`. List the folders in `public/pokemon/`:

- If that folder already exists, skip.
- If it doesn't, ask the user to supply the sprites.
- If you are at all unsure, ask the user.

## 5. Encounters

- **Vanilla:**
    1. Add `src/lib/scripts/pokeapi/game-versions/<slug>.ts` exporting a `GameVersion` (shape: an existing file) and register it in `GAME_VERSIONS` in that folder's `index.ts`. `version` is the exact PokeAPI version slug.
    2. Run `npm run pokeapi:encounters <slug>`. It writes `src/lib/data/<slug>/encounters/encounters.json`, already shaped like `Record<string, Encounter[]>` with `method` as a raw string.
    3. Convert it to `encounters.ts` with a throwaway script: replace each `method` with `EncounterMethod.<PascalCase>`, wrap it as `export const ENCOUNTERS: Record<string, Encounter[]> = ...`, then `prettier --write`. Never hand-transcribe. Delete the JSON and the script.
- **A hack:** PokeAPI doesn't cover it. Ask the user for the encounter source, record it in `ONBOARDING.md`, and author `encounters.ts` from it.
- **Variants:** do this once per variant, each with its own `GameVersion` id and PokeAPI version slug, writing to that variant's `encounters.ts`.

Once `encounters.ts` is populated:

1. Tell the user to manually filter out any `encountersKey` entries the game doesn't need, and wait for them to finish.
2. Find the roaming Pokémon in the encounter data and set `Game.roamers` (`{ species, level }` per roamer). Omit the field when there are none. Never ask the user for roamers.

## 6. Make the game displayable

1. Find which `encountersKey` holds the `Starter` encounters in `encounters.ts`, work out which location it is, and suggest it to the user. Wait for confirmation.
2. Wire only that location: a `Location` whose map is the inline placeholder `{ src: 'data:image/gif;base64,R0lGODlhAQABAAAAACw=', height: 1, width: 1 }` (no file), with `mapAnchor: MapAnchor.Center` and its `encountersKey`. Add it to `locations.ts` and to one split. Ask the user for the split's name. Set the split's `saveCondition` to the placeholder `{ type: 'badge', bit: -1 }`; step 10 replaces it. Set `Game.starters` to the species of the `Starter` encounters.
3. Ask the user for `wipeMessages` (`[]` is valid). Assemble the `Game` in `<slug>.ts` with every required field. `genders` is `{ male: '/trainers/<trainerAssetFolder>/<male file>.png', female: '/trainers/<trainerAssetFolder>/<female file>.png' }`, from the step 3 sprites.
4. Register the game. For a variant group, do this for each variant:
    - Add a member to `GameName`, and to `GameVersionGroup`, `BadgeAssetFolder` and `TrainerAssetFolder` when the value is new.
    - Add the game to `GAMES` and its slug to `GAME_LOADERS` in `RunPageLoader.tsx`.

## 7. Met-locations table

Fill `met-locations.ts` before creating any other location. It decides which places become Locations.

1. **Source:** a trusted static list, never another game's table. Vanilla: Bulbapedia's met-location index for the generation (raw wikitext, fetched with `curl --compressed web.archive.org/web/2026id_/<bulbapedia url>`), or the decomp's location table for Gen 3. Hack: ask the user for its source.
2. **Trim:** always show the user the full list and ask which entries to drop. Suggest places that can't be reached in the main game and indices this game can't produce; shops and interiors are kept. A save that carries a dropped index imports as `Unknown Location`.
3. **Merge:** always ask the user which indices are one place and should become a single name.
4. Every remaining name must equal the `Location.name` it will get. If the list's name differs from what the app calls the place, ask the user which to use.
5. Write the result as `MET_LOCATIONS: Record<number, string>`, index to name.

## 8. Locations and maps

Create one `Location` per met-table name, one at a time. Wire each fully before prompting the user for the next location's name.

1. The user puts that location's screenshots on the Desktop, named `<map-slug>.png`, `<map-slug>-<col>.png` or `<map-slug>-<row>-<col>.png`. A location with several floors or areas uses one map slug each, e.g. `<location>-1f`.
2. Run `npm run stitch-map -- <slug> <map-slug>`. Read the result only to check for dead space. Never inspect seams.
3. Set the `mapAnchor`. A map that fits the map viewport without panning (height at most 420 px, the viewport's max height in `LocationMap.module.scss`, and no wider than the viewport) gets `MapAnchor.Center` without asking. Otherwise, or if unsure, ask the user. Export the map from `maps/index.ts`, alphabetically, and create `locations/<name>.ts` with the map (or `subareas`, one per map slug) and the anchor. `Location.name` must equal the met-table name exactly.
4. Add the location to `locations.ts`; `check:data` fails on an unlisted file. In a variant group, shared locations go in the shared `locations.ts`, and a version-exclusive one is appended in that variant's file (`locations: [...LOCATIONS, VERSION_ONLY]`).
5. Delete the Desktop screenshots.

- Never add a location to a split's `locations` unless the user says to.
- A place with no met entry (gyms, Elite Four rooms, and the like) becomes a Location only when the user directs. Add its name to `unmappedLocations` in the game's `GAME_CHECK_CONFIGS` entry.
- The starter location from step 6 gets its real map the same way, replacing the placeholder.

## 9. Trainer classes

1. From the trainer source (see step 11), list every trainer class the game uses.
2. `src/lib/data/trainer-classes.ts` is shared across all games. Add only classes that are missing from it.
3. Every class the game uses needs `public/trainers/<trainerAssetFolder>/<spriteSlug>.png`. Tell the user which sprites are missing from that folder and wait for them.
4. For each new class, run `npm run gen:trainer-class <folder> <classSlug> <displayName> [spriteSlug]`, where `<folder>` is the game's `trainerAssetFolder`.

## 10. Splits

1. Ask the user for the ordered list of splits (name per split). The step 6 split is the first.
2. Write one `splits/<name>.ts` per split and list them in order in `Game.splits`. A split's `locations` stays empty unless the user says to add a location.
3. Set each split's `saveCondition`, replacing the step 6 placeholder:
    - A split ending at a gym is `{ type: 'badge', bit: N }`. The champion split is `{ type: 'gameClear' }`. For any other split, ask the user.
    - Never take a bit from split order, gym number, or another game. Derive `N` from the game's own decomp in two steps: (a) the badge's bit index from the constants file (the line position is the bit, e.g. `include/constants/badge.h`); (b) which badge that gym's leader grants, from a source naming the gym (its gym-features file, or a badge-gated field-move check cross-referenced with Bulbapedia's HM table). Never guess the gym from the badge name.
    - If the decomp has no gym-specific source, or the game has no trusted decomp, ask the user.
4. Tell the user which badge files are needed, `public/badges/<badgeAssetFolder>/<split-slug>.png` per split, and wait for them.

## 11. Battles

Work one location at a time, in alphabetical order. Wire each location's battles fully before moving on.

1. Fetch the location's trainers in order from the trainer source. Vanilla: Bulbapedia's raw wikitext for that game's section, via the Wayback URL (`curl --compressed web.archive.org/web/2026id_/<url>`). Pages stack several games' tables, so confirm which section you're reading. Hack: its own battle source. If a floor or room label is missing, ask the user instead of guessing.
2. Ask the user for each battle's `BattleMetadata`. Never infer metadata or battle structure (Tag, Double, BackToBack) from source text; report what the source says and ask how to model it.
3. Look each trainer up in the game's trainer data and read team, species, level, moves, held item, ability, nature and gender. IVs follow the `battle-ivs` skill. State exactly what you parsed and get the user's confirmation before writing. Never guess a value; a missing or ambiguous one is a question for the user. `gender` is never omitted for a species that has one.
4. Add each battle to `battles.ts` under its `battleKey`: `<trainer-class-slug>-<name>` for a named trainer, or `<trainer-class-slug>-<number>` (with `name` set to the number as a string) for repeated anonymous trainers. Ask the user for each battle's `split`.
5. Add the battle to the location's `battles: []` with its `battleKey` and `x`/`y`, following the `battle-marker-placement` skill.
6. A roster that varies by run state (starter-dependent) is one battle with several `teams`, each with a `condition`. A different trainer or position by gender or game is a separate `Battle` entry with `gender` or `game` set.

## 12. Method splits

Work one location at a time, in alphabetical order.

1. Ask the user for each subarea's base split.
2. Ask the user for the exceptions: encounter methods that first become available in a later split than the base (for example, surf).
3. Write `methodSplits` on the `Location` or `Subarea`: one `{ method, split }` per encounter method the area has. Never infer a split from location membership, source text or geography. Never leave a placeholder.
4. A gating rule the user states for the game (for example, a move or item that unlocks surf or fishing) applies to every location afterward without asking again.

## 13. Items

Work one location at a time, in alphabetical order, after its method splits. Items are pickups the player collects; battle rewards and held items are not.

1. Ask the user for the location's items, listed per subarea (or on the `Location` when it has none). Never fetch or infer them from a source yourself.
2. For each item the user gives, write a `LocationItem` into the `items` array of that `Location` or `Subarea`: `{ category, count, hidden, method, slug }`.
    - `count` is the "×N" on the source's row for this game, else `1`. It is shown after the item's name.
    - `category` is an `ItemCategory` (`Key Items`, `Held Items`, `Consumables` or `Berries`). Ask the user for it unless the slug is a berry; never infer it from PokeAPI's category.
    - `method` is a freeform string exactly as the user gives it (for example `'Overworld'`). Never normalize it or invent a value.
    - `hidden` is `true` only when the user says the item is hidden (found with the Dowsing Machine), else `false`. Never infer it.
    - `slug` must be an `ItemSlug`.
3. If a slug isn't in `ITEMS` (`src/lib/data/raw/items.json`), add it as data first, by hand: an entry in `src/lib/data/raw/items.json` (same shape as its neighbours, with `valuesByGeneration` from PokeAPI's flavor text up to generation 5), the slug in `ItemSlug` (`types.ts`), and its sprite at `public/items/<slug>.png`. There is no fetch script. Tell the user about any sprite you can't source and wait.
4. Item order within an array is part of the saved tracking key (`Location/Subarea/index`), so append new items at the end and never reorder after tracking has started.
5. Items carry no split. Never ask for one.

## 14. Split assignment

Run only after step 13 is finished for every location. Work split by split, in `Game.splits` order:

1. Ask the user which locations belong in the split's `locations`. List the game's locations so they can choose.
2. Write exactly the list the user gives, then move to the next split.

Never add a location to a split unprompted or infer membership. Per `.claude/docs/split-location-wiring.md`, a split lists only locations the player is required to go through.

## 15. Resources

Write each resource as `{ text, description, url }` in `Game.resources`. Every game gets these two, in addition to anything the user supplies:

- **Catch rate calculator** — DragonFlyCave's calculator for the game's generation: `https://www.dragonflycave.com/calculators/<gen>-catch-rate/`, where `<gen>` is `gen-i`, `gen-ii`, `gen-iii-iv`, `gen-v`, `gen-vi-vii`, `gen-viii` or `gen-ix` (Gen III and IV share one page; Gen VI and VII share one). Use `text: 'Catch Rate Calculator'`. Confirm the URL resolves.
- **AI documentation** — the trainer AI doc for the game's generation. Gen IV uses `https://pokemow.com/Gen4/TrainerAI/` (`text: 'Gen IV AI'`). Gen III's doc is a Google Doc that differs per game, so copy the entry from the closest existing Gen III game (`text: 'Gen 3 AI'`). For any other generation, ask the user for the doc.

Then ask the user for any further external resources (guides, resource packs, downloads, wikis) and add those too.

## 16. Save parsing

Save import is per game, keyed by `Game.version`. Never copy another game's values unless the user confirms the layouts are identical.

1. Add the game's `Game.version` as a `case` in `SaveFileParser.parse` (`src/lib/parsers/SaveFileParser.ts`), under its generation's parsers. If the generation has no parsers in `src/lib/parsers/`, ask the user.
2. Gen 4: add a `GEN4_SAVE_LAYOUTS` entry in `gen4-save-layouts.ts`, keyed by `Game.version`, with `generalBlockSize`, `storageBlockSize`, `partyOffset`, `genderOffset`, `badgeMaskOffset` and `mainStoryClearedOffset`. Derive the offsets from the game's decomp. If there is no decomp, ask the user.
3. Gen 3: add the game's `GameVersionGroup` to `FLAG_LAYOUT_BY_VERSION` in `Gen3SplitParser.ts` with `flagsOffset` (`SaveBlock1.flags` in the decomp's `include/global.h`) and `gameClearFlag` (`FLAG_SYS_GAME_CLEAR`, `SYSTEM_FLAGS + 0x04`, in `include/constants/flags.h`). Also check the shared `PARTY_OFFSET`, `GENDER_OFFSET`, `GEN3_ITEM_INDEX`, `GEN3_NATIONAL_DEX_BY_SPECIES` and the move IDs against the decomp. If there is no decomp, ask the user.
4. Ask the user to import a save for the game and report the result. Never start a dev server.

## 17. Cleanup

Delete everything onboarding brought in that the app doesn't use: cloned decomps, downloaded source files, raw JSON, throwaway scripts, and leftover screenshots on the Desktop. Keep `ONBOARDING.md`. Run `git status` and show the user any untracked path you are unsure about instead of deleting it.

## 18. Final validation

1. Set the game's `isEnabled` to `true` in `GAME_CHECK_CONFIGS`.
2. Run `npm run check:data` and `npx tsc --noEmit`. Fix every violation; a violation that needs a decision is a question for the user.
3. Update the game's row in the README's Supported Games table (a variant group is one row). Set its status to `Complete`; never ask.
