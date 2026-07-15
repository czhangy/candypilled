# PokedexTile

Displays details for a single Pokemon, split into a left half
showing its sprite, name, and type badges, and a right half divided
into an upper section (two-thirds height) listing its abilities and
a lower section (one-third height) showing its catch rate. Below
that split, a full-width button lets the selected Pokemon be marked
as caught: clicking it opens a modal (`AddPokemonModal`) to record the
caught species (defaulting to the one selected here) along with its
ability, nature, IVs, and level. The button reads "CAUGHT" (styled
green) when the selected Pokemon is the one already caught at the
current location, and clicking it again in that state removes the
catch instead of reopening the modal. Otherwise, the button is
disabled whenever a different species is already caught at this
location, or the selected Pokemon (or any member of its evolution
line) has been caught anywhere else in the run, enforcing both one
catch per location and one catch per evolution line.
Below that, a full-width section shows the Pokemon's evolution line,
or a "No evolution line" message for species with no evolutions, and
below that, a full-width section shows its base stats as a horizontal
bar chart. A final full-width section holds two tabs, "Learnset" and
"Locations": clicking either tab's label switches the content below
between the species' learnset (each move's name clickable to view it
elsewhere) and every wild location it can be found in, sorted by minimum
encounter level. Used alongside an encounter table to show whichever
Pokemon is currently selected. If no Pokemon is selected, a placeholder
message is shown instead.

## Props

| Prop                 | Type                                                                                                     | Required | Default | Description                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `caughtPokemonNames` | `string[]`                                                                                               | Yes      | -       | Every species caught so far in the run, regardless of location, used to enforce one catch per evolution line                                 |
| `caughtSpecies`      | `string`                                                                                                 | No       | -       | The species already caught at the current location, if any, used to enforce one catch per location                                           |
| `game`               | `Game`                                                                                                   | Yes      | -       | The game the run belongs to, for looking up wild locations                                                                                   |
| `generation`         | `number`                                                                                                 | Yes      | -       | The game's generation, used to resolve the Pokemon's types                                                                                   |
| `onAddPokemon`       | `(details: Pick<BattlePokemon, 'ability' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>) => void` | Yes      | -       | Called when `AddPokemonModal` is submitted, with the details to record for the catch                                                         |
| `onRemovePokemon`    | `() => void`                                                                                             | Yes      | -       | Called when the catch button is clicked while the selected Pokemon is the one caught at this location                                        |
| `onSelectMove`       | `(name: string) => void`                                                                                 | Yes      | -       | Called when a move is clicked within the learnset tab                                                                                        |
| `onSelectSpecies`    | `(species: string) => void`                                                                              | Yes      | -       | Called when a Pokemon is clicked within the evolution line                                                                                   |
| `originalSpecies`    | `string`                                                                                                 | No       | -       | The species actually selected from the encounter list, used as the catch default even after navigating to an evolution via `onSelectSpecies` |
| `species`            | `string`                                                                                                 | No       | -       | The selected Pokemon's species, if any                                                                                                       |
| `variant`            | `string`                                                                                                 | Yes      | -       | The sprite variant to prefer, matching the game's slug                                                                                       |

## State

| State                   | Type                        | Initial value | Description                             |
| ----------------------- | --------------------------- | ------------- | --------------------------------------- |
| `activeDetailTab`       | `'learnset' \| 'locations'` | `'learnset'`  | Which tab is shown in the final section |
| `isAddPokemonModalOpen` | `boolean`                   | `false`       | Whether `AddPokemonModal` is shown      |

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
  `activeDetailTab` is `'learnset'`
- `locations` — every wild encounter of the selected species across
  `game`'s splits and locations, resolved via `LocationHelpers` and
  rendered with `LocationsList` when `activeDetailTab` is `'locations'`
- `defaultCatchSpecies` — `originalSpecies` if given, otherwise
  `species`; passed to `AddPokemonModal` as the species to catch, so
  navigating to an evolution via `onSelectSpecies` before catching
  still records the originally encountered species
- `isCaughtHere` — whether `caughtSpecies` matches the selected
  Pokemon, used to show "CAUGHT" (styled green) on the catch button and
  let it be clicked again to remove the catch
- `isOtherCaughtHere` — whether a different species than the selected
  Pokemon is already caught at this location
- `isEvolutionLineCaught` — whether the selected Pokemon's evolution
  family (resolved via `PokemonHelpers`) includes any name in
  `caughtPokemonNames`
- `isCatchDisabled` — `isOtherCaughtHere` or `isEvolutionLineCaught`,
  but never when `isCaughtHere`; disables the catch button to enforce
  one catch per location and one catch per evolution line

## Handlers

- **On a details tab click** — sets `activeDetailTab` to that tab
- **On the catch button click** — if `isCaughtHere`, calls
  `onRemovePokemon`; otherwise opens `AddPokemonModal` via
  `isAddPokemonModalOpen` (only reachable when `isCatchDisabled` is
  false)
- **On `AddPokemonModal` submit** — calls `onAddPokemon` with the
  submitted details and closes the modal
- **On `AddPokemonModal` close** — clears `isAddPokemonModalOpen`
  without marking the Pokemon caught
