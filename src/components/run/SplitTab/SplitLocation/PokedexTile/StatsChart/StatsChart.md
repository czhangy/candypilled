# StatsChart

A labeled "Base Stats" section showing a Pokémon's base stats as a
horizontal bar chart, one row per stat, with a total base stat (BST)
count beneath the bars. Renders nothing at all (no label, no section)
when `stats` is unset. A stat whose key appears in `statChanges` (i.e. it
differs from vanilla for a game whose data is a vanilla-plus-overrides
diff) has its label and value colored pink instead of their normal
colors, rather than showing the actual delta inline.

## Props

| Prop          | Type                                        | Required | Default | Description                                                                                                                                   |
| ------------- | ------------------------------------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `stats`       | `StatValues \| undefined`                   | Yes      | -       | The Pokémon's base stats to chart                                                                                                             |
| `statChanges` | `Partial<Record<keyof StatValues, number>>` | No       | -       | Stats that differ from vanilla, keyed by stat; used only to decide which rows to highlight — the delta values themselves aren't rendered here |

## Computations

- `total` — the sum of all six stats, shown as the BST beneath the bars
- each row's bar width is scaled against 255, the highest base stat any
  Pokémon can have, so bars are comparable across different Pokémon
- `isChanged` — per row, whether that stat's key is present in
  `statChanges`, toggling the pink label/value modifier

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, used to fill each
  stat bar
