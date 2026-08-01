# AbilitiesSubtab

The "Abilities" subtab of a run page's Data tab. Displays a searchable,
alphabetical list of every ability available in the game's generation,
the currently selected ability's details, and a panel listing every
Pokémon that can have it, left to right.

## Props

| Prop                  | Type                     | Required | Default | Description                                                                                                                |
| --------------------- | ------------------------ | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `game`                | `Game`                   | Yes      | -       | The game to resolve abilities and their holders from                                                                       |
| `onSelectAbility`     | `(slug: string) => void` | Yes      | -       | Called with an ability's slug when it's clicked in the list                                                                |
| `onSelectSpeciesLink` | `(slug: string) => void` | Yes      | -       | Called with a Pokémon's slug when it's clicked in the "Given To" panel; opens that Pokémon's Pokédex entry in a new window |
| `selectedAbility`     | `string`                 | No       | -       | The currently selected ability's slug, if any                                                                              |

## Computations

- `gameSpecies` — every species obtainable in `game` (or, when the global
  "Show National Dex Data" setting is on, every species in
  `game.generation` regardless of obtainability), resolved via
  `EncounterHelpers.getGameSpecies`
- `availableAbilities` — every ability introduced at or before
  `game.generation` that at least one of `gameSpecies` can have, sorted
  alphabetically by name, passed to `SearchableList`
- `effectiveAbility` — `selectedAbility`, defaulting to
  `availableAbilities`' first entry when unset, passed to `SearchableList`
  and `AbilityDetail` so a detail view is always shown rather than a "no
  selection" placeholder
- `givenTo` — every one of `gameSpecies` that can have `effectiveAbility`
  as of `game.generation`, passed to `SpeciesListPanel`
