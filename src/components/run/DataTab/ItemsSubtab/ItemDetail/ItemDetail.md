# ItemDetail

Displays details for a single held item: its sprite, name, per-generation
description, and effect text. The content area scrolls internally past a
fixed maximum height rather than growing the page, with a styled
scrollbar matching the rest of the app.

## Props

| Prop         | Type             | Required | Default | Description                                              |
| ------------ | ---------------- | -------- | ------- | -------------------------------------------------------- |
| `dataSource` | `GameDataSource` | Yes      | -       | The game's item dataset, used to resolve the item's data |
| `generation` | `number`         | Yes      | -       | The game's generation, used to resolve the item's values |
| `itemSlug`   | `string`         | Yes      | -       | The selected item's slug                                 |

## Computations

- `itemData` — the selected item's data, resolved via `ItemHelpers`
- `values` — the selected item's values at `generation` (description text),
  resolved via `GenerationHelpers`
