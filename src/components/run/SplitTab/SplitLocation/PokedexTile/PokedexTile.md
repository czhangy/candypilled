# PokedexTile

Displays details for a single Pokemon, split into a left half
showing its sprite, name, and type badges, and a right half divided
into an upper section (two-thirds height) listing its abilities (each
clickable, linking to that ability's details, in `catch` mode) and
a lower section (one-third height) showing its catch rate. Below
that split, a full-width section shows the Pokemon's evolution line,
or a "No evolution line" message for species with no evolutions, and
below that, a full-width section shows its base stats as a horizontal
bar chart. A final full-width section holds two tabs, "Learnset" and
"Locations" (in `catch` mode; in `select` mode "Learnset" is shown as a
static, unclickable header instead, and the learnset is always the
content shown below it): clicking either tab's label switches the
content below between the species' learnset (each move's name clickable
to view it elsewhere, in `catch` mode) and every wild location it can be
found in, sorted by minimum encounter level, with locations whose
encounter is already used (caught or missed) in the run highlighted red.
If no Pokemon is selected, a placeholder message is shown instead.

Operates in one of two mutually exclusive modes, set via `mode`:

- **`catch`** — used alongside an encounter table to catch wild Pokemon.
  A full-width button lets the selected Pokemon be marked as caught:
  clicking it opens a modal (`AddPokemonModal`) to record the caught
  species (defaulting to the one selected here) along with its ability,
  nature, IVs, and level. The button reads "CAUGHT" (styled green) when
  the selected Pokemon, or any member of its evolution line, is the one
  already caught at the current location (catching an evolution records
  the evolved species, not the originally selected one, so navigating
  the evolution line afterward still shows "CAUGHT"), and clicking it
  again in that state removes the catch instead of reopening the modal.
  Otherwise, the button is disabled whenever a different species is
  already caught at this location, the selected Pokemon (or any
  member of its evolution line) has been caught anywhere else in the
  run, or this location's encounter was marked missed, enforcing one
  catch per location, one catch per evolution line, and that a missed
  location can no longer be caught at.
- **`select`** — used when choosing a run's starter. The button reads
  "SELECT" and, unlike `catch`, is never disabled and finalizes the
  choice immediately on click rather than opening a modal. Abilities are
  shown as static text rather than clickable links, and the final
  section shows a static "Learnset" header (styled like the active tab,
  but not a button) above the learnset (with non-interactive rows); the
  "Locations" tab and the ability to switch to it don't exist in this
  mode.

## Props

