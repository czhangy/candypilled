# PokemonPickerModal

A modal listing a run's available caught Pokémon as sprite tiles, for
assigning one to a Hall of Fame team slot.

## Props

| Prop         | Type                               | Required | Default | Description                                               |
| ------------ | ---------------------------------- | -------- | ------- | --------------------------------------------------------- |
| `dataSource` | `GameDataSource`                   | Yes      | -       | The game's Pokémon dataset, used to resolve sprites/names |
| `pokemon`    | `CaughtPokemon[]`                  | Yes      | -       | The Pokémon available to choose from                      |
| `variant`    | `string`                           | Yes      | -       | Game slug used to resolve the correct sprite style        |
| `onSelect`   | `(pokemon: CaughtPokemon) => void` | Yes      | -       | Called with the chosen Pokémon                            |
| `onClose`    | `() => void`                       | Yes      | -       | Called when the modal is dismissed                        |

## Computations

- `displaySlug` — a given Pokémon's species slug, resolved via
  `PokemonHelpers.getDisplaySlug`; differs from its stored `slug` for a
  species with a held-item form change (e.g. Giratina holding the Griseous
  Orb), and feeds both `sprite` and `name`, per tile
