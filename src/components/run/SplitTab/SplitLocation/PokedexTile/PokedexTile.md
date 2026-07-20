# PokedexTile

Displays details for a single Pokémon. `PokemonSummary` renders the
top section: a left half showing its sprite, name, and type badges,
and a right half divided into an upper section (two-thirds height)
listing its abilities via `AbilitiesList` (each clickable, linking to
that ability's details, in `catch` mode) and a lower section
(one-third height) showing its catch rate; a placeholder message is
shown there instead when no Pokémon is selected. See
`PokemonSummary.md` for that section's behavior in detail. Below
that split, a full-width section shows the Pokémon's evolution line,
or a "No evolution line" message for species with no evolutions, and
below that, a full-width section shows its base stats as a horizontal
bar chart. A final full-width section holds two tabs, "Learnset" and
"Locations" (in `catch` mode; in `choose` mode "Learnset" is shown as a
static, unclickable header instead, and the learnset is always the
content shown below it): clicking either tab's label switches the
content below between the species' learnset (each move's name clickable
to view it elsewhere, in `catch` mode) and every wild location it can be
found in, sorted by minimum encounter level, each linking to that
location's card in the Splits tab (in `catch` mode), with locations whose
encounter is already used (caught or missed) in the run highlighted red.

Operates in one of two mutually exclusive modes, set via `mode`:

- **`catch`** — used alongside an encounter table to catch wild Pokémon.
  A full-width button lets the selected Pokémon be marked as caught:
  clicking it opens a modal (`AddPokemonModal`) to record the caught
  species (defaulting to the one selected here) along with its ability,
  nature, IVs, and level. The button reads "CAUGHT"/"CATCH" (styled
  green when caught), or "HATCHED"/"HATCH" when `isEggEncounter` is
  true, when the selected Pokémon, or any member of its evolution line,
  is the one already caught at the current location (catching an
  evolution records the evolved species, not the originally selected
  one, so navigating the evolution line afterward still shows the
  "caught" label), and clicking it again in that state removes the
  catch instead of reopening the modal. Otherwise, the button is
  disabled whenever a different species is already caught at this
  location, the selected Pokémon (or any member of its evolution line)
  has been caught anywhere else in the run, or this location's
  encounter was marked missed, enforcing one catch per location, one
  catch per evolution line, and that a missed location can no longer be
  caught at. The button is hidden entirely whenever the selected
  Pokémon comes from a "starter" encounter, whether or not it's already
  caught, since starters aren't caught or uncaught through this button.
  When `isEggEncounter` is true, `AddPokemonModal` also exposes its
  Location field (with no default value), since an egg's eventual
  hatch location isn't the location of the encounter itself.
- **`choose`** — used when choosing a run's starter. There is no action
  button; the parent is responsible for finalizing the choice. Abilities
  are shown as static text rather than clickable links, and the final
  section shows a static "Learnset" header (styled like the active tab,
  but not a button) above the learnset (with non-interactive rows); the
  "Locations" tab and the ability to switch to it don't exist in this
  mode.

## Props

