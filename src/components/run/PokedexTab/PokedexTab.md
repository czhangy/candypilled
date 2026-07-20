# PokedexTab

Displays a searchable, alphabetical list of every Pokémon available in
the game's generation on the left and the currently selected Pokémon's
details, via `PokedexDetail`, on the right, taking up roughly a quarter
and three-quarters of the row's width respectively.

## Props

| Prop               | Type                         | Required | Default | Description                                                                                       |
| ------------------ | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------- |
| `game`             | `Game`                       | Yes      | -       | The game to resolve species, types, abilities, stats, and locations from                          |
| `onSelectAbility`  | `(name: string) => void`     | Yes      | -       | Forwarded to `PokedexDetail`, called when an ability is clicked                                   |
| `onSelectLocation` | `(location: string) => void` | Yes      | -       | Forwarded to `PokedexDetail`, called when a location is clicked                                   |
| `onSelectMove`     | `(name: string) => void`     | Yes      | -       | Forwarded to `PokedexDetail`, called when a move is clicked                                       |
| `onSelectSpecies`  | `(species: string) => void`  | Yes      | -       | Called when a Pokémon is selected, whether from the list or from `PokedexDetail`'s evolution line |
| `run`              | `Run`                        | Yes      | -       | The active run, used to resolve which locations are already used                                  |
| `selectedSpecies`  | `string`                     | No       | -       | The currently selected Pokémon's species, if any                                                  |

## Computations

- `variant` — the sprite variant to prefer, derived from `game.name`
- `availableSpecies` — every species in `game.generation`, resolved via
  `PokemonHelpers.getAllSpecies`, passed to `SearchableList`
- `usedLocations` — every location name whose encounter is already used
  in `run`, resolved via `RunHelpers.getUsedLocations` and passed to
  `PokedexDetail`
- `selectedPokemon` — `selectedSpecies`' data, resolved via
  `PokemonHelpers`, used to highlight the matching entry in
  `SearchableList` (`selectedSpecies` itself may be a slug, e.g. when
  set by clicking an evolution, so its display name is looked up for
  the comparison)
