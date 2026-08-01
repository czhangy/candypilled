# SpeciesListPanel

A panel listing Pokémon, shown alongside the Moves and Abilities
subtabs' detail panes — used for a move's "Learned By" list and an
ability's "Given To" list. Each row shows the Pokémon's box sprite and
name, and — for moves — the method by which it learns the move.
Clicking a row opens that Pokémon's Pokédex entry.

## Props

| Prop              | Type                     | Required | Default | Description                                                                                                                                                                 |
| ----------------- | ------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emptyMessage`    | `string`                 | Yes      | -       | Message shown when `entries` is empty                                                                                                                                       |
| `entries`         | `SpeciesListEntry[]`     | Yes      | -       | The Pokémon to list, sorted alphabetically; each entry's `moves` (present for the Moves subtab, absent for the Abilities subtab) determines whether a method label is shown |
| `onSelectSpecies` | `(slug: string) => void` | Yes      | -       | Called with a Pokémon's slug when its row is clicked                                                                                                                        |
| `title`           | `string`                 | Yes      | -       | The panel's header text (e.g. `"Learned By"` or `"Given To"`)                                                                                                               |

## Computations

- `getMethodLabel` — when an entry learns the move through more than one
  method, picks a single one to display by `METHOD_PRIORITY`
  (level-up, then machine, then tutor) and formats it via
  `MoveHelpers.getLearnsetMethodLabel`
