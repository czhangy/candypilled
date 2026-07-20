# TypeChart

A grid showing the damage multiplier of every attacking type against every
defending type, with each type labeled by its `TypeBadge` icon.

## Props

| Prop         | Type      | Required | Default | Description                                                                             |
| ------------ | --------- | -------- | ------- | --------------------------------------------------------------------------------------- |
| `isGen6Plus` | `boolean` | Yes      | -       | Whether to show the Gen 6+ chart (18 types) or the pre-Gen 6 chart (17 types, no Fairy) |

## Computations

- `types` — the list of types to render as rows/columns, from
  `TypeHelpers.getTypes(isGen6Plus)`. Excludes Fairy when `isGen6Plus` is
  `false`.
