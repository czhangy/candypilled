# Dropdown

A custom-styled select control. Clicking its trigger opens a floating
menu of options, portaled to the document body and positioned below
the trigger's screen coordinates so it isn't clipped by an ancestor's
`overflow` (e.g. a scrollable modal). Clicking an option selects it and
closes the menu, and the selected option is highlighted in the game's
accent color. The menu also closes on an outside click. Optionally
offers a search input at the top of the menu that filters the option
list as it's typed into, highlighting the matching substring of each
result in the game's accent color.

## Props

| Prop          | Type                      | Required | Default     | Description                                                                          |
| ------------- | ------------------------- | -------- | ----------- | ------------------------------------------------------------------------------------ |
| `onChange`    | `(value: string) => void` | Yes      | -           | Called with the selected option's value                                              |
| `options`     | `DropdownOption[]`        | Yes      | -           | The list of `{ label, value }` options to choose from                                |
| `placeholder` | `string`                  | No       | `'Select…'` | Shown on the trigger when no option is selected                                      |
| `searchable`  | `boolean`                 | No       | `false`     | Whether the menu shows a search input to filter options, and results are highlighted |
| `value`       | `string`                  | Yes      | -           | The currently selected option's value                                                |

## State

| State           | Type                    | Initial value | Description                                                                                |
| --------------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| `isOpen`        | `boolean`               | `false`       | Whether the menu is shown                                                                  |
| `query`         | `string`                | `''`          | The current search text, used to filter options when `searchable`                          |
| `menuPlacement` | `MenuPlacement \| null` | `null`        | The portaled menu's screen position/size and inherited accent color, recomputed while open |

## Effects

- **On `isOpen` becoming true** — listens for clicks outside both the
  trigger and the portaled menu and closes the menu when one occurs
- **On `isOpen` or `searchable` changing** — focuses the search input
  when the menu opens and is searchable, otherwise resets `query`
- **On `isOpen` becoming true** — computes `menuPlacement` from the
  trigger's bounding rect and the trigger's computed `--accent-color`,
  since the portaled menu no longer inherits it through the DOM tree;
  recomputes on window resize/scroll while open

## Computations

- `selectedOption` — the option matching `value`, whose label is shown
  on the trigger
- `filteredOptions` — `options` filtered by `query` (case-insensitive
  substring match against each option's label) when `searchable` and
  `query` is non-empty, otherwise `options` unchanged
- `getHighlightedLabel` — an option's label with the substring matching
  `query` wrapped for accent-colored highlighting, when `searchable`
  and `query` is non-empty

## Handlers

- **On the trigger click** — toggles `isOpen`
- **On an option click** — calls `onChange` with that option's value
  and closes the menu
- **On the search input change** — sets `query`
