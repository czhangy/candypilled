# MovesSubtab

The "Moves" subtab of a run page's Data tab. Displays a searchable,
alphabetical list of every move available in the game's generation on
the left and the currently selected move's details on the right, taking
up roughly a quarter and three-quarters of the row's width respectively.

## Props

| Prop           | Type                     | Required | Default | Description                                                                                                       |
| -------------- | ------------------------ | -------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `generation`   | `number`                 | Yes      | -       | The game's generation, used to resolve the selected move's values and to filter which moves are listed            |
| `onSelectMove` | `(slug: string) => void` | Yes      | -       | Called with a move's slug when it's clicked in the list                                                           |
| `selectedMove` | `string`                 | No       | -       | The currently selected move's slug, if any; owned by `RunPage` so a move link elsewhere on the page can select it |

## Computations

- `availableMoves` — every move introduced at or before `generation`, passed
  to `SearchableList`
