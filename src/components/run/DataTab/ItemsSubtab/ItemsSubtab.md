# ItemsSubtab

The "Items" subtab of a run page's Data tab. Displays a searchable,
alphabetical list of every held item available in the game's generation
on the left and the currently selected item's details on the right,
taking up roughly a quarter and three-quarters of the row's width
respectively.

## Props

| Prop           | Type                     | Required | Default | Description                                                                                            |
| -------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `dataSource`   | `GameDataSource`         | Yes      | -       | The game's item dataset, used to resolve the item catalog and details                                  |
| `generation`   | `number`                 | Yes      | -       | The game's generation, used to resolve the selected item's values and to filter which items are listed |
| `onSelectItem` | `(slug: string) => void` | Yes      | -       | Called with an item's slug when it's clicked in the list                                               |
| `selectedItem` | `string`                 | No       | -       | The currently selected item's slug, if any                                                             |

## Computations

- `availableItems` — every item introduced at or before `generation` and
  not yet removed as of `generation`, sorted alphabetically by name, passed
  to `SearchableList`
- `effectiveItem` — `selectedItem`, defaulting to `availableItems`' first
  entry when unset, passed to `SearchableList` and `ItemDetail` so a
  detail view is always shown rather than a "no selection" placeholder