| Prop                 | Type                                                                                                                                          | Required                        | Default | Description                                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`               | `'catch' \| 'choose'`                                                                                                                         | Yes                             | -       | Which behavior the tile's action button follows                                                                                                               |
| `defaultLevel`       | `number`                                                                                                                                      | No, only when `mode` is `catch` | -       | Forwarded to `AddPokemonModal` as the Level field's default, e.g. the encounter's minimum level                                                               |
| `dupes`              | `string[]`                                                                                                                                    | Only when `mode` is `catch`     | -       | Every species caught so far in the run, regardless of location, used to enforce one catch per evolution line                                                  |
| `encounter`          | `string`                                                                                                                                      | No, only when `mode` is `catch` | -       | The species already caught at the current location, if any, used to enforce one catch per location                                                            |
| `isEggEncounter`     | `boolean`                                                                                                                                     | Only when `mode` is `catch`     | -       | Whether the selected Pokémon comes from an "egg" encounter, switching the button's label to "HATCH"/"HATCHED" and exposing `AddPokemonModal`'s Location field |
| `isLocationMissed`   | `boolean`                                                                                                                                     | Only when `mode` is `catch`     | -       | Whether the current location's encounter was marked missed, disabling the catch button                                                                        |
| `isStarterEncounter` | `boolean`                                                                                                                                     | Only when `mode` is `catch`     | -       | Whether the selected Pokémon comes from a "starter" encounter, hiding the catch button entirely                                                               |
| `onAddPokemon`       | `(details: Pick<CaughtPokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature' \| 'tags'>, location: string) => void` | Only when `mode` is `catch`     | -       | Called when `AddPokemonModal` is submitted, with the details to record for the catch and the entered location (empty unless `isEggEncounter`)                 |
| `onRemovePokemon`    | `() => void`                                                                                                                                  | Only when `mode` is `catch`     | -       | Called when the catch button is clicked while the selected Pokémon is the one caught at this location                                                         |
| `game`               | `Game`                                                                                                                                        | Yes                             | -       | The game the run belongs to, for looking up wild locations                                                                                                    |
| `generation`         | `number`                                                                                                                                      | Yes                             | -       | The game's generation, used to resolve the Pokémon's types                                                                                                    |
| `onSelectAbility`    | `(name: string) => void`                                                                                                                      | Yes                             | -       | Called when an ability is clicked within the abilities list                                                                                                   |
| `onSelectLocation`   | `(location: string) => void`                                                                                                                  | Yes                             | -       | Called with a location's base name when it's clicked within the locations tab (only reachable in `catch` mode)                                                |
| `onSelectMove`       | `(name: string) => void`                                                                                                                      | Yes                             | -       | Called when a move is clicked within the learnset tab                                                                                                         |
| `onSelectSpecies`    | `(species: string) => void`                                                                                                                   | Yes                             | -       | Called when a Pokémon is clicked within the evolution line                                                                                                    |
| `originalSpecies`    | `string`                                                                                                                                      | No                              | -       | The species actually selected before navigating to an evolution, used as the catch default even after navigating via `onSelectSpecies`                        |
| `species`            | `string`                                                                                                                                      | No                              | -       | The selected Pokémon's species, if any                                                                                                                        |
| `usedLocations`      | `string[]`                                                                                                                                    | Yes                             | -       | Names of locations whose encounter is already used (caught or missed) in the run, used to highlight rows in the locations tab                                 |
| `variant`            | `string`                                                                                                                                      | Yes                             | -       | The sprite variant to prefer, matching the game's slug                                                                                                        |

## State

| State                   | Type                        | Initial value | Description                                                    |
| ----------------------- | --------------------------- | ------------- | -------------------------------------------------------------- |
| `activeDetailTab`       | `'learnset' \| 'locations'` | `'learnset'`  | Which tab is shown in the final section                        |
| `isAddPokemonModalOpen` | `boolean`                   | `false`       | Whether `AddPokemonModal` is shown (only used in `catch` mode) |

## Computations

- `pokemon` — the selected species' data, resolved via `PokemonHelpers`
  and passed to `PokemonSummary`; when unset, `PokemonSummary` shows
  its placeholder instead
- `sprite` — the selected species' sprite for the given `variant`,
  passed to `PokemonSummary`
- `types` — the selected species' types at `generation`, passed to
  `PokemonSummary` to render as badges beneath its name
- `abilities` — the selected species' ability set at `generation`,
  resolved via `PokemonHelpers`
- `abilityEntries` — `abilities` flattened into a list, with its
  hidden ability (if any) flagged so `AbilitiesList` renders it dimmer
  and suffixed with "(Hidden)"; passed to `PokemonSummary`
- `catchRate` — the selected species' catch rate, resolved via
  `PokemonHelpers` and passed to `PokemonSummary`
- `hideTradeEvos` — the global "Disable Trade Evolutions" setting's
  current value, read from `localStorage` via `SettingsHelpers` and
  forwarded to `EvolutionLine` to omit trade-only branches
- `evolutionLine` — the selected species' full evolution family tree at
  `generation` (every branch from the family's base species, not just
  the ones leading to the selected species), resolved via
  `EvolutionHelpers.getFullEvolutionLine` and rendered with
  `EvolutionLine`
- `hasEvolutionBranches` — whether `evolutionLine` has any evolutions
  branching from it; when false, "No evolution line" is shown instead
  of `EvolutionLine`
- `stats` — the selected species' base stats at `generation`, resolved
  via `PokemonHelpers` and rendered with `StatsChart`
- `learnset` — the selected species' learnset in `game.version`,
  resolved via `PokemonHelpers` and rendered with `LearnsetList` when
  `activeDetailTab` is `'learnset'` or `mode` is `'choose'`
- `locations` — every wild encounter of the selected species across
  `game`'s splits and locations, resolved via `EncounterHelpers` and
  rendered with `LocationsList` (along with `game` and `usedLocations`)
  when `activeDetailTab` is `'locations'` (only reachable in `catch` mode)
- `defaultCatchSpecies` — `originalSpecies` if given, otherwise
  `species`; in `catch` mode, passed to `AddPokemonModal` as the species
  to catch, so navigating to an evolution via `onSelectSpecies` before
  catching still records the originally encountered species
- `isCaughtHere` — in `catch` mode, whether `encounter` is in the same
  evolution family (resolved via `PokemonHelpers`) as the selected
  Pokémon, used to show the "caught" button label (styled green) and
  let it be clicked again to remove the catch; always `false` in
  `choose` mode
- `catchButtonLabel` — the action button's text: "CAUGHT"/"CATCH", or
  "HATCHED"/"HATCH" when `isEggEncounter` is true, based on
  `isCaughtHere`
- `isOtherCaughtHere` — in `catch` mode, whether some species is
  already caught at this location and `isCaughtHere` is false; always
  `false` in `choose` mode
- `isEvolutionLineCaught` — in `catch` mode, whether the selected
  Pokémon's evolution family (resolved via `PokemonHelpers`) includes
  any name in `dupes`; always `false` in `choose` mode
- `isCatchDisabled` — in `catch` mode, `isOtherCaughtHere`,
  `isEvolutionLineCaught`, or `isLocationMissed`, but never when
  `isCaughtHere`; disables the catch button to enforce one catch per
  location, one catch per evolution line, and that a missed location
  can no longer be caught at. Always `false` in `choose` mode, which
  has no catch button
- `isCatchButtonHidden` — in `catch` mode, `isStarterEncounter`; hides
  the catch button entirely for Pokémon that come from a "starter"
  encounter, whether or not they're already caught. Always `false` in
  `choose` mode

## Handlers

- **On a details tab click** — sets `activeDetailTab` to that tab (only
  reachable in `catch` mode, since `choose` mode renders a static
  "Learnset" header instead of clickable tabs)
- **On the action button click** — only reachable in `catch` mode; calls
  `onRemovePokemon` if `isCaughtHere`, otherwise opens `AddPokemonModal`
  via `isAddPokemonModalOpen` (only reachable when `isCatchDisabled` is
  false)
- **On `AddPokemonModal` submit** — calls `onAddPokemon` with the
  submitted details and closes the modal (only reachable in `catch` mode)
- **On `AddPokemonModal` close** — clears `isAddPokemonModalOpen`
  without marking the Pokémon caught

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be set
  by a parent; used to style the catch button's text and highlight the
  active details tab
