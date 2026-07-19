# NaturesPage

The page for `/natures`. Shows the full nature pivot table: which nature
results from a given pair of increased/decreased stats.

## Computations

- `grid` — the 5x5 nature grid (rows are the increased stat, columns are
  the decreased stat), from `NatureHelpers.getNatureGrid`. Diagonal cells
  are neutral natures, shown with a distinct background.
- `selectedNature` — the nature selected via the `nature` query param
  (case-insensitive), parsed with `NatureHelpers.parseNature`.
- `selectedStats` — the increased/decreased stat pair for
  `selectedNature`, from `NatureHelpers.getNatureStats`. Used to
  highlight the corresponding row and column headers.

## Handlers

- **On a nature cell click** — toggles that nature as the selected
  `nature` query param via `router.replace`, deselecting it if it was
  already selected
