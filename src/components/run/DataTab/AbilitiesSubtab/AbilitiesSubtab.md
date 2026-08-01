# AbilitiesSubtab

The "Abilities" subtab of a run page's Data tab. Displays a searchable,
alphabetical list of every ability available in the game's generation,
the currently selected ability's details, and a panel listing every
Pokémon that can have it, left to right.

## Props

| Prop                  | Type                     | Required | Default | Description                                                                                                                |
| --------------------- | ------------------------ | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `generation`          | `number`                 | Yes      | -       | The game's generation, used to resolve the selected ability's values and to filter which abilities are listed              |
| `onSelectAbility`     | `(slug: string) => void` | Yes      | -       | Called with an ability's slug when it's clicked in the list                                                                |
| `onSelectSpeciesLink` | `(slug: string) => void` | Yes      | -       | Called with a Pokémon's slug when it's clicked in the "Given To" panel; opens that Pokémon's Pokédex entry in a new window |
| `selectedAbility`     | `string`                 | No       | -       | The currently selected ability's slug, if any                                                                              |

## Computations

- `availableAbilities` — every ability introduced at or before `generation`,
  passed to `SearchableList`
- `givenTo` — every Pokémon that can have `selectedAbility` as of
  `generation`, passed to `SpeciesListPanel`
