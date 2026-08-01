# PokedexSubtab

The "Pokédex" subtab of a run page's Data tab. Displays a searchable,
dex-number-ordered list of every Pokémon obtainable in the game (wild
encounters, trainer battles, and their evolution lines) on the left and
the currently selected Pokémon's details, via `PokedexDetail`, on the
right, taking up roughly a quarter and three-quarters of the row's
width respectively.

## Props

| Prop               | Type                         | Required | Default | Description                                                                                       |
| ------------------ | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------- |
| `game`             | `Game`                       | Yes      | -       | The game to resolve species, types, abilities, stats, and locations from                          |
| `onSelectAbility`  | `(slug: string) => void`     | Yes      | -       | Forwarded to `PokedexDetail`, called when an ability is clicked                                   |
| `onSelectLocation` | `(location: string) => void` | Yes      | -       | Forwarded to `PokedexDetail`, called when a location is clicked                                   |
| `onSelectMove`     | `(slug: string) => void`     | Yes      | -       | Forwarded to `PokedexDetail`, called when a move is clicked                                       |
| `onSelectSpecies`  | `(species: string) => void`  | Yes      | -       | Called when a Pokémon is selected, whether from the list or from `PokedexDetail`'s evolution line |
| `run`              | `Run`                        | Yes      | -       | The active run, used to resolve which locations are already used                                  |
| `selectedSpecies`  | `string`                     | No       | -       | The currently selected Pokémon's species, if any                                                  |

## Computations

- `variant` — the sprite variant to prefer, derived from `game.name`
- `availableSpecies` — every species obtainable in `game` (or, when the
  global "Show National Dex Data" setting is on, every species in
  `game.generation` regardless of obtainability), resolved via
  `EncounterHelpers.getGameSpecies` (either way, already sorted by dex
  number), passed to `SearchableList` with `sortAlphabetically={false}` so
  that order is preserved
- `usedLocations` — every location name whose encounter is already used
  in `run`, resolved via `RunHelpers.getUsedLocations` and passed to
  `PokedexDetail`
- `selectedPokemon` — `selectedSpecies`' data, resolved via
  `PokemonHelpers`, used to highlight the matching entry in
  `SearchableList` (`selectedSpecies` itself may be a slug, e.g. when
  set by clicking an evolution, so its display name is looked up for
  the comparison)
