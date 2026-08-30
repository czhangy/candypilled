# PokedexDetail

The wide-format Pokédex panel for the Pokédex tab. Built from the same
pieces as the Pokédex tile shown alongside a run's encounters
(`PokemonSummary`, `EvolutionLine`, `StatsChart`, `LearnsetList`,
`LocationsList`), fully interactive but without a catch button, since
browsing the Pokédex outside an encounter doesn't catch anything.
`PokemonSummary` renders the top section: sprite, name, type badges,
clickable abilities, and catch rate. Below that, `EvolutionLine`
renders a full-width section showing the Pokémon's evolution line —
clicking a Pokémon within it selects that species — omitted entirely
for species with no evolutions (see `EvolutionLine.md`), and
`StatsChart` renders a full-width section showing its base stats as a
horizontal bar chart (omitted entirely when unset — see
`StatsChart.md`). A full-width section below that holds
two tabs, "Learnset" and "Locations": clicking either tab's label
switches the content below between the species' clickable learnset and
every wild location it can be found in, sorted by minimum encounter
level, with locations whose encounter is already used (caught or
missed) in the run highlighted red. A final section, for a game whose
data is a vanilla-plus-overrides diff, lists a "Changes" section showing
how the species differs from vanilla — a Types change renders as
before/after type badges rather than plain text, matching the type
badges shown in `PokemonSummary`, and every changed base stat is
combined into a single "Stats" row listing each one's abbreviated name
and signed delta (e.g. "Atk +5, Spe -3", matching the abbreviations
`NatureHelpers.getNatureEffect` already shows elsewhere) rather than a
separate row per stat.

## Props

| Prop               | Type                         | Required | Default | Description                                                                                                                   |
| ------------------ | ---------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `game`             | `Game`                       | Yes      | -       | The game to resolve types, abilities, stats, learnset, and locations from                                                     |
| `onSelectAbility`  | `(slug: string) => void`     | Yes      | -       | Called when an ability is clicked within the abilities list                                                                   |
| `onSelectLocation` | `(location: string) => void` | Yes      | -       | Called with a location's base name when it's clicked within the locations tab                                                 |
| `onSelectMove`     | `(slug: string) => void`     | Yes      | -       | Called when a move is clicked within the learnset tab                                                                         |
| `onSelectSpecies`  | `(species: string) => void`  | Yes      | -       | Called when a Pokémon is clicked within the evolution line                                                                    |
| `species`          | `string`                     | Yes      | -       | The selected Pokémon's species                                                                                                |
| `usedLocations`    | `string[]`                   | Yes      | -       | Names of locations whose encounter is already used (caught or missed) in the run, used to highlight rows in the locations tab |
| `variant`          | `string`                     | Yes      | -       | The sprite variant to prefer, matching the game's slug                                                                        |

## State

| State             | Type                        | Initial value | Description                             |
| ----------------- | --------------------------- | ------------- | --------------------------------------- |
| `activeDetailTab` | `'learnset' \| 'locations'` | `'learnset'`  | Which tab is shown in the final section |

## Computations

- `pokemon` — the selected species' data, resolved via `PokemonHelpers`
  and passed to `PokemonSummary`
- `sprite` — the selected species' sprite for `variant`, passed to
  `PokemonSummary`
- `types` — the selected species' types at `game.generation`, passed
  to `PokemonSummary` to render as badges beneath its name
- `abilities` — the selected species' ability set at `game.generation`,
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
  `game.generation` (every branch from the family's base species, not
  just the ones leading to the selected species), resolved via
  `EvolutionHelpers.getFullEvolutionLine` and passed to `EvolutionLine`,
  which omits its own section entirely when there's nothing to show
- `stats` — the selected species' base stats at `game.generation`,
  resolved via `PokemonHelpers` and rendered with `StatsChart`
- `learnset` — the selected species' learnset in `game.version`,
  resolved via `PokemonHelpers` and rendered with `LearnsetList` when
  `activeDetailTab` is `'learnset'`
- `locations` — every wild encounter of the selected species across
  `game`'s splits and locations, resolved via `EncounterHelpers` and
  rendered with `LocationsList` (along with `usedLocations`) when
  `activeDetailTab` is `'locations'`
- `changes` — how the species differs from vanilla at `game.generation`
  (types, each ability slot, a combined "Stats" entry for every changed
  base stat, catch rate), resolved via `PokemonHelpers`; undefined for a
  game whose Pokémon aren't overridden or a species with no overridden
  differences

## Handlers

- **On a details tab click** — sets `activeDetailTab` to that tab

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used to highlight the active details tab and each
  changed value in the Changes section
