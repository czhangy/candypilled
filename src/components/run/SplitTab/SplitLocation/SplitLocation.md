# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content. The content is only
rendered when the location has a map; locations without one show no
expanded content. Selecting a trainer on the map surfaces its details in
a battle card alongside the map.

## Props

| Prop       | Type       | Required | Default | Description                     |
| ---------- | ---------- | -------- | ------- | ------------------------------- |
| `location` | `Location` | Yes      | -       | The location this card displays |

## State

| State             | Type      | Initial value | Description                                       |
| ----------------- | --------- | ------------- | ------------------------------------------------- |
| `isOpen`          | `boolean` | `false`       | Whether the location's content is expanded        |
| `selectedTrainer` | `Trainer` | `undefined`   | The trainer currently selected on the map, if any |

## Handlers

- **On header click** — toggles `isOpen`
- **On trainer marker click** — selects that trainer, or deselects it if
  already selected
