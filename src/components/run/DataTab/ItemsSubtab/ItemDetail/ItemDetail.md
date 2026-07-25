# ItemDetail

Displays details for a single held item: its sprite, name, per-generation
description, and effect text. If no item is selected, a placeholder
message is shown instead. The content area scrolls internally past a
fixed maximum height rather than growing the page, with a styled
scrollbar matching the rest of the app.

## Props

| Prop         | Type     | Required | Default | Description                                              |
| ------------ | -------- | -------- | ------- | -------------------------------------------------------- |
| `generation` | `number` | Yes      | -       | The game's generation, used to resolve the item's values |
| `itemSlug`   | `string` | No       | -       | The selected item's slug, if any                         |

## Computations

- `itemData` — the selected item's data, resolved via `ItemHelpers`
- `values` — the selected item's values at `generation` (description text),
  resolved via `GenerationHelpers`
