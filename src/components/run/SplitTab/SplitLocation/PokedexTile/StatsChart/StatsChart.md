# StatsChart

Renders a Pokemon's base stats as a horizontal bar chart, one row per
stat, with a total base stat (BST) count beneath the bars.

## Props

| Prop    | Type         | Required | Default | Description                       |
| ------- | ------------ | -------- | ------- | --------------------------------- |
| `stats` | `StatValues` | Yes      | -       | The Pokemon's base stats to chart |

## Computations

- `total` — the sum of all six stats, shown as the BST beneath the bars
- each row's bar width is scaled against 255, the highest base stat any
  Pokemon can have, so bars are comparable across different Pokemon

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, used to fill each
  stat bar
