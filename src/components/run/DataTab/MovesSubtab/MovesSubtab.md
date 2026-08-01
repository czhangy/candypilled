# MovesSubtab

The "Moves" subtab of a run page's Data tab. Displays a searchable,
alphabetical list of every move available in the game's generation, the
currently selected move's details, and a panel listing every Pokémon
that learns it, left to right.

## Props

| Prop                  | Type                     | Required | Default | Description                                                                                                                  |
| --------------------- | ------------------------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `generation`          | `number`                 | Yes      | -       | The game's generation, used to resolve the selected move's values and to filter which moves are listed                       |
| `onSelectMove`        | `(slug: string) => void` | Yes      | -       | Called with a move's slug when it's clicked in the list                                                                      |
| `onSelectSpeciesLink` | `(slug: string) => void` | Yes      | -       | Called with a Pokémon's slug when it's clicked in the "Learned By" panel; opens that Pokémon's Pokédex entry in a new window |
| `selectedMove`        | `string`                 | No       | -       | The currently selected move's slug, if any; owned by `RunPage` so a move link elsewhere on the page can select it            |
| `version`             | `string`                 | Yes      | -       | The game's PokeAPI version group slug, used to resolve which Pokémon learn the selected move and by what method              |

## Computations

- `availableMoves` — every move introduced at or before `generation`, passed
  to `SearchableList`
- `learnedBy` — every Pokémon that learns `selectedMove` in `version`, passed
  to `SpeciesListPanel`