| Prop               | Type                                                                                                     | Required                        | Default | Description                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`             | `'catch' \| 'select'`                                                                                    | Yes                             | -       | Which behavior the tile's action button follows                                                                                        |
| `defaultLevel`     | `number`                                                                                                 | No, only when `mode` is `catch` | -       | Forwarded to `AddPokemonModal` as the Level field's default, e.g. the encounter's minimum level                                        |
| `dupes`            | `string[]`                                                                                               | Only when `mode` is `catch`     | -       | Every species caught so far in the run, regardless of location, used to enforce one catch per evolution line                           |
| `encounter`        | `string`                                                                                                 | No, only when `mode` is `catch` | -       | The species already caught at the current location, if any, used to enforce one catch per location                                     |
| `isLocationMissed` | `boolean`                                                                                                | Only when `mode` is `catch`     | -       | Whether the current location's encounter was marked missed, disabling the catch button                                                 |
| `onAddPokemon`     | `(details: Pick<BattlePokemon, 'ability' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>) => void` | Only when `mode` is `catch`     | -       | Called when `AddPokemonModal` is submitted, with the details to record for the catch                                                   |
| `onRemovePokemon`  | `() => void`                                                                                             | Only when `mode` is `catch`     | -       | Called when the catch button is clicked while the selected Pokemon is the one caught at this location                                  |
| `onSelect`         | `(species: string) => void`                                                                              | Only when `mode` is `select`    | -       | Called with the selected Pokemon's species when the "SELECT" button is clicked                                                         |
| `game`             | `Game`                                                                                                   | Yes                             | -       | The game the run belongs to, for looking up wild locations                                                                             |
| `generation`       | `number`                                                                                                 | Yes                             | -       | The game's generation, used to resolve the Pokemon's types                                                                             |
| `onSelectAbility`  | `(name: string) => void`                                                                                 | Yes                             | -       | Called when an ability is clicked within the abilities list                                                                            |
| `onSelectMove`     | `(name: string) => void`                                                                                 | Yes                             | -       | Called when a move is clicked within the learnset tab                                                                                  |
| `onSelectSpecies`  | `(species: string) => void`                                                                              | Yes                             | -       | Called when a Pokemon is clicked within the evolution line                                                                             |
| `originalSpecies`  | `string`                                                                                                 | No                              | -       | The species actually selected before navigating to an evolution, used as the catch default even after navigating via `onSelectSpecies` |
| `species`          | `string`                                                                                                 | No                              | -       | The selected Pokemon's species, if any                                                                                                 |
| `usedLocations`    | `string[]`                                                                                               | Yes                             | -       | Names of locations whose encounter is already used (caught or missed) in the run, used to highlight rows in the locations tab          |
| `variant`          | `string`                                                                                                 | Yes                             | -       | The sprite variant to prefer, matching the game's slug                                                                                 |

## State

| State                   | Type                        | Initial value | Description                                                    |
| ----------------------- | --------------------------- | ------------- | -------------------------------------------------------------- |
| `activeDetailTab`       | `'learnset' \| 'locations'` | `'learnset'`  | Which tab is shown in the final section                        |
| `isAddPokemonModalOpen` | `boolean`                   | `false`       | Whether `AddPokemonModal` is shown (only used in `catch` mode) |

## Computations

- `pokemon` — the selected species' data, resolved via `PokemonHelpers`
- `sprite` — the selected species' sprite for the given `variant`
- `types` — the selected species' types at `generation`, rendered as
  badges (`/types/{type}.png`) beneath its name
- `abilities` — the selected species' ability set at `generation`,
  resolved via `PokemonHelpers`
- `abilityEntries` — `abilities` flattened into a list, with its
  hidden ability (if any) flagged so it renders dimmer and suffixed
  with "(Hidden)"
- `catchRate` — the selected species' catch rate, resolved via
  `PokemonHelpers`
- `evolutionLine` — the selected species' evolution line at
  `generation`, resolved via `PokemonHelpers` and rendered with
  `EvolutionLine`
- `hasEvolutionBranches` — whether `evolutionLine` has any evolutions
  branching from it; when false, "No evolution line" is shown instead
  of `EvolutionLine`
- `stats` — the selected species' base stats at `generation`, resolved
  via `PokemonHelpers` and rendered with `StatsChart`
- `learnset` — the selected species' learnset at `generation`, resolved
  via `PokemonHelpers` and rendered with `LearnsetList` when
  `activeDetailTab` is `'learnset'` or `mode` is `'select'`
- `locations` — every wild encounter of the selected species across
  `game`'s splits and locations, resolved via `LocationHelpers` and
  rendered with `LocationsList` (along with `usedLocations`) when
  `activeDetailTab` is `'locations'` (only reachable in `catch` mode)
- `defaultCatchSpecies` — `originalSpecies` if given, otherwise
  `species`; in `catch` mode, passed to `AddPokemonModal` as the species
  to catch, so navigating to an evolution via `onSelectSpecies` before
  catching still records the originally encountered species; in `select`
  mode, passed to `onSelect` for the same reason, so navigating to an
  evolution before clicking "SELECT" still selects the originally chosen
  starter
- `isCaughtHere` — in `catch` mode, whether `encounter` is in the same
  evolution family (resolved via `PokemonHelpers`) as the selected
  Pokemon, used to show "CAUGHT" (styled green) on the catch button and
  let it be clicked again to remove the catch; always `false` in
  `select` mode
- `isOtherCaughtHere` — in `catch` mode, whether some species is
  already caught at this location and `isCaughtHere` is false; always
  `false` in `select` mode
- `isEvolutionLineCaught` — in `catch` mode, whether the selected
  Pokemon's evolution family (resolved via `PokemonHelpers`) includes
  any name in `dupes`; always `false` in `select` mode
- `isCatchDisabled` — in `catch` mode, `isOtherCaughtHere`,
  `isEvolutionLineCaught`, or `isLocationMissed`, but never when
  `isCaughtHere`; disables the catch button to enforce one catch per
  location, one catch per evolution line, and that a missed location
  can no longer be caught at. Always `false` in `select` mode, so
  "SELECT" is never disabled

## Handlers

- **On a details tab click** — sets `activeDetailTab` to that tab (only
  reachable in `catch` mode, since `select` mode renders a static
  "Learnset" header instead of clickable tabs)
- **On the action button click** — in `select` mode, calls `onSelect`
  with `defaultCatchSpecies`; in `catch` mode, calls `onRemovePokemon`
  if `isCaughtHere`, otherwise opens `AddPokemonModal` via
  `isAddPokemonModalOpen` (only reachable when `isCatchDisabled` is
  false)
- **On `AddPokemonModal` submit** — calls `onAddPokemon` with the
  submitted details and closes the modal (only reachable in `catch` mode)
- **On `AddPokemonModal` close** — clears `isAddPokemonModalOpen`
  without marking the Pokemon caught

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be set
  by a parent; used to highlight active tab labels and an ability button
  on hover
