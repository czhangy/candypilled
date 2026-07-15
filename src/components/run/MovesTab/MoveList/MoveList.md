# MoveList

A search bar above an alphabetical, scrollable list of moves. Clicking a
move selects it; the currently selected move is highlighted. Typing in the
search bar filters the list to moves whose name contains the query
(case-insensitive), showing a "No moves found" message when nothing
matches.

## Props

| Prop           | Type                     | Required | Default | Description                                 |
| -------------- | ------------------------ | -------- | ------- | ------------------------------------------- |
| `moves`        | `MoveData[]`             | Yes      | -       | The full list of moves to search and list   |
| `onSelectMove` | `(name: string) => void` | No       | -       | Called with a move's name when it's clicked |
| `selectedMove` | `string`                 | No       | -       | The currently selected move's name, if any  |

## State

| State   | Type     | Initial value | Description                 |
| ------- | -------- | ------------- | --------------------------- |
| `query` | `string` | `''`          | The current search bar text |

## Computations

- `visibleMoves` — `moves` filtered by `query` (case-insensitive substring
  match against each move's name) and sorted alphabetically
