# SearchableList

A search bar above an alphabetical, scrollable list of named items. Clicking
an item selects it; the currently selected item is highlighted. Typing in
the search bar filters the list to items whose name contains the query
(case-insensitive), showing a caller-provided message when nothing matches.

## Props

| Prop                | Type                     | Required | Default | Description                                        |
| ------------------- | ------------------------ | -------- | ------- | -------------------------------------------------- |
| `emptyMessage`      | `string`                 | Yes      | -       | Message shown when no items match the search query |
| `items`             | `{ name: string }[]`     | Yes      | -       | The full list of named items to search and list    |
| `onSelectItem`      | `(name: string) => void` | No       | -       | Called with an item's name when it's clicked       |
| `searchAriaLabel`   | `string`                 | Yes      | -       | Accessible label for the search input              |
| `searchPlaceholder` | `string`                 | Yes      | -       | Placeholder text for the search input              |
| `selectedItem`      | `string`                 | No       | -       | The currently selected item's name, if any         |

## State

| State   | Type     | Initial value | Description                 |
| ------- | -------- | ------------- | --------------------------- |
| `query` | `string` | `''`          | The current search bar text |

## Computations

- `visibleItems` — `items` filtered by `query` (case-insensitive substring
  match against each item's name) and sorted alphabetically
