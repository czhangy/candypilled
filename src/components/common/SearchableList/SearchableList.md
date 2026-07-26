# SearchableList

A search bar above an alphabetical, scrollable list of named items. Clicking
an item selects it; the currently selected item is highlighted. Typing in
the search bar filters the list to items whose name contains the query
(case-insensitive), showing a caller-provided message when nothing matches.
The first matching substring of each visible item's name is highlighted in
the accent color.

## Props

| Prop                | Type                               | Required | Default | Description                                                                                               |
| ------------------- | ---------------------------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `emptyMessage`      | `string`                           | Yes      | -       | Message shown when no items match the search query                                                        |
| `items`             | `{ name: string; slug: string }[]` | Yes      | -       | The full list of items to search and list; `name` is displayed/searched, `slug` is the selection identity |
| `onSelectItem`      | `(slug: string) => void`           | Yes      | -       | Called with an item's `slug` when it's clicked                                                            |
| `searchAriaLabel`   | `string`                           | Yes      | -       | Accessible label for the search input                                                                     |
| `searchPlaceholder` | `string`                           | Yes      | -       | Placeholder text for the search input                                                                     |
| `selectedItem`      | `string`                           | No       | -       | The currently selected item's `slug`, if any                                                              |

## State

| State   | Type     | Initial value | Description                 |
| ------- | -------- | ------------- | --------------------------- |
| `query` | `string` | `''`          | The current search bar text |

## Computations

- `visibleItems` — `items` filtered by `query` (case-insensitive substring
  match against each item's name) and sorted alphabetically by name

Each item's name is rendered via `HighlightedText`, which highlights the
substring matching `query`.

## SCSS Variable Dependencies

- `--accent-color` — used for the search input's focus ring and the
  selected item's accent bar
